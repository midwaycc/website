export type Maybe<T> = T | null
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
  /**
   * A date string, such as 2007-12-03, compliant with the ISO 8601 standard for
   * representation of dates and times using the Gregorian calendar.
   **/
  Date: any
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any
}

export type BooleanQueryOperatorInput = {
  eq?: Maybe<Scalars['Boolean']>
  ne?: Maybe<Scalars['Boolean']>
  in?: Maybe<Array<Maybe<Scalars['Boolean']>>>
  nin?: Maybe<Array<Maybe<Scalars['Boolean']>>>
}

export type DateQueryOperatorInput = {
  eq?: Maybe<Scalars['Date']>
  ne?: Maybe<Scalars['Date']>
  gt?: Maybe<Scalars['Date']>
  gte?: Maybe<Scalars['Date']>
  lt?: Maybe<Scalars['Date']>
  lte?: Maybe<Scalars['Date']>
  in?: Maybe<Array<Maybe<Scalars['Date']>>>
  nin?: Maybe<Array<Maybe<Scalars['Date']>>>
}

export type FloatQueryOperatorInput = {
  eq?: Maybe<Scalars['Float']>
  ne?: Maybe<Scalars['Float']>
  gt?: Maybe<Scalars['Float']>
  gte?: Maybe<Scalars['Float']>
  lt?: Maybe<Scalars['Float']>
  lte?: Maybe<Scalars['Float']>
  in?: Maybe<Array<Maybe<Scalars['Float']>>>
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>
}

export type Internal = {
  __typename?: 'Internal'
  content?: Maybe<Scalars['String']>
  contentDigest: Scalars['String']
  description?: Maybe<Scalars['String']>
  fieldOwners?: Maybe<Array<Maybe<Scalars['String']>>>
  ignoreType?: Maybe<Scalars['Boolean']>
  mediaType?: Maybe<Scalars['String']>
  owner: Scalars['String']
  type: Scalars['String']
}

export type InternalFilterInput = {
  content?: Maybe<StringQueryOperatorInput>
  contentDigest?: Maybe<StringQueryOperatorInput>
  description?: Maybe<StringQueryOperatorInput>
  fieldOwners?: Maybe<StringQueryOperatorInput>
  ignoreType?: Maybe<BooleanQueryOperatorInput>
  mediaType?: Maybe<StringQueryOperatorInput>
  owner?: Maybe<StringQueryOperatorInput>
  type?: Maybe<StringQueryOperatorInput>
}

export type IntQueryOperatorInput = {
  eq?: Maybe<Scalars['Int']>
  ne?: Maybe<Scalars['Int']>
  gt?: Maybe<Scalars['Int']>
  gte?: Maybe<Scalars['Int']>
  lt?: Maybe<Scalars['Int']>
  lte?: Maybe<Scalars['Int']>
  in?: Maybe<Array<Maybe<Scalars['Int']>>>
  nin?: Maybe<Array<Maybe<Scalars['Int']>>>
}

export type JsonQueryOperatorInput = {
  eq?: Maybe<Scalars['JSON']>
  ne?: Maybe<Scalars['JSON']>
  in?: Maybe<Array<Maybe<Scalars['JSON']>>>
  nin?: Maybe<Array<Maybe<Scalars['JSON']>>>
  regex?: Maybe<Scalars['JSON']>
  glob?: Maybe<Scalars['JSON']>
}

/** Node Interface */
export type Node = {
  id: Scalars['ID']
  parent?: Maybe<Node>
  children: Array<Node>
  internal: Internal
}

export type NodeFilterInput = {
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
}

export type NodeFilterListInput = {
  elemMatch?: Maybe<NodeFilterInput>
}

export type PageInfo = {
  __typename?: 'PageInfo'
  currentPage: Scalars['Int']
  hasPreviousPage: Scalars['Boolean']
  hasNextPage: Scalars['Boolean']
  itemCount: Scalars['Int']
  pageCount: Scalars['Int']
  perPage?: Maybe<Scalars['Int']>
}

export type Query = {
  __typename?: 'Query'
  sanityHeroSection?: Maybe<SanityHeroSection>
  allSanityHeroSection: SanityHeroSectionConnection
  sanityMinistryPage?: Maybe<SanityMinistryPage>
  allSanityMinistryPage: SanityMinistryPageConnection
  sanityNavigation?: Maybe<SanityNavigation>
  allSanityNavigation: SanityNavigationConnection
  sanityPage?: Maybe<SanityPage>
  allSanityPage: SanityPageConnection
  sanityFileAsset?: Maybe<SanityFileAsset>
  allSanityFileAsset: SanityFileAssetConnection
  sanityImageAsset?: Maybe<SanityImageAsset>
  allSanityImageAsset: SanityImageAssetConnection
  sitePage?: Maybe<SitePage>
  allSitePage: SitePageConnection
  sitePlugin?: Maybe<SitePlugin>
  allSitePlugin: SitePluginConnection
  site?: Maybe<Site>
  allSite: SiteConnection
}

export type QuerySanityHeroSectionArgs = {
  _id?: Maybe<StringQueryOperatorInput>
  _type?: Maybe<StringQueryOperatorInput>
  _createdAt?: Maybe<DateQueryOperatorInput>
  _updatedAt?: Maybe<DateQueryOperatorInput>
  _rev?: Maybe<StringQueryOperatorInput>
  _key?: Maybe<StringQueryOperatorInput>
  title?: Maybe<StringQueryOperatorInput>
  subtitle?: Maybe<StringQueryOperatorInput>
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
}

export type QueryAllSanityHeroSectionArgs = {
  filter?: Maybe<SanityHeroSectionFilterInput>
  sort?: Maybe<SanityHeroSectionSortInput>
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
}

export type QuerySanityMinistryPageArgs = {
  _id?: Maybe<StringQueryOperatorInput>
  _type?: Maybe<StringQueryOperatorInput>
  _createdAt?: Maybe<DateQueryOperatorInput>
  _updatedAt?: Maybe<DateQueryOperatorInput>
  _rev?: Maybe<StringQueryOperatorInput>
  _key?: Maybe<StringQueryOperatorInput>
  name?: Maybe<StringQueryOperatorInput>
  url?: Maybe<SanitySlugFilterInput>
  subLogo?: Maybe<SanityImageFilterInput>
  sections?: Maybe<SanityPageSectionFilterListInput>
  content?: Maybe<SanityBlockFilterListInput>
  _rawUrl?: Maybe<JsonQueryOperatorInput>
  _rawSubLogo?: Maybe<JsonQueryOperatorInput>
  _rawContent?: Maybe<JsonQueryOperatorInput>
  _rawSections?: Maybe<JsonQueryOperatorInput>
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
}

export type QueryAllSanityMinistryPageArgs = {
  filter?: Maybe<SanityMinistryPageFilterInput>
  sort?: Maybe<SanityMinistryPageSortInput>
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
}

export type QuerySanityNavigationArgs = {
  _id?: Maybe<StringQueryOperatorInput>
  _type?: Maybe<StringQueryOperatorInput>
  _createdAt?: Maybe<DateQueryOperatorInput>
  _updatedAt?: Maybe<DateQueryOperatorInput>
  _rev?: Maybe<StringQueryOperatorInput>
  _key?: Maybe<StringQueryOperatorInput>
  title?: Maybe<StringQueryOperatorInput>
  _rawItems?: Maybe<JsonQueryOperatorInput>
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
}

export type QueryAllSanityNavigationArgs = {
  filter?: Maybe<SanityNavigationFilterInput>
  sort?: Maybe<SanityNavigationSortInput>
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
}

export type QuerySanityPageArgs = {
  _id?: Maybe<StringQueryOperatorInput>
  _type?: Maybe<StringQueryOperatorInput>
  _createdAt?: Maybe<DateQueryOperatorInput>
  _updatedAt?: Maybe<DateQueryOperatorInput>
  _rev?: Maybe<StringQueryOperatorInput>
  _key?: Maybe<StringQueryOperatorInput>
  name?: Maybe<StringQueryOperatorInput>
  url?: Maybe<SanitySlugFilterInput>
  _rawUrl?: Maybe<JsonQueryOperatorInput>
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
}

export type QueryAllSanityPageArgs = {
  filter?: Maybe<SanityPageFilterInput>
  sort?: Maybe<SanityPageSortInput>
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
}

export type QuerySanityFileAssetArgs = {
  _id?: Maybe<StringQueryOperatorInput>
  _type?: Maybe<StringQueryOperatorInput>
  _createdAt?: Maybe<DateQueryOperatorInput>
  _updatedAt?: Maybe<DateQueryOperatorInput>
  _rev?: Maybe<StringQueryOperatorInput>
  _key?: Maybe<StringQueryOperatorInput>
  originalFilename?: Maybe<StringQueryOperatorInput>
  label?: Maybe<StringQueryOperatorInput>
  sha1hash?: Maybe<StringQueryOperatorInput>
  extension?: Maybe<StringQueryOperatorInput>
  mimeType?: Maybe<StringQueryOperatorInput>
  size?: Maybe<FloatQueryOperatorInput>
  assetId?: Maybe<StringQueryOperatorInput>
  path?: Maybe<StringQueryOperatorInput>
  url?: Maybe<StringQueryOperatorInput>
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
}

export type QueryAllSanityFileAssetArgs = {
  filter?: Maybe<SanityFileAssetFilterInput>
  sort?: Maybe<SanityFileAssetSortInput>
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
}

export type QuerySanityImageAssetArgs = {
  _id?: Maybe<StringQueryOperatorInput>
  _type?: Maybe<StringQueryOperatorInput>
  _createdAt?: Maybe<DateQueryOperatorInput>
  _updatedAt?: Maybe<DateQueryOperatorInput>
  _rev?: Maybe<StringQueryOperatorInput>
  _key?: Maybe<StringQueryOperatorInput>
  originalFilename?: Maybe<StringQueryOperatorInput>
  label?: Maybe<StringQueryOperatorInput>
  sha1hash?: Maybe<StringQueryOperatorInput>
  extension?: Maybe<StringQueryOperatorInput>
  mimeType?: Maybe<StringQueryOperatorInput>
  size?: Maybe<FloatQueryOperatorInput>
  assetId?: Maybe<StringQueryOperatorInput>
  path?: Maybe<StringQueryOperatorInput>
  url?: Maybe<StringQueryOperatorInput>
  metadata?: Maybe<SanityImageMetadataFilterInput>
  fixed?: Maybe<SanityImageFixedFilterInput>
  fluid?: Maybe<SanityImageFluidFilterInput>
  _rawMetadata?: Maybe<JsonQueryOperatorInput>
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
}

export type QueryAllSanityImageAssetArgs = {
  filter?: Maybe<SanityImageAssetFilterInput>
  sort?: Maybe<SanityImageAssetSortInput>
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
}

export type QuerySitePageArgs = {
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
  path?: Maybe<StringQueryOperatorInput>
  internalComponentName?: Maybe<StringQueryOperatorInput>
  component?: Maybe<StringQueryOperatorInput>
  componentChunkName?: Maybe<StringQueryOperatorInput>
  isCreatedByStatefulCreatePages?: Maybe<BooleanQueryOperatorInput>
  context?: Maybe<SitePageContextFilterInput>
  pluginCreator?: Maybe<SitePluginFilterInput>
  pluginCreatorId?: Maybe<StringQueryOperatorInput>
  componentPath?: Maybe<StringQueryOperatorInput>
}

export type QueryAllSitePageArgs = {
  filter?: Maybe<SitePageFilterInput>
  sort?: Maybe<SitePageSortInput>
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
}

export type QuerySitePluginArgs = {
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
  resolve?: Maybe<StringQueryOperatorInput>
  name?: Maybe<StringQueryOperatorInput>
  version?: Maybe<StringQueryOperatorInput>
  pluginOptions?: Maybe<SitePluginPluginOptionsFilterInput>
  nodeAPIs?: Maybe<StringQueryOperatorInput>
  browserAPIs?: Maybe<StringQueryOperatorInput>
  ssrAPIs?: Maybe<StringQueryOperatorInput>
  pluginFilepath?: Maybe<StringQueryOperatorInput>
  packageJson?: Maybe<SitePluginPackageJsonFilterInput>
}

export type QueryAllSitePluginArgs = {
  filter?: Maybe<SitePluginFilterInput>
  sort?: Maybe<SitePluginSortInput>
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
}

export type QuerySiteArgs = {
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
  siteMetadata?: Maybe<SiteSiteMetadataFilterInput>
  port?: Maybe<IntQueryOperatorInput>
  host?: Maybe<StringQueryOperatorInput>
  polyfill?: Maybe<BooleanQueryOperatorInput>
  pathPrefix?: Maybe<StringQueryOperatorInput>
  buildTime?: Maybe<DateQueryOperatorInput>
}

export type QueryAllSiteArgs = {
  filter?: Maybe<SiteFilterInput>
  sort?: Maybe<SiteSortInput>
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
}

export type SanityBlock = {
  __typename?: 'SanityBlock'
  _key?: Maybe<Scalars['String']>
  _type?: Maybe<Scalars['String']>
  sanityChildren?: Maybe<Array<Maybe<SanitySpan>>>
  style?: Maybe<Scalars['String']>
  list?: Maybe<Scalars['String']>
}

export type SanityBlockFilterInput = {
  _key?: Maybe<StringQueryOperatorInput>
  _type?: Maybe<StringQueryOperatorInput>
  sanityChildren?: Maybe<SanitySpanFilterListInput>
  style?: Maybe<StringQueryOperatorInput>
  list?: Maybe<StringQueryOperatorInput>
}

export type SanityBlockFilterListInput = {
  elemMatch?: Maybe<SanityBlockFilterInput>
}

/** A Sanity document */
export type SanityDocument = {
  _id?: Maybe<Scalars['String']>
  _type?: Maybe<Scalars['String']>
  _createdAt?: Maybe<Scalars['Date']>
  _updatedAt?: Maybe<Scalars['Date']>
  _rev?: Maybe<Scalars['String']>
}

export type SanityFile = {
  __typename?: 'SanityFile'
  _key?: Maybe<Scalars['String']>
  _type?: Maybe<Scalars['String']>
  asset?: Maybe<SanityFileAsset>
}

export type SanityFileAsset = SanityDocument &
  Node & {
    __typename?: 'SanityFileAsset'
    _id?: Maybe<Scalars['String']>
    _type?: Maybe<Scalars['String']>
    _createdAt?: Maybe<Scalars['Date']>
    _updatedAt?: Maybe<Scalars['Date']>
    _rev?: Maybe<Scalars['String']>
    _key?: Maybe<Scalars['String']>
    originalFilename?: Maybe<Scalars['String']>
    label?: Maybe<Scalars['String']>
    sha1hash?: Maybe<Scalars['String']>
    extension?: Maybe<Scalars['String']>
    mimeType?: Maybe<Scalars['String']>
    size?: Maybe<Scalars['Float']>
    assetId?: Maybe<Scalars['String']>
    path?: Maybe<Scalars['String']>
    url?: Maybe<Scalars['String']>
    id: Scalars['ID']
    parent?: Maybe<Node>
    children: Array<Node>
    internal: Internal
  }

export type SanityFileAsset_CreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>
  fromNow?: Maybe<Scalars['Boolean']>
  difference?: Maybe<Scalars['String']>
  locale?: Maybe<Scalars['String']>
}

export type SanityFileAsset_UpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>
  fromNow?: Maybe<Scalars['Boolean']>
  difference?: Maybe<Scalars['String']>
  locale?: Maybe<Scalars['String']>
}

export type SanityFileAssetConnection = {
  __typename?: 'SanityFileAssetConnection'
  totalCount: Scalars['Int']
  edges: Array<SanityFileAssetEdge>
  nodes: Array<SanityFileAsset>
  pageInfo: PageInfo
  distinct: Array<Scalars['String']>
  group: Array<SanityFileAssetGroupConnection>
}

export type SanityFileAssetConnectionDistinctArgs = {
  field: SanityFileAssetFieldsEnum
}

export type SanityFileAssetConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  field: SanityFileAssetFieldsEnum
}

export type SanityFileAssetEdge = {
  __typename?: 'SanityFileAssetEdge'
  next?: Maybe<SanityFileAsset>
  node: SanityFileAsset
  previous?: Maybe<SanityFileAsset>
}

