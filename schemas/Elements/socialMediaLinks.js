import {TiSocialFacebookCircular} from 'react-icons/ti'
export default {
    title: 'Social Media Links',
    name: 'socialMediaLinks',
    icon: TiSocialFacebookCircular,
    type: 'object',
    fields: [        
        {
            title: 'Facebook',
            name: 'fb',
            type: 'url',           
        },
        {
            title: 'Twitter',
            name: 'twitter',
            type: 'url',           
        },
        {
            title: 'Instagram',
            name: 'instagram',
            type: 'url',           
        },
        {
            title: 'Youtube',
            name: 'youtube',
            type: 'url',           
        },
        {
            title: 'LinkedIn',
            name: 'linkedIn',
            type: 'url',           
        },
        {
            title: 'GooglePlus',
            name: 'google',
            type: 'url',           
        },
        {
            title: 'Github',
            name: 'github',
            type: 'url',           
        },
        {
            title: 'Style',
            name: 'style',
            type: 'style',  
        }
    ],
    preview: {
        select: {          
            style: 'style'             
        },
        prepare({style}) {    
            return { 
                title: 'Social Media Links',
                subtitle: `Style: ${style}`          
            }
        }
    }            
}