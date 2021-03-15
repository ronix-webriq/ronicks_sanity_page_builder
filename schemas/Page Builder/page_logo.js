import { BsFillImageFill } from "react-icons/bs";
export default {
    title: 'Page Logo',
    icon: BsFillImageFill,
    name: 'page_logo',
    type: 'object',
    fields: [
        {
            title: 'Logo',
            name: 'logo',
            type: 'image'
        }
    ],
    preview: {
        select: {  
            media: 'logo',                     
        },
        prepare(selection) {
            const {media} = selection;         
            return { 
                media: media             
            }
        }
    }            
}