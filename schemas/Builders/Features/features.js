import {MdFeaturedPlayList} from 'react-icons/md'
export default {
    title: 'Features Section',
    name: 'features',
    icon: MdFeaturedPlayList,
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
            title: 'Add a Feature',
            name: 'feature',
            type: 'array',            
            of: [{type: 'feature'}],               
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
            title: 'Background Image',
            name: 'backgroundImage',
            type: 'array',
            validation: Rule => Rule.min(0).max(1),
            of: [{type: 'imageElement'}],
            options: {
                layout: 'grid'
            },           
        },  
        {
            title: 'Variant [Styling]',
            name: 'variant',
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
            title: 'title',
            media: 'mainImage',
            subtitle: 'description'
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