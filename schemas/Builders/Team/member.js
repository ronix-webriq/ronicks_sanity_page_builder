import {IoPersonCircleSharp} from 'react-icons/io'
export default {
    title: 'Member',
    name: 'member',
    icon: IoPersonCircleSharp,
    type: 'object',
    fields: [
        {
            title: 'Full Name',
            name: 'name',
            type: 'string'
        },
        {
            title: 'Job Title',
            name: 'jobTitle',
            type: 'string'
        },
        {
            title: 'Job Description',
            name: 'jobDescription',
            type: 'string'
        },
        {
            title: 'Image',
            name: 'profileImage',
            type: 'image',
            options: {
                hotspot: true
            }
        }
    ],
    preview: {
        select: {  
            name: 'name',
            jobTitle: 'jobTitle' ,
            media: 'profileImage'               
        },
        prepare({name, jobTitle, media}) {           
            return {   
                media: media,                        
                title: name,
                subtitle: jobTitle
            }
        }
    }
}