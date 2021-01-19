

import { ClassInfo, FieldInfo } from '@quantleaf/query-sdk-node';



/**
 * This class defines simple Recipe class
 */

@ClassInfo({
    SV: 'Recept',
    EN: 'Recipes'
})
export class Recipe {

    @FieldInfo({
        SV: ['namn'],
        EN: ['name']
    })
    name: string;


    @FieldInfo({
        SV: ['tillagningstid'],
        EN: ['cooking time']
    })
    cookingTime: number;

    @FieldInfo({
        description: {
            SV: ['tidsenhet'],
            EN: ['time unit']
        },
        domain: {
            MINUTES:
            {
                SV: 'minuter',
                EN: 'minutes'
            },
            HOURS:
            {
                SV: 'timmar',
                EN: 'hours'
            },
            DAYS:
            {
                SV: 'dagar',
                EN: 'days'
            }
        }
    })
    cookingTimeUnit: string;


    @FieldInfo({
        description: 'region',
        domain: {
            NORWEGIAN:
            {
                SV: 'norsk',
                EN: 'norwegian'
            },
            SWEDISH:
            {
                SV: 'svensk',
                EN: 'swedish'
            },
            FINNISH:
            {
                SV: 'finsk',
                EN: 'finnish'
            },
            CENTRAL_ASIAN:
            {
                SV: 'central asiatiskt',
                EN: 'central asian'
            },
            WEST_ASIAN:
            {
                SV: 'väst asiatiskt',
                EN: 'west asian'
            },
            EAST_ASIAN:
            {
                SV: 'öst asiatiskt',
                EN: 'east asian'
            },
            NORTH_ASIAN:
            {
                SV: 'nord asiatiskt',
                EN: 'north asian'
            },
            SOUTH_ASIAN:
            {
                SV: 'syd asiatiskt',
                EN: 'south asian'
            },
            SOUTH_EAST_ASIAN:
            {
                SV: 'sydöst asiatiskt',
                EN: 'south east asian'
            },
            MIDDLE_EASTERN:
            {
                SV: 'mellanöstern',
                EN: 'middle eastern'
            },
            SOUTHERN_AFRICAN:
            {
                SV: 'sydafrikanst',
                EN: 'south african'
            },
            NORTH_AFRICAN:
            {
                SV: 'nordafrikanst',
                EN: 'north african'
            },
            EAST_AFRICAN:
            {
                SV: 'östafrikanst',
                EN: 'east african'
            },
            WEST_AFRICAN:
            {
                SV: 'västafrikants',
                EN: 'west african'
            },
            NORT_AMERICAN:
            {
                SV: 'nordamerikanskt',
                EN: 'north american'
            },
            SOUTH_AMERICAN:
            {
                SV: 'sydamerikanskt',
                EN: 'south american'
            },

        }
    })
    region: number;

    @FieldInfo({
        description: {
            SV: ['kryddighet'],
            EN: ['spiciness']
        },
        domain: {
            HOT:
            {
                SV: 'het',
                EN: 'hot'
            },
            MEDIUM:
            {
                SV: ['medium', 'lagom'],
                EN: 'medium'
            },
            MILD: 'mild'
        }
    })
    spiciness: string



    @FieldInfo({
        description: {
            SV: ['svårighetsgrad'],
            EN: ['difficulty']
        },
        domain: {
            HARD: {
                SV: 'svårt',
                EN: 'hard'
            },
            MODERATE: {
                SV: 'medelsvår',
                EN: 'moderate'
            },
            EASY: {
                SV: 'enkelt',
                EN: 'easy'
            }
        }
    })
    difficulty: string


    @FieldInfo({
        description: {
            SV: ['diettyp', 'kosthållning'],
            EN: ['diet type']
        },
        domain: {
            NON_VEGETARIAN: {
                SV: 'icke vegetarianskt',
                EN: 'non vegetarian'
            },
            VEGETARIAN: {
                SV: 'vegetarianskt',
                EN: 'vegetarian'
            },
            VEGAN:
            {
                SV: 'veganskt',
                EN: 'vegan'
            },
            PESCATARIAN: {
                SV: 'pescetariskt',
                EN: 'pescatarian'
            }
        }
    })
    dietType: string;

    @FieldInfo({
        description: {
            SV: ['rättyp'],
            EN: ['dish type']
        },
        domain: {
            APPETIZER: {
                SV: 'förrät',
                EN: 'appetizer'
            },
            MAIN_COUSRE: {
                SV: 'huvudrätt',
                EN: 'main course'
            },
            DESSERT:
            {
                SV: ['dessert', 'efterätt'],
                EN: ['dessert']
            },
            DRINK: 'drink'
        }
    })
    dishType: string;



    @FieldInfo({
        description: {
            SV: ['smaktyp'],
            EN: ['taste type']
        },
        domain: {
            FRUITY: {
                SV: 'fruktigt',
                EN: 'fruity'
            },
            SWEET: {
                SV: 'sött',
                EN: 'sweet'
            },
            SOUR:
            {
                SV: ['surt'],
                EN: ['sour']
            },
            SALTY:
            {
                SV: ['saltigt'],
                EN: ['salty']
            },
            BITTER:
            {
                SV: ['bitter'],
                EN: ['bitter']
            },
            SAVORY:
            {
                SV: ['umami'],
                EN: ['savory', 'umami']
            }
        }
    })
    tasteType: string;


    @FieldInfo({
        description: {
            SV: ['högtid'],
            EN: ['event']
        },
        domain: {
            NEW_YEAR: {
                SV: 'nyår',
                EN: 'new years'
            },
            CHRISTMAS: {
                SV: 'jul',
                EN: 'christmas'
            },
            MIDSUMMER:
            {
                SV: ['midsommar'],
                EN: ['midsummer']
            },
            EASTER:
            {
                SV: ['påsk'],
                EN: ['easter']
            }
        }
    })
    event: string;

    @FieldInfo({
        description: {
            SV: ['måltid'],
            EN: ['mealtime']
        },
        domain: {
            BREAKFAST: {
                SV: 'frukost',
                EN: 'breakfast'
            },
            LUNCH: {
                SV: 'lunch',
                EN: 'lunch'
            },
            DINNER:
            {
                SV: ['middag'],
                EN: ['dinner']
            },
            EVENING_SNACK:
            {
                SV: ['kvällsmat'],
                EN: ['evening snack']
            },
            NIGHT_FOOD:
            {
                SV: ['nattmat'],
                EN: ['night time']
            }
        }
    })
    mealTime: string;
}