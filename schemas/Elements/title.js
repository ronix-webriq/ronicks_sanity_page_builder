import {MdTitle} from 'react-icons/md'
export default {
    title: 'Heading Title',
    name: 'title',
    icon: MdTitle,
    type: 'object',
    fields: [
        {
            title: 'Heading Style',
            name: 'headingStyle',
            type: 'string',
            options: {
                list: [
                    {
                        title: 'h1', value: 'h1'
                    },
                    {
                        title: 'h2', value: 'h2'
                    },
                    {
                        title: 'h3', value: 'h3'
                    },
                    {
                        title: 'h4', value: 'h4'
                    },
                    {
                        title: 'h5', value: 'h5'
                    },
                    {
                        title: 'h6', value: 'h6'
                    },
                ]
            }
        },
        {
            title: 'Display Title',
            name: 'displayTitle',
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
            title: 'displayTitle' ,
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