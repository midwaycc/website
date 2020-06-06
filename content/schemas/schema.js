import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'

// Documents
import page from './documentTypes/page'
import ministryPage from './documentTypes/ministryPage'
import heroSection from './documentTypes/heroSection'
import navigation from './documentTypes/navigation'
import post from './documentTypes/post'
import scheduleAlert from './documentTypes/scheduleAlert'
import generalAlert from './documentTypes/generalAlert'
import sermonUpload from './documentTypes/sermonUpload'
import newsletter from './documentTypes/newsletter'
import weeklySchedule, {
  weeklyScheduleEvent,
  weeklyScheduleDay
} from './documentTypes/weeklySchedule'

// Other custom types
import plainLink from './otherTypes/plainLink'
import pageLink from './otherTypes/pageLink'
import nestedMenu from './otherTypes/nestedMenu'
import pageSection from './otherTypes/pageSection'
import richContent from './otherTypes/richContent'
import contentSection from './otherTypes/contentSection'
import {
  centerImage,
  rightImage,
  leftImage,
  centerImageWithWidth,
  rightImageWithWidth,
  leftImageWithWidth
} from './otherTypes/images'
import picture from './otherTypes/picture'
import verticalSpace from './otherTypes/verticalSpace'
import videoEmbed from './otherTypes/videoEmbed'
import buttonLink from './otherTypes/buttonLink'

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    page,
    ministryPage,
    heroSection,
    navigation,
    post,
    generalAlert,
    scheduleAlert,
    sermonUpload,
    newsletter,
    weeklyScheduleEvent,
    weeklyScheduleDay,
    weeklySchedule,
    plainLink,
    pageLink,
    nestedMenu,
    pageSection,
    richContent,
    contentSection,
    centerImage,
    rightImage,
    leftImage,
    centerImageWithWidth,
    rightImageWithWidth,
    leftImageWithWidth,
    picture,
    verticalSpace,
    videoEmbed,
    buttonLink
  ])
})
