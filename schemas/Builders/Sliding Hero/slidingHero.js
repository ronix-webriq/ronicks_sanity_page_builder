import {AiOutlineColumnWidth} from 'react-icons/ai'
export default {
    title: 'Sliding Hero Section',
    name: 'slidingHero',
    icon: AiOutlineColumnWidth,
    type: 'object',
    fields: [              
        {
            title: 'Add Slider',
            name: 'slider',
            type: 'array',
            of: [
                {type: 'slider'}
            ],
            validation: Rule => Rule.required().min(0).max(1),
        },         
    ],
    preview: {
        select: {  
            title: 'slider',                    
            media: 'bgImageCover'
        },
        prepare(selection) {
            const {media} = selection;
            return {           
                // media: media, 
                title: `Slider Hero`,
                subtitle: 'This will be used in your Header Section'
            }
        }
    }
}