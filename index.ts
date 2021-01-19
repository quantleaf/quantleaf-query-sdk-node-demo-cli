// Quantleaf Query imports
import { QueryResponse } from '@quantleaf/query-request'
import { ConditionCompare, ConditionOr, ConditionAnd, ConditionElement, Unknown } from '@quantleaf/query-result'
import { translate, config } from '@quantleaf/query-sdk-node'

// Schemas
import { AirplaneTicket, FerryTicket, TrainTicket } from './schemas/ticket';
import { Recipe } from './schemas/recipe';

// CLI 
import { cliLoop } from './cli-loop';

// Config API key
import * as dotenv from 'dotenv';
dotenv.config();
if(!process.env.API_KEY)
{
    console.error('\n\n--------> Missing API key, create an .env using .env.sample <------- \n\n');
    process.exit(1)
}

// Authorize your self to the Quantleaf Query SDK
config(process.env.API_KEY)


/**
 * You can manage the the search experience by modifying what schemas to search here
 */

// For a "Ticket shop", example "Buy a ticket from stockholm to rome for price less than 1000 bucks first class"
const SCHEMAS_TO_USE = [new TrainTicket(), new FerryTicket(), new AirplaneTicket()];

// Or for a "Recipe search", example "Easy east asian fruity dessert that takes less than 30 minutes to make for new years"

// const SCHEMAS_TO_USE = [new Recipe()];


// Setup how to handle incoming CLI input (the call back)
const inputCallback = async (input: string) => printAny(await handleSearchRequest(input));

// Start the CLI loop
const cliQuestion = 'Search on ' + SCHEMAS_TO_USE.map(schema => (schema as object).constructor.name).join(', ')
cliLoop(inputCallback, cliQuestion)





/**
 * The true output from the translation request is not that readable
 * hence we create this
 */
export interface ReadableResult {
    unknownReadable: string[];
    queryReadable: string[];
    suggestions: string[];
}

const printAny = (input: any) => {
    console.log(JSON.stringify(input,null,2));
}

/**
 * This function would correndspond to an REST endpoint, 
 * or just some backend code that is connected to the data
 * @param input 
 */

const handleSearchRequest = async (input: string): Promise<QueryResultReadable> => {
    // The translation, potentielly we retrieve some query
    const translatedQuery: QueryResponse = await translate(input, SCHEMAS_TO_USE, { query: {}, suggest: {} });

    /**
     *  We do not have any database connected,
     *  but if we had we would convert our translatedQuery
     *  into a database request here, and perform it.
     *  Now we just return the response to show it!
     */
    return convertToReadable(input, translatedQuery);
}

/**
 * A function to convert translation output to a 'readable' format
 * @param input 
 * @param response 
 */
const convertToReadable = (input:string, response: QueryResponse): QueryResultReadable => {
    return {
        query: getQueryResultReadable(response),
        suggestions: response.suggest?.map(s =>  s.text.trim()).slice(0,10).join(', '), 
        unknowns: response.unknown?.map(u=> `... ${input.slice(u.offset,u.offset + u.length)} ... `).join(', ')
    }
}


interface QueryResultReadable {
    query: string;
    suggestions: string;
    unknowns: string;
}


/**
 * This method transform the query into a string
 * Since a query can have conditions of infinite depth, 
 * this function will call a recursive inner 'stringify' function
 * @param result
 * @returns string representation
 */
const getQueryResultReadable = (result: QueryResponse): string => {
    const res = [];
    result.query.forEach((query) => {
        let inner = getQueryResultReadableRecursive(query.condition);
        if (inner.startsWith('(') && inner.endsWith(')')) {
            inner = inner.substring(1, inner.length - 1);
        }
        res.push('Look for ' + query.from.join(', ') + ' where ' + inner);
    })
    return res.join('. ');
}

/**
 * The condition can either be  
 * {
 *      and: [{}, ...]
 * },
 * {
 *      or: [{}, ...]
 * },
 * or 
 * {
 *      compare: {
 *          CONDITION PROPERTIES 
 *          
 *      }
 * }
 * 
 * (read about ConditionElement on https://github.com/quantleaf/query/blob/master/API.md for more info)
 * 
 * @param  condition 
 * @return string representation
 */
const getQueryResultReadableRecursive = (condition: ConditionElement): string => {

    // if AND array
    if ((condition as ConditionAnd).and) {
        const and = [];
        ((condition as ConditionAnd).and).forEach((element) => {
            and.push(getQueryResultReadableRecursive(element));
        });
        return `(${and.join(' and ')})`;
    }

    // if OR array
    if ((condition as ConditionOr).or) {
        const or = [];
        ((condition as ConditionOr).or).forEach((element) => {
            or.push(getQueryResultReadableRecursive(element));
        });
        return `(${or.join(' or ')})`;
    }

    // if the compare/condition 
    if ((condition as ConditionCompare).compare) {
        const compElements = [];
        const comp = (condition as ConditionCompare).compare;
        compElements.push(comp.key)

        if (comp.eq) {
            compElements.push(' = ' + comp.eq);
        }
        else if (comp.gt) {
            compElements.push(' > ' + comp.gt);
        }
        else if (comp.gte) {
            compElements.push(' ≥ ' + comp.gte);
        }
        else if (comp.lt) {
            compElements.push(' < ' + comp.lt);
        }
        else if (comp.lte) {
            compElements.push(' ≤ ' + comp.lte);
        }
        return compElements.join('');
    }
    return '';
}
