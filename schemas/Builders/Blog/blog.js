import {FaBlogger} from 'react-icons/fa'
export default {
    title: 'Blog Section',
    name: 'blog',
    icon: FaBlogger,
    description: 'Use a blog section',
    type: 'object',
    fields: [
        {
            title: 'Blogs',
            name: 'blogs',
            type: 'array',
            of: [
                {
                    type: 'blogFeed'
                }
            ]
        }
    ],
    preview: {
        select: {                      
           
        },
        prepare(selection) {
            // const {title, alignment, media} = selection;
            return {                           
                title: 'Blogs',
                // subtitle: 'This will be used in your Header Section'unin
            }
        }
    }
}