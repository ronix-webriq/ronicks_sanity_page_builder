import { BsFillImageFill } from "react-icons/bs";
export default {
    title: 'Image | Icon',
    name: 'imageElement',
    icon: BsFillImageFill,
    type: 'object',
    fields: [
        {
            title: 'Image',
            name: 'imageElement',
            type: 'image'
        },
        {
            title: 'Set Image as',
            name: 'imageStyle',
            type: 'string',
            options: {
                list: [
                    {title: 'Webpage Logo', value: 'Webpage Logo'},
                    {title: 'Background Image', value: 'Background Image'},
                    {title: 'Main Image', value: 'Main Image'},
                    {title: 'Icon', value: 'Icon'},
                ]
            }
        },
        {
            title: 'Style',
            name: 'style',
            type: 'style',          
        },
    ],
    preview: {
        select: {  
            title: 'imageStyle',
            media: 'imageElement',   
            style: 'style'                  
        },
        prepare(selection) {
            const {title, media, style} = selection;         
            return { 
                media: media,
                title: title,
                subtitle: 'Style: '+ style           
            }
        }
    }            
}