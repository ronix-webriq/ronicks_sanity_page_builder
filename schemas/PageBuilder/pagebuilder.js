import { object } from 'prop-types';
import { RiListSettingsLine } from 'react-icons/ri';
export default {
	title: 'Page Builder',
	icon: RiListSettingsLine,
	name: 'pagebuilder',
	type: 'document',
	fields: [
		{
			title: 'Title',
			name: 'title',
			type: 'string',
		},
		{
			title: 'Headers',
			name: 'headers',
			type: 'array',
			of: [
				{
					type: 'object',
					fields: [
                        {
                            title: 'Title',
                            name: 'title',
                            type: 'string',
                        },
                        {
                            title: 'Header Section',
                            name: 'header_section',
                            type: 'reference',
                            to: [
                                {
                                    type: 'sections'
                                }
                            ]
                        },
                        {
                            title: 'Alignment',
                            name: 'alignment',
                            type: 'string',
                            options: {
                                list: [
                                    {
                                        title: 'Left', value: 'left'
                                    },
                                    {
                                        title: 'Center', value: 'center'
                                    },
                                    {
                                        title: 'Right', value: 'right'
                                    },
                                    {
                                        title: 'Space-Between (Logo and Menu)', value: 'space_between'
                                    },
                                    {
                                        title: 'None', value: 'none'
                                    }
                                ], layout: 'radio'
                            }
                        }
                    ],
				},
			],
		},
        {
            title: 'Sections',
            name: 'sections',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        {
                            title: 'Title',
                            name: 'title',
                            type: 'string'
                        },
                        {
                            title: 'Choose a Section',
                            name: 'section_styling',
                            type: 'reference',
                            to: [
                                {
                                    type: 'sections'
                                }
                            ]
                        },
                        {
                            title: 'Alignment',
                            name: 'alignment',
                            type: 'string',
                            options: {
                                list: [
                                    {
                                        title: 'Left', value: 'left'
                                    },
                                    {
                                        title: 'Center', value: 'center'
                                    },
                                    {
                                        title: 'Right', value: 'right'
                                    },
                                    {
                                        title: 'Grid', value: 'grid'
                                    },
                                    {
                                        title: 'Grid (Title)', value: 'grid_with_title'
                                    },
                                    {
                                        title: 'None', value: 'none'
                                    }
                                ], layout: 'radio'
                            }
                        }
                    ]
                }
            ]
        },
        {
            title: 'Footer',
            name: 'footer',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        {
                            title: 'Title',
                            name: 'title',
                            type: 'string',
                        },
                        {
                            title: 'Choose a Section for Footer',
                            name: 'footer_section',
                            type: 'reference',
                            to: [
                                {
                                    type: 'sections'
                                }
                            ]
                        },
                        {
                            title: 'Alignment',
                            name: 'alignment',
                            type: 'string',
                            options: {
                                list: [
                                    {
                                        title: 'Left', value: 'left'
                                    },
                                    {
                                        title: 'Center', value: 'center'
                                    },
                                    {
                                        title: 'Right', value: 'right'
                                    },
                                    {
                                        title: 'Grid', value: 'grid'
                                    },
                                    {
                                        title: 'Grid (Title)', value: 'grid_with_title'
                                    },
                                    {
                                        title: 'None', value: 'none'
                                    }
                                ], layout: 'radio'
                            }
                        }
                    ]
                }
            ]
        }
	],
};
