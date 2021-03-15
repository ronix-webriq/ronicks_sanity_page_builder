import {ImPriceTags} from 'react-icons/im'
export default {
    title: 'Pricing Section',
    name: 'price',
    icon: ImPriceTags,
    type: 'object',
    fields: [
        {
            title: 'Plan Type / Name',
            name: 'planType',
            type: 'string'
        },       
        {
            title: 'Price',
            name: 'planPrice',
            type: 'number'
        },
        {
            title: 'Plan Usage',
            name: 'planUsage',
            type: 'string',
            options: {
                list: [
                    {
                        title: 'User Per Month', value: 'user_per_month'
                    },
                    {
                        title: 'User Per Year', value: 'user_per_year'
                    },
                    {
                        title: 'Per Month', value: 'per_month'
                    },
                    {
                        title: 'Per Year', value: 'per_year'
                    }
                ]
            }
        },
        {
            title: 'Plan Includes',
            name: 'planIncludes',
            type: 'array',
            of: [
                {type: 'planIncludes'}
            ]
        },
        {
            title: 'Buttons',
            name: 'button',
            type: 'array',
            of: [{type: 'button'}]
        },
    ]
}