import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'

import ministryPage from './documentTypes/ministryPage'

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    ministryPage
    // Ideas:
    //
    // page,
    // event,
    // sermon,
    // newsletter,
    // photoGallery
  ])
})
