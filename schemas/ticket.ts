import { ClassInfo, FieldInfo } from '@quantleaf/query-sdk-node';
import { EnumDomain, StandardDomain } from '@quantleaf/query-schema';

/**
 * In this file 3 ticket type classes are defined. AirplaneTicket, TrainTicket and FerryTicket.
 * All classes extends the super Ticket class which provide common fields for all of them
 * AirplaneTicket and TrainTicket class is extending the ClassTicket class,
 * In this class provides the 'seat class' field, which does not exist for the ferrys
 */


const locations: EnumDomain = {
    AMSTERDAM: 'Amsterdam',
    ATHENS: {
        SV: 'Aten',
        EN: 'Athens'
    },
    BELGRADE: {
        SV: 'Belgrad',
        EN: 'Belgrade'
    },
    BERLIN: 'Berlin',
    COPENHAGEN: {
        SV: 'Köpenhamn',
        EN: 'Copenhagen'
    },
    DUBLIN: 'Dublin',
    GIBRALTAR: 'Gibraltar',
    HELSINKI: 'Helsinki',
    KYIV: 'Kyiv',
    MADRID: 'Madrid',
    OSLO: 'Oslo',
    PARIS: 'Paris',
    REYKJAVÍK: 'Reykjavík',
    RIGA: 'Riga',
    ROME:
    {
        SV: 'Rom',
        EN: 'Rome'
    },
    CITY_OF_SAN_MARINO: 'San Marino',
    STOCKHOLM: 'Stockholm',
}

export class Ticket {
    @FieldInfo(
        {
            description: {
                SV: ['pris'],
                EN: ['price']
            }
        }
    )
    public price: number;

    @FieldInfo({
        description: {
            SV: ['från'],
            EN: ['from', 'departure location']
        },
        domain: locations
    })
    public departureLocation: string;

    @FieldInfo({
        description: {
            SV: ['till', 'destination'],
            EN: ['to', 'arrival location', 'destination']
        },
        domain: locations
    })
    public arrivalLocation: string;


    @FieldInfo({
        description: {
            SV: ['från', 'avgångsdatum'],
            EN: ['from', 'departure date']
        },
        domain: StandardDomain.DATE
    })
    public departureDate: Date;


    @FieldInfo({
        description: {
            SV: ['återresa'],
            EN: ['return date']
        },
        domain: StandardDomain.DATE
    })
    public returnDate: Date;


    @FieldInfo({
        description: {
            EN: ['currency'],
            SV: ['valuta']
        },
        domain: {
            SEK: ['SEK', 'kronor'],
            USD:
            {
                EN: ['USD', 'dollar', 'bucks'],
                SV: ['USD', 'dollar']
            }
        }
    })
    public currency: string;

    @FieldInfo({
        SV: ['passagerare', 'antal resande'],
        EN: ['passengers', 'number of passangers']
    })
    numberOfTravelers: number;

}
export class ClassTicket extends Ticket {

    @FieldInfo({
        description: {
            SV: ['klass', 'sätes typ'],
            EN: ['class', 'seat']
        },
        domain:
        {
            'ECONOMY':
            {
                SV: ['ekonomi'],
                EN: ['economy']
            },
            'BUSINESS':
            {
                SV: ['business', 'affärs resa'],
                EN: ['business']
            },
            'FIRST_CLASS':
            {
                SV: ['första klass'],
                EN: ['first class'],
            }
        }

    })
    seatType: string;
}
@ClassInfo({
    description: {
        SV: 'Flygbiljett',
        EN: 'Airplane ticket'
    }
})
export class AirplaneTicket extends ClassTicket { }

@ClassInfo({
    description: {
        SV: 'Färjabiljett',
        EN: 'Ferry ticket'
    }
})
export class FerryTicket extends Ticket {
    @FieldInfo({
        description: {
            SV: ['fordon'],
            EN: ['vehicle']
        },
        domain:
        {
            'NONE':
            {
                SV: ['Inget fordon'],
                EN: ['No vehicle']
            },
            'CAR':
            {
                SV: ['Bil'],
                EN: ['Car']
            },
            'BICYCLE':
            {
                SV: ['Cykel'],
                EN: ['Bicycle'],
            }
        }

    })
    vehicle: string;
}

@ClassInfo({
    description: {
        SV: 'Tågbiljett',
        EN: 'Train ticket'
    }
})
export class TrainTicket extends ClassTicket { }