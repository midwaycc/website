export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date string, such as 2007-12-03, compliant with the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Date: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
};










export type BooleanQueryOperatorInput = {
  eq?: Maybe<Scalars['Boolean']>;
  ne?: Maybe<Scalars['Boolean']>;
  in?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
};


export type DateQueryOperatorInput = {
  eq?: Maybe<Scalars['Date']>;
  ne?: Maybe<Scalars['Date']>;
  gt?: Maybe<Scalars['Date']>;
  gte?: Maybe<Scalars['Date']>;
  lt?: Maybe<Scalars['Date']>;
  lte?: Maybe<Scalars['Date']>;
  in?: Maybe<Array<Maybe<Scalars['Date']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Date']>>>;
};

export type Directory = Node & {
  __typename?: 'Directory';
  sourceInstanceName: Scalars['String'];
  absolutePath: Scalars['String'];
  relativePath: Scalars['String'];
  extension: Scalars['String'];
  size: Scalars['Int'];
  prettySize: Scalars['String'];
  modifiedTime: Scalars['Date'];
  accessTime: Scalars['Date'];
  changeTime: Scalars['Date'];
  birthTime: Scalars['Date'];
  root: Scalars['String'];
  dir: Scalars['String'];
  base: Scalars['String'];
  ext: Scalars['String'];
  name: Scalars['String'];
  relativeDirectory: Scalars['String'];
  dev: Scalars['Int'];
  mode: Scalars['Int'];
  nlink: Scalars['Int'];
  uid: Scalars['Int'];
  gid: Scalars['Int'];
  rdev: Scalars['Int'];
  ino: Scalars['Float'];
  atimeMs: Scalars['Float'];
  mtimeMs: Scalars['Float'];
  ctimeMs: Scalars['Float'];
  atime: Scalars['Date'];
  mtime: Scalars['Date'];
  ctime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  birthtime?: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  birthtimeMs?: Maybe<Scalars['Float']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type DirectoryModifiedTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryAccessTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryChangeTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryBirthTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryAtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryMtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryCtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type DirectoryConnection = {
  __typename?: 'DirectoryConnection';
  totalCount: Scalars['Int'];
  edges: Array<DirectoryEdge>;
  nodes: Array<Directory>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<DirectoryGroupConnection>;
};


export type DirectoryConnectionDistinctArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryConnectionMaxArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryConnectionMinArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryConnectionSumArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: DirectoryFieldsEnum;
};

export type DirectoryEdge = {
  __typename?: 'DirectoryEdge';
  next?: Maybe<Directory>;
  node: Directory;
  previous?: Maybe<Directory>;
};

