import {BiNews} from 'react-icons/bi'
export default {
    title: 'Newsletter Section',
    name: 'newsletter',
    icon: BiNews,
    type: 'object',
    fields: [
        {
            title: 'Title',
            name: 'newsletterTitle',
            type: 'string'
        },
        {
            title: 'Description',
            name: 'newsletterDescription',
            type: 'string'
        },      
        {                            
            title: 'Button Name',
            name: 'buttonName',
            type: 'string'
        },
        {
            title: 'Button Color',
            name: 'buttonColor',
            type: 'colorPicker'
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
    ],
    preview: {
        select: {            
            title: 'newsletterTitle',
            subtitle: 'newsletterDescription'
        },
        prepare(selection) {
            const {title, subtitle} = selection;
            return {           
                title: title,
                subtitle: subtitle
            }
        }
    }
}