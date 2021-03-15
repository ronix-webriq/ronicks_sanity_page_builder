import { GrStackOverflow } from 'react-icons/gr';

export default {
    type: 'object',
    name: 'feature',
    // icon: GrStackOverflow,
    title: 'Feature',
    fields: [
        {
            title: 'Title',
            // desciprtion: 'Give your section a Title so you can easily identify which reusable content you are using.',
            name: 'title',
            type: 'string'
        },  
        {
            title: 'Description',
            // desciprtion: 'Give your section a Title so you can easily identify which reusable content you are using.',
            name: 'description',
            type: 'string'
        },     
        {
            title: 'Add Image or Icon',
            name: 'ImageOrIcon',
            type: 'image',        
            options: {
                hotspot: true
            },  
        }
    ]
    ,
     preview: {
        select: {            
            title: 'title',	
            media: 'ImageOrIcon',
            description: 'description',          
        },
        prepare({title, media, description}) {                        
            return {           
                media: media,           
                title: title,
                subtitle: description
            }
        }
    }
}