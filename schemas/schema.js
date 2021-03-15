// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// We import object and document schemas
import blockContent from './blockContent'
import themes from './Themes/themes'
import pageBuilder from './Page Builder/pageBuilder'
import blog from './Builders/Blog/blog'
import callToAction from './Builders/Call to action/callToAction'
import contact from './Builders/Contact/contact'
import faqs from './Builders/FAQs/faqs'
import features from './Builders/Features/features'
import footers from './Builders/Footers/footers'
import hero from './Builders/Hero/hero'
import newsletter from './Builders/Newsletter/newsletter'
import portfolio from './Builders/Portfolio/portfolio'
import pricing from './Builders/Pricing/pricing'
import stats from './Builders/Stats/stats'
import team from './Builders/Team/team'
import testimonials from './Builders/Testimonials/testimonials'
import button from './Elements/button'
import pages from './Pages/pages'
import page_logo from './Page Builder/page_logo'
import slidingHero from './Builders/Sliding Hero/slidingHero'
import slider from './Builders/Sliding Hero/slider'
import imageElement from './Elements/imageElement'
import blogFeed from './Builders/Blog/blogFeed'
import phone from './Builders/Contact/phone'
import emailAddress from './Builders/Contact/emailAddress'
import landline from './Builders/Contact/landline'
import member from './Builders/Team/member'
import testimonial from './Builders/Testimonials/testimonial'
import price from './Builders/Pricing/price'
import planIncludes from './Builders/Pricing/planIncludes'
import faq from './Builders/FAQs/faq'
import pageSections from './Page Sections/pageSections'
import sections from './Pages/sections'
import feature from './Builders/Features/feature'
import title from './Elements/title'
import paragraph from './Elements/paragraph'
import style from './Elements/style'
import pageRoutes from './Page Routes/pageRoutes'
import block_contents from './Elements/block_contents'
import links from './Elements/links'
import socialMediaLinks from './Elements/socialMediaLinks'
import routes from './Elements/routes'
import tables from './Elements/tables'



// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // The following are document types which will appear
    // in the studio.

    // When added to this list, object types can be used as
    // { type: 'typename' } in other document schemas
    blockContent,

    // Builders
    themes,
    pageBuilder,
 
    // Page
    pages,   
    page_logo,
    pageSections,
    sections,
       
    pageRoutes,
    

    // Content Creator    
    hero,
    callToAction, 
    slidingHero,
    slider,

    feature,
    features,
    
    testimonials,
    testimonial,

    newsletter,

    price,
    planIncludes,
    pricing,

    blog,
    blogFeed,

    portfolio,
    
    faq,
    faqs,

    contact,  
    phone,
    emailAddress,
    landline,
    
    team,  
    member,
      
    stats,

    footers,
         
    // Elements
    title,
    paragraph,
    routes,    
    tables,
    button,
    imageElement,
    block_contents,
    links,
    socialMediaLinks,
    style
  ]),
})
