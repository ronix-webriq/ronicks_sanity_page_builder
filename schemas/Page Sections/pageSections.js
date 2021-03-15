import { GrStackOverflow } from 'react-icons/gr';
export default {
	title: 'Page Sections',
	name: 'pageSections',
	icon: GrStackOverflow,
	   __experimental_actions: ['update', 'publish', 'create'], 
	type: 'document',
	fields: [
		{
			title: 'Page Section Name',
			name: 'pageSectionName',
			type: 'string',
		},
		{
			title: 'Use Background Color',
			name: 'sectionBackgroundColor',
			type: 'colorPicker',
		},
		{
            title: 'Which Theme do you want to use this page?',
            name: 'useThisInTheme',            
            type: 'reference',
            to: [ {type: 'pageBuilder'}]
        },   
		{
			title: 'Create a Page Section',
			description: 'This will be the content and structure of your page',
			name: 'section',
			type: 'array',
			of: [
				{
					type: 'title',
				},
				{
					type: 'paragraph',
				},
				{
					type: 'imageElement',
				},
				{
					type: 'tables'
				},
				{
					type: 'links',
				},
				{
					type: 'routes',
				},
				{
					type: 'socialMediaLinks',
				},
				{
					type: 'button',
				},
				{
					type: 'block_contents',
				},
				{
					type: 'blog',
				},
				
				{
					type: 'contact',
				},								
				{
					type: 'pricing',
				},
				
				
				{
					type: 'team',
				},
				{
					type: 'testimonials',
				},
				

				// {
				// 	type: 'hero',
				// },
				// {
				// 	type: 'features',
				// },

				// {
				// 	type: 'newsletter',
				// },

				// {
				// 	type: 'portfolio',
				// },
				// {
				// 	type: 'faqs',
				// },

				// {
				// 	type: 'callToAction',
				// },

				// {
				// 	type: 'stats',
				// },
				// {
				// 	type: 'footers',
				// }
			],
			options: {
				// layout: 'grid'
			},
		},
	],
	preview: {
		select: {
			title: 'pageSectionName',
			useInTheme: 'useThisInTheme.themeName'
		},
		prepare({ title, useInTheme }) {
			return {
				title: `${title} | ${useInTheme}`,
				subtitle: 'Page Section can be used to create a Page',
			};
		},
	},
};
