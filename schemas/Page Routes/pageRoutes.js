import {FaRoute} from 'react-icons/fa'
export default {
    title: 'Page Routes',
    icon: FaRoute,
    name: 'pageRoutes',
    type: 'document',
    fields: [
        {
            title: 'Route Name',
            name: 'routeName',
            type: 'string'
        },
        {                            
            title: 'Generate Route',               
            name: 'slug',
            type: 'slug',
            validation: Rule => Rule.required(),
            options: {
                source: 'routeName',
                maxLength: 200, // will be ignored if slugify is set                
                slugify: input => input == "Home" || input == "Homepage" || input == "Landing Page"  ? '/' : input == "404" ? '/page-not-found' :'/'+input
                .toLowerCase()
                .replace(/\s+/g, '-')
                .slice(0, 200)
            }
        }, 
    ],
    preview: {
        select: {            
            title: 'routeName',
            route: 'slug.current',
        },
        prepare(selection) {
            const {title, route} = selection            
            return {           
                title: title == undefined ? 'Add a Page Name' : `${title}` ,
                subtitle: `Route: ${route}`
            }
        }
    }
}