export enum SanityFileAssetFieldsEnum {
  _id = '_id',
  _type = '_type',
  _createdAt = '_createdAt',
  _updatedAt = '_updatedAt',
  _rev = '_rev',
  _key = '_key',
  originalFilename = 'originalFilename',
  label = 'label',
  sha1hash = 'sha1hash',
  extension = 'extension',
  mimeType = 'mimeType',
  size = 'size',
  assetId = 'assetId',
  path = 'path',
  url = 'url',
  id = 'id',
  parent___id = 'parent___id',
  parent___parent___id = 'parent___parent___id',
  parent___parent___parent___id = 'parent___parent___parent___id',
  parent___parent___parent___children = 'parent___parent___parent___children',
  parent___parent___children = 'parent___parent___children',
  parent___parent___children___id = 'parent___parent___children___id',
  parent___parent___children___children = 'parent___parent___children___children',
  parent___parent___internal___content = 'parent___parent___internal___content',
  parent___parent___internal___contentDigest = 'parent___parent___internal___contentDigest',
  parent___parent___internal___description = 'parent___parent___internal___description',
  parent___parent___internal___fieldOwners = 'parent___parent___internal___fieldOwners',
  parent___parent___internal___ignoreType = 'parent___parent___internal___ignoreType',
  parent___parent___internal___mediaType = 'parent___parent___internal___mediaType',
  parent___parent___internal___owner = 'parent___parent___internal___owner',
  parent___parent___internal___type = 'parent___parent___internal___type',
  parent___children = 'parent___children',
  parent___children___id = 'parent___children___id',
  parent___children___parent___id = 'parent___children___parent___id',
  parent___children___parent___children = 'parent___children___parent___children',
  parent___children___children = 'parent___children___children',
  parent___children___children___id = 'parent___children___children___id',
  parent___children___children___children = 'parent___children___children___children',
  parent___children___internal___content = 'parent___children___internal___content',
  parent___children___internal___contentDigest = 'parent___children___internal___contentDigest',
  parent___children___internal___description = 'parent___children___internal___description',
  parent___children___internal___fieldOwners = 'parent___children___internal___fieldOwners',
  parent___children___internal___ignoreType = 'parent___children___internal___ignoreType',
  parent___children___internal___mediaType = 'parent___children___internal___mediaType',
  parent___children___internal___owner = 'parent___children___internal___owner',
  parent___children___internal___type = 'parent___children___internal___type',
  parent___internal___content = 'parent___internal___content',
  parent___internal___contentDigest = 'parent___internal___contentDigest',
  parent___internal___description = 'parent___internal___description',
  parent___internal___fieldOwners = 'parent___internal___fieldOwners',
  parent___internal___ignoreType = 'parent___internal___ignoreType',
  parent___internal___mediaType = 'parent___internal___mediaType',
  parent___internal___owner = 'parent___internal___owner',
  parent___internal___type = 'parent___internal___type',
  children = 'children',
  children___id = 'children___id',
  children___parent___id = 'children___parent___id',
  children___parent___parent___id = 'children___parent___parent___id',
  children___parent___parent___children = 'children___parent___parent___children',
  children___parent___children = 'children___parent___children',
  children___parent___children___id = 'children___parent___children___id',
  children___parent___children___children = 'children___parent___children___children',
  children___parent___internal___content = 'children___parent___internal___content',
  children___parent___internal___contentDigest = 'children___parent___internal___contentDigest',
  children___parent___internal___description = 'children___parent___internal___description',
  children___parent___internal___fieldOwners = 'children___parent___internal___fieldOwners',
  children___parent___internal___ignoreType = 'children___parent___internal___ignoreType',
  children___parent___internal___mediaType = 'children___parent___internal___mediaType',
  children___parent___internal___owner = 'children___parent___internal___owner',
  children___parent___internal___type = 'children___parent___internal___type',
  children___children = 'children___children',
  children___children___id = 'children___children___id',
  children___children___parent___id = 'children___children___parent___id',
  children___children___parent___children = 'children___children___parent___children',
  children___children___children = 'children___children___children',
  children___children___children___id = 'children___children___children___id',
  children___children___children___children = 'children___children___children___children',
  children___children___internal___content = 'children___children___internal___content',
  children___children___internal___contentDigest = 'children___children___internal___contentDigest',
  children___children___internal___description = 'children___children___internal___description',
  children___children___internal___fieldOwners = 'children___children___internal___fieldOwners',
  children___children___internal___ignoreType = 'children___children___internal___ignoreType',
  children___children___internal___mediaType = 'children___children___internal___mediaType',
  children___children___internal___owner = 'children___children___internal___owner',
  children___children___internal___type = 'children___children___internal___type',
  children___internal___content = 'children___internal___content',
  children___internal___contentDigest = 'children___internal___contentDigest',
  children___internal___description = 'children___internal___description',
  children___internal___fieldOwners = 'children___internal___fieldOwners',
  children___internal___ignoreType = 'children___internal___ignoreType',
  children___internal___mediaType = 'children___internal___mediaType',
  children___internal___owner = 'children___internal___owner',
  children___internal___type = 'children___internal___type',
  internal___content = 'internal___content',
  internal___contentDigest = 'internal___contentDigest',
  internal___description = 'internal___description',
  internal___fieldOwners = 'internal___fieldOwners',
  internal___ignoreType = 'internal___ignoreType',
  internal___mediaType = 'internal___mediaType',
  internal___owner = 'internal___owner',
  internal___type = 'internal___type'
}

export type SanityFileAssetFilterInput = {
  _id?: Maybe<StringQueryOperatorInput>
  _type?: Maybe<StringQueryOperatorInput>
  _createdAt?: Maybe<DateQueryOperatorInput>
  _updatedAt?: Maybe<DateQueryOperatorInput>
  _rev?: Maybe<StringQueryOperatorInput>
  _key?: Maybe<StringQueryOperatorInput>
  originalFilename?: Maybe<StringQueryOperatorInput>
  label?: Maybe<StringQueryOperatorInput>
  sha1hash?: Maybe<StringQueryOperatorInput>
  extension?: Maybe<StringQueryOperatorInput>
  mimeType?: Maybe<StringQueryOperatorInput>
  size?: Maybe<FloatQueryOperatorInput>
  assetId?: Maybe<StringQueryOperatorInput>
  path?: Maybe<StringQueryOperatorInput>
  url?: Maybe<StringQueryOperatorInput>
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
}

export type SanityFileAssetGroupConnection = {
  __typename?: 'SanityFileAssetGroupConnection'
  totalCount: Scalars['Int']
  edges: Array<SanityFileAssetEdge>
  nodes: Array<SanityFileAsset>
  pageInfo: PageInfo
  field: Scalars['String']
  fieldValue?: Maybe<Scalars['String']>
}

export type SanityFileAssetSortInput = {
  fields?: Maybe<Array<Maybe<SanityFileAssetFieldsEnum>>>
  order?: Maybe<Array<Maybe<SortOrderEnum>>>
}

export type SanityGeopoint = {
  __typename?: 'SanityGeopoint'
  _key?: Maybe<Scalars['String']>
  _type?: Maybe<Scalars['String']>
  lat?: Maybe<Scalars['Float']>
  lng?: Maybe<Scalars['Float']>
  alt?: Maybe<Scalars['Float']>
}

export type SanityGeopointFilterInput = {
  _key?: Maybe<StringQueryOperatorInput>
  _type?: Maybe<StringQueryOperatorInput>
  lat?: Maybe<FloatQueryOperatorInput>
  lng?: Maybe<FloatQueryOperatorInput>
  alt?: Maybe<FloatQueryOperatorInput>
}

export type SanityHeroSection = SanityDocument &
  Node & {
    __typename?: 'SanityHeroSection'
    _id?: Maybe<Scalars['String']>
    _type?: Maybe<Scalars['String']>
    _createdAt?: Maybe<Scalars['Date']>
    _updatedAt?: Maybe<Scalars['Date']>
    _rev?: Maybe<Scalars['String']>
    _key?: Maybe<Scalars['String']>
    title?: Maybe<Scalars['String']>
    subtitle?: Maybe<Scalars['String']>
    id: Scalars['ID']
    parent?: Maybe<Node>
    children: Array<Node>
    internal: Internal
  }

export type SanityHeroSection_CreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>
  fromNow?: Maybe<Scalars['Boolean']>
  difference?: Maybe<Scalars['String']>
  locale?: Maybe<Scalars['String']>
}

export type SanityHeroSection_UpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>
  fromNow?: Maybe<Scalars['Boolean']>
  difference?: Maybe<Scalars['String']>
  locale?: Maybe<Scalars['String']>
}

export type SanityHeroSectionConnection = {
  __typename?: 'SanityHeroSectionConnection'
  totalCount: Scalars['Int']
  edges: Array<SanityHeroSectionEdge>
  nodes: Array<SanityHeroSection>
  pageInfo: PageInfo
  distinct: Array<Scalars['String']>
  group: Array<SanityHeroSectionGroupConnection>
}

export type SanityHeroSectionConnectionDistinctArgs = {
  field: SanityHeroSectionFieldsEnum
}

export type SanityHeroSectionConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  field: SanityHeroSectionFieldsEnum
}

export type SanityHeroSectionEdge = {
  __typename?: 'SanityHeroSectionEdge'
  next?: Maybe<SanityHeroSection>
  node: SanityHeroSection
  previous?: Maybe<SanityHeroSection>
}

export enum SanityHeroSectionFieldsEnum {
  _id = '_id',
  _type = '_type',
  _createdAt = '_createdAt',
  _updatedAt = '_updatedAt',
  _rev = '_rev',
  _key = '_key',
  title = 'title',
  subtitle = 'subtitle',
  id = 'id',
  parent___id = 'parent___id',
  parent___parent___id = 'parent___parent___id',
  parent___parent___parent___id = 'parent___parent___parent___id',
  parent___parent___parent___children = 'parent___parent___parent___children',
  parent___parent___children = 'parent___parent___children',
  parent___parent___children___id = 'parent___parent___children___id',
  parent___parent___children___children = 'parent___parent___children___children',
  parent___parent___internal___content = 'parent___parent___internal___content',
  parent___parent___internal___contentDigest = 'parent___parent___internal___contentDigest',
  parent___parent___internal___description = 'parent___parent___internal___description',
  parent___parent___internal___fieldOwners = 'parent___parent___internal___fieldOwners',
  parent___parent___internal___ignoreType = 'parent___parent___internal___ignoreType',
  parent___parent___internal___mediaType = 'parent___parent___internal___mediaType',
  parent___parent___internal___owner = 'parent___parent___internal___owner',
  parent___parent___internal___type = 'parent___parent___internal___type',
  parent___children = 'parent___children',
  parent___children___id = 'parent___children___id',
  parent___children___parent___id = 'parent___children___parent___id',
  parent___children___parent___children = 'parent___children___parent___children',
  parent___children___children = 'parent___children___children',
  parent___children___children___id = 'parent___children___children___id',
  parent___children___children___children = 'parent___children___children___children',
  parent___children___internal___content = 'parent___children___internal___content',
  parent___children___internal___contentDigest = 'parent___children___internal___contentDigest',
  parent___children___internal___description = 'parent___children___internal___description',
  parent___children___internal___fieldOwners = 'parent___children___internal___fieldOwners',
  parent___children___internal___ignoreType = 'parent___children___internal___ignoreType',
  parent___children___internal___mediaType = 'parent___children___internal___mediaType',
  parent___children___internal___owner = 'parent___children___internal___owner',
  parent___children___internal___type = 'parent___children___internal___type',
  parent___internal___content = 'parent___internal___content',
  parent___internal___contentDigest = 'parent___internal___contentDigest',
  parent___internal___description = 'parent___internal___description',
  parent___internal___fieldOwners = 'parent___internal___fieldOwners',
  parent___internal___ignoreType = 'parent___internal___ignoreType',
  parent___internal___mediaType = 'parent___internal___mediaType',
  parent___internal___owner = 'parent___internal___owner',
  parent___internal___type = 'parent___internal___type',
  children = 'children',
  children___id = 'children___id',
  children___parent___id = 'children___parent___id',
  children___parent___parent___id = 'children___parent___parent___id',
  children___parent___parent___children = 'children___parent___parent___children',
  children___parent___children = 'children___parent___children',
  children___parent___children___id = 'children___parent___children___id',
  children___parent___children___children = 'children___parent___children___children',
  children___parent___internal___content = 'children___parent___internal___content',
  children___parent___internal___contentDigest = 'children___parent___internal___contentDigest',
  children___parent___internal___description = 'children___parent___internal___description',
  children___parent___internal___fieldOwners = 'children___parent___internal___fieldOwners',
  children___parent___internal___ignoreType = 'children___parent___internal___ignoreType',
  children___parent___internal___mediaType = 'children___parent___internal___mediaType',
  children___parent___internal___owner = 'children___parent___internal___owner',
  children___parent___internal___type = 'children___parent___internal___type',
  children___children = 'children___children',
  children___children___id = 'children___children___id',
  children___children___parent___id = 'children___children___parent___id',
  children___children___parent___children = 'children___children___parent___children',
  children___children___children = 'children___children___children',
  children___children___children___id = 'children___children___children___id',
  children___children___children___children = 'children___children___children___children',
  children___children___internal___content = 'children___children___internal___content',
  children___children___internal___contentDigest = 'children___children___internal___contentDigest',
  children___children___internal___description = 'children___children___internal___description',
  children___children___internal___fieldOwners = 'children___children___internal___fieldOwners',
  children___children___internal___ignoreType = 'children___children___internal___ignoreType',
  children___children___internal___mediaType = 'children___children___internal___mediaType',
  children___children___internal___owner = 'children___children___internal___owner',
  children___children___internal___type = 'children___children___internal___type',
  children___internal___content = 'children___internal___content',
  children___internal___contentDigest = 'children___internal___contentDigest',
  children___internal___description = 'children___internal___description',
  children___internal___fieldOwners = 'children___internal___fieldOwners',
  children___internal___ignoreType = 'children___internal___ignoreType',
  children___internal___mediaType = 'children___internal___mediaType',
  children___internal___owner = 'children___internal___owner',
  children___internal___type = 'children___internal___type',
  internal___content = 'internal___content',
  internal___contentDigest = 'internal___contentDigest',
  internal___description = 'internal___description',
  internal___fieldOwners = 'internal___fieldOwners',
  internal___ignoreType = 'internal___ignoreType',
  internal___mediaType = 'internal___mediaType',
  internal___owner = 'internal___owner',
  internal___type = 'internal___type'
}

export type SanityHeroSectionFilterInput = {
  _id?: Maybe<StringQueryOperatorInput>
  _type?: Maybe<StringQueryOperatorInput>
  _createdAt?: Maybe<DateQueryOperatorInput>
  _updatedAt?: Maybe<DateQueryOperatorInput>
  _rev?: Maybe<StringQueryOperatorInput>
  _key?: Maybe<StringQueryOperatorInput>
  title?: Maybe<StringQueryOperatorInput>
  subtitle?: Maybe<StringQueryOperatorInput>
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
}

export type SanityHeroSectionGroupConnection = {
  __typename?: 'SanityHeroSectionGroupConnection'
  totalCount: Scalars['Int']
  edges: Array<SanityHeroSectionEdge>
  nodes: Array<SanityHeroSection>
  pageInfo: PageInfo
  field: Scalars['String']
  fieldValue?: Maybe<Scalars['String']>
}

export type SanityHeroSectionSortInput = {
  fields?: Maybe<Array<Maybe<SanityHeroSectionFieldsEnum>>>
  order?: Maybe<Array<Maybe<SortOrderEnum>>>
}

export type SanityImage = {
  __typename?: 'SanityImage'
  _key?: Maybe<Scalars['String']>
  _type?: Maybe<Scalars['String']>
  asset?: Maybe<SanityImageAsset>
  hotspot?: Maybe<SanityImageHotspot>
  crop?: Maybe<SanityImageCrop>
}

export type SanityImageAsset = SanityDocument &
  Node & {
    __typename?: 'SanityImageAsset'
    _id?: Maybe<Scalars['String']>
    _type?: Maybe<Scalars['String']>
    _createdAt?: Maybe<Scalars['Date']>
    _updatedAt?: Maybe<Scalars['Date']>
    _rev?: Maybe<Scalars['String']>
    _key?: Maybe<Scalars['String']>
    originalFilename?: Maybe<Scalars['String']>
    label?: Maybe<Scalars['String']>
    sha1hash?: Maybe<Scalars['String']>
    extension?: Maybe<Scalars['String']>
    mimeType?: Maybe<Scalars['String']>
    size?: Maybe<Scalars['Float']>
    assetId?: Maybe<Scalars['String']>
    path?: Maybe<Scalars['String']>
    url?: Maybe<Scalars['String']>
    metadata?: Maybe<SanityImageMetadata>
    fixed?: Maybe<SanityImageFixed>
    fluid?: Maybe<SanityImageFluid>
    _rawMetadata?: Maybe<Scalars['JSON']>
    id: Scalars['ID']
    parent?: Maybe<Node>
    children: Array<Node>
    internal: Internal
  }

