
import {RiLinksFill} from "react-icons/ri";
export default {
    title: 'Links',
    name: 'links',
    icon: RiLinksFill,
    type: 'document',
    fields: [
        {
            title: 'Title',
            name: 'title',
            type: 'string'
        },
        {
            title: 'Paths',
            name: 'paths',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        {
                            title: 'Link Name',
                            name: 'link_name',
                            description: 'This will served as your Display Text in your webpage.',
                            type: 'string'
                        },
                        {
                            title: 'Link',
                            name: 'link',
                            description: 'This will set as anchor link on your Link Name',
                            type: 'string'
                        },
                        {
                            title: 'icon',
                            name: 'icon_link',
                            description: 'This will display beside your Link Name',
                            type: 'image'
                        },
                        {
                            title: 'Link Submenu',
                            name: 'link_submenu',
                            description: 'This Sub Menu is acting as a dropdown on your Link Name',
                            type: 'array',
                            of: [
                                {
                                    type: 'object',
                                    fields: [
                                        {
                                            title: 'Path Name',
                                            name: 'path_name',
                                            type: 'string'
                                        },
                                        {
                                            title: 'icon',
                                            name: 'icon_link_submenu',
                                            description: 'This will display beside your Path Name',
                                            type: 'image'
                                        },
                                        {
                                            title: 'Path',
                                            name: 'path',
                                            type: 'string'
                                        }
                                    ]
                                }
                            ]
                        },
                    ]
                }
            ]
        }
    ]
}