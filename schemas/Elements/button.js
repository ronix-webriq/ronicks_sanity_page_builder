import { MdRadioButtonChecked } from "react-icons/md";
export default {
    title: 'Button',
    name: 'button',
    icon: MdRadioButtonChecked,
    type: 'object',
    fields: [
        {                            
            title: 'Button Name',
            name: 'buttonName',
            type: 'string'
        },
        {                            
          title: 'Insert Route',
          name: 'btnLink',
          type: 'reference', to: [{type: 'pageRoutes'}]       
        },        
        {
            title: 'Button Color',
            name: 'buttonColor',
            type: 'colorPicker'
        },
        {
          title: 'Style',
          name: 'style',
          type: 'style',          
      },
    ],
    preview: {
        select: {
          title: 'buttonName',
          color: 'buttonColor',
          style: 'style'
        },
        prepare({ color, title, style }) {
          return {
            title: title,
            subtitle: color === undefined ? `Button Color: Transparent | Style: ${style}` : `Button Color: ${color} | Style: ${style}`
          };
        },
      },
}