import { RiPagesLine } from "react-icons/ri";
export default {
    title: 'Create a Page',
    name: 'pages',
    icon: RiPagesLine,
    type: 'document',
    fields: [     
        {
            title: 'Page Name',
            description: 'This will display in your navigation bar',
            name: 'page_name',
            type: 'string',
            validation: Rule => Rule.required(),
        },
        {
            title: 'Page Route',
            description: 'Add a route for your page.',
            name: 'pageRoute',
            type: 'reference',
            to: [{type: 'pageRoutes'}]
        },
        {
            title: 'Which Theme do you want to use this page?',
            name: 'useThisInTheme',            
            type: 'reference',
            to: [ {type: 'pageBuilder'}]
        },       
        {
            title: 'Add Page Section',
            description: 'This section display in your webpage on how you structure your Pages below',
            name: 'pageSection',
            validation: Rule => Rule.required().min(0).max(10),
            type: 'array',
            of: [ {type: 'sections'}]
        },            
    ],
    preview: {
        select: {            
            title: 'page_name',
            route: 'pageRoute.slug.current',
            useInTheme: 'useThisInTheme.themeName'       
        },
        prepare(selection) {
            const {title, route, useInTheme} = selection
            console.log(useInTheme)
            return {           
                title: title == undefined ? 'Add a Page Name' : `${title} | ${useInTheme}` ,
                subtitle: `Route: ${route}`
            }
        }
    }
}