import {AiTwotonePhone} from 'react-icons/ai'
export default  {
    title: 'Landline',
    name: 'landline',
    icon: AiTwotonePhone,
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
           LandlineNumber: 'contactNumber'
        },
        prepare({LandlineNumber}) {
            // const {title, alignment, media} = selection;
            return {                           
                title: 'Landline',
                subtitle: LandlineNumber
            }
        }
    }
}