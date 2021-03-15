import {BsBlockquoteLeft} from 'react-icons/bs'
export default {
    title: 'Block Contents',
    name: 'block_contents',
    icon: BsBlockquoteLeft,
    type: 'object',
    fields: [
        // {
        //     title: 'Type of Section',
        //     name: 'blockContentType',
        //     type: 'string',
        //     options: {
        //         list: [
        //             {title: 'Title with Link', value: 'Title with Link'},
        //             {title: 'Title with Link', value: 'Title with Link'},
        //         ]
        //     }
        // },
        {
            title: 'Block Contents',
            name: 'block_contents',
            type: 'blockContent',
        }
    ],
    preview: {        
        prepare() {    
            return { 
                title: 'Block Content',
                // subtitle: `Title Style: ${style}`          
            }
        }
    }   
}