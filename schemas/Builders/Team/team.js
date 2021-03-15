import {RiTeamFill} from 'react-icons/ri'
export default {
    title: 'Team Section',
    name: 'team',
    icon: RiTeamFill,
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
    ]
}