export type SanityImageAsset_CreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>
  fromNow?: Maybe<Scalars['Boolean']>
  difference?: Maybe<Scalars['String']>
  locale?: Maybe<Scalars['String']>
}

export type SanityImageAsset_UpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>
  fromNow?: Maybe<Scalars['Boolean']>
  difference?: Maybe<Scalars['String']>
  locale?: Maybe<Scalars['String']>
}

export type SanityImageAssetFixedArgs = {
  width?: Maybe<Scalars['Int']>
  height?: Maybe<Scalars['Int']>
  toFormat?: Maybe<SanityImageFormat>
}

export type SanityImageAssetFluidArgs = {
  maxWidth?: Maybe<Scalars['Int']>
  maxHeight?: Maybe<Scalars['Int']>
  sizes?: Maybe<Scalars['String']>
  toFormat?: Maybe<SanityImageFormat>
}

export type SanityImageAsset_RawMetadataArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>
}

export type SanityImageAssetConnection = {
  __typename?: 'SanityImageAssetConnection'
  totalCount: Scalars['Int']
  edges: Array<SanityImageAssetEdge>
  nodes: Array<SanityImageAsset>
  pageInfo: PageInfo
  distinct: Array<Scalars['String']>
  group: Array<SanityImageAssetGroupConnection>
}

export type SanityImageAssetConnectionDistinctArgs = {
  field: SanityImageAssetFieldsEnum
}

export type SanityImageAssetConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  field: SanityImageAssetFieldsEnum
}

export type SanityImageAssetEdge = {
  __typename?: 'SanityImageAssetEdge'
  next?: Maybe<SanityImageAsset>
  node: SanityImageAsset
  previous?: Maybe<SanityImageAsset>
}

export enum SanityImageAssetFieldsEnum {
  _id = '_id',
  _type = '_type',
  _createdAt = '_createdAt',
  _updatedAt = '_updatedAt',
  _rev = '_rev',
  _key = '_key',
  originalFilename = 'originalFilename',
  label = 'label',
  sha1hash = 'sha1hash',
  extension = 'extension',
  mimeType = 'mimeType',
  size = 'size',
  assetId = 'assetId',
  path = 'path',
  url = 'url',
  metadata____key = 'metadata____key',
  metadata____type = 'metadata____type',
  metadata___location____key = 'metadata___location____key',
  metadata___location____type = 'metadata___location____type',
  metadata___location___lat = 'metadata___location___lat',
  metadata___location___lng = 'metadata___location___lng',
  metadata___location___alt = 'metadata___location___alt',
  metadata___dimensions____key = 'metadata___dimensions____key',
  metadata___dimensions____type = 'metadata___dimensions____type',
  metadata___dimensions___height = 'metadata___dimensions___height',
  metadata___dimensions___width = 'metadata___dimensions___width',
  metadata___dimensions___aspectRatio = 'metadata___dimensions___aspectRatio',
  metadata___palette____key = 'metadata___palette____key',
  metadata___palette____type = 'metadata___palette____type',
  metadata___palette___darkMuted____key = 'metadata___palette___darkMuted____key',
  metadata___palette___darkMuted____type = 'metadata___palette___darkMuted____type',
  metadata___palette___darkMuted___background = 'metadata___palette___darkMuted___background',
  metadata___palette___darkMuted___foreground = 'metadata___palette___darkMuted___foreground',
  metadata___palette___darkMuted___population = 'metadata___palette___darkMuted___population',
  metadata___palette___darkMuted___title = 'metadata___palette___darkMuted___title',
  metadata___palette___lightVibrant____key = 'metadata___palette___lightVibrant____key',
  metadata___palette___lightVibrant____type = 'metadata___palette___lightVibrant____type',
  metadata___palette___lightVibrant___background = 'metadata___palette___lightVibrant___background',
  metadata___palette___lightVibrant___foreground = 'metadata___palette___lightVibrant___foreground',
  metadata___palette___lightVibrant___population = 'metadata___palette___lightVibrant___population',
  metadata___palette___lightVibrant___title = 'metadata___palette___lightVibrant___title',
  metadata___palette___darkVibrant____key = 'metadata___palette___darkVibrant____key',
  metadata___palette___darkVibrant____type = 'metadata___palette___darkVibrant____type',
  metadata___palette___darkVibrant___background = 'metadata___palette___darkVibrant___background',
  metadata___palette___darkVibrant___foreground = 'metadata___palette___darkVibrant___foreground',
  metadata___palette___darkVibrant___population = 'metadata___palette___darkVibrant___population',
  metadata___palette___darkVibrant___title = 'metadata___palette___darkVibrant___title',
  metadata___palette___vibrant____key = 'metadata___palette___vibrant____key',
  metadata___palette___vibrant____type = 'metadata___palette___vibrant____type',
  metadata___palette___vibrant___background = 'metadata___palette___vibrant___background',
  metadata___palette___vibrant___foreground = 'metadata___palette___vibrant___foreground',
  metadata___palette___vibrant___population = 'metadata___palette___vibrant___population',
  metadata___palette___vibrant___title = 'metadata___palette___vibrant___title',
  metadata___palette___dominant____key = 'metadata___palette___dominant____key',
  metadata___palette___dominant____type = 'metadata___palette___dominant____type',
  metadata___palette___dominant___background = 'metadata___palette___dominant___background',
  metadata___palette___dominant___foreground = 'metadata___palette___dominant___foreground',
  metadata___palette___dominant___population = 'metadata___palette___dominant___population',
  metadata___palette___dominant___title = 'metadata___palette___dominant___title',
  metadata___palette___lightMuted____key = 'metadata___palette___lightMuted____key',
  metadata___palette___lightMuted____type = 'metadata___palette___lightMuted____type',
  metadata___palette___lightMuted___background = 'metadata___palette___lightMuted___background',
  metadata___palette___lightMuted___foreground = 'metadata___palette___lightMuted___foreground',
  metadata___palette___lightMuted___population = 'metadata___palette___lightMuted___population',
  metadata___palette___lightMuted___title = 'metadata___palette___lightMuted___title',
  metadata___palette___muted____key = 'metadata___palette___muted____key',
  metadata___palette___muted____type = 'metadata___palette___muted____type',
  metadata___palette___muted___background = 'metadata___palette___muted___background',
  metadata___palette___muted___foreground = 'metadata___palette___muted___foreground',
  metadata___palette___muted___population = 'metadata___palette___muted___population',
  metadata___palette___muted___title = 'metadata___palette___muted___title',
  metadata___lqip = 'metadata___lqip',
  metadata___hasAlpha = 'metadata___hasAlpha',
  metadata___isOpaque = 'metadata___isOpaque',
  fixed___base64 = 'fixed___base64',
  fixed___aspectRatio = 'fixed___aspectRatio',
  fixed___width = 'fixed___width',
  fixed___height = 'fixed___height',
  fixed___src = 'fixed___src',
  fixed___srcSet = 'fixed___srcSet',
  fixed___srcWebp = 'fixed___srcWebp',
  fixed___srcSetWebp = 'fixed___srcSetWebp',
  fluid___base64 = 'fluid___base64',
  fluid___aspectRatio = 'fluid___aspectRatio',
  fluid___src = 'fluid___src',
  fluid___srcSet = 'fluid___srcSet',
  fluid___srcWebp = 'fluid___srcWebp',
  fluid___srcSetWebp = 'fluid___srcSetWebp',
  fluid___sizes = 'fluid___sizes',
  _rawMetadata = '_rawMetadata',
  id = 'id',
  parent___id = 'parent___id',
  parent___parent___id = 'parent___parent___id',
  parent___parent___parent___id = 'parent___parent___parent___id',
  parent___parent___parent___children = 'parent___parent___parent___children',
  parent___parent___children = 'parent___parent___children',
  parent___parent___children___id = 'parent___parent___children___id',
  parent___parent___children___children = 'parent___parent___children___children',
  parent___parent___internal___content = 'parent___parent___internal___content',
  parent___parent___internal___contentDigest = 'parent___parent___internal___contentDigest',
  parent___parent___internal___description = 'parent___parent___internal___description',
  parent___parent___internal___fieldOwners = 'parent___parent___internal___fieldOwners',
  parent___parent___internal___ignoreType = 'parent___parent___internal___ignoreType',
  parent___parent___internal___mediaType = 'parent___parent___internal___mediaType',
  parent___parent___internal___owner = 'parent___parent___internal___owner',
  parent___parent___internal___type = 'parent___parent___internal___type',
  parent___children = 'parent___children',
  parent___children___id = 'parent___children___id',
  parent___children___parent___id = 'parent___children___parent___id',
  parent___children___parent___children = 'parent___children___parent___children',
  parent___children___children = 'parent___children___children',
  parent___children___children___id = 'parent___children___children___id',
  parent___children___children___children = 'parent___children___children___children',
  parent___children___internal___content = 'parent___children___internal___content',
  parent___children___internal___contentDigest = 'parent___children___internal___contentDigest',
  parent___children___internal___description = 'parent___children___internal___description',
  parent___children___internal___fieldOwners = 'parent___children___internal___fieldOwners',
  parent___children___internal___ignoreType = 'parent___children___internal___ignoreType',
  parent___children___internal___mediaType = 'parent___children___internal___mediaType',
  parent___children___internal___owner = 'parent___children___internal___owner',
  parent___children___internal___type = 'parent___children___internal___type',
  parent___internal___content = 'parent___internal___content',
  parent___internal___contentDigest = 'parent___internal___contentDigest',
  parent___internal___description = 'parent___internal___description',
  parent___internal___fieldOwners = 'parent___internal___fieldOwners',
  parent___internal___ignoreType = 'parent___internal___ignoreType',
  parent___internal___mediaType = 'parent___internal___mediaType',
  parent___internal___owner = 'parent___internal___owner',
  parent___internal___type = 'parent___internal___type',
  children = 'children',
  children___id = 'children___id',
  children___parent___id = 'children___parent___id',
  children___parent___parent___id = 'children___parent___parent___id',
  children___parent___parent___children = 'children___parent___parent___children',
  children___parent___children = 'children___parent___children',
  children___parent___children___id = 'children___parent___children___id',
  children___parent___children___children = 'children___parent___children___children',
  children___parent___internal___content = 'children___parent___internal___content',
  children___parent___internal___contentDigest = 'children___parent___internal___contentDigest',
  children___parent___internal___description = 'children___parent___internal___description',
  children___parent___internal___fieldOwners = 'children___parent___internal___fieldOwners',
  children___parent___internal___ignoreType = 'children___parent___internal___ignoreType',
  children___parent___internal___mediaType = 'children___parent___internal___mediaType',
  children___parent___internal___owner = 'children___parent___internal___owner',
  children___parent___internal___type = 'children___parent___internal___type',
  children___children = 'children___children',
  children___children___id = 'children___children___id',
  children___children___parent___id = 'children___children___parent___id',
  children___children___parent___children = 'children___children___parent___children',
  children___children___children = 'children___children___children',
  children___children___children___id = 'children___children___children___id',
  children___children___children___children = 'children___children___children___children',
  children___children___internal___content = 'children___children___internal___content',
  children___children___internal___contentDigest = 'children___children___internal___contentDigest',
  children___children___internal___description = 'children___children___internal___description',
  children___children___internal___fieldOwners = 'children___children___internal___fieldOwners',
  children___children___internal___ignoreType = 'children___children___internal___ignoreType',
  children___children___internal___mediaType = 'children___children___internal___mediaType',
  children___children___internal___owner = 'children___children___internal___owner',
  children___children___internal___type = 'children___children___internal___type',
  children___internal___content = 'children___internal___content',
  children___internal___contentDigest = 'children___internal___contentDigest',
  children___internal___description = 'children___internal___description',
  children___internal___fieldOwners = 'children___internal___fieldOwners',
  children___internal___ignoreType = 'children___internal___ignoreType',
  children___internal___mediaType = 'children___internal___mediaType',
  children___internal___owner = 'children___internal___owner',
  children___internal___type = 'children___internal___type',
  internal___content = 'internal___content',
  internal___contentDigest = 'internal___contentDigest',
  internal___description = 'internal___description',
  internal___fieldOwners = 'internal___fieldOwners',
  internal___ignoreType = 'internal___ignoreType',
  internal___mediaType = 'internal___mediaType',
  internal___owner = 'internal___owner',
  internal___type = 'internal___type'
}

export type SanityImageAssetFilterInput = {
  _id?: Maybe<StringQueryOperatorInput>
  _type?: Maybe<StringQueryOperatorInput>
  _createdAt?: Maybe<DateQueryOperatorInput>
  _updatedAt?: Maybe<DateQueryOperatorInput>
  _rev?: Maybe<StringQueryOperatorInput>
  _key?: Maybe<StringQueryOperatorInput>
  originalFilename?: Maybe<StringQueryOperatorInput>
  label?: Maybe<StringQueryOperatorInput>
  sha1hash?: Maybe<StringQueryOperatorInput>
  extension?: Maybe<StringQueryOperatorInput>
  mimeType?: Maybe<StringQueryOperatorInput>
  size?: Maybe<FloatQueryOperatorInput>
  assetId?: Maybe<StringQueryOperatorInput>
  path?: Maybe<StringQueryOperatorInput>
  url?: Maybe<StringQueryOperatorInput>
  metadata?: Maybe<SanityImageMetadataFilterInput>
  fixed?: Maybe<SanityImageFixedFilterInput>
  fluid?: Maybe<SanityImageFluidFilterInput>
  _rawMetadata?: Maybe<JsonQueryOperatorInput>
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
}

export type SanityImageAssetGroupConnection = {
  __typename?: 'SanityImageAssetGroupConnection'
  totalCount: Scalars['Int']
  edges: Array<SanityImageAssetEdge>
  nodes: Array<SanityImageAsset>
  pageInfo: PageInfo
  field: Scalars['String']
  fieldValue?: Maybe<Scalars['String']>
}

export type SanityImageAssetSortInput = {
  fields?: Maybe<Array<Maybe<SanityImageAssetFieldsEnum>>>
  order?: Maybe<Array<Maybe<SortOrderEnum>>>
}

export type SanityImageCrop = {
  __typename?: 'SanityImageCrop'
  _key?: Maybe<Scalars['String']>
  _type?: Maybe<Scalars['String']>
  top?: Maybe<Scalars['Float']>
  bottom?: Maybe<Scalars['Float']>
  left?: Maybe<Scalars['Float']>
  right?: Maybe<Scalars['Float']>
}

export type SanityImageCropFilterInput = {
  _key?: Maybe<StringQueryOperatorInput>
  _type?: Maybe<StringQueryOperatorInput>
  top?: Maybe<FloatQueryOperatorInput>
  bottom?: Maybe<FloatQueryOperatorInput>
  left?: Maybe<FloatQueryOperatorInput>
  right?: Maybe<FloatQueryOperatorInput>
}

export type SanityImageDimensions = {
  __typename?: 'SanityImageDimensions'
  _key?: Maybe<Scalars['String']>
  _type?: Maybe<Scalars['String']>
  height?: Maybe<Scalars['Float']>
  width?: Maybe<Scalars['Float']>
  aspectRatio?: Maybe<Scalars['Float']>
}

export type SanityImageDimensionsFilterInput = {
  _key?: Maybe<StringQueryOperatorInput>
  _type?: Maybe<StringQueryOperatorInput>
  height?: Maybe<FloatQueryOperatorInput>
  width?: Maybe<FloatQueryOperatorInput>
  aspectRatio?: Maybe<FloatQueryOperatorInput>
}

export type SanityImageFilterInput = {
  _key?: Maybe<StringQueryOperatorInput>
  _type?: Maybe<StringQueryOperatorInput>
  asset?: Maybe<SanityImageAssetFilterInput>
  hotspot?: Maybe<SanityImageHotspotFilterInput>
  crop?: Maybe<SanityImageCropFilterInput>
}

