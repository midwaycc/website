import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'

// Documents
import page from './documentTypes/page'
import ministryPage from './documentTypes/ministryPage'
import heroSection from './documentTypes/heroSection'
import navigation from './documentTypes/navigation'
import post from './documentTypes/post'

// Other custom types
import plainLink from './otherTypes/plainLink'
import pageLink from './otherTypes/pageLink'
import nestedMenu from './otherTypes/nestedMenu'
import pageSection from './otherTypes/pageSection'
import richContent, {
  centerImage,
  rightImage,
  leftImage
} from './otherTypes/richContent'
import {
  centerImageWithWidth,
  rightImageWithWidth,
  leftImageWithWidth
} from './otherTypes/imageWithWidth'

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    page,
    ministryPage,
    heroSection,
    navigation,
    post,
    plainLink,
    pageLink,
    nestedMenu,
    pageSection,
    richContent,
    centerImage,
    rightImage,
    leftImage,
    centerImageWithWidth,
    rightImageWithWidth,
    leftImageWithWidth
    // Ideas:
    //
    // event,
    // sermon,
    // newsletter,
    // photoGallery
  ])
})
