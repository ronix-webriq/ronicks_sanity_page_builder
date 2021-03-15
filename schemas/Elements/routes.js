import {FaRoute} from 'react-icons/fa'
export default {
    title: 'Page Routes',
    icon: FaRoute,
    name: 'routes',
    type: 'object',
    fields: [
        {
            title: 'Routes',
            description: 'This route must be matched with your Theme Builder [Pages] to avoid Page Not Found.',
            name: 'routeName',
            type: 'array',
            of: [{type: 'reference', to: [{type: 'pageRoutes'}]}]
        },  
        {
            title: 'Style',
            name: 'style',
            type: 'style'           
        },      
    ],
    preview: {
        select: {                     
            style: 'style',
        },
        prepare(selection) {
            const {style} = selection            
            return {           
                title: 'Main Routes',
                subtitle: `Style: ${style}`
            }
        }
    }
}