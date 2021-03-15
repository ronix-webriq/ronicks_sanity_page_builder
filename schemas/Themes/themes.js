import {FcTemplate} from 'react-icons/fc'
export default {
    title: 'Theme',
    name: 'themes',
    type: 'document',
    icon: FcTemplate,
    // __experimental_actions: ['update', 'publish', 'create'], 
    fields: [
        {
            title: 'Choose a Predefined Theme',
            name: 'choosen_theme',
            description: 'Choose a Theme or Customized your own Theme in Theme Builder.',
            type: 'reference',
            to: [{type: 'pageBuilder'}],            
        },  
        {
            title: 'Select a framework',
            name: 'framework',
            type: 'string',
            options: {
                list: [
                    {title: 'Material UI', value: 'material_ui'},
                    {title: 'Bootstrap', value: 'bootstrap'},
                    {title: 'Tailwind CSS', value: 'tailwind_css'},
                    {title: 'Bulma', value: 'Bulma'},
                    {title: 'Ant Design', value: 'ant_design'},
                ]
            }
        },
        {
            title: 'Theme Color',
            name: 'theme_color',
            type: 'string',
            options: {
                list: [
                    {title: 'Red', value: 'red'},
                    {title: 'Light Blue', value: 'light_blue'},
                    {title: 'Dark Grey', value: 'dark_grey'},                    
                ]
            }
        }  
    ],
    preview: {
        prepare() {          
            return {
                title: 'Theme Selected',
                // subtitle: 'Customized your theme in Theme Builder'
            }
        }
    }
}