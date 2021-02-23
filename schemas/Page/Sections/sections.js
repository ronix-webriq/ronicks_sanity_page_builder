import { RiStackLine } from "react-icons/ri";
export default {
    title: 'Sections',
    icon: RiStackLine,
    name: 'sections',    
    type: 'document',
    fields: [
        {
            title: 'Title',
            name: 'title',
            type: 'string'
        },
        {
            title: 'Background Image',
            name: 'background_image',
            description: 'Upload an Image, if your Section is using Background Image. (1920x1080p)',
            type: 'image'
        },
        {
            title: 'Background Color',
            name: 'background_color',
            description: 'You can use Hex Code, color name or even RGB to have your background color.',
            type: 'string'
        },
        {
            title: 'Heading Title',
            name: 'heading_title',
            description: 'This title will display in front of your background image.',
            type: 'string'
        },
        {
            title: 'icons',
            name: 'icons',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        {
                            title: 'Icon Image',
                            name: 'icon_image',
                            desciption: 'Recommended Image must be .PNG',
                            type: 'image',
                        },
                        {
                            title: 'Heading Title',
                            name: 'heading_title',
                            desciption: 'This Title will display below or above your image icon.',
                            type: 'string',
                        },
                        {
                            title: 'Description',
                            name: 'description',
                            desciption: 'This description will display below or above your image icon.',
                            desciption: 'Recommended Image must be .PNG',
                            type: 'string',
                        },
                    ]
                }
            ]
        },     
        {
            title: 'Section Content',
            name: 'section_content',
            type: 'blockContent'
        },
        // {
        //     title: 'Heading Title',
        //     name: 'heading_title',
        //     description: 'This title will display in front of your background image.',
        //     type: 'string'
        // },
        // {
        //     title: 'Image Content',
        //     name: 'image_content',
        //     description: 'This image will display above your background image and served as a content of that section.',
        //     type: 'image'
        // },           
        // {
        //     title: 'Description',
        //     name: 'description',
        //     description: 'This title will display above your background image, and below your Heading Title.',
        //     type: 'string'
        // },
        // {
        //     title: 'Caption',
        //     name: 'caption',
        //     description: 'This title will display below your description.',
        //     type: 'string'
        // },
        {
            title: 'Menu and Links',
            name: 'menu_and_links',                            
            type: 'reference',
            to: [
                {
                    type: 'menu'
                }
            ]
        },
        {
            title: 'Gallery',
            name: 'gallery',                            
            type: 'reference',
            to: [
                {
                    type: 'gallery'
                }
            ]
        },
        {
            title: 'Reviews or Comments',
            name: 'reviews_or_comments',                            
            type: 'reference',
            to: [
                {
                    type: 'comments'
                }
            ]
        },
        {
            title: 'Plans and Pricing',
            name: 'plans_and_pricing',                            
            type: 'reference',
            to: [
                {
                    type: 'pricing'
                }
            ]
        },
        {
            title: 'TextField',
            name: 'textField',
            description: 'This Textfield is optional',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        {
                            title: 'Placeholder',
                            name: 'placeholder',                            
                            type: 'string'
                        },                        
                    ]
                }
            ]
        },
        {
            title: 'Buttons',
            name: 'buttons',
            description: 'This Button is optional',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        {
                            title: 'Button Name',
                            name: 'button_name',                            
                            type: 'string'
                        },
                        {
                            title: 'Button Name Description',
                            name: 'button_name_description',                            
                            type: 'string'
                        },
                        {
                            title: 'Button Icon',
                            name: 'button_icon',                            
                            type: 'image'
                        },
                        {
                            title: 'Background Color',
                            name: 'background_color',                            
                            type: 'string'
                        },
                    ]
                }
            ]
        }
    ]
}