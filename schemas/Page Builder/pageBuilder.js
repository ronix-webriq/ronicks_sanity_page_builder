import { BiWrench } from "react-icons/bi";
export default {
    title: 'Theme Builder',
    name: 'pageBuilder',
    type: 'document',
    icon: BiWrench,  
    fields : [
        {
            title: 'Theme Name',
            name: 'themeName',
            type: 'string'
        },        
        {
            title: 'Pages - [Main Navigation]',
            description: 'Add pages for your theme [Links already provided by each page].',            
            name: 'pages',
            type: 'array', 
            of: [
               {
                type: 'reference',
                to: [{type: 'pages'}]
               }
            ]
        },  
        {
            title: 'Navigation Style',
            name: 'style',
            type: 'style'
        },                 
    ]
}