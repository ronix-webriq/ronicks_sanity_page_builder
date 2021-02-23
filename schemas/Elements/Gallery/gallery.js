import {RiImageAddFill} from "react-icons/ri";
export default {
    title: 'Gallery',
    icon: RiImageAddFill,
    name: 'gallery',
    type: 'document',
    fields: [
        {
            title: 'Title',
            name: 'title',
            type: 'string'
        },
        {
            title: 'Galleries',
            name: 'galleries',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        {
                            title: 'Image Gallery',
                            name: 'image_gallery',
                            type: 'image'
                        }
                    ]
                }
            ]
        }
    ]
}