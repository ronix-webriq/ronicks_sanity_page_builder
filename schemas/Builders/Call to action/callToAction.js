import {GrTransaction} from 'react-icons/gr'
export default {
    title: 'Call To Action Section',
    name: 'callToAction',
    icon: GrTransaction,
    type: 'object',
    fields: [
        {
            title: 'Title',
            name: 'CTATitle',
            type: 'string'
        },
        {
            title: 'Description',
            name: 'CTADescription',
            type: 'string'
        }, 
        {
            title: 'Badge',
            name: 'CTABadge',
            type: 'string'
        },  
        {
            title: 'Main Image',
            name: 'mainImage',
            type: 'array',
            validation: Rule => Rule.min(0).max(1),
            of: [{type: 'imageElement'}],
            options: {
                layout: 'grid'
            },
           
        },  
        {
            title: 'Buttons Content',
            name: 'buttonsContent',
            type: 'array',
            of: [
                {type: 'button'}
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
    ],
    preview: {
        select: {            
            title: 'featureTitle',
            media: 'mainImage',
            subtitle: 'featureDescription'
        },
        prepare(selection) {
            const {title, media, subtitle} = selection;
            return {           
                media: media, 
                title: title,
                subtitle: subtitle
            }
        }
    }
}