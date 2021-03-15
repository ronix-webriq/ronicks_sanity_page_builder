import {MdEmail} from 'react-icons/md'
export default  {
    title: 'Email',
    name: 'emailAddress',
    icon: MdEmail,
    type: 'object',
    fields: [
        {
            title: 'Email',
            name: 'email',
            type: 'string',
        }
    ],
    preview: {
        select: {                      
           subtitle: 'email'
        },
        prepare({subtitle}) {
            // const {title, alignment, media} = selection;
            return {                           
                title: 'Email Address',
                subtitle: subtitle
            }
        }
    }
}