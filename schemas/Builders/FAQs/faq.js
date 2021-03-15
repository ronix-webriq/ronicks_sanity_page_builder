import {FaQuestionCircle} from 'react-icons/fa'
export default {
    title: 'FAQ',
    name: 'faq',
    icon: FaQuestionCircle,
    type: 'object',
    fields: [
        {
            title: 'Question',
            name: 'question',
            type: 'string'
        },
        {
            title: 'Answer',
            name: 'answer',
            type: 'string'
        },        
    ]
}