export type SanityImageFixed = {
  __typename?: 'SanityImageFixed'
  base64?: Maybe<Scalars['String']>
  aspectRatio?: Maybe<Scalars['Float']>
  width?: Maybe<Scalars['Float']>
  height?: Maybe<Scalars['Float']>
  src?: Maybe<Scalars['String']>
  srcSet?: Maybe<Scalars['String']>
  srcWebp?: Maybe<Scalars['String']>
  srcSetWebp?: Maybe<Scalars['String']>
}

export type SanityImageFixedFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>
  aspectRatio?: Maybe<FloatQueryOperatorInput>
  width?: Maybe<FloatQueryOperatorInput>
  height?: Maybe<FloatQueryOperatorInput>
  src?: Maybe<StringQueryOperatorInput>
  srcSet?: Maybe<StringQueryOperatorInput>
  srcWebp?: Maybe<StringQueryOperatorInput>
  srcSetWebp?: Maybe<StringQueryOperatorInput>
}

export type SanityImageFluid = {
  __typename?: 'SanityImageFluid'
  base64?: Maybe<Scalars['String']>
  aspectRatio?: Maybe<Scalars['Float']>
  src?: Maybe<Scalars['String']>
  srcSet?: Maybe<Scalars['String']>
  srcWebp?: Maybe<Scalars['String']>
  srcSetWebp?: Maybe<Scalars['String']>
  sizes?: Maybe<Scalars['String']>
}

export type SanityImageFluidFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>
  aspectRatio?: Maybe<FloatQueryOperatorInput>
  src?: Maybe<StringQueryOperatorInput>
  srcSet?: Maybe<StringQueryOperatorInput>
  srcWebp?: Maybe<StringQueryOperatorInput>
  srcSetWebp?: Maybe<StringQueryOperatorInput>
  sizes?: Maybe<StringQueryOperatorInput>
}

export enum SanityImageFormat {
  NO_CHANGE = 'NO_CHANGE',
  JPG = 'JPG',
  PNG = 'PNG',
  WEBP = 'WEBP'
}

export type SanityImageHotspot = {
  __typename?: 'SanityImageHotspot'
  _key?: Maybe<Scalars['String']>
  _type?: Maybe<Scalars['String']>
  x?: Maybe<Scalars['Float']>
  y?: Maybe<Scalars['Float']>
  height?: Maybe<Scalars['Float']>
  width?: Maybe<Scalars['Float']>
}

export type SanityImageHotspotFilterInput = {
  _key?: Maybe<StringQueryOperatorInput>
  _type?: Maybe<StringQueryOperatorInput>
  x?: Maybe<FloatQueryOperatorInput>
  y?: Maybe<FloatQueryOperatorInput>
  height?: Maybe<FloatQueryOperatorInput>
  width?: Maybe<FloatQueryOperatorInput>
}

export type SanityImageMetadata = {
  __typename?: 'SanityImageMetadata'
  _key?: Maybe<Scalars['String']>
  _type?: Maybe<Scalars['String']>
  location?: Maybe<SanityGeopoint>
  dimensions?: Maybe<SanityImageDimensions>
  palette?: Maybe<SanityImagePalette>
  lqip?: Maybe<Scalars['String']>
  hasAlpha?: Maybe<Scalars['Boolean']>
  isOpaque?: Maybe<Scalars['Boolean']>
}

export type SanityImageMetadataFilterInput = {
  _key?: Maybe<StringQueryOperatorInput>
  _type?: Maybe<StringQueryOperatorInput>
  location?: Maybe<SanityGeopointFilterInput>
  dimensions?: Maybe<SanityImageDimensionsFilterInput>
  palette?: Maybe<SanityImagePaletteFilterInput>
  lqip?: Maybe<StringQueryOperatorInput>
  hasAlpha?: Maybe<BooleanQueryOperatorInput>
  isOpaque?: Maybe<BooleanQueryOperatorInput>
}

export type SanityImagePalette = {
  __typename?: 'SanityImagePalette'
  _key?: Maybe<Scalars['String']>
  _type?: Maybe<Scalars['String']>
  darkMuted?: Maybe<SanityImagePaletteSwatch>
  lightVibrant?: Maybe<SanityImagePaletteSwatch>
  darkVibrant?: Maybe<SanityImagePaletteSwatch>
  vibrant?: Maybe<SanityImagePaletteSwatch>
  dominant?: Maybe<SanityImagePaletteSwatch>
  lightMuted?: Maybe<SanityImagePaletteSwatch>
  muted?: Maybe<SanityImagePaletteSwatch>
}

export type SanityImagePaletteFilterInput = {
  _key?: Maybe<StringQueryOperatorInput>
  _type?: Maybe<StringQueryOperatorInput>
  darkMuted?: Maybe<SanityImagePaletteSwatchFilterInput>
  lightVibrant?: Maybe<SanityImagePaletteSwatchFilterInput>
  darkVibrant?: Maybe<SanityImagePaletteSwatchFilterInput>
  vibrant?: Maybe<SanityImagePaletteSwatchFilterInput>
  dominant?: Maybe<SanityImagePaletteSwatchFilterInput>
  lightMuted?: Maybe<SanityImagePaletteSwatchFilterInput>
  muted?: Maybe<SanityImagePaletteSwatchFilterInput>
}

export type SanityImagePaletteSwatch = {
  __typename?: 'SanityImagePaletteSwatch'
  _key?: Maybe<Scalars['String']>
  _type?: Maybe<Scalars['String']>
  background?: Maybe<Scalars['String']>
  foreground?: Maybe<Scalars['String']>
  population?: Maybe<Scalars['Float']>
  title?: Maybe<Scalars['String']>
}

export type SanityImagePaletteSwatchFilterInput = {
  _key?: Maybe<StringQueryOperatorInput>
  _type?: Maybe<StringQueryOperatorInput>
  background?: Maybe<StringQueryOperatorInput>
  foreground?: Maybe<StringQueryOperatorInput>
  population?: Maybe<FloatQueryOperatorInput>
  title?: Maybe<StringQueryOperatorInput>
}

export type SanityMinistryPage = SanityDocument &
  Node & {
    __typename?: 'SanityMinistryPage'
    _id?: Maybe<Scalars['String']>
    _type?: Maybe<Scalars['String']>
    _createdAt?: Maybe<Scalars['Date']>
    _updatedAt?: Maybe<Scalars['Date']>
    _rev?: Maybe<Scalars['String']>
    _key?: Maybe<Scalars['String']>
    name?: Maybe<Scalars['String']>
    url?: Maybe<SanitySlug>
    subLogo?: Maybe<SanityImage>
    sections?: Maybe<Array<Maybe<SanityPageSection>>>
    content?: Maybe<Array<Maybe<SanityBlock>>>
    _rawUrl?: Maybe<Scalars['JSON']>
    _rawSubLogo?: Maybe<Scalars['JSON']>
    _rawContent?: Maybe<Scalars['JSON']>
    _rawSections?: Maybe<Scalars['JSON']>
    id: Scalars['ID']
    parent?: Maybe<Node>
    children: Array<Node>
    internal: Internal
  }

export type SanityMinistryPage_CreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>
  fromNow?: Maybe<Scalars['Boolean']>
  difference?: Maybe<Scalars['String']>
  locale?: Maybe<Scalars['String']>
}

export type SanityMinistryPage_UpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>
  fromNow?: Maybe<Scalars['Boolean']>
  difference?: Maybe<Scalars['String']>
  locale?: Maybe<Scalars['String']>
}

export type SanityMinistryPage_RawUrlArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>
}

export type SanityMinistryPage_RawSubLogoArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>
}

export type SanityMinistryPage_RawContentArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>
}

export type SanityMinistryPage_RawSectionsArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>
}

export type SanityMinistryPageConnection = {
  __typename?: 'SanityMinistryPageConnection'
  totalCount: Scalars['Int']
  edges: Array<SanityMinistryPageEdge>
  nodes: Array<SanityMinistryPage>
  pageInfo: PageInfo
  distinct: Array<Scalars['String']>
  group: Array<SanityMinistryPageGroupConnection>
}

export type SanityMinistryPageConnectionDistinctArgs = {
  field: SanityMinistryPageFieldsEnum
}

export type SanityMinistryPageConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  field: SanityMinistryPageFieldsEnum
}

export type SanityMinistryPageEdge = {
  __typename?: 'SanityMinistryPageEdge'
  next?: Maybe<SanityMinistryPage>
  node: SanityMinistryPage
  previous?: Maybe<SanityMinistryPage>
}

export enum SanityMinistryPageFieldsEnum {
  _id = '_id',
  _type = '_type',
  _createdAt = '_createdAt',
  _updatedAt = '_updatedAt',
  _rev = '_rev',
  _key = '_key',
  name = 'name',
  url____key = 'url____key',
  url____type = 'url____type',
  url___current = 'url___current',
  subLogo____key = 'subLogo____key',
  subLogo____type = 'subLogo____type',
  subLogo___asset____id = 'subLogo___asset____id',
  subLogo___asset____type = 'subLogo___asset____type',
  subLogo___asset____createdAt = 'subLogo___asset____createdAt',
  subLogo___asset____updatedAt = 'subLogo___asset____updatedAt',
  subLogo___asset____rev = 'subLogo___asset____rev',
  subLogo___asset____key = 'subLogo___asset____key',
  subLogo___asset___originalFilename = 'subLogo___asset___originalFilename',
  subLogo___asset___label = 'subLogo___asset___label',
  subLogo___asset___sha1hash = 'subLogo___asset___sha1hash',
  subLogo___asset___extension = 'subLogo___asset___extension',
  subLogo___asset___mimeType = 'subLogo___asset___mimeType',
  subLogo___asset___size = 'subLogo___asset___size',
  subLogo___asset___assetId = 'subLogo___asset___assetId',
  subLogo___asset___path = 'subLogo___asset___path',
  subLogo___asset___url = 'subLogo___asset___url',
  subLogo___asset___metadata____key = 'subLogo___asset___metadata____key',
  subLogo___asset___metadata____type = 'subLogo___asset___metadata____type',
  subLogo___asset___metadata___lqip = 'subLogo___asset___metadata___lqip',
  subLogo___asset___metadata___hasAlpha = 'subLogo___asset___metadata___hasAlpha',
  subLogo___asset___metadata___isOpaque = 'subLogo___asset___metadata___isOpaque',
  subLogo___asset___fixed___base64 = 'subLogo___asset___fixed___base64',
  subLogo___asset___fixed___aspectRatio = 'subLogo___asset___fixed___aspectRatio',
  subLogo___asset___fixed___width = 'subLogo___asset___fixed___width',
  subLogo___asset___fixed___height = 'subLogo___asset___fixed___height',
  subLogo___asset___fixed___src = 'subLogo___asset___fixed___src',
  subLogo___asset___fixed___srcSet = 'subLogo___asset___fixed___srcSet',
  subLogo___asset___fixed___srcWebp = 'subLogo___asset___fixed___srcWebp',
  subLogo___asset___fixed___srcSetWebp = 'subLogo___asset___fixed___srcSetWebp',
  subLogo___asset___fluid___base64 = 'subLogo___asset___fluid___base64',
  subLogo___asset___fluid___aspectRatio = 'subLogo___asset___fluid___aspectRatio',
  subLogo___asset___fluid___src = 'subLogo___asset___fluid___src',
  subLogo___asset___fluid___srcSet = 'subLogo___asset___fluid___srcSet',
  subLogo___asset___fluid___srcWebp = 'subLogo___asset___fluid___srcWebp',
  subLogo___asset___fluid___srcSetWebp = 'subLogo___asset___fluid___srcSetWebp',
  subLogo___asset___fluid___sizes = 'subLogo___asset___fluid___sizes',
  subLogo___asset____rawMetadata = 'subLogo___asset____rawMetadata',
  subLogo___asset___id = 'subLogo___asset___id',
  subLogo___asset___parent___id = 'subLogo___asset___parent___id',
  subLogo___asset___parent___children = 'subLogo___asset___parent___children',
  subLogo___asset___children = 'subLogo___asset___children',
  subLogo___asset___children___id = 'subLogo___asset___children___id',
  subLogo___asset___children___children = 'subLogo___asset___children___children',
  subLogo___asset___internal___content = 'subLogo___asset___internal___content',
  subLogo___asset___internal___contentDigest = 'subLogo___asset___internal___contentDigest',
  subLogo___asset___internal___description = 'subLogo___asset___internal___description',
  subLogo___asset___internal___fieldOwners = 'subLogo___asset___internal___fieldOwners',
  subLogo___asset___internal___ignoreType = 'subLogo___asset___internal___ignoreType',
  subLogo___asset___internal___mediaType = 'subLogo___asset___internal___mediaType',
  subLogo___asset___internal___owner = 'subLogo___asset___internal___owner',
  subLogo___asset___internal___type = 'subLogo___asset___internal___type',
  subLogo___hotspot____key = 'subLogo___hotspot____key',
  subLogo___hotspot____type = 'subLogo___hotspot____type',
  subLogo___hotspot___x = 'subLogo___hotspot___x',
  subLogo___hotspot___y = 'subLogo___hotspot___y',
  subLogo___hotspot___height = 'subLogo___hotspot___height',
  subLogo___hotspot___width = 'subLogo___hotspot___width',
  subLogo___crop____key = 'subLogo___crop____key',
  subLogo___crop____type = 'subLogo___crop____type',
  subLogo___crop___top = 'subLogo___crop___top',
  subLogo___crop___bottom = 'subLogo___crop___bottom',
  subLogo___crop___left = 'subLogo___crop___left',
  subLogo___crop___right = 'subLogo___crop___right',
  sections = 'sections',
  sections____key = 'sections____key',
  sections____type = 'sections____type',
  sections___name = 'sections___name',
  sections___urlSuffix____key = 'sections___urlSuffix____key',
  sections___urlSuffix____type = 'sections___urlSuffix____type',
  sections___urlSuffix___current = 'sections___urlSuffix___current',
  sections___content = 'sections___content',
  sections___content____key = 'sections___content____key',
  sections___content____type = 'sections___content____type',
  sections___content___sanityChildren = 'sections___content___sanityChildren',
  sections___content___sanityChildren____key = 'sections___content___sanityChildren____key',
  sections___content___sanityChildren____type = 'sections___content___sanityChildren____type',
  sections___content___sanityChildren___marks = 'sections___content___sanityChildren___marks',
  sections___content___sanityChildren___text = 'sections___content___sanityChildren___text',
  sections___content___style = 'sections___content___style',
  sections___content___list = 'sections___content___list',
  content = 'content',
  content____key = 'content____key',
  content____type = 'content____type',
  content___sanityChildren = 'content___sanityChildren',
  content___sanityChildren____key = 'content___sanityChildren____key',
  content___sanityChildren____type = 'content___sanityChildren____type',
  content___sanityChildren___marks = 'content___sanityChildren___marks',
  content___sanityChildren___text = 'content___sanityChildren___text',
  content___style = 'content___style',
  content___list = 'content___list',
  _rawUrl = '_rawUrl',
  _rawSubLogo = '_rawSubLogo',
  _rawContent = '_rawContent',
  _rawSections = '_rawSections',
  id = 'id',
  parent___id = 'parent___id',
  parent___parent___id = 'parent___parent___id',
  parent___parent___parent___id = 'parent___parent___parent___id',
  parent___parent___parent___children = 'parent___parent___parent___children',
  parent___parent___children = 'parent___parent___children',
  parent___parent___children___id = 'parent___parent___children___id',
  parent___parent___children___children = 'parent___parent___children___children',
  parent___parent___internal___content = 'parent___parent___internal___content',
  parent___parent___internal___contentDigest = 'parent___parent___internal___contentDigest',
  parent___parent___internal___description = 'parent___parent___internal___description',
  parent___parent___internal___fieldOwners = 'parent___parent___internal___fieldOwners',
  parent___parent___internal___ignoreType = 'parent___parent___internal___ignoreType',
  parent___parent___internal___mediaType = 'parent___parent___internal___mediaType',
  parent___parent___internal___owner = 'parent___parent___internal___owner',
  parent___parent___internal___type = 'parent___parent___internal___type',
  parent___children = 'parent___children',
  parent___children___id = 'parent___children___id',
  parent___children___parent___id = 'parent___children___parent___id',
  parent___children___parent___children = 'parent___children___parent___children',
  parent___children___children = 'parent___children___children',
  parent___children___children___id = 'parent___children___children___id',
  parent___children___children___children = 'parent___children___children___children',
  parent___children___internal___content = 'parent___children___internal___content',
  parent___children___internal___contentDigest = 'parent___children___internal___contentDigest',
  parent___children___internal___description = 'parent___children___internal___description',
  parent___children___internal___fieldOwners = 'parent___children___internal___fieldOwners',
  parent___children___internal___ignoreType = 'parent___children___internal___ignoreType',
  parent___children___internal___mediaType = 'parent___children___internal___mediaType',
  parent___children___internal___owner = 'parent___children___internal___owner',
  parent___children___internal___type = 'parent___children___internal___type',
  parent___internal___content = 'parent___internal___content',
  parent___internal___contentDigest = 'parent___internal___contentDigest',
  parent___internal___description = 'parent___internal___description',
  parent___internal___fieldOwners = 'parent___internal___fieldOwners',
  parent___internal___ignoreType = 'parent___internal___ignoreType',
  parent___internal___mediaType = 'parent___internal___mediaType',
  parent___internal___owner = 'parent___internal___owner',
  parent___internal___type = 'parent___internal___type',
  children = 'children',
  children___id = 'children___id',
  children___parent___id = 'children___parent___id',
  children___parent___parent___id = 'children___parent___parent___id',
  children___parent___parent___children = 'children___parent___parent___children',
  children___parent___children = 'children___parent___children',
  children___parent___children___id = 'children___parent___children___id',
  children___parent___children___children = 'children___parent___children___children',
  children___parent___internal___content = 'children___parent___internal___content',
  children___parent___internal___contentDigest = 'children___parent___internal___contentDigest',
  children___parent___internal___description = 'children___parent___internal___description',
  children___parent___internal___fieldOwners = 'children___parent___internal___fieldOwners',
  children___parent___internal___ignoreType = 'children___parent___internal___ignoreType',
  children___parent___internal___mediaType = 'children___parent___internal___mediaType',
  children___parent___internal___owner = 'children___parent___internal___owner',
  children___parent___internal___type = 'children___parent___internal___type',
  children___children = 'children___children',
  children___children___id = 'children___children___id',
  children___children___parent___id = 'children___children___parent___id',
  children___children___parent___children = 'children___children___parent___children',
  children___children___children = 'children___children___children',
  children___children___children___id = 'children___children___children___id',
  children___children___children___children = 'children___children___children___children',
  children___children___internal___content = 'children___children___internal___content',
  children___children___internal___contentDigest = 'children___children___internal___contentDigest',
  children___children___internal___description = 'children___children___internal___description',
  children___children___internal___fieldOwners = 'children___children___internal___fieldOwners',
  children___children___internal___ignoreType = 'children___children___internal___ignoreType',
  children___children___internal___mediaType = 'children___children___internal___mediaType',
  children___children___internal___owner = 'children___children___internal___owner',
  children___children___internal___type = 'children___children___internal___type',
  children___internal___content = 'children___internal___content',
  children___internal___contentDigest = 'children___internal___contentDigest',
  children___internal___description = 'children___internal___description',
  children___internal___fieldOwners = 'children___internal___fieldOwners',
  children___internal___ignoreType = 'children___internal___ignoreType',
  children___internal___mediaType = 'children___internal___mediaType',
  children___internal___owner = 'children___internal___owner',
  children___internal___type = 'children___internal___type',
  internal___content = 'internal___content',
  internal___contentDigest = 'internal___contentDigest',
  internal___description = 'internal___description',
  internal___fieldOwners = 'internal___fieldOwners',
  internal___ignoreType = 'internal___ignoreType',
  internal___mediaType = 'internal___mediaType',
  internal___owner = 'internal___owner',
  internal___type = 'internal___type'
}

