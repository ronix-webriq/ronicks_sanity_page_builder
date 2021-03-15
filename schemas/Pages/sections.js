import { GrStackOverflow } from 'react-icons/gr';

export default {
    type: 'object',
    name: 'sections',
    icon: GrStackOverflow,
    title: 'Page Sections',
    fields: [             
        {
            name: 'page_sections',
            type: 'reference',
            to: [{type: 'pageSections'}]
        }
    ],
     preview: {
        select: {            
            title: 'page_sections.pageSectionName',		          
        },
        prepare({title}) {                
            return {           
                title: title,
                // subtitle: 'Page Section'
            }
        }
    }
}