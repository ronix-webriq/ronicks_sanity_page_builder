import {FaBlogger} from 'react-icons/fa'
export default {
    title: 'Blog Feeds',
    name: 'blogFeed',
    icon: FaBlogger,
    type: 'object',
    fields: [
        {
            title: 'Title',
            name: 'title',
            type: 'string'
        },
        {
            title: 'Desciption',
            name: 'description',
            type: 'string'
        },
        {
            title: 'Date',
            name: 'date',
            type: 'date'
        },
        {
            title: 'Image',
            name: 'mainImage',
            type: 'image',
            options: {
                hotspot: true
            }
        },
        {
            title: 'body content',
            name: 'bodyContent',
            type: 'blockContent',          
        },
    ]
}