export type SanityMinistryPageFilterInput = {
  _id?: Maybe<StringQueryOperatorInput>
  _type?: Maybe<StringQueryOperatorInput>
  _createdAt?: Maybe<DateQueryOperatorInput>
  _updatedAt?: Maybe<DateQueryOperatorInput>
  _rev?: Maybe<StringQueryOperatorInput>
  _key?: Maybe<StringQueryOperatorInput>
  name?: Maybe<StringQueryOperatorInput>
  url?: Maybe<SanitySlugFilterInput>
  subLogo?: Maybe<SanityImageFilterInput>
  sections?: Maybe<SanityPageSectionFilterListInput>
  content?: Maybe<SanityBlockFilterListInput>
  _rawUrl?: Maybe<JsonQueryOperatorInput>
  _rawSubLogo?: Maybe<JsonQueryOperatorInput>
  _rawContent?: Maybe<JsonQueryOperatorInput>
  _rawSections?: Maybe<JsonQueryOperatorInput>
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
}

export type SanityMinistryPageGroupConnection = {
  __typename?: 'SanityMinistryPageGroupConnection'
  totalCount: Scalars['Int']
  edges: Array<SanityMinistryPageEdge>
  nodes: Array<SanityMinistryPage>
  pageInfo: PageInfo
  field: Scalars['String']
  fieldValue?: Maybe<Scalars['String']>
}

export type SanityMinistryPageOrPage = SanityMinistryPage | SanityPage

export type SanityMinistryPageSortInput = {
  fields?: Maybe<Array<Maybe<SanityMinistryPageFieldsEnum>>>
  order?: Maybe<Array<Maybe<SortOrderEnum>>>
}

export type SanityNavigation = SanityDocument &
  Node & {
    __typename?: 'SanityNavigation'
    _id?: Maybe<Scalars['String']>
    _type?: Maybe<Scalars['String']>
    _createdAt?: Maybe<Scalars['Date']>
    _updatedAt?: Maybe<Scalars['Date']>
    _rev?: Maybe<Scalars['String']>
    _key?: Maybe<Scalars['String']>
    title?: Maybe<Scalars['String']>
    items?: Maybe<Array<Maybe<SanityNestedMenuOrPageLinkOrPlainLink>>>
    _rawItems?: Maybe<Scalars['JSON']>
    id: Scalars['ID']
    parent?: Maybe<Node>
    children: Array<Node>
    internal: Internal
  }

export type SanityNavigation_CreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>
  fromNow?: Maybe<Scalars['Boolean']>
  difference?: Maybe<Scalars['String']>
  locale?: Maybe<Scalars['String']>
}

export type SanityNavigation_UpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>
  fromNow?: Maybe<Scalars['Boolean']>
  difference?: Maybe<Scalars['String']>
  locale?: Maybe<Scalars['String']>
}

export type SanityNavigation_RawItemsArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>
}

export type SanityNavigationConnection = {
  __typename?: 'SanityNavigationConnection'
  totalCount: Scalars['Int']
  edges: Array<SanityNavigationEdge>
  nodes: Array<SanityNavigation>
  pageInfo: PageInfo
  distinct: Array<Scalars['String']>
  group: Array<SanityNavigationGroupConnection>
}

export type SanityNavigationConnectionDistinctArgs = {
  field: SanityNavigationFieldsEnum
}

export type SanityNavigationConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  field: SanityNavigationFieldsEnum
}

export type SanityNavigationEdge = {
  __typename?: 'SanityNavigationEdge'
  next?: Maybe<SanityNavigation>
  node: SanityNavigation
  previous?: Maybe<SanityNavigation>
}

export enum SanityNavigationFieldsEnum {
  _id = '_id',
  _type = '_type',
  _createdAt = '_createdAt',
  _updatedAt = '_updatedAt',
  _rev = '_rev',
  _key = '_key',
  title = 'title',
  _rawItems = '_rawItems',
  id = 'id',
  parent___id = 'parent___id',
  parent___parent___id = 'parent___parent___id',
  parent___parent___parent___id = 'parent___parent___parent___id',
  parent___parent___parent___children = 'parent___parent___parent___children',
  parent___parent___children = 'parent___parent___children',
  parent___parent___children___id = 'parent___parent___children___id',
  parent___parent___children___children = 'parent___parent___children___children',
  parent___parent___internal___content = 'parent___parent___internal___content',
  parent___parent___internal___contentDigest = 'parent___parent___internal___contentDigest',
  parent___parent___internal___description = 'parent___parent___internal___description',
  parent___parent___internal___fieldOwners = 'parent___parent___internal___fieldOwners',
  parent___parent___internal___ignoreType = 'parent___parent___internal___ignoreType',
  parent___parent___internal___mediaType = 'parent___parent___internal___mediaType',
  parent___parent___internal___owner = 'parent___parent___internal___owner',
  parent___parent___internal___type = 'parent___parent___internal___type',
  parent___children = 'parent___children',
  parent___children___id = 'parent___children___id',
  parent___children___parent___id = 'parent___children___parent___id',
  parent___children___parent___children = 'parent___children___parent___children',
  parent___children___children = 'parent___children___children',
  parent___children___children___id = 'parent___children___children___id',
  parent___children___children___children = 'parent___children___children___children',
  parent___children___internal___content = 'parent___children___internal___content',
  parent___children___internal___contentDigest = 'parent___children___internal___contentDigest',
  parent___children___internal___description = 'parent___children___internal___description',
  parent___children___internal___fieldOwners = 'parent___children___internal___fieldOwners',
  parent___children___internal___ignoreType = 'parent___children___internal___ignoreType',
  parent___children___internal___mediaType = 'parent___children___internal___mediaType',
  parent___children___internal___owner = 'parent___children___internal___owner',
  parent___children___internal___type = 'parent___children___internal___type',
  parent___internal___content = 'parent___internal___content',
  parent___internal___contentDigest = 'parent___internal___contentDigest',
  parent___internal___description = 'parent___internal___description',
  parent___internal___fieldOwners = 'parent___internal___fieldOwners',
  parent___internal___ignoreType = 'parent___internal___ignoreType',
  parent___internal___mediaType = 'parent___internal___mediaType',
  parent___internal___owner = 'parent___internal___owner',
  parent___internal___type = 'parent___internal___type',
  children = 'children',
  children___id = 'children___id',
  children___parent___id = 'children___parent___id',
  children___parent___parent___id = 'children___parent___parent___id',
  children___parent___parent___children = 'children___parent___parent___children',
  children___parent___children = 'children___parent___children',
  children___parent___children___id = 'children___parent___children___id',
  children___parent___children___children = 'children___parent___children___children',
  children___parent___internal___content = 'children___parent___internal___content',
  children___parent___internal___contentDigest = 'children___parent___internal___contentDigest',
  children___parent___internal___description = 'children___parent___internal___description',
  children___parent___internal___fieldOwners = 'children___parent___internal___fieldOwners',
  children___parent___internal___ignoreType = 'children___parent___internal___ignoreType',
  children___parent___internal___mediaType = 'children___parent___internal___mediaType',
  children___parent___internal___owner = 'children___parent___internal___owner',
  children___parent___internal___type = 'children___parent___internal___type',
  children___children = 'children___children',
  children___children___id = 'children___children___id',
  children___children___parent___id = 'children___children___parent___id',
  children___children___parent___children = 'children___children___parent___children',
  children___children___children = 'children___children___children',
  children___children___children___id = 'children___children___children___id',
  children___children___children___children = 'children___children___children___children',
  children___children___internal___content = 'children___children___internal___content',
  children___children___internal___contentDigest = 'children___children___internal___contentDigest',
  children___children___internal___description = 'children___children___internal___description',
  children___children___internal___fieldOwners = 'children___children___internal___fieldOwners',
  children___children___internal___ignoreType = 'children___children___internal___ignoreType',
  children___children___internal___mediaType = 'children___children___internal___mediaType',
  children___children___internal___owner = 'children___children___internal___owner',
  children___children___internal___type = 'children___children___internal___type',
  children___internal___content = 'children___internal___content',
  children___internal___contentDigest = 'children___internal___contentDigest',
  children___internal___description = 'children___internal___description',
  children___internal___fieldOwners = 'children___internal___fieldOwners',
  children___internal___ignoreType = 'children___internal___ignoreType',
  children___internal___mediaType = 'children___internal___mediaType',
  children___internal___owner = 'children___internal___owner',
  children___internal___type = 'children___internal___type',
  internal___content = 'internal___content',
  internal___contentDigest = 'internal___contentDigest',
  internal___description = 'internal___description',
  internal___fieldOwners = 'internal___fieldOwners',
  internal___ignoreType = 'internal___ignoreType',
  internal___mediaType = 'internal___mediaType',
  internal___owner = 'internal___owner',
  internal___type = 'internal___type'
}

export type SanityNavigationFilterInput = {
  _id?: Maybe<StringQueryOperatorInput>
  _type?: Maybe<StringQueryOperatorInput>
  _createdAt?: Maybe<DateQueryOperatorInput>
  _updatedAt?: Maybe<DateQueryOperatorInput>
  _rev?: Maybe<StringQueryOperatorInput>
  _key?: Maybe<StringQueryOperatorInput>
  title?: Maybe<StringQueryOperatorInput>
  _rawItems?: Maybe<JsonQueryOperatorInput>
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
}

export type SanityNavigationGroupConnection = {
  __typename?: 'SanityNavigationGroupConnection'
  totalCount: Scalars['Int']
  edges: Array<SanityNavigationEdge>
  nodes: Array<SanityNavigation>
  pageInfo: PageInfo
  field: Scalars['String']
  fieldValue?: Maybe<Scalars['String']>
}

export type SanityNavigationSortInput = {
  fields?: Maybe<Array<Maybe<SanityNavigationFieldsEnum>>>
  order?: Maybe<Array<Maybe<SortOrderEnum>>>
}

export type SanityNestedMenu = {
  __typename?: 'SanityNestedMenu'
  _key?: Maybe<Scalars['String']>
  _type?: Maybe<Scalars['String']>
  text?: Maybe<Scalars['String']>
  items?: Maybe<Array<Maybe<SanityPageLinkOrPlainLink>>>
}

export type SanityNestedMenuOrPageLinkOrPlainLink =
  | SanityNestedMenu
  | SanityPageLink
  | SanityPlainLink

export type SanityPage = SanityDocument &
  Node & {
    __typename?: 'SanityPage'
    _id?: Maybe<Scalars['String']>
    _type?: Maybe<Scalars['String']>
    _createdAt?: Maybe<Scalars['Date']>
    _updatedAt?: Maybe<Scalars['Date']>
    _rev?: Maybe<Scalars['String']>
    _key?: Maybe<Scalars['String']>
    name?: Maybe<Scalars['String']>
    url?: Maybe<SanitySlug>
    _rawUrl?: Maybe<Scalars['JSON']>
    id: Scalars['ID']
    parent?: Maybe<Node>
    children: Array<Node>
    internal: Internal
  }

export type SanityPage_CreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>
  fromNow?: Maybe<Scalars['Boolean']>
  difference?: Maybe<Scalars['String']>
  locale?: Maybe<Scalars['String']>
}

export type SanityPage_UpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>
  fromNow?: Maybe<Scalars['Boolean']>
  difference?: Maybe<Scalars['String']>
  locale?: Maybe<Scalars['String']>
}

export type SanityPage_RawUrlArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>
}

export type SanityPageConnection = {
  __typename?: 'SanityPageConnection'
  totalCount: Scalars['Int']
  edges: Array<SanityPageEdge>
  nodes: Array<SanityPage>
  pageInfo: PageInfo
  distinct: Array<Scalars['String']>
  group: Array<SanityPageGroupConnection>
}

export type SanityPageConnectionDistinctArgs = {
  field: SanityPageFieldsEnum
}

export type SanityPageConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  field: SanityPageFieldsEnum
}

export type SanityPageEdge = {
  __typename?: 'SanityPageEdge'
  next?: Maybe<SanityPage>
  node: SanityPage
  previous?: Maybe<SanityPage>
}

