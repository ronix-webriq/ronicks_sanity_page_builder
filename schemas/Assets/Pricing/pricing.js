import { RiMoneyDollarCircleFill } from "react-icons/ri";

export default {
    title: 'Pricing',
    name: 'pricing',
    icon: RiMoneyDollarCircleFill,
    type: 'document',
    fields: [
        {
            title: 'Title',
            name: 'title',
            type: 'string'
        },
        {
            title: 'Prices',
            name: 'prices',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        {
                            title: 'Plan Name',
                            name: 'plan_name',
                            type: 'string'
                        },
                        {
                            title: 'Plan Price',
                            name: 'plan_price',
                            type: 'string'
                        },
                        {
                            title: 'Plan Description',
                            name: 'plan_description',
                            type: 'string'
                        },
                    ]
                }
            ]
        },
    ]
}