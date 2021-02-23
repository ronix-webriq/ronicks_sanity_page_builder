import { RiStarHalfSFill } from "react-icons/ri";
export default {
    title: 'Comments',
    name: 'comments',
    icon: RiStarHalfSFill,
    type: 'document',
    fields: [
        {
            title: 'Title',
            name: 'title',
            type: 'string'
        },
        {
            title: 'Persons',
            name: 'persons',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        {
                            title: 'Name',
                            name: 'name',
                            type: 'string'
                        },
                        {
                            title: 'Company or Job Title',
                            name: 'company_or_job_title',
                            type: 'string'
                        },
                        {
                            title: 'Profile Image',
                            name: 'profile_image',
                            type: 'image'
                        },
                        {
                            title: 'Review or Comments',
                            name: 'review_or_comment',
                            type: 'string'
                        },
                    ]
                }
            ]
        }
    ]
}