export enum SanityPageFieldsEnum {
  _id = '_id',
  _type = '_type',
  _createdAt = '_createdAt',
  _updatedAt = '_updatedAt',
  _rev = '_rev',
  _key = '_key',
  name = 'name',
  url____key = 'url____key',
  url____type = 'url____type',
  url___current = 'url___current',
  _rawUrl = '_rawUrl',
  id = 'id',
  parent___id = 'parent___id',
  parent___parent___id = 'parent___parent___id',
  parent___parent___parent___id = 'parent___parent___parent___id',
  parent___parent___parent___children = 'parent___parent___parent___children',
  parent___parent___children = 'parent___parent___children',
  parent___parent___children___id = 'parent___parent___children___id',
  parent___parent___children___children = 'parent___parent___children___children',
  parent___parent___internal___content = 'parent___parent___internal___content',
  parent___parent___internal___contentDigest = 'parent___parent___internal___contentDigest',
  parent___parent___internal___description = 'parent___parent___internal___description',
  parent___parent___internal___fieldOwners = 'parent___parent___internal___fieldOwners',
  parent___parent___internal___ignoreType = 'parent___parent___internal___ignoreType',
  parent___parent___internal___mediaType = 'parent___parent___internal___mediaType',
  parent___parent___internal___owner = 'parent___parent___internal___owner',
  parent___parent___internal___type = 'parent___parent___internal___type',
  parent___children = 'parent___children',
  parent___children___id = 'parent___children___id',
  parent___children___parent___id = 'parent___children___parent___id',
  parent___children___parent___children = 'parent___children___parent___children',
  parent___children___children = 'parent___children___children',
  parent___children___children___id = 'parent___children___children___id',
  parent___children___children___children = 'parent___children___children___children',
  parent___children___internal___content = 'parent___children___internal___content',
  parent___children___internal___contentDigest = 'parent___children___internal___contentDigest',
  parent___children___internal___description = 'parent___children___internal___description',
  parent___children___internal___fieldOwners = 'parent___children___internal___fieldOwners',
  parent___children___internal___ignoreType = 'parent___children___internal___ignoreType',
  parent___children___internal___mediaType = 'parent___children___internal___mediaType',
  parent___children___internal___owner = 'parent___children___internal___owner',
  parent___children___internal___type = 'parent___children___internal___type',
  parent___internal___content = 'parent___internal___content',
  parent___internal___contentDigest = 'parent___internal___contentDigest',
  parent___internal___description = 'parent___internal___description',
  parent___internal___fieldOwners = 'parent___internal___fieldOwners',
  parent___internal___ignoreType = 'parent___internal___ignoreType',
  parent___internal___mediaType = 'parent___internal___mediaType',
  parent___internal___owner = 'parent___internal___owner',
  parent___internal___type = 'parent___internal___type',
  children = 'children',
  children___id = 'children___id',
  children___parent___id = 'children___parent___id',
  children___parent___parent___id = 'children___parent___parent___id',
  children___parent___parent___children = 'children___parent___parent___children',
  children___parent___children = 'children___parent___children',
  children___parent___children___id = 'children___parent___children___id',
  children___parent___children___children = 'children___parent___children___children',
  children___parent___internal___content = 'children___parent___internal___content',
  children___parent___internal___contentDigest = 'children___parent___internal___contentDigest',
  children___parent___internal___description = 'children___parent___internal___description',
  children___parent___internal___fieldOwners = 'children___parent___internal___fieldOwners',
  children___parent___internal___ignoreType = 'children___parent___internal___ignoreType',
  children___parent___internal___mediaType = 'children___parent___internal___mediaType',
  children___parent___internal___owner = 'children___parent___internal___owner',
  children___parent___internal___type = 'children___parent___internal___type',
  children___children = 'children___children',
  children___children___id = 'children___children___id',
  children___children___parent___id = 'children___children___parent___id',
  children___children___parent___children = 'children___children___parent___children',
  children___children___children = 'children___children___children',
  children___children___children___id = 'children___children___children___id',
  children___children___children___children = 'children___children___children___children',
  children___children___internal___content = 'children___children___internal___content',
  children___children___internal___contentDigest = 'children___children___internal___contentDigest',
  children___children___internal___description = 'children___children___internal___description',
  children___children___internal___fieldOwners = 'children___children___internal___fieldOwners',
  children___children___internal___ignoreType = 'children___children___internal___ignoreType',
  children___children___internal___mediaType = 'children___children___internal___mediaType',
  children___children___internal___owner = 'children___children___internal___owner',
  children___children___internal___type = 'children___children___internal___type',
  children___internal___content = 'children___internal___content',
  children___internal___contentDigest = 'children___internal___contentDigest',
  children___internal___description = 'children___internal___description',
  children___internal___fieldOwners = 'children___internal___fieldOwners',
  children___internal___ignoreType = 'children___internal___ignoreType',
  children___internal___mediaType = 'children___internal___mediaType',
  children___internal___owner = 'children___internal___owner',
  children___internal___type = 'children___internal___type',
  internal___content = 'internal___content',
  internal___contentDigest = 'internal___contentDigest',
  internal___description = 'internal___description',
  internal___fieldOwners = 'internal___fieldOwners',
  internal___ignoreType = 'internal___ignoreType',
  internal___mediaType = 'internal___mediaType',
  internal___owner = 'internal___owner',
  internal___type = 'internal___type'
}

export type SanityPageFilterInput = {
  _id?: Maybe<StringQueryOperatorInput>
  _type?: Maybe<StringQueryOperatorInput>
  _createdAt?: Maybe<DateQueryOperatorInput>
  _updatedAt?: Maybe<DateQueryOperatorInput>
  _rev?: Maybe<StringQueryOperatorInput>
  _key?: Maybe<StringQueryOperatorInput>
  name?: Maybe<StringQueryOperatorInput>
  url?: Maybe<SanitySlugFilterInput>
  _rawUrl?: Maybe<JsonQueryOperatorInput>
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
}

export type SanityPageGroupConnection = {
  __typename?: 'SanityPageGroupConnection'
  totalCount: Scalars['Int']
  edges: Array<SanityPageEdge>
  nodes: Array<SanityPage>
  pageInfo: PageInfo
  field: Scalars['String']
  fieldValue?: Maybe<Scalars['String']>
}

export type SanityPageLink = {
  __typename?: 'SanityPageLink'
  _key?: Maybe<Scalars['String']>
  _type?: Maybe<Scalars['String']>
  text?: Maybe<Scalars['String']>
  page?: Maybe<SanityMinistryPageOrPage>
}

export type SanityPageLinkOrPlainLink = SanityPageLink | SanityPlainLink

export type SanityPageSection = {
  __typename?: 'SanityPageSection'
  _key?: Maybe<Scalars['String']>
  _type?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
  urlSuffix?: Maybe<SanitySlug>
  content?: Maybe<Array<Maybe<SanityBlock>>>
}

export type SanityPageSectionFilterInput = {
  _key?: Maybe<StringQueryOperatorInput>
  _type?: Maybe<StringQueryOperatorInput>
  name?: Maybe<StringQueryOperatorInput>
  urlSuffix?: Maybe<SanitySlugFilterInput>
  content?: Maybe<SanityBlockFilterListInput>
}

export type SanityPageSectionFilterListInput = {
  elemMatch?: Maybe<SanityPageSectionFilterInput>
}

export type SanityPageSortInput = {
  fields?: Maybe<Array<Maybe<SanityPageFieldsEnum>>>
  order?: Maybe<Array<Maybe<SortOrderEnum>>>
}

export type SanityPlainLink = {
  __typename?: 'SanityPlainLink'
  _key?: Maybe<Scalars['String']>
  _type?: Maybe<Scalars['String']>
  text?: Maybe<Scalars['String']>
  link?: Maybe<Scalars['String']>
}

export type SanityPlainOrPageLink = SanityPlainLink | SanityPageLink

export type SanityResolveReferencesConfiguration = {
  /** Max depth to resolve references to */
  maxDepth: Scalars['Int']
}

export type SanitySlug = {
  __typename?: 'SanitySlug'
  _key?: Maybe<Scalars['String']>
  _type?: Maybe<Scalars['String']>
  current?: Maybe<Scalars['String']>
}

export type SanitySlugFilterInput = {
  _key?: Maybe<StringQueryOperatorInput>
  _type?: Maybe<StringQueryOperatorInput>
  current?: Maybe<StringQueryOperatorInput>
}

export type SanitySpan = {
  __typename?: 'SanitySpan'
  _key?: Maybe<Scalars['String']>
  _type?: Maybe<Scalars['String']>
  marks?: Maybe<Array<Maybe<Scalars['String']>>>
  text?: Maybe<Scalars['String']>
}

export type SanitySpanFilterInput = {
  _key?: Maybe<StringQueryOperatorInput>
  _type?: Maybe<StringQueryOperatorInput>
  marks?: Maybe<StringQueryOperatorInput>
  text?: Maybe<StringQueryOperatorInput>
}

export type SanitySpanFilterListInput = {
  elemMatch?: Maybe<SanitySpanFilterInput>
}

export type Site = Node & {
  __typename?: 'Site'
  id: Scalars['ID']
  parent?: Maybe<Node>
  children: Array<Node>
  internal: Internal
  siteMetadata?: Maybe<SiteSiteMetadata>
  port?: Maybe<Scalars['Int']>
  host?: Maybe<Scalars['String']>
  polyfill?: Maybe<Scalars['Boolean']>
  pathPrefix?: Maybe<Scalars['String']>
  buildTime?: Maybe<Scalars['Date']>
}

export type SiteBuildTimeArgs = {
  formatString?: Maybe<Scalars['String']>
  fromNow?: Maybe<Scalars['Boolean']>
  difference?: Maybe<Scalars['String']>
  locale?: Maybe<Scalars['String']>
}

export type SiteConnection = {
  __typename?: 'SiteConnection'
  totalCount: Scalars['Int']
  edges: Array<SiteEdge>
  nodes: Array<Site>
  pageInfo: PageInfo
  distinct: Array<Scalars['String']>
  group: Array<SiteGroupConnection>
}

export type SiteConnectionDistinctArgs = {
  field: SiteFieldsEnum
}

export type SiteConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  field: SiteFieldsEnum
}

export type SiteEdge = {
  __typename?: 'SiteEdge'
  next?: Maybe<Site>
  node: Site
  previous?: Maybe<Site>
}

export enum SiteFieldsEnum {
  id = 'id',
  parent___id = 'parent___id',
  parent___parent___id = 'parent___parent___id',
  parent___parent___parent___id = 'parent___parent___parent___id',
  parent___parent___parent___children = 'parent___parent___parent___children',
  parent___parent___children = 'parent___parent___children',
  parent___parent___children___id = 'parent___parent___children___id',
  parent___parent___children___children = 'parent___parent___children___children',
  parent___parent___internal___content = 'parent___parent___internal___content',
  parent___parent___internal___contentDigest = 'parent___parent___internal___contentDigest',
  parent___parent___internal___description = 'parent___parent___internal___description',
  parent___parent___internal___fieldOwners = 'parent___parent___internal___fieldOwners',
  parent___parent___internal___ignoreType = 'parent___parent___internal___ignoreType',
  parent___parent___internal___mediaType = 'parent___parent___internal___mediaType',
  parent___parent___internal___owner = 'parent___parent___internal___owner',
  parent___parent___internal___type = 'parent___parent___internal___type',
  parent___children = 'parent___children',
  parent___children___id = 'parent___children___id',
  parent___children___parent___id = 'parent___children___parent___id',
  parent___children___parent___children = 'parent___children___parent___children',
  parent___children___children = 'parent___children___children',
  parent___children___children___id = 'parent___children___children___id',
  parent___children___children___children = 'parent___children___children___children',
  parent___children___internal___content = 'parent___children___internal___content',
  parent___children___internal___contentDigest = 'parent___children___internal___contentDigest',
  parent___children___internal___description = 'parent___children___internal___description',
  parent___children___internal___fieldOwners = 'parent___children___internal___fieldOwners',
  parent___children___internal___ignoreType = 'parent___children___internal___ignoreType',
  parent___children___internal___mediaType = 'parent___children___internal___mediaType',
  parent___children___internal___owner = 'parent___children___internal___owner',
  parent___children___internal___type = 'parent___children___internal___type',
  parent___internal___content = 'parent___internal___content',
  parent___internal___contentDigest = 'parent___internal___contentDigest',
  parent___internal___description = 'parent___internal___description',
  parent___internal___fieldOwners = 'parent___internal___fieldOwners',
  parent___internal___ignoreType = 'parent___internal___ignoreType',
  parent___internal___mediaType = 'parent___internal___mediaType',
  parent___internal___owner = 'parent___internal___owner',
  parent___internal___type = 'parent___internal___type',
  children = 'children',
  children___id = 'children___id',
  children___parent___id = 'children___parent___id',
  children___parent___parent___id = 'children___parent___parent___id',
  children___parent___parent___children = 'children___parent___parent___children',
  children___parent___children = 'children___parent___children',
  children___parent___children___id = 'children___parent___children___id',
  children___parent___children___children = 'children___parent___children___children',
  children___parent___internal___content = 'children___parent___internal___content',
  children___parent___internal___contentDigest = 'children___parent___internal___contentDigest',
  children___parent___internal___description = 'children___parent___internal___description',
  children___parent___internal___fieldOwners = 'children___parent___internal___fieldOwners',
  children___parent___internal___ignoreType = 'children___parent___internal___ignoreType',
  children___parent___internal___mediaType = 'children___parent___internal___mediaType',
  children___parent___internal___owner = 'children___parent___internal___owner',
  children___parent___internal___type = 'children___parent___internal___type',
  children___children = 'children___children',
  children___children___id = 'children___children___id',
  children___children___parent___id = 'children___children___parent___id',
  children___children___parent___children = 'children___children___parent___children',
  children___children___children = 'children___children___children',
  children___children___children___id = 'children___children___children___id',
  children___children___children___children = 'children___children___children___children',
  children___children___internal___content = 'children___children___internal___content',
  children___children___internal___contentDigest = 'children___children___internal___contentDigest',
  children___children___internal___description = 'children___children___internal___description',
  children___children___internal___fieldOwners = 'children___children___internal___fieldOwners',
  children___children___internal___ignoreType = 'children___children___internal___ignoreType',
  children___children___internal___mediaType = 'children___children___internal___mediaType',
  children___children___internal___owner = 'children___children___internal___owner',
  children___children___internal___type = 'children___children___internal___type',
  children___internal___content = 'children___internal___content',
  children___internal___contentDigest = 'children___internal___contentDigest',
  children___internal___description = 'children___internal___description',
  children___internal___fieldOwners = 'children___internal___fieldOwners',
  children___internal___ignoreType = 'children___internal___ignoreType',
  children___internal___mediaType = 'children___internal___mediaType',
  children___internal___owner = 'children___internal___owner',
  children___internal___type = 'children___internal___type',
  internal___content = 'internal___content',
  internal___contentDigest = 'internal___contentDigest',
  internal___description = 'internal___description',
  internal___fieldOwners = 'internal___fieldOwners',
  internal___ignoreType = 'internal___ignoreType',
  internal___mediaType = 'internal___mediaType',
  internal___owner = 'internal___owner',
  internal___type = 'internal___type',
  siteMetadata___church___address = 'siteMetadata___church___address',
  siteMetadata___church___googleMapsEmbedSrc = 'siteMetadata___church___googleMapsEmbedSrc',
  port = 'port',
  host = 'host',
  polyfill = 'polyfill',
  pathPrefix = 'pathPrefix',
  buildTime = 'buildTime'
}

export type SiteFilterInput = {
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
  siteMetadata?: Maybe<SiteSiteMetadataFilterInput>
  port?: Maybe<IntQueryOperatorInput>
  host?: Maybe<StringQueryOperatorInput>
  polyfill?: Maybe<BooleanQueryOperatorInput>
  pathPrefix?: Maybe<StringQueryOperatorInput>
  buildTime?: Maybe<DateQueryOperatorInput>
}

export type SiteGroupConnection = {
  __typename?: 'SiteGroupConnection'
  totalCount: Scalars['Int']
  edges: Array<SiteEdge>
  nodes: Array<Site>
  pageInfo: PageInfo
  field: Scalars['String']
  fieldValue?: Maybe<Scalars['String']>
}

export type SitePage = Node & {
  __typename?: 'SitePage'
  id: Scalars['ID']
  parent?: Maybe<Node>
  children: Array<Node>
  internal: Internal
  path?: Maybe<Scalars['String']>
  internalComponentName?: Maybe<Scalars['String']>
  component?: Maybe<Scalars['String']>
  componentChunkName?: Maybe<Scalars['String']>
  isCreatedByStatefulCreatePages?: Maybe<Scalars['Boolean']>
  context?: Maybe<SitePageContext>
  pluginCreator?: Maybe<SitePlugin>
  pluginCreatorId?: Maybe<Scalars['String']>
  componentPath?: Maybe<Scalars['String']>
}

export type SitePageConnection = {
  __typename?: 'SitePageConnection'
  totalCount: Scalars['Int']
  edges: Array<SitePageEdge>
  nodes: Array<SitePage>
  pageInfo: PageInfo
  distinct: Array<Scalars['String']>
  group: Array<SitePageGroupConnection>
}

export type SitePageConnectionDistinctArgs = {
  field: SitePageFieldsEnum
}

