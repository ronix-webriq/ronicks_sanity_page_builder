import {BiLink} from 'react-icons/bi'
export default {
    title: 'Link',
    name: 'links',
    icon: BiLink,
    type: 'object',
    fields: [  
        {
            title: 'Link Name',            
            name: 'linkName',
            type: 'string',
        },

        {
            title: 'Link',
            description: 'Can be Link from other source',
            name: 'link',
            type: 'url',
        }           
    ],
    preview: {
        select: {          
            title: 'linkName' ,
            link: 'link'            
        },
        prepare({title, link}) {    
            return { 
                title: title,
                subtitle: `Link: ${link}`         
            }
        }
    }            
}