import {FaQuestionCircle} from 'react-icons/fa'
export default {
    title: 'FAQs Section',
    name: 'faqs',
    icon: FaQuestionCircle,
    type: 'object',
    fields: [
        {
            title: 'Title',
            name: 'title',
            type: 'string'
        },
        {
            title: 'Description',
            name: 'description',
            type: 'string'
        },
        {
            title: 'Use Image',
            name: 'faqImage',
            type: 'array',
            validation: Rule => Rule.min(0).max(1),
            of: [{type: 'imageElement'}],
            options: {
                layout: 'grid'
            },
           
        },   
        {
            title: 'FAQ',
            name: 'faq',
            type: 'array',
            of: [
                {type: 'faq'}
            ]
        },
        {
            title: 'Variant [Styling]',
            name: 'heroVariant',
            type: 'string',
            options: {
                list: [
                    {
                        title: 'Variant A', value: 'variant_a'
                    },
                    {
                        title: 'Variant B', value: 'variant_b'
                    },
                    {
                        title: 'Variant C', value: 'variant_c'
                    },
                    {
                        title: 'Variant D', value: 'variant_d'
                    },
                    {
                        title: 'Variant E', value: 'variant_e'
                    }
                ]
            }
        }  
    ]
}