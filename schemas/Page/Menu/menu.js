import {RiMenuAddFill} from "react-icons/ri";
export default {
    title: 'Menu',
    name: 'menu',
    icon: RiMenuAddFill,
    type: 'document',
    fields: [
        {
            title: 'Menu Styling',
            name: 'menu_styling',
            type: 'string',
        },
        {
            title: 'Company Logo',
            description: 'Upload your Company Logo below.',
            name: 'company_logo',
            type: 'image'
        },
        {
            title: 'Bacground Color',
            description: 'Background Color for your Navigation Menu e.g. ("#F2F2F2", "rgb(0, 0, 0, 0)" or lightgray)',
            name: 'bgColor',
            type: 'string'
        },        
        {
            title: 'Links',
            name: 'links',
            type: 'reference',
            to: [
                {
                    type: 'links'
                }
            ]
        }
    ]
}