export enum DirectoryFieldsEnum {
  sourceInstanceName = 'sourceInstanceName',
  absolutePath = 'absolutePath',
  relativePath = 'relativePath',
  extension = 'extension',
  size = 'size',
  prettySize = 'prettySize',
  modifiedTime = 'modifiedTime',
  accessTime = 'accessTime',
  changeTime = 'changeTime',
  birthTime = 'birthTime',
  root = 'root',
  dir = 'dir',
  base = 'base',
  ext = 'ext',
  name = 'name',
  relativeDirectory = 'relativeDirectory',
  dev = 'dev',
  mode = 'mode',
  nlink = 'nlink',
  uid = 'uid',
  gid = 'gid',
  rdev = 'rdev',
  ino = 'ino',
  atimeMs = 'atimeMs',
  mtimeMs = 'mtimeMs',
  ctimeMs = 'ctimeMs',
  atime = 'atime',
  mtime = 'mtime',
  ctime = 'ctime',
  birthtime = 'birthtime',
  birthtimeMs = 'birthtimeMs',
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

export type DirectoryFilterInput = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  absolutePath?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  prettySize?: Maybe<StringQueryOperatorInput>;
  modifiedTime?: Maybe<DateQueryOperatorInput>;
  accessTime?: Maybe<DateQueryOperatorInput>;
  changeTime?: Maybe<DateQueryOperatorInput>;
  birthTime?: Maybe<DateQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  dir?: Maybe<StringQueryOperatorInput>;
  base?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  relativeDirectory?: Maybe<StringQueryOperatorInput>;
  dev?: Maybe<IntQueryOperatorInput>;
  mode?: Maybe<IntQueryOperatorInput>;
  nlink?: Maybe<IntQueryOperatorInput>;
  uid?: Maybe<IntQueryOperatorInput>;
  gid?: Maybe<IntQueryOperatorInput>;
  rdev?: Maybe<IntQueryOperatorInput>;
  ino?: Maybe<FloatQueryOperatorInput>;
  atimeMs?: Maybe<FloatQueryOperatorInput>;
  mtimeMs?: Maybe<FloatQueryOperatorInput>;
  ctimeMs?: Maybe<FloatQueryOperatorInput>;
  atime?: Maybe<DateQueryOperatorInput>;
  mtime?: Maybe<DateQueryOperatorInput>;
  ctime?: Maybe<DateQueryOperatorInput>;
  birthtime?: Maybe<DateQueryOperatorInput>;
  birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type DirectoryGroupConnection = {
  __typename?: 'DirectoryGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<DirectoryEdge>;
  nodes: Array<Directory>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type DirectorySortInput = {
  fields?: Maybe<Array<Maybe<DirectoryFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type File = Node & {
  __typename?: 'File';
  sourceInstanceName: Scalars['String'];
  absolutePath: Scalars['String'];
  relativePath: Scalars['String'];
  extension: Scalars['String'];
  size: Scalars['Int'];
  prettySize: Scalars['String'];
  modifiedTime: Scalars['Date'];
  accessTime: Scalars['Date'];
  changeTime: Scalars['Date'];
  birthTime: Scalars['Date'];
  root: Scalars['String'];
  dir: Scalars['String'];
  base: Scalars['String'];
  ext: Scalars['String'];
  name: Scalars['String'];
  relativeDirectory: Scalars['String'];
  dev: Scalars['Int'];
  mode: Scalars['Int'];
  nlink: Scalars['Int'];
  uid: Scalars['Int'];
  gid: Scalars['Int'];
  rdev: Scalars['Int'];
  ino: Scalars['Float'];
  atimeMs: Scalars['Float'];
  mtimeMs: Scalars['Float'];
  ctimeMs: Scalars['Float'];
  atime: Scalars['Date'];
  mtime: Scalars['Date'];
  ctime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  birthtime?: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  birthtimeMs?: Maybe<Scalars['Float']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type FileModifiedTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileAccessTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileChangeTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileBirthTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileAtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileMtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileCtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type FileConnection = {
  __typename?: 'FileConnection';
  totalCount: Scalars['Int'];
  edges: Array<FileEdge>;
  nodes: Array<File>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<FileGroupConnection>;
};


export type FileConnectionDistinctArgs = {
  field: FileFieldsEnum;
};


export type FileConnectionMaxArgs = {
  field: FileFieldsEnum;
};


export type FileConnectionMinArgs = {
  field: FileFieldsEnum;
};


export type FileConnectionSumArgs = {
  field: FileFieldsEnum;
};


export type FileConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: FileFieldsEnum;
};

export type FileEdge = {
  __typename?: 'FileEdge';
  next?: Maybe<File>;
  node: File;
  previous?: Maybe<File>;
};

export enum FileFieldsEnum {
  sourceInstanceName = 'sourceInstanceName',
  absolutePath = 'absolutePath',
  relativePath = 'relativePath',
  extension = 'extension',
  size = 'size',
  prettySize = 'prettySize',
  modifiedTime = 'modifiedTime',
  accessTime = 'accessTime',
  changeTime = 'changeTime',
  birthTime = 'birthTime',
  root = 'root',
  dir = 'dir',
  base = 'base',
  ext = 'ext',
  name = 'name',
  relativeDirectory = 'relativeDirectory',
  dev = 'dev',
  mode = 'mode',
  nlink = 'nlink',
  uid = 'uid',
  gid = 'gid',
  rdev = 'rdev',
  ino = 'ino',
  atimeMs = 'atimeMs',
  mtimeMs = 'mtimeMs',
  ctimeMs = 'ctimeMs',
  atime = 'atime',
  mtime = 'mtime',
  ctime = 'ctime',
  birthtime = 'birthtime',
  birthtimeMs = 'birthtimeMs',
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

export type FileFilterInput = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  absolutePath?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  prettySize?: Maybe<StringQueryOperatorInput>;
  modifiedTime?: Maybe<DateQueryOperatorInput>;
  accessTime?: Maybe<DateQueryOperatorInput>;
  changeTime?: Maybe<DateQueryOperatorInput>;
  birthTime?: Maybe<DateQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  dir?: Maybe<StringQueryOperatorInput>;
  base?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  relativeDirectory?: Maybe<StringQueryOperatorInput>;
  dev?: Maybe<IntQueryOperatorInput>;
  mode?: Maybe<IntQueryOperatorInput>;
  nlink?: Maybe<IntQueryOperatorInput>;
  uid?: Maybe<IntQueryOperatorInput>;
  gid?: Maybe<IntQueryOperatorInput>;
  rdev?: Maybe<IntQueryOperatorInput>;
  ino?: Maybe<FloatQueryOperatorInput>;
  atimeMs?: Maybe<FloatQueryOperatorInput>;
  mtimeMs?: Maybe<FloatQueryOperatorInput>;
  ctimeMs?: Maybe<FloatQueryOperatorInput>;
  atime?: Maybe<DateQueryOperatorInput>;
  mtime?: Maybe<DateQueryOperatorInput>;
  ctime?: Maybe<DateQueryOperatorInput>;
  birthtime?: Maybe<DateQueryOperatorInput>;
  birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type FileGroupConnection = {
  __typename?: 'FileGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<FileEdge>;
  nodes: Array<File>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type FileSortInput = {
  fields?: Maybe<Array<Maybe<FileFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type FloatQueryOperatorInput = {
  eq?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export enum GatsbyImageFormat {
  NO_CHANGE = 'NO_CHANGE',
  AUTO = 'AUTO',
  JPG = 'JPG',
  PNG = 'PNG',
  WEBP = 'WEBP',
  AVIF = 'AVIF'
}

export enum GatsbyImageLayout {
  FIXED = 'FIXED',
  FULL_WIDTH = 'FULL_WIDTH',
  CONSTRAINED = 'CONSTRAINED'
}

export type IntQueryOperatorInput = {
  eq?: Maybe<Scalars['Int']>;
  ne?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Int']>>>;
};

export type Internal = {
  __typename?: 'Internal';
  content?: Maybe<Scalars['String']>;
  contentDigest: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  fieldOwners?: Maybe<Array<Maybe<Scalars['String']>>>;
  ignoreType?: Maybe<Scalars['Boolean']>;
  mediaType?: Maybe<Scalars['String']>;
  owner: Scalars['String'];
  type: Scalars['String'];
};

export type InternalFilterInput = {
  content?: Maybe<StringQueryOperatorInput>;
  contentDigest?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  fieldOwners?: Maybe<StringQueryOperatorInput>;
  ignoreType?: Maybe<BooleanQueryOperatorInput>;
  mediaType?: Maybe<StringQueryOperatorInput>;
  owner?: Maybe<StringQueryOperatorInput>;
  type?: Maybe<StringQueryOperatorInput>;
};


export type JsonQueryOperatorInput = {
  eq?: Maybe<Scalars['JSON']>;
  ne?: Maybe<Scalars['JSON']>;
  in?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  nin?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  regex?: Maybe<Scalars['JSON']>;
  glob?: Maybe<Scalars['JSON']>;
};

/** Node Interface */
export type Node = {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type NodeFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type NodeFilterListInput = {
  elemMatch?: Maybe<NodeFilterInput>;
};

export type PageInfo = {
  __typename?: 'PageInfo';
  currentPage: Scalars['Int'];
  hasPreviousPage: Scalars['Boolean'];
  hasNextPage: Scalars['Boolean'];
  itemCount: Scalars['Int'];
  pageCount: Scalars['Int'];
  perPage?: Maybe<Scalars['Int']>;
  totalCount: Scalars['Int'];
};

export type Query = {
  __typename?: 'Query';
  file?: Maybe<File>;
  allFile: FileConnection;
  directory?: Maybe<Directory>;
  allDirectory: DirectoryConnection;
  site?: Maybe<Site>;
  allSite: SiteConnection;
  siteFunction?: Maybe<SiteFunction>;
  allSiteFunction: SiteFunctionConnection;
  sitePage?: Maybe<SitePage>;
  allSitePage: SitePageConnection;
  sanityGeneralAlert?: Maybe<SanityGeneralAlert>;
  allSanityGeneralAlert: SanityGeneralAlertConnection;
  sanityHeroSection?: Maybe<SanityHeroSection>;
  allSanityHeroSection: SanityHeroSectionConnection;
  sanityMinistryPage?: Maybe<SanityMinistryPage>;
  allSanityMinistryPage: SanityMinistryPageConnection;
  sanityNavigation?: Maybe<SanityNavigation>;
  allSanityNavigation: SanityNavigationConnection;
  sanityNewsletter?: Maybe<SanityNewsletter>;
  allSanityNewsletter: SanityNewsletterConnection;
  sanityPage?: Maybe<SanityPage>;
  allSanityPage: SanityPageConnection;
  sanityPost?: Maybe<SanityPost>;
  allSanityPost: SanityPostConnection;
  sanityPoster?: Maybe<SanityPoster>;
  allSanityPoster: SanityPosterConnection;
  sanityFileAsset?: Maybe<SanityFileAsset>;
  allSanityFileAsset: SanityFileAssetConnection;
  sanityImageAsset?: Maybe<SanityImageAsset>;
  allSanityImageAsset: SanityImageAssetConnection;
  sanityScheduleAlert?: Maybe<SanityScheduleAlert>;
  allSanityScheduleAlert: SanityScheduleAlertConnection;
  sanitySermonUpload?: Maybe<SanitySermonUpload>;
  allSanitySermonUpload: SanitySermonUploadConnection;
  sanityShortcuts?: Maybe<SanityShortcuts>;
  allSanityShortcuts: SanityShortcutsConnection;
  sanityWeeklySchedule?: Maybe<SanityWeeklySchedule>;
  allSanityWeeklySchedule: SanityWeeklyScheduleConnection;
  sitePlugin?: Maybe<SitePlugin>;
  allSitePlugin: SitePluginConnection;
  siteBuildMetadata?: Maybe<SiteBuildMetadata>;
  allSiteBuildMetadata: SiteBuildMetadataConnection;
};


export type QueryFileArgs = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  absolutePath?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  prettySize?: Maybe<StringQueryOperatorInput>;
  modifiedTime?: Maybe<DateQueryOperatorInput>;
  accessTime?: Maybe<DateQueryOperatorInput>;
  changeTime?: Maybe<DateQueryOperatorInput>;
  birthTime?: Maybe<DateQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  dir?: Maybe<StringQueryOperatorInput>;
  base?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  relativeDirectory?: Maybe<StringQueryOperatorInput>;
  dev?: Maybe<IntQueryOperatorInput>;
  mode?: Maybe<IntQueryOperatorInput>;
  nlink?: Maybe<IntQueryOperatorInput>;
  uid?: Maybe<IntQueryOperatorInput>;
  gid?: Maybe<IntQueryOperatorInput>;
  rdev?: Maybe<IntQueryOperatorInput>;
  ino?: Maybe<FloatQueryOperatorInput>;
  atimeMs?: Maybe<FloatQueryOperatorInput>;
  mtimeMs?: Maybe<FloatQueryOperatorInput>;
  ctimeMs?: Maybe<FloatQueryOperatorInput>;
  atime?: Maybe<DateQueryOperatorInput>;
  mtime?: Maybe<DateQueryOperatorInput>;
  ctime?: Maybe<DateQueryOperatorInput>;
  birthtime?: Maybe<DateQueryOperatorInput>;
  birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllFileArgs = {
  filter?: Maybe<FileFilterInput>;
  sort?: Maybe<FileSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryDirectoryArgs = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  absolutePath?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  prettySize?: Maybe<StringQueryOperatorInput>;
  modifiedTime?: Maybe<DateQueryOperatorInput>;
  accessTime?: Maybe<DateQueryOperatorInput>;
  changeTime?: Maybe<DateQueryOperatorInput>;
  birthTime?: Maybe<DateQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  dir?: Maybe<StringQueryOperatorInput>;
  base?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  relativeDirectory?: Maybe<StringQueryOperatorInput>;
  dev?: Maybe<IntQueryOperatorInput>;
  mode?: Maybe<IntQueryOperatorInput>;
  nlink?: Maybe<IntQueryOperatorInput>;
  uid?: Maybe<IntQueryOperatorInput>;
  gid?: Maybe<IntQueryOperatorInput>;
  rdev?: Maybe<IntQueryOperatorInput>;
  ino?: Maybe<FloatQueryOperatorInput>;
  atimeMs?: Maybe<FloatQueryOperatorInput>;
  mtimeMs?: Maybe<FloatQueryOperatorInput>;
  ctimeMs?: Maybe<FloatQueryOperatorInput>;
  atime?: Maybe<DateQueryOperatorInput>;
  mtime?: Maybe<DateQueryOperatorInput>;
  ctime?: Maybe<DateQueryOperatorInput>;
  birthtime?: Maybe<DateQueryOperatorInput>;
  birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllDirectoryArgs = {
  filter?: Maybe<DirectoryFilterInput>;
  sort?: Maybe<DirectorySortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySiteArgs = {
  buildTime?: Maybe<DateQueryOperatorInput>;
  siteMetadata?: Maybe<SiteSiteMetadataFilterInput>;
  port?: Maybe<IntQueryOperatorInput>;
  host?: Maybe<StringQueryOperatorInput>;
  polyfill?: Maybe<BooleanQueryOperatorInput>;
  pathPrefix?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllSiteArgs = {
  filter?: Maybe<SiteFilterInput>;
  sort?: Maybe<SiteSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySiteFunctionArgs = {
  functionRoute?: Maybe<StringQueryOperatorInput>;
  pluginName?: Maybe<StringQueryOperatorInput>;
  originalAbsoluteFilePath?: Maybe<StringQueryOperatorInput>;
  originalRelativeFilePath?: Maybe<StringQueryOperatorInput>;
  relativeCompiledFilePath?: Maybe<StringQueryOperatorInput>;
  absoluteCompiledFilePath?: Maybe<StringQueryOperatorInput>;
  matchPath?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllSiteFunctionArgs = {
  filter?: Maybe<SiteFunctionFilterInput>;
  sort?: Maybe<SiteFunctionSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySitePageArgs = {
  path?: Maybe<StringQueryOperatorInput>;
  component?: Maybe<StringQueryOperatorInput>;
  internalComponentName?: Maybe<StringQueryOperatorInput>;
  componentChunkName?: Maybe<StringQueryOperatorInput>;
  matchPath?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  isCreatedByStatefulCreatePages?: Maybe<BooleanQueryOperatorInput>;
  context?: Maybe<SitePageContextFilterInput>;
  pluginCreator?: Maybe<SitePluginFilterInput>;
  pluginCreatorId?: Maybe<StringQueryOperatorInput>;
};


export type QueryAllSitePageArgs = {
  filter?: Maybe<SitePageFilterInput>;
  sort?: Maybe<SitePageSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySanityGeneralAlertArgs = {
  _id?: Maybe<StringQueryOperatorInput>;
  _type?: Maybe<StringQueryOperatorInput>;
  _createdAt?: Maybe<DateQueryOperatorInput>;
  _updatedAt?: Maybe<DateQueryOperatorInput>;
  _rev?: Maybe<StringQueryOperatorInput>;
  _key?: Maybe<StringQueryOperatorInput>;
  active?: Maybe<BooleanQueryOperatorInput>;
  content?: Maybe<SanityBlockFilterListInput>;
  _rawContent?: Maybe<JsonQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllSanityGeneralAlertArgs = {
  filter?: Maybe<SanityGeneralAlertFilterInput>;
  sort?: Maybe<SanityGeneralAlertSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySanityHeroSectionArgs = {
  _id?: Maybe<StringQueryOperatorInput>;
  _type?: Maybe<StringQueryOperatorInput>;
  _createdAt?: Maybe<DateQueryOperatorInput>;
  _updatedAt?: Maybe<DateQueryOperatorInput>;
  _rev?: Maybe<StringQueryOperatorInput>;
  _key?: Maybe<StringQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
  subtitle?: Maybe<StringQueryOperatorInput>;
  video?: Maybe<SanityFileFilterInput>;
  _rawVideo?: Maybe<JsonQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllSanityHeroSectionArgs = {
  filter?: Maybe<SanityHeroSectionFilterInput>;
  sort?: Maybe<SanityHeroSectionSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySanityMinistryPageArgs = {
  _id?: Maybe<StringQueryOperatorInput>;
  _type?: Maybe<StringQueryOperatorInput>;
  _createdAt?: Maybe<DateQueryOperatorInput>;
  _updatedAt?: Maybe<DateQueryOperatorInput>;
  _rev?: Maybe<StringQueryOperatorInput>;
  _key?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<SanitySlugFilterInput>;
  subLogo?: Maybe<SanityImageFilterInput>;
  subLogoWidth?: Maybe<FloatQueryOperatorInput>;
  sections?: Maybe<SanityPageSectionFilterListInput>;
  content?: Maybe<SanityBlockFilterListInput>;
  _rawUrl?: Maybe<JsonQueryOperatorInput>;
  _rawSubLogo?: Maybe<JsonQueryOperatorInput>;
  _rawContent?: Maybe<JsonQueryOperatorInput>;
  _rawSections?: Maybe<JsonQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllSanityMinistryPageArgs = {
  filter?: Maybe<SanityMinistryPageFilterInput>;
  sort?: Maybe<SanityMinistryPageSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySanityNavigationArgs = {
  _id?: Maybe<StringQueryOperatorInput>;
  _type?: Maybe<StringQueryOperatorInput>;
  _createdAt?: Maybe<DateQueryOperatorInput>;
  _updatedAt?: Maybe<DateQueryOperatorInput>;
  _rev?: Maybe<StringQueryOperatorInput>;
  _key?: Maybe<StringQueryOperatorInput>;
  _rawItems?: Maybe<JsonQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllSanityNavigationArgs = {
  filter?: Maybe<SanityNavigationFilterInput>;
  sort?: Maybe<SanityNavigationSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySanityNewsletterArgs = {
  _id?: Maybe<StringQueryOperatorInput>;
  _type?: Maybe<StringQueryOperatorInput>;
  _createdAt?: Maybe<DateQueryOperatorInput>;
  _updatedAt?: Maybe<DateQueryOperatorInput>;
  _rev?: Maybe<StringQueryOperatorInput>;
  _key?: Maybe<StringQueryOperatorInput>;
  date?: Maybe<DateQueryOperatorInput>;
  link?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllSanityNewsletterArgs = {
  filter?: Maybe<SanityNewsletterFilterInput>;
  sort?: Maybe<SanityNewsletterSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySanityPageArgs = {
  _id?: Maybe<StringQueryOperatorInput>;
  _type?: Maybe<StringQueryOperatorInput>;
  _createdAt?: Maybe<DateQueryOperatorInput>;
  _updatedAt?: Maybe<DateQueryOperatorInput>;
  _rev?: Maybe<StringQueryOperatorInput>;
  _key?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<SanitySlugFilterInput>;
  content?: Maybe<SanityBlockFilterListInput>;
  _rawUrl?: Maybe<JsonQueryOperatorInput>;
  _rawContent?: Maybe<JsonQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllSanityPageArgs = {
  filter?: Maybe<SanityPageFilterInput>;
  sort?: Maybe<SanityPageSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySanityPostArgs = {
  _id?: Maybe<StringQueryOperatorInput>;
  _type?: Maybe<StringQueryOperatorInput>;
  _createdAt?: Maybe<DateQueryOperatorInput>;
  _updatedAt?: Maybe<DateQueryOperatorInput>;
  _rev?: Maybe<StringQueryOperatorInput>;
  _key?: Maybe<StringQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
  featured?: Maybe<BooleanQueryOperatorInput>;
  hidden?: Maybe<BooleanQueryOperatorInput>;
  slug?: Maybe<SanitySlugFilterInput>;
  date?: Maybe<DateQueryOperatorInput>;
  thumbnail?: Maybe<SanityImageFilterInput>;
  thumbnailPoster?: Maybe<SanityPosterFilterInput>;
  thumbnailPosterPreview?: Maybe<FloatQueryOperatorInput>;
  ministries?: Maybe<SanityMinistryPageFilterListInput>;
  summary?: Maybe<SanityBlockFilterListInput>;
  body?: Maybe<SanityBlockFilterListInput>;
  _rawSlug?: Maybe<JsonQueryOperatorInput>;
  _rawThumbnail?: Maybe<JsonQueryOperatorInput>;
  _rawThumbnailPoster?: Maybe<JsonQueryOperatorInput>;
  _rawSummary?: Maybe<JsonQueryOperatorInput>;
  _rawBody?: Maybe<JsonQueryOperatorInput>;
  _rawMinistries?: Maybe<JsonQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllSanityPostArgs = {
  filter?: Maybe<SanityPostFilterInput>;
  sort?: Maybe<SanityPostSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySanityPosterArgs = {
  _id?: Maybe<StringQueryOperatorInput>;
  _type?: Maybe<StringQueryOperatorInput>;
  _createdAt?: Maybe<DateQueryOperatorInput>;
  _updatedAt?: Maybe<DateQueryOperatorInput>;
  _rev?: Maybe<StringQueryOperatorInput>;
  _key?: Maybe<StringQueryOperatorInput>;
  previewDisplay?: Maybe<FloatQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  lines?: Maybe<SanityPosterLineFilterListInput>;
  background?: Maybe<SanityImageFilterInput>;
  overlayColor?: Maybe<StringQueryOperatorInput>;
  overlayOpacity?: Maybe<FloatQueryOperatorInput>;
  _rawLines?: Maybe<JsonQueryOperatorInput>;
  _rawBackground?: Maybe<JsonQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllSanityPosterArgs = {
  filter?: Maybe<SanityPosterFilterInput>;
  sort?: Maybe<SanityPosterSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySanityFileAssetArgs = {
  _id?: Maybe<StringQueryOperatorInput>;
  _type?: Maybe<StringQueryOperatorInput>;
  _createdAt?: Maybe<DateQueryOperatorInput>;
  _updatedAt?: Maybe<DateQueryOperatorInput>;
  _rev?: Maybe<StringQueryOperatorInput>;
  _key?: Maybe<StringQueryOperatorInput>;
  originalFilename?: Maybe<StringQueryOperatorInput>;
  label?: Maybe<StringQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  altText?: Maybe<StringQueryOperatorInput>;
  sha1hash?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  mimeType?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<FloatQueryOperatorInput>;
  assetId?: Maybe<StringQueryOperatorInput>;
  path?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  source?: Maybe<SanityAssetSourceDataFilterInput>;
  _rawSource?: Maybe<JsonQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllSanityFileAssetArgs = {
  filter?: Maybe<SanityFileAssetFilterInput>;
  sort?: Maybe<SanityFileAssetSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySanityImageAssetArgs = {
  _id?: Maybe<StringQueryOperatorInput>;
  _type?: Maybe<StringQueryOperatorInput>;
  _createdAt?: Maybe<DateQueryOperatorInput>;
  _updatedAt?: Maybe<DateQueryOperatorInput>;
  _rev?: Maybe<StringQueryOperatorInput>;
  _key?: Maybe<StringQueryOperatorInput>;
  originalFilename?: Maybe<StringQueryOperatorInput>;
  label?: Maybe<StringQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  altText?: Maybe<StringQueryOperatorInput>;
  sha1hash?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  mimeType?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<FloatQueryOperatorInput>;
  assetId?: Maybe<StringQueryOperatorInput>;
  path?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  metadata?: Maybe<SanityImageMetadataFilterInput>;
  source?: Maybe<SanityAssetSourceDataFilterInput>;
  _rawMetadata?: Maybe<JsonQueryOperatorInput>;
  _rawSource?: Maybe<JsonQueryOperatorInput>;
  gatsbyImageData?: Maybe<JsonQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllSanityImageAssetArgs = {
  filter?: Maybe<SanityImageAssetFilterInput>;
  sort?: Maybe<SanityImageAssetSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySanityScheduleAlertArgs = {
  _id?: Maybe<StringQueryOperatorInput>;
  _type?: Maybe<StringQueryOperatorInput>;
  _createdAt?: Maybe<DateQueryOperatorInput>;
  _updatedAt?: Maybe<DateQueryOperatorInput>;
  _rev?: Maybe<StringQueryOperatorInput>;
  _key?: Maybe<StringQueryOperatorInput>;
  active?: Maybe<BooleanQueryOperatorInput>;
  message?: Maybe<SanityBlockFilterListInput>;
  _rawMessage?: Maybe<JsonQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllSanityScheduleAlertArgs = {
  filter?: Maybe<SanityScheduleAlertFilterInput>;
  sort?: Maybe<SanityScheduleAlertSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySanitySermonUploadArgs = {
  _id?: Maybe<StringQueryOperatorInput>;
  _type?: Maybe<StringQueryOperatorInput>;
  _createdAt?: Maybe<DateQueryOperatorInput>;
  _updatedAt?: Maybe<DateQueryOperatorInput>;
  _rev?: Maybe<StringQueryOperatorInput>;
  _key?: Maybe<StringQueryOperatorInput>;
  date?: Maybe<DateQueryOperatorInput>;
  extraInfo?: Maybe<StringQueryOperatorInput>;
  audioFile?: Maybe<SanityFileFilterInput>;
  _rawAudioFile?: Maybe<JsonQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllSanitySermonUploadArgs = {
  filter?: Maybe<SanitySermonUploadFilterInput>;
  sort?: Maybe<SanitySermonUploadSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySanityShortcutsArgs = {
  _id?: Maybe<StringQueryOperatorInput>;
  _type?: Maybe<StringQueryOperatorInput>;
  _createdAt?: Maybe<DateQueryOperatorInput>;
  _updatedAt?: Maybe<DateQueryOperatorInput>;
  _rev?: Maybe<StringQueryOperatorInput>;
  _key?: Maybe<StringQueryOperatorInput>;
  content?: Maybe<SanityBlockFilterListInput>;
  _rawContent?: Maybe<JsonQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllSanityShortcutsArgs = {
  filter?: Maybe<SanityShortcutsFilterInput>;
  sort?: Maybe<SanityShortcutsSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySanityWeeklyScheduleArgs = {
  _id?: Maybe<StringQueryOperatorInput>;
  _type?: Maybe<StringQueryOperatorInput>;
  _createdAt?: Maybe<DateQueryOperatorInput>;
  _updatedAt?: Maybe<DateQueryOperatorInput>;
  _rev?: Maybe<StringQueryOperatorInput>;
  _key?: Maybe<StringQueryOperatorInput>;
  days?: Maybe<SanityWeeklyScheduleDayFilterListInput>;
  _rawDays?: Maybe<JsonQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllSanityWeeklyScheduleArgs = {
  filter?: Maybe<SanityWeeklyScheduleFilterInput>;
  sort?: Maybe<SanityWeeklyScheduleSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySitePluginArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  resolve?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
  pluginOptions?: Maybe<SitePluginPluginOptionsFilterInput>;
  nodeAPIs?: Maybe<StringQueryOperatorInput>;
  browserAPIs?: Maybe<StringQueryOperatorInput>;
  ssrAPIs?: Maybe<StringQueryOperatorInput>;
  pluginFilepath?: Maybe<StringQueryOperatorInput>;
  packageJson?: Maybe<SitePluginPackageJsonFilterInput>;
};


export type QueryAllSitePluginArgs = {
  filter?: Maybe<SitePluginFilterInput>;
  sort?: Maybe<SitePluginSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySiteBuildMetadataArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  buildTime?: Maybe<DateQueryOperatorInput>;
};


export type QueryAllSiteBuildMetadataArgs = {
  filter?: Maybe<SiteBuildMetadataFilterInput>;
  sort?: Maybe<SiteBuildMetadataSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

export type SanityAssetSourceData = {
  __typename?: 'SanityAssetSourceData';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type SanityAssetSourceDataFilterInput = {
  _key?: Maybe<StringQueryOperatorInput>;
  _type?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
};

export type SanityBlock = {
  __typename?: 'SanityBlock';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  children?: Maybe<Array<Maybe<SanitySpan>>>;
  style?: Maybe<Scalars['String']>;
  list?: Maybe<Scalars['String']>;
  _rawChildren?: Maybe<Scalars['JSON']>;
};


export type SanityBlock_RawChildrenArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};

export type SanityBlockFilterInput = {
  _key?: Maybe<StringQueryOperatorInput>;
  _type?: Maybe<StringQueryOperatorInput>;
  children?: Maybe<SanitySpanFilterListInput>;
  style?: Maybe<StringQueryOperatorInput>;
  list?: Maybe<StringQueryOperatorInput>;
  _rawChildren?: Maybe<JsonQueryOperatorInput>;
};

export type SanityBlockFilterListInput = {
  elemMatch?: Maybe<SanityBlockFilterInput>;
};

export type SanityBlockOrButtonLinkOrButtonRowOrColumnRowOrContentSectionOrPictureOrPosterInContentOrScriptureReferenceOrVerticalSpaceOrVideoEmbed = SanityBlock | SanityButtonLink | SanityButtonRow | SanityColumnRow | SanityContentSection | SanityPicture | SanityPosterInContent | SanityScriptureReference | SanityVerticalSpace | SanityVideoEmbed;

export type SanityBlockOrButtonLinkOrButtonRowOrPictureOrPosterInContentOrScriptureReferenceOrVerticalSpaceOrVideoEmbed = SanityBlock | SanityButtonLink | SanityButtonRow | SanityPicture | SanityPosterInContent | SanityScriptureReference | SanityVerticalSpace | SanityVideoEmbed;

export type SanityButtonLink = {
  __typename?: 'SanityButtonLink';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  hidden?: Maybe<Scalars['Boolean']>;
  text?: Maybe<Scalars['String']>;
  href?: Maybe<Scalars['String']>;
  align?: Maybe<Scalars['String']>;
  thick?: Maybe<Scalars['Boolean']>;
  dark?: Maybe<Scalars['Boolean']>;
};

export type SanityButtonRow = {
  __typename?: 'SanityButtonRow';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  buttons?: Maybe<Array<Maybe<SanityButtonLink>>>;
  _rawButtons?: Maybe<Scalars['JSON']>;
};


export type SanityButtonRow_RawButtonsArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};

export type SanityColumnRow = {
  __typename?: 'SanityColumnRow';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  columns?: Maybe<Array<Maybe<SanityContentColumn>>>;
  _rawColumns?: Maybe<Scalars['JSON']>;
};


export type SanityColumnRow_RawColumnsArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};

export type SanityContentColumn = {
  __typename?: 'SanityContentColumn';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  content?: Maybe<Array<Maybe<SanityBlock>>>;
  _rawContent?: Maybe<Scalars['JSON']>;
};


export type SanityContentColumn_RawContentArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};

export type SanityContentSection = {
  __typename?: 'SanityContentSection';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  verticalPadding?: Maybe<Scalars['Float']>;
  textColor?: Maybe<Scalars['String']>;
  backgroundColor?: Maybe<Scalars['String']>;
  backgroundImage?: Maybe<SanityImage>;
  backgroundOpacity?: Maybe<Scalars['Float']>;
  backgroundBlurStrength?: Maybe<Scalars['Float']>;
  backgroundParallax?: Maybe<Scalars['Boolean']>;
  content?: Maybe<Array<Maybe<SanityBlock>>>;
  _rawContent?: Maybe<Scalars['JSON']>;
  _rawBackgroundImage?: Maybe<Scalars['JSON']>;
};


export type SanityContentSection_RawContentArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};


export type SanityContentSection_RawBackgroundImageArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};

/** A Sanity document */
export type SanityDocument = {
  _id?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  _createdAt?: Maybe<Scalars['Date']>;
  _updatedAt?: Maybe<Scalars['Date']>;
  _rev?: Maybe<Scalars['String']>;
};

export type SanityFile = {
  __typename?: 'SanityFile';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  asset?: Maybe<SanityFileAsset>;
  _rawAsset?: Maybe<Scalars['JSON']>;
};


export type SanityFile_RawAssetArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};

export type SanityFileAsset = SanityDocument & Node & {
  __typename?: 'SanityFileAsset';
  _id?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  _createdAt?: Maybe<Scalars['Date']>;
  _updatedAt?: Maybe<Scalars['Date']>;
  _rev?: Maybe<Scalars['String']>;
  _key?: Maybe<Scalars['String']>;
  originalFilename?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  altText?: Maybe<Scalars['String']>;
  sha1hash?: Maybe<Scalars['String']>;
  extension?: Maybe<Scalars['String']>;
  mimeType?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Float']>;
  assetId?: Maybe<Scalars['String']>;
  path?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  source?: Maybe<SanityAssetSourceData>;
  _rawSource?: Maybe<Scalars['JSON']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type SanityFileAsset_CreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type SanityFileAsset_UpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type SanityFileAsset_RawSourceArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};

export type SanityFileAssetConnection = {
  __typename?: 'SanityFileAssetConnection';
  totalCount: Scalars['Int'];
  edges: Array<SanityFileAssetEdge>;
  nodes: Array<SanityFileAsset>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SanityFileAssetGroupConnection>;
};


export type SanityFileAssetConnectionDistinctArgs = {
  field: SanityFileAssetFieldsEnum;
};


export type SanityFileAssetConnectionMaxArgs = {
  field: SanityFileAssetFieldsEnum;
};


export type SanityFileAssetConnectionMinArgs = {
  field: SanityFileAssetFieldsEnum;
};


export type SanityFileAssetConnectionSumArgs = {
  field: SanityFileAssetFieldsEnum;
};


export type SanityFileAssetConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SanityFileAssetFieldsEnum;
};

export type SanityFileAssetEdge = {
  __typename?: 'SanityFileAssetEdge';
  next?: Maybe<SanityFileAsset>;
  node: SanityFileAsset;
  previous?: Maybe<SanityFileAsset>;
};

export enum SanityFileAssetFieldsEnum {
  _id = '_id',
  _type = '_type',
  _createdAt = '_createdAt',
  _updatedAt = '_updatedAt',
  _rev = '_rev',
  _key = '_key',
  originalFilename = 'originalFilename',
  label = 'label',
  title = 'title',
  description = 'description',
  altText = 'altText',
  sha1hash = 'sha1hash',
  extension = 'extension',
  mimeType = 'mimeType',
  size = 'size',
  assetId = 'assetId',
  path = 'path',
  url = 'url',
  source____key = 'source____key',
  source____type = 'source____type',
  source___name = 'source___name',
  source___id = 'source___id',
  source___url = 'source___url',
  _rawSource = '_rawSource',
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
  _id?: Maybe<StringQueryOperatorInput>;
  _type?: Maybe<StringQueryOperatorInput>;
  _createdAt?: Maybe<DateQueryOperatorInput>;
  _updatedAt?: Maybe<DateQueryOperatorInput>;
  _rev?: Maybe<StringQueryOperatorInput>;
  _key?: Maybe<StringQueryOperatorInput>;
  originalFilename?: Maybe<StringQueryOperatorInput>;
  label?: Maybe<StringQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  altText?: Maybe<StringQueryOperatorInput>;
  sha1hash?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  mimeType?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<FloatQueryOperatorInput>;
  assetId?: Maybe<StringQueryOperatorInput>;
  path?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  source?: Maybe<SanityAssetSourceDataFilterInput>;
  _rawSource?: Maybe<JsonQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type SanityFileAssetGroupConnection = {
  __typename?: 'SanityFileAssetGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<SanityFileAssetEdge>;
  nodes: Array<SanityFileAsset>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SanityFileAssetSortInput = {
  fields?: Maybe<Array<Maybe<SanityFileAssetFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SanityFileFilterInput = {
  _key?: Maybe<StringQueryOperatorInput>;
  _type?: Maybe<StringQueryOperatorInput>;
  asset?: Maybe<SanityFileAssetFilterInput>;
  _rawAsset?: Maybe<JsonQueryOperatorInput>;
};

export enum SanityGatsbyImagePlaceholder {
  DOMINANT_COLOR = 'DOMINANT_COLOR',
  BLURRED = 'BLURRED',
  NONE = 'NONE'
}

export type SanityGeneralAlert = SanityDocument & Node & {
  __typename?: 'SanityGeneralAlert';
  _id?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  _createdAt?: Maybe<Scalars['Date']>;
  _updatedAt?: Maybe<Scalars['Date']>;
  _rev?: Maybe<Scalars['String']>;
  _key?: Maybe<Scalars['String']>;
  active?: Maybe<Scalars['Boolean']>;
  content?: Maybe<Array<Maybe<SanityBlock>>>;
  _rawContent?: Maybe<Scalars['JSON']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type SanityGeneralAlert_CreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type SanityGeneralAlert_UpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type SanityGeneralAlert_RawContentArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};

export type SanityGeneralAlertConnection = {
  __typename?: 'SanityGeneralAlertConnection';
  totalCount: Scalars['Int'];
  edges: Array<SanityGeneralAlertEdge>;
  nodes: Array<SanityGeneralAlert>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SanityGeneralAlertGroupConnection>;
};


export type SanityGeneralAlertConnectionDistinctArgs = {
  field: SanityGeneralAlertFieldsEnum;
};


export type SanityGeneralAlertConnectionMaxArgs = {
  field: SanityGeneralAlertFieldsEnum;
};


export type SanityGeneralAlertConnectionMinArgs = {
  field: SanityGeneralAlertFieldsEnum;
};


export type SanityGeneralAlertConnectionSumArgs = {
  field: SanityGeneralAlertFieldsEnum;
};


export type SanityGeneralAlertConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SanityGeneralAlertFieldsEnum;
};

export type SanityGeneralAlertEdge = {
  __typename?: 'SanityGeneralAlertEdge';
  next?: Maybe<SanityGeneralAlert>;
  node: SanityGeneralAlert;
  previous?: Maybe<SanityGeneralAlert>;
};

export enum SanityGeneralAlertFieldsEnum {
  _id = '_id',
  _type = '_type',
  _createdAt = '_createdAt',
  _updatedAt = '_updatedAt',
  _rev = '_rev',
  _key = '_key',
  active = 'active',
  content = 'content',
  content____key = 'content____key',
  content____type = 'content____type',
  content___children = 'content___children',
  content___children____key = 'content___children____key',
  content___children____type = 'content___children____type',
  content___children___marks = 'content___children___marks',
  content___children___text = 'content___children___text',
  content___style = 'content___style',
  content___list = 'content___list',
  content____rawChildren = 'content____rawChildren',
  _rawContent = '_rawContent',
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

export type SanityGeneralAlertFilterInput = {
  _id?: Maybe<StringQueryOperatorInput>;
  _type?: Maybe<StringQueryOperatorInput>;
  _createdAt?: Maybe<DateQueryOperatorInput>;
  _updatedAt?: Maybe<DateQueryOperatorInput>;
  _rev?: Maybe<StringQueryOperatorInput>;
  _key?: Maybe<StringQueryOperatorInput>;
  active?: Maybe<BooleanQueryOperatorInput>;
  content?: Maybe<SanityBlockFilterListInput>;
  _rawContent?: Maybe<JsonQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type SanityGeneralAlertGroupConnection = {
  __typename?: 'SanityGeneralAlertGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<SanityGeneralAlertEdge>;
  nodes: Array<SanityGeneralAlert>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SanityGeneralAlertSortInput = {
  fields?: Maybe<Array<Maybe<SanityGeneralAlertFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SanityGeopoint = {
  __typename?: 'SanityGeopoint';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  lat?: Maybe<Scalars['Float']>;
  lng?: Maybe<Scalars['Float']>;
  alt?: Maybe<Scalars['Float']>;
};

export type SanityGeopointFilterInput = {
  _key?: Maybe<StringQueryOperatorInput>;
  _type?: Maybe<StringQueryOperatorInput>;
  lat?: Maybe<FloatQueryOperatorInput>;
  lng?: Maybe<FloatQueryOperatorInput>;
  alt?: Maybe<FloatQueryOperatorInput>;
};

export type SanityHeroSection = SanityDocument & Node & {
  __typename?: 'SanityHeroSection';
  _id?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  _createdAt?: Maybe<Scalars['Date']>;
  _updatedAt?: Maybe<Scalars['Date']>;
  _rev?: Maybe<Scalars['String']>;
  _key?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  subtitle?: Maybe<Scalars['String']>;
  video?: Maybe<SanityFile>;
  _rawVideo?: Maybe<Scalars['JSON']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type SanityHeroSection_CreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type SanityHeroSection_UpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type SanityHeroSection_RawVideoArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};

export type SanityHeroSectionConnection = {
  __typename?: 'SanityHeroSectionConnection';
  totalCount: Scalars['Int'];
  edges: Array<SanityHeroSectionEdge>;
  nodes: Array<SanityHeroSection>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SanityHeroSectionGroupConnection>;
};


export type SanityHeroSectionConnectionDistinctArgs = {
  field: SanityHeroSectionFieldsEnum;
};


export type SanityHeroSectionConnectionMaxArgs = {
  field: SanityHeroSectionFieldsEnum;
};


export type SanityHeroSectionConnectionMinArgs = {
  field: SanityHeroSectionFieldsEnum;
};


export type SanityHeroSectionConnectionSumArgs = {
  field: SanityHeroSectionFieldsEnum;
};


export type SanityHeroSectionConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SanityHeroSectionFieldsEnum;
};

export type SanityHeroSectionEdge = {
  __typename?: 'SanityHeroSectionEdge';
  next?: Maybe<SanityHeroSection>;
  node: SanityHeroSection;
  previous?: Maybe<SanityHeroSection>;
};

export enum SanityHeroSectionFieldsEnum {
  _id = '_id',
  _type = '_type',
  _createdAt = '_createdAt',
  _updatedAt = '_updatedAt',
  _rev = '_rev',
  _key = '_key',
  title = 'title',
  subtitle = 'subtitle',
  video____key = 'video____key',
  video____type = 'video____type',
  video___asset____id = 'video___asset____id',
  video___asset____type = 'video___asset____type',
  video___asset____createdAt = 'video___asset____createdAt',
  video___asset____updatedAt = 'video___asset____updatedAt',
  video___asset____rev = 'video___asset____rev',
  video___asset____key = 'video___asset____key',
  video___asset___originalFilename = 'video___asset___originalFilename',
  video___asset___label = 'video___asset___label',
  video___asset___title = 'video___asset___title',
  video___asset___description = 'video___asset___description',
  video___asset___altText = 'video___asset___altText',
  video___asset___sha1hash = 'video___asset___sha1hash',
  video___asset___extension = 'video___asset___extension',
  video___asset___mimeType = 'video___asset___mimeType',
  video___asset___size = 'video___asset___size',
  video___asset___assetId = 'video___asset___assetId',
  video___asset___path = 'video___asset___path',
  video___asset___url = 'video___asset___url',
  video___asset___source____key = 'video___asset___source____key',
  video___asset___source____type = 'video___asset___source____type',
  video___asset___source___name = 'video___asset___source___name',
  video___asset___source___id = 'video___asset___source___id',
  video___asset___source___url = 'video___asset___source___url',
  video___asset____rawSource = 'video___asset____rawSource',
  video___asset___id = 'video___asset___id',
  video___asset___parent___id = 'video___asset___parent___id',
  video___asset___parent___children = 'video___asset___parent___children',
  video___asset___children = 'video___asset___children',
  video___asset___children___id = 'video___asset___children___id',
  video___asset___children___children = 'video___asset___children___children',
  video___asset___internal___content = 'video___asset___internal___content',
  video___asset___internal___contentDigest = 'video___asset___internal___contentDigest',
  video___asset___internal___description = 'video___asset___internal___description',
  video___asset___internal___fieldOwners = 'video___asset___internal___fieldOwners',
  video___asset___internal___ignoreType = 'video___asset___internal___ignoreType',
  video___asset___internal___mediaType = 'video___asset___internal___mediaType',
  video___asset___internal___owner = 'video___asset___internal___owner',
  video___asset___internal___type = 'video___asset___internal___type',
  video____rawAsset = 'video____rawAsset',
  _rawVideo = '_rawVideo',
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
  _id?: Maybe<StringQueryOperatorInput>;
  _type?: Maybe<StringQueryOperatorInput>;
  _createdAt?: Maybe<DateQueryOperatorInput>;
  _updatedAt?: Maybe<DateQueryOperatorInput>;
  _rev?: Maybe<StringQueryOperatorInput>;
  _key?: Maybe<StringQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
  subtitle?: Maybe<StringQueryOperatorInput>;
  video?: Maybe<SanityFileFilterInput>;
  _rawVideo?: Maybe<JsonQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type SanityHeroSectionGroupConnection = {
  __typename?: 'SanityHeroSectionGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<SanityHeroSectionEdge>;
  nodes: Array<SanityHeroSection>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SanityHeroSectionSortInput = {
  fields?: Maybe<Array<Maybe<SanityHeroSectionFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SanityImage = {
  __typename?: 'SanityImage';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  asset?: Maybe<SanityImageAsset>;
  hotspot?: Maybe<SanityImageHotspot>;
  crop?: Maybe<SanityImageCrop>;
  _rawAsset?: Maybe<Scalars['JSON']>;
  _rawHotspot?: Maybe<Scalars['JSON']>;
  _rawCrop?: Maybe<Scalars['JSON']>;
};


export type SanityImage_RawAssetArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};


export type SanityImage_RawHotspotArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};


export type SanityImage_RawCropArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};

export type SanityImageAsset = SanityDocument & Node & {
  __typename?: 'SanityImageAsset';
  _id?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  _createdAt?: Maybe<Scalars['Date']>;
  _updatedAt?: Maybe<Scalars['Date']>;
  _rev?: Maybe<Scalars['String']>;
  _key?: Maybe<Scalars['String']>;
  originalFilename?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  altText?: Maybe<Scalars['String']>;
  sha1hash?: Maybe<Scalars['String']>;
  extension?: Maybe<Scalars['String']>;
  mimeType?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Float']>;
  assetId?: Maybe<Scalars['String']>;
  path?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  metadata?: Maybe<SanityImageMetadata>;
  source?: Maybe<SanityAssetSourceData>;
  _rawMetadata?: Maybe<Scalars['JSON']>;
  _rawSource?: Maybe<Scalars['JSON']>;
  gatsbyImageData: Scalars['JSON'];
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type SanityImageAsset_CreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type SanityImageAsset_UpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type SanityImageAsset_RawMetadataArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};


export type SanityImageAsset_RawSourceArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};


export type SanityImageAssetGatsbyImageDataArgs = {
  layout?: Maybe<GatsbyImageLayout>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  aspectRatio?: Maybe<Scalars['Float']>;
  placeholder?: Maybe<SanityGatsbyImagePlaceholder>;
  formats?: Maybe<Array<Maybe<GatsbyImageFormat>>>;
  outputPixelDensities?: Maybe<Array<Maybe<Scalars['Float']>>>;
  breakpoints?: Maybe<Array<Maybe<Scalars['Int']>>>;
  sizes?: Maybe<Scalars['String']>;
  backgroundColor?: Maybe<Scalars['String']>;
  fit?: Maybe<SanityImageFit>;
};

export type SanityImageAssetConnection = {
  __typename?: 'SanityImageAssetConnection';
  totalCount: Scalars['Int'];
  edges: Array<SanityImageAssetEdge>;
  nodes: Array<SanityImageAsset>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SanityImageAssetGroupConnection>;
};


export type SanityImageAssetConnectionDistinctArgs = {
  field: SanityImageAssetFieldsEnum;
};


export type SanityImageAssetConnectionMaxArgs = {
  field: SanityImageAssetFieldsEnum;
};


export type SanityImageAssetConnectionMinArgs = {
  field: SanityImageAssetFieldsEnum;
};


export type SanityImageAssetConnectionSumArgs = {
  field: SanityImageAssetFieldsEnum;
};


export type SanityImageAssetConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SanityImageAssetFieldsEnum;
};

export type SanityImageAssetEdge = {
  __typename?: 'SanityImageAssetEdge';
  next?: Maybe<SanityImageAsset>;
  node: SanityImageAsset;
  previous?: Maybe<SanityImageAsset>;
};

export enum SanityImageAssetFieldsEnum {
  _id = '_id',
  _type = '_type',
  _createdAt = '_createdAt',
  _updatedAt = '_updatedAt',
  _rev = '_rev',
  _key = '_key',
  originalFilename = 'originalFilename',
  label = 'label',
  title = 'title',
  description = 'description',
  altText = 'altText',
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
  metadata___palette____rawDarkMuted = 'metadata___palette____rawDarkMuted',
  metadata___palette____rawLightVibrant = 'metadata___palette____rawLightVibrant',
  metadata___palette____rawDarkVibrant = 'metadata___palette____rawDarkVibrant',
  metadata___palette____rawVibrant = 'metadata___palette____rawVibrant',
  metadata___palette____rawDominant = 'metadata___palette____rawDominant',
  metadata___palette____rawLightMuted = 'metadata___palette____rawLightMuted',
  metadata___palette____rawMuted = 'metadata___palette____rawMuted',
  metadata___lqip = 'metadata___lqip',
  metadata___hasAlpha = 'metadata___hasAlpha',
  metadata___isOpaque = 'metadata___isOpaque',
  metadata____rawLocation = 'metadata____rawLocation',
  metadata____rawDimensions = 'metadata____rawDimensions',
  metadata____rawPalette = 'metadata____rawPalette',
  source____key = 'source____key',
  source____type = 'source____type',
  source___name = 'source___name',
  source___id = 'source___id',
  source___url = 'source___url',
  _rawMetadata = '_rawMetadata',
  _rawSource = '_rawSource',
  gatsbyImageData = 'gatsbyImageData',
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
  _id?: Maybe<StringQueryOperatorInput>;
  _type?: Maybe<StringQueryOperatorInput>;
  _createdAt?: Maybe<DateQueryOperatorInput>;
  _updatedAt?: Maybe<DateQueryOperatorInput>;
  _rev?: Maybe<StringQueryOperatorInput>;
  _key?: Maybe<StringQueryOperatorInput>;
  originalFilename?: Maybe<StringQueryOperatorInput>;
  label?: Maybe<StringQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  altText?: Maybe<StringQueryOperatorInput>;
  sha1hash?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  mimeType?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<FloatQueryOperatorInput>;
  assetId?: Maybe<StringQueryOperatorInput>;
  path?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  metadata?: Maybe<SanityImageMetadataFilterInput>;
  source?: Maybe<SanityAssetSourceDataFilterInput>;
  _rawMetadata?: Maybe<JsonQueryOperatorInput>;
  _rawSource?: Maybe<JsonQueryOperatorInput>;
  gatsbyImageData?: Maybe<JsonQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type SanityImageAssetGroupConnection = {
  __typename?: 'SanityImageAssetGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<SanityImageAssetEdge>;
  nodes: Array<SanityImageAsset>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SanityImageAssetSortInput = {
  fields?: Maybe<Array<Maybe<SanityImageAssetFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SanityImageCrop = {
  __typename?: 'SanityImageCrop';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  top?: Maybe<Scalars['Float']>;
  bottom?: Maybe<Scalars['Float']>;
  left?: Maybe<Scalars['Float']>;
  right?: Maybe<Scalars['Float']>;
};

export type SanityImageCropFilterInput = {
  _key?: Maybe<StringQueryOperatorInput>;
  _type?: Maybe<StringQueryOperatorInput>;
  top?: Maybe<FloatQueryOperatorInput>;
  bottom?: Maybe<FloatQueryOperatorInput>;
  left?: Maybe<FloatQueryOperatorInput>;
  right?: Maybe<FloatQueryOperatorInput>;
};

export type SanityImageDimensions = {
  __typename?: 'SanityImageDimensions';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
  aspectRatio?: Maybe<Scalars['Float']>;
};

export type SanityImageDimensionsFilterInput = {
  _key?: Maybe<StringQueryOperatorInput>;
  _type?: Maybe<StringQueryOperatorInput>;
  height?: Maybe<FloatQueryOperatorInput>;
  width?: Maybe<FloatQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
};

export type SanityImageFilterInput = {
  _key?: Maybe<StringQueryOperatorInput>;
  _type?: Maybe<StringQueryOperatorInput>;
  asset?: Maybe<SanityImageAssetFilterInput>;
  hotspot?: Maybe<SanityImageHotspotFilterInput>;
  crop?: Maybe<SanityImageCropFilterInput>;
  _rawAsset?: Maybe<JsonQueryOperatorInput>;
  _rawHotspot?: Maybe<JsonQueryOperatorInput>;
  _rawCrop?: Maybe<JsonQueryOperatorInput>;
};

export enum SanityImageFit {
  CLIP = 'CLIP',
  CROP = 'CROP',
  FILL = 'FILL',
  FILLMAX = 'FILLMAX',
  MAX = 'MAX',
  SCALE = 'SCALE',
  MIN = 'MIN'
}

export type SanityImageHotspot = {
  __typename?: 'SanityImageHotspot';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  x?: Maybe<Scalars['Float']>;
  y?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
};

export type SanityImageHotspotFilterInput = {
  _key?: Maybe<StringQueryOperatorInput>;
  _type?: Maybe<StringQueryOperatorInput>;
  x?: Maybe<FloatQueryOperatorInput>;
  y?: Maybe<FloatQueryOperatorInput>;
  height?: Maybe<FloatQueryOperatorInput>;
  width?: Maybe<FloatQueryOperatorInput>;
};

export type SanityImageMetadata = {
  __typename?: 'SanityImageMetadata';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  location?: Maybe<SanityGeopoint>;
  dimensions?: Maybe<SanityImageDimensions>;
  palette?: Maybe<SanityImagePalette>;
  lqip?: Maybe<Scalars['String']>;
  hasAlpha?: Maybe<Scalars['Boolean']>;
  isOpaque?: Maybe<Scalars['Boolean']>;
  _rawLocation?: Maybe<Scalars['JSON']>;
  _rawDimensions?: Maybe<Scalars['JSON']>;
  _rawPalette?: Maybe<Scalars['JSON']>;
};


export type SanityImageMetadata_RawLocationArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};


export type SanityImageMetadata_RawDimensionsArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};


export type SanityImageMetadata_RawPaletteArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};

export type SanityImageMetadataFilterInput = {
  _key?: Maybe<StringQueryOperatorInput>;
  _type?: Maybe<StringQueryOperatorInput>;
  location?: Maybe<SanityGeopointFilterInput>;
  dimensions?: Maybe<SanityImageDimensionsFilterInput>;
  palette?: Maybe<SanityImagePaletteFilterInput>;
  lqip?: Maybe<StringQueryOperatorInput>;
  hasAlpha?: Maybe<BooleanQueryOperatorInput>;
  isOpaque?: Maybe<BooleanQueryOperatorInput>;
  _rawLocation?: Maybe<JsonQueryOperatorInput>;
  _rawDimensions?: Maybe<JsonQueryOperatorInput>;
  _rawPalette?: Maybe<JsonQueryOperatorInput>;
};

export type SanityImagePalette = {
  __typename?: 'SanityImagePalette';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  darkMuted?: Maybe<SanityImagePaletteSwatch>;
  lightVibrant?: Maybe<SanityImagePaletteSwatch>;
  darkVibrant?: Maybe<SanityImagePaletteSwatch>;
  vibrant?: Maybe<SanityImagePaletteSwatch>;
  dominant?: Maybe<SanityImagePaletteSwatch>;
  lightMuted?: Maybe<SanityImagePaletteSwatch>;
  muted?: Maybe<SanityImagePaletteSwatch>;
  _rawDarkMuted?: Maybe<Scalars['JSON']>;
  _rawLightVibrant?: Maybe<Scalars['JSON']>;
  _rawDarkVibrant?: Maybe<Scalars['JSON']>;
  _rawVibrant?: Maybe<Scalars['JSON']>;
  _rawDominant?: Maybe<Scalars['JSON']>;
  _rawLightMuted?: Maybe<Scalars['JSON']>;
  _rawMuted?: Maybe<Scalars['JSON']>;
};


export type SanityImagePalette_RawDarkMutedArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};


export type SanityImagePalette_RawLightVibrantArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};


export type SanityImagePalette_RawDarkVibrantArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};


export type SanityImagePalette_RawVibrantArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};


export type SanityImagePalette_RawDominantArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};


export type SanityImagePalette_RawLightMutedArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};


export type SanityImagePalette_RawMutedArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};

export type SanityImagePaletteFilterInput = {
  _key?: Maybe<StringQueryOperatorInput>;
  _type?: Maybe<StringQueryOperatorInput>;
  darkMuted?: Maybe<SanityImagePaletteSwatchFilterInput>;
  lightVibrant?: Maybe<SanityImagePaletteSwatchFilterInput>;
  darkVibrant?: Maybe<SanityImagePaletteSwatchFilterInput>;
  vibrant?: Maybe<SanityImagePaletteSwatchFilterInput>;
  dominant?: Maybe<SanityImagePaletteSwatchFilterInput>;
  lightMuted?: Maybe<SanityImagePaletteSwatchFilterInput>;
  muted?: Maybe<SanityImagePaletteSwatchFilterInput>;
  _rawDarkMuted?: Maybe<JsonQueryOperatorInput>;
  _rawLightVibrant?: Maybe<JsonQueryOperatorInput>;
  _rawDarkVibrant?: Maybe<JsonQueryOperatorInput>;
  _rawVibrant?: Maybe<JsonQueryOperatorInput>;
  _rawDominant?: Maybe<JsonQueryOperatorInput>;
  _rawLightMuted?: Maybe<JsonQueryOperatorInput>;
  _rawMuted?: Maybe<JsonQueryOperatorInput>;
};

export type SanityImagePaletteSwatch = {
  __typename?: 'SanityImagePaletteSwatch';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  background?: Maybe<Scalars['String']>;
  foreground?: Maybe<Scalars['String']>;
  population?: Maybe<Scalars['Float']>;
  title?: Maybe<Scalars['String']>;
};

export type SanityImagePaletteSwatchFilterInput = {
  _key?: Maybe<StringQueryOperatorInput>;
  _type?: Maybe<StringQueryOperatorInput>;
  background?: Maybe<StringQueryOperatorInput>;
  foreground?: Maybe<StringQueryOperatorInput>;
  population?: Maybe<FloatQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
};

export type SanityMinistryPage = SanityDocument & Node & {
  __typename?: 'SanityMinistryPage';
  _id?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  _createdAt?: Maybe<Scalars['Date']>;
  _updatedAt?: Maybe<Scalars['Date']>;
  _rev?: Maybe<Scalars['String']>;
  _key?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<SanitySlug>;
  subLogo?: Maybe<SanityImage>;
  subLogoWidth?: Maybe<Scalars['Float']>;
  sections?: Maybe<Array<Maybe<SanityPageSection>>>;
  content?: Maybe<Array<Maybe<SanityBlock>>>;
  _rawUrl?: Maybe<Scalars['JSON']>;
  _rawSubLogo?: Maybe<Scalars['JSON']>;
  _rawContent?: Maybe<Scalars['JSON']>;
  _rawSections?: Maybe<Scalars['JSON']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type SanityMinistryPage_CreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type SanityMinistryPage_UpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type SanityMinistryPage_RawUrlArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};


export type SanityMinistryPage_RawSubLogoArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};


export type SanityMinistryPage_RawContentArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};


export type SanityMinistryPage_RawSectionsArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};

export type SanityMinistryPageConnection = {
  __typename?: 'SanityMinistryPageConnection';
  totalCount: Scalars['Int'];
  edges: Array<SanityMinistryPageEdge>;
  nodes: Array<SanityMinistryPage>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SanityMinistryPageGroupConnection>;
};


export type SanityMinistryPageConnectionDistinctArgs = {
  field: SanityMinistryPageFieldsEnum;
};


export type SanityMinistryPageConnectionMaxArgs = {
  field: SanityMinistryPageFieldsEnum;
};


export type SanityMinistryPageConnectionMinArgs = {
  field: SanityMinistryPageFieldsEnum;
};


export type SanityMinistryPageConnectionSumArgs = {
  field: SanityMinistryPageFieldsEnum;
};


export type SanityMinistryPageConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SanityMinistryPageFieldsEnum;
};

export type SanityMinistryPageEdge = {
  __typename?: 'SanityMinistryPageEdge';
  next?: Maybe<SanityMinistryPage>;
  node: SanityMinistryPage;
  previous?: Maybe<SanityMinistryPage>;
};

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
  subLogo___asset___title = 'subLogo___asset___title',
  subLogo___asset___description = 'subLogo___asset___description',
  subLogo___asset___altText = 'subLogo___asset___altText',
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
  subLogo___asset___metadata____rawLocation = 'subLogo___asset___metadata____rawLocation',
  subLogo___asset___metadata____rawDimensions = 'subLogo___asset___metadata____rawDimensions',
  subLogo___asset___metadata____rawPalette = 'subLogo___asset___metadata____rawPalette',
  subLogo___asset___source____key = 'subLogo___asset___source____key',
  subLogo___asset___source____type = 'subLogo___asset___source____type',
  subLogo___asset___source___name = 'subLogo___asset___source___name',
  subLogo___asset___source___id = 'subLogo___asset___source___id',
  subLogo___asset___source___url = 'subLogo___asset___source___url',
  subLogo___asset____rawMetadata = 'subLogo___asset____rawMetadata',
  subLogo___asset____rawSource = 'subLogo___asset____rawSource',
  subLogo___asset___gatsbyImageData = 'subLogo___asset___gatsbyImageData',
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
  subLogo____rawAsset = 'subLogo____rawAsset',
  subLogo____rawHotspot = 'subLogo____rawHotspot',
  subLogo____rawCrop = 'subLogo____rawCrop',
  subLogoWidth = 'subLogoWidth',
  sections = 'sections',
  sections____key = 'sections____key',
  sections____type = 'sections____type',
  sections___name = 'sections___name',
  sections___hidden = 'sections___hidden',
  sections___urlSuffix____key = 'sections___urlSuffix____key',
  sections___urlSuffix____type = 'sections___urlSuffix____type',
  sections___urlSuffix___current = 'sections___urlSuffix___current',
  sections___content = 'sections___content',
  sections___content____key = 'sections___content____key',
  sections___content____type = 'sections___content____type',
  sections___content___children = 'sections___content___children',
  sections___content___children____key = 'sections___content___children____key',
  sections___content___children____type = 'sections___content___children____type',
  sections___content___children___marks = 'sections___content___children___marks',
  sections___content___children___text = 'sections___content___children___text',
  sections___content___style = 'sections___content___style',
  sections___content___list = 'sections___content___list',
  sections___content____rawChildren = 'sections___content____rawChildren',
  sections____rawUrlSuffix = 'sections____rawUrlSuffix',
  sections____rawContent = 'sections____rawContent',
  content = 'content',
  content____key = 'content____key',
  content____type = 'content____type',
  content___children = 'content___children',
  content___children____key = 'content___children____key',
  content___children____type = 'content___children____type',
  content___children___marks = 'content___children___marks',
  content___children___text = 'content___children___text',
  content___style = 'content___style',
  content___list = 'content___list',
  content____rawChildren = 'content____rawChildren',
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
  _id?: Maybe<StringQueryOperatorInput>;
  _type?: Maybe<StringQueryOperatorInput>;
  _createdAt?: Maybe<DateQueryOperatorInput>;
  _updatedAt?: Maybe<DateQueryOperatorInput>;
  _rev?: Maybe<StringQueryOperatorInput>;
  _key?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<SanitySlugFilterInput>;
  subLogo?: Maybe<SanityImageFilterInput>;
  subLogoWidth?: Maybe<FloatQueryOperatorInput>;
  sections?: Maybe<SanityPageSectionFilterListInput>;
  content?: Maybe<SanityBlockFilterListInput>;
  _rawUrl?: Maybe<JsonQueryOperatorInput>;
  _rawSubLogo?: Maybe<JsonQueryOperatorInput>;
  _rawContent?: Maybe<JsonQueryOperatorInput>;
  _rawSections?: Maybe<JsonQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type SanityMinistryPageFilterListInput = {
  elemMatch?: Maybe<SanityMinistryPageFilterInput>;
};

export type SanityMinistryPageGroupConnection = {
  __typename?: 'SanityMinistryPageGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<SanityMinistryPageEdge>;
  nodes: Array<SanityMinistryPage>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SanityMinistryPageOrPage = SanityMinistryPage | SanityPage;

export type SanityMinistryPageSortInput = {
  fields?: Maybe<Array<Maybe<SanityMinistryPageFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SanityNavigation = SanityDocument & Node & {
  __typename?: 'SanityNavigation';
  _id?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  _createdAt?: Maybe<Scalars['Date']>;
  _updatedAt?: Maybe<Scalars['Date']>;
  _rev?: Maybe<Scalars['String']>;
  _key?: Maybe<Scalars['String']>;
  items?: Maybe<Array<Maybe<SanityNestedMenuOrPageLinkOrPlainLink>>>;
  _rawItems?: Maybe<Scalars['JSON']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type SanityNavigation_CreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type SanityNavigation_UpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type SanityNavigation_RawItemsArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};

export type SanityNavigationConnection = {
  __typename?: 'SanityNavigationConnection';
  totalCount: Scalars['Int'];
  edges: Array<SanityNavigationEdge>;
  nodes: Array<SanityNavigation>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SanityNavigationGroupConnection>;
};


export type SanityNavigationConnectionDistinctArgs = {
  field: SanityNavigationFieldsEnum;
};


export type SanityNavigationConnectionMaxArgs = {
  field: SanityNavigationFieldsEnum;
};


export type SanityNavigationConnectionMinArgs = {
  field: SanityNavigationFieldsEnum;
};


export type SanityNavigationConnectionSumArgs = {
  field: SanityNavigationFieldsEnum;
};


export type SanityNavigationConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SanityNavigationFieldsEnum;
};

export type SanityNavigationEdge = {
  __typename?: 'SanityNavigationEdge';
  next?: Maybe<SanityNavigation>;
  node: SanityNavigation;
  previous?: Maybe<SanityNavigation>;
};

export enum SanityNavigationFieldsEnum {
  _id = '_id',
  _type = '_type',
  _createdAt = '_createdAt',
  _updatedAt = '_updatedAt',
  _rev = '_rev',
  _key = '_key',
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
  _id?: Maybe<StringQueryOperatorInput>;
  _type?: Maybe<StringQueryOperatorInput>;
  _createdAt?: Maybe<DateQueryOperatorInput>;
  _updatedAt?: Maybe<DateQueryOperatorInput>;
  _rev?: Maybe<StringQueryOperatorInput>;
  _key?: Maybe<StringQueryOperatorInput>;
  _rawItems?: Maybe<JsonQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type SanityNavigationGroupConnection = {
  __typename?: 'SanityNavigationGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<SanityNavigationEdge>;
  nodes: Array<SanityNavigation>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SanityNavigationSortInput = {
  fields?: Maybe<Array<Maybe<SanityNavigationFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SanityNestedMenu = {
  __typename?: 'SanityNestedMenu';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
  items?: Maybe<Array<Maybe<SanityPageLinkOrPlainLink>>>;
  _rawItems?: Maybe<Scalars['JSON']>;
};


export type SanityNestedMenu_RawItemsArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};

export type SanityNestedMenuOrPageLinkOrPlainLink = SanityNestedMenu | SanityPageLink | SanityPlainLink;

export type SanityNewsletter = SanityDocument & Node & {
  __typename?: 'SanityNewsletter';
  _id?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  _createdAt?: Maybe<Scalars['Date']>;
  _updatedAt?: Maybe<Scalars['Date']>;
  _rev?: Maybe<Scalars['String']>;
  _key?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['Date']>;
  link?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type SanityNewsletter_CreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type SanityNewsletter_UpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type SanityNewsletterDateArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type SanityNewsletterConnection = {
  __typename?: 'SanityNewsletterConnection';
  totalCount: Scalars['Int'];
  edges: Array<SanityNewsletterEdge>;
  nodes: Array<SanityNewsletter>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SanityNewsletterGroupConnection>;
};


export type SanityNewsletterConnectionDistinctArgs = {
  field: SanityNewsletterFieldsEnum;
};


export type SanityNewsletterConnectionMaxArgs = {
  field: SanityNewsletterFieldsEnum;
};


export type SanityNewsletterConnectionMinArgs = {
  field: SanityNewsletterFieldsEnum;
};


export type SanityNewsletterConnectionSumArgs = {
  field: SanityNewsletterFieldsEnum;
};


export type SanityNewsletterConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SanityNewsletterFieldsEnum;
};

export type SanityNewsletterEdge = {
  __typename?: 'SanityNewsletterEdge';
  next?: Maybe<SanityNewsletter>;
  node: SanityNewsletter;
  previous?: Maybe<SanityNewsletter>;
};

export enum SanityNewsletterFieldsEnum {
  _id = '_id',
  _type = '_type',
  _createdAt = '_createdAt',
  _updatedAt = '_updatedAt',
  _rev = '_rev',
  _key = '_key',
  date = 'date',
  link = 'link',
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

export type SanityNewsletterFilterInput = {
  _id?: Maybe<StringQueryOperatorInput>;
  _type?: Maybe<StringQueryOperatorInput>;
  _createdAt?: Maybe<DateQueryOperatorInput>;
  _updatedAt?: Maybe<DateQueryOperatorInput>;
  _rev?: Maybe<StringQueryOperatorInput>;
  _key?: Maybe<StringQueryOperatorInput>;
  date?: Maybe<DateQueryOperatorInput>;
  link?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type SanityNewsletterGroupConnection = {
  __typename?: 'SanityNewsletterGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<SanityNewsletterEdge>;
  nodes: Array<SanityNewsletter>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SanityNewsletterSortInput = {
  fields?: Maybe<Array<Maybe<SanityNewsletterFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SanityPage = SanityDocument & Node & {
  __typename?: 'SanityPage';
  _id?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  _createdAt?: Maybe<Scalars['Date']>;
  _updatedAt?: Maybe<Scalars['Date']>;
  _rev?: Maybe<Scalars['String']>;
  _key?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<SanitySlug>;
  content?: Maybe<Array<Maybe<SanityBlock>>>;
  _rawUrl?: Maybe<Scalars['JSON']>;
  _rawContent?: Maybe<Scalars['JSON']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type SanityPage_CreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type SanityPage_UpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type SanityPage_RawUrlArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};


export type SanityPage_RawContentArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};

export type SanityPageConnection = {
  __typename?: 'SanityPageConnection';
  totalCount: Scalars['Int'];
  edges: Array<SanityPageEdge>;
  nodes: Array<SanityPage>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SanityPageGroupConnection>;
};


export type SanityPageConnectionDistinctArgs = {
  field: SanityPageFieldsEnum;
};


export type SanityPageConnectionMaxArgs = {
  field: SanityPageFieldsEnum;
};


export type SanityPageConnectionMinArgs = {
  field: SanityPageFieldsEnum;
};


export type SanityPageConnectionSumArgs = {
  field: SanityPageFieldsEnum;
};


export type SanityPageConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SanityPageFieldsEnum;
};

export type SanityPageEdge = {
  __typename?: 'SanityPageEdge';
  next?: Maybe<SanityPage>;
  node: SanityPage;
  previous?: Maybe<SanityPage>;
};

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
  content = 'content',
  content____key = 'content____key',
  content____type = 'content____type',
  content___children = 'content___children',
  content___children____key = 'content___children____key',
  content___children____type = 'content___children____type',
  content___children___marks = 'content___children___marks',
  content___children___text = 'content___children___text',
  content___style = 'content___style',
  content___list = 'content___list',
  content____rawChildren = 'content____rawChildren',
  _rawUrl = '_rawUrl',
  _rawContent = '_rawContent',
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
  _id?: Maybe<StringQueryOperatorInput>;
  _type?: Maybe<StringQueryOperatorInput>;
  _createdAt?: Maybe<DateQueryOperatorInput>;
  _updatedAt?: Maybe<DateQueryOperatorInput>;
  _rev?: Maybe<StringQueryOperatorInput>;
  _key?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<SanitySlugFilterInput>;
  content?: Maybe<SanityBlockFilterListInput>;
  _rawUrl?: Maybe<JsonQueryOperatorInput>;
  _rawContent?: Maybe<JsonQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type SanityPageGroupConnection = {
  __typename?: 'SanityPageGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<SanityPageEdge>;
  nodes: Array<SanityPage>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SanityPageLink = {
  __typename?: 'SanityPageLink';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
  page?: Maybe<SanityMinistryPageOrPage>;
  _rawPage?: Maybe<Scalars['JSON']>;
};


export type SanityPageLink_RawPageArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};

export type SanityPageLinkOrPlainLink = SanityPageLink | SanityPlainLink;

export type SanityPageSection = {
  __typename?: 'SanityPageSection';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  hidden?: Maybe<Scalars['Boolean']>;
  urlSuffix?: Maybe<SanitySlug>;
  content?: Maybe<Array<Maybe<SanityBlock>>>;
  _rawUrlSuffix?: Maybe<Scalars['JSON']>;
  _rawContent?: Maybe<Scalars['JSON']>;
};


export type SanityPageSection_RawUrlSuffixArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};


export type SanityPageSection_RawContentArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};

export type SanityPageSectionFilterInput = {
  _key?: Maybe<StringQueryOperatorInput>;
  _type?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  hidden?: Maybe<BooleanQueryOperatorInput>;
  urlSuffix?: Maybe<SanitySlugFilterInput>;
  content?: Maybe<SanityBlockFilterListInput>;
  _rawUrlSuffix?: Maybe<JsonQueryOperatorInput>;
  _rawContent?: Maybe<JsonQueryOperatorInput>;
};

export type SanityPageSectionFilterListInput = {
  elemMatch?: Maybe<SanityPageSectionFilterInput>;
};

export type SanityPageSortInput = {
  fields?: Maybe<Array<Maybe<SanityPageFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SanityPicture = {
  __typename?: 'SanityPicture';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  image?: Maybe<SanityImage>;
  constrainAspectRatio?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['String']>;
  align?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['String']>;
  _rawImage?: Maybe<Scalars['JSON']>;
};


export type SanityPicture_RawImageArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};

export type SanityPlainLink = {
  __typename?: 'SanityPlainLink';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
  link?: Maybe<Scalars['String']>;
  sameWindow?: Maybe<Scalars['Boolean']>;
};

export type SanityPlainOrPageLink = SanityPlainLink | SanityPageLink;

export type SanityPost = SanityDocument & Node & {
  __typename?: 'SanityPost';
  _id?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  _createdAt?: Maybe<Scalars['Date']>;
  _updatedAt?: Maybe<Scalars['Date']>;
  _rev?: Maybe<Scalars['String']>;
  _key?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  featured?: Maybe<Scalars['Boolean']>;
  hidden?: Maybe<Scalars['Boolean']>;
  slug?: Maybe<SanitySlug>;
  date?: Maybe<Scalars['Date']>;
  thumbnail?: Maybe<SanityImage>;
  thumbnailPoster?: Maybe<SanityPoster>;
  thumbnailPosterPreview?: Maybe<Scalars['Float']>;
  ministries?: Maybe<Array<Maybe<SanityMinistryPage>>>;
  summary?: Maybe<Array<Maybe<SanityBlock>>>;
  body?: Maybe<Array<Maybe<SanityBlock>>>;
  _rawSlug?: Maybe<Scalars['JSON']>;
  _rawThumbnail?: Maybe<Scalars['JSON']>;
  _rawThumbnailPoster?: Maybe<Scalars['JSON']>;
  _rawSummary?: Maybe<Scalars['JSON']>;
  _rawBody?: Maybe<Scalars['JSON']>;
  _rawMinistries?: Maybe<Scalars['JSON']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type SanityPost_CreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type SanityPost_UpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type SanityPostDateArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type SanityPost_RawSlugArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};


export type SanityPost_RawThumbnailArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};


export type SanityPost_RawThumbnailPosterArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};


export type SanityPost_RawSummaryArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};


export type SanityPost_RawBodyArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};


export type SanityPost_RawMinistriesArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};

export type SanityPostConnection = {
  __typename?: 'SanityPostConnection';
  totalCount: Scalars['Int'];
  edges: Array<SanityPostEdge>;
  nodes: Array<SanityPost>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SanityPostGroupConnection>;
};


export type SanityPostConnectionDistinctArgs = {
  field: SanityPostFieldsEnum;
};


export type SanityPostConnectionMaxArgs = {
  field: SanityPostFieldsEnum;
};


export type SanityPostConnectionMinArgs = {
  field: SanityPostFieldsEnum;
};


export type SanityPostConnectionSumArgs = {
  field: SanityPostFieldsEnum;
};


export type SanityPostConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SanityPostFieldsEnum;
};

export type SanityPostEdge = {
  __typename?: 'SanityPostEdge';
  next?: Maybe<SanityPost>;
  node: SanityPost;
  previous?: Maybe<SanityPost>;
};

export enum SanityPostFieldsEnum {
  _id = '_id',
  _type = '_type',
  _createdAt = '_createdAt',
  _updatedAt = '_updatedAt',
  _rev = '_rev',
  _key = '_key',
  title = 'title',
  featured = 'featured',
  hidden = 'hidden',
  slug____key = 'slug____key',
  slug____type = 'slug____type',
  slug___current = 'slug___current',
  date = 'date',
  thumbnail____key = 'thumbnail____key',
  thumbnail____type = 'thumbnail____type',
  thumbnail___asset____id = 'thumbnail___asset____id',
  thumbnail___asset____type = 'thumbnail___asset____type',
  thumbnail___asset____createdAt = 'thumbnail___asset____createdAt',
  thumbnail___asset____updatedAt = 'thumbnail___asset____updatedAt',
  thumbnail___asset____rev = 'thumbnail___asset____rev',
  thumbnail___asset____key = 'thumbnail___asset____key',
  thumbnail___asset___originalFilename = 'thumbnail___asset___originalFilename',
  thumbnail___asset___label = 'thumbnail___asset___label',
  thumbnail___asset___title = 'thumbnail___asset___title',
  thumbnail___asset___description = 'thumbnail___asset___description',
  thumbnail___asset___altText = 'thumbnail___asset___altText',
  thumbnail___asset___sha1hash = 'thumbnail___asset___sha1hash',
  thumbnail___asset___extension = 'thumbnail___asset___extension',
  thumbnail___asset___mimeType = 'thumbnail___asset___mimeType',
  thumbnail___asset___size = 'thumbnail___asset___size',
  thumbnail___asset___assetId = 'thumbnail___asset___assetId',
  thumbnail___asset___path = 'thumbnail___asset___path',
  thumbnail___asset___url = 'thumbnail___asset___url',
  thumbnail___asset___metadata____key = 'thumbnail___asset___metadata____key',
  thumbnail___asset___metadata____type = 'thumbnail___asset___metadata____type',
  thumbnail___asset___metadata___lqip = 'thumbnail___asset___metadata___lqip',
  thumbnail___asset___metadata___hasAlpha = 'thumbnail___asset___metadata___hasAlpha',
  thumbnail___asset___metadata___isOpaque = 'thumbnail___asset___metadata___isOpaque',
  thumbnail___asset___metadata____rawLocation = 'thumbnail___asset___metadata____rawLocation',
  thumbnail___asset___metadata____rawDimensions = 'thumbnail___asset___metadata____rawDimensions',
  thumbnail___asset___metadata____rawPalette = 'thumbnail___asset___metadata____rawPalette',
  thumbnail___asset___source____key = 'thumbnail___asset___source____key',
  thumbnail___asset___source____type = 'thumbnail___asset___source____type',
  thumbnail___asset___source___name = 'thumbnail___asset___source___name',
  thumbnail___asset___source___id = 'thumbnail___asset___source___id',
  thumbnail___asset___source___url = 'thumbnail___asset___source___url',
  thumbnail___asset____rawMetadata = 'thumbnail___asset____rawMetadata',
  thumbnail___asset____rawSource = 'thumbnail___asset____rawSource',
  thumbnail___asset___gatsbyImageData = 'thumbnail___asset___gatsbyImageData',
  thumbnail___asset___id = 'thumbnail___asset___id',
  thumbnail___asset___parent___id = 'thumbnail___asset___parent___id',
  thumbnail___asset___parent___children = 'thumbnail___asset___parent___children',
  thumbnail___asset___children = 'thumbnail___asset___children',
  thumbnail___asset___children___id = 'thumbnail___asset___children___id',
  thumbnail___asset___children___children = 'thumbnail___asset___children___children',
  thumbnail___asset___internal___content = 'thumbnail___asset___internal___content',
  thumbnail___asset___internal___contentDigest = 'thumbnail___asset___internal___contentDigest',
  thumbnail___asset___internal___description = 'thumbnail___asset___internal___description',
  thumbnail___asset___internal___fieldOwners = 'thumbnail___asset___internal___fieldOwners',
  thumbnail___asset___internal___ignoreType = 'thumbnail___asset___internal___ignoreType',
  thumbnail___asset___internal___mediaType = 'thumbnail___asset___internal___mediaType',
  thumbnail___asset___internal___owner = 'thumbnail___asset___internal___owner',
  thumbnail___asset___internal___type = 'thumbnail___asset___internal___type',
  thumbnail___hotspot____key = 'thumbnail___hotspot____key',
  thumbnail___hotspot____type = 'thumbnail___hotspot____type',
  thumbnail___hotspot___x = 'thumbnail___hotspot___x',
  thumbnail___hotspot___y = 'thumbnail___hotspot___y',
  thumbnail___hotspot___height = 'thumbnail___hotspot___height',
  thumbnail___hotspot___width = 'thumbnail___hotspot___width',
  thumbnail___crop____key = 'thumbnail___crop____key',
  thumbnail___crop____type = 'thumbnail___crop____type',
  thumbnail___crop___top = 'thumbnail___crop___top',
  thumbnail___crop___bottom = 'thumbnail___crop___bottom',
  thumbnail___crop___left = 'thumbnail___crop___left',
  thumbnail___crop___right = 'thumbnail___crop___right',
  thumbnail____rawAsset = 'thumbnail____rawAsset',
  thumbnail____rawHotspot = 'thumbnail____rawHotspot',
  thumbnail____rawCrop = 'thumbnail____rawCrop',
  thumbnailPoster____id = 'thumbnailPoster____id',
  thumbnailPoster____type = 'thumbnailPoster____type',
  thumbnailPoster____createdAt = 'thumbnailPoster____createdAt',
  thumbnailPoster____updatedAt = 'thumbnailPoster____updatedAt',
  thumbnailPoster____rev = 'thumbnailPoster____rev',
  thumbnailPoster____key = 'thumbnailPoster____key',
  thumbnailPoster___previewDisplay = 'thumbnailPoster___previewDisplay',
  thumbnailPoster___name = 'thumbnailPoster___name',
  thumbnailPoster___lines = 'thumbnailPoster___lines',
  thumbnailPoster___lines____key = 'thumbnailPoster___lines____key',
  thumbnailPoster___lines____type = 'thumbnailPoster___lines____type',
  thumbnailPoster___lines___text = 'thumbnailPoster___lines___text',
  thumbnailPoster___lines___fontSize = 'thumbnailPoster___lines___fontSize',
  thumbnailPoster___lines___position = 'thumbnailPoster___lines___position',
  thumbnailPoster___background____key = 'thumbnailPoster___background____key',
  thumbnailPoster___background____type = 'thumbnailPoster___background____type',
  thumbnailPoster___background___asset____id = 'thumbnailPoster___background___asset____id',
  thumbnailPoster___background___asset____type = 'thumbnailPoster___background___asset____type',
  thumbnailPoster___background___asset____createdAt = 'thumbnailPoster___background___asset____createdAt',
  thumbnailPoster___background___asset____updatedAt = 'thumbnailPoster___background___asset____updatedAt',
  thumbnailPoster___background___asset____rev = 'thumbnailPoster___background___asset____rev',
  thumbnailPoster___background___asset____key = 'thumbnailPoster___background___asset____key',
  thumbnailPoster___background___asset___originalFilename = 'thumbnailPoster___background___asset___originalFilename',
  thumbnailPoster___background___asset___label = 'thumbnailPoster___background___asset___label',
  thumbnailPoster___background___asset___title = 'thumbnailPoster___background___asset___title',
  thumbnailPoster___background___asset___description = 'thumbnailPoster___background___asset___description',
  thumbnailPoster___background___asset___altText = 'thumbnailPoster___background___asset___altText',
  thumbnailPoster___background___asset___sha1hash = 'thumbnailPoster___background___asset___sha1hash',
  thumbnailPoster___background___asset___extension = 'thumbnailPoster___background___asset___extension',
  thumbnailPoster___background___asset___mimeType = 'thumbnailPoster___background___asset___mimeType',
  thumbnailPoster___background___asset___size = 'thumbnailPoster___background___asset___size',
  thumbnailPoster___background___asset___assetId = 'thumbnailPoster___background___asset___assetId',
  thumbnailPoster___background___asset___path = 'thumbnailPoster___background___asset___path',
  thumbnailPoster___background___asset___url = 'thumbnailPoster___background___asset___url',
  thumbnailPoster___background___asset____rawMetadata = 'thumbnailPoster___background___asset____rawMetadata',
  thumbnailPoster___background___asset____rawSource = 'thumbnailPoster___background___asset____rawSource',
  thumbnailPoster___background___asset___gatsbyImageData = 'thumbnailPoster___background___asset___gatsbyImageData',
  thumbnailPoster___background___asset___id = 'thumbnailPoster___background___asset___id',
  thumbnailPoster___background___asset___children = 'thumbnailPoster___background___asset___children',
  thumbnailPoster___background___hotspot____key = 'thumbnailPoster___background___hotspot____key',
  thumbnailPoster___background___hotspot____type = 'thumbnailPoster___background___hotspot____type',
  thumbnailPoster___background___hotspot___x = 'thumbnailPoster___background___hotspot___x',
  thumbnailPoster___background___hotspot___y = 'thumbnailPoster___background___hotspot___y',
  thumbnailPoster___background___hotspot___height = 'thumbnailPoster___background___hotspot___height',
  thumbnailPoster___background___hotspot___width = 'thumbnailPoster___background___hotspot___width',
  thumbnailPoster___background___crop____key = 'thumbnailPoster___background___crop____key',
  thumbnailPoster___background___crop____type = 'thumbnailPoster___background___crop____type',
  thumbnailPoster___background___crop___top = 'thumbnailPoster___background___crop___top',
  thumbnailPoster___background___crop___bottom = 'thumbnailPoster___background___crop___bottom',
  thumbnailPoster___background___crop___left = 'thumbnailPoster___background___crop___left',
  thumbnailPoster___background___crop___right = 'thumbnailPoster___background___crop___right',
  thumbnailPoster___background____rawAsset = 'thumbnailPoster___background____rawAsset',
  thumbnailPoster___background____rawHotspot = 'thumbnailPoster___background____rawHotspot',
  thumbnailPoster___background____rawCrop = 'thumbnailPoster___background____rawCrop',
  thumbnailPoster___overlayColor = 'thumbnailPoster___overlayColor',
  thumbnailPoster___overlayOpacity = 'thumbnailPoster___overlayOpacity',
  thumbnailPoster____rawLines = 'thumbnailPoster____rawLines',
  thumbnailPoster____rawBackground = 'thumbnailPoster____rawBackground',
  thumbnailPoster___id = 'thumbnailPoster___id',
  thumbnailPoster___parent___id = 'thumbnailPoster___parent___id',
  thumbnailPoster___parent___parent___id = 'thumbnailPoster___parent___parent___id',
  thumbnailPoster___parent___parent___children = 'thumbnailPoster___parent___parent___children',
  thumbnailPoster___parent___children = 'thumbnailPoster___parent___children',
  thumbnailPoster___parent___children___id = 'thumbnailPoster___parent___children___id',
  thumbnailPoster___parent___children___children = 'thumbnailPoster___parent___children___children',
  thumbnailPoster___parent___internal___content = 'thumbnailPoster___parent___internal___content',
  thumbnailPoster___parent___internal___contentDigest = 'thumbnailPoster___parent___internal___contentDigest',
  thumbnailPoster___parent___internal___description = 'thumbnailPoster___parent___internal___description',
  thumbnailPoster___parent___internal___fieldOwners = 'thumbnailPoster___parent___internal___fieldOwners',
  thumbnailPoster___parent___internal___ignoreType = 'thumbnailPoster___parent___internal___ignoreType',
  thumbnailPoster___parent___internal___mediaType = 'thumbnailPoster___parent___internal___mediaType',
  thumbnailPoster___parent___internal___owner = 'thumbnailPoster___parent___internal___owner',
  thumbnailPoster___parent___internal___type = 'thumbnailPoster___parent___internal___type',
  thumbnailPoster___children = 'thumbnailPoster___children',
  thumbnailPoster___children___id = 'thumbnailPoster___children___id',
  thumbnailPoster___children___parent___id = 'thumbnailPoster___children___parent___id',
  thumbnailPoster___children___parent___children = 'thumbnailPoster___children___parent___children',
  thumbnailPoster___children___children = 'thumbnailPoster___children___children',
  thumbnailPoster___children___children___id = 'thumbnailPoster___children___children___id',
  thumbnailPoster___children___children___children = 'thumbnailPoster___children___children___children',
  thumbnailPoster___children___internal___content = 'thumbnailPoster___children___internal___content',
  thumbnailPoster___children___internal___contentDigest = 'thumbnailPoster___children___internal___contentDigest',
  thumbnailPoster___children___internal___description = 'thumbnailPoster___children___internal___description',
  thumbnailPoster___children___internal___fieldOwners = 'thumbnailPoster___children___internal___fieldOwners',
  thumbnailPoster___children___internal___ignoreType = 'thumbnailPoster___children___internal___ignoreType',
  thumbnailPoster___children___internal___mediaType = 'thumbnailPoster___children___internal___mediaType',
  thumbnailPoster___children___internal___owner = 'thumbnailPoster___children___internal___owner',
  thumbnailPoster___children___internal___type = 'thumbnailPoster___children___internal___type',
  thumbnailPoster___internal___content = 'thumbnailPoster___internal___content',
  thumbnailPoster___internal___contentDigest = 'thumbnailPoster___internal___contentDigest',
  thumbnailPoster___internal___description = 'thumbnailPoster___internal___description',
  thumbnailPoster___internal___fieldOwners = 'thumbnailPoster___internal___fieldOwners',
  thumbnailPoster___internal___ignoreType = 'thumbnailPoster___internal___ignoreType',
  thumbnailPoster___internal___mediaType = 'thumbnailPoster___internal___mediaType',
  thumbnailPoster___internal___owner = 'thumbnailPoster___internal___owner',
  thumbnailPoster___internal___type = 'thumbnailPoster___internal___type',
  thumbnailPosterPreview = 'thumbnailPosterPreview',
  ministries = 'ministries',
  ministries____id = 'ministries____id',
  ministries____type = 'ministries____type',
  ministries____createdAt = 'ministries____createdAt',
  ministries____updatedAt = 'ministries____updatedAt',
  ministries____rev = 'ministries____rev',
  ministries____key = 'ministries____key',
  ministries___name = 'ministries___name',
  ministries___url____key = 'ministries___url____key',
  ministries___url____type = 'ministries___url____type',
  ministries___url___current = 'ministries___url___current',
  ministries___subLogo____key = 'ministries___subLogo____key',
  ministries___subLogo____type = 'ministries___subLogo____type',
  ministries___subLogo___asset____id = 'ministries___subLogo___asset____id',
  ministries___subLogo___asset____type = 'ministries___subLogo___asset____type',
  ministries___subLogo___asset____createdAt = 'ministries___subLogo___asset____createdAt',
  ministries___subLogo___asset____updatedAt = 'ministries___subLogo___asset____updatedAt',
  ministries___subLogo___asset____rev = 'ministries___subLogo___asset____rev',
  ministries___subLogo___asset____key = 'ministries___subLogo___asset____key',
  ministries___subLogo___asset___originalFilename = 'ministries___subLogo___asset___originalFilename',
  ministries___subLogo___asset___label = 'ministries___subLogo___asset___label',
  ministries___subLogo___asset___title = 'ministries___subLogo___asset___title',
  ministries___subLogo___asset___description = 'ministries___subLogo___asset___description',
  ministries___subLogo___asset___altText = 'ministries___subLogo___asset___altText',
  ministries___subLogo___asset___sha1hash = 'ministries___subLogo___asset___sha1hash',
  ministries___subLogo___asset___extension = 'ministries___subLogo___asset___extension',
  ministries___subLogo___asset___mimeType = 'ministries___subLogo___asset___mimeType',
  ministries___subLogo___asset___size = 'ministries___subLogo___asset___size',
  ministries___subLogo___asset___assetId = 'ministries___subLogo___asset___assetId',
  ministries___subLogo___asset___path = 'ministries___subLogo___asset___path',
  ministries___subLogo___asset___url = 'ministries___subLogo___asset___url',
  ministries___subLogo___asset____rawMetadata = 'ministries___subLogo___asset____rawMetadata',
  ministries___subLogo___asset____rawSource = 'ministries___subLogo___asset____rawSource',
  ministries___subLogo___asset___gatsbyImageData = 'ministries___subLogo___asset___gatsbyImageData',
  ministries___subLogo___asset___id = 'ministries___subLogo___asset___id',
  ministries___subLogo___asset___children = 'ministries___subLogo___asset___children',
  ministries___subLogo___hotspot____key = 'ministries___subLogo___hotspot____key',
  ministries___subLogo___hotspot____type = 'ministries___subLogo___hotspot____type',
  ministries___subLogo___hotspot___x = 'ministries___subLogo___hotspot___x',
  ministries___subLogo___hotspot___y = 'ministries___subLogo___hotspot___y',
  ministries___subLogo___hotspot___height = 'ministries___subLogo___hotspot___height',
  ministries___subLogo___hotspot___width = 'ministries___subLogo___hotspot___width',
  ministries___subLogo___crop____key = 'ministries___subLogo___crop____key',
  ministries___subLogo___crop____type = 'ministries___subLogo___crop____type',
  ministries___subLogo___crop___top = 'ministries___subLogo___crop___top',
  ministries___subLogo___crop___bottom = 'ministries___subLogo___crop___bottom',
  ministries___subLogo___crop___left = 'ministries___subLogo___crop___left',
  ministries___subLogo___crop___right = 'ministries___subLogo___crop___right',
  ministries___subLogo____rawAsset = 'ministries___subLogo____rawAsset',
  ministries___subLogo____rawHotspot = 'ministries___subLogo____rawHotspot',
  ministries___subLogo____rawCrop = 'ministries___subLogo____rawCrop',
  ministries___subLogoWidth = 'ministries___subLogoWidth',
  ministries___sections = 'ministries___sections',
  ministries___sections____key = 'ministries___sections____key',
  ministries___sections____type = 'ministries___sections____type',
  ministries___sections___name = 'ministries___sections___name',
  ministries___sections___hidden = 'ministries___sections___hidden',
  ministries___sections___urlSuffix____key = 'ministries___sections___urlSuffix____key',
  ministries___sections___urlSuffix____type = 'ministries___sections___urlSuffix____type',
  ministries___sections___urlSuffix___current = 'ministries___sections___urlSuffix___current',
  ministries___sections___content = 'ministries___sections___content',
  ministries___sections___content____key = 'ministries___sections___content____key',
  ministries___sections___content____type = 'ministries___sections___content____type',
  ministries___sections___content___children = 'ministries___sections___content___children',
  ministries___sections___content___style = 'ministries___sections___content___style',
  ministries___sections___content___list = 'ministries___sections___content___list',
  ministries___sections___content____rawChildren = 'ministries___sections___content____rawChildren',
  ministries___sections____rawUrlSuffix = 'ministries___sections____rawUrlSuffix',
  ministries___sections____rawContent = 'ministries___sections____rawContent',
  ministries___content = 'ministries___content',
  ministries___content____key = 'ministries___content____key',
  ministries___content____type = 'ministries___content____type',
  ministries___content___children = 'ministries___content___children',
  ministries___content___children____key = 'ministries___content___children____key',
  ministries___content___children____type = 'ministries___content___children____type',
  ministries___content___children___marks = 'ministries___content___children___marks',
  ministries___content___children___text = 'ministries___content___children___text',
  ministries___content___style = 'ministries___content___style',
  ministries___content___list = 'ministries___content___list',
  ministries___content____rawChildren = 'ministries___content____rawChildren',
  ministries____rawUrl = 'ministries____rawUrl',
  ministries____rawSubLogo = 'ministries____rawSubLogo',
  ministries____rawContent = 'ministries____rawContent',
  ministries____rawSections = 'ministries____rawSections',
  ministries___id = 'ministries___id',
  ministries___parent___id = 'ministries___parent___id',
  ministries___parent___parent___id = 'ministries___parent___parent___id',
  ministries___parent___parent___children = 'ministries___parent___parent___children',
  ministries___parent___children = 'ministries___parent___children',
  ministries___parent___children___id = 'ministries___parent___children___id',
  ministries___parent___children___children = 'ministries___parent___children___children',
  ministries___parent___internal___content = 'ministries___parent___internal___content',
  ministries___parent___internal___contentDigest = 'ministries___parent___internal___contentDigest',
  ministries___parent___internal___description = 'ministries___parent___internal___description',
  ministries___parent___internal___fieldOwners = 'ministries___parent___internal___fieldOwners',
  ministries___parent___internal___ignoreType = 'ministries___parent___internal___ignoreType',
  ministries___parent___internal___mediaType = 'ministries___parent___internal___mediaType',
  ministries___parent___internal___owner = 'ministries___parent___internal___owner',
  ministries___parent___internal___type = 'ministries___parent___internal___type',
  ministries___children = 'ministries___children',
  ministries___children___id = 'ministries___children___id',
  ministries___children___parent___id = 'ministries___children___parent___id',
  ministries___children___parent___children = 'ministries___children___parent___children',
  ministries___children___children = 'ministries___children___children',
  ministries___children___children___id = 'ministries___children___children___id',
  ministries___children___children___children = 'ministries___children___children___children',
  ministries___children___internal___content = 'ministries___children___internal___content',
  ministries___children___internal___contentDigest = 'ministries___children___internal___contentDigest',
  ministries___children___internal___description = 'ministries___children___internal___description',
  ministries___children___internal___fieldOwners = 'ministries___children___internal___fieldOwners',
  ministries___children___internal___ignoreType = 'ministries___children___internal___ignoreType',
  ministries___children___internal___mediaType = 'ministries___children___internal___mediaType',
  ministries___children___internal___owner = 'ministries___children___internal___owner',
  ministries___children___internal___type = 'ministries___children___internal___type',
  ministries___internal___content = 'ministries___internal___content',
  ministries___internal___contentDigest = 'ministries___internal___contentDigest',
  ministries___internal___description = 'ministries___internal___description',
  ministries___internal___fieldOwners = 'ministries___internal___fieldOwners',
  ministries___internal___ignoreType = 'ministries___internal___ignoreType',
  ministries___internal___mediaType = 'ministries___internal___mediaType',
  ministries___internal___owner = 'ministries___internal___owner',
  ministries___internal___type = 'ministries___internal___type',
  summary = 'summary',
  summary____key = 'summary____key',
  summary____type = 'summary____type',
  summary___children = 'summary___children',
  summary___children____key = 'summary___children____key',
  summary___children____type = 'summary___children____type',
  summary___children___marks = 'summary___children___marks',
  summary___children___text = 'summary___children___text',
  summary___style = 'summary___style',
  summary___list = 'summary___list',
  summary____rawChildren = 'summary____rawChildren',
  body = 'body',
  body____key = 'body____key',
  body____type = 'body____type',
  body___children = 'body___children',
  body___children____key = 'body___children____key',
  body___children____type = 'body___children____type',
  body___children___marks = 'body___children___marks',
  body___children___text = 'body___children___text',
  body___style = 'body___style',
  body___list = 'body___list',
  body____rawChildren = 'body____rawChildren',
  _rawSlug = '_rawSlug',
  _rawThumbnail = '_rawThumbnail',
  _rawThumbnailPoster = '_rawThumbnailPoster',
  _rawSummary = '_rawSummary',
  _rawBody = '_rawBody',
  _rawMinistries = '_rawMinistries',
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

export type SanityPostFilterInput = {
  _id?: Maybe<StringQueryOperatorInput>;
  _type?: Maybe<StringQueryOperatorInput>;
  _createdAt?: Maybe<DateQueryOperatorInput>;
  _updatedAt?: Maybe<DateQueryOperatorInput>;
  _rev?: Maybe<StringQueryOperatorInput>;
  _key?: Maybe<StringQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
  featured?: Maybe<BooleanQueryOperatorInput>;
  hidden?: Maybe<BooleanQueryOperatorInput>;
  slug?: Maybe<SanitySlugFilterInput>;
  date?: Maybe<DateQueryOperatorInput>;
  thumbnail?: Maybe<SanityImageFilterInput>;
  thumbnailPoster?: Maybe<SanityPosterFilterInput>;
  thumbnailPosterPreview?: Maybe<FloatQueryOperatorInput>;
  ministries?: Maybe<SanityMinistryPageFilterListInput>;
  summary?: Maybe<SanityBlockFilterListInput>;
  body?: Maybe<SanityBlockFilterListInput>;
  _rawSlug?: Maybe<JsonQueryOperatorInput>;
  _rawThumbnail?: Maybe<JsonQueryOperatorInput>;
  _rawThumbnailPoster?: Maybe<JsonQueryOperatorInput>;
  _rawSummary?: Maybe<JsonQueryOperatorInput>;
  _rawBody?: Maybe<JsonQueryOperatorInput>;
  _rawMinistries?: Maybe<JsonQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type SanityPostGroupConnection = {
  __typename?: 'SanityPostGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<SanityPostEdge>;
  nodes: Array<SanityPost>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SanityPostSortInput = {
  fields?: Maybe<Array<Maybe<SanityPostFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SanityPoster = SanityDocument & Node & {
  __typename?: 'SanityPoster';
  _id?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  _createdAt?: Maybe<Scalars['Date']>;
  _updatedAt?: Maybe<Scalars['Date']>;
  _rev?: Maybe<Scalars['String']>;
  _key?: Maybe<Scalars['String']>;
  previewDisplay?: Maybe<Scalars['Float']>;
  name?: Maybe<Scalars['String']>;
  lines?: Maybe<Array<Maybe<SanityPosterLine>>>;
  background?: Maybe<SanityImage>;
  overlayColor?: Maybe<Scalars['String']>;
  overlayOpacity?: Maybe<Scalars['Float']>;
  _rawLines?: Maybe<Scalars['JSON']>;
  _rawBackground?: Maybe<Scalars['JSON']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type SanityPoster_CreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type SanityPoster_UpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type SanityPoster_RawLinesArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};


export type SanityPoster_RawBackgroundArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};

export type SanityPosterConnection = {
  __typename?: 'SanityPosterConnection';
  totalCount: Scalars['Int'];
  edges: Array<SanityPosterEdge>;
  nodes: Array<SanityPoster>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SanityPosterGroupConnection>;
};


export type SanityPosterConnectionDistinctArgs = {
  field: SanityPosterFieldsEnum;
};


export type SanityPosterConnectionMaxArgs = {
  field: SanityPosterFieldsEnum;
};


export type SanityPosterConnectionMinArgs = {
  field: SanityPosterFieldsEnum;
};


export type SanityPosterConnectionSumArgs = {
  field: SanityPosterFieldsEnum;
};


export type SanityPosterConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SanityPosterFieldsEnum;
};

export type SanityPosterEdge = {
  __typename?: 'SanityPosterEdge';
  next?: Maybe<SanityPoster>;
  node: SanityPoster;
  previous?: Maybe<SanityPoster>;
};

export enum SanityPosterFieldsEnum {
  _id = '_id',
  _type = '_type',
  _createdAt = '_createdAt',
  _updatedAt = '_updatedAt',
  _rev = '_rev',
  _key = '_key',
  previewDisplay = 'previewDisplay',
  name = 'name',
  lines = 'lines',
  lines____key = 'lines____key',
  lines____type = 'lines____type',
  lines___text = 'lines___text',
  lines___fontSize = 'lines___fontSize',
  lines___position = 'lines___position',
  background____key = 'background____key',
  background____type = 'background____type',
  background___asset____id = 'background___asset____id',
  background___asset____type = 'background___asset____type',
  background___asset____createdAt = 'background___asset____createdAt',
  background___asset____updatedAt = 'background___asset____updatedAt',
  background___asset____rev = 'background___asset____rev',
  background___asset____key = 'background___asset____key',
  background___asset___originalFilename = 'background___asset___originalFilename',
  background___asset___label = 'background___asset___label',
  background___asset___title = 'background___asset___title',
  background___asset___description = 'background___asset___description',
  background___asset___altText = 'background___asset___altText',
  background___asset___sha1hash = 'background___asset___sha1hash',
  background___asset___extension = 'background___asset___extension',
  background___asset___mimeType = 'background___asset___mimeType',
  background___asset___size = 'background___asset___size',
  background___asset___assetId = 'background___asset___assetId',
  background___asset___path = 'background___asset___path',
  background___asset___url = 'background___asset___url',
  background___asset___metadata____key = 'background___asset___metadata____key',
  background___asset___metadata____type = 'background___asset___metadata____type',
  background___asset___metadata___lqip = 'background___asset___metadata___lqip',
  background___asset___metadata___hasAlpha = 'background___asset___metadata___hasAlpha',
  background___asset___metadata___isOpaque = 'background___asset___metadata___isOpaque',
  background___asset___metadata____rawLocation = 'background___asset___metadata____rawLocation',
  background___asset___metadata____rawDimensions = 'background___asset___metadata____rawDimensions',
  background___asset___metadata____rawPalette = 'background___asset___metadata____rawPalette',
  background___asset___source____key = 'background___asset___source____key',
  background___asset___source____type = 'background___asset___source____type',
  background___asset___source___name = 'background___asset___source___name',
  background___asset___source___id = 'background___asset___source___id',
  background___asset___source___url = 'background___asset___source___url',
  background___asset____rawMetadata = 'background___asset____rawMetadata',
  background___asset____rawSource = 'background___asset____rawSource',
  background___asset___gatsbyImageData = 'background___asset___gatsbyImageData',
  background___asset___id = 'background___asset___id',
  background___asset___parent___id = 'background___asset___parent___id',
  background___asset___parent___children = 'background___asset___parent___children',
  background___asset___children = 'background___asset___children',
  background___asset___children___id = 'background___asset___children___id',
  background___asset___children___children = 'background___asset___children___children',
  background___asset___internal___content = 'background___asset___internal___content',
  background___asset___internal___contentDigest = 'background___asset___internal___contentDigest',
  background___asset___internal___description = 'background___asset___internal___description',
  background___asset___internal___fieldOwners = 'background___asset___internal___fieldOwners',
  background___asset___internal___ignoreType = 'background___asset___internal___ignoreType',
  background___asset___internal___mediaType = 'background___asset___internal___mediaType',
  background___asset___internal___owner = 'background___asset___internal___owner',
  background___asset___internal___type = 'background___asset___internal___type',
  background___hotspot____key = 'background___hotspot____key',
  background___hotspot____type = 'background___hotspot____type',
  background___hotspot___x = 'background___hotspot___x',
  background___hotspot___y = 'background___hotspot___y',
  background___hotspot___height = 'background___hotspot___height',
  background___hotspot___width = 'background___hotspot___width',
  background___crop____key = 'background___crop____key',
  background___crop____type = 'background___crop____type',
  background___crop___top = 'background___crop___top',
  background___crop___bottom = 'background___crop___bottom',
  background___crop___left = 'background___crop___left',
  background___crop___right = 'background___crop___right',
  background____rawAsset = 'background____rawAsset',
  background____rawHotspot = 'background____rawHotspot',
  background____rawCrop = 'background____rawCrop',
  overlayColor = 'overlayColor',
  overlayOpacity = 'overlayOpacity',
  _rawLines = '_rawLines',
  _rawBackground = '_rawBackground',
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

export type SanityPosterFilterInput = {
  _id?: Maybe<StringQueryOperatorInput>;
  _type?: Maybe<StringQueryOperatorInput>;
  _createdAt?: Maybe<DateQueryOperatorInput>;
  _updatedAt?: Maybe<DateQueryOperatorInput>;
  _rev?: Maybe<StringQueryOperatorInput>;
  _key?: Maybe<StringQueryOperatorInput>;
  previewDisplay?: Maybe<FloatQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  lines?: Maybe<SanityPosterLineFilterListInput>;
  background?: Maybe<SanityImageFilterInput>;
  overlayColor?: Maybe<StringQueryOperatorInput>;
  overlayOpacity?: Maybe<FloatQueryOperatorInput>;
  _rawLines?: Maybe<JsonQueryOperatorInput>;
  _rawBackground?: Maybe<JsonQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type SanityPosterGroupConnection = {
  __typename?: 'SanityPosterGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<SanityPosterEdge>;
  nodes: Array<SanityPoster>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SanityPosterInContent = {
  __typename?: 'SanityPosterInContent';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  poster?: Maybe<SanityPoster>;
  size?: Maybe<Scalars['String']>;
  align?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['String']>;
  _rawPoster?: Maybe<Scalars['JSON']>;
};


export type SanityPosterInContent_RawPosterArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};

export type SanityPosterLine = {
  __typename?: 'SanityPosterLine';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
  fontSize?: Maybe<Scalars['Float']>;
  position?: Maybe<Scalars['Float']>;
};

export type SanityPosterLineFilterInput = {
  _key?: Maybe<StringQueryOperatorInput>;
  _type?: Maybe<StringQueryOperatorInput>;
  text?: Maybe<StringQueryOperatorInput>;
  fontSize?: Maybe<FloatQueryOperatorInput>;
  position?: Maybe<FloatQueryOperatorInput>;
};

export type SanityPosterLineFilterListInput = {
  elemMatch?: Maybe<SanityPosterLineFilterInput>;
};

export type SanityPosterSortInput = {
  fields?: Maybe<Array<Maybe<SanityPosterFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SanityResolveReferencesConfiguration = {
  /** Max depth to resolve references to */
  maxDepth: Scalars['Int'];
};

export type SanityScheduleAlert = SanityDocument & Node & {
  __typename?: 'SanityScheduleAlert';
  _id?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  _createdAt?: Maybe<Scalars['Date']>;
  _updatedAt?: Maybe<Scalars['Date']>;
  _rev?: Maybe<Scalars['String']>;
  _key?: Maybe<Scalars['String']>;
  active?: Maybe<Scalars['Boolean']>;
  message?: Maybe<Array<Maybe<SanityBlock>>>;
  _rawMessage?: Maybe<Scalars['JSON']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type SanityScheduleAlert_CreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type SanityScheduleAlert_UpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type SanityScheduleAlert_RawMessageArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};

export type SanityScheduleAlertConnection = {
  __typename?: 'SanityScheduleAlertConnection';
  totalCount: Scalars['Int'];
  edges: Array<SanityScheduleAlertEdge>;
  nodes: Array<SanityScheduleAlert>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SanityScheduleAlertGroupConnection>;
};


export type SanityScheduleAlertConnectionDistinctArgs = {
  field: SanityScheduleAlertFieldsEnum;
};


export type SanityScheduleAlertConnectionMaxArgs = {
  field: SanityScheduleAlertFieldsEnum;
};


export type SanityScheduleAlertConnectionMinArgs = {
  field: SanityScheduleAlertFieldsEnum;
};


export type SanityScheduleAlertConnectionSumArgs = {
  field: SanityScheduleAlertFieldsEnum;
};


export type SanityScheduleAlertConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SanityScheduleAlertFieldsEnum;
};

export type SanityScheduleAlertEdge = {
  __typename?: 'SanityScheduleAlertEdge';
  next?: Maybe<SanityScheduleAlert>;
  node: SanityScheduleAlert;
  previous?: Maybe<SanityScheduleAlert>;
};

export enum SanityScheduleAlertFieldsEnum {
  _id = '_id',
  _type = '_type',
  _createdAt = '_createdAt',
  _updatedAt = '_updatedAt',
  _rev = '_rev',
  _key = '_key',
  active = 'active',
  message = 'message',
  message____key = 'message____key',
  message____type = 'message____type',
  message___children = 'message___children',
  message___children____key = 'message___children____key',
  message___children____type = 'message___children____type',
  message___children___marks = 'message___children___marks',
  message___children___text = 'message___children___text',
  message___style = 'message___style',
  message___list = 'message___list',
  message____rawChildren = 'message____rawChildren',
  _rawMessage = '_rawMessage',
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

export type SanityScheduleAlertFilterInput = {
  _id?: Maybe<StringQueryOperatorInput>;
  _type?: Maybe<StringQueryOperatorInput>;
  _createdAt?: Maybe<DateQueryOperatorInput>;
  _updatedAt?: Maybe<DateQueryOperatorInput>;
  _rev?: Maybe<StringQueryOperatorInput>;
  _key?: Maybe<StringQueryOperatorInput>;
  active?: Maybe<BooleanQueryOperatorInput>;
  message?: Maybe<SanityBlockFilterListInput>;
  _rawMessage?: Maybe<JsonQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type SanityScheduleAlertGroupConnection = {
  __typename?: 'SanityScheduleAlertGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<SanityScheduleAlertEdge>;
  nodes: Array<SanityScheduleAlert>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SanityScheduleAlertSortInput = {
  fields?: Maybe<Array<Maybe<SanityScheduleAlertFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SanityScriptureReference = {
  __typename?: 'SanityScriptureReference';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
  verseReference?: Maybe<Scalars['String']>;
};

export type SanitySermonUpload = SanityDocument & Node & {
  __typename?: 'SanitySermonUpload';
  _id?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  _createdAt?: Maybe<Scalars['Date']>;
  _updatedAt?: Maybe<Scalars['Date']>;
  _rev?: Maybe<Scalars['String']>;
  _key?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['Date']>;
  extraInfo?: Maybe<Scalars['String']>;
  audioFile?: Maybe<SanityFile>;
  _rawAudioFile?: Maybe<Scalars['JSON']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type SanitySermonUpload_CreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type SanitySermonUpload_UpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type SanitySermonUploadDateArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type SanitySermonUpload_RawAudioFileArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};

export type SanitySermonUploadConnection = {
  __typename?: 'SanitySermonUploadConnection';
  totalCount: Scalars['Int'];
  edges: Array<SanitySermonUploadEdge>;
  nodes: Array<SanitySermonUpload>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SanitySermonUploadGroupConnection>;
};


export type SanitySermonUploadConnectionDistinctArgs = {
  field: SanitySermonUploadFieldsEnum;
};


export type SanitySermonUploadConnectionMaxArgs = {
  field: SanitySermonUploadFieldsEnum;
};


export type SanitySermonUploadConnectionMinArgs = {
  field: SanitySermonUploadFieldsEnum;
};


export type SanitySermonUploadConnectionSumArgs = {
  field: SanitySermonUploadFieldsEnum;
};


export type SanitySermonUploadConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SanitySermonUploadFieldsEnum;
};

export type SanitySermonUploadEdge = {
  __typename?: 'SanitySermonUploadEdge';
  next?: Maybe<SanitySermonUpload>;
  node: SanitySermonUpload;
  previous?: Maybe<SanitySermonUpload>;
};

export enum SanitySermonUploadFieldsEnum {
  _id = '_id',
  _type = '_type',
  _createdAt = '_createdAt',
  _updatedAt = '_updatedAt',
  _rev = '_rev',
  _key = '_key',
  date = 'date',
  extraInfo = 'extraInfo',
  audioFile____key = 'audioFile____key',
  audioFile____type = 'audioFile____type',
  audioFile___asset____id = 'audioFile___asset____id',
  audioFile___asset____type = 'audioFile___asset____type',
  audioFile___asset____createdAt = 'audioFile___asset____createdAt',
  audioFile___asset____updatedAt = 'audioFile___asset____updatedAt',
  audioFile___asset____rev = 'audioFile___asset____rev',
  audioFile___asset____key = 'audioFile___asset____key',
  audioFile___asset___originalFilename = 'audioFile___asset___originalFilename',
  audioFile___asset___label = 'audioFile___asset___label',
  audioFile___asset___title = 'audioFile___asset___title',
  audioFile___asset___description = 'audioFile___asset___description',
  audioFile___asset___altText = 'audioFile___asset___altText',
  audioFile___asset___sha1hash = 'audioFile___asset___sha1hash',
  audioFile___asset___extension = 'audioFile___asset___extension',
  audioFile___asset___mimeType = 'audioFile___asset___mimeType',
  audioFile___asset___size = 'audioFile___asset___size',
  audioFile___asset___assetId = 'audioFile___asset___assetId',
  audioFile___asset___path = 'audioFile___asset___path',
  audioFile___asset___url = 'audioFile___asset___url',
  audioFile___asset___source____key = 'audioFile___asset___source____key',
  audioFile___asset___source____type = 'audioFile___asset___source____type',
  audioFile___asset___source___name = 'audioFile___asset___source___name',
  audioFile___asset___source___id = 'audioFile___asset___source___id',
  audioFile___asset___source___url = 'audioFile___asset___source___url',
  audioFile___asset____rawSource = 'audioFile___asset____rawSource',
  audioFile___asset___id = 'audioFile___asset___id',
  audioFile___asset___parent___id = 'audioFile___asset___parent___id',
  audioFile___asset___parent___children = 'audioFile___asset___parent___children',
  audioFile___asset___children = 'audioFile___asset___children',
  audioFile___asset___children___id = 'audioFile___asset___children___id',
  audioFile___asset___children___children = 'audioFile___asset___children___children',
  audioFile___asset___internal___content = 'audioFile___asset___internal___content',
  audioFile___asset___internal___contentDigest = 'audioFile___asset___internal___contentDigest',
  audioFile___asset___internal___description = 'audioFile___asset___internal___description',
  audioFile___asset___internal___fieldOwners = 'audioFile___asset___internal___fieldOwners',
  audioFile___asset___internal___ignoreType = 'audioFile___asset___internal___ignoreType',
  audioFile___asset___internal___mediaType = 'audioFile___asset___internal___mediaType',
  audioFile___asset___internal___owner = 'audioFile___asset___internal___owner',
  audioFile___asset___internal___type = 'audioFile___asset___internal___type',
  audioFile____rawAsset = 'audioFile____rawAsset',
  _rawAudioFile = '_rawAudioFile',
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

export type SanitySermonUploadFilterInput = {
  _id?: Maybe<StringQueryOperatorInput>;
  _type?: Maybe<StringQueryOperatorInput>;
  _createdAt?: Maybe<DateQueryOperatorInput>;
  _updatedAt?: Maybe<DateQueryOperatorInput>;
  _rev?: Maybe<StringQueryOperatorInput>;
  _key?: Maybe<StringQueryOperatorInput>;
  date?: Maybe<DateQueryOperatorInput>;
  extraInfo?: Maybe<StringQueryOperatorInput>;
  audioFile?: Maybe<SanityFileFilterInput>;
  _rawAudioFile?: Maybe<JsonQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type SanitySermonUploadGroupConnection = {
  __typename?: 'SanitySermonUploadGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<SanitySermonUploadEdge>;
  nodes: Array<SanitySermonUpload>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SanitySermonUploadSortInput = {
  fields?: Maybe<Array<Maybe<SanitySermonUploadFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SanityShortcuts = SanityDocument & Node & {
  __typename?: 'SanityShortcuts';
  _id?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  _createdAt?: Maybe<Scalars['Date']>;
  _updatedAt?: Maybe<Scalars['Date']>;
  _rev?: Maybe<Scalars['String']>;
  _key?: Maybe<Scalars['String']>;
  content?: Maybe<Array<Maybe<SanityBlock>>>;
  _rawContent?: Maybe<Scalars['JSON']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type SanityShortcuts_CreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type SanityShortcuts_UpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type SanityShortcuts_RawContentArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};

export type SanityShortcutsConnection = {
  __typename?: 'SanityShortcutsConnection';
  totalCount: Scalars['Int'];
  edges: Array<SanityShortcutsEdge>;
  nodes: Array<SanityShortcuts>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SanityShortcutsGroupConnection>;
};


export type SanityShortcutsConnectionDistinctArgs = {
  field: SanityShortcutsFieldsEnum;
};


export type SanityShortcutsConnectionMaxArgs = {
  field: SanityShortcutsFieldsEnum;
};


export type SanityShortcutsConnectionMinArgs = {
  field: SanityShortcutsFieldsEnum;
};


export type SanityShortcutsConnectionSumArgs = {
  field: SanityShortcutsFieldsEnum;
};


export type SanityShortcutsConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SanityShortcutsFieldsEnum;
};

export type SanityShortcutsEdge = {
  __typename?: 'SanityShortcutsEdge';
  next?: Maybe<SanityShortcuts>;
  node: SanityShortcuts;
  previous?: Maybe<SanityShortcuts>;
};

export enum SanityShortcutsFieldsEnum {
  _id = '_id',
  _type = '_type',
  _createdAt = '_createdAt',
  _updatedAt = '_updatedAt',
  _rev = '_rev',
  _key = '_key',
  content = 'content',
  content____key = 'content____key',
  content____type = 'content____type',
  content___children = 'content___children',
  content___children____key = 'content___children____key',
  content___children____type = 'content___children____type',
  content___children___marks = 'content___children___marks',
  content___children___text = 'content___children___text',
  content___style = 'content___style',
  content___list = 'content___list',
  content____rawChildren = 'content____rawChildren',
  _rawContent = '_rawContent',
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

export type SanityShortcutsFilterInput = {
  _id?: Maybe<StringQueryOperatorInput>;
  _type?: Maybe<StringQueryOperatorInput>;
  _createdAt?: Maybe<DateQueryOperatorInput>;
  _updatedAt?: Maybe<DateQueryOperatorInput>;
  _rev?: Maybe<StringQueryOperatorInput>;
  _key?: Maybe<StringQueryOperatorInput>;
  content?: Maybe<SanityBlockFilterListInput>;
  _rawContent?: Maybe<JsonQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type SanityShortcutsGroupConnection = {
  __typename?: 'SanityShortcutsGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<SanityShortcutsEdge>;
  nodes: Array<SanityShortcuts>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SanityShortcutsSortInput = {
  fields?: Maybe<Array<Maybe<SanityShortcutsFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SanitySlug = {
  __typename?: 'SanitySlug';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  current?: Maybe<Scalars['String']>;
};

export type SanitySlugFilterInput = {
  _key?: Maybe<StringQueryOperatorInput>;
  _type?: Maybe<StringQueryOperatorInput>;
  current?: Maybe<StringQueryOperatorInput>;
};

export type SanitySpan = {
  __typename?: 'SanitySpan';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  marks?: Maybe<Array<Maybe<Scalars['String']>>>;
  text?: Maybe<Scalars['String']>;
};

export type SanitySpanFilterInput = {
  _key?: Maybe<StringQueryOperatorInput>;
  _type?: Maybe<StringQueryOperatorInput>;
  marks?: Maybe<StringQueryOperatorInput>;
  text?: Maybe<StringQueryOperatorInput>;
};

export type SanitySpanFilterListInput = {
  elemMatch?: Maybe<SanitySpanFilterInput>;
};

export type SanityVerticalSpace = {
  __typename?: 'SanityVerticalSpace';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['Float']>;
};

export type SanityVideoEmbed = {
  __typename?: 'SanityVideoEmbed';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  videoId?: Maybe<Scalars['String']>;
};

export type SanityWeeklySchedule = SanityDocument & Node & {
  __typename?: 'SanityWeeklySchedule';
  _id?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  _createdAt?: Maybe<Scalars['Date']>;
  _updatedAt?: Maybe<Scalars['Date']>;
  _rev?: Maybe<Scalars['String']>;
  _key?: Maybe<Scalars['String']>;
  days?: Maybe<Array<Maybe<SanityWeeklyScheduleDay>>>;
  _rawDays?: Maybe<Scalars['JSON']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type SanityWeeklySchedule_CreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type SanityWeeklySchedule_UpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type SanityWeeklySchedule_RawDaysArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};

export type SanityWeeklyScheduleConnection = {
  __typename?: 'SanityWeeklyScheduleConnection';
  totalCount: Scalars['Int'];
  edges: Array<SanityWeeklyScheduleEdge>;
  nodes: Array<SanityWeeklySchedule>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SanityWeeklyScheduleGroupConnection>;
};


export type SanityWeeklyScheduleConnectionDistinctArgs = {
  field: SanityWeeklyScheduleFieldsEnum;
};


export type SanityWeeklyScheduleConnectionMaxArgs = {
  field: SanityWeeklyScheduleFieldsEnum;
};


export type SanityWeeklyScheduleConnectionMinArgs = {
  field: SanityWeeklyScheduleFieldsEnum;
};


export type SanityWeeklyScheduleConnectionSumArgs = {
  field: SanityWeeklyScheduleFieldsEnum;
};


export type SanityWeeklyScheduleConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SanityWeeklyScheduleFieldsEnum;
};

export type SanityWeeklyScheduleDay = {
  __typename?: 'SanityWeeklyScheduleDay';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  events?: Maybe<Array<Maybe<SanityWeeklyScheduleEvent>>>;
  _rawEvents?: Maybe<Scalars['JSON']>;
};


export type SanityWeeklyScheduleDay_RawEventsArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};

export type SanityWeeklyScheduleDayFilterInput = {
  _key?: Maybe<StringQueryOperatorInput>;
  _type?: Maybe<StringQueryOperatorInput>;
  label?: Maybe<StringQueryOperatorInput>;
  events?: Maybe<SanityWeeklyScheduleEventFilterListInput>;
  _rawEvents?: Maybe<JsonQueryOperatorInput>;
};

export type SanityWeeklyScheduleDayFilterListInput = {
  elemMatch?: Maybe<SanityWeeklyScheduleDayFilterInput>;
};

export type SanityWeeklyScheduleEdge = {
  __typename?: 'SanityWeeklyScheduleEdge';
  next?: Maybe<SanityWeeklySchedule>;
  node: SanityWeeklySchedule;
  previous?: Maybe<SanityWeeklySchedule>;
};

export type SanityWeeklyScheduleEvent = {
  __typename?: 'SanityWeeklyScheduleEvent';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  time?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
};

export type SanityWeeklyScheduleEventFilterInput = {
  _key?: Maybe<StringQueryOperatorInput>;
  _type?: Maybe<StringQueryOperatorInput>;
  time?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
};

export type SanityWeeklyScheduleEventFilterListInput = {
  elemMatch?: Maybe<SanityWeeklyScheduleEventFilterInput>;
};

export enum SanityWeeklyScheduleFieldsEnum {
  _id = '_id',
  _type = '_type',
  _createdAt = '_createdAt',
  _updatedAt = '_updatedAt',
  _rev = '_rev',
  _key = '_key',
  days = 'days',
  days____key = 'days____key',
  days____type = 'days____type',
  days___label = 'days___label',
  days___events = 'days___events',
  days___events____key = 'days___events____key',
  days___events____type = 'days___events____type',
  days___events___time = 'days___events___time',
  days___events___description = 'days___events___description',
  days____rawEvents = 'days____rawEvents',
  _rawDays = '_rawDays',
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

export type SanityWeeklyScheduleFilterInput = {
  _id?: Maybe<StringQueryOperatorInput>;
  _type?: Maybe<StringQueryOperatorInput>;
  _createdAt?: Maybe<DateQueryOperatorInput>;
  _updatedAt?: Maybe<DateQueryOperatorInput>;
  _rev?: Maybe<StringQueryOperatorInput>;
  _key?: Maybe<StringQueryOperatorInput>;
  days?: Maybe<SanityWeeklyScheduleDayFilterListInput>;
  _rawDays?: Maybe<JsonQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type SanityWeeklyScheduleGroupConnection = {
  __typename?: 'SanityWeeklyScheduleGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<SanityWeeklyScheduleEdge>;
  nodes: Array<SanityWeeklySchedule>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SanityWeeklyScheduleSortInput = {
  fields?: Maybe<Array<Maybe<SanityWeeklyScheduleFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type Site = Node & {
  __typename?: 'Site';
  buildTime?: Maybe<Scalars['Date']>;
  siteMetadata?: Maybe<SiteSiteMetadata>;
  port?: Maybe<Scalars['Int']>;
  host?: Maybe<Scalars['String']>;
  polyfill?: Maybe<Scalars['Boolean']>;
  pathPrefix?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type SiteBuildTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type SiteBuildMetadata = Node & {
  __typename?: 'SiteBuildMetadata';
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  buildTime?: Maybe<Scalars['Date']>;
};


export type SiteBuildMetadataBuildTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type SiteBuildMetadataConnection = {
  __typename?: 'SiteBuildMetadataConnection';
  totalCount: Scalars['Int'];
  edges: Array<SiteBuildMetadataEdge>;
  nodes: Array<SiteBuildMetadata>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SiteBuildMetadataGroupConnection>;
};


export type SiteBuildMetadataConnectionDistinctArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataConnectionMaxArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataConnectionMinArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataConnectionSumArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SiteBuildMetadataFieldsEnum;
};

export type SiteBuildMetadataEdge = {
  __typename?: 'SiteBuildMetadataEdge';
  next?: Maybe<SiteBuildMetadata>;
  node: SiteBuildMetadata;
  previous?: Maybe<SiteBuildMetadata>;
};

export enum SiteBuildMetadataFieldsEnum {
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
  buildTime = 'buildTime'
}

export type SiteBuildMetadataFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  buildTime?: Maybe<DateQueryOperatorInput>;
};

export type SiteBuildMetadataGroupConnection = {
  __typename?: 'SiteBuildMetadataGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<SiteBuildMetadataEdge>;
  nodes: Array<SiteBuildMetadata>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SiteBuildMetadataSortInput = {
  fields?: Maybe<Array<Maybe<SiteBuildMetadataFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SiteConnection = {
  __typename?: 'SiteConnection';
  totalCount: Scalars['Int'];
  edges: Array<SiteEdge>;
  nodes: Array<Site>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SiteGroupConnection>;
};


export type SiteConnectionDistinctArgs = {
  field: SiteFieldsEnum;
};


export type SiteConnectionMaxArgs = {
  field: SiteFieldsEnum;
};


export type SiteConnectionMinArgs = {
  field: SiteFieldsEnum;
};


export type SiteConnectionSumArgs = {
  field: SiteFieldsEnum;
};


export type SiteConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SiteFieldsEnum;
};

export type SiteEdge = {
  __typename?: 'SiteEdge';
  next?: Maybe<Site>;
  node: Site;
  previous?: Maybe<Site>;
};

export enum SiteFieldsEnum {
  buildTime = 'buildTime',
  siteMetadata___title = 'siteMetadata___title',
  siteMetadata___description = 'siteMetadata___description',
  siteMetadata___church___address = 'siteMetadata___church___address',
  siteMetadata___church___phone = 'siteMetadata___church___phone',
  siteMetadata___church___googleMapsLink = 'siteMetadata___church___googleMapsLink',
  siteMetadata___church___googleMapsEmbedSrc = 'siteMetadata___church___googleMapsEmbedSrc',
  port = 'port',
  host = 'host',
  polyfill = 'polyfill',
  pathPrefix = 'pathPrefix',
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

export type SiteFilterInput = {
  buildTime?: Maybe<DateQueryOperatorInput>;
  siteMetadata?: Maybe<SiteSiteMetadataFilterInput>;
  port?: Maybe<IntQueryOperatorInput>;
  host?: Maybe<StringQueryOperatorInput>;
  polyfill?: Maybe<BooleanQueryOperatorInput>;
  pathPrefix?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type SiteFunction = Node & {
  __typename?: 'SiteFunction';
  functionRoute: Scalars['String'];
  pluginName: Scalars['String'];
  originalAbsoluteFilePath: Scalars['String'];
  originalRelativeFilePath: Scalars['String'];
  relativeCompiledFilePath: Scalars['String'];
  absoluteCompiledFilePath: Scalars['String'];
  matchPath?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type SiteFunctionConnection = {
  __typename?: 'SiteFunctionConnection';
  totalCount: Scalars['Int'];
  edges: Array<SiteFunctionEdge>;
  nodes: Array<SiteFunction>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SiteFunctionGroupConnection>;
};


export type SiteFunctionConnectionDistinctArgs = {
  field: SiteFunctionFieldsEnum;
};


export type SiteFunctionConnectionMaxArgs = {
  field: SiteFunctionFieldsEnum;
};


export type SiteFunctionConnectionMinArgs = {
  field: SiteFunctionFieldsEnum;
};


export type SiteFunctionConnectionSumArgs = {
  field: SiteFunctionFieldsEnum;
};


export type SiteFunctionConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SiteFunctionFieldsEnum;
};

export type SiteFunctionEdge = {
  __typename?: 'SiteFunctionEdge';
  next?: Maybe<SiteFunction>;
  node: SiteFunction;
  previous?: Maybe<SiteFunction>;
};

export enum SiteFunctionFieldsEnum {
  functionRoute = 'functionRoute',
  pluginName = 'pluginName',
  originalAbsoluteFilePath = 'originalAbsoluteFilePath',
  originalRelativeFilePath = 'originalRelativeFilePath',
  relativeCompiledFilePath = 'relativeCompiledFilePath',
  absoluteCompiledFilePath = 'absoluteCompiledFilePath',
  matchPath = 'matchPath',
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

export type SiteFunctionFilterInput = {
  functionRoute?: Maybe<StringQueryOperatorInput>;
  pluginName?: Maybe<StringQueryOperatorInput>;
  originalAbsoluteFilePath?: Maybe<StringQueryOperatorInput>;
  originalRelativeFilePath?: Maybe<StringQueryOperatorInput>;
  relativeCompiledFilePath?: Maybe<StringQueryOperatorInput>;
  absoluteCompiledFilePath?: Maybe<StringQueryOperatorInput>;
  matchPath?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type SiteFunctionGroupConnection = {
  __typename?: 'SiteFunctionGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<SiteFunctionEdge>;
  nodes: Array<SiteFunction>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SiteFunctionSortInput = {
  fields?: Maybe<Array<Maybe<SiteFunctionFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SiteGroupConnection = {
  __typename?: 'SiteGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<SiteEdge>;
  nodes: Array<Site>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SitePage = Node & {
  __typename?: 'SitePage';
  path: Scalars['String'];
  component: Scalars['String'];
  internalComponentName: Scalars['String'];
  componentChunkName: Scalars['String'];
  matchPath?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  isCreatedByStatefulCreatePages?: Maybe<Scalars['Boolean']>;
  context?: Maybe<SitePageContext>;
  pluginCreator?: Maybe<SitePlugin>;
  pluginCreatorId?: Maybe<Scalars['String']>;
};

export type SitePageConnection = {
  __typename?: 'SitePageConnection';
  totalCount: Scalars['Int'];
  edges: Array<SitePageEdge>;
  nodes: Array<SitePage>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SitePageGroupConnection>;
};


export type SitePageConnectionDistinctArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageConnectionMaxArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageConnectionMinArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageConnectionSumArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SitePageFieldsEnum;
};

export type SitePageContext = {
  __typename?: 'SitePageContext';
  _id?: Maybe<Scalars['String']>;
  page?: Maybe<Scalars['Int']>;
  perPage?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  isFirst?: Maybe<Scalars['Boolean']>;
  isLast?: Maybe<Scalars['Boolean']>;
  onlyOne?: Maybe<Scalars['Boolean']>;
};

export type SitePageContextFilterInput = {
  _id?: Maybe<StringQueryOperatorInput>;
  page?: Maybe<IntQueryOperatorInput>;
  perPage?: Maybe<IntQueryOperatorInput>;
  offset?: Maybe<IntQueryOperatorInput>;
  isFirst?: Maybe<BooleanQueryOperatorInput>;
  isLast?: Maybe<BooleanQueryOperatorInput>;
  onlyOne?: Maybe<BooleanQueryOperatorInput>;
};

export type SitePageEdge = {
  __typename?: 'SitePageEdge';
  next?: Maybe<SitePage>;
  node: SitePage;
  previous?: Maybe<SitePage>;
};

export enum SitePageFieldsEnum {
  path = 'path',
  component = 'component',
  internalComponentName = 'internalComponentName',
  componentChunkName = 'componentChunkName',
  matchPath = 'matchPath',
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
  isCreatedByStatefulCreatePages = 'isCreatedByStatefulCreatePages',
  context____id = 'context____id',
  context___page = 'context___page',
  context___perPage = 'context___perPage',
  context___offset = 'context___offset',
  context___isFirst = 'context___isFirst',
  context___isLast = 'context___isLast',
  context___onlyOne = 'context___onlyOne',
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
  pluginCreator___pluginOptions___isTSX = 'pluginCreator___pluginOptions___isTSX',
  pluginCreator___pluginOptions___jsxPragma = 'pluginCreator___pluginOptions___jsxPragma',
  pluginCreator___pluginOptions___allExtensions = 'pluginCreator___pluginOptions___allExtensions',
  pluginCreator___pluginOptions___displayName = 'pluginCreator___pluginOptions___displayName',
  pluginCreator___pluginOptions___fileName = 'pluginCreator___pluginOptions___fileName',
  pluginCreator___pluginOptions___minify = 'pluginCreator___pluginOptions___minify',
  pluginCreator___pluginOptions___namespace = 'pluginCreator___pluginOptions___namespace',
  pluginCreator___pluginOptions___transpileTemplateLiterals = 'pluginCreator___pluginOptions___transpileTemplateLiterals',
  pluginCreator___pluginOptions___pure = 'pluginCreator___pluginOptions___pure',
  pluginCreator___pluginOptions___root = 'pluginCreator___pluginOptions___root',
  pluginCreator___pluginOptions___aliases____ = 'pluginCreator___pluginOptions___aliases____',
  pluginCreator___pluginOptions___component = 'pluginCreator___pluginOptions___component',
  pluginCreator___pluginOptions___projectId = 'pluginCreator___pluginOptions___projectId',
  pluginCreator___pluginOptions___dataset = 'pluginCreator___pluginOptions___dataset',
  pluginCreator___pluginOptions___watchMode = 'pluginCreator___pluginOptions___watchMode',
  pluginCreator___pluginOptions___overlayDrafts = 'pluginCreator___pluginOptions___overlayDrafts',
  pluginCreator___pluginOptions___token = 'pluginCreator___pluginOptions___token',
  pluginCreator___pluginOptions___trackingId = 'pluginCreator___pluginOptions___trackingId',
  pluginCreator___pluginOptions___head = 'pluginCreator___pluginOptions___head',
  pluginCreator___pluginOptions___anonymize = 'pluginCreator___pluginOptions___anonymize',
  pluginCreator___pluginOptions___respectDNT = 'pluginCreator___pluginOptions___respectDNT',
  pluginCreator___pluginOptions___pageTransitionDelay = 'pluginCreator___pluginOptions___pageTransitionDelay',
  pluginCreator___pluginOptions___enableWebVitalsTracking = 'pluginCreator___pluginOptions___enableWebVitalsTracking',
  pluginCreator___pluginOptions___pixelId = 'pluginCreator___pluginOptions___pixelId',
  pluginCreator___pluginOptions___query = 'pluginCreator___pluginOptions___query',
  pluginCreator___pluginOptions___feeds = 'pluginCreator___pluginOptions___feeds',
  pluginCreator___pluginOptions___feeds___output = 'pluginCreator___pluginOptions___feeds___output',
  pluginCreator___pluginOptions___feeds___title = 'pluginCreator___pluginOptions___feeds___title',
  pluginCreator___pluginOptions___feeds___description = 'pluginCreator___pluginOptions___feeds___description',
  pluginCreator___pluginOptions___feeds___site_url = 'pluginCreator___pluginOptions___feeds___site_url',
  pluginCreator___pluginOptions___feeds___feed_url = 'pluginCreator___pluginOptions___feeds___feed_url',
  pluginCreator___pluginOptions___feeds___query = 'pluginCreator___pluginOptions___feeds___query',
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
  pluginCreatorId = 'pluginCreatorId'
}

export type SitePageFilterInput = {
  path?: Maybe<StringQueryOperatorInput>;
  component?: Maybe<StringQueryOperatorInput>;
  internalComponentName?: Maybe<StringQueryOperatorInput>;
  componentChunkName?: Maybe<StringQueryOperatorInput>;
  matchPath?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  isCreatedByStatefulCreatePages?: Maybe<BooleanQueryOperatorInput>;
  context?: Maybe<SitePageContextFilterInput>;
  pluginCreator?: Maybe<SitePluginFilterInput>;
  pluginCreatorId?: Maybe<StringQueryOperatorInput>;
};

export type SitePageGroupConnection = {
  __typename?: 'SitePageGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<SitePageEdge>;
  nodes: Array<SitePage>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SitePageSortInput = {
  fields?: Maybe<Array<Maybe<SitePageFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SitePlugin = Node & {
  __typename?: 'SitePlugin';
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  resolve?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
  pluginOptions?: Maybe<SitePluginPluginOptions>;
  nodeAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  browserAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  ssrAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  pluginFilepath?: Maybe<Scalars['String']>;
  packageJson?: Maybe<SitePluginPackageJson>;
};

export type SitePluginConnection = {
  __typename?: 'SitePluginConnection';
  totalCount: Scalars['Int'];
  edges: Array<SitePluginEdge>;
  nodes: Array<SitePlugin>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SitePluginGroupConnection>;
};


export type SitePluginConnectionDistinctArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginConnectionMaxArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginConnectionMinArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginConnectionSumArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SitePluginFieldsEnum;
};

export type SitePluginEdge = {
  __typename?: 'SitePluginEdge';
  next?: Maybe<SitePlugin>;
  node: SitePlugin;
  previous?: Maybe<SitePlugin>;
};

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
  pluginOptions___isTSX = 'pluginOptions___isTSX',
  pluginOptions___jsxPragma = 'pluginOptions___jsxPragma',
  pluginOptions___allExtensions = 'pluginOptions___allExtensions',
  pluginOptions___displayName = 'pluginOptions___displayName',
  pluginOptions___fileName = 'pluginOptions___fileName',
  pluginOptions___minify = 'pluginOptions___minify',
  pluginOptions___namespace = 'pluginOptions___namespace',
  pluginOptions___transpileTemplateLiterals = 'pluginOptions___transpileTemplateLiterals',
  pluginOptions___pure = 'pluginOptions___pure',
  pluginOptions___root = 'pluginOptions___root',
  pluginOptions___aliases____ = 'pluginOptions___aliases____',
  pluginOptions___component = 'pluginOptions___component',
  pluginOptions___projectId = 'pluginOptions___projectId',
  pluginOptions___dataset = 'pluginOptions___dataset',
  pluginOptions___watchMode = 'pluginOptions___watchMode',
  pluginOptions___overlayDrafts = 'pluginOptions___overlayDrafts',
  pluginOptions___token = 'pluginOptions___token',
  pluginOptions___trackingId = 'pluginOptions___trackingId',
  pluginOptions___head = 'pluginOptions___head',
  pluginOptions___anonymize = 'pluginOptions___anonymize',
  pluginOptions___respectDNT = 'pluginOptions___respectDNT',
  pluginOptions___pageTransitionDelay = 'pluginOptions___pageTransitionDelay',
  pluginOptions___enableWebVitalsTracking = 'pluginOptions___enableWebVitalsTracking',
  pluginOptions___pixelId = 'pluginOptions___pixelId',
  pluginOptions___query = 'pluginOptions___query',
  pluginOptions___feeds = 'pluginOptions___feeds',
  pluginOptions___feeds___output = 'pluginOptions___feeds___output',
  pluginOptions___feeds___title = 'pluginOptions___feeds___title',
  pluginOptions___feeds___description = 'pluginOptions___feeds___description',
  pluginOptions___feeds___site_url = 'pluginOptions___feeds___site_url',
  pluginOptions___feeds___feed_url = 'pluginOptions___feeds___feed_url',
  pluginOptions___feeds___query = 'pluginOptions___feeds___query',
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
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  resolve?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
  pluginOptions?: Maybe<SitePluginPluginOptionsFilterInput>;
  nodeAPIs?: Maybe<StringQueryOperatorInput>;
  browserAPIs?: Maybe<StringQueryOperatorInput>;
  ssrAPIs?: Maybe<StringQueryOperatorInput>;
  pluginFilepath?: Maybe<StringQueryOperatorInput>;
  packageJson?: Maybe<SitePluginPackageJsonFilterInput>;
};

export type SitePluginGroupConnection = {
  __typename?: 'SitePluginGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<SitePluginEdge>;
  nodes: Array<SitePlugin>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SitePluginPackageJson = {
  __typename?: 'SitePluginPackageJson';
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
  main?: Maybe<Scalars['String']>;
  author?: Maybe<Scalars['String']>;
  license?: Maybe<Scalars['String']>;
  dependencies?: Maybe<Array<Maybe<SitePluginPackageJsonDependencies>>>;
  devDependencies?: Maybe<Array<Maybe<SitePluginPackageJsonDevDependencies>>>;
  peerDependencies?: Maybe<Array<Maybe<SitePluginPackageJsonPeerDependencies>>>;
  keywords?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePluginPackageJsonDependencies = {
  __typename?: 'SitePluginPackageJsonDependencies';
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
};

export type SitePluginPackageJsonDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonDependenciesFilterInput>;
};

export type SitePluginPackageJsonDevDependencies = {
  __typename?: 'SitePluginPackageJsonDevDependencies';
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
};

export type SitePluginPackageJsonDevDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonDevDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonDevDependenciesFilterInput>;
};

export type SitePluginPackageJsonFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
  main?: Maybe<StringQueryOperatorInput>;
  author?: Maybe<StringQueryOperatorInput>;
  license?: Maybe<StringQueryOperatorInput>;
  dependencies?: Maybe<SitePluginPackageJsonDependenciesFilterListInput>;
  devDependencies?: Maybe<SitePluginPackageJsonDevDependenciesFilterListInput>;
  peerDependencies?: Maybe<SitePluginPackageJsonPeerDependenciesFilterListInput>;
  keywords?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonPeerDependencies = {
  __typename?: 'SitePluginPackageJsonPeerDependencies';
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
};

export type SitePluginPackageJsonPeerDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonPeerDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonPeerDependenciesFilterInput>;
};

export type SitePluginPluginOptions = {
  __typename?: 'SitePluginPluginOptions';
  isTSX?: Maybe<Scalars['Boolean']>;
  jsxPragma?: Maybe<Scalars['String']>;
  allExtensions?: Maybe<Scalars['Boolean']>;
  displayName?: Maybe<Scalars['Boolean']>;
  fileName?: Maybe<Scalars['Boolean']>;
  minify?: Maybe<Scalars['Boolean']>;
  namespace?: Maybe<Scalars['String']>;
  transpileTemplateLiterals?: Maybe<Scalars['Boolean']>;
  pure?: Maybe<Scalars['Boolean']>;
  root?: Maybe<Scalars['String']>;
  aliases?: Maybe<SitePluginPluginOptionsAliases>;
  component?: Maybe<Scalars['String']>;
  projectId?: Maybe<Scalars['String']>;
  dataset?: Maybe<Scalars['String']>;
  watchMode?: Maybe<Scalars['Boolean']>;
  overlayDrafts?: Maybe<Scalars['Boolean']>;
  token?: Maybe<Scalars['String']>;
  trackingId?: Maybe<Scalars['String']>;
  head?: Maybe<Scalars['Boolean']>;
  anonymize?: Maybe<Scalars['Boolean']>;
  respectDNT?: Maybe<Scalars['Boolean']>;
  pageTransitionDelay?: Maybe<Scalars['Int']>;
  enableWebVitalsTracking?: Maybe<Scalars['Boolean']>;
  pixelId?: Maybe<Scalars['String']>;
  query?: Maybe<Scalars['String']>;
  feeds?: Maybe<Array<Maybe<SitePluginPluginOptionsFeeds>>>;
  path?: Maybe<Scalars['String']>;
  pathCheck?: Maybe<Scalars['Boolean']>;
};

export type SitePluginPluginOptionsAliases = {
  __typename?: 'SitePluginPluginOptionsAliases';
  _?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsAliasesFilterInput = {
  _?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsFeeds = {
  __typename?: 'SitePluginPluginOptionsFeeds';
  output?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  site_url?: Maybe<Scalars['String']>;
  feed_url?: Maybe<Scalars['String']>;
  query?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsFeedsFilterInput = {
  output?: Maybe<StringQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  site_url?: Maybe<StringQueryOperatorInput>;
  feed_url?: Maybe<StringQueryOperatorInput>;
  query?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsFeedsFilterListInput = {
  elemMatch?: Maybe<SitePluginPluginOptionsFeedsFilterInput>;
};

export type SitePluginPluginOptionsFilterInput = {
  isTSX?: Maybe<BooleanQueryOperatorInput>;
  jsxPragma?: Maybe<StringQueryOperatorInput>;
  allExtensions?: Maybe<BooleanQueryOperatorInput>;
  displayName?: Maybe<BooleanQueryOperatorInput>;
  fileName?: Maybe<BooleanQueryOperatorInput>;
  minify?: Maybe<BooleanQueryOperatorInput>;
  namespace?: Maybe<StringQueryOperatorInput>;
  transpileTemplateLiterals?: Maybe<BooleanQueryOperatorInput>;
  pure?: Maybe<BooleanQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  aliases?: Maybe<SitePluginPluginOptionsAliasesFilterInput>;
  component?: Maybe<StringQueryOperatorInput>;
  projectId?: Maybe<StringQueryOperatorInput>;
  dataset?: Maybe<StringQueryOperatorInput>;
  watchMode?: Maybe<BooleanQueryOperatorInput>;
  overlayDrafts?: Maybe<BooleanQueryOperatorInput>;
  token?: Maybe<StringQueryOperatorInput>;
  trackingId?: Maybe<StringQueryOperatorInput>;
  head?: Maybe<BooleanQueryOperatorInput>;
  anonymize?: Maybe<BooleanQueryOperatorInput>;
  respectDNT?: Maybe<BooleanQueryOperatorInput>;
  pageTransitionDelay?: Maybe<IntQueryOperatorInput>;
  enableWebVitalsTracking?: Maybe<BooleanQueryOperatorInput>;
  pixelId?: Maybe<StringQueryOperatorInput>;
  query?: Maybe<StringQueryOperatorInput>;
  feeds?: Maybe<SitePluginPluginOptionsFeedsFilterListInput>;
  path?: Maybe<StringQueryOperatorInput>;
  pathCheck?: Maybe<BooleanQueryOperatorInput>;
};

export type SitePluginSortInput = {
  fields?: Maybe<Array<Maybe<SitePluginFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SiteSiteMetadata = {
  __typename?: 'SiteSiteMetadata';
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  church?: Maybe<SiteSiteMetadataChurch>;
};

export type SiteSiteMetadataChurch = {
  __typename?: 'SiteSiteMetadataChurch';
  address?: Maybe<Array<Maybe<Scalars['String']>>>;
  phone?: Maybe<Scalars['String']>;
  googleMapsLink?: Maybe<Scalars['String']>;
  googleMapsEmbedSrc?: Maybe<Scalars['String']>;
};

export type SiteSiteMetadataChurchFilterInput = {
  address?: Maybe<StringQueryOperatorInput>;
  phone?: Maybe<StringQueryOperatorInput>;
  googleMapsLink?: Maybe<StringQueryOperatorInput>;
  googleMapsEmbedSrc?: Maybe<StringQueryOperatorInput>;
};

export type SiteSiteMetadataFilterInput = {
  title?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  church?: Maybe<SiteSiteMetadataChurchFilterInput>;
};

export type SiteSortInput = {
  fields?: Maybe<Array<Maybe<SiteFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export enum SortOrderEnum {
  ASC = 'ASC',
  DESC = 'DESC'
}

export type StringQueryOperatorInput = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
};

export type PostCardDetailsFragment = (
  { __typename?: 'SanityPost' }
  & Pick<SanityPost, '_id' | 'date' | 'title' | '_rawSummary' | '_rawThumbnailPoster'>
  & { slug?: Maybe<(
    { __typename?: 'SanitySlug' }
    & Pick<SanitySlug, 'current'>
  )>, thumbnail?: Maybe<(
    { __typename?: 'SanityImage' }
    & { asset?: Maybe<(
      { __typename?: 'SanityImageAsset' }
      & Pick<SanityImageAsset, 'gatsbyImageData'>
    )> }
  )> }
);

export type NewsletterQueryVariables = Exact<{ [key: string]: never; }>;


export type NewsletterQuery = (
  { __typename?: 'Query' }
  & { allSanityNewsletter: (
    { __typename?: 'SanityNewsletterConnection' }
    & { nodes: Array<(
      { __typename?: 'SanityNewsletter' }
      & Pick<SanityNewsletter, '_id' | 'date' | 'link'>
    )> }
  ) }
);

export type SermonUploadQueryVariables = Exact<{ [key: string]: never; }>;


export type SermonUploadQuery = (
  { __typename?: 'Query' }
  & { allSanitySermonUpload: (
    { __typename?: 'SanitySermonUploadConnection' }
    & { nodes: Array<(
      { __typename?: 'SanitySermonUpload' }
      & Pick<SanitySermonUpload, '_id' | 'date' | 'extraInfo'>
      & { audioFile?: Maybe<(
        { __typename?: 'SanityFile' }
        & { asset?: Maybe<(
          { __typename?: 'SanityFileAsset' }
          & Pick<SanityFileAsset, 'url'>
        )> }
      )> }
    )> }
  ) }
);

export type MinistryPageQueryVariables = Exact<{
  _id: Scalars['String'];
}>;


export type MinistryPageQuery = (
  { __typename?: 'Query' }
  & { sanityMinistryPage?: Maybe<(
    { __typename?: 'SanityMinistryPage' }
    & Pick<SanityMinistryPage, 'name' | '_rawContent' | 'subLogoWidth' | '_rawSections'>
    & { subLogo?: Maybe<(
      { __typename?: 'SanityImage' }
      & { asset?: Maybe<(
        { __typename?: 'SanityImageAsset' }
        & Pick<SanityImageAsset, 'gatsbyImageData'>
      )> }
    )>, url?: Maybe<(
      { __typename?: 'SanitySlug' }
      & Pick<SanitySlug, 'current'>
    )>, sections?: Maybe<Array<Maybe<(
      { __typename?: 'SanityPageSection' }
      & Pick<SanityPageSection, '_key' | 'name'>
      & { urlSuffix?: Maybe<(
        { __typename?: 'SanitySlug' }
        & Pick<SanitySlug, 'current'>
      )> }
    )>>> }
  )>, allSanityPost: (
    { __typename?: 'SanityPostConnection' }
    & { nodes: Array<(
      { __typename?: 'SanityPost' }
      & PostCardDetailsFragment
    )> }
  ) }
);

export type PageQueryVariables = Exact<{
  _id: Scalars['String'];
}>;


export type PageQuery = (
  { __typename?: 'Query' }
  & { sanityPage?: Maybe<(
    { __typename?: 'SanityPage' }
    & Pick<SanityPage, 'name' | '_rawContent'>
  )> }
);

export type PostQueryVariables = Exact<{
  _id: Scalars['String'];
}>;


export type PostQuery = (
  { __typename?: 'Query' }
  & { sanityPost?: Maybe<(
    { __typename?: 'SanityPost' }
    & Pick<SanityPost, 'title' | 'date' | '_rawBody' | '_rawSummary'>
  )> }
);

export type AllPostsQueryVariables = Exact<{
  perPage: Scalars['Int'];
  offset: Scalars['Int'];
}>;


export type AllPostsQuery = (
  { __typename?: 'Query' }
  & { allSanityPost: (
    { __typename?: 'SanityPostConnection' }
    & { nodes: Array<(
      { __typename?: 'SanityPost' }
      & PostCardDetailsFragment
    )> }
  ) }
);

export type ChurchInfoQueryVariables = Exact<{ [key: string]: never; }>;


export type ChurchInfoQuery = (
  { __typename?: 'Query' }
  & { site?: Maybe<(
    { __typename?: 'Site' }
    & { siteMetadata?: Maybe<(
      { __typename?: 'SiteSiteMetadata' }
      & { church?: Maybe<(
        { __typename?: 'SiteSiteMetadataChurch' }
        & Pick<SiteSiteMetadataChurch, 'phone' | 'address'>
      )> }
    )> }
  )> }
);

export type GeneralAlertQueryVariables = Exact<{ [key: string]: never; }>;


export type GeneralAlertQuery = (
  { __typename?: 'Query' }
  & { sanityGeneralAlert?: Maybe<(
    { __typename?: 'SanityGeneralAlert' }
    & Pick<SanityGeneralAlert, '_rawContent' | 'active'>
  )> }
);

export type HeaderQueryVariables = Exact<{ [key: string]: never; }>;


export type HeaderQuery = (
  { __typename?: 'Query' }
  & { sanityNavigation?: Maybe<(
    { __typename?: 'SanityNavigation' }
    & { items?: Maybe<Array<Maybe<(
      { __typename: 'SanityNestedMenu' }
      & Pick<SanityNestedMenu, 'text'>
      & { items?: Maybe<Array<Maybe<(
        { __typename?: 'SanityPageLink' }
        & AnyNavLink_SanityPageLink_Fragment
      ) | (
        { __typename?: 'SanityPlainLink' }
        & AnyNavLink_SanityPlainLink_Fragment
      )>>> }
    ) | (
      { __typename: 'SanityPageLink' }
      & AnyNavLink_SanityPageLink_Fragment
    ) | (
      { __typename: 'SanityPlainLink' }
      & AnyNavLink_SanityPlainLink_Fragment
    )>>> }
  )> }
);

type AnyNavLink_SanityPlainLink_Fragment = (
  { __typename: 'SanityPlainLink' }
  & Pick<SanityPlainLink, 'link' | 'text' | 'sameWindow'>
);

type AnyNavLink_SanityPageLink_Fragment = (
  { __typename: 'SanityPageLink' }
  & Pick<SanityPageLink, 'text'>
  & { page?: Maybe<(
    { __typename?: 'SanityMinistryPage' }
    & { url?: Maybe<(
      { __typename?: 'SanitySlug' }
      & Pick<SanitySlug, 'current'>
    )> }
  ) | (
    { __typename?: 'SanityPage' }
    & { url?: Maybe<(
      { __typename?: 'SanitySlug' }
      & Pick<SanitySlug, 'current'>
    )> }
  )> }
);

export type AnyNavLinkFragment = AnyNavLink_SanityPlainLink_Fragment | AnyNavLink_SanityPageLink_Fragment;

export type HeroSectionQueryVariables = Exact<{ [key: string]: never; }>;


export type HeroSectionQuery = (
  { __typename?: 'Query' }
  & { sanityHeroSection?: Maybe<(
    { __typename?: 'SanityHeroSection' }
    & Pick<SanityHeroSection, 'title' | 'subtitle'>
  )>, sanityShortcuts?: Maybe<(
    { __typename?: 'SanityShortcuts' }
    & Pick<SanityShortcuts, '_rawContent'>
  )> }
);

export type ChurchLocationQueryVariables = Exact<{ [key: string]: never; }>;


export type ChurchLocationQuery = (
  { __typename?: 'Query' }
  & { site?: Maybe<(
    { __typename?: 'Site' }
    & { siteMetadata?: Maybe<(
      { __typename?: 'SiteSiteMetadata' }
      & { church?: Maybe<(
        { __typename?: 'SiteSiteMetadataChurch' }
        & Pick<SiteSiteMetadataChurch, 'address' | 'googleMapsLink'>
      )> }
    )> }
  )> }
);

export type RecentPostsQueryVariables = Exact<{ [key: string]: never; }>;


export type RecentPostsQuery = (
  { __typename?: 'Query' }
  & { allSanityPost: (
    { __typename?: 'SanityPostConnection' }
    & { nodes: Array<(
      { __typename?: 'SanityPost' }
      & PostCardDetailsFragment
    )> }
  ) }
);

export type WeeklyScheduleQueryVariables = Exact<{ [key: string]: never; }>;


export type WeeklyScheduleQuery = (
  { __typename?: 'Query' }
  & { allSanityScheduleAlert: (
    { __typename?: 'SanityScheduleAlertConnection' }
    & { nodes: Array<(
      { __typename?: 'SanityScheduleAlert' }
      & Pick<SanityScheduleAlert, 'active' | 'id' | '_rawMessage'>
    )> }
  ), allSanityWeeklySchedule: (
    { __typename?: 'SanityWeeklyScheduleConnection' }
    & { nodes: Array<(
      { __typename?: 'SanityWeeklySchedule' }
      & Pick<SanityWeeklySchedule, '_id'>
      & { days?: Maybe<Array<Maybe<(
        { __typename?: 'SanityWeeklyScheduleDay' }
        & Pick<SanityWeeklyScheduleDay, 'label'>
        & { events?: Maybe<Array<Maybe<(
          { __typename?: 'SanityWeeklyScheduleEvent' }
          & Pick<SanityWeeklyScheduleEvent, 'time' | 'description'>
        )>>> }
      )>>> }
    )> }
  ) }
);
