import {BiParagraph} from 'react-icons/bi'
export default {
    title: 'Text Field',
    name: 'textField',
    icon: BiParagraph,
    type: 'object',
    fields: [        
        {
            title: 'Textfield Style',
            name: 'style',
            type: 'string',
            options: {
                list: [
                    {
                        title: 'Left', value: 'left'
                    },
                    {
                        title: 'Center', value: 'center'
                    },
                    {
                        title: 'Right', value: 'right'
                    },                   
                ]
            }
        },
    ],
    preview: {
        select: {          
            style: 'style'             
        },
        prepare({style}) {    
            return { 
                title: 'Text Field',
                subtitle: `Title Style: ${style}`          
            }
        }
    }            
}