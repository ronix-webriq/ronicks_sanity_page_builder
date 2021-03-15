import {FaMobileAlt} from 'react-icons/fa'
export default  {
    title: 'Phone',
    name: 'phone',
    icon: FaMobileAlt,
    type: 'object',
    fields: [
        {
            title: 'Contact Number',
            name: 'contactNumber',
            type: 'number',
        }
    ],
    preview: {
        select: {                      
           phoneNumber: 'contactNumber'
        },
        prepare({phoneNumber}) {
            // const {title, alignment, media} = selection;
            return {                           
                title: 'Mobile Phone',
                subtitle: phoneNumber
            }
        }
    }
}