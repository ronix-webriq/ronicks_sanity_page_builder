import {AiOutlineComment} from 'react-icons/ai'
export default {
    title: 'Testimonials Section',
    name: 'testimonials',
    icon: AiOutlineComment,
    type: 'object',
    fields: [
        // {
        //     title: 'Title',
        //     name: 'title',
        //     type: 'string'
        // },
        // {
        //     title: 'Descriptiion',
        //     name: 'descriptiion',
        //     type: 'string'
        // },
        // {
        //     title: 'Badge',
        //     name: 'badge',
        //     type: 'string'
        // },
        {
            title: 'Testimonial',
            name: 'testimonial',
            type: 'array',
            of: [
                {
                    type: 'testimonial'
                }
            ],
            options: {
                layout: 'grid'
            }
        },
        // {
        //     title: 'Buttons',
        //     name: 'buttons',
        //     type: 'array',
        //     of: [
        //         {
        //             type: 'button'
        //         }
        //     ]
        // },
        // {
        //     title: 'Variant [Styling]',
        //     name: 'heroVariant',
        //     type: 'string',
        //     options: {
        //         list: [
        //             {
        //                 title: 'Variant A', value: 'variant_a'
        //             },
        //             {
        //                 title: 'Variant B', value: 'variant_b'
        //             },
        //             {
        //                 title: 'Variant C', value: 'variant_c'
        //             },
        //             {
        //                 title: 'Variant D', value: 'variant_d'
        //             },
        //             {
        //                 title: 'Variant E', value: 'variant_e'
        //             }
        //         ]
        //     }
        // }  
        {
            title: 'Style',
            name: 'style',
            type: 'style'
        },  
    ],
    preview: {
        select: {          
            style: 'style'             
        },
        prepare({style}) {    
            return { 
                title: 'Testimonials',
                subtitle: `Style: ${style}`          
            }
        }
    }    
}