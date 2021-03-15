import {GrContactInfo} from 'react-icons/gr'
export default {
    title: 'Contact Section',
    name: 'contact',
    icon: GrContactInfo,
    type: 'object',
    fields: [
        // {
        //     title: 'Title',
        //     name: 'title',
        //     type: 'string'
        // },
        // {
        //     title: 'Description',
        //     name: 'description',
        //     type: 'string'
        // },
        // {
        //     title: 'Address',
        //     name: 'address',
        //     type: 'string',           
        // },
        {
            title: 'Contact Type',
            name: 'contactType',
            type: 'array',
            of: [
                {type: 'phone'},
                {type: 'landline'},
                {type: 'emailAddress'}
            ]
        },
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
    ],
    preview: {
        select: {                      
        },
        prepare() {
            // const {title, alignment, media} = selection;
            return {                           
                title: 'Contact Information',
                // subtitle: phoneNumber
            }
        }
    }
}