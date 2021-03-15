import {AiOutlineColumnWidth} from 'react-icons/ai'
export default {
    title: 'Slider',
    name: 'slider',
    icon: AiOutlineColumnWidth,
    type: 'object',
    fields: [  
        {
            title: 'Title',
            name: 'sliderTitle',
            type: 'string'
        },
        {
            title: 'Description',
            name: 'sliderDescription',
            type: 'string'
        },
        {
            title: 'Slider Image',
            name: 'sliderImage',
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
            title: 'Background Image',
            name: 'backgroundImage',
            type: 'array',
            validation: Rule => Rule.min(0).max(1),
            of: [{type: 'imageElement'}],
            options: {
                layout: 'grid'
            },
           
        },         
    ],
    preview: {
        select: {                      
            media: 'bgImageCover'
        },
        prepare(selection) {
            const {title, alignment, media} = selection;
            return {           
                media: media, 
                title: 'Slider Section',
                subtitle: 'This will be used in your Header Section'
            }
        }
    }
}