export type SitePageConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  field: SitePageFieldsEnum
}

export type SitePageContext = {
  __typename?: 'SitePageContext'
  _id?: Maybe<Scalars['String']>
}

export type SitePageContextFilterInput = {
  _id?: Maybe<StringQueryOperatorInput>
}

export type SitePageEdge = {
  __typename?: 'SitePageEdge'
  next?: Maybe<SitePage>
  node: SitePage
  previous?: Maybe<SitePage>
}

export enum SitePageFieldsEnum {
  id = 'id',
  parent___id = 'parent___id',
  parent___parent___id = 'parent___parent___id',
  parent___parent___parent___id = 'parent___parent___parent___id',
  parent___parent___parent___children = 'parent___parent___parent___children',
  parent___parent___children = 'parent___parent___children',
  parent___parent___children___id = 'parent___parent___children___id',
  parent___parent___children___children = 'parent___parent___children___children',
  parent___parent___internal___content = 'parent___parent___internal___content',
  parent___parent___internal___contentDigest = 'parent___parent___internal___contentDigest',
  parent___parent___internal___description = 'parent___parent___internal___description',
  parent___parent___internal___fieldOwners = 'parent___parent___internal___fieldOwners',
  parent___parent___internal___ignoreType = 'parent___parent___internal___ignoreType',
  parent___parent___internal___mediaType = 'parent___parent___internal___mediaType',
  parent___parent___internal___owner = 'parent___parent___internal___owner',
  parent___parent___internal___type = 'parent___parent___internal___type',
  parent___children = 'parent___children',
  parent___children___id = 'parent___children___id',
  parent___children___parent___id = 'parent___children___parent___id',
  parent___children___parent___children = 'parent___children___parent___children',
  parent___children___children = 'parent___children___children',
  parent___children___children___id = 'parent___children___children___id',
  parent___children___children___children = 'parent___children___children___children',
  parent___children___internal___content = 'parent___children___internal___content',
  parent___children___internal___contentDigest = 'parent___children___internal___contentDigest',
  parent___children___internal___description = 'parent___children___internal___description',
  parent___children___internal___fieldOwners = 'parent___children___internal___fieldOwners',
  parent___children___internal___ignoreType = 'parent___children___internal___ignoreType',
  parent___children___internal___mediaType = 'parent___children___internal___mediaType',
  parent___children___internal___owner = 'parent___children___internal___owner',
  parent___children___internal___type = 'parent___children___internal___type',
  parent___internal___content = 'parent___internal___content',
  parent___internal___contentDigest = 'parent___internal___contentDigest',
  parent___internal___description = 'parent___internal___description',
  parent___internal___fieldOwners = 'parent___internal___fieldOwners',
  parent___internal___ignoreType = 'parent___internal___ignoreType',
  parent___internal___mediaType = 'parent___internal___mediaType',
  parent___internal___owner = 'parent___internal___owner',
  parent___internal___type = 'parent___internal___type',
  children = 'children',
  children___id = 'children___id',
  children___parent___id = 'children___parent___id',
  children___parent___parent___id = 'children___parent___parent___id',
  children___parent___parent___children = 'children___parent___parent___children',
  children___parent___children = 'children___parent___children',
  children___parent___children___id = 'children___parent___children___id',
  children___parent___children___children = 'children___parent___children___children',
  children___parent___internal___content = 'children___parent___internal___content',
  children___parent___internal___contentDigest = 'children___parent___internal___contentDigest',
  children___parent___internal___description = 'children___parent___internal___description',
  children___parent___internal___fieldOwners = 'children___parent___internal___fieldOwners',
  children___parent___internal___ignoreType = 'children___parent___internal___ignoreType',
  children___parent___internal___mediaType = 'children___parent___internal___mediaType',
  children___parent___internal___owner = 'children___parent___internal___owner',
  children___parent___internal___type = 'children___parent___internal___type',
  children___children = 'children___children',
  children___children___id = 'children___children___id',
  children___children___parent___id = 'children___children___parent___id',
  children___children___parent___children = 'children___children___parent___children',
  children___children___children = 'children___children___children',
  children___children___children___id = 'children___children___children___id',
  children___children___children___children = 'children___children___children___children',
  children___children___internal___content = 'children___children___internal___content',
  children___children___internal___contentDigest = 'children___children___internal___contentDigest',
  children___children___internal___description = 'children___children___internal___description',
  children___children___internal___fieldOwners = 'children___children___internal___fieldOwners',
  children___children___internal___ignoreType = 'children___children___internal___ignoreType',
  children___children___internal___mediaType = 'children___children___internal___mediaType',
  children___children___internal___owner = 'children___children___internal___owner',
  children___children___internal___type = 'children___children___internal___type',
  children___internal___content = 'children___internal___content',
  children___internal___contentDigest = 'children___internal___contentDigest',
  children___internal___description = 'children___internal___description',
  children___internal___fieldOwners = 'children___internal___fieldOwners',
  children___internal___ignoreType = 'children___internal___ignoreType',
  children___internal___mediaType = 'children___internal___mediaType',
  children___internal___owner = 'children___internal___owner',
  children___internal___type = 'children___internal___type',
  internal___content = 'internal___content',
  internal___contentDigest = 'internal___contentDigest',
  internal___description = 'internal___description',
  internal___fieldOwners = 'internal___fieldOwners',
  internal___ignoreType = 'internal___ignoreType',
  internal___mediaType = 'internal___mediaType',
  internal___owner = 'internal___owner',
  internal___type = 'internal___type',
  path = 'path',
  internalComponentName = 'internalComponentName',
  component = 'component',
  componentChunkName = 'componentChunkName',
  isCreatedByStatefulCreatePages = 'isCreatedByStatefulCreatePages',
  context____id = 'context____id',
  pluginCreator___id = 'pluginCreator___id',
  pluginCreator___parent___id = 'pluginCreator___parent___id',
  pluginCreator___parent___parent___id = 'pluginCreator___parent___parent___id',
  pluginCreator___parent___parent___children = 'pluginCreator___parent___parent___children',
  pluginCreator___parent___children = 'pluginCreator___parent___children',
  pluginCreator___parent___children___id = 'pluginCreator___parent___children___id',
  pluginCreator___parent___children___children = 'pluginCreator___parent___children___children',
  pluginCreator___parent___internal___content = 'pluginCreator___parent___internal___content',
  pluginCreator___parent___internal___contentDigest = 'pluginCreator___parent___internal___contentDigest',
  pluginCreator___parent___internal___description = 'pluginCreator___parent___internal___description',
  pluginCreator___parent___internal___fieldOwners = 'pluginCreator___parent___internal___fieldOwners',
  pluginCreator___parent___internal___ignoreType = 'pluginCreator___parent___internal___ignoreType',
  pluginCreator___parent___internal___mediaType = 'pluginCreator___parent___internal___mediaType',
  pluginCreator___parent___internal___owner = 'pluginCreator___parent___internal___owner',
  pluginCreator___parent___internal___type = 'pluginCreator___parent___internal___type',
  pluginCreator___children = 'pluginCreator___children',
  pluginCreator___children___id = 'pluginCreator___children___id',
  pluginCreator___children___parent___id = 'pluginCreator___children___parent___id',
  pluginCreator___children___parent___children = 'pluginCreator___children___parent___children',
  pluginCreator___children___children = 'pluginCreator___children___children',
  pluginCreator___children___children___id = 'pluginCreator___children___children___id',
  pluginCreator___children___children___children = 'pluginCreator___children___children___children',
  pluginCreator___children___internal___content = 'pluginCreator___children___internal___content',
  pluginCreator___children___internal___contentDigest = 'pluginCreator___children___internal___contentDigest',
  pluginCreator___children___internal___description = 'pluginCreator___children___internal___description',
  pluginCreator___children___internal___fieldOwners = 'pluginCreator___children___internal___fieldOwners',
  pluginCreator___children___internal___ignoreType = 'pluginCreator___children___internal___ignoreType',
  pluginCreator___children___internal___mediaType = 'pluginCreator___children___internal___mediaType',
  pluginCreator___children___internal___owner = 'pluginCreator___children___internal___owner',
  pluginCreator___children___internal___type = 'pluginCreator___children___internal___type',
  pluginCreator___internal___content = 'pluginCreator___internal___content',
  pluginCreator___internal___contentDigest = 'pluginCreator___internal___contentDigest',
  pluginCreator___internal___description = 'pluginCreator___internal___description',
  pluginCreator___internal___fieldOwners = 'pluginCreator___internal___fieldOwners',
  pluginCreator___internal___ignoreType = 'pluginCreator___internal___ignoreType',
  pluginCreator___internal___mediaType = 'pluginCreator___internal___mediaType',
  pluginCreator___internal___owner = 'pluginCreator___internal___owner',
  pluginCreator___internal___type = 'pluginCreator___internal___type',
  pluginCreator___resolve = 'pluginCreator___resolve',
  pluginCreator___name = 'pluginCreator___name',
  pluginCreator___version = 'pluginCreator___version',
  pluginCreator___pluginOptions___root = 'pluginCreator___pluginOptions___root',
  pluginCreator___pluginOptions___aliases____ = 'pluginCreator___pluginOptions___aliases____',
  pluginCreator___pluginOptions___component = 'pluginCreator___pluginOptions___component',
  pluginCreator___pluginOptions___projectId = 'pluginCreator___pluginOptions___projectId',
  pluginCreator___pluginOptions___dataset = 'pluginCreator___pluginOptions___dataset',
  pluginCreator___pluginOptions___watchMode = 'pluginCreator___pluginOptions___watchMode',
  pluginCreator___pluginOptions___overlayDrafts = 'pluginCreator___pluginOptions___overlayDrafts',
  pluginCreator___pluginOptions___token = 'pluginCreator___pluginOptions___token',
  pluginCreator___pluginOptions___path = 'pluginCreator___pluginOptions___path',
  pluginCreator___pluginOptions___pathCheck = 'pluginCreator___pluginOptions___pathCheck',
  pluginCreator___nodeAPIs = 'pluginCreator___nodeAPIs',
  pluginCreator___browserAPIs = 'pluginCreator___browserAPIs',
  pluginCreator___ssrAPIs = 'pluginCreator___ssrAPIs',
  pluginCreator___pluginFilepath = 'pluginCreator___pluginFilepath',
  pluginCreator___packageJson___name = 'pluginCreator___packageJson___name',
  pluginCreator___packageJson___description = 'pluginCreator___packageJson___description',
  pluginCreator___packageJson___version = 'pluginCreator___packageJson___version',
  pluginCreator___packageJson___main = 'pluginCreator___packageJson___main',
  pluginCreator___packageJson___author = 'pluginCreator___packageJson___author',
  pluginCreator___packageJson___license = 'pluginCreator___packageJson___license',
  pluginCreator___packageJson___dependencies = 'pluginCreator___packageJson___dependencies',
  pluginCreator___packageJson___dependencies___name = 'pluginCreator___packageJson___dependencies___name',
  pluginCreator___packageJson___dependencies___version = 'pluginCreator___packageJson___dependencies___version',
  pluginCreator___packageJson___devDependencies = 'pluginCreator___packageJson___devDependencies',
  pluginCreator___packageJson___devDependencies___name = 'pluginCreator___packageJson___devDependencies___name',
  pluginCreator___packageJson___devDependencies___version = 'pluginCreator___packageJson___devDependencies___version',
  pluginCreator___packageJson___peerDependencies = 'pluginCreator___packageJson___peerDependencies',
  pluginCreator___packageJson___peerDependencies___name = 'pluginCreator___packageJson___peerDependencies___name',
  pluginCreator___packageJson___peerDependencies___version = 'pluginCreator___packageJson___peerDependencies___version',
  pluginCreator___packageJson___keywords = 'pluginCreator___packageJson___keywords',
  pluginCreatorId = 'pluginCreatorId',
  componentPath = 'componentPath'
}

export type SitePageFilterInput = {
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
  path?: Maybe<StringQueryOperatorInput>
  internalComponentName?: Maybe<StringQueryOperatorInput>
  component?: Maybe<StringQueryOperatorInput>
  componentChunkName?: Maybe<StringQueryOperatorInput>
  isCreatedByStatefulCreatePages?: Maybe<BooleanQueryOperatorInput>
  context?: Maybe<SitePageContextFilterInput>
  pluginCreator?: Maybe<SitePluginFilterInput>
  pluginCreatorId?: Maybe<StringQueryOperatorInput>
  componentPath?: Maybe<StringQueryOperatorInput>
}

export type SitePageGroupConnection = {
  __typename?: 'SitePageGroupConnection'
  totalCount: Scalars['Int']
  edges: Array<SitePageEdge>
  nodes: Array<SitePage>
  pageInfo: PageInfo
  field: Scalars['String']
  fieldValue?: Maybe<Scalars['String']>
}

export type SitePageSortInput = {
  fields?: Maybe<Array<Maybe<SitePageFieldsEnum>>>
  order?: Maybe<Array<Maybe<SortOrderEnum>>>
}

export type SitePlugin = Node & {
  __typename?: 'SitePlugin'
  id: Scalars['ID']
  parent?: Maybe<Node>
  children: Array<Node>
  internal: Internal
  resolve?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
  version?: Maybe<Scalars['String']>
  pluginOptions?: Maybe<SitePluginPluginOptions>
  nodeAPIs?: Maybe<Array<Maybe<Scalars['String']>>>
  browserAPIs?: Maybe<Array<Maybe<Scalars['String']>>>
  ssrAPIs?: Maybe<Array<Maybe<Scalars['String']>>>
  pluginFilepath?: Maybe<Scalars['String']>
  packageJson?: Maybe<SitePluginPackageJson>
}

export type SitePluginConnection = {
  __typename?: 'SitePluginConnection'
  totalCount: Scalars['Int']
  edges: Array<SitePluginEdge>
  nodes: Array<SitePlugin>
  pageInfo: PageInfo
  distinct: Array<Scalars['String']>
  group: Array<SitePluginGroupConnection>
}

export type SitePluginConnectionDistinctArgs = {
  field: SitePluginFieldsEnum
}

export type SitePluginConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  field: SitePluginFieldsEnum
}

export type SitePluginEdge = {
  __typename?: 'SitePluginEdge'
  next?: Maybe<SitePlugin>
  node: SitePlugin
  previous?: Maybe<SitePlugin>
}

