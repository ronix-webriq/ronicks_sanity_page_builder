import {BiParagraph} from 'react-icons/bi'
export default {
    title: 'Paragraph',
    name: 'paragraph',
    icon: BiParagraph,
    type: 'object',
    fields: [        
        {
            title: 'Display Paragraph',
            name: 'displayParagraph',
            type: 'string'
        },
        {
            title: 'Style',
            name: 'style',
            type: 'style',          
        },
    ],
    preview: {
        select: {  
            title: 'displayParagraph' ,
            style: 'style'             
        },
        prepare({title, style}) {    
            return { 
                title: title,
                subtitle: `Style: ${style}`          
            }
        }
    }            
}