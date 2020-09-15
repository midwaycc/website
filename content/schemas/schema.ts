import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'

// Documents
import page from './documentTypes/page'
import ministryPage from './documentTypes/ministryPage'
import heroSection from './documentTypes/heroSection'
import navigation from './documentTypes/navigation'
import post from './documentTypes/post'
import shortcuts from './documentTypes/shortcuts'
import scheduleAlert from './documentTypes/scheduleAlert'
import generalAlert from './documentTypes/generalAlert'
import sermonUpload from './documentTypes/sermonUpload'
import newsletter from './documentTypes/newsletter'
import weeklySchedule, {
  weeklyScheduleEvent,
  weeklyScheduleDay
} from './documentTypes/weeklySchedule'
import poster from './documentTypes/poster'

// Other custom types
import plainLink from './otherTypes/plainLink'
import pageLink from './otherTypes/pageLink'
import nestedMenu from './otherTypes/nestedMenu'
import pageSection from './otherTypes/pageSection'
import picture from './otherTypes/picture'
import verticalSpace from './otherTypes/verticalSpace'
import videoEmbed from './otherTypes/videoEmbed'
import buttonLink from './otherTypes/buttonLink'
import contentSection from './otherTypes/contentSection'
import contentColumn from './otherTypes/contentColumn'
import columnRow from './otherTypes/columnRow'
import buttonRow from './otherTypes/buttonRow'
import richContent, { simpleRichContent } from './otherTypes/richContent'
import posterLine from './otherTypes/posterLine'
import posterInContent from './otherTypes/posterInContent'

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    page,
    ministryPage,
    heroSection,
    navigation,
    post,
    shortcuts,
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
    simpleRichContent,
    picture,
    verticalSpace,
    videoEmbed,
    buttonLink,
    contentSection,
    contentColumn,
    columnRow,
    buttonRow,
    poster,
    posterInContent,
    posterLine
  ])
})