export enum SitePluginFieldsEnum {
  id = 'id',
  parent___id = 'parent___id',
  parent___parent___id = 'parent___parent___id',
  parent___parent___parent___id = 'parent___parent___parent___id',
  parent___parent___parent___children = 'parent___parent___parent___children',
  parent___parent___children = 'parent___parent___children',
  parent___parent___children___id = 'parent___parent___children___id',
  parent___parent___children___children = 'parent___parent___children___children',
  parent___parent___internal___content = 'parent___parent___internal___content',
  parent___parent___internal___contentDigest = 'parent___parent___internal___contentDigest',
  parent___parent___internal___description = 'parent___parent___internal___description',
  parent___parent___internal___fieldOwners = 'parent___parent___internal___fieldOwners',
  parent___parent___internal___ignoreType = 'parent___parent___internal___ignoreType',
  parent___parent___internal___mediaType = 'parent___parent___internal___mediaType',
  parent___parent___internal___owner = 'parent___parent___internal___owner',
  parent___parent___internal___type = 'parent___parent___internal___type',
  parent___children = 'parent___children',
  parent___children___id = 'parent___children___id',
  parent___children___parent___id = 'parent___children___parent___id',
  parent___children___parent___children = 'parent___children___parent___children',
  parent___children___children = 'parent___children___children',
  parent___children___children___id = 'parent___children___children___id',
  parent___children___children___children = 'parent___children___children___children',
  parent___children___internal___content = 'parent___children___internal___content',
  parent___children___internal___contentDigest = 'parent___children___internal___contentDigest',
  parent___children___internal___description = 'parent___children___internal___description',
  parent___children___internal___fieldOwners = 'parent___children___internal___fieldOwners',
  parent___children___internal___ignoreType = 'parent___children___internal___ignoreType',
  parent___children___internal___mediaType = 'parent___children___internal___mediaType',
  parent___children___internal___owner = 'parent___children___internal___owner',
  parent___children___internal___type = 'parent___children___internal___type',
  parent___internal___content = 'parent___internal___content',
  parent___internal___contentDigest = 'parent___internal___contentDigest',
  parent___internal___description = 'parent___internal___description',
  parent___internal___fieldOwners = 'parent___internal___fieldOwners',
  parent___internal___ignoreType = 'parent___internal___ignoreType',
  parent___internal___mediaType = 'parent___internal___mediaType',
  parent___internal___owner = 'parent___internal___owner',
  parent___internal___type = 'parent___internal___type',
  children = 'children',
  children___id = 'children___id',
  children___parent___id = 'children___parent___id',
  children___parent___parent___id = 'children___parent___parent___id',
  children___parent___parent___children = 'children___parent___parent___children',
  children___parent___children = 'children___parent___children',
  children___parent___children___id = 'children___parent___children___id',
  children___parent___children___children = 'children___parent___children___children',
  children___parent___internal___content = 'children___parent___internal___content',
  children___parent___internal___contentDigest = 'children___parent___internal___contentDigest',
  children___parent___internal___description = 'children___parent___internal___description',
  children___parent___internal___fieldOwners = 'children___parent___internal___fieldOwners',
  children___parent___internal___ignoreType = 'children___parent___internal___ignoreType',
  children___parent___internal___mediaType = 'children___parent___internal___mediaType',
  children___parent___internal___owner = 'children___parent___internal___owner',
  children___parent___internal___type = 'children___parent___internal___type',
  children___children = 'children___children',
  children___children___id = 'children___children___id',
  children___children___parent___id = 'children___children___parent___id',
  children___children___parent___children = 'children___children___parent___children',
  children___children___children = 'children___children___children',
  children___children___children___id = 'children___children___children___id',
  children___children___children___children = 'children___children___children___children',
  children___children___internal___content = 'children___children___internal___content',
  children___children___internal___contentDigest = 'children___children___internal___contentDigest',
  children___children___internal___description = 'children___children___internal___description',
  children___children___internal___fieldOwners = 'children___children___internal___fieldOwners',
  children___children___internal___ignoreType = 'children___children___internal___ignoreType',
  children___children___internal___mediaType = 'children___children___internal___mediaType',
  children___children___internal___owner = 'children___children___internal___owner',
  children___children___internal___type = 'children___children___internal___type',
  children___internal___content = 'children___internal___content',
  children___internal___contentDigest = 'children___internal___contentDigest',
  children___internal___description = 'children___internal___description',
  children___internal___fieldOwners = 'children___internal___fieldOwners',
  children___internal___ignoreType = 'children___internal___ignoreType',
  children___internal___mediaType = 'children___internal___mediaType',
  children___internal___owner = 'children___internal___owner',
  children___internal___type = 'children___internal___type',
  internal___content = 'internal___content',
  internal___contentDigest = 'internal___contentDigest',
  internal___description = 'internal___description',
  internal___fieldOwners = 'internal___fieldOwners',
  internal___ignoreType = 'internal___ignoreType',
  internal___mediaType = 'internal___mediaType',
  internal___owner = 'internal___owner',
  internal___type = 'internal___type',
  resolve = 'resolve',
  name = 'name',
  version = 'version',
  pluginOptions___root = 'pluginOptions___root',
  pluginOptions___aliases____ = 'pluginOptions___aliases____',
  pluginOptions___component = 'pluginOptions___component',
  pluginOptions___projectId = 'pluginOptions___projectId',
  pluginOptions___dataset = 'pluginOptions___dataset',
  pluginOptions___watchMode = 'pluginOptions___watchMode',
  pluginOptions___overlayDrafts = 'pluginOptions___overlayDrafts',
  pluginOptions___token = 'pluginOptions___token',
  pluginOptions___path = 'pluginOptions___path',
  pluginOptions___pathCheck = 'pluginOptions___pathCheck',
  nodeAPIs = 'nodeAPIs',
  browserAPIs = 'browserAPIs',
  ssrAPIs = 'ssrAPIs',
  pluginFilepath = 'pluginFilepath',
  packageJson___name = 'packageJson___name',
  packageJson___description = 'packageJson___description',
  packageJson___version = 'packageJson___version',
  packageJson___main = 'packageJson___main',
  packageJson___author = 'packageJson___author',
  packageJson___license = 'packageJson___license',
  packageJson___dependencies = 'packageJson___dependencies',
  packageJson___dependencies___name = 'packageJson___dependencies___name',
  packageJson___dependencies___version = 'packageJson___dependencies___version',
  packageJson___devDependencies = 'packageJson___devDependencies',
  packageJson___devDependencies___name = 'packageJson___devDependencies___name',
  packageJson___devDependencies___version = 'packageJson___devDependencies___version',
  packageJson___peerDependencies = 'packageJson___peerDependencies',
  packageJson___peerDependencies___name = 'packageJson___peerDependencies___name',
  packageJson___peerDependencies___version = 'packageJson___peerDependencies___version',
  packageJson___keywords = 'packageJson___keywords'
}

export type SitePluginFilterInput = {
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
  resolve?: Maybe<StringQueryOperatorInput>
  name?: Maybe<StringQueryOperatorInput>
  version?: Maybe<StringQueryOperatorInput>
  pluginOptions?: Maybe<SitePluginPluginOptionsFilterInput>
  nodeAPIs?: Maybe<StringQueryOperatorInput>
  browserAPIs?: Maybe<StringQueryOperatorInput>
  ssrAPIs?: Maybe<StringQueryOperatorInput>
  pluginFilepath?: Maybe<StringQueryOperatorInput>
  packageJson?: Maybe<SitePluginPackageJsonFilterInput>
}

export type SitePluginGroupConnection = {
  __typename?: 'SitePluginGroupConnection'
  totalCount: Scalars['Int']
  edges: Array<SitePluginEdge>
  nodes: Array<SitePlugin>
  pageInfo: PageInfo
  field: Scalars['String']
  fieldValue?: Maybe<Scalars['String']>
}

export type SitePluginPackageJson = {
  __typename?: 'SitePluginPackageJson'
  name?: Maybe<Scalars['String']>
  description?: Maybe<Scalars['String']>
  version?: Maybe<Scalars['String']>
  main?: Maybe<Scalars['String']>
  author?: Maybe<Scalars['String']>
  license?: Maybe<Scalars['String']>
  dependencies?: Maybe<Array<Maybe<SitePluginPackageJsonDependencies>>>
  devDependencies?: Maybe<Array<Maybe<SitePluginPackageJsonDevDependencies>>>
  peerDependencies?: Maybe<Array<Maybe<SitePluginPackageJsonPeerDependencies>>>
  keywords?: Maybe<Array<Maybe<Scalars['String']>>>
}

export type SitePluginPackageJsonDependencies = {
  __typename?: 'SitePluginPackageJsonDependencies'
  name?: Maybe<Scalars['String']>
  version?: Maybe<Scalars['String']>
}

export type SitePluginPackageJsonDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>
  version?: Maybe<StringQueryOperatorInput>
}

export type SitePluginPackageJsonDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonDependenciesFilterInput>
}

export type SitePluginPackageJsonDevDependencies = {
  __typename?: 'SitePluginPackageJsonDevDependencies'
  name?: Maybe<Scalars['String']>
  version?: Maybe<Scalars['String']>
}

export type SitePluginPackageJsonDevDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>
  version?: Maybe<StringQueryOperatorInput>
}

export type SitePluginPackageJsonDevDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonDevDependenciesFilterInput>
}

export type SitePluginPackageJsonFilterInput = {
  name?: Maybe<StringQueryOperatorInput>
  description?: Maybe<StringQueryOperatorInput>
  version?: Maybe<StringQueryOperatorInput>
  main?: Maybe<StringQueryOperatorInput>
  author?: Maybe<StringQueryOperatorInput>
  license?: Maybe<StringQueryOperatorInput>
  dependencies?: Maybe<SitePluginPackageJsonDependenciesFilterListInput>
  devDependencies?: Maybe<SitePluginPackageJsonDevDependenciesFilterListInput>
  peerDependencies?: Maybe<SitePluginPackageJsonPeerDependenciesFilterListInput>
  keywords?: Maybe<StringQueryOperatorInput>
}

export type SitePluginPackageJsonPeerDependencies = {
  __typename?: 'SitePluginPackageJsonPeerDependencies'
  name?: Maybe<Scalars['String']>
  version?: Maybe<Scalars['String']>
}

export type SitePluginPackageJsonPeerDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>
  version?: Maybe<StringQueryOperatorInput>
}

export type SitePluginPackageJsonPeerDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonPeerDependenciesFilterInput>
}

export type SitePluginPluginOptions = {
  __typename?: 'SitePluginPluginOptions'
  root?: Maybe<Scalars['String']>
  aliases?: Maybe<SitePluginPluginOptionsAliases>
  component?: Maybe<Scalars['String']>
  projectId?: Maybe<Scalars['String']>
  dataset?: Maybe<Scalars['String']>
  watchMode?: Maybe<Scalars['Boolean']>
  overlayDrafts?: Maybe<Scalars['Boolean']>
  token?: Maybe<Scalars['String']>
  path?: Maybe<Scalars['String']>
  pathCheck?: Maybe<Scalars['Boolean']>
}

export type SitePluginPluginOptionsAliases = {
  __typename?: 'SitePluginPluginOptionsAliases'
  _?: Maybe<Scalars['String']>
}

export type SitePluginPluginOptionsAliasesFilterInput = {
  _?: Maybe<StringQueryOperatorInput>
}

export type SitePluginPluginOptionsFilterInput = {
  root?: Maybe<StringQueryOperatorInput>
  aliases?: Maybe<SitePluginPluginOptionsAliasesFilterInput>
  component?: Maybe<StringQueryOperatorInput>
  projectId?: Maybe<StringQueryOperatorInput>
  dataset?: Maybe<StringQueryOperatorInput>
  watchMode?: Maybe<BooleanQueryOperatorInput>
  overlayDrafts?: Maybe<BooleanQueryOperatorInput>
  token?: Maybe<StringQueryOperatorInput>
  path?: Maybe<StringQueryOperatorInput>
  pathCheck?: Maybe<BooleanQueryOperatorInput>
}

export type SitePluginSortInput = {
  fields?: Maybe<Array<Maybe<SitePluginFieldsEnum>>>
  order?: Maybe<Array<Maybe<SortOrderEnum>>>
}

export type SiteSiteMetadata = {
  __typename?: 'SiteSiteMetadata'
  church?: Maybe<SiteSiteMetadataChurch>
}

export type SiteSiteMetadataChurch = {
  __typename?: 'SiteSiteMetadataChurch'
  address?: Maybe<Array<Maybe<Scalars['String']>>>
  googleMapsEmbedSrc?: Maybe<Scalars['String']>
}

export type SiteSiteMetadataChurchFilterInput = {
  address?: Maybe<StringQueryOperatorInput>
  googleMapsEmbedSrc?: Maybe<StringQueryOperatorInput>
}

export type SiteSiteMetadataFilterInput = {
  church?: Maybe<SiteSiteMetadataChurchFilterInput>
}

export type SiteSortInput = {
  fields?: Maybe<Array<Maybe<SiteFieldsEnum>>>
  order?: Maybe<Array<Maybe<SortOrderEnum>>>
}

export enum SortOrderEnum {
  ASC = 'ASC',
  DESC = 'DESC'
}

export type StringQueryOperatorInput = {
  eq?: Maybe<Scalars['String']>
  ne?: Maybe<Scalars['String']>
  in?: Maybe<Array<Maybe<Scalars['String']>>>
  nin?: Maybe<Array<Maybe<Scalars['String']>>>
  regex?: Maybe<Scalars['String']>
  glob?: Maybe<Scalars['String']>
}
export type GatsbySanityImageFixedFragment = {
  __typename?: 'SanityImageFixed'
} & Pick<
  SanityImageFixed,
  'base64' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'
>

export type GatsbySanityImageFixed_NoBase64Fragment = {
  __typename?: 'SanityImageFixed'
} & Pick<
  SanityImageFixed,
  'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'
>

export type GatsbySanityImageFixed_WithWebpFragment = {
  __typename?: 'SanityImageFixed'
} & Pick<
  SanityImageFixed,
  'base64' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'
>

export type GatsbySanityImageFixed_WithWebp_NoBase64Fragment = {
  __typename?: 'SanityImageFixed'
} & Pick<
  SanityImageFixed,
  'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'
>

export type GatsbySanityImageFluidFragment = {
  __typename?: 'SanityImageFluid'
} & Pick<
  SanityImageFluid,
  | 'base64'
  | 'aspectRatio'
  | 'src'
  | 'srcSet'
  | 'srcWebp'
  | 'srcSetWebp'
  | 'sizes'
>

export type GatsbySanityImageFluid_NoBase64Fragment = {
  __typename?: 'SanityImageFluid'
} & Pick<
  SanityImageFluid,
  'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'
>

export type GatsbySanityImageFluid_WithWebpFragment = {
  __typename?: 'SanityImageFluid'
} & Pick<
  SanityImageFluid,
  | 'base64'
  | 'aspectRatio'
  | 'src'
  | 'srcSet'
  | 'srcWebp'
  | 'srcSetWebp'
  | 'sizes'
>

export type GatsbySanityImageFluid_WithWebp_NoBase64Fragment = {
  __typename?: 'SanityImageFluid'
} & Pick<
  SanityImageFluid,
  'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'
>

export type HeaderQueryVariables = {}

export type HeaderQuery = { __typename?: 'Query' } & {
  sanityNavigation: Maybe<
    { __typename?: 'SanityNavigation' } & {
      items: Maybe<
        Array<
          Maybe<
            (
              | ({ __typename: 'SanityNestedMenu' } & Pick<
                  SanityNestedMenu,
                  'text'
                > & {
                    items: Maybe<
                      Array<
                        Maybe<
                          (
                            | { __typename?: 'SanityPageLink' }
                            | { __typename?: 'SanityPlainLink' }) &
                            AnyNavLinkFragment
                        >
                      >
                    >
                  })
              | { __typename?: 'SanityPageLink' }
              | { __typename?: 'SanityPlainLink' }) &
              AnyNavLinkFragment
          >
        >
      >
    }
  >
}

export type AnyNavLinkFragment =
  | ({ __typename: 'SanityPlainLink' } & Pick<SanityPlainLink, 'text' | 'link'>)
  | ({ __typename: 'SanityPageLink' } & Pick<SanityPageLink, 'text'> & {
        page: Maybe<
          | ({ __typename?: 'SanityMinistryPage' } & {
              url: Maybe<
                { __typename?: 'SanitySlug' } & Pick<SanitySlug, 'current'>
              >
            })
          | ({ __typename?: 'SanityPage' } & {
              url: Maybe<
                { __typename?: 'SanitySlug' } & Pick<SanitySlug, 'current'>
              >
            })
        >
      })

export type MinistryPageQueryVariables = {
  _id: Scalars['String']
}

export type MinistryPageQuery = { __typename?: 'Query' } & {
  sanityMinistryPage: Maybe<
    { __typename?: 'SanityMinistryPage' } & Pick<
      SanityMinistryPage,
      'name' | '_rawContent'
    > & {
        subLogo: Maybe<
          { __typename?: 'SanityImage' } & {
            asset: Maybe<
              { __typename?: 'SanityImageAsset' } & {
                fluid: Maybe<
                  {
                    __typename?: 'SanityImageFluid'
                  } & GatsbySanityImageFluidFragment
                >
              }
            >
          }
        >
        url: Maybe<{ __typename?: 'SanitySlug' } & Pick<SanitySlug, 'current'>>
        sections: Maybe<
          Array<
            Maybe<
              { __typename?: 'SanityPageSection' } & Pick<
                SanityPageSection,
                '_key' | 'name'
              > & {
                  urlSuffix: Maybe<
                    { __typename?: 'SanitySlug' } & Pick<SanitySlug, 'current'>
                  >
                }
            >
          >
        >
      }
  >
}

export type ChurchLocationQueryVariables = {}

export type ChurchLocationQuery = { __typename?: 'Query' } & {
  site: Maybe<
    { __typename?: 'Site' } & {
      siteMetadata: Maybe<
        { __typename?: 'SiteSiteMetadata' } & {
          church: Maybe<
            { __typename?: 'SiteSiteMetadataChurch' } & Pick<
              SiteSiteMetadataChurch,
              'address' | 'googleMapsEmbedSrc'
            >
          >
        }
      >
    }
  >
}

export type HeroSectionQueryVariables = {}

export type HeroSectionQuery = { __typename?: 'Query' } & {
  sanityHeroSection: Maybe<
    { __typename?: 'SanityHeroSection' } & Pick<
      SanityHeroSection,
      'subtitle' | 'title'
    >
  >
}
