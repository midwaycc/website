export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
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
  Date: any;
  JSON: any;
};

export type BooleanQueryOperatorInput = {
  eq?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  ne?: InputMaybe<Scalars['Boolean']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
};

export type DateQueryOperatorInput = {
  eq?: InputMaybe<Scalars['Date']>;
  gt?: InputMaybe<Scalars['Date']>;
  gte?: InputMaybe<Scalars['Date']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Date']>>>;
  lt?: InputMaybe<Scalars['Date']>;
  lte?: InputMaybe<Scalars['Date']>;
  ne?: InputMaybe<Scalars['Date']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Date']>>>;
};

export type Directory = Node & {
  __typename?: 'Directory';
  absolutePath: Scalars['String'];
  accessTime: Scalars['Date'];
  atime: Scalars['Date'];
  atimeMs: Scalars['Float'];
  base: Scalars['String'];
  birthTime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  birthtime?: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  birthtimeMs?: Maybe<Scalars['Float']>;
  changeTime: Scalars['Date'];
  children: Array<Node>;
  ctime: Scalars['Date'];
  ctimeMs: Scalars['Float'];
  dev: Scalars['Int'];
  dir: Scalars['String'];
  ext: Scalars['String'];
  extension: Scalars['String'];
  gid: Scalars['Int'];
  id: Scalars['ID'];
  ino: Scalars['Float'];
  internal: Internal;
  mode: Scalars['Int'];
  modifiedTime: Scalars['Date'];
  mtime: Scalars['Date'];
  mtimeMs: Scalars['Float'];
  name: Scalars['String'];
  nlink: Scalars['Int'];
  parent?: Maybe<Node>;
  prettySize: Scalars['String'];
  rdev: Scalars['Int'];
  relativeDirectory: Scalars['String'];
  relativePath: Scalars['String'];
  root: Scalars['String'];
  size: Scalars['Int'];
  sourceInstanceName: Scalars['String'];
  uid: Scalars['Int'];
};


export type DirectoryAccessTimeArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type DirectoryAtimeArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type DirectoryBirthTimeArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type DirectoryChangeTimeArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type DirectoryCtimeArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type DirectoryModifiedTimeArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type DirectoryMtimeArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type DirectoryConnection = {
  __typename?: 'DirectoryConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<DirectoryEdge>;
  group: Array<DirectoryGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<Directory>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type DirectoryConnectionDistinctArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryConnectionGroupArgs = {
  field: DirectoryFieldsEnum;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
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

export type DirectoryEdge = {
  __typename?: 'DirectoryEdge';
  next?: Maybe<Directory>;
  node: Directory;
  previous?: Maybe<Directory>;
};

export enum DirectoryFieldsEnum {
  absolutePath = 'absolutePath',
  accessTime = 'accessTime',
  atime = 'atime',
  atimeMs = 'atimeMs',
  base = 'base',
  birthTime = 'birthTime',
  birthtime = 'birthtime',
  birthtimeMs = 'birthtimeMs',
  changeTime = 'changeTime',
  children = 'children',
  children___children = 'children___children',
  children___children___children = 'children___children___children',
  children___children___children___children = 'children___children___children___children',
  children___children___children___id = 'children___children___children___id',
  children___children___id = 'children___children___id',
  children___children___internal___content = 'children___children___internal___content',
  children___children___internal___contentDigest = 'children___children___internal___contentDigest',
  children___children___internal___description = 'children___children___internal___description',
  children___children___internal___fieldOwners = 'children___children___internal___fieldOwners',
  children___children___internal___ignoreType = 'children___children___internal___ignoreType',
  children___children___internal___mediaType = 'children___children___internal___mediaType',
  children___children___internal___owner = 'children___children___internal___owner',
  children___children___internal___type = 'children___children___internal___type',
  children___children___parent___children = 'children___children___parent___children',
  children___children___parent___id = 'children___children___parent___id',
  children___id = 'children___id',
  children___internal___content = 'children___internal___content',
  children___internal___contentDigest = 'children___internal___contentDigest',
  children___internal___description = 'children___internal___description',
  children___internal___fieldOwners = 'children___internal___fieldOwners',
  children___internal___ignoreType = 'children___internal___ignoreType',
  children___internal___mediaType = 'children___internal___mediaType',
  children___internal___owner = 'children___internal___owner',
  children___internal___type = 'children___internal___type',
  children___parent___children = 'children___parent___children',
  children___parent___children___children = 'children___parent___children___children',
  children___parent___children___id = 'children___parent___children___id',
  children___parent___id = 'children___parent___id',
  children___parent___internal___content = 'children___parent___internal___content',
  children___parent___internal___contentDigest = 'children___parent___internal___contentDigest',
  children___parent___internal___description = 'children___parent___internal___description',
  children___parent___internal___fieldOwners = 'children___parent___internal___fieldOwners',
  children___parent___internal___ignoreType = 'children___parent___internal___ignoreType',
  children___parent___internal___mediaType = 'children___parent___internal___mediaType',
  children___parent___internal___owner = 'children___parent___internal___owner',
  children___parent___internal___type = 'children___parent___internal___type',
  children___parent___parent___children = 'children___parent___parent___children',
  children___parent___parent___id = 'children___parent___parent___id',
  ctime = 'ctime',
  ctimeMs = 'ctimeMs',
  dev = 'dev',
  dir = 'dir',
  ext = 'ext',
  extension = 'extension',
  gid = 'gid',
  id = 'id',
  ino = 'ino',
  internal___content = 'internal___content',
  internal___contentDigest = 'internal___contentDigest',
  internal___description = 'internal___description',
  internal___fieldOwners = 'internal___fieldOwners',
  internal___ignoreType = 'internal___ignoreType',
  internal___mediaType = 'internal___mediaType',
  internal___owner = 'internal___owner',
  internal___type = 'internal___type',
  mode = 'mode',
  modifiedTime = 'modifiedTime',
  mtime = 'mtime',
  mtimeMs = 'mtimeMs',
  name = 'name',
  nlink = 'nlink',
  parent___children = 'parent___children',
  parent___children___children = 'parent___children___children',
  parent___children___children___children = 'parent___children___children___children',
  parent___children___children___id = 'parent___children___children___id',
  parent___children___id = 'parent___children___id',
  parent___children___internal___content = 'parent___children___internal___content',
  parent___children___internal___contentDigest = 'parent___children___internal___contentDigest',
  parent___children___internal___description = 'parent___children___internal___description',
  parent___children___internal___fieldOwners = 'parent___children___internal___fieldOwners',
  parent___children___internal___ignoreType = 'parent___children___internal___ignoreType',
  parent___children___internal___mediaType = 'parent___children___internal___mediaType',
  parent___children___internal___owner = 'parent___children___internal___owner',
  parent___children___internal___type = 'parent___children___internal___type',
  parent___children___parent___children = 'parent___children___parent___children',
  parent___children___parent___id = 'parent___children___parent___id',
  parent___id = 'parent___id',
  parent___internal___content = 'parent___internal___content',
  parent___internal___contentDigest = 'parent___internal___contentDigest',
  parent___internal___description = 'parent___internal___description',
  parent___internal___fieldOwners = 'parent___internal___fieldOwners',
  parent___internal___ignoreType = 'parent___internal___ignoreType',
  parent___internal___mediaType = 'parent___internal___mediaType',
  parent___internal___owner = 'parent___internal___owner',
  parent___internal___type = 'parent___internal___type',
  parent___parent___children = 'parent___parent___children',
  parent___parent___children___children = 'parent___parent___children___children',
  parent___parent___children___id = 'parent___parent___children___id',
  parent___parent___id = 'parent___parent___id',
  parent___parent___internal___content = 'parent___parent___internal___content',
  parent___parent___internal___contentDigest = 'parent___parent___internal___contentDigest',
  parent___parent___internal___description = 'parent___parent___internal___description',
  parent___parent___internal___fieldOwners = 'parent___parent___internal___fieldOwners',
  parent___parent___internal___ignoreType = 'parent___parent___internal___ignoreType',
  parent___parent___internal___mediaType = 'parent___parent___internal___mediaType',
  parent___parent___internal___owner = 'parent___parent___internal___owner',
  parent___parent___internal___type = 'parent___parent___internal___type',
  parent___parent___parent___children = 'parent___parent___parent___children',
  parent___parent___parent___id = 'parent___parent___parent___id',
  prettySize = 'prettySize',
  rdev = 'rdev',
  relativeDirectory = 'relativeDirectory',
  relativePath = 'relativePath',
  root = 'root',
  size = 'size',
  sourceInstanceName = 'sourceInstanceName',
  uid = 'uid'
}

export type DirectoryFilterInput = {
  absolutePath?: InputMaybe<StringQueryOperatorInput>;
  accessTime?: InputMaybe<DateQueryOperatorInput>;
  atime?: InputMaybe<DateQueryOperatorInput>;
  atimeMs?: InputMaybe<FloatQueryOperatorInput>;
  base?: InputMaybe<StringQueryOperatorInput>;
  birthTime?: InputMaybe<DateQueryOperatorInput>;
  birthtime?: InputMaybe<DateQueryOperatorInput>;
  birthtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  changeTime?: InputMaybe<DateQueryOperatorInput>;
  children?: InputMaybe<NodeFilterListInput>;
  ctime?: InputMaybe<DateQueryOperatorInput>;
  ctimeMs?: InputMaybe<FloatQueryOperatorInput>;
  dev?: InputMaybe<IntQueryOperatorInput>;
  dir?: InputMaybe<StringQueryOperatorInput>;
  ext?: InputMaybe<StringQueryOperatorInput>;
  extension?: InputMaybe<StringQueryOperatorInput>;
  gid?: InputMaybe<IntQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  ino?: InputMaybe<FloatQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  mode?: InputMaybe<IntQueryOperatorInput>;
  modifiedTime?: InputMaybe<DateQueryOperatorInput>;
  mtime?: InputMaybe<DateQueryOperatorInput>;
  mtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  nlink?: InputMaybe<IntQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  prettySize?: InputMaybe<StringQueryOperatorInput>;
  rdev?: InputMaybe<IntQueryOperatorInput>;
  relativeDirectory?: InputMaybe<StringQueryOperatorInput>;
  relativePath?: InputMaybe<StringQueryOperatorInput>;
  root?: InputMaybe<StringQueryOperatorInput>;
  size?: InputMaybe<IntQueryOperatorInput>;
  sourceInstanceName?: InputMaybe<StringQueryOperatorInput>;
  uid?: InputMaybe<IntQueryOperatorInput>;
};

export type DirectoryGroupConnection = {
  __typename?: 'DirectoryGroupConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<DirectoryEdge>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
  group: Array<DirectoryGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<Directory>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type DirectoryGroupConnectionDistinctArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryGroupConnectionGroupArgs = {
  field: DirectoryFieldsEnum;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type DirectoryGroupConnectionMaxArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryGroupConnectionMinArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryGroupConnectionSumArgs = {
  field: DirectoryFieldsEnum;
};

export type DirectorySortInput = {
  fields?: InputMaybe<Array<InputMaybe<DirectoryFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type File = Node & {
  __typename?: 'File';
  absolutePath: Scalars['String'];
  accessTime: Scalars['Date'];
  atime: Scalars['Date'];
  atimeMs: Scalars['Float'];
  base: Scalars['String'];
  birthTime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  birthtime?: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  birthtimeMs?: Maybe<Scalars['Float']>;
  changeTime: Scalars['Date'];
  children: Array<Node>;
  ctime: Scalars['Date'];
  ctimeMs: Scalars['Float'];
  dev: Scalars['Int'];
  dir: Scalars['String'];
  ext: Scalars['String'];
  extension: Scalars['String'];
  gid: Scalars['Int'];
  id: Scalars['ID'];
  ino: Scalars['Float'];
  internal: Internal;
  mode: Scalars['Int'];
  modifiedTime: Scalars['Date'];
  mtime: Scalars['Date'];
  mtimeMs: Scalars['Float'];
  name: Scalars['String'];
  nlink: Scalars['Int'];
  parent?: Maybe<Node>;
  prettySize: Scalars['String'];
  rdev: Scalars['Int'];
  relativeDirectory: Scalars['String'];
  relativePath: Scalars['String'];
  root: Scalars['String'];
  size: Scalars['Int'];
  sourceInstanceName: Scalars['String'];
  uid: Scalars['Int'];
};


export type FileAccessTimeArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type FileAtimeArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type FileBirthTimeArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type FileChangeTimeArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type FileCtimeArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type FileModifiedTimeArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type FileMtimeArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type FileConnection = {
  __typename?: 'FileConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<FileEdge>;
  group: Array<FileGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<File>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type FileConnectionDistinctArgs = {
  field: FileFieldsEnum;
};


export type FileConnectionGroupArgs = {
  field: FileFieldsEnum;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
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

export type FileEdge = {
  __typename?: 'FileEdge';
  next?: Maybe<File>;
  node: File;
  previous?: Maybe<File>;
};

export enum FileFieldsEnum {
  absolutePath = 'absolutePath',
  accessTime = 'accessTime',
  atime = 'atime',
  atimeMs = 'atimeMs',
  base = 'base',
  birthTime = 'birthTime',
  birthtime = 'birthtime',
  birthtimeMs = 'birthtimeMs',
  changeTime = 'changeTime',
  children = 'children',
  children___children = 'children___children',
  children___children___children = 'children___children___children',
  children___children___children___children = 'children___children___children___children',
  children___children___children___id = 'children___children___children___id',
  children___children___id = 'children___children___id',
  children___children___internal___content = 'children___children___internal___content',
  children___children___internal___contentDigest = 'children___children___internal___contentDigest',
  children___children___internal___description = 'children___children___internal___description',
  children___children___internal___fieldOwners = 'children___children___internal___fieldOwners',
  children___children___internal___ignoreType = 'children___children___internal___ignoreType',
  children___children___internal___mediaType = 'children___children___internal___mediaType',
  children___children___internal___owner = 'children___children___internal___owner',
  children___children___internal___type = 'children___children___internal___type',
  children___children___parent___children = 'children___children___parent___children',
  children___children___parent___id = 'children___children___parent___id',
  children___id = 'children___id',
  children___internal___content = 'children___internal___content',
  children___internal___contentDigest = 'children___internal___contentDigest',
  children___internal___description = 'children___internal___description',
  children___internal___fieldOwners = 'children___internal___fieldOwners',
  children___internal___ignoreType = 'children___internal___ignoreType',
  children___internal___mediaType = 'children___internal___mediaType',
  children___internal___owner = 'children___internal___owner',
  children___internal___type = 'children___internal___type',
  children___parent___children = 'children___parent___children',
  children___parent___children___children = 'children___parent___children___children',
  children___parent___children___id = 'children___parent___children___id',
  children___parent___id = 'children___parent___id',
  children___parent___internal___content = 'children___parent___internal___content',
  children___parent___internal___contentDigest = 'children___parent___internal___contentDigest',
  children___parent___internal___description = 'children___parent___internal___description',
  children___parent___internal___fieldOwners = 'children___parent___internal___fieldOwners',
  children___parent___internal___ignoreType = 'children___parent___internal___ignoreType',
  children___parent___internal___mediaType = 'children___parent___internal___mediaType',
  children___parent___internal___owner = 'children___parent___internal___owner',
  children___parent___internal___type = 'children___parent___internal___type',
  children___parent___parent___children = 'children___parent___parent___children',
  children___parent___parent___id = 'children___parent___parent___id',
  ctime = 'ctime',
  ctimeMs = 'ctimeMs',
  dev = 'dev',
  dir = 'dir',
  ext = 'ext',
  extension = 'extension',
  gid = 'gid',
  id = 'id',
  ino = 'ino',
  internal___content = 'internal___content',
  internal___contentDigest = 'internal___contentDigest',
  internal___description = 'internal___description',
  internal___fieldOwners = 'internal___fieldOwners',
  internal___ignoreType = 'internal___ignoreType',
  internal___mediaType = 'internal___mediaType',
  internal___owner = 'internal___owner',
  internal___type = 'internal___type',
  mode = 'mode',
  modifiedTime = 'modifiedTime',
  mtime = 'mtime',
  mtimeMs = 'mtimeMs',
  name = 'name',
  nlink = 'nlink',
  parent___children = 'parent___children',
  parent___children___children = 'parent___children___children',
  parent___children___children___children = 'parent___children___children___children',
  parent___children___children___id = 'parent___children___children___id',
  parent___children___id = 'parent___children___id',
  parent___children___internal___content = 'parent___children___internal___content',
  parent___children___internal___contentDigest = 'parent___children___internal___contentDigest',
  parent___children___internal___description = 'parent___children___internal___description',
  parent___children___internal___fieldOwners = 'parent___children___internal___fieldOwners',
  parent___children___internal___ignoreType = 'parent___children___internal___ignoreType',
  parent___children___internal___mediaType = 'parent___children___internal___mediaType',
  parent___children___internal___owner = 'parent___children___internal___owner',
  parent___children___internal___type = 'parent___children___internal___type',
  parent___children___parent___children = 'parent___children___parent___children',
  parent___children___parent___id = 'parent___children___parent___id',
  parent___id = 'parent___id',
  parent___internal___content = 'parent___internal___content',
  parent___internal___contentDigest = 'parent___internal___contentDigest',
  parent___internal___description = 'parent___internal___description',
  parent___internal___fieldOwners = 'parent___internal___fieldOwners',
  parent___internal___ignoreType = 'parent___internal___ignoreType',
  parent___internal___mediaType = 'parent___internal___mediaType',
  parent___internal___owner = 'parent___internal___owner',
  parent___internal___type = 'parent___internal___type',
  parent___parent___children = 'parent___parent___children',
  parent___parent___children___children = 'parent___parent___children___children',
  parent___parent___children___id = 'parent___parent___children___id',
  parent___parent___id = 'parent___parent___id',
  parent___parent___internal___content = 'parent___parent___internal___content',
  parent___parent___internal___contentDigest = 'parent___parent___internal___contentDigest',
  parent___parent___internal___description = 'parent___parent___internal___description',
  parent___parent___internal___fieldOwners = 'parent___parent___internal___fieldOwners',
  parent___parent___internal___ignoreType = 'parent___parent___internal___ignoreType',
  parent___parent___internal___mediaType = 'parent___parent___internal___mediaType',
  parent___parent___internal___owner = 'parent___parent___internal___owner',
  parent___parent___internal___type = 'parent___parent___internal___type',
  parent___parent___parent___children = 'parent___parent___parent___children',
  parent___parent___parent___id = 'parent___parent___parent___id',
  prettySize = 'prettySize',
  rdev = 'rdev',
  relativeDirectory = 'relativeDirectory',
  relativePath = 'relativePath',
  root = 'root',
  size = 'size',
  sourceInstanceName = 'sourceInstanceName',
  uid = 'uid'
}

export type FileFilterInput = {
  absolutePath?: InputMaybe<StringQueryOperatorInput>;
  accessTime?: InputMaybe<DateQueryOperatorInput>;
  atime?: InputMaybe<DateQueryOperatorInput>;
  atimeMs?: InputMaybe<FloatQueryOperatorInput>;
  base?: InputMaybe<StringQueryOperatorInput>;
  birthTime?: InputMaybe<DateQueryOperatorInput>;
  birthtime?: InputMaybe<DateQueryOperatorInput>;
  birthtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  changeTime?: InputMaybe<DateQueryOperatorInput>;
  children?: InputMaybe<NodeFilterListInput>;
  ctime?: InputMaybe<DateQueryOperatorInput>;
  ctimeMs?: InputMaybe<FloatQueryOperatorInput>;
  dev?: InputMaybe<IntQueryOperatorInput>;
  dir?: InputMaybe<StringQueryOperatorInput>;
  ext?: InputMaybe<StringQueryOperatorInput>;
  extension?: InputMaybe<StringQueryOperatorInput>;
  gid?: InputMaybe<IntQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  ino?: InputMaybe<FloatQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  mode?: InputMaybe<IntQueryOperatorInput>;
  modifiedTime?: InputMaybe<DateQueryOperatorInput>;
  mtime?: InputMaybe<DateQueryOperatorInput>;
  mtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  nlink?: InputMaybe<IntQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  prettySize?: InputMaybe<StringQueryOperatorInput>;
  rdev?: InputMaybe<IntQueryOperatorInput>;
  relativeDirectory?: InputMaybe<StringQueryOperatorInput>;
  relativePath?: InputMaybe<StringQueryOperatorInput>;
  root?: InputMaybe<StringQueryOperatorInput>;
  size?: InputMaybe<IntQueryOperatorInput>;
  sourceInstanceName?: InputMaybe<StringQueryOperatorInput>;
  uid?: InputMaybe<IntQueryOperatorInput>;
};

export type FileGroupConnection = {
  __typename?: 'FileGroupConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<FileEdge>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
  group: Array<FileGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<File>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type FileGroupConnectionDistinctArgs = {
  field: FileFieldsEnum;
};


export type FileGroupConnectionGroupArgs = {
  field: FileFieldsEnum;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type FileGroupConnectionMaxArgs = {
  field: FileFieldsEnum;
};


export type FileGroupConnectionMinArgs = {
  field: FileFieldsEnum;
};


export type FileGroupConnectionSumArgs = {
  field: FileFieldsEnum;
};

export type FileSortInput = {
  fields?: InputMaybe<Array<InputMaybe<FileFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type FloatQueryOperatorInput = {
  eq?: InputMaybe<Scalars['Float']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  ne?: InputMaybe<Scalars['Float']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
};

export enum GatsbyImageFormat {
  AUTO = 'AUTO',
  AVIF = 'AVIF',
  JPG = 'JPG',
  NO_CHANGE = 'NO_CHANGE',
  PNG = 'PNG',
  WEBP = 'WEBP'
}

export enum GatsbyImageLayout {
  CONSTRAINED = 'CONSTRAINED',
  FIXED = 'FIXED',
  FULL_WIDTH = 'FULL_WIDTH'
}

export enum GatsbyImagePlaceholder {
  BLURRED = 'BLURRED',
  DOMINANT_COLOR = 'DOMINANT_COLOR',
  NONE = 'NONE',
  TRACED_SVG = 'TRACED_SVG'
}

export type IntQueryOperatorInput = {
  eq?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  ne?: InputMaybe<Scalars['Int']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
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
  content?: InputMaybe<StringQueryOperatorInput>;
  contentDigest?: InputMaybe<StringQueryOperatorInput>;
  description?: InputMaybe<StringQueryOperatorInput>;
  fieldOwners?: InputMaybe<StringQueryOperatorInput>;
  ignoreType?: InputMaybe<BooleanQueryOperatorInput>;
  mediaType?: InputMaybe<StringQueryOperatorInput>;
  owner?: InputMaybe<StringQueryOperatorInput>;
  type?: InputMaybe<StringQueryOperatorInput>;
};

export type JsonQueryOperatorInput = {
  eq?: InputMaybe<Scalars['JSON']>;
  glob?: InputMaybe<Scalars['JSON']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  ne?: InputMaybe<Scalars['JSON']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  regex?: InputMaybe<Scalars['JSON']>;
};

/** Node Interface */
export type Node = {
  children: Array<Node>;
  id: Scalars['ID'];
  internal: Internal;
  parent?: Maybe<Node>;
};

export type NodeFilterInput = {
  children?: InputMaybe<NodeFilterListInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  parent?: InputMaybe<NodeFilterInput>;
};

export type NodeFilterListInput = {
  elemMatch?: InputMaybe<NodeFilterInput>;
};

export type PageInfo = {
  __typename?: 'PageInfo';
  currentPage: Scalars['Int'];
  hasNextPage: Scalars['Boolean'];
  hasPreviousPage: Scalars['Boolean'];
  itemCount: Scalars['Int'];
  pageCount: Scalars['Int'];
  perPage?: Maybe<Scalars['Int']>;
  totalCount: Scalars['Int'];
};

export type Query = {
  __typename?: 'Query';
  allDirectory: DirectoryConnection;
  allFile: FileConnection;
  allSanityFileAsset: SanityFileAssetConnection;
  allSanityGeneralAlert: SanityGeneralAlertConnection;
  allSanityHeroSection: SanityHeroSectionConnection;
  allSanityImageAsset: SanityImageAssetConnection;
  allSanityMinistryPage: SanityMinistryPageConnection;
  allSanityNavigation: SanityNavigationConnection;
  allSanityNewsletter: SanityNewsletterConnection;
  allSanityPage: SanityPageConnection;
  allSanityPost: SanityPostConnection;
  allSanityPoster: SanityPosterConnection;
  allSanityScheduleAlert: SanityScheduleAlertConnection;
  allSanitySermonUpload: SanitySermonUploadConnection;
  allSanityShortcuts: SanityShortcutsConnection;
  allSanityWeeklySchedule: SanityWeeklyScheduleConnection;
  allSite: SiteConnection;
  allSiteBuildMetadata: SiteBuildMetadataConnection;
  allSiteFunction: SiteFunctionConnection;
  allSitePage: SitePageConnection;
  allSitePlugin: SitePluginConnection;
  directory?: Maybe<Directory>;
  file?: Maybe<File>;
  sanityFileAsset?: Maybe<SanityFileAsset>;
  sanityGeneralAlert?: Maybe<SanityGeneralAlert>;
  sanityHeroSection?: Maybe<SanityHeroSection>;
  sanityImageAsset?: Maybe<SanityImageAsset>;
  sanityMinistryPage?: Maybe<SanityMinistryPage>;
  sanityNavigation?: Maybe<SanityNavigation>;
  sanityNewsletter?: Maybe<SanityNewsletter>;
  sanityPage?: Maybe<SanityPage>;
  sanityPost?: Maybe<SanityPost>;
  sanityPoster?: Maybe<SanityPoster>;
  sanityScheduleAlert?: Maybe<SanityScheduleAlert>;
  sanitySermonUpload?: Maybe<SanitySermonUpload>;
  sanityShortcuts?: Maybe<SanityShortcuts>;
  sanityWeeklySchedule?: Maybe<SanityWeeklySchedule>;
  site?: Maybe<Site>;
  siteBuildMetadata?: Maybe<SiteBuildMetadata>;
  siteFunction?: Maybe<SiteFunction>;
  sitePage?: Maybe<SitePage>;
  sitePlugin?: Maybe<SitePlugin>;
};


export type QueryAllDirectoryArgs = {
  filter?: InputMaybe<DirectoryFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<DirectorySortInput>;
};


export type QueryAllFileArgs = {
  filter?: InputMaybe<FileFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<FileSortInput>;
};


export type QueryAllSanityFileAssetArgs = {
  filter?: InputMaybe<SanityFileAssetFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<SanityFileAssetSortInput>;
};


export type QueryAllSanityGeneralAlertArgs = {
  filter?: InputMaybe<SanityGeneralAlertFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<SanityGeneralAlertSortInput>;
};


export type QueryAllSanityHeroSectionArgs = {
  filter?: InputMaybe<SanityHeroSectionFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<SanityHeroSectionSortInput>;
};


export type QueryAllSanityImageAssetArgs = {
  filter?: InputMaybe<SanityImageAssetFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<SanityImageAssetSortInput>;
};


export type QueryAllSanityMinistryPageArgs = {
  filter?: InputMaybe<SanityMinistryPageFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<SanityMinistryPageSortInput>;
};


export type QueryAllSanityNavigationArgs = {
  filter?: InputMaybe<SanityNavigationFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<SanityNavigationSortInput>;
};


export type QueryAllSanityNewsletterArgs = {
  filter?: InputMaybe<SanityNewsletterFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<SanityNewsletterSortInput>;
};


export type QueryAllSanityPageArgs = {
  filter?: InputMaybe<SanityPageFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<SanityPageSortInput>;
};


export type QueryAllSanityPostArgs = {
  filter?: InputMaybe<SanityPostFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<SanityPostSortInput>;
};


export type QueryAllSanityPosterArgs = {
  filter?: InputMaybe<SanityPosterFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<SanityPosterSortInput>;
};


export type QueryAllSanityScheduleAlertArgs = {
  filter?: InputMaybe<SanityScheduleAlertFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<SanityScheduleAlertSortInput>;
};


export type QueryAllSanitySermonUploadArgs = {
  filter?: InputMaybe<SanitySermonUploadFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<SanitySermonUploadSortInput>;
};


export type QueryAllSanityShortcutsArgs = {
  filter?: InputMaybe<SanityShortcutsFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<SanityShortcutsSortInput>;
};


export type QueryAllSanityWeeklyScheduleArgs = {
  filter?: InputMaybe<SanityWeeklyScheduleFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<SanityWeeklyScheduleSortInput>;
};


export type QueryAllSiteArgs = {
  filter?: InputMaybe<SiteFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<SiteSortInput>;
};


export type QueryAllSiteBuildMetadataArgs = {
  filter?: InputMaybe<SiteBuildMetadataFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<SiteBuildMetadataSortInput>;
};


export type QueryAllSiteFunctionArgs = {
  filter?: InputMaybe<SiteFunctionFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<SiteFunctionSortInput>;
};


export type QueryAllSitePageArgs = {
  filter?: InputMaybe<SitePageFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<SitePageSortInput>;
};


export type QueryAllSitePluginArgs = {
  filter?: InputMaybe<SitePluginFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<SitePluginSortInput>;
};


export type QueryDirectoryArgs = {
  absolutePath?: InputMaybe<StringQueryOperatorInput>;
  accessTime?: InputMaybe<DateQueryOperatorInput>;
  atime?: InputMaybe<DateQueryOperatorInput>;
  atimeMs?: InputMaybe<FloatQueryOperatorInput>;
  base?: InputMaybe<StringQueryOperatorInput>;
  birthTime?: InputMaybe<DateQueryOperatorInput>;
  birthtime?: InputMaybe<DateQueryOperatorInput>;
  birthtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  changeTime?: InputMaybe<DateQueryOperatorInput>;
  children?: InputMaybe<NodeFilterListInput>;
  ctime?: InputMaybe<DateQueryOperatorInput>;
  ctimeMs?: InputMaybe<FloatQueryOperatorInput>;
  dev?: InputMaybe<IntQueryOperatorInput>;
  dir?: InputMaybe<StringQueryOperatorInput>;
  ext?: InputMaybe<StringQueryOperatorInput>;
  extension?: InputMaybe<StringQueryOperatorInput>;
  gid?: InputMaybe<IntQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  ino?: InputMaybe<FloatQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  mode?: InputMaybe<IntQueryOperatorInput>;
  modifiedTime?: InputMaybe<DateQueryOperatorInput>;
  mtime?: InputMaybe<DateQueryOperatorInput>;
  mtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  nlink?: InputMaybe<IntQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  prettySize?: InputMaybe<StringQueryOperatorInput>;
  rdev?: InputMaybe<IntQueryOperatorInput>;
  relativeDirectory?: InputMaybe<StringQueryOperatorInput>;
  relativePath?: InputMaybe<StringQueryOperatorInput>;
  root?: InputMaybe<StringQueryOperatorInput>;
  size?: InputMaybe<IntQueryOperatorInput>;
  sourceInstanceName?: InputMaybe<StringQueryOperatorInput>;
  uid?: InputMaybe<IntQueryOperatorInput>;
};


export type QueryFileArgs = {
  absolutePath?: InputMaybe<StringQueryOperatorInput>;
  accessTime?: InputMaybe<DateQueryOperatorInput>;
  atime?: InputMaybe<DateQueryOperatorInput>;
  atimeMs?: InputMaybe<FloatQueryOperatorInput>;
  base?: InputMaybe<StringQueryOperatorInput>;
  birthTime?: InputMaybe<DateQueryOperatorInput>;
  birthtime?: InputMaybe<DateQueryOperatorInput>;
  birthtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  changeTime?: InputMaybe<DateQueryOperatorInput>;
  children?: InputMaybe<NodeFilterListInput>;
  ctime?: InputMaybe<DateQueryOperatorInput>;
  ctimeMs?: InputMaybe<FloatQueryOperatorInput>;
  dev?: InputMaybe<IntQueryOperatorInput>;
  dir?: InputMaybe<StringQueryOperatorInput>;
  ext?: InputMaybe<StringQueryOperatorInput>;
  extension?: InputMaybe<StringQueryOperatorInput>;
  gid?: InputMaybe<IntQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  ino?: InputMaybe<FloatQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  mode?: InputMaybe<IntQueryOperatorInput>;
  modifiedTime?: InputMaybe<DateQueryOperatorInput>;
  mtime?: InputMaybe<DateQueryOperatorInput>;
  mtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  nlink?: InputMaybe<IntQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  prettySize?: InputMaybe<StringQueryOperatorInput>;
  rdev?: InputMaybe<IntQueryOperatorInput>;
  relativeDirectory?: InputMaybe<StringQueryOperatorInput>;
  relativePath?: InputMaybe<StringQueryOperatorInput>;
  root?: InputMaybe<StringQueryOperatorInput>;
  size?: InputMaybe<IntQueryOperatorInput>;
  sourceInstanceName?: InputMaybe<StringQueryOperatorInput>;
  uid?: InputMaybe<IntQueryOperatorInput>;
};


export type QuerySanityFileAssetArgs = {
  _createdAt?: InputMaybe<DateQueryOperatorInput>;
  _id?: InputMaybe<StringQueryOperatorInput>;
  _key?: InputMaybe<StringQueryOperatorInput>;
  _rawSource?: InputMaybe<JsonQueryOperatorInput>;
  _rev?: InputMaybe<StringQueryOperatorInput>;
  _type?: InputMaybe<StringQueryOperatorInput>;
  _updatedAt?: InputMaybe<DateQueryOperatorInput>;
  altText?: InputMaybe<StringQueryOperatorInput>;
  assetId?: InputMaybe<StringQueryOperatorInput>;
  children?: InputMaybe<NodeFilterListInput>;
  description?: InputMaybe<StringQueryOperatorInput>;
  extension?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  label?: InputMaybe<StringQueryOperatorInput>;
  mimeType?: InputMaybe<StringQueryOperatorInput>;
  originalFilename?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  path?: InputMaybe<StringQueryOperatorInput>;
  sha1hash?: InputMaybe<StringQueryOperatorInput>;
  size?: InputMaybe<FloatQueryOperatorInput>;
  source?: InputMaybe<SanityAssetSourceDataFilterInput>;
  title?: InputMaybe<StringQueryOperatorInput>;
  url?: InputMaybe<StringQueryOperatorInput>;
};


export type QuerySanityGeneralAlertArgs = {
  _createdAt?: InputMaybe<DateQueryOperatorInput>;
  _id?: InputMaybe<StringQueryOperatorInput>;
  _key?: InputMaybe<StringQueryOperatorInput>;
  _rawContent?: InputMaybe<JsonQueryOperatorInput>;
  _rev?: InputMaybe<StringQueryOperatorInput>;
  _type?: InputMaybe<StringQueryOperatorInput>;
  _updatedAt?: InputMaybe<DateQueryOperatorInput>;
  active?: InputMaybe<BooleanQueryOperatorInput>;
  children?: InputMaybe<NodeFilterListInput>;
  content?: InputMaybe<SanityBlockFilterListInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  parent?: InputMaybe<NodeFilterInput>;
};


export type QuerySanityHeroSectionArgs = {
  _createdAt?: InputMaybe<DateQueryOperatorInput>;
  _id?: InputMaybe<StringQueryOperatorInput>;
  _key?: InputMaybe<StringQueryOperatorInput>;
  _rawVideo?: InputMaybe<JsonQueryOperatorInput>;
  _rev?: InputMaybe<StringQueryOperatorInput>;
  _type?: InputMaybe<StringQueryOperatorInput>;
  _updatedAt?: InputMaybe<DateQueryOperatorInput>;
  children?: InputMaybe<NodeFilterListInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  parent?: InputMaybe<NodeFilterInput>;
  subtitle?: InputMaybe<StringQueryOperatorInput>;
  title?: InputMaybe<StringQueryOperatorInput>;
  video?: InputMaybe<SanityFileFilterInput>;
};


export type QuerySanityImageAssetArgs = {
  _createdAt?: InputMaybe<DateQueryOperatorInput>;
  _id?: InputMaybe<StringQueryOperatorInput>;
  _key?: InputMaybe<StringQueryOperatorInput>;
  _rawMetadata?: InputMaybe<JsonQueryOperatorInput>;
  _rawSource?: InputMaybe<JsonQueryOperatorInput>;
  _rev?: InputMaybe<StringQueryOperatorInput>;
  _type?: InputMaybe<StringQueryOperatorInput>;
  _updatedAt?: InputMaybe<DateQueryOperatorInput>;
  altText?: InputMaybe<StringQueryOperatorInput>;
  assetId?: InputMaybe<StringQueryOperatorInput>;
  children?: InputMaybe<NodeFilterListInput>;
  description?: InputMaybe<StringQueryOperatorInput>;
  extension?: InputMaybe<StringQueryOperatorInput>;
  gatsbyImageData?: InputMaybe<JsonQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  label?: InputMaybe<StringQueryOperatorInput>;
  metadata?: InputMaybe<SanityImageMetadataFilterInput>;
  mimeType?: InputMaybe<StringQueryOperatorInput>;
  originalFilename?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  path?: InputMaybe<StringQueryOperatorInput>;
  sha1hash?: InputMaybe<StringQueryOperatorInput>;
  size?: InputMaybe<FloatQueryOperatorInput>;
  source?: InputMaybe<SanityAssetSourceDataFilterInput>;
  title?: InputMaybe<StringQueryOperatorInput>;
  uploadId?: InputMaybe<StringQueryOperatorInput>;
  url?: InputMaybe<StringQueryOperatorInput>;
};


export type QuerySanityMinistryPageArgs = {
  _createdAt?: InputMaybe<DateQueryOperatorInput>;
  _id?: InputMaybe<StringQueryOperatorInput>;
  _key?: InputMaybe<StringQueryOperatorInput>;
  _rawContent?: InputMaybe<JsonQueryOperatorInput>;
  _rawSections?: InputMaybe<JsonQueryOperatorInput>;
  _rawSubLogo?: InputMaybe<JsonQueryOperatorInput>;
  _rawUrl?: InputMaybe<JsonQueryOperatorInput>;
  _rev?: InputMaybe<StringQueryOperatorInput>;
  _type?: InputMaybe<StringQueryOperatorInput>;
  _updatedAt?: InputMaybe<DateQueryOperatorInput>;
  children?: InputMaybe<NodeFilterListInput>;
  content?: InputMaybe<SanityBlockFilterListInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  sections?: InputMaybe<SanityPageSectionFilterListInput>;
  subLogo?: InputMaybe<SanityImageFilterInput>;
  subLogoWidth?: InputMaybe<FloatQueryOperatorInput>;
  url?: InputMaybe<SanitySlugFilterInput>;
};


export type QuerySanityNavigationArgs = {
  _createdAt?: InputMaybe<DateQueryOperatorInput>;
  _id?: InputMaybe<StringQueryOperatorInput>;
  _key?: InputMaybe<StringQueryOperatorInput>;
  _rawItems?: InputMaybe<JsonQueryOperatorInput>;
  _rev?: InputMaybe<StringQueryOperatorInput>;
  _type?: InputMaybe<StringQueryOperatorInput>;
  _updatedAt?: InputMaybe<DateQueryOperatorInput>;
  children?: InputMaybe<NodeFilterListInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  parent?: InputMaybe<NodeFilterInput>;
};


export type QuerySanityNewsletterArgs = {
  _createdAt?: InputMaybe<DateQueryOperatorInput>;
  _id?: InputMaybe<StringQueryOperatorInput>;
  _key?: InputMaybe<StringQueryOperatorInput>;
  _rev?: InputMaybe<StringQueryOperatorInput>;
  _type?: InputMaybe<StringQueryOperatorInput>;
  _updatedAt?: InputMaybe<DateQueryOperatorInput>;
  children?: InputMaybe<NodeFilterListInput>;
  date?: InputMaybe<DateQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  link?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
};


export type QuerySanityPageArgs = {
  _createdAt?: InputMaybe<DateQueryOperatorInput>;
  _id?: InputMaybe<StringQueryOperatorInput>;
  _key?: InputMaybe<StringQueryOperatorInput>;
  _rawContent?: InputMaybe<JsonQueryOperatorInput>;
  _rawUrl?: InputMaybe<JsonQueryOperatorInput>;
  _rev?: InputMaybe<StringQueryOperatorInput>;
  _type?: InputMaybe<StringQueryOperatorInput>;
  _updatedAt?: InputMaybe<DateQueryOperatorInput>;
  children?: InputMaybe<NodeFilterListInput>;
  content?: InputMaybe<SanityBlockFilterListInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  url?: InputMaybe<SanitySlugFilterInput>;
};


export type QuerySanityPostArgs = {
  _createdAt?: InputMaybe<DateQueryOperatorInput>;
  _id?: InputMaybe<StringQueryOperatorInput>;
  _key?: InputMaybe<StringQueryOperatorInput>;
  _rawBody?: InputMaybe<JsonQueryOperatorInput>;
  _rawMinistries?: InputMaybe<JsonQueryOperatorInput>;
  _rawSlug?: InputMaybe<JsonQueryOperatorInput>;
  _rawSummary?: InputMaybe<JsonQueryOperatorInput>;
  _rawThumbnail?: InputMaybe<JsonQueryOperatorInput>;
  _rawThumbnailPoster?: InputMaybe<JsonQueryOperatorInput>;
  _rev?: InputMaybe<StringQueryOperatorInput>;
  _type?: InputMaybe<StringQueryOperatorInput>;
  _updatedAt?: InputMaybe<DateQueryOperatorInput>;
  body?: InputMaybe<SanityBlockFilterListInput>;
  children?: InputMaybe<NodeFilterListInput>;
  date?: InputMaybe<DateQueryOperatorInput>;
  featured?: InputMaybe<BooleanQueryOperatorInput>;
  hidden?: InputMaybe<BooleanQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  ministries?: InputMaybe<SanityMinistryPageFilterListInput>;
  parent?: InputMaybe<NodeFilterInput>;
  slug?: InputMaybe<SanitySlugFilterInput>;
  summary?: InputMaybe<SanityBlockFilterListInput>;
  thumbnail?: InputMaybe<SanityImageFilterInput>;
  thumbnailPoster?: InputMaybe<SanityPosterFilterInput>;
  thumbnailPosterPreview?: InputMaybe<FloatQueryOperatorInput>;
  title?: InputMaybe<StringQueryOperatorInput>;
};


export type QuerySanityPosterArgs = {
  _createdAt?: InputMaybe<DateQueryOperatorInput>;
  _id?: InputMaybe<StringQueryOperatorInput>;
  _key?: InputMaybe<StringQueryOperatorInput>;
  _rawBackground?: InputMaybe<JsonQueryOperatorInput>;
  _rawLines?: InputMaybe<JsonQueryOperatorInput>;
  _rev?: InputMaybe<StringQueryOperatorInput>;
  _type?: InputMaybe<StringQueryOperatorInput>;
  _updatedAt?: InputMaybe<DateQueryOperatorInput>;
  background?: InputMaybe<SanityImageFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  lines?: InputMaybe<SanityPosterLineFilterListInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  overlayColor?: InputMaybe<StringQueryOperatorInput>;
  overlayOpacity?: InputMaybe<FloatQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  previewDisplay?: InputMaybe<FloatQueryOperatorInput>;
};


export type QuerySanityScheduleAlertArgs = {
  _createdAt?: InputMaybe<DateQueryOperatorInput>;
  _id?: InputMaybe<StringQueryOperatorInput>;
  _key?: InputMaybe<StringQueryOperatorInput>;
  _rawMessage?: InputMaybe<JsonQueryOperatorInput>;
  _rev?: InputMaybe<StringQueryOperatorInput>;
  _type?: InputMaybe<StringQueryOperatorInput>;
  _updatedAt?: InputMaybe<DateQueryOperatorInput>;
  active?: InputMaybe<BooleanQueryOperatorInput>;
  children?: InputMaybe<NodeFilterListInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  message?: InputMaybe<SanityBlockFilterListInput>;
  parent?: InputMaybe<NodeFilterInput>;
};


export type QuerySanitySermonUploadArgs = {
  _createdAt?: InputMaybe<DateQueryOperatorInput>;
  _id?: InputMaybe<StringQueryOperatorInput>;
  _key?: InputMaybe<StringQueryOperatorInput>;
  _rawAudioFile?: InputMaybe<JsonQueryOperatorInput>;
  _rev?: InputMaybe<StringQueryOperatorInput>;
  _type?: InputMaybe<StringQueryOperatorInput>;
  _updatedAt?: InputMaybe<DateQueryOperatorInput>;
  audioFile?: InputMaybe<SanityFileFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  date?: InputMaybe<DateQueryOperatorInput>;
  extraInfo?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  parent?: InputMaybe<NodeFilterInput>;
};


export type QuerySanityShortcutsArgs = {
  _createdAt?: InputMaybe<DateQueryOperatorInput>;
  _id?: InputMaybe<StringQueryOperatorInput>;
  _key?: InputMaybe<StringQueryOperatorInput>;
  _rawContent?: InputMaybe<JsonQueryOperatorInput>;
  _rev?: InputMaybe<StringQueryOperatorInput>;
  _type?: InputMaybe<StringQueryOperatorInput>;
  _updatedAt?: InputMaybe<DateQueryOperatorInput>;
  children?: InputMaybe<NodeFilterListInput>;
  content?: InputMaybe<SanityBlockFilterListInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  parent?: InputMaybe<NodeFilterInput>;
};


export type QuerySanityWeeklyScheduleArgs = {
  _createdAt?: InputMaybe<DateQueryOperatorInput>;
  _id?: InputMaybe<StringQueryOperatorInput>;
  _key?: InputMaybe<StringQueryOperatorInput>;
  _rawDays?: InputMaybe<JsonQueryOperatorInput>;
  _rev?: InputMaybe<StringQueryOperatorInput>;
  _type?: InputMaybe<StringQueryOperatorInput>;
  _updatedAt?: InputMaybe<DateQueryOperatorInput>;
  children?: InputMaybe<NodeFilterListInput>;
  days?: InputMaybe<SanityWeeklyScheduleDayFilterListInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  parent?: InputMaybe<NodeFilterInput>;
};


export type QuerySiteArgs = {
  buildTime?: InputMaybe<DateQueryOperatorInput>;
  children?: InputMaybe<NodeFilterListInput>;
  host?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  jsxRuntime?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  pathPrefix?: InputMaybe<StringQueryOperatorInput>;
  polyfill?: InputMaybe<BooleanQueryOperatorInput>;
  port?: InputMaybe<IntQueryOperatorInput>;
  siteMetadata?: InputMaybe<SiteSiteMetadataFilterInput>;
  trailingSlash?: InputMaybe<StringQueryOperatorInput>;
};


export type QuerySiteBuildMetadataArgs = {
  buildTime?: InputMaybe<DateQueryOperatorInput>;
  children?: InputMaybe<NodeFilterListInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  parent?: InputMaybe<NodeFilterInput>;
};


export type QuerySiteFunctionArgs = {
  absoluteCompiledFilePath?: InputMaybe<StringQueryOperatorInput>;
  children?: InputMaybe<NodeFilterListInput>;
  functionRoute?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  matchPath?: InputMaybe<StringQueryOperatorInput>;
  originalAbsoluteFilePath?: InputMaybe<StringQueryOperatorInput>;
  originalRelativeFilePath?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  pluginName?: InputMaybe<StringQueryOperatorInput>;
  relativeCompiledFilePath?: InputMaybe<StringQueryOperatorInput>;
};


export type QuerySitePageArgs = {
  children?: InputMaybe<NodeFilterListInput>;
  component?: InputMaybe<StringQueryOperatorInput>;
  componentChunkName?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  internalComponentName?: InputMaybe<StringQueryOperatorInput>;
  matchPath?: InputMaybe<StringQueryOperatorInput>;
  pageContext?: InputMaybe<JsonQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  path?: InputMaybe<StringQueryOperatorInput>;
  pluginCreator?: InputMaybe<SitePluginFilterInput>;
};


export type QuerySitePluginArgs = {
  browserAPIs?: InputMaybe<StringQueryOperatorInput>;
  children?: InputMaybe<NodeFilterListInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  nodeAPIs?: InputMaybe<StringQueryOperatorInput>;
  packageJson?: InputMaybe<JsonQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  pluginFilepath?: InputMaybe<StringQueryOperatorInput>;
  pluginOptions?: InputMaybe<JsonQueryOperatorInput>;
  resolve?: InputMaybe<StringQueryOperatorInput>;
  ssrAPIs?: InputMaybe<StringQueryOperatorInput>;
  version?: InputMaybe<StringQueryOperatorInput>;
};

export type SanityAssetSourceData = {
  __typename?: 'SanityAssetSourceData';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type SanityAssetSourceDataFilterInput = {
  _key?: InputMaybe<StringQueryOperatorInput>;
  _type?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  url?: InputMaybe<StringQueryOperatorInput>;
};

export type SanityBlock = {
  __typename?: 'SanityBlock';
  _key?: Maybe<Scalars['String']>;
  _rawChildren?: Maybe<Scalars['JSON']>;
  _type?: Maybe<Scalars['String']>;
  children?: Maybe<Array<Maybe<SanitySpan>>>;
  list?: Maybe<Scalars['String']>;
  style?: Maybe<Scalars['String']>;
};


export type SanityBlock_RawChildrenArgs = {
  resolveReferences?: InputMaybe<SanityResolveReferencesConfiguration>;
};

export type SanityBlockFilterInput = {
  _key?: InputMaybe<StringQueryOperatorInput>;
  _rawChildren?: InputMaybe<JsonQueryOperatorInput>;
  _type?: InputMaybe<StringQueryOperatorInput>;
  children?: InputMaybe<SanitySpanFilterListInput>;
  list?: InputMaybe<StringQueryOperatorInput>;
  style?: InputMaybe<StringQueryOperatorInput>;
};

export type SanityBlockFilterListInput = {
  elemMatch?: InputMaybe<SanityBlockFilterInput>;
};

export type SanityBlockOrButtonLinkOrButtonRowOrColumnRowOrContentSectionOrPictureOrPosterInContentOrScriptureReferenceOrVerticalSpaceOrVideoEmbed = SanityBlock | SanityButtonLink | SanityButtonRow | SanityColumnRow | SanityContentSection | SanityPicture | SanityPosterInContent | SanityScriptureReference | SanityVerticalSpace | SanityVideoEmbed;

export type SanityBlockOrButtonLinkOrButtonRowOrPictureOrPosterInContentOrScriptureReferenceOrVerticalSpaceOrVideoEmbed = SanityBlock | SanityButtonLink | SanityButtonRow | SanityPicture | SanityPosterInContent | SanityScriptureReference | SanityVerticalSpace | SanityVideoEmbed;

export type SanityButtonLink = {
  __typename?: 'SanityButtonLink';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  align?: Maybe<Scalars['String']>;
  dark?: Maybe<Scalars['Boolean']>;
  hidden?: Maybe<Scalars['Boolean']>;
  href?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
  thick?: Maybe<Scalars['Boolean']>;
};

export type SanityButtonRow = {
  __typename?: 'SanityButtonRow';
  _key?: Maybe<Scalars['String']>;
  _rawButtons?: Maybe<Scalars['JSON']>;
  _type?: Maybe<Scalars['String']>;
  buttons?: Maybe<Array<Maybe<SanityButtonLink>>>;
};


export type SanityButtonRow_RawButtonsArgs = {
  resolveReferences?: InputMaybe<SanityResolveReferencesConfiguration>;
};

export type SanityColumnRow = {
  __typename?: 'SanityColumnRow';
  _key?: Maybe<Scalars['String']>;
  _rawColumns?: Maybe<Scalars['JSON']>;
  _type?: Maybe<Scalars['String']>;
  columns?: Maybe<Array<Maybe<SanityContentColumn>>>;
};


export type SanityColumnRow_RawColumnsArgs = {
  resolveReferences?: InputMaybe<SanityResolveReferencesConfiguration>;
};

export type SanityContentColumn = {
  __typename?: 'SanityContentColumn';
  _key?: Maybe<Scalars['String']>;
  _rawContent?: Maybe<Scalars['JSON']>;
  _type?: Maybe<Scalars['String']>;
  content?: Maybe<Array<Maybe<SanityBlock>>>;
};


export type SanityContentColumn_RawContentArgs = {
  resolveReferences?: InputMaybe<SanityResolveReferencesConfiguration>;
};

export type SanityContentSection = {
  __typename?: 'SanityContentSection';
  _key?: Maybe<Scalars['String']>;
  _rawBackgroundImage?: Maybe<Scalars['JSON']>;
  _rawContent?: Maybe<Scalars['JSON']>;
  _type?: Maybe<Scalars['String']>;
  backgroundBlurStrength?: Maybe<Scalars['Float']>;
  backgroundColor?: Maybe<Scalars['String']>;
  backgroundImage?: Maybe<SanityImage>;
  backgroundOpacity?: Maybe<Scalars['Float']>;
  backgroundParallax?: Maybe<Scalars['Boolean']>;
  content?: Maybe<Array<Maybe<SanityBlock>>>;
  textColor?: Maybe<Scalars['String']>;
  verticalPadding?: Maybe<Scalars['Float']>;
};


export type SanityContentSection_RawBackgroundImageArgs = {
  resolveReferences?: InputMaybe<SanityResolveReferencesConfiguration>;
};


export type SanityContentSection_RawContentArgs = {
  resolveReferences?: InputMaybe<SanityResolveReferencesConfiguration>;
};

/** A Sanity document */
export type SanityDocument = {
  _createdAt?: Maybe<Scalars['Date']>;
  _id?: Maybe<Scalars['String']>;
  _rev?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  _updatedAt?: Maybe<Scalars['Date']>;
};

export type SanityFile = {
  __typename?: 'SanityFile';
  _key?: Maybe<Scalars['String']>;
  _rawAsset?: Maybe<Scalars['JSON']>;
  _type?: Maybe<Scalars['String']>;
  asset?: Maybe<SanityFileAsset>;
};


export type SanityFile_RawAssetArgs = {
  resolveReferences?: InputMaybe<SanityResolveReferencesConfiguration>;
};

export type SanityFileAsset = Node & SanityDocument & {
  __typename?: 'SanityFileAsset';
  _createdAt?: Maybe<Scalars['Date']>;
  _id?: Maybe<Scalars['String']>;
  _key?: Maybe<Scalars['String']>;
  _rawSource?: Maybe<Scalars['JSON']>;
  _rev?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  _updatedAt?: Maybe<Scalars['Date']>;
  altText?: Maybe<Scalars['String']>;
  assetId?: Maybe<Scalars['String']>;
  children: Array<Node>;
  description?: Maybe<Scalars['String']>;
  extension?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  internal: Internal;
  label?: Maybe<Scalars['String']>;
  mimeType?: Maybe<Scalars['String']>;
  originalFilename?: Maybe<Scalars['String']>;
  parent?: Maybe<Node>;
  path?: Maybe<Scalars['String']>;
  sha1hash?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Float']>;
  source?: Maybe<SanityAssetSourceData>;
  title?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};


export type SanityFileAsset_CreatedAtArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type SanityFileAsset_RawSourceArgs = {
  resolveReferences?: InputMaybe<SanityResolveReferencesConfiguration>;
};


export type SanityFileAsset_UpdatedAtArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type SanityFileAssetConnection = {
  __typename?: 'SanityFileAssetConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<SanityFileAssetEdge>;
  group: Array<SanityFileAssetGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<SanityFileAsset>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type SanityFileAssetConnectionDistinctArgs = {
  field: SanityFileAssetFieldsEnum;
};


export type SanityFileAssetConnectionGroupArgs = {
  field: SanityFileAssetFieldsEnum;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
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

export type SanityFileAssetEdge = {
  __typename?: 'SanityFileAssetEdge';
  next?: Maybe<SanityFileAsset>;
  node: SanityFileAsset;
  previous?: Maybe<SanityFileAsset>;
};

export enum SanityFileAssetFieldsEnum {
  _createdAt = '_createdAt',
  _id = '_id',
  _key = '_key',
  _rawSource = '_rawSource',
  _rev = '_rev',
  _type = '_type',
  _updatedAt = '_updatedAt',
  altText = 'altText',
  assetId = 'assetId',
  children = 'children',
  children___children = 'children___children',
  children___children___children = 'children___children___children',
  children___children___children___children = 'children___children___children___children',
  children___children___children___id = 'children___children___children___id',
  children___children___id = 'children___children___id',
  children___children___internal___content = 'children___children___internal___content',
  children___children___internal___contentDigest = 'children___children___internal___contentDigest',
  children___children___internal___description = 'children___children___internal___description',
  children___children___internal___fieldOwners = 'children___children___internal___fieldOwners',
  children___children___internal___ignoreType = 'children___children___internal___ignoreType',
  children___children___internal___mediaType = 'children___children___internal___mediaType',
  children___children___internal___owner = 'children___children___internal___owner',
  children___children___internal___type = 'children___children___internal___type',
  children___children___parent___children = 'children___children___parent___children',
  children___children___parent___id = 'children___children___parent___id',
  children___id = 'children___id',
  children___internal___content = 'children___internal___content',
  children___internal___contentDigest = 'children___internal___contentDigest',
  children___internal___description = 'children___internal___description',
  children___internal___fieldOwners = 'children___internal___fieldOwners',
  children___internal___ignoreType = 'children___internal___ignoreType',
  children___internal___mediaType = 'children___internal___mediaType',
  children___internal___owner = 'children___internal___owner',
  children___internal___type = 'children___internal___type',
  children___parent___children = 'children___parent___children',
  children___parent___children___children = 'children___parent___children___children',
  children___parent___children___id = 'children___parent___children___id',
  children___parent___id = 'children___parent___id',
  children___parent___internal___content = 'children___parent___internal___content',
  children___parent___internal___contentDigest = 'children___parent___internal___contentDigest',
  children___parent___internal___description = 'children___parent___internal___description',
  children___parent___internal___fieldOwners = 'children___parent___internal___fieldOwners',
  children___parent___internal___ignoreType = 'children___parent___internal___ignoreType',
  children___parent___internal___mediaType = 'children___parent___internal___mediaType',
  children___parent___internal___owner = 'children___parent___internal___owner',
  children___parent___internal___type = 'children___parent___internal___type',
  children___parent___parent___children = 'children___parent___parent___children',
  children___parent___parent___id = 'children___parent___parent___id',
  description = 'description',
  extension = 'extension',
  id = 'id',
  internal___content = 'internal___content',
  internal___contentDigest = 'internal___contentDigest',
  internal___description = 'internal___description',
  internal___fieldOwners = 'internal___fieldOwners',
  internal___ignoreType = 'internal___ignoreType',
  internal___mediaType = 'internal___mediaType',
  internal___owner = 'internal___owner',
  internal___type = 'internal___type',
  label = 'label',
  mimeType = 'mimeType',
  originalFilename = 'originalFilename',
  parent___children = 'parent___children',
  parent___children___children = 'parent___children___children',
  parent___children___children___children = 'parent___children___children___children',
  parent___children___children___id = 'parent___children___children___id',
  parent___children___id = 'parent___children___id',
  parent___children___internal___content = 'parent___children___internal___content',
  parent___children___internal___contentDigest = 'parent___children___internal___contentDigest',
  parent___children___internal___description = 'parent___children___internal___description',
  parent___children___internal___fieldOwners = 'parent___children___internal___fieldOwners',
  parent___children___internal___ignoreType = 'parent___children___internal___ignoreType',
  parent___children___internal___mediaType = 'parent___children___internal___mediaType',
  parent___children___internal___owner = 'parent___children___internal___owner',
  parent___children___internal___type = 'parent___children___internal___type',
  parent___children___parent___children = 'parent___children___parent___children',
  parent___children___parent___id = 'parent___children___parent___id',
  parent___id = 'parent___id',
  parent___internal___content = 'parent___internal___content',
  parent___internal___contentDigest = 'parent___internal___contentDigest',
  parent___internal___description = 'parent___internal___description',
  parent___internal___fieldOwners = 'parent___internal___fieldOwners',
  parent___internal___ignoreType = 'parent___internal___ignoreType',
  parent___internal___mediaType = 'parent___internal___mediaType',
  parent___internal___owner = 'parent___internal___owner',
  parent___internal___type = 'parent___internal___type',
  parent___parent___children = 'parent___parent___children',
  parent___parent___children___children = 'parent___parent___children___children',
  parent___parent___children___id = 'parent___parent___children___id',
  parent___parent___id = 'parent___parent___id',
  parent___parent___internal___content = 'parent___parent___internal___content',
  parent___parent___internal___contentDigest = 'parent___parent___internal___contentDigest',
  parent___parent___internal___description = 'parent___parent___internal___description',
  parent___parent___internal___fieldOwners = 'parent___parent___internal___fieldOwners',
  parent___parent___internal___ignoreType = 'parent___parent___internal___ignoreType',
  parent___parent___internal___mediaType = 'parent___parent___internal___mediaType',
  parent___parent___internal___owner = 'parent___parent___internal___owner',
  parent___parent___internal___type = 'parent___parent___internal___type',
  parent___parent___parent___children = 'parent___parent___parent___children',
  parent___parent___parent___id = 'parent___parent___parent___id',
  path = 'path',
  sha1hash = 'sha1hash',
  size = 'size',
  source____key = 'source____key',
  source____type = 'source____type',
  source___id = 'source___id',
  source___name = 'source___name',
  source___url = 'source___url',
  title = 'title',
  url = 'url'
}

export type SanityFileAssetFilterInput = {
  _createdAt?: InputMaybe<DateQueryOperatorInput>;
  _id?: InputMaybe<StringQueryOperatorInput>;
  _key?: InputMaybe<StringQueryOperatorInput>;
  _rawSource?: InputMaybe<JsonQueryOperatorInput>;
  _rev?: InputMaybe<StringQueryOperatorInput>;
  _type?: InputMaybe<StringQueryOperatorInput>;
  _updatedAt?: InputMaybe<DateQueryOperatorInput>;
  altText?: InputMaybe<StringQueryOperatorInput>;
  assetId?: InputMaybe<StringQueryOperatorInput>;
  children?: InputMaybe<NodeFilterListInput>;
  description?: InputMaybe<StringQueryOperatorInput>;
  extension?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  label?: InputMaybe<StringQueryOperatorInput>;
  mimeType?: InputMaybe<StringQueryOperatorInput>;
  originalFilename?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  path?: InputMaybe<StringQueryOperatorInput>;
  sha1hash?: InputMaybe<StringQueryOperatorInput>;
  size?: InputMaybe<FloatQueryOperatorInput>;
  source?: InputMaybe<SanityAssetSourceDataFilterInput>;
  title?: InputMaybe<StringQueryOperatorInput>;
  url?: InputMaybe<StringQueryOperatorInput>;
};

export type SanityFileAssetGroupConnection = {
  __typename?: 'SanityFileAssetGroupConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<SanityFileAssetEdge>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
  group: Array<SanityFileAssetGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<SanityFileAsset>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type SanityFileAssetGroupConnectionDistinctArgs = {
  field: SanityFileAssetFieldsEnum;
};


export type SanityFileAssetGroupConnectionGroupArgs = {
  field: SanityFileAssetFieldsEnum;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type SanityFileAssetGroupConnectionMaxArgs = {
  field: SanityFileAssetFieldsEnum;
};


export type SanityFileAssetGroupConnectionMinArgs = {
  field: SanityFileAssetFieldsEnum;
};


export type SanityFileAssetGroupConnectionSumArgs = {
  field: SanityFileAssetFieldsEnum;
};

export type SanityFileAssetSortInput = {
  fields?: InputMaybe<Array<InputMaybe<SanityFileAssetFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type SanityFileFilterInput = {
  _key?: InputMaybe<StringQueryOperatorInput>;
  _rawAsset?: InputMaybe<JsonQueryOperatorInput>;
  _type?: InputMaybe<StringQueryOperatorInput>;
  asset?: InputMaybe<SanityFileAssetFilterInput>;
};

export enum SanityGatsbyImagePlaceholder {
  BLURRED = 'BLURRED',
  DOMINANT_COLOR = 'DOMINANT_COLOR',
  NONE = 'NONE'
}

export type SanityGeneralAlert = Node & SanityDocument & {
  __typename?: 'SanityGeneralAlert';
  _createdAt?: Maybe<Scalars['Date']>;
  _id?: Maybe<Scalars['String']>;
  _key?: Maybe<Scalars['String']>;
  _rawContent?: Maybe<Scalars['JSON']>;
  _rev?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  _updatedAt?: Maybe<Scalars['Date']>;
  active?: Maybe<Scalars['Boolean']>;
  children: Array<Node>;
  content?: Maybe<Array<Maybe<SanityBlock>>>;
  id: Scalars['ID'];
  internal: Internal;
  parent?: Maybe<Node>;
};


export type SanityGeneralAlert_CreatedAtArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type SanityGeneralAlert_RawContentArgs = {
  resolveReferences?: InputMaybe<SanityResolveReferencesConfiguration>;
};


export type SanityGeneralAlert_UpdatedAtArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type SanityGeneralAlertConnection = {
  __typename?: 'SanityGeneralAlertConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<SanityGeneralAlertEdge>;
  group: Array<SanityGeneralAlertGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<SanityGeneralAlert>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type SanityGeneralAlertConnectionDistinctArgs = {
  field: SanityGeneralAlertFieldsEnum;
};


export type SanityGeneralAlertConnectionGroupArgs = {
  field: SanityGeneralAlertFieldsEnum;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
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

export type SanityGeneralAlertEdge = {
  __typename?: 'SanityGeneralAlertEdge';
  next?: Maybe<SanityGeneralAlert>;
  node: SanityGeneralAlert;
  previous?: Maybe<SanityGeneralAlert>;
};

export enum SanityGeneralAlertFieldsEnum {
  _createdAt = '_createdAt',
  _id = '_id',
  _key = '_key',
  _rawContent = '_rawContent',
  _rev = '_rev',
  _type = '_type',
  _updatedAt = '_updatedAt',
  active = 'active',
  children = 'children',
  children___children = 'children___children',
  children___children___children = 'children___children___children',
  children___children___children___children = 'children___children___children___children',
  children___children___children___id = 'children___children___children___id',
  children___children___id = 'children___children___id',
  children___children___internal___content = 'children___children___internal___content',
  children___children___internal___contentDigest = 'children___children___internal___contentDigest',
  children___children___internal___description = 'children___children___internal___description',
  children___children___internal___fieldOwners = 'children___children___internal___fieldOwners',
  children___children___internal___ignoreType = 'children___children___internal___ignoreType',
  children___children___internal___mediaType = 'children___children___internal___mediaType',
  children___children___internal___owner = 'children___children___internal___owner',
  children___children___internal___type = 'children___children___internal___type',
  children___children___parent___children = 'children___children___parent___children',
  children___children___parent___id = 'children___children___parent___id',
  children___id = 'children___id',
  children___internal___content = 'children___internal___content',
  children___internal___contentDigest = 'children___internal___contentDigest',
  children___internal___description = 'children___internal___description',
  children___internal___fieldOwners = 'children___internal___fieldOwners',
  children___internal___ignoreType = 'children___internal___ignoreType',
  children___internal___mediaType = 'children___internal___mediaType',
  children___internal___owner = 'children___internal___owner',
  children___internal___type = 'children___internal___type',
  children___parent___children = 'children___parent___children',
  children___parent___children___children = 'children___parent___children___children',
  children___parent___children___id = 'children___parent___children___id',
  children___parent___id = 'children___parent___id',
  children___parent___internal___content = 'children___parent___internal___content',
  children___parent___internal___contentDigest = 'children___parent___internal___contentDigest',
  children___parent___internal___description = 'children___parent___internal___description',
  children___parent___internal___fieldOwners = 'children___parent___internal___fieldOwners',
  children___parent___internal___ignoreType = 'children___parent___internal___ignoreType',
  children___parent___internal___mediaType = 'children___parent___internal___mediaType',
  children___parent___internal___owner = 'children___parent___internal___owner',
  children___parent___internal___type = 'children___parent___internal___type',
  children___parent___parent___children = 'children___parent___parent___children',
  children___parent___parent___id = 'children___parent___parent___id',
  content = 'content',
  content____key = 'content____key',
  content____rawChildren = 'content____rawChildren',
  content____type = 'content____type',
  content___children = 'content___children',
  content___children____key = 'content___children____key',
  content___children____type = 'content___children____type',
  content___children___marks = 'content___children___marks',
  content___children___text = 'content___children___text',
  content___list = 'content___list',
  content___style = 'content___style',
  id = 'id',
  internal___content = 'internal___content',
  internal___contentDigest = 'internal___contentDigest',
  internal___description = 'internal___description',
  internal___fieldOwners = 'internal___fieldOwners',
  internal___ignoreType = 'internal___ignoreType',
  internal___mediaType = 'internal___mediaType',
  internal___owner = 'internal___owner',
  internal___type = 'internal___type',
  parent___children = 'parent___children',
  parent___children___children = 'parent___children___children',
  parent___children___children___children = 'parent___children___children___children',
  parent___children___children___id = 'parent___children___children___id',
  parent___children___id = 'parent___children___id',
  parent___children___internal___content = 'parent___children___internal___content',
  parent___children___internal___contentDigest = 'parent___children___internal___contentDigest',
  parent___children___internal___description = 'parent___children___internal___description',
  parent___children___internal___fieldOwners = 'parent___children___internal___fieldOwners',
  parent___children___internal___ignoreType = 'parent___children___internal___ignoreType',
  parent___children___internal___mediaType = 'parent___children___internal___mediaType',
  parent___children___internal___owner = 'parent___children___internal___owner',
  parent___children___internal___type = 'parent___children___internal___type',
  parent___children___parent___children = 'parent___children___parent___children',
  parent___children___parent___id = 'parent___children___parent___id',
  parent___id = 'parent___id',
  parent___internal___content = 'parent___internal___content',
  parent___internal___contentDigest = 'parent___internal___contentDigest',
  parent___internal___description = 'parent___internal___description',
  parent___internal___fieldOwners = 'parent___internal___fieldOwners',
  parent___internal___ignoreType = 'parent___internal___ignoreType',
  parent___internal___mediaType = 'parent___internal___mediaType',
  parent___internal___owner = 'parent___internal___owner',
  parent___internal___type = 'parent___internal___type',
  parent___parent___children = 'parent___parent___children',
  parent___parent___children___children = 'parent___parent___children___children',
  parent___parent___children___id = 'parent___parent___children___id',
  parent___parent___id = 'parent___parent___id',
  parent___parent___internal___content = 'parent___parent___internal___content',
  parent___parent___internal___contentDigest = 'parent___parent___internal___contentDigest',
  parent___parent___internal___description = 'parent___parent___internal___description',
  parent___parent___internal___fieldOwners = 'parent___parent___internal___fieldOwners',
  parent___parent___internal___ignoreType = 'parent___parent___internal___ignoreType',
  parent___parent___internal___mediaType = 'parent___parent___internal___mediaType',
  parent___parent___internal___owner = 'parent___parent___internal___owner',
  parent___parent___internal___type = 'parent___parent___internal___type',
  parent___parent___parent___children = 'parent___parent___parent___children',
  parent___parent___parent___id = 'parent___parent___parent___id'
}

export type SanityGeneralAlertFilterInput = {
  _createdAt?: InputMaybe<DateQueryOperatorInput>;
  _id?: InputMaybe<StringQueryOperatorInput>;
  _key?: InputMaybe<StringQueryOperatorInput>;
  _rawContent?: InputMaybe<JsonQueryOperatorInput>;
  _rev?: InputMaybe<StringQueryOperatorInput>;
  _type?: InputMaybe<StringQueryOperatorInput>;
  _updatedAt?: InputMaybe<DateQueryOperatorInput>;
  active?: InputMaybe<BooleanQueryOperatorInput>;
  children?: InputMaybe<NodeFilterListInput>;
  content?: InputMaybe<SanityBlockFilterListInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  parent?: InputMaybe<NodeFilterInput>;
};

export type SanityGeneralAlertGroupConnection = {
  __typename?: 'SanityGeneralAlertGroupConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<SanityGeneralAlertEdge>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
  group: Array<SanityGeneralAlertGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<SanityGeneralAlert>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type SanityGeneralAlertGroupConnectionDistinctArgs = {
  field: SanityGeneralAlertFieldsEnum;
};


export type SanityGeneralAlertGroupConnectionGroupArgs = {
  field: SanityGeneralAlertFieldsEnum;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type SanityGeneralAlertGroupConnectionMaxArgs = {
  field: SanityGeneralAlertFieldsEnum;
};


export type SanityGeneralAlertGroupConnectionMinArgs = {
  field: SanityGeneralAlertFieldsEnum;
};


export type SanityGeneralAlertGroupConnectionSumArgs = {
  field: SanityGeneralAlertFieldsEnum;
};

export type SanityGeneralAlertSortInput = {
  fields?: InputMaybe<Array<InputMaybe<SanityGeneralAlertFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type SanityGeopoint = {
  __typename?: 'SanityGeopoint';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  alt?: Maybe<Scalars['Float']>;
  lat?: Maybe<Scalars['Float']>;
  lng?: Maybe<Scalars['Float']>;
};

export type SanityGeopointFilterInput = {
  _key?: InputMaybe<StringQueryOperatorInput>;
  _type?: InputMaybe<StringQueryOperatorInput>;
  alt?: InputMaybe<FloatQueryOperatorInput>;
  lat?: InputMaybe<FloatQueryOperatorInput>;
  lng?: InputMaybe<FloatQueryOperatorInput>;
};

export type SanityHeroSection = Node & SanityDocument & {
  __typename?: 'SanityHeroSection';
  _createdAt?: Maybe<Scalars['Date']>;
  _id?: Maybe<Scalars['String']>;
  _key?: Maybe<Scalars['String']>;
  _rawVideo?: Maybe<Scalars['JSON']>;
  _rev?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  _updatedAt?: Maybe<Scalars['Date']>;
  children: Array<Node>;
  id: Scalars['ID'];
  internal: Internal;
  parent?: Maybe<Node>;
  subtitle?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  video?: Maybe<SanityFile>;
};


export type SanityHeroSection_CreatedAtArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type SanityHeroSection_RawVideoArgs = {
  resolveReferences?: InputMaybe<SanityResolveReferencesConfiguration>;
};


export type SanityHeroSection_UpdatedAtArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type SanityHeroSectionConnection = {
  __typename?: 'SanityHeroSectionConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<SanityHeroSectionEdge>;
  group: Array<SanityHeroSectionGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<SanityHeroSection>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type SanityHeroSectionConnectionDistinctArgs = {
  field: SanityHeroSectionFieldsEnum;
};


export type SanityHeroSectionConnectionGroupArgs = {
  field: SanityHeroSectionFieldsEnum;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
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

export type SanityHeroSectionEdge = {
  __typename?: 'SanityHeroSectionEdge';
  next?: Maybe<SanityHeroSection>;
  node: SanityHeroSection;
  previous?: Maybe<SanityHeroSection>;
};

export enum SanityHeroSectionFieldsEnum {
  _createdAt = '_createdAt',
  _id = '_id',
  _key = '_key',
  _rawVideo = '_rawVideo',
  _rev = '_rev',
  _type = '_type',
  _updatedAt = '_updatedAt',
  children = 'children',
  children___children = 'children___children',
  children___children___children = 'children___children___children',
  children___children___children___children = 'children___children___children___children',
  children___children___children___id = 'children___children___children___id',
  children___children___id = 'children___children___id',
  children___children___internal___content = 'children___children___internal___content',
  children___children___internal___contentDigest = 'children___children___internal___contentDigest',
  children___children___internal___description = 'children___children___internal___description',
  children___children___internal___fieldOwners = 'children___children___internal___fieldOwners',
  children___children___internal___ignoreType = 'children___children___internal___ignoreType',
  children___children___internal___mediaType = 'children___children___internal___mediaType',
  children___children___internal___owner = 'children___children___internal___owner',
  children___children___internal___type = 'children___children___internal___type',
  children___children___parent___children = 'children___children___parent___children',
  children___children___parent___id = 'children___children___parent___id',
  children___id = 'children___id',
  children___internal___content = 'children___internal___content',
  children___internal___contentDigest = 'children___internal___contentDigest',
  children___internal___description = 'children___internal___description',
  children___internal___fieldOwners = 'children___internal___fieldOwners',
  children___internal___ignoreType = 'children___internal___ignoreType',
  children___internal___mediaType = 'children___internal___mediaType',
  children___internal___owner = 'children___internal___owner',
  children___internal___type = 'children___internal___type',
  children___parent___children = 'children___parent___children',
  children___parent___children___children = 'children___parent___children___children',
  children___parent___children___id = 'children___parent___children___id',
  children___parent___id = 'children___parent___id',
  children___parent___internal___content = 'children___parent___internal___content',
  children___parent___internal___contentDigest = 'children___parent___internal___contentDigest',
  children___parent___internal___description = 'children___parent___internal___description',
  children___parent___internal___fieldOwners = 'children___parent___internal___fieldOwners',
  children___parent___internal___ignoreType = 'children___parent___internal___ignoreType',
  children___parent___internal___mediaType = 'children___parent___internal___mediaType',
  children___parent___internal___owner = 'children___parent___internal___owner',
  children___parent___internal___type = 'children___parent___internal___type',
  children___parent___parent___children = 'children___parent___parent___children',
  children___parent___parent___id = 'children___parent___parent___id',
  id = 'id',
  internal___content = 'internal___content',
  internal___contentDigest = 'internal___contentDigest',
  internal___description = 'internal___description',
  internal___fieldOwners = 'internal___fieldOwners',
  internal___ignoreType = 'internal___ignoreType',
  internal___mediaType = 'internal___mediaType',
  internal___owner = 'internal___owner',
  internal___type = 'internal___type',
  parent___children = 'parent___children',
  parent___children___children = 'parent___children___children',
  parent___children___children___children = 'parent___children___children___children',
  parent___children___children___id = 'parent___children___children___id',
  parent___children___id = 'parent___children___id',
  parent___children___internal___content = 'parent___children___internal___content',
  parent___children___internal___contentDigest = 'parent___children___internal___contentDigest',
  parent___children___internal___description = 'parent___children___internal___description',
  parent___children___internal___fieldOwners = 'parent___children___internal___fieldOwners',
  parent___children___internal___ignoreType = 'parent___children___internal___ignoreType',
  parent___children___internal___mediaType = 'parent___children___internal___mediaType',
  parent___children___internal___owner = 'parent___children___internal___owner',
  parent___children___internal___type = 'parent___children___internal___type',
  parent___children___parent___children = 'parent___children___parent___children',
  parent___children___parent___id = 'parent___children___parent___id',
  parent___id = 'parent___id',
  parent___internal___content = 'parent___internal___content',
  parent___internal___contentDigest = 'parent___internal___contentDigest',
  parent___internal___description = 'parent___internal___description',
  parent___internal___fieldOwners = 'parent___internal___fieldOwners',
  parent___internal___ignoreType = 'parent___internal___ignoreType',
  parent___internal___mediaType = 'parent___internal___mediaType',
  parent___internal___owner = 'parent___internal___owner',
  parent___internal___type = 'parent___internal___type',
  parent___parent___children = 'parent___parent___children',
  parent___parent___children___children = 'parent___parent___children___children',
  parent___parent___children___id = 'parent___parent___children___id',
  parent___parent___id = 'parent___parent___id',
  parent___parent___internal___content = 'parent___parent___internal___content',
  parent___parent___internal___contentDigest = 'parent___parent___internal___contentDigest',
  parent___parent___internal___description = 'parent___parent___internal___description',
  parent___parent___internal___fieldOwners = 'parent___parent___internal___fieldOwners',
  parent___parent___internal___ignoreType = 'parent___parent___internal___ignoreType',
  parent___parent___internal___mediaType = 'parent___parent___internal___mediaType',
  parent___parent___internal___owner = 'parent___parent___internal___owner',
  parent___parent___internal___type = 'parent___parent___internal___type',
  parent___parent___parent___children = 'parent___parent___parent___children',
  parent___parent___parent___id = 'parent___parent___parent___id',
  subtitle = 'subtitle',
  title = 'title',
  video____key = 'video____key',
  video____rawAsset = 'video____rawAsset',
  video____type = 'video____type',
  video___asset____createdAt = 'video___asset____createdAt',
  video___asset____id = 'video___asset____id',
  video___asset____key = 'video___asset____key',
  video___asset____rawSource = 'video___asset____rawSource',
  video___asset____rev = 'video___asset____rev',
  video___asset____type = 'video___asset____type',
  video___asset____updatedAt = 'video___asset____updatedAt',
  video___asset___altText = 'video___asset___altText',
  video___asset___assetId = 'video___asset___assetId',
  video___asset___children = 'video___asset___children',
  video___asset___children___children = 'video___asset___children___children',
  video___asset___children___id = 'video___asset___children___id',
  video___asset___description = 'video___asset___description',
  video___asset___extension = 'video___asset___extension',
  video___asset___id = 'video___asset___id',
  video___asset___internal___content = 'video___asset___internal___content',
  video___asset___internal___contentDigest = 'video___asset___internal___contentDigest',
  video___asset___internal___description = 'video___asset___internal___description',
  video___asset___internal___fieldOwners = 'video___asset___internal___fieldOwners',
  video___asset___internal___ignoreType = 'video___asset___internal___ignoreType',
  video___asset___internal___mediaType = 'video___asset___internal___mediaType',
  video___asset___internal___owner = 'video___asset___internal___owner',
  video___asset___internal___type = 'video___asset___internal___type',
  video___asset___label = 'video___asset___label',
  video___asset___mimeType = 'video___asset___mimeType',
  video___asset___originalFilename = 'video___asset___originalFilename',
  video___asset___parent___children = 'video___asset___parent___children',
  video___asset___parent___id = 'video___asset___parent___id',
  video___asset___path = 'video___asset___path',
  video___asset___sha1hash = 'video___asset___sha1hash',
  video___asset___size = 'video___asset___size',
  video___asset___source____key = 'video___asset___source____key',
  video___asset___source____type = 'video___asset___source____type',
  video___asset___source___id = 'video___asset___source___id',
  video___asset___source___name = 'video___asset___source___name',
  video___asset___source___url = 'video___asset___source___url',
  video___asset___title = 'video___asset___title',
  video___asset___url = 'video___asset___url'
}

export type SanityHeroSectionFilterInput = {
  _createdAt?: InputMaybe<DateQueryOperatorInput>;
  _id?: InputMaybe<StringQueryOperatorInput>;
  _key?: InputMaybe<StringQueryOperatorInput>;
  _rawVideo?: InputMaybe<JsonQueryOperatorInput>;
  _rev?: InputMaybe<StringQueryOperatorInput>;
  _type?: InputMaybe<StringQueryOperatorInput>;
  _updatedAt?: InputMaybe<DateQueryOperatorInput>;
  children?: InputMaybe<NodeFilterListInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  parent?: InputMaybe<NodeFilterInput>;
  subtitle?: InputMaybe<StringQueryOperatorInput>;
  title?: InputMaybe<StringQueryOperatorInput>;
  video?: InputMaybe<SanityFileFilterInput>;
};

export type SanityHeroSectionGroupConnection = {
  __typename?: 'SanityHeroSectionGroupConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<SanityHeroSectionEdge>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
  group: Array<SanityHeroSectionGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<SanityHeroSection>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type SanityHeroSectionGroupConnectionDistinctArgs = {
  field: SanityHeroSectionFieldsEnum;
};


export type SanityHeroSectionGroupConnectionGroupArgs = {
  field: SanityHeroSectionFieldsEnum;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type SanityHeroSectionGroupConnectionMaxArgs = {
  field: SanityHeroSectionFieldsEnum;
};


export type SanityHeroSectionGroupConnectionMinArgs = {
  field: SanityHeroSectionFieldsEnum;
};


export type SanityHeroSectionGroupConnectionSumArgs = {
  field: SanityHeroSectionFieldsEnum;
};

export type SanityHeroSectionSortInput = {
  fields?: InputMaybe<Array<InputMaybe<SanityHeroSectionFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type SanityImage = {
  __typename?: 'SanityImage';
  _key?: Maybe<Scalars['String']>;
  _rawAsset?: Maybe<Scalars['JSON']>;
  _rawCrop?: Maybe<Scalars['JSON']>;
  _rawHotspot?: Maybe<Scalars['JSON']>;
  _type?: Maybe<Scalars['String']>;
  asset?: Maybe<SanityImageAsset>;
  crop?: Maybe<SanityImageCrop>;
  hotspot?: Maybe<SanityImageHotspot>;
};


export type SanityImage_RawAssetArgs = {
  resolveReferences?: InputMaybe<SanityResolveReferencesConfiguration>;
};


export type SanityImage_RawCropArgs = {
  resolveReferences?: InputMaybe<SanityResolveReferencesConfiguration>;
};


export type SanityImage_RawHotspotArgs = {
  resolveReferences?: InputMaybe<SanityResolveReferencesConfiguration>;
};

export type SanityImageAsset = Node & SanityDocument & {
  __typename?: 'SanityImageAsset';
  _createdAt?: Maybe<Scalars['Date']>;
  _id?: Maybe<Scalars['String']>;
  _key?: Maybe<Scalars['String']>;
  _rawMetadata?: Maybe<Scalars['JSON']>;
  _rawSource?: Maybe<Scalars['JSON']>;
  _rev?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  _updatedAt?: Maybe<Scalars['Date']>;
  altText?: Maybe<Scalars['String']>;
  assetId?: Maybe<Scalars['String']>;
  children: Array<Node>;
  description?: Maybe<Scalars['String']>;
  extension?: Maybe<Scalars['String']>;
  gatsbyImageData: Scalars['JSON'];
  id: Scalars['ID'];
  internal: Internal;
  label?: Maybe<Scalars['String']>;
  metadata?: Maybe<SanityImageMetadata>;
  mimeType?: Maybe<Scalars['String']>;
  originalFilename?: Maybe<Scalars['String']>;
  parent?: Maybe<Node>;
  path?: Maybe<Scalars['String']>;
  sha1hash?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Float']>;
  source?: Maybe<SanityAssetSourceData>;
  title?: Maybe<Scalars['String']>;
  uploadId?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};


export type SanityImageAsset_CreatedAtArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type SanityImageAsset_RawMetadataArgs = {
  resolveReferences?: InputMaybe<SanityResolveReferencesConfiguration>;
};


export type SanityImageAsset_RawSourceArgs = {
  resolveReferences?: InputMaybe<SanityResolveReferencesConfiguration>;
};


export type SanityImageAsset_UpdatedAtArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type SanityImageAssetGatsbyImageDataArgs = {
  aspectRatio?: InputMaybe<Scalars['Float']>;
  backgroundColor?: InputMaybe<Scalars['String']>;
  breakpoints?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  fit?: InputMaybe<SanityImageFit>;
  formats?: InputMaybe<Array<InputMaybe<GatsbyImageFormat>>>;
  height?: InputMaybe<Scalars['Int']>;
  layout?: InputMaybe<GatsbyImageLayout>;
  outputPixelDensities?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  placeholder?: InputMaybe<SanityGatsbyImagePlaceholder>;
  sizes?: InputMaybe<Scalars['String']>;
  width?: InputMaybe<Scalars['Int']>;
};

export type SanityImageAssetConnection = {
  __typename?: 'SanityImageAssetConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<SanityImageAssetEdge>;
  group: Array<SanityImageAssetGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<SanityImageAsset>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type SanityImageAssetConnectionDistinctArgs = {
  field: SanityImageAssetFieldsEnum;
};


export type SanityImageAssetConnectionGroupArgs = {
  field: SanityImageAssetFieldsEnum;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
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

export type SanityImageAssetEdge = {
  __typename?: 'SanityImageAssetEdge';
  next?: Maybe<SanityImageAsset>;
  node: SanityImageAsset;
  previous?: Maybe<SanityImageAsset>;
};

export enum SanityImageAssetFieldsEnum {
  _createdAt = '_createdAt',
  _id = '_id',
  _key = '_key',
  _rawMetadata = '_rawMetadata',
  _rawSource = '_rawSource',
  _rev = '_rev',
  _type = '_type',
  _updatedAt = '_updatedAt',
  altText = 'altText',
  assetId = 'assetId',
  children = 'children',
  children___children = 'children___children',
  children___children___children = 'children___children___children',
  children___children___children___children = 'children___children___children___children',
  children___children___children___id = 'children___children___children___id',
  children___children___id = 'children___children___id',
  children___children___internal___content = 'children___children___internal___content',
  children___children___internal___contentDigest = 'children___children___internal___contentDigest',
  children___children___internal___description = 'children___children___internal___description',
  children___children___internal___fieldOwners = 'children___children___internal___fieldOwners',
  children___children___internal___ignoreType = 'children___children___internal___ignoreType',
  children___children___internal___mediaType = 'children___children___internal___mediaType',
  children___children___internal___owner = 'children___children___internal___owner',
  children___children___internal___type = 'children___children___internal___type',
  children___children___parent___children = 'children___children___parent___children',
  children___children___parent___id = 'children___children___parent___id',
  children___id = 'children___id',
  children___internal___content = 'children___internal___content',
  children___internal___contentDigest = 'children___internal___contentDigest',
  children___internal___description = 'children___internal___description',
  children___internal___fieldOwners = 'children___internal___fieldOwners',
  children___internal___ignoreType = 'children___internal___ignoreType',
  children___internal___mediaType = 'children___internal___mediaType',
  children___internal___owner = 'children___internal___owner',
  children___internal___type = 'children___internal___type',
  children___parent___children = 'children___parent___children',
  children___parent___children___children = 'children___parent___children___children',
  children___parent___children___id = 'children___parent___children___id',
  children___parent___id = 'children___parent___id',
  children___parent___internal___content = 'children___parent___internal___content',
  children___parent___internal___contentDigest = 'children___parent___internal___contentDigest',
  children___parent___internal___description = 'children___parent___internal___description',
  children___parent___internal___fieldOwners = 'children___parent___internal___fieldOwners',
  children___parent___internal___ignoreType = 'children___parent___internal___ignoreType',
  children___parent___internal___mediaType = 'children___parent___internal___mediaType',
  children___parent___internal___owner = 'children___parent___internal___owner',
  children___parent___internal___type = 'children___parent___internal___type',
  children___parent___parent___children = 'children___parent___parent___children',
  children___parent___parent___id = 'children___parent___parent___id',
  description = 'description',
  extension = 'extension',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  gatsbyImageData = 'gatsbyImageData',
  id = 'id',
  internal___content = 'internal___content',
  internal___contentDigest = 'internal___contentDigest',
  internal___description = 'internal___description',
  internal___fieldOwners = 'internal___fieldOwners',
  internal___ignoreType = 'internal___ignoreType',
  internal___mediaType = 'internal___mediaType',
  internal___owner = 'internal___owner',
  internal___type = 'internal___type',
  label = 'label',
  metadata____key = 'metadata____key',
  metadata____rawDimensions = 'metadata____rawDimensions',
  metadata____rawLocation = 'metadata____rawLocation',
  metadata____rawPalette = 'metadata____rawPalette',
  metadata____type = 'metadata____type',
  metadata___blurHash = 'metadata___blurHash',
  metadata___dimensions____key = 'metadata___dimensions____key',
  metadata___dimensions____type = 'metadata___dimensions____type',
  metadata___dimensions___aspectRatio = 'metadata___dimensions___aspectRatio',
  metadata___dimensions___height = 'metadata___dimensions___height',
  metadata___dimensions___width = 'metadata___dimensions___width',
  metadata___hasAlpha = 'metadata___hasAlpha',
  metadata___isOpaque = 'metadata___isOpaque',
  metadata___location____key = 'metadata___location____key',
  metadata___location____type = 'metadata___location____type',
  metadata___location___alt = 'metadata___location___alt',
  metadata___location___lat = 'metadata___location___lat',
  metadata___location___lng = 'metadata___location___lng',
  metadata___lqip = 'metadata___lqip',
  metadata___palette____key = 'metadata___palette____key',
  metadata___palette____rawDarkMuted = 'metadata___palette____rawDarkMuted',
  metadata___palette____rawDarkVibrant = 'metadata___palette____rawDarkVibrant',
  metadata___palette____rawDominant = 'metadata___palette____rawDominant',
  metadata___palette____rawLightMuted = 'metadata___palette____rawLightMuted',
  metadata___palette____rawLightVibrant = 'metadata___palette____rawLightVibrant',
  metadata___palette____rawMuted = 'metadata___palette____rawMuted',
  metadata___palette____rawVibrant = 'metadata___palette____rawVibrant',
  metadata___palette____type = 'metadata___palette____type',
  metadata___palette___darkMuted____key = 'metadata___palette___darkMuted____key',
  metadata___palette___darkMuted____type = 'metadata___palette___darkMuted____type',
  metadata___palette___darkMuted___background = 'metadata___palette___darkMuted___background',
  metadata___palette___darkMuted___foreground = 'metadata___palette___darkMuted___foreground',
  metadata___palette___darkMuted___population = 'metadata___palette___darkMuted___population',
  metadata___palette___darkMuted___title = 'metadata___palette___darkMuted___title',
  metadata___palette___darkVibrant____key = 'metadata___palette___darkVibrant____key',
  metadata___palette___darkVibrant____type = 'metadata___palette___darkVibrant____type',
  metadata___palette___darkVibrant___background = 'metadata___palette___darkVibrant___background',
  metadata___palette___darkVibrant___foreground = 'metadata___palette___darkVibrant___foreground',
  metadata___palette___darkVibrant___population = 'metadata___palette___darkVibrant___population',
  metadata___palette___darkVibrant___title = 'metadata___palette___darkVibrant___title',
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
  metadata___palette___lightVibrant____key = 'metadata___palette___lightVibrant____key',
  metadata___palette___lightVibrant____type = 'metadata___palette___lightVibrant____type',
  metadata___palette___lightVibrant___background = 'metadata___palette___lightVibrant___background',
  metadata___palette___lightVibrant___foreground = 'metadata___palette___lightVibrant___foreground',
  metadata___palette___lightVibrant___population = 'metadata___palette___lightVibrant___population',
  metadata___palette___lightVibrant___title = 'metadata___palette___lightVibrant___title',
  metadata___palette___muted____key = 'metadata___palette___muted____key',
  metadata___palette___muted____type = 'metadata___palette___muted____type',
  metadata___palette___muted___background = 'metadata___palette___muted___background',
  metadata___palette___muted___foreground = 'metadata___palette___muted___foreground',
  metadata___palette___muted___population = 'metadata___palette___muted___population',
  metadata___palette___muted___title = 'metadata___palette___muted___title',
  metadata___palette___vibrant____key = 'metadata___palette___vibrant____key',
  metadata___palette___vibrant____type = 'metadata___palette___vibrant____type',
  metadata___palette___vibrant___background = 'metadata___palette___vibrant___background',
  metadata___palette___vibrant___foreground = 'metadata___palette___vibrant___foreground',
  metadata___palette___vibrant___population = 'metadata___palette___vibrant___population',
  metadata___palette___vibrant___title = 'metadata___palette___vibrant___title',
  mimeType = 'mimeType',
  originalFilename = 'originalFilename',
  parent___children = 'parent___children',
  parent___children___children = 'parent___children___children',
  parent___children___children___children = 'parent___children___children___children',
  parent___children___children___id = 'parent___children___children___id',
  parent___children___id = 'parent___children___id',
  parent___children___internal___content = 'parent___children___internal___content',
  parent___children___internal___contentDigest = 'parent___children___internal___contentDigest',
  parent___children___internal___description = 'parent___children___internal___description',
  parent___children___internal___fieldOwners = 'parent___children___internal___fieldOwners',
  parent___children___internal___ignoreType = 'parent___children___internal___ignoreType',
  parent___children___internal___mediaType = 'parent___children___internal___mediaType',
  parent___children___internal___owner = 'parent___children___internal___owner',
  parent___children___internal___type = 'parent___children___internal___type',
  parent___children___parent___children = 'parent___children___parent___children',
  parent___children___parent___id = 'parent___children___parent___id',
  parent___id = 'parent___id',
  parent___internal___content = 'parent___internal___content',
  parent___internal___contentDigest = 'parent___internal___contentDigest',
  parent___internal___description = 'parent___internal___description',
  parent___internal___fieldOwners = 'parent___internal___fieldOwners',
  parent___internal___ignoreType = 'parent___internal___ignoreType',
  parent___internal___mediaType = 'parent___internal___mediaType',
  parent___internal___owner = 'parent___internal___owner',
  parent___internal___type = 'parent___internal___type',
  parent___parent___children = 'parent___parent___children',
  parent___parent___children___children = 'parent___parent___children___children',
  parent___parent___children___id = 'parent___parent___children___id',
  parent___parent___id = 'parent___parent___id',
  parent___parent___internal___content = 'parent___parent___internal___content',
  parent___parent___internal___contentDigest = 'parent___parent___internal___contentDigest',
  parent___parent___internal___description = 'parent___parent___internal___description',
  parent___parent___internal___fieldOwners = 'parent___parent___internal___fieldOwners',
  parent___parent___internal___ignoreType = 'parent___parent___internal___ignoreType',
  parent___parent___internal___mediaType = 'parent___parent___internal___mediaType',
  parent___parent___internal___owner = 'parent___parent___internal___owner',
  parent___parent___internal___type = 'parent___parent___internal___type',
  parent___parent___parent___children = 'parent___parent___parent___children',
  parent___parent___parent___id = 'parent___parent___parent___id',
  path = 'path',
  sha1hash = 'sha1hash',
  size = 'size',
  source____key = 'source____key',
  source____type = 'source____type',
  source___id = 'source___id',
  source___name = 'source___name',
  source___url = 'source___url',
  title = 'title',
  uploadId = 'uploadId',
  url = 'url'
}

export type SanityImageAssetFilterInput = {
  _createdAt?: InputMaybe<DateQueryOperatorInput>;
  _id?: InputMaybe<StringQueryOperatorInput>;
  _key?: InputMaybe<StringQueryOperatorInput>;
  _rawMetadata?: InputMaybe<JsonQueryOperatorInput>;
  _rawSource?: InputMaybe<JsonQueryOperatorInput>;
  _rev?: InputMaybe<StringQueryOperatorInput>;
  _type?: InputMaybe<StringQueryOperatorInput>;
  _updatedAt?: InputMaybe<DateQueryOperatorInput>;
  altText?: InputMaybe<StringQueryOperatorInput>;
  assetId?: InputMaybe<StringQueryOperatorInput>;
  children?: InputMaybe<NodeFilterListInput>;
  description?: InputMaybe<StringQueryOperatorInput>;
  extension?: InputMaybe<StringQueryOperatorInput>;
  gatsbyImageData?: InputMaybe<JsonQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  label?: InputMaybe<StringQueryOperatorInput>;
  metadata?: InputMaybe<SanityImageMetadataFilterInput>;
  mimeType?: InputMaybe<StringQueryOperatorInput>;
  originalFilename?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  path?: InputMaybe<StringQueryOperatorInput>;
  sha1hash?: InputMaybe<StringQueryOperatorInput>;
  size?: InputMaybe<FloatQueryOperatorInput>;
  source?: InputMaybe<SanityAssetSourceDataFilterInput>;
  title?: InputMaybe<StringQueryOperatorInput>;
  uploadId?: InputMaybe<StringQueryOperatorInput>;
  url?: InputMaybe<StringQueryOperatorInput>;
};

export type SanityImageAssetGroupConnection = {
  __typename?: 'SanityImageAssetGroupConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<SanityImageAssetEdge>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
  group: Array<SanityImageAssetGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<SanityImageAsset>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type SanityImageAssetGroupConnectionDistinctArgs = {
  field: SanityImageAssetFieldsEnum;
};


export type SanityImageAssetGroupConnectionGroupArgs = {
  field: SanityImageAssetFieldsEnum;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type SanityImageAssetGroupConnectionMaxArgs = {
  field: SanityImageAssetFieldsEnum;
};


export type SanityImageAssetGroupConnectionMinArgs = {
  field: SanityImageAssetFieldsEnum;
};


export type SanityImageAssetGroupConnectionSumArgs = {
  field: SanityImageAssetFieldsEnum;
};

export type SanityImageAssetSortInput = {
  fields?: InputMaybe<Array<InputMaybe<SanityImageAssetFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type SanityImageCrop = {
  __typename?: 'SanityImageCrop';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  bottom?: Maybe<Scalars['Float']>;
  left?: Maybe<Scalars['Float']>;
  right?: Maybe<Scalars['Float']>;
  top?: Maybe<Scalars['Float']>;
};

export type SanityImageCropFilterInput = {
  _key?: InputMaybe<StringQueryOperatorInput>;
  _type?: InputMaybe<StringQueryOperatorInput>;
  bottom?: InputMaybe<FloatQueryOperatorInput>;
  left?: InputMaybe<FloatQueryOperatorInput>;
  right?: InputMaybe<FloatQueryOperatorInput>;
  top?: InputMaybe<FloatQueryOperatorInput>;
};

export type SanityImageDimensions = {
  __typename?: 'SanityImageDimensions';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  aspectRatio?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
};

export type SanityImageDimensionsFilterInput = {
  _key?: InputMaybe<StringQueryOperatorInput>;
  _type?: InputMaybe<StringQueryOperatorInput>;
  aspectRatio?: InputMaybe<FloatQueryOperatorInput>;
  height?: InputMaybe<FloatQueryOperatorInput>;
  width?: InputMaybe<FloatQueryOperatorInput>;
};

export type SanityImageFilterInput = {
  _key?: InputMaybe<StringQueryOperatorInput>;
  _rawAsset?: InputMaybe<JsonQueryOperatorInput>;
  _rawCrop?: InputMaybe<JsonQueryOperatorInput>;
  _rawHotspot?: InputMaybe<JsonQueryOperatorInput>;
  _type?: InputMaybe<StringQueryOperatorInput>;
  asset?: InputMaybe<SanityImageAssetFilterInput>;
  crop?: InputMaybe<SanityImageCropFilterInput>;
  hotspot?: InputMaybe<SanityImageHotspotFilterInput>;
};

export enum SanityImageFit {
  CLIP = 'CLIP',
  CROP = 'CROP',
  FILL = 'FILL',
  FILLMAX = 'FILLMAX',
  MAX = 'MAX',
  MIN = 'MIN',
  SCALE = 'SCALE'
}

export type SanityImageHotspot = {
  __typename?: 'SanityImageHotspot';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
  x?: Maybe<Scalars['Float']>;
  y?: Maybe<Scalars['Float']>;
};

export type SanityImageHotspotFilterInput = {
  _key?: InputMaybe<StringQueryOperatorInput>;
  _type?: InputMaybe<StringQueryOperatorInput>;
  height?: InputMaybe<FloatQueryOperatorInput>;
  width?: InputMaybe<FloatQueryOperatorInput>;
  x?: InputMaybe<FloatQueryOperatorInput>;
  y?: InputMaybe<FloatQueryOperatorInput>;
};

export type SanityImageMetadata = {
  __typename?: 'SanityImageMetadata';
  _key?: Maybe<Scalars['String']>;
  _rawDimensions?: Maybe<Scalars['JSON']>;
  _rawLocation?: Maybe<Scalars['JSON']>;
  _rawPalette?: Maybe<Scalars['JSON']>;
  _type?: Maybe<Scalars['String']>;
  blurHash?: Maybe<Scalars['String']>;
  dimensions?: Maybe<SanityImageDimensions>;
  hasAlpha?: Maybe<Scalars['Boolean']>;
  isOpaque?: Maybe<Scalars['Boolean']>;
  location?: Maybe<SanityGeopoint>;
  lqip?: Maybe<Scalars['String']>;
  palette?: Maybe<SanityImagePalette>;
};


export type SanityImageMetadata_RawDimensionsArgs = {
  resolveReferences?: InputMaybe<SanityResolveReferencesConfiguration>;
};


export type SanityImageMetadata_RawLocationArgs = {
  resolveReferences?: InputMaybe<SanityResolveReferencesConfiguration>;
};


export type SanityImageMetadata_RawPaletteArgs = {
  resolveReferences?: InputMaybe<SanityResolveReferencesConfiguration>;
};

export type SanityImageMetadataFilterInput = {
  _key?: InputMaybe<StringQueryOperatorInput>;
  _rawDimensions?: InputMaybe<JsonQueryOperatorInput>;
  _rawLocation?: InputMaybe<JsonQueryOperatorInput>;
  _rawPalette?: InputMaybe<JsonQueryOperatorInput>;
  _type?: InputMaybe<StringQueryOperatorInput>;
  blurHash?: InputMaybe<StringQueryOperatorInput>;
  dimensions?: InputMaybe<SanityImageDimensionsFilterInput>;
  hasAlpha?: InputMaybe<BooleanQueryOperatorInput>;
  isOpaque?: InputMaybe<BooleanQueryOperatorInput>;
  location?: InputMaybe<SanityGeopointFilterInput>;
  lqip?: InputMaybe<StringQueryOperatorInput>;
  palette?: InputMaybe<SanityImagePaletteFilterInput>;
};

export type SanityImagePalette = {
  __typename?: 'SanityImagePalette';
  _key?: Maybe<Scalars['String']>;
  _rawDarkMuted?: Maybe<Scalars['JSON']>;
  _rawDarkVibrant?: Maybe<Scalars['JSON']>;
  _rawDominant?: Maybe<Scalars['JSON']>;
  _rawLightMuted?: Maybe<Scalars['JSON']>;
  _rawLightVibrant?: Maybe<Scalars['JSON']>;
  _rawMuted?: Maybe<Scalars['JSON']>;
  _rawVibrant?: Maybe<Scalars['JSON']>;
  _type?: Maybe<Scalars['String']>;
  darkMuted?: Maybe<SanityImagePaletteSwatch>;
  darkVibrant?: Maybe<SanityImagePaletteSwatch>;
  dominant?: Maybe<SanityImagePaletteSwatch>;
  lightMuted?: Maybe<SanityImagePaletteSwatch>;
  lightVibrant?: Maybe<SanityImagePaletteSwatch>;
  muted?: Maybe<SanityImagePaletteSwatch>;
  vibrant?: Maybe<SanityImagePaletteSwatch>;
};


export type SanityImagePalette_RawDarkMutedArgs = {
  resolveReferences?: InputMaybe<SanityResolveReferencesConfiguration>;
};


export type SanityImagePalette_RawDarkVibrantArgs = {
  resolveReferences?: InputMaybe<SanityResolveReferencesConfiguration>;
};


export type SanityImagePalette_RawDominantArgs = {
  resolveReferences?: InputMaybe<SanityResolveReferencesConfiguration>;
};


export type SanityImagePalette_RawLightMutedArgs = {
  resolveReferences?: InputMaybe<SanityResolveReferencesConfiguration>;
};


export type SanityImagePalette_RawLightVibrantArgs = {
  resolveReferences?: InputMaybe<SanityResolveReferencesConfiguration>;
};


export type SanityImagePalette_RawMutedArgs = {
  resolveReferences?: InputMaybe<SanityResolveReferencesConfiguration>;
};


export type SanityImagePalette_RawVibrantArgs = {
  resolveReferences?: InputMaybe<SanityResolveReferencesConfiguration>;
};

export type SanityImagePaletteFilterInput = {
  _key?: InputMaybe<StringQueryOperatorInput>;
  _rawDarkMuted?: InputMaybe<JsonQueryOperatorInput>;
  _rawDarkVibrant?: InputMaybe<JsonQueryOperatorInput>;
  _rawDominant?: InputMaybe<JsonQueryOperatorInput>;
  _rawLightMuted?: InputMaybe<JsonQueryOperatorInput>;
  _rawLightVibrant?: InputMaybe<JsonQueryOperatorInput>;
  _rawMuted?: InputMaybe<JsonQueryOperatorInput>;
  _rawVibrant?: InputMaybe<JsonQueryOperatorInput>;
  _type?: InputMaybe<StringQueryOperatorInput>;
  darkMuted?: InputMaybe<SanityImagePaletteSwatchFilterInput>;
  darkVibrant?: InputMaybe<SanityImagePaletteSwatchFilterInput>;
  dominant?: InputMaybe<SanityImagePaletteSwatchFilterInput>;
  lightMuted?: InputMaybe<SanityImagePaletteSwatchFilterInput>;
  lightVibrant?: InputMaybe<SanityImagePaletteSwatchFilterInput>;
  muted?: InputMaybe<SanityImagePaletteSwatchFilterInput>;
  vibrant?: InputMaybe<SanityImagePaletteSwatchFilterInput>;
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
  _key?: InputMaybe<StringQueryOperatorInput>;
  _type?: InputMaybe<StringQueryOperatorInput>;
  background?: InputMaybe<StringQueryOperatorInput>;
  foreground?: InputMaybe<StringQueryOperatorInput>;
  population?: InputMaybe<FloatQueryOperatorInput>;
  title?: InputMaybe<StringQueryOperatorInput>;
};

export type SanityMinistryPage = Node & SanityDocument & {
  __typename?: 'SanityMinistryPage';
  _createdAt?: Maybe<Scalars['Date']>;
  _id?: Maybe<Scalars['String']>;
  _key?: Maybe<Scalars['String']>;
  _rawContent?: Maybe<Scalars['JSON']>;
  _rawSections?: Maybe<Scalars['JSON']>;
  _rawSubLogo?: Maybe<Scalars['JSON']>;
  _rawUrl?: Maybe<Scalars['JSON']>;
  _rev?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  _updatedAt?: Maybe<Scalars['Date']>;
  children: Array<Node>;
  content?: Maybe<Array<Maybe<SanityBlock>>>;
  id: Scalars['ID'];
  internal: Internal;
  name?: Maybe<Scalars['String']>;
  parent?: Maybe<Node>;
  sections?: Maybe<Array<Maybe<SanityPageSection>>>;
  subLogo?: Maybe<SanityImage>;
  subLogoWidth?: Maybe<Scalars['Float']>;
  url?: Maybe<SanitySlug>;
};


export type SanityMinistryPage_CreatedAtArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type SanityMinistryPage_RawContentArgs = {
  resolveReferences?: InputMaybe<SanityResolveReferencesConfiguration>;
};


export type SanityMinistryPage_RawSectionsArgs = {
  resolveReferences?: InputMaybe<SanityResolveReferencesConfiguration>;
};


export type SanityMinistryPage_RawSubLogoArgs = {
  resolveReferences?: InputMaybe<SanityResolveReferencesConfiguration>;
};


export type SanityMinistryPage_RawUrlArgs = {
  resolveReferences?: InputMaybe<SanityResolveReferencesConfiguration>;
};


export type SanityMinistryPage_UpdatedAtArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type SanityMinistryPageConnection = {
  __typename?: 'SanityMinistryPageConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<SanityMinistryPageEdge>;
  group: Array<SanityMinistryPageGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<SanityMinistryPage>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type SanityMinistryPageConnectionDistinctArgs = {
  field: SanityMinistryPageFieldsEnum;
};


export type SanityMinistryPageConnectionGroupArgs = {
  field: SanityMinistryPageFieldsEnum;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
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

export type SanityMinistryPageEdge = {
  __typename?: 'SanityMinistryPageEdge';
  next?: Maybe<SanityMinistryPage>;
  node: SanityMinistryPage;
  previous?: Maybe<SanityMinistryPage>;
};

export enum SanityMinistryPageFieldsEnum {
  _createdAt = '_createdAt',
  _id = '_id',
  _key = '_key',
  _rawContent = '_rawContent',
  _rawSections = '_rawSections',
  _rawSubLogo = '_rawSubLogo',
  _rawUrl = '_rawUrl',
  _rev = '_rev',
  _type = '_type',
  _updatedAt = '_updatedAt',
  children = 'children',
  children___children = 'children___children',
  children___children___children = 'children___children___children',
  children___children___children___children = 'children___children___children___children',
  children___children___children___id = 'children___children___children___id',
  children___children___id = 'children___children___id',
  children___children___internal___content = 'children___children___internal___content',
  children___children___internal___contentDigest = 'children___children___internal___contentDigest',
  children___children___internal___description = 'children___children___internal___description',
  children___children___internal___fieldOwners = 'children___children___internal___fieldOwners',
  children___children___internal___ignoreType = 'children___children___internal___ignoreType',
  children___children___internal___mediaType = 'children___children___internal___mediaType',
  children___children___internal___owner = 'children___children___internal___owner',
  children___children___internal___type = 'children___children___internal___type',
  children___children___parent___children = 'children___children___parent___children',
  children___children___parent___id = 'children___children___parent___id',
  children___id = 'children___id',
  children___internal___content = 'children___internal___content',
  children___internal___contentDigest = 'children___internal___contentDigest',
  children___internal___description = 'children___internal___description',
  children___internal___fieldOwners = 'children___internal___fieldOwners',
  children___internal___ignoreType = 'children___internal___ignoreType',
  children___internal___mediaType = 'children___internal___mediaType',
  children___internal___owner = 'children___internal___owner',
  children___internal___type = 'children___internal___type',
  children___parent___children = 'children___parent___children',
  children___parent___children___children = 'children___parent___children___children',
  children___parent___children___id = 'children___parent___children___id',
  children___parent___id = 'children___parent___id',
  children___parent___internal___content = 'children___parent___internal___content',
  children___parent___internal___contentDigest = 'children___parent___internal___contentDigest',
  children___parent___internal___description = 'children___parent___internal___description',
  children___parent___internal___fieldOwners = 'children___parent___internal___fieldOwners',
  children___parent___internal___ignoreType = 'children___parent___internal___ignoreType',
  children___parent___internal___mediaType = 'children___parent___internal___mediaType',
  children___parent___internal___owner = 'children___parent___internal___owner',
  children___parent___internal___type = 'children___parent___internal___type',
  children___parent___parent___children = 'children___parent___parent___children',
  children___parent___parent___id = 'children___parent___parent___id',
  content = 'content',
  content____key = 'content____key',
  content____rawChildren = 'content____rawChildren',
  content____type = 'content____type',
  content___children = 'content___children',
  content___children____key = 'content___children____key',
  content___children____type = 'content___children____type',
  content___children___marks = 'content___children___marks',
  content___children___text = 'content___children___text',
  content___list = 'content___list',
  content___style = 'content___style',
  id = 'id',
  internal___content = 'internal___content',
  internal___contentDigest = 'internal___contentDigest',
  internal___description = 'internal___description',
  internal___fieldOwners = 'internal___fieldOwners',
  internal___ignoreType = 'internal___ignoreType',
  internal___mediaType = 'internal___mediaType',
  internal___owner = 'internal___owner',
  internal___type = 'internal___type',
  name = 'name',
  parent___children = 'parent___children',
  parent___children___children = 'parent___children___children',
  parent___children___children___children = 'parent___children___children___children',
  parent___children___children___id = 'parent___children___children___id',
  parent___children___id = 'parent___children___id',
  parent___children___internal___content = 'parent___children___internal___content',
  parent___children___internal___contentDigest = 'parent___children___internal___contentDigest',
  parent___children___internal___description = 'parent___children___internal___description',
  parent___children___internal___fieldOwners = 'parent___children___internal___fieldOwners',
  parent___children___internal___ignoreType = 'parent___children___internal___ignoreType',
  parent___children___internal___mediaType = 'parent___children___internal___mediaType',
  parent___children___internal___owner = 'parent___children___internal___owner',
  parent___children___internal___type = 'parent___children___internal___type',
  parent___children___parent___children = 'parent___children___parent___children',
  parent___children___parent___id = 'parent___children___parent___id',
  parent___id = 'parent___id',
  parent___internal___content = 'parent___internal___content',
  parent___internal___contentDigest = 'parent___internal___contentDigest',
  parent___internal___description = 'parent___internal___description',
  parent___internal___fieldOwners = 'parent___internal___fieldOwners',
  parent___internal___ignoreType = 'parent___internal___ignoreType',
  parent___internal___mediaType = 'parent___internal___mediaType',
  parent___internal___owner = 'parent___internal___owner',
  parent___internal___type = 'parent___internal___type',
  parent___parent___children = 'parent___parent___children',
  parent___parent___children___children = 'parent___parent___children___children',
  parent___parent___children___id = 'parent___parent___children___id',
  parent___parent___id = 'parent___parent___id',
  parent___parent___internal___content = 'parent___parent___internal___content',
  parent___parent___internal___contentDigest = 'parent___parent___internal___contentDigest',
  parent___parent___internal___description = 'parent___parent___internal___description',
  parent___parent___internal___fieldOwners = 'parent___parent___internal___fieldOwners',
  parent___parent___internal___ignoreType = 'parent___parent___internal___ignoreType',
  parent___parent___internal___mediaType = 'parent___parent___internal___mediaType',
  parent___parent___internal___owner = 'parent___parent___internal___owner',
  parent___parent___internal___type = 'parent___parent___internal___type',
  parent___parent___parent___children = 'parent___parent___parent___children',
  parent___parent___parent___id = 'parent___parent___parent___id',
  sections = 'sections',
  sections____key = 'sections____key',
  sections____rawContent = 'sections____rawContent',
  sections____rawUrlSuffix = 'sections____rawUrlSuffix',
  sections____type = 'sections____type',
  sections___content = 'sections___content',
  sections___content____key = 'sections___content____key',
  sections___content____rawChildren = 'sections___content____rawChildren',
  sections___content____type = 'sections___content____type',
  sections___content___children = 'sections___content___children',
  sections___content___children____key = 'sections___content___children____key',
  sections___content___children____type = 'sections___content___children____type',
  sections___content___children___marks = 'sections___content___children___marks',
  sections___content___children___text = 'sections___content___children___text',
  sections___content___list = 'sections___content___list',
  sections___content___style = 'sections___content___style',
  sections___hidden = 'sections___hidden',
  sections___name = 'sections___name',
  sections___urlSuffix____key = 'sections___urlSuffix____key',
  sections___urlSuffix____type = 'sections___urlSuffix____type',
  sections___urlSuffix___current = 'sections___urlSuffix___current',
  subLogoWidth = 'subLogoWidth',
  subLogo____key = 'subLogo____key',
  subLogo____rawAsset = 'subLogo____rawAsset',
  subLogo____rawCrop = 'subLogo____rawCrop',
  subLogo____rawHotspot = 'subLogo____rawHotspot',
  subLogo____type = 'subLogo____type',
  subLogo___asset____createdAt = 'subLogo___asset____createdAt',
  subLogo___asset____id = 'subLogo___asset____id',
  subLogo___asset____key = 'subLogo___asset____key',
  subLogo___asset____rawMetadata = 'subLogo___asset____rawMetadata',
  subLogo___asset____rawSource = 'subLogo___asset____rawSource',
  subLogo___asset____rev = 'subLogo___asset____rev',
  subLogo___asset____type = 'subLogo___asset____type',
  subLogo___asset____updatedAt = 'subLogo___asset____updatedAt',
  subLogo___asset___altText = 'subLogo___asset___altText',
  subLogo___asset___assetId = 'subLogo___asset___assetId',
  subLogo___asset___children = 'subLogo___asset___children',
  subLogo___asset___children___children = 'subLogo___asset___children___children',
  subLogo___asset___children___id = 'subLogo___asset___children___id',
  subLogo___asset___description = 'subLogo___asset___description',
  subLogo___asset___extension = 'subLogo___asset___extension',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  subLogo___asset___gatsbyImageData = 'subLogo___asset___gatsbyImageData',
  subLogo___asset___id = 'subLogo___asset___id',
  subLogo___asset___internal___content = 'subLogo___asset___internal___content',
  subLogo___asset___internal___contentDigest = 'subLogo___asset___internal___contentDigest',
  subLogo___asset___internal___description = 'subLogo___asset___internal___description',
  subLogo___asset___internal___fieldOwners = 'subLogo___asset___internal___fieldOwners',
  subLogo___asset___internal___ignoreType = 'subLogo___asset___internal___ignoreType',
  subLogo___asset___internal___mediaType = 'subLogo___asset___internal___mediaType',
  subLogo___asset___internal___owner = 'subLogo___asset___internal___owner',
  subLogo___asset___internal___type = 'subLogo___asset___internal___type',
  subLogo___asset___label = 'subLogo___asset___label',
  subLogo___asset___metadata____key = 'subLogo___asset___metadata____key',
  subLogo___asset___metadata____rawDimensions = 'subLogo___asset___metadata____rawDimensions',
  subLogo___asset___metadata____rawLocation = 'subLogo___asset___metadata____rawLocation',
  subLogo___asset___metadata____rawPalette = 'subLogo___asset___metadata____rawPalette',
  subLogo___asset___metadata____type = 'subLogo___asset___metadata____type',
  subLogo___asset___metadata___blurHash = 'subLogo___asset___metadata___blurHash',
  subLogo___asset___metadata___hasAlpha = 'subLogo___asset___metadata___hasAlpha',
  subLogo___asset___metadata___isOpaque = 'subLogo___asset___metadata___isOpaque',
  subLogo___asset___metadata___lqip = 'subLogo___asset___metadata___lqip',
  subLogo___asset___mimeType = 'subLogo___asset___mimeType',
  subLogo___asset___originalFilename = 'subLogo___asset___originalFilename',
  subLogo___asset___parent___children = 'subLogo___asset___parent___children',
  subLogo___asset___parent___id = 'subLogo___asset___parent___id',
  subLogo___asset___path = 'subLogo___asset___path',
  subLogo___asset___sha1hash = 'subLogo___asset___sha1hash',
  subLogo___asset___size = 'subLogo___asset___size',
  subLogo___asset___source____key = 'subLogo___asset___source____key',
  subLogo___asset___source____type = 'subLogo___asset___source____type',
  subLogo___asset___source___id = 'subLogo___asset___source___id',
  subLogo___asset___source___name = 'subLogo___asset___source___name',
  subLogo___asset___source___url = 'subLogo___asset___source___url',
  subLogo___asset___title = 'subLogo___asset___title',
  subLogo___asset___uploadId = 'subLogo___asset___uploadId',
  subLogo___asset___url = 'subLogo___asset___url',
  subLogo___crop____key = 'subLogo___crop____key',
  subLogo___crop____type = 'subLogo___crop____type',
  subLogo___crop___bottom = 'subLogo___crop___bottom',
  subLogo___crop___left = 'subLogo___crop___left',
  subLogo___crop___right = 'subLogo___crop___right',
  subLogo___crop___top = 'subLogo___crop___top',
  subLogo___hotspot____key = 'subLogo___hotspot____key',
  subLogo___hotspot____type = 'subLogo___hotspot____type',
  subLogo___hotspot___height = 'subLogo___hotspot___height',
  subLogo___hotspot___width = 'subLogo___hotspot___width',
  subLogo___hotspot___x = 'subLogo___hotspot___x',
  subLogo___hotspot___y = 'subLogo___hotspot___y',
  url____key = 'url____key',
  url____type = 'url____type',
  url___current = 'url___current'
}

export type SanityMinistryPageFilterInput = {
  _createdAt?: InputMaybe<DateQueryOperatorInput>;
  _id?: InputMaybe<StringQueryOperatorInput>;
  _key?: InputMaybe<StringQueryOperatorInput>;
  _rawContent?: InputMaybe<JsonQueryOperatorInput>;
  _rawSections?: InputMaybe<JsonQueryOperatorInput>;
  _rawSubLogo?: InputMaybe<JsonQueryOperatorInput>;
  _rawUrl?: InputMaybe<JsonQueryOperatorInput>;
  _rev?: InputMaybe<StringQueryOperatorInput>;
  _type?: InputMaybe<StringQueryOperatorInput>;
  _updatedAt?: InputMaybe<DateQueryOperatorInput>;
  children?: InputMaybe<NodeFilterListInput>;
  content?: InputMaybe<SanityBlockFilterListInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  sections?: InputMaybe<SanityPageSectionFilterListInput>;
  subLogo?: InputMaybe<SanityImageFilterInput>;
  subLogoWidth?: InputMaybe<FloatQueryOperatorInput>;
  url?: InputMaybe<SanitySlugFilterInput>;
};

export type SanityMinistryPageFilterListInput = {
  elemMatch?: InputMaybe<SanityMinistryPageFilterInput>;
};

export type SanityMinistryPageGroupConnection = {
  __typename?: 'SanityMinistryPageGroupConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<SanityMinistryPageEdge>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
  group: Array<SanityMinistryPageGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<SanityMinistryPage>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type SanityMinistryPageGroupConnectionDistinctArgs = {
  field: SanityMinistryPageFieldsEnum;
};


export type SanityMinistryPageGroupConnectionGroupArgs = {
  field: SanityMinistryPageFieldsEnum;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type SanityMinistryPageGroupConnectionMaxArgs = {
  field: SanityMinistryPageFieldsEnum;
};


export type SanityMinistryPageGroupConnectionMinArgs = {
  field: SanityMinistryPageFieldsEnum;
};


export type SanityMinistryPageGroupConnectionSumArgs = {
  field: SanityMinistryPageFieldsEnum;
};

export type SanityMinistryPageOrPage = SanityMinistryPage | SanityPage;

export type SanityMinistryPageSortInput = {
  fields?: InputMaybe<Array<InputMaybe<SanityMinistryPageFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type SanityNavigation = Node & SanityDocument & {
  __typename?: 'SanityNavigation';
  _createdAt?: Maybe<Scalars['Date']>;
  _id?: Maybe<Scalars['String']>;
  _key?: Maybe<Scalars['String']>;
  _rawItems?: Maybe<Scalars['JSON']>;
  _rev?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  _updatedAt?: Maybe<Scalars['Date']>;
  children: Array<Node>;
  id: Scalars['ID'];
  internal: Internal;
  items?: Maybe<Array<Maybe<SanityNestedMenuOrPageLinkOrPlainLink>>>;
  parent?: Maybe<Node>;
};


export type SanityNavigation_CreatedAtArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type SanityNavigation_RawItemsArgs = {
  resolveReferences?: InputMaybe<SanityResolveReferencesConfiguration>;
};


export type SanityNavigation_UpdatedAtArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type SanityNavigationConnection = {
  __typename?: 'SanityNavigationConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<SanityNavigationEdge>;
  group: Array<SanityNavigationGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<SanityNavigation>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type SanityNavigationConnectionDistinctArgs = {
  field: SanityNavigationFieldsEnum;
};


export type SanityNavigationConnectionGroupArgs = {
  field: SanityNavigationFieldsEnum;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
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

export type SanityNavigationEdge = {
  __typename?: 'SanityNavigationEdge';
  next?: Maybe<SanityNavigation>;
  node: SanityNavigation;
  previous?: Maybe<SanityNavigation>;
};

export enum SanityNavigationFieldsEnum {
  _createdAt = '_createdAt',
  _id = '_id',
  _key = '_key',
  _rawItems = '_rawItems',
  _rev = '_rev',
  _type = '_type',
  _updatedAt = '_updatedAt',
  children = 'children',
  children___children = 'children___children',
  children___children___children = 'children___children___children',
  children___children___children___children = 'children___children___children___children',
  children___children___children___id = 'children___children___children___id',
  children___children___id = 'children___children___id',
  children___children___internal___content = 'children___children___internal___content',
  children___children___internal___contentDigest = 'children___children___internal___contentDigest',
  children___children___internal___description = 'children___children___internal___description',
  children___children___internal___fieldOwners = 'children___children___internal___fieldOwners',
  children___children___internal___ignoreType = 'children___children___internal___ignoreType',
  children___children___internal___mediaType = 'children___children___internal___mediaType',
  children___children___internal___owner = 'children___children___internal___owner',
  children___children___internal___type = 'children___children___internal___type',
  children___children___parent___children = 'children___children___parent___children',
  children___children___parent___id = 'children___children___parent___id',
  children___id = 'children___id',
  children___internal___content = 'children___internal___content',
  children___internal___contentDigest = 'children___internal___contentDigest',
  children___internal___description = 'children___internal___description',
  children___internal___fieldOwners = 'children___internal___fieldOwners',
  children___internal___ignoreType = 'children___internal___ignoreType',
  children___internal___mediaType = 'children___internal___mediaType',
  children___internal___owner = 'children___internal___owner',
  children___internal___type = 'children___internal___type',
  children___parent___children = 'children___parent___children',
  children___parent___children___children = 'children___parent___children___children',
  children___parent___children___id = 'children___parent___children___id',
  children___parent___id = 'children___parent___id',
  children___parent___internal___content = 'children___parent___internal___content',
  children___parent___internal___contentDigest = 'children___parent___internal___contentDigest',
  children___parent___internal___description = 'children___parent___internal___description',
  children___parent___internal___fieldOwners = 'children___parent___internal___fieldOwners',
  children___parent___internal___ignoreType = 'children___parent___internal___ignoreType',
  children___parent___internal___mediaType = 'children___parent___internal___mediaType',
  children___parent___internal___owner = 'children___parent___internal___owner',
  children___parent___internal___type = 'children___parent___internal___type',
  children___parent___parent___children = 'children___parent___parent___children',
  children___parent___parent___id = 'children___parent___parent___id',
  id = 'id',
  internal___content = 'internal___content',
  internal___contentDigest = 'internal___contentDigest',
  internal___description = 'internal___description',
  internal___fieldOwners = 'internal___fieldOwners',
  internal___ignoreType = 'internal___ignoreType',
  internal___mediaType = 'internal___mediaType',
  internal___owner = 'internal___owner',
  internal___type = 'internal___type',
  parent___children = 'parent___children',
  parent___children___children = 'parent___children___children',
  parent___children___children___children = 'parent___children___children___children',
  parent___children___children___id = 'parent___children___children___id',
  parent___children___id = 'parent___children___id',
  parent___children___internal___content = 'parent___children___internal___content',
  parent___children___internal___contentDigest = 'parent___children___internal___contentDigest',
  parent___children___internal___description = 'parent___children___internal___description',
  parent___children___internal___fieldOwners = 'parent___children___internal___fieldOwners',
  parent___children___internal___ignoreType = 'parent___children___internal___ignoreType',
  parent___children___internal___mediaType = 'parent___children___internal___mediaType',
  parent___children___internal___owner = 'parent___children___internal___owner',
  parent___children___internal___type = 'parent___children___internal___type',
  parent___children___parent___children = 'parent___children___parent___children',
  parent___children___parent___id = 'parent___children___parent___id',
  parent___id = 'parent___id',
  parent___internal___content = 'parent___internal___content',
  parent___internal___contentDigest = 'parent___internal___contentDigest',
  parent___internal___description = 'parent___internal___description',
  parent___internal___fieldOwners = 'parent___internal___fieldOwners',
  parent___internal___ignoreType = 'parent___internal___ignoreType',
  parent___internal___mediaType = 'parent___internal___mediaType',
  parent___internal___owner = 'parent___internal___owner',
  parent___internal___type = 'parent___internal___type',
  parent___parent___children = 'parent___parent___children',
  parent___parent___children___children = 'parent___parent___children___children',
  parent___parent___children___id = 'parent___parent___children___id',
  parent___parent___id = 'parent___parent___id',
  parent___parent___internal___content = 'parent___parent___internal___content',
  parent___parent___internal___contentDigest = 'parent___parent___internal___contentDigest',
  parent___parent___internal___description = 'parent___parent___internal___description',
  parent___parent___internal___fieldOwners = 'parent___parent___internal___fieldOwners',
  parent___parent___internal___ignoreType = 'parent___parent___internal___ignoreType',
  parent___parent___internal___mediaType = 'parent___parent___internal___mediaType',
  parent___parent___internal___owner = 'parent___parent___internal___owner',
  parent___parent___internal___type = 'parent___parent___internal___type',
  parent___parent___parent___children = 'parent___parent___parent___children',
  parent___parent___parent___id = 'parent___parent___parent___id'
}

export type SanityNavigationFilterInput = {
  _createdAt?: InputMaybe<DateQueryOperatorInput>;
  _id?: InputMaybe<StringQueryOperatorInput>;
  _key?: InputMaybe<StringQueryOperatorInput>;
  _rawItems?: InputMaybe<JsonQueryOperatorInput>;
  _rev?: InputMaybe<StringQueryOperatorInput>;
  _type?: InputMaybe<StringQueryOperatorInput>;
  _updatedAt?: InputMaybe<DateQueryOperatorInput>;
  children?: InputMaybe<NodeFilterListInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  parent?: InputMaybe<NodeFilterInput>;
};

export type SanityNavigationGroupConnection = {
  __typename?: 'SanityNavigationGroupConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<SanityNavigationEdge>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
  group: Array<SanityNavigationGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<SanityNavigation>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type SanityNavigationGroupConnectionDistinctArgs = {
  field: SanityNavigationFieldsEnum;
};


export type SanityNavigationGroupConnectionGroupArgs = {
  field: SanityNavigationFieldsEnum;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type SanityNavigationGroupConnectionMaxArgs = {
  field: SanityNavigationFieldsEnum;
};


export type SanityNavigationGroupConnectionMinArgs = {
  field: SanityNavigationFieldsEnum;
};


export type SanityNavigationGroupConnectionSumArgs = {
  field: SanityNavigationFieldsEnum;
};

export type SanityNavigationSortInput = {
  fields?: InputMaybe<Array<InputMaybe<SanityNavigationFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type SanityNestedMenu = {
  __typename?: 'SanityNestedMenu';
  _key?: Maybe<Scalars['String']>;
  _rawItems?: Maybe<Scalars['JSON']>;
  _type?: Maybe<Scalars['String']>;
  items?: Maybe<Array<Maybe<SanityPageLinkOrPlainLink>>>;
  text?: Maybe<Scalars['String']>;
};


export type SanityNestedMenu_RawItemsArgs = {
  resolveReferences?: InputMaybe<SanityResolveReferencesConfiguration>;
};

export type SanityNestedMenuOrPageLinkOrPlainLink = SanityNestedMenu | SanityPageLink | SanityPlainLink;

export type SanityNewsletter = Node & SanityDocument & {
  __typename?: 'SanityNewsletter';
  _createdAt?: Maybe<Scalars['Date']>;
  _id?: Maybe<Scalars['String']>;
  _key?: Maybe<Scalars['String']>;
  _rev?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  _updatedAt?: Maybe<Scalars['Date']>;
  children: Array<Node>;
  date?: Maybe<Scalars['Date']>;
  id: Scalars['ID'];
  internal: Internal;
  link?: Maybe<Scalars['String']>;
  parent?: Maybe<Node>;
};


export type SanityNewsletter_CreatedAtArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type SanityNewsletter_UpdatedAtArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type SanityNewsletterDateArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type SanityNewsletterConnection = {
  __typename?: 'SanityNewsletterConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<SanityNewsletterEdge>;
  group: Array<SanityNewsletterGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<SanityNewsletter>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type SanityNewsletterConnectionDistinctArgs = {
  field: SanityNewsletterFieldsEnum;
};


export type SanityNewsletterConnectionGroupArgs = {
  field: SanityNewsletterFieldsEnum;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
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

export type SanityNewsletterEdge = {
  __typename?: 'SanityNewsletterEdge';
  next?: Maybe<SanityNewsletter>;
  node: SanityNewsletter;
  previous?: Maybe<SanityNewsletter>;
};

export enum SanityNewsletterFieldsEnum {
  _createdAt = '_createdAt',
  _id = '_id',
  _key = '_key',
  _rev = '_rev',
  _type = '_type',
  _updatedAt = '_updatedAt',
  children = 'children',
  children___children = 'children___children',
  children___children___children = 'children___children___children',
  children___children___children___children = 'children___children___children___children',
  children___children___children___id = 'children___children___children___id',
  children___children___id = 'children___children___id',
  children___children___internal___content = 'children___children___internal___content',
  children___children___internal___contentDigest = 'children___children___internal___contentDigest',
  children___children___internal___description = 'children___children___internal___description',
  children___children___internal___fieldOwners = 'children___children___internal___fieldOwners',
  children___children___internal___ignoreType = 'children___children___internal___ignoreType',
  children___children___internal___mediaType = 'children___children___internal___mediaType',
  children___children___internal___owner = 'children___children___internal___owner',
  children___children___internal___type = 'children___children___internal___type',
  children___children___parent___children = 'children___children___parent___children',
  children___children___parent___id = 'children___children___parent___id',
  children___id = 'children___id',
  children___internal___content = 'children___internal___content',
  children___internal___contentDigest = 'children___internal___contentDigest',
  children___internal___description = 'children___internal___description',
  children___internal___fieldOwners = 'children___internal___fieldOwners',
  children___internal___ignoreType = 'children___internal___ignoreType',
  children___internal___mediaType = 'children___internal___mediaType',
  children___internal___owner = 'children___internal___owner',
  children___internal___type = 'children___internal___type',
  children___parent___children = 'children___parent___children',
  children___parent___children___children = 'children___parent___children___children',
  children___parent___children___id = 'children___parent___children___id',
  children___parent___id = 'children___parent___id',
  children___parent___internal___content = 'children___parent___internal___content',
  children___parent___internal___contentDigest = 'children___parent___internal___contentDigest',
  children___parent___internal___description = 'children___parent___internal___description',
  children___parent___internal___fieldOwners = 'children___parent___internal___fieldOwners',
  children___parent___internal___ignoreType = 'children___parent___internal___ignoreType',
  children___parent___internal___mediaType = 'children___parent___internal___mediaType',
  children___parent___internal___owner = 'children___parent___internal___owner',
  children___parent___internal___type = 'children___parent___internal___type',
  children___parent___parent___children = 'children___parent___parent___children',
  children___parent___parent___id = 'children___parent___parent___id',
  date = 'date',
  id = 'id',
  internal___content = 'internal___content',
  internal___contentDigest = 'internal___contentDigest',
  internal___description = 'internal___description',
  internal___fieldOwners = 'internal___fieldOwners',
  internal___ignoreType = 'internal___ignoreType',
  internal___mediaType = 'internal___mediaType',
  internal___owner = 'internal___owner',
  internal___type = 'internal___type',
  link = 'link',
  parent___children = 'parent___children',
  parent___children___children = 'parent___children___children',
  parent___children___children___children = 'parent___children___children___children',
  parent___children___children___id = 'parent___children___children___id',
  parent___children___id = 'parent___children___id',
  parent___children___internal___content = 'parent___children___internal___content',
  parent___children___internal___contentDigest = 'parent___children___internal___contentDigest',
  parent___children___internal___description = 'parent___children___internal___description',
  parent___children___internal___fieldOwners = 'parent___children___internal___fieldOwners',
  parent___children___internal___ignoreType = 'parent___children___internal___ignoreType',
  parent___children___internal___mediaType = 'parent___children___internal___mediaType',
  parent___children___internal___owner = 'parent___children___internal___owner',
  parent___children___internal___type = 'parent___children___internal___type',
  parent___children___parent___children = 'parent___children___parent___children',
  parent___children___parent___id = 'parent___children___parent___id',
  parent___id = 'parent___id',
  parent___internal___content = 'parent___internal___content',
  parent___internal___contentDigest = 'parent___internal___contentDigest',
  parent___internal___description = 'parent___internal___description',
  parent___internal___fieldOwners = 'parent___internal___fieldOwners',
  parent___internal___ignoreType = 'parent___internal___ignoreType',
  parent___internal___mediaType = 'parent___internal___mediaType',
  parent___internal___owner = 'parent___internal___owner',
  parent___internal___type = 'parent___internal___type',
  parent___parent___children = 'parent___parent___children',
  parent___parent___children___children = 'parent___parent___children___children',
  parent___parent___children___id = 'parent___parent___children___id',
  parent___parent___id = 'parent___parent___id',
  parent___parent___internal___content = 'parent___parent___internal___content',
  parent___parent___internal___contentDigest = 'parent___parent___internal___contentDigest',
  parent___parent___internal___description = 'parent___parent___internal___description',
  parent___parent___internal___fieldOwners = 'parent___parent___internal___fieldOwners',
  parent___parent___internal___ignoreType = 'parent___parent___internal___ignoreType',
  parent___parent___internal___mediaType = 'parent___parent___internal___mediaType',
  parent___parent___internal___owner = 'parent___parent___internal___owner',
  parent___parent___internal___type = 'parent___parent___internal___type',
  parent___parent___parent___children = 'parent___parent___parent___children',
  parent___parent___parent___id = 'parent___parent___parent___id'
}

export type SanityNewsletterFilterInput = {
  _createdAt?: InputMaybe<DateQueryOperatorInput>;
  _id?: InputMaybe<StringQueryOperatorInput>;
  _key?: InputMaybe<StringQueryOperatorInput>;
  _rev?: InputMaybe<StringQueryOperatorInput>;
  _type?: InputMaybe<StringQueryOperatorInput>;
  _updatedAt?: InputMaybe<DateQueryOperatorInput>;
  children?: InputMaybe<NodeFilterListInput>;
  date?: InputMaybe<DateQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  link?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
};

export type SanityNewsletterGroupConnection = {
  __typename?: 'SanityNewsletterGroupConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<SanityNewsletterEdge>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
  group: Array<SanityNewsletterGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<SanityNewsletter>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type SanityNewsletterGroupConnectionDistinctArgs = {
  field: SanityNewsletterFieldsEnum;
};


export type SanityNewsletterGroupConnectionGroupArgs = {
  field: SanityNewsletterFieldsEnum;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type SanityNewsletterGroupConnectionMaxArgs = {
  field: SanityNewsletterFieldsEnum;
};


export type SanityNewsletterGroupConnectionMinArgs = {
  field: SanityNewsletterFieldsEnum;
};


export type SanityNewsletterGroupConnectionSumArgs = {
  field: SanityNewsletterFieldsEnum;
};

export type SanityNewsletterSortInput = {
  fields?: InputMaybe<Array<InputMaybe<SanityNewsletterFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type SanityPage = Node & SanityDocument & {
  __typename?: 'SanityPage';
  _createdAt?: Maybe<Scalars['Date']>;
  _id?: Maybe<Scalars['String']>;
  _key?: Maybe<Scalars['String']>;
  _rawContent?: Maybe<Scalars['JSON']>;
  _rawUrl?: Maybe<Scalars['JSON']>;
  _rev?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  _updatedAt?: Maybe<Scalars['Date']>;
  children: Array<Node>;
  content?: Maybe<Array<Maybe<SanityBlock>>>;
  id: Scalars['ID'];
  internal: Internal;
  name?: Maybe<Scalars['String']>;
  parent?: Maybe<Node>;
  url?: Maybe<SanitySlug>;
};


export type SanityPage_CreatedAtArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type SanityPage_RawContentArgs = {
  resolveReferences?: InputMaybe<SanityResolveReferencesConfiguration>;
};


export type SanityPage_RawUrlArgs = {
  resolveReferences?: InputMaybe<SanityResolveReferencesConfiguration>;
};


export type SanityPage_UpdatedAtArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type SanityPageConnection = {
  __typename?: 'SanityPageConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<SanityPageEdge>;
  group: Array<SanityPageGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<SanityPage>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type SanityPageConnectionDistinctArgs = {
  field: SanityPageFieldsEnum;
};


export type SanityPageConnectionGroupArgs = {
  field: SanityPageFieldsEnum;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
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

export type SanityPageEdge = {
  __typename?: 'SanityPageEdge';
  next?: Maybe<SanityPage>;
  node: SanityPage;
  previous?: Maybe<SanityPage>;
};

export enum SanityPageFieldsEnum {
  _createdAt = '_createdAt',
  _id = '_id',
  _key = '_key',
  _rawContent = '_rawContent',
  _rawUrl = '_rawUrl',
  _rev = '_rev',
  _type = '_type',
  _updatedAt = '_updatedAt',
  children = 'children',
  children___children = 'children___children',
  children___children___children = 'children___children___children',
  children___children___children___children = 'children___children___children___children',
  children___children___children___id = 'children___children___children___id',
  children___children___id = 'children___children___id',
  children___children___internal___content = 'children___children___internal___content',
  children___children___internal___contentDigest = 'children___children___internal___contentDigest',
  children___children___internal___description = 'children___children___internal___description',
  children___children___internal___fieldOwners = 'children___children___internal___fieldOwners',
  children___children___internal___ignoreType = 'children___children___internal___ignoreType',
  children___children___internal___mediaType = 'children___children___internal___mediaType',
  children___children___internal___owner = 'children___children___internal___owner',
  children___children___internal___type = 'children___children___internal___type',
  children___children___parent___children = 'children___children___parent___children',
  children___children___parent___id = 'children___children___parent___id',
  children___id = 'children___id',
  children___internal___content = 'children___internal___content',
  children___internal___contentDigest = 'children___internal___contentDigest',
  children___internal___description = 'children___internal___description',
  children___internal___fieldOwners = 'children___internal___fieldOwners',
  children___internal___ignoreType = 'children___internal___ignoreType',
  children___internal___mediaType = 'children___internal___mediaType',
  children___internal___owner = 'children___internal___owner',
  children___internal___type = 'children___internal___type',
  children___parent___children = 'children___parent___children',
  children___parent___children___children = 'children___parent___children___children',
  children___parent___children___id = 'children___parent___children___id',
  children___parent___id = 'children___parent___id',
  children___parent___internal___content = 'children___parent___internal___content',
  children___parent___internal___contentDigest = 'children___parent___internal___contentDigest',
  children___parent___internal___description = 'children___parent___internal___description',
  children___parent___internal___fieldOwners = 'children___parent___internal___fieldOwners',
  children___parent___internal___ignoreType = 'children___parent___internal___ignoreType',
  children___parent___internal___mediaType = 'children___parent___internal___mediaType',
  children___parent___internal___owner = 'children___parent___internal___owner',
  children___parent___internal___type = 'children___parent___internal___type',
  children___parent___parent___children = 'children___parent___parent___children',
  children___parent___parent___id = 'children___parent___parent___id',
  content = 'content',
  content____key = 'content____key',
  content____rawChildren = 'content____rawChildren',
  content____type = 'content____type',
  content___children = 'content___children',
  content___children____key = 'content___children____key',
  content___children____type = 'content___children____type',
  content___children___marks = 'content___children___marks',
  content___children___text = 'content___children___text',
  content___list = 'content___list',
  content___style = 'content___style',
  id = 'id',
  internal___content = 'internal___content',
  internal___contentDigest = 'internal___contentDigest',
  internal___description = 'internal___description',
  internal___fieldOwners = 'internal___fieldOwners',
  internal___ignoreType = 'internal___ignoreType',
  internal___mediaType = 'internal___mediaType',
  internal___owner = 'internal___owner',
  internal___type = 'internal___type',
  name = 'name',
  parent___children = 'parent___children',
  parent___children___children = 'parent___children___children',
  parent___children___children___children = 'parent___children___children___children',
  parent___children___children___id = 'parent___children___children___id',
  parent___children___id = 'parent___children___id',
  parent___children___internal___content = 'parent___children___internal___content',
  parent___children___internal___contentDigest = 'parent___children___internal___contentDigest',
  parent___children___internal___description = 'parent___children___internal___description',
  parent___children___internal___fieldOwners = 'parent___children___internal___fieldOwners',
  parent___children___internal___ignoreType = 'parent___children___internal___ignoreType',
  parent___children___internal___mediaType = 'parent___children___internal___mediaType',
  parent___children___internal___owner = 'parent___children___internal___owner',
  parent___children___internal___type = 'parent___children___internal___type',
  parent___children___parent___children = 'parent___children___parent___children',
  parent___children___parent___id = 'parent___children___parent___id',
  parent___id = 'parent___id',
  parent___internal___content = 'parent___internal___content',
  parent___internal___contentDigest = 'parent___internal___contentDigest',
  parent___internal___description = 'parent___internal___description',
  parent___internal___fieldOwners = 'parent___internal___fieldOwners',
  parent___internal___ignoreType = 'parent___internal___ignoreType',
  parent___internal___mediaType = 'parent___internal___mediaType',
  parent___internal___owner = 'parent___internal___owner',
  parent___internal___type = 'parent___internal___type',
  parent___parent___children = 'parent___parent___children',
  parent___parent___children___children = 'parent___parent___children___children',
  parent___parent___children___id = 'parent___parent___children___id',
  parent___parent___id = 'parent___parent___id',
  parent___parent___internal___content = 'parent___parent___internal___content',
  parent___parent___internal___contentDigest = 'parent___parent___internal___contentDigest',
  parent___parent___internal___description = 'parent___parent___internal___description',
  parent___parent___internal___fieldOwners = 'parent___parent___internal___fieldOwners',
  parent___parent___internal___ignoreType = 'parent___parent___internal___ignoreType',
  parent___parent___internal___mediaType = 'parent___parent___internal___mediaType',
  parent___parent___internal___owner = 'parent___parent___internal___owner',
  parent___parent___internal___type = 'parent___parent___internal___type',
  parent___parent___parent___children = 'parent___parent___parent___children',
  parent___parent___parent___id = 'parent___parent___parent___id',
  url____key = 'url____key',
  url____type = 'url____type',
  url___current = 'url___current'
}

export type SanityPageFilterInput = {
  _createdAt?: InputMaybe<DateQueryOperatorInput>;
  _id?: InputMaybe<StringQueryOperatorInput>;
  _key?: InputMaybe<StringQueryOperatorInput>;
  _rawContent?: InputMaybe<JsonQueryOperatorInput>;
  _rawUrl?: InputMaybe<JsonQueryOperatorInput>;
  _rev?: InputMaybe<StringQueryOperatorInput>;
  _type?: InputMaybe<StringQueryOperatorInput>;
  _updatedAt?: InputMaybe<DateQueryOperatorInput>;
  children?: InputMaybe<NodeFilterListInput>;
  content?: InputMaybe<SanityBlockFilterListInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  url?: InputMaybe<SanitySlugFilterInput>;
};

export type SanityPageGroupConnection = {
  __typename?: 'SanityPageGroupConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<SanityPageEdge>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
  group: Array<SanityPageGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<SanityPage>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type SanityPageGroupConnectionDistinctArgs = {
  field: SanityPageFieldsEnum;
};


export type SanityPageGroupConnectionGroupArgs = {
  field: SanityPageFieldsEnum;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type SanityPageGroupConnectionMaxArgs = {
  field: SanityPageFieldsEnum;
};


export type SanityPageGroupConnectionMinArgs = {
  field: SanityPageFieldsEnum;
};


export type SanityPageGroupConnectionSumArgs = {
  field: SanityPageFieldsEnum;
};

export type SanityPageLink = {
  __typename?: 'SanityPageLink';
  _key?: Maybe<Scalars['String']>;
  _rawPage?: Maybe<Scalars['JSON']>;
  _type?: Maybe<Scalars['String']>;
  page?: Maybe<SanityMinistryPageOrPage>;
  text?: Maybe<Scalars['String']>;
};


export type SanityPageLink_RawPageArgs = {
  resolveReferences?: InputMaybe<SanityResolveReferencesConfiguration>;
};

export type SanityPageLinkOrPlainLink = SanityPageLink | SanityPlainLink;

export type SanityPageSection = {
  __typename?: 'SanityPageSection';
  _key?: Maybe<Scalars['String']>;
  _rawContent?: Maybe<Scalars['JSON']>;
  _rawUrlSuffix?: Maybe<Scalars['JSON']>;
  _type?: Maybe<Scalars['String']>;
  content?: Maybe<Array<Maybe<SanityBlock>>>;
  hidden?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  urlSuffix?: Maybe<SanitySlug>;
};


export type SanityPageSection_RawContentArgs = {
  resolveReferences?: InputMaybe<SanityResolveReferencesConfiguration>;
};


export type SanityPageSection_RawUrlSuffixArgs = {
  resolveReferences?: InputMaybe<SanityResolveReferencesConfiguration>;
};

export type SanityPageSectionFilterInput = {
  _key?: InputMaybe<StringQueryOperatorInput>;
  _rawContent?: InputMaybe<JsonQueryOperatorInput>;
  _rawUrlSuffix?: InputMaybe<JsonQueryOperatorInput>;
  _type?: InputMaybe<StringQueryOperatorInput>;
  content?: InputMaybe<SanityBlockFilterListInput>;
  hidden?: InputMaybe<BooleanQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  urlSuffix?: InputMaybe<SanitySlugFilterInput>;
};

export type SanityPageSectionFilterListInput = {
  elemMatch?: InputMaybe<SanityPageSectionFilterInput>;
};

export type SanityPageSortInput = {
  fields?: InputMaybe<Array<InputMaybe<SanityPageFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type SanityPicture = {
  __typename?: 'SanityPicture';
  _key?: Maybe<Scalars['String']>;
  _rawImage?: Maybe<Scalars['JSON']>;
  _type?: Maybe<Scalars['String']>;
  align?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['String']>;
  constrainAspectRatio?: Maybe<Scalars['String']>;
  image?: Maybe<SanityImage>;
  size?: Maybe<Scalars['String']>;
};


export type SanityPicture_RawImageArgs = {
  resolveReferences?: InputMaybe<SanityResolveReferencesConfiguration>;
};

export type SanityPlainLink = {
  __typename?: 'SanityPlainLink';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  link?: Maybe<Scalars['String']>;
  sameWindow?: Maybe<Scalars['Boolean']>;
  text?: Maybe<Scalars['String']>;
};

export type SanityPlainOrPageLink = SanityPageLink | SanityPlainLink;

export type SanityPost = Node & SanityDocument & {
  __typename?: 'SanityPost';
  _createdAt?: Maybe<Scalars['Date']>;
  _id?: Maybe<Scalars['String']>;
  _key?: Maybe<Scalars['String']>;
  _rawBody?: Maybe<Scalars['JSON']>;
  _rawMinistries?: Maybe<Scalars['JSON']>;
  _rawSlug?: Maybe<Scalars['JSON']>;
  _rawSummary?: Maybe<Scalars['JSON']>;
  _rawThumbnail?: Maybe<Scalars['JSON']>;
  _rawThumbnailPoster?: Maybe<Scalars['JSON']>;
  _rev?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  _updatedAt?: Maybe<Scalars['Date']>;
  body?: Maybe<Array<Maybe<SanityBlock>>>;
  children: Array<Node>;
  date?: Maybe<Scalars['Date']>;
  featured?: Maybe<Scalars['Boolean']>;
  hidden?: Maybe<Scalars['Boolean']>;
  id: Scalars['ID'];
  internal: Internal;
  ministries?: Maybe<Array<Maybe<SanityMinistryPage>>>;
  parent?: Maybe<Node>;
  slug?: Maybe<SanitySlug>;
  summary?: Maybe<Array<Maybe<SanityBlock>>>;
  thumbnail?: Maybe<SanityImage>;
  thumbnailPoster?: Maybe<SanityPoster>;
  thumbnailPosterPreview?: Maybe<Scalars['Float']>;
  title?: Maybe<Scalars['String']>;
};


export type SanityPost_CreatedAtArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type SanityPost_RawBodyArgs = {
  resolveReferences?: InputMaybe<SanityResolveReferencesConfiguration>;
};


export type SanityPost_RawMinistriesArgs = {
  resolveReferences?: InputMaybe<SanityResolveReferencesConfiguration>;
};


export type SanityPost_RawSlugArgs = {
  resolveReferences?: InputMaybe<SanityResolveReferencesConfiguration>;
};


export type SanityPost_RawSummaryArgs = {
  resolveReferences?: InputMaybe<SanityResolveReferencesConfiguration>;
};


export type SanityPost_RawThumbnailArgs = {
  resolveReferences?: InputMaybe<SanityResolveReferencesConfiguration>;
};


export type SanityPost_RawThumbnailPosterArgs = {
  resolveReferences?: InputMaybe<SanityResolveReferencesConfiguration>;
};


export type SanityPost_UpdatedAtArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type SanityPostDateArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type SanityPostConnection = {
  __typename?: 'SanityPostConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<SanityPostEdge>;
  group: Array<SanityPostGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<SanityPost>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type SanityPostConnectionDistinctArgs = {
  field: SanityPostFieldsEnum;
};


export type SanityPostConnectionGroupArgs = {
  field: SanityPostFieldsEnum;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
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

export type SanityPostEdge = {
  __typename?: 'SanityPostEdge';
  next?: Maybe<SanityPost>;
  node: SanityPost;
  previous?: Maybe<SanityPost>;
};

export enum SanityPostFieldsEnum {
  _createdAt = '_createdAt',
  _id = '_id',
  _key = '_key',
  _rawBody = '_rawBody',
  _rawMinistries = '_rawMinistries',
  _rawSlug = '_rawSlug',
  _rawSummary = '_rawSummary',
  _rawThumbnail = '_rawThumbnail',
  _rawThumbnailPoster = '_rawThumbnailPoster',
  _rev = '_rev',
  _type = '_type',
  _updatedAt = '_updatedAt',
  body = 'body',
  body____key = 'body____key',
  body____rawChildren = 'body____rawChildren',
  body____type = 'body____type',
  body___children = 'body___children',
  body___children____key = 'body___children____key',
  body___children____type = 'body___children____type',
  body___children___marks = 'body___children___marks',
  body___children___text = 'body___children___text',
  body___list = 'body___list',
  body___style = 'body___style',
  children = 'children',
  children___children = 'children___children',
  children___children___children = 'children___children___children',
  children___children___children___children = 'children___children___children___children',
  children___children___children___id = 'children___children___children___id',
  children___children___id = 'children___children___id',
  children___children___internal___content = 'children___children___internal___content',
  children___children___internal___contentDigest = 'children___children___internal___contentDigest',
  children___children___internal___description = 'children___children___internal___description',
  children___children___internal___fieldOwners = 'children___children___internal___fieldOwners',
  children___children___internal___ignoreType = 'children___children___internal___ignoreType',
  children___children___internal___mediaType = 'children___children___internal___mediaType',
  children___children___internal___owner = 'children___children___internal___owner',
  children___children___internal___type = 'children___children___internal___type',
  children___children___parent___children = 'children___children___parent___children',
  children___children___parent___id = 'children___children___parent___id',
  children___id = 'children___id',
  children___internal___content = 'children___internal___content',
  children___internal___contentDigest = 'children___internal___contentDigest',
  children___internal___description = 'children___internal___description',
  children___internal___fieldOwners = 'children___internal___fieldOwners',
  children___internal___ignoreType = 'children___internal___ignoreType',
  children___internal___mediaType = 'children___internal___mediaType',
  children___internal___owner = 'children___internal___owner',
  children___internal___type = 'children___internal___type',
  children___parent___children = 'children___parent___children',
  children___parent___children___children = 'children___parent___children___children',
  children___parent___children___id = 'children___parent___children___id',
  children___parent___id = 'children___parent___id',
  children___parent___internal___content = 'children___parent___internal___content',
  children___parent___internal___contentDigest = 'children___parent___internal___contentDigest',
  children___parent___internal___description = 'children___parent___internal___description',
  children___parent___internal___fieldOwners = 'children___parent___internal___fieldOwners',
  children___parent___internal___ignoreType = 'children___parent___internal___ignoreType',
  children___parent___internal___mediaType = 'children___parent___internal___mediaType',
  children___parent___internal___owner = 'children___parent___internal___owner',
  children___parent___internal___type = 'children___parent___internal___type',
  children___parent___parent___children = 'children___parent___parent___children',
  children___parent___parent___id = 'children___parent___parent___id',
  date = 'date',
  featured = 'featured',
  hidden = 'hidden',
  id = 'id',
  internal___content = 'internal___content',
  internal___contentDigest = 'internal___contentDigest',
  internal___description = 'internal___description',
  internal___fieldOwners = 'internal___fieldOwners',
  internal___ignoreType = 'internal___ignoreType',
  internal___mediaType = 'internal___mediaType',
  internal___owner = 'internal___owner',
  internal___type = 'internal___type',
  ministries = 'ministries',
  ministries____createdAt = 'ministries____createdAt',
  ministries____id = 'ministries____id',
  ministries____key = 'ministries____key',
  ministries____rawContent = 'ministries____rawContent',
  ministries____rawSections = 'ministries____rawSections',
  ministries____rawSubLogo = 'ministries____rawSubLogo',
  ministries____rawUrl = 'ministries____rawUrl',
  ministries____rev = 'ministries____rev',
  ministries____type = 'ministries____type',
  ministries____updatedAt = 'ministries____updatedAt',
  ministries___children = 'ministries___children',
  ministries___children___children = 'ministries___children___children',
  ministries___children___children___children = 'ministries___children___children___children',
  ministries___children___children___id = 'ministries___children___children___id',
  ministries___children___id = 'ministries___children___id',
  ministries___children___internal___content = 'ministries___children___internal___content',
  ministries___children___internal___contentDigest = 'ministries___children___internal___contentDigest',
  ministries___children___internal___description = 'ministries___children___internal___description',
  ministries___children___internal___fieldOwners = 'ministries___children___internal___fieldOwners',
  ministries___children___internal___ignoreType = 'ministries___children___internal___ignoreType',
  ministries___children___internal___mediaType = 'ministries___children___internal___mediaType',
  ministries___children___internal___owner = 'ministries___children___internal___owner',
  ministries___children___internal___type = 'ministries___children___internal___type',
  ministries___children___parent___children = 'ministries___children___parent___children',
  ministries___children___parent___id = 'ministries___children___parent___id',
  ministries___content = 'ministries___content',
  ministries___content____key = 'ministries___content____key',
  ministries___content____rawChildren = 'ministries___content____rawChildren',
  ministries___content____type = 'ministries___content____type',
  ministries___content___children = 'ministries___content___children',
  ministries___content___children____key = 'ministries___content___children____key',
  ministries___content___children____type = 'ministries___content___children____type',
  ministries___content___children___marks = 'ministries___content___children___marks',
  ministries___content___children___text = 'ministries___content___children___text',
  ministries___content___list = 'ministries___content___list',
  ministries___content___style = 'ministries___content___style',
  ministries___id = 'ministries___id',
  ministries___internal___content = 'ministries___internal___content',
  ministries___internal___contentDigest = 'ministries___internal___contentDigest',
  ministries___internal___description = 'ministries___internal___description',
  ministries___internal___fieldOwners = 'ministries___internal___fieldOwners',
  ministries___internal___ignoreType = 'ministries___internal___ignoreType',
  ministries___internal___mediaType = 'ministries___internal___mediaType',
  ministries___internal___owner = 'ministries___internal___owner',
  ministries___internal___type = 'ministries___internal___type',
  ministries___name = 'ministries___name',
  ministries___parent___children = 'ministries___parent___children',
  ministries___parent___children___children = 'ministries___parent___children___children',
  ministries___parent___children___id = 'ministries___parent___children___id',
  ministries___parent___id = 'ministries___parent___id',
  ministries___parent___internal___content = 'ministries___parent___internal___content',
  ministries___parent___internal___contentDigest = 'ministries___parent___internal___contentDigest',
  ministries___parent___internal___description = 'ministries___parent___internal___description',
  ministries___parent___internal___fieldOwners = 'ministries___parent___internal___fieldOwners',
  ministries___parent___internal___ignoreType = 'ministries___parent___internal___ignoreType',
  ministries___parent___internal___mediaType = 'ministries___parent___internal___mediaType',
  ministries___parent___internal___owner = 'ministries___parent___internal___owner',
  ministries___parent___internal___type = 'ministries___parent___internal___type',
  ministries___parent___parent___children = 'ministries___parent___parent___children',
  ministries___parent___parent___id = 'ministries___parent___parent___id',
  ministries___sections = 'ministries___sections',
  ministries___sections____key = 'ministries___sections____key',
  ministries___sections____rawContent = 'ministries___sections____rawContent',
  ministries___sections____rawUrlSuffix = 'ministries___sections____rawUrlSuffix',
  ministries___sections____type = 'ministries___sections____type',
  ministries___sections___content = 'ministries___sections___content',
  ministries___sections___content____key = 'ministries___sections___content____key',
  ministries___sections___content____rawChildren = 'ministries___sections___content____rawChildren',
  ministries___sections___content____type = 'ministries___sections___content____type',
  ministries___sections___content___children = 'ministries___sections___content___children',
  ministries___sections___content___list = 'ministries___sections___content___list',
  ministries___sections___content___style = 'ministries___sections___content___style',
  ministries___sections___hidden = 'ministries___sections___hidden',
  ministries___sections___name = 'ministries___sections___name',
  ministries___sections___urlSuffix____key = 'ministries___sections___urlSuffix____key',
  ministries___sections___urlSuffix____type = 'ministries___sections___urlSuffix____type',
  ministries___sections___urlSuffix___current = 'ministries___sections___urlSuffix___current',
  ministries___subLogoWidth = 'ministries___subLogoWidth',
  ministries___subLogo____key = 'ministries___subLogo____key',
  ministries___subLogo____rawAsset = 'ministries___subLogo____rawAsset',
  ministries___subLogo____rawCrop = 'ministries___subLogo____rawCrop',
  ministries___subLogo____rawHotspot = 'ministries___subLogo____rawHotspot',
  ministries___subLogo____type = 'ministries___subLogo____type',
  ministries___subLogo___asset____createdAt = 'ministries___subLogo___asset____createdAt',
  ministries___subLogo___asset____id = 'ministries___subLogo___asset____id',
  ministries___subLogo___asset____key = 'ministries___subLogo___asset____key',
  ministries___subLogo___asset____rawMetadata = 'ministries___subLogo___asset____rawMetadata',
  ministries___subLogo___asset____rawSource = 'ministries___subLogo___asset____rawSource',
  ministries___subLogo___asset____rev = 'ministries___subLogo___asset____rev',
  ministries___subLogo___asset____type = 'ministries___subLogo___asset____type',
  ministries___subLogo___asset____updatedAt = 'ministries___subLogo___asset____updatedAt',
  ministries___subLogo___asset___altText = 'ministries___subLogo___asset___altText',
  ministries___subLogo___asset___assetId = 'ministries___subLogo___asset___assetId',
  ministries___subLogo___asset___children = 'ministries___subLogo___asset___children',
  ministries___subLogo___asset___description = 'ministries___subLogo___asset___description',
  ministries___subLogo___asset___extension = 'ministries___subLogo___asset___extension',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ministries___subLogo___asset___gatsbyImageData = 'ministries___subLogo___asset___gatsbyImageData',
  ministries___subLogo___asset___id = 'ministries___subLogo___asset___id',
  ministries___subLogo___asset___label = 'ministries___subLogo___asset___label',
  ministries___subLogo___asset___mimeType = 'ministries___subLogo___asset___mimeType',
  ministries___subLogo___asset___originalFilename = 'ministries___subLogo___asset___originalFilename',
  ministries___subLogo___asset___path = 'ministries___subLogo___asset___path',
  ministries___subLogo___asset___sha1hash = 'ministries___subLogo___asset___sha1hash',
  ministries___subLogo___asset___size = 'ministries___subLogo___asset___size',
  ministries___subLogo___asset___title = 'ministries___subLogo___asset___title',
  ministries___subLogo___asset___uploadId = 'ministries___subLogo___asset___uploadId',
  ministries___subLogo___asset___url = 'ministries___subLogo___asset___url',
  ministries___subLogo___crop____key = 'ministries___subLogo___crop____key',
  ministries___subLogo___crop____type = 'ministries___subLogo___crop____type',
  ministries___subLogo___crop___bottom = 'ministries___subLogo___crop___bottom',
  ministries___subLogo___crop___left = 'ministries___subLogo___crop___left',
  ministries___subLogo___crop___right = 'ministries___subLogo___crop___right',
  ministries___subLogo___crop___top = 'ministries___subLogo___crop___top',
  ministries___subLogo___hotspot____key = 'ministries___subLogo___hotspot____key',
  ministries___subLogo___hotspot____type = 'ministries___subLogo___hotspot____type',
  ministries___subLogo___hotspot___height = 'ministries___subLogo___hotspot___height',
  ministries___subLogo___hotspot___width = 'ministries___subLogo___hotspot___width',
  ministries___subLogo___hotspot___x = 'ministries___subLogo___hotspot___x',
  ministries___subLogo___hotspot___y = 'ministries___subLogo___hotspot___y',
  ministries___url____key = 'ministries___url____key',
  ministries___url____type = 'ministries___url____type',
  ministries___url___current = 'ministries___url___current',
  parent___children = 'parent___children',
  parent___children___children = 'parent___children___children',
  parent___children___children___children = 'parent___children___children___children',
  parent___children___children___id = 'parent___children___children___id',
  parent___children___id = 'parent___children___id',
  parent___children___internal___content = 'parent___children___internal___content',
  parent___children___internal___contentDigest = 'parent___children___internal___contentDigest',
  parent___children___internal___description = 'parent___children___internal___description',
  parent___children___internal___fieldOwners = 'parent___children___internal___fieldOwners',
  parent___children___internal___ignoreType = 'parent___children___internal___ignoreType',
  parent___children___internal___mediaType = 'parent___children___internal___mediaType',
  parent___children___internal___owner = 'parent___children___internal___owner',
  parent___children___internal___type = 'parent___children___internal___type',
  parent___children___parent___children = 'parent___children___parent___children',
  parent___children___parent___id = 'parent___children___parent___id',
  parent___id = 'parent___id',
  parent___internal___content = 'parent___internal___content',
  parent___internal___contentDigest = 'parent___internal___contentDigest',
  parent___internal___description = 'parent___internal___description',
  parent___internal___fieldOwners = 'parent___internal___fieldOwners',
  parent___internal___ignoreType = 'parent___internal___ignoreType',
  parent___internal___mediaType = 'parent___internal___mediaType',
  parent___internal___owner = 'parent___internal___owner',
  parent___internal___type = 'parent___internal___type',
  parent___parent___children = 'parent___parent___children',
  parent___parent___children___children = 'parent___parent___children___children',
  parent___parent___children___id = 'parent___parent___children___id',
  parent___parent___id = 'parent___parent___id',
  parent___parent___internal___content = 'parent___parent___internal___content',
  parent___parent___internal___contentDigest = 'parent___parent___internal___contentDigest',
  parent___parent___internal___description = 'parent___parent___internal___description',
  parent___parent___internal___fieldOwners = 'parent___parent___internal___fieldOwners',
  parent___parent___internal___ignoreType = 'parent___parent___internal___ignoreType',
  parent___parent___internal___mediaType = 'parent___parent___internal___mediaType',
  parent___parent___internal___owner = 'parent___parent___internal___owner',
  parent___parent___internal___type = 'parent___parent___internal___type',
  parent___parent___parent___children = 'parent___parent___parent___children',
  parent___parent___parent___id = 'parent___parent___parent___id',
  slug____key = 'slug____key',
  slug____type = 'slug____type',
  slug___current = 'slug___current',
  summary = 'summary',
  summary____key = 'summary____key',
  summary____rawChildren = 'summary____rawChildren',
  summary____type = 'summary____type',
  summary___children = 'summary___children',
  summary___children____key = 'summary___children____key',
  summary___children____type = 'summary___children____type',
  summary___children___marks = 'summary___children___marks',
  summary___children___text = 'summary___children___text',
  summary___list = 'summary___list',
  summary___style = 'summary___style',
  thumbnailPosterPreview = 'thumbnailPosterPreview',
  thumbnailPoster____createdAt = 'thumbnailPoster____createdAt',
  thumbnailPoster____id = 'thumbnailPoster____id',
  thumbnailPoster____key = 'thumbnailPoster____key',
  thumbnailPoster____rawBackground = 'thumbnailPoster____rawBackground',
  thumbnailPoster____rawLines = 'thumbnailPoster____rawLines',
  thumbnailPoster____rev = 'thumbnailPoster____rev',
  thumbnailPoster____type = 'thumbnailPoster____type',
  thumbnailPoster____updatedAt = 'thumbnailPoster____updatedAt',
  thumbnailPoster___background____key = 'thumbnailPoster___background____key',
  thumbnailPoster___background____rawAsset = 'thumbnailPoster___background____rawAsset',
  thumbnailPoster___background____rawCrop = 'thumbnailPoster___background____rawCrop',
  thumbnailPoster___background____rawHotspot = 'thumbnailPoster___background____rawHotspot',
  thumbnailPoster___background____type = 'thumbnailPoster___background____type',
  thumbnailPoster___background___asset____createdAt = 'thumbnailPoster___background___asset____createdAt',
  thumbnailPoster___background___asset____id = 'thumbnailPoster___background___asset____id',
  thumbnailPoster___background___asset____key = 'thumbnailPoster___background___asset____key',
  thumbnailPoster___background___asset____rawMetadata = 'thumbnailPoster___background___asset____rawMetadata',
  thumbnailPoster___background___asset____rawSource = 'thumbnailPoster___background___asset____rawSource',
  thumbnailPoster___background___asset____rev = 'thumbnailPoster___background___asset____rev',
  thumbnailPoster___background___asset____type = 'thumbnailPoster___background___asset____type',
  thumbnailPoster___background___asset____updatedAt = 'thumbnailPoster___background___asset____updatedAt',
  thumbnailPoster___background___asset___altText = 'thumbnailPoster___background___asset___altText',
  thumbnailPoster___background___asset___assetId = 'thumbnailPoster___background___asset___assetId',
  thumbnailPoster___background___asset___children = 'thumbnailPoster___background___asset___children',
  thumbnailPoster___background___asset___description = 'thumbnailPoster___background___asset___description',
  thumbnailPoster___background___asset___extension = 'thumbnailPoster___background___asset___extension',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  thumbnailPoster___background___asset___gatsbyImageData = 'thumbnailPoster___background___asset___gatsbyImageData',
  thumbnailPoster___background___asset___id = 'thumbnailPoster___background___asset___id',
  thumbnailPoster___background___asset___label = 'thumbnailPoster___background___asset___label',
  thumbnailPoster___background___asset___mimeType = 'thumbnailPoster___background___asset___mimeType',
  thumbnailPoster___background___asset___originalFilename = 'thumbnailPoster___background___asset___originalFilename',
  thumbnailPoster___background___asset___path = 'thumbnailPoster___background___asset___path',
  thumbnailPoster___background___asset___sha1hash = 'thumbnailPoster___background___asset___sha1hash',
  thumbnailPoster___background___asset___size = 'thumbnailPoster___background___asset___size',
  thumbnailPoster___background___asset___title = 'thumbnailPoster___background___asset___title',
  thumbnailPoster___background___asset___uploadId = 'thumbnailPoster___background___asset___uploadId',
  thumbnailPoster___background___asset___url = 'thumbnailPoster___background___asset___url',
  thumbnailPoster___background___crop____key = 'thumbnailPoster___background___crop____key',
  thumbnailPoster___background___crop____type = 'thumbnailPoster___background___crop____type',
  thumbnailPoster___background___crop___bottom = 'thumbnailPoster___background___crop___bottom',
  thumbnailPoster___background___crop___left = 'thumbnailPoster___background___crop___left',
  thumbnailPoster___background___crop___right = 'thumbnailPoster___background___crop___right',
  thumbnailPoster___background___crop___top = 'thumbnailPoster___background___crop___top',
  thumbnailPoster___background___hotspot____key = 'thumbnailPoster___background___hotspot____key',
  thumbnailPoster___background___hotspot____type = 'thumbnailPoster___background___hotspot____type',
  thumbnailPoster___background___hotspot___height = 'thumbnailPoster___background___hotspot___height',
  thumbnailPoster___background___hotspot___width = 'thumbnailPoster___background___hotspot___width',
  thumbnailPoster___background___hotspot___x = 'thumbnailPoster___background___hotspot___x',
  thumbnailPoster___background___hotspot___y = 'thumbnailPoster___background___hotspot___y',
  thumbnailPoster___children = 'thumbnailPoster___children',
  thumbnailPoster___children___children = 'thumbnailPoster___children___children',
  thumbnailPoster___children___children___children = 'thumbnailPoster___children___children___children',
  thumbnailPoster___children___children___id = 'thumbnailPoster___children___children___id',
  thumbnailPoster___children___id = 'thumbnailPoster___children___id',
  thumbnailPoster___children___internal___content = 'thumbnailPoster___children___internal___content',
  thumbnailPoster___children___internal___contentDigest = 'thumbnailPoster___children___internal___contentDigest',
  thumbnailPoster___children___internal___description = 'thumbnailPoster___children___internal___description',
  thumbnailPoster___children___internal___fieldOwners = 'thumbnailPoster___children___internal___fieldOwners',
  thumbnailPoster___children___internal___ignoreType = 'thumbnailPoster___children___internal___ignoreType',
  thumbnailPoster___children___internal___mediaType = 'thumbnailPoster___children___internal___mediaType',
  thumbnailPoster___children___internal___owner = 'thumbnailPoster___children___internal___owner',
  thumbnailPoster___children___internal___type = 'thumbnailPoster___children___internal___type',
  thumbnailPoster___children___parent___children = 'thumbnailPoster___children___parent___children',
  thumbnailPoster___children___parent___id = 'thumbnailPoster___children___parent___id',
  thumbnailPoster___id = 'thumbnailPoster___id',
  thumbnailPoster___internal___content = 'thumbnailPoster___internal___content',
  thumbnailPoster___internal___contentDigest = 'thumbnailPoster___internal___contentDigest',
  thumbnailPoster___internal___description = 'thumbnailPoster___internal___description',
  thumbnailPoster___internal___fieldOwners = 'thumbnailPoster___internal___fieldOwners',
  thumbnailPoster___internal___ignoreType = 'thumbnailPoster___internal___ignoreType',
  thumbnailPoster___internal___mediaType = 'thumbnailPoster___internal___mediaType',
  thumbnailPoster___internal___owner = 'thumbnailPoster___internal___owner',
  thumbnailPoster___internal___type = 'thumbnailPoster___internal___type',
  thumbnailPoster___lines = 'thumbnailPoster___lines',
  thumbnailPoster___lines____key = 'thumbnailPoster___lines____key',
  thumbnailPoster___lines____type = 'thumbnailPoster___lines____type',
  thumbnailPoster___lines___fontSize = 'thumbnailPoster___lines___fontSize',
  thumbnailPoster___lines___position = 'thumbnailPoster___lines___position',
  thumbnailPoster___lines___text = 'thumbnailPoster___lines___text',
  thumbnailPoster___name = 'thumbnailPoster___name',
  thumbnailPoster___overlayColor = 'thumbnailPoster___overlayColor',
  thumbnailPoster___overlayOpacity = 'thumbnailPoster___overlayOpacity',
  thumbnailPoster___parent___children = 'thumbnailPoster___parent___children',
  thumbnailPoster___parent___children___children = 'thumbnailPoster___parent___children___children',
  thumbnailPoster___parent___children___id = 'thumbnailPoster___parent___children___id',
  thumbnailPoster___parent___id = 'thumbnailPoster___parent___id',
  thumbnailPoster___parent___internal___content = 'thumbnailPoster___parent___internal___content',
  thumbnailPoster___parent___internal___contentDigest = 'thumbnailPoster___parent___internal___contentDigest',
  thumbnailPoster___parent___internal___description = 'thumbnailPoster___parent___internal___description',
  thumbnailPoster___parent___internal___fieldOwners = 'thumbnailPoster___parent___internal___fieldOwners',
  thumbnailPoster___parent___internal___ignoreType = 'thumbnailPoster___parent___internal___ignoreType',
  thumbnailPoster___parent___internal___mediaType = 'thumbnailPoster___parent___internal___mediaType',
  thumbnailPoster___parent___internal___owner = 'thumbnailPoster___parent___internal___owner',
  thumbnailPoster___parent___internal___type = 'thumbnailPoster___parent___internal___type',
  thumbnailPoster___parent___parent___children = 'thumbnailPoster___parent___parent___children',
  thumbnailPoster___parent___parent___id = 'thumbnailPoster___parent___parent___id',
  thumbnailPoster___previewDisplay = 'thumbnailPoster___previewDisplay',
  thumbnail____key = 'thumbnail____key',
  thumbnail____rawAsset = 'thumbnail____rawAsset',
  thumbnail____rawCrop = 'thumbnail____rawCrop',
  thumbnail____rawHotspot = 'thumbnail____rawHotspot',
  thumbnail____type = 'thumbnail____type',
  thumbnail___asset____createdAt = 'thumbnail___asset____createdAt',
  thumbnail___asset____id = 'thumbnail___asset____id',
  thumbnail___asset____key = 'thumbnail___asset____key',
  thumbnail___asset____rawMetadata = 'thumbnail___asset____rawMetadata',
  thumbnail___asset____rawSource = 'thumbnail___asset____rawSource',
  thumbnail___asset____rev = 'thumbnail___asset____rev',
  thumbnail___asset____type = 'thumbnail___asset____type',
  thumbnail___asset____updatedAt = 'thumbnail___asset____updatedAt',
  thumbnail___asset___altText = 'thumbnail___asset___altText',
  thumbnail___asset___assetId = 'thumbnail___asset___assetId',
  thumbnail___asset___children = 'thumbnail___asset___children',
  thumbnail___asset___children___children = 'thumbnail___asset___children___children',
  thumbnail___asset___children___id = 'thumbnail___asset___children___id',
  thumbnail___asset___description = 'thumbnail___asset___description',
  thumbnail___asset___extension = 'thumbnail___asset___extension',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  thumbnail___asset___gatsbyImageData = 'thumbnail___asset___gatsbyImageData',
  thumbnail___asset___id = 'thumbnail___asset___id',
  thumbnail___asset___internal___content = 'thumbnail___asset___internal___content',
  thumbnail___asset___internal___contentDigest = 'thumbnail___asset___internal___contentDigest',
  thumbnail___asset___internal___description = 'thumbnail___asset___internal___description',
  thumbnail___asset___internal___fieldOwners = 'thumbnail___asset___internal___fieldOwners',
  thumbnail___asset___internal___ignoreType = 'thumbnail___asset___internal___ignoreType',
  thumbnail___asset___internal___mediaType = 'thumbnail___asset___internal___mediaType',
  thumbnail___asset___internal___owner = 'thumbnail___asset___internal___owner',
  thumbnail___asset___internal___type = 'thumbnail___asset___internal___type',
  thumbnail___asset___label = 'thumbnail___asset___label',
  thumbnail___asset___metadata____key = 'thumbnail___asset___metadata____key',
  thumbnail___asset___metadata____rawDimensions = 'thumbnail___asset___metadata____rawDimensions',
  thumbnail___asset___metadata____rawLocation = 'thumbnail___asset___metadata____rawLocation',
  thumbnail___asset___metadata____rawPalette = 'thumbnail___asset___metadata____rawPalette',
  thumbnail___asset___metadata____type = 'thumbnail___asset___metadata____type',
  thumbnail___asset___metadata___blurHash = 'thumbnail___asset___metadata___blurHash',
  thumbnail___asset___metadata___hasAlpha = 'thumbnail___asset___metadata___hasAlpha',
  thumbnail___asset___metadata___isOpaque = 'thumbnail___asset___metadata___isOpaque',
  thumbnail___asset___metadata___lqip = 'thumbnail___asset___metadata___lqip',
  thumbnail___asset___mimeType = 'thumbnail___asset___mimeType',
  thumbnail___asset___originalFilename = 'thumbnail___asset___originalFilename',
  thumbnail___asset___parent___children = 'thumbnail___asset___parent___children',
  thumbnail___asset___parent___id = 'thumbnail___asset___parent___id',
  thumbnail___asset___path = 'thumbnail___asset___path',
  thumbnail___asset___sha1hash = 'thumbnail___asset___sha1hash',
  thumbnail___asset___size = 'thumbnail___asset___size',
  thumbnail___asset___source____key = 'thumbnail___asset___source____key',
  thumbnail___asset___source____type = 'thumbnail___asset___source____type',
  thumbnail___asset___source___id = 'thumbnail___asset___source___id',
  thumbnail___asset___source___name = 'thumbnail___asset___source___name',
  thumbnail___asset___source___url = 'thumbnail___asset___source___url',
  thumbnail___asset___title = 'thumbnail___asset___title',
  thumbnail___asset___uploadId = 'thumbnail___asset___uploadId',
  thumbnail___asset___url = 'thumbnail___asset___url',
  thumbnail___crop____key = 'thumbnail___crop____key',
  thumbnail___crop____type = 'thumbnail___crop____type',
  thumbnail___crop___bottom = 'thumbnail___crop___bottom',
  thumbnail___crop___left = 'thumbnail___crop___left',
  thumbnail___crop___right = 'thumbnail___crop___right',
  thumbnail___crop___top = 'thumbnail___crop___top',
  thumbnail___hotspot____key = 'thumbnail___hotspot____key',
  thumbnail___hotspot____type = 'thumbnail___hotspot____type',
  thumbnail___hotspot___height = 'thumbnail___hotspot___height',
  thumbnail___hotspot___width = 'thumbnail___hotspot___width',
  thumbnail___hotspot___x = 'thumbnail___hotspot___x',
  thumbnail___hotspot___y = 'thumbnail___hotspot___y',
  title = 'title'
}

export type SanityPostFilterInput = {
  _createdAt?: InputMaybe<DateQueryOperatorInput>;
  _id?: InputMaybe<StringQueryOperatorInput>;
  _key?: InputMaybe<StringQueryOperatorInput>;
  _rawBody?: InputMaybe<JsonQueryOperatorInput>;
  _rawMinistries?: InputMaybe<JsonQueryOperatorInput>;
  _rawSlug?: InputMaybe<JsonQueryOperatorInput>;
  _rawSummary?: InputMaybe<JsonQueryOperatorInput>;
  _rawThumbnail?: InputMaybe<JsonQueryOperatorInput>;
  _rawThumbnailPoster?: InputMaybe<JsonQueryOperatorInput>;
  _rev?: InputMaybe<StringQueryOperatorInput>;
  _type?: InputMaybe<StringQueryOperatorInput>;
  _updatedAt?: InputMaybe<DateQueryOperatorInput>;
  body?: InputMaybe<SanityBlockFilterListInput>;
  children?: InputMaybe<NodeFilterListInput>;
  date?: InputMaybe<DateQueryOperatorInput>;
  featured?: InputMaybe<BooleanQueryOperatorInput>;
  hidden?: InputMaybe<BooleanQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  ministries?: InputMaybe<SanityMinistryPageFilterListInput>;
  parent?: InputMaybe<NodeFilterInput>;
  slug?: InputMaybe<SanitySlugFilterInput>;
  summary?: InputMaybe<SanityBlockFilterListInput>;
  thumbnail?: InputMaybe<SanityImageFilterInput>;
  thumbnailPoster?: InputMaybe<SanityPosterFilterInput>;
  thumbnailPosterPreview?: InputMaybe<FloatQueryOperatorInput>;
  title?: InputMaybe<StringQueryOperatorInput>;
};

export type SanityPostGroupConnection = {
  __typename?: 'SanityPostGroupConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<SanityPostEdge>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
  group: Array<SanityPostGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<SanityPost>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type SanityPostGroupConnectionDistinctArgs = {
  field: SanityPostFieldsEnum;
};


export type SanityPostGroupConnectionGroupArgs = {
  field: SanityPostFieldsEnum;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type SanityPostGroupConnectionMaxArgs = {
  field: SanityPostFieldsEnum;
};


export type SanityPostGroupConnectionMinArgs = {
  field: SanityPostFieldsEnum;
};


export type SanityPostGroupConnectionSumArgs = {
  field: SanityPostFieldsEnum;
};

export type SanityPostSortInput = {
  fields?: InputMaybe<Array<InputMaybe<SanityPostFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type SanityPoster = Node & SanityDocument & {
  __typename?: 'SanityPoster';
  _createdAt?: Maybe<Scalars['Date']>;
  _id?: Maybe<Scalars['String']>;
  _key?: Maybe<Scalars['String']>;
  _rawBackground?: Maybe<Scalars['JSON']>;
  _rawLines?: Maybe<Scalars['JSON']>;
  _rev?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  _updatedAt?: Maybe<Scalars['Date']>;
  background?: Maybe<SanityImage>;
  children: Array<Node>;
  id: Scalars['ID'];
  internal: Internal;
  lines?: Maybe<Array<Maybe<SanityPosterLine>>>;
  name?: Maybe<Scalars['String']>;
  overlayColor?: Maybe<Scalars['String']>;
  overlayOpacity?: Maybe<Scalars['Float']>;
  parent?: Maybe<Node>;
  previewDisplay?: Maybe<Scalars['Float']>;
};


export type SanityPoster_CreatedAtArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type SanityPoster_RawBackgroundArgs = {
  resolveReferences?: InputMaybe<SanityResolveReferencesConfiguration>;
};


export type SanityPoster_RawLinesArgs = {
  resolveReferences?: InputMaybe<SanityResolveReferencesConfiguration>;
};


export type SanityPoster_UpdatedAtArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type SanityPosterConnection = {
  __typename?: 'SanityPosterConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<SanityPosterEdge>;
  group: Array<SanityPosterGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<SanityPoster>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type SanityPosterConnectionDistinctArgs = {
  field: SanityPosterFieldsEnum;
};


export type SanityPosterConnectionGroupArgs = {
  field: SanityPosterFieldsEnum;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
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

export type SanityPosterEdge = {
  __typename?: 'SanityPosterEdge';
  next?: Maybe<SanityPoster>;
  node: SanityPoster;
  previous?: Maybe<SanityPoster>;
};

export enum SanityPosterFieldsEnum {
  _createdAt = '_createdAt',
  _id = '_id',
  _key = '_key',
  _rawBackground = '_rawBackground',
  _rawLines = '_rawLines',
  _rev = '_rev',
  _type = '_type',
  _updatedAt = '_updatedAt',
  background____key = 'background____key',
  background____rawAsset = 'background____rawAsset',
  background____rawCrop = 'background____rawCrop',
  background____rawHotspot = 'background____rawHotspot',
  background____type = 'background____type',
  background___asset____createdAt = 'background___asset____createdAt',
  background___asset____id = 'background___asset____id',
  background___asset____key = 'background___asset____key',
  background___asset____rawMetadata = 'background___asset____rawMetadata',
  background___asset____rawSource = 'background___asset____rawSource',
  background___asset____rev = 'background___asset____rev',
  background___asset____type = 'background___asset____type',
  background___asset____updatedAt = 'background___asset____updatedAt',
  background___asset___altText = 'background___asset___altText',
  background___asset___assetId = 'background___asset___assetId',
  background___asset___children = 'background___asset___children',
  background___asset___children___children = 'background___asset___children___children',
  background___asset___children___id = 'background___asset___children___id',
  background___asset___description = 'background___asset___description',
  background___asset___extension = 'background___asset___extension',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  background___asset___gatsbyImageData = 'background___asset___gatsbyImageData',
  background___asset___id = 'background___asset___id',
  background___asset___internal___content = 'background___asset___internal___content',
  background___asset___internal___contentDigest = 'background___asset___internal___contentDigest',
  background___asset___internal___description = 'background___asset___internal___description',
  background___asset___internal___fieldOwners = 'background___asset___internal___fieldOwners',
  background___asset___internal___ignoreType = 'background___asset___internal___ignoreType',
  background___asset___internal___mediaType = 'background___asset___internal___mediaType',
  background___asset___internal___owner = 'background___asset___internal___owner',
  background___asset___internal___type = 'background___asset___internal___type',
  background___asset___label = 'background___asset___label',
  background___asset___metadata____key = 'background___asset___metadata____key',
  background___asset___metadata____rawDimensions = 'background___asset___metadata____rawDimensions',
  background___asset___metadata____rawLocation = 'background___asset___metadata____rawLocation',
  background___asset___metadata____rawPalette = 'background___asset___metadata____rawPalette',
  background___asset___metadata____type = 'background___asset___metadata____type',
  background___asset___metadata___blurHash = 'background___asset___metadata___blurHash',
  background___asset___metadata___hasAlpha = 'background___asset___metadata___hasAlpha',
  background___asset___metadata___isOpaque = 'background___asset___metadata___isOpaque',
  background___asset___metadata___lqip = 'background___asset___metadata___lqip',
  background___asset___mimeType = 'background___asset___mimeType',
  background___asset___originalFilename = 'background___asset___originalFilename',
  background___asset___parent___children = 'background___asset___parent___children',
  background___asset___parent___id = 'background___asset___parent___id',
  background___asset___path = 'background___asset___path',
  background___asset___sha1hash = 'background___asset___sha1hash',
  background___asset___size = 'background___asset___size',
  background___asset___source____key = 'background___asset___source____key',
  background___asset___source____type = 'background___asset___source____type',
  background___asset___source___id = 'background___asset___source___id',
  background___asset___source___name = 'background___asset___source___name',
  background___asset___source___url = 'background___asset___source___url',
  background___asset___title = 'background___asset___title',
  background___asset___uploadId = 'background___asset___uploadId',
  background___asset___url = 'background___asset___url',
  background___crop____key = 'background___crop____key',
  background___crop____type = 'background___crop____type',
  background___crop___bottom = 'background___crop___bottom',
  background___crop___left = 'background___crop___left',
  background___crop___right = 'background___crop___right',
  background___crop___top = 'background___crop___top',
  background___hotspot____key = 'background___hotspot____key',
  background___hotspot____type = 'background___hotspot____type',
  background___hotspot___height = 'background___hotspot___height',
  background___hotspot___width = 'background___hotspot___width',
  background___hotspot___x = 'background___hotspot___x',
  background___hotspot___y = 'background___hotspot___y',
  children = 'children',
  children___children = 'children___children',
  children___children___children = 'children___children___children',
  children___children___children___children = 'children___children___children___children',
  children___children___children___id = 'children___children___children___id',
  children___children___id = 'children___children___id',
  children___children___internal___content = 'children___children___internal___content',
  children___children___internal___contentDigest = 'children___children___internal___contentDigest',
  children___children___internal___description = 'children___children___internal___description',
  children___children___internal___fieldOwners = 'children___children___internal___fieldOwners',
  children___children___internal___ignoreType = 'children___children___internal___ignoreType',
  children___children___internal___mediaType = 'children___children___internal___mediaType',
  children___children___internal___owner = 'children___children___internal___owner',
  children___children___internal___type = 'children___children___internal___type',
  children___children___parent___children = 'children___children___parent___children',
  children___children___parent___id = 'children___children___parent___id',
  children___id = 'children___id',
  children___internal___content = 'children___internal___content',
  children___internal___contentDigest = 'children___internal___contentDigest',
  children___internal___description = 'children___internal___description',
  children___internal___fieldOwners = 'children___internal___fieldOwners',
  children___internal___ignoreType = 'children___internal___ignoreType',
  children___internal___mediaType = 'children___internal___mediaType',
  children___internal___owner = 'children___internal___owner',
  children___internal___type = 'children___internal___type',
  children___parent___children = 'children___parent___children',
  children___parent___children___children = 'children___parent___children___children',
  children___parent___children___id = 'children___parent___children___id',
  children___parent___id = 'children___parent___id',
  children___parent___internal___content = 'children___parent___internal___content',
  children___parent___internal___contentDigest = 'children___parent___internal___contentDigest',
  children___parent___internal___description = 'children___parent___internal___description',
  children___parent___internal___fieldOwners = 'children___parent___internal___fieldOwners',
  children___parent___internal___ignoreType = 'children___parent___internal___ignoreType',
  children___parent___internal___mediaType = 'children___parent___internal___mediaType',
  children___parent___internal___owner = 'children___parent___internal___owner',
  children___parent___internal___type = 'children___parent___internal___type',
  children___parent___parent___children = 'children___parent___parent___children',
  children___parent___parent___id = 'children___parent___parent___id',
  id = 'id',
  internal___content = 'internal___content',
  internal___contentDigest = 'internal___contentDigest',
  internal___description = 'internal___description',
  internal___fieldOwners = 'internal___fieldOwners',
  internal___ignoreType = 'internal___ignoreType',
  internal___mediaType = 'internal___mediaType',
  internal___owner = 'internal___owner',
  internal___type = 'internal___type',
  lines = 'lines',
  lines____key = 'lines____key',
  lines____type = 'lines____type',
  lines___fontSize = 'lines___fontSize',
  lines___position = 'lines___position',
  lines___text = 'lines___text',
  name = 'name',
  overlayColor = 'overlayColor',
  overlayOpacity = 'overlayOpacity',
  parent___children = 'parent___children',
  parent___children___children = 'parent___children___children',
  parent___children___children___children = 'parent___children___children___children',
  parent___children___children___id = 'parent___children___children___id',
  parent___children___id = 'parent___children___id',
  parent___children___internal___content = 'parent___children___internal___content',
  parent___children___internal___contentDigest = 'parent___children___internal___contentDigest',
  parent___children___internal___description = 'parent___children___internal___description',
  parent___children___internal___fieldOwners = 'parent___children___internal___fieldOwners',
  parent___children___internal___ignoreType = 'parent___children___internal___ignoreType',
  parent___children___internal___mediaType = 'parent___children___internal___mediaType',
  parent___children___internal___owner = 'parent___children___internal___owner',
  parent___children___internal___type = 'parent___children___internal___type',
  parent___children___parent___children = 'parent___children___parent___children',
  parent___children___parent___id = 'parent___children___parent___id',
  parent___id = 'parent___id',
  parent___internal___content = 'parent___internal___content',
  parent___internal___contentDigest = 'parent___internal___contentDigest',
  parent___internal___description = 'parent___internal___description',
  parent___internal___fieldOwners = 'parent___internal___fieldOwners',
  parent___internal___ignoreType = 'parent___internal___ignoreType',
  parent___internal___mediaType = 'parent___internal___mediaType',
  parent___internal___owner = 'parent___internal___owner',
  parent___internal___type = 'parent___internal___type',
  parent___parent___children = 'parent___parent___children',
  parent___parent___children___children = 'parent___parent___children___children',
  parent___parent___children___id = 'parent___parent___children___id',
  parent___parent___id = 'parent___parent___id',
  parent___parent___internal___content = 'parent___parent___internal___content',
  parent___parent___internal___contentDigest = 'parent___parent___internal___contentDigest',
  parent___parent___internal___description = 'parent___parent___internal___description',
  parent___parent___internal___fieldOwners = 'parent___parent___internal___fieldOwners',
  parent___parent___internal___ignoreType = 'parent___parent___internal___ignoreType',
  parent___parent___internal___mediaType = 'parent___parent___internal___mediaType',
  parent___parent___internal___owner = 'parent___parent___internal___owner',
  parent___parent___internal___type = 'parent___parent___internal___type',
  parent___parent___parent___children = 'parent___parent___parent___children',
  parent___parent___parent___id = 'parent___parent___parent___id',
  previewDisplay = 'previewDisplay'
}

export type SanityPosterFilterInput = {
  _createdAt?: InputMaybe<DateQueryOperatorInput>;
  _id?: InputMaybe<StringQueryOperatorInput>;
  _key?: InputMaybe<StringQueryOperatorInput>;
  _rawBackground?: InputMaybe<JsonQueryOperatorInput>;
  _rawLines?: InputMaybe<JsonQueryOperatorInput>;
  _rev?: InputMaybe<StringQueryOperatorInput>;
  _type?: InputMaybe<StringQueryOperatorInput>;
  _updatedAt?: InputMaybe<DateQueryOperatorInput>;
  background?: InputMaybe<SanityImageFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  lines?: InputMaybe<SanityPosterLineFilterListInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  overlayColor?: InputMaybe<StringQueryOperatorInput>;
  overlayOpacity?: InputMaybe<FloatQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  previewDisplay?: InputMaybe<FloatQueryOperatorInput>;
};

export type SanityPosterGroupConnection = {
  __typename?: 'SanityPosterGroupConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<SanityPosterEdge>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
  group: Array<SanityPosterGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<SanityPoster>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type SanityPosterGroupConnectionDistinctArgs = {
  field: SanityPosterFieldsEnum;
};


export type SanityPosterGroupConnectionGroupArgs = {
  field: SanityPosterFieldsEnum;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type SanityPosterGroupConnectionMaxArgs = {
  field: SanityPosterFieldsEnum;
};


export type SanityPosterGroupConnectionMinArgs = {
  field: SanityPosterFieldsEnum;
};


export type SanityPosterGroupConnectionSumArgs = {
  field: SanityPosterFieldsEnum;
};

export type SanityPosterInContent = {
  __typename?: 'SanityPosterInContent';
  _key?: Maybe<Scalars['String']>;
  _rawPoster?: Maybe<Scalars['JSON']>;
  _type?: Maybe<Scalars['String']>;
  align?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['String']>;
  poster?: Maybe<SanityPoster>;
  size?: Maybe<Scalars['String']>;
};


export type SanityPosterInContent_RawPosterArgs = {
  resolveReferences?: InputMaybe<SanityResolveReferencesConfiguration>;
};

export type SanityPosterLine = {
  __typename?: 'SanityPosterLine';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  fontSize?: Maybe<Scalars['Float']>;
  position?: Maybe<Scalars['Float']>;
  text?: Maybe<Scalars['String']>;
};

export type SanityPosterLineFilterInput = {
  _key?: InputMaybe<StringQueryOperatorInput>;
  _type?: InputMaybe<StringQueryOperatorInput>;
  fontSize?: InputMaybe<FloatQueryOperatorInput>;
  position?: InputMaybe<FloatQueryOperatorInput>;
  text?: InputMaybe<StringQueryOperatorInput>;
};

export type SanityPosterLineFilterListInput = {
  elemMatch?: InputMaybe<SanityPosterLineFilterInput>;
};

export type SanityPosterSortInput = {
  fields?: InputMaybe<Array<InputMaybe<SanityPosterFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type SanityResolveReferencesConfiguration = {
  /** Max depth to resolve references to */
  maxDepth: Scalars['Int'];
};

export type SanityScheduleAlert = Node & SanityDocument & {
  __typename?: 'SanityScheduleAlert';
  _createdAt?: Maybe<Scalars['Date']>;
  _id?: Maybe<Scalars['String']>;
  _key?: Maybe<Scalars['String']>;
  _rawMessage?: Maybe<Scalars['JSON']>;
  _rev?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  _updatedAt?: Maybe<Scalars['Date']>;
  active?: Maybe<Scalars['Boolean']>;
  children: Array<Node>;
  id: Scalars['ID'];
  internal: Internal;
  message?: Maybe<Array<Maybe<SanityBlock>>>;
  parent?: Maybe<Node>;
};


export type SanityScheduleAlert_CreatedAtArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type SanityScheduleAlert_RawMessageArgs = {
  resolveReferences?: InputMaybe<SanityResolveReferencesConfiguration>;
};


export type SanityScheduleAlert_UpdatedAtArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type SanityScheduleAlertConnection = {
  __typename?: 'SanityScheduleAlertConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<SanityScheduleAlertEdge>;
  group: Array<SanityScheduleAlertGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<SanityScheduleAlert>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type SanityScheduleAlertConnectionDistinctArgs = {
  field: SanityScheduleAlertFieldsEnum;
};


export type SanityScheduleAlertConnectionGroupArgs = {
  field: SanityScheduleAlertFieldsEnum;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
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

export type SanityScheduleAlertEdge = {
  __typename?: 'SanityScheduleAlertEdge';
  next?: Maybe<SanityScheduleAlert>;
  node: SanityScheduleAlert;
  previous?: Maybe<SanityScheduleAlert>;
};

export enum SanityScheduleAlertFieldsEnum {
  _createdAt = '_createdAt',
  _id = '_id',
  _key = '_key',
  _rawMessage = '_rawMessage',
  _rev = '_rev',
  _type = '_type',
  _updatedAt = '_updatedAt',
  active = 'active',
  children = 'children',
  children___children = 'children___children',
  children___children___children = 'children___children___children',
  children___children___children___children = 'children___children___children___children',
  children___children___children___id = 'children___children___children___id',
  children___children___id = 'children___children___id',
  children___children___internal___content = 'children___children___internal___content',
  children___children___internal___contentDigest = 'children___children___internal___contentDigest',
  children___children___internal___description = 'children___children___internal___description',
  children___children___internal___fieldOwners = 'children___children___internal___fieldOwners',
  children___children___internal___ignoreType = 'children___children___internal___ignoreType',
  children___children___internal___mediaType = 'children___children___internal___mediaType',
  children___children___internal___owner = 'children___children___internal___owner',
  children___children___internal___type = 'children___children___internal___type',
  children___children___parent___children = 'children___children___parent___children',
  children___children___parent___id = 'children___children___parent___id',
  children___id = 'children___id',
  children___internal___content = 'children___internal___content',
  children___internal___contentDigest = 'children___internal___contentDigest',
  children___internal___description = 'children___internal___description',
  children___internal___fieldOwners = 'children___internal___fieldOwners',
  children___internal___ignoreType = 'children___internal___ignoreType',
  children___internal___mediaType = 'children___internal___mediaType',
  children___internal___owner = 'children___internal___owner',
  children___internal___type = 'children___internal___type',
  children___parent___children = 'children___parent___children',
  children___parent___children___children = 'children___parent___children___children',
  children___parent___children___id = 'children___parent___children___id',
  children___parent___id = 'children___parent___id',
  children___parent___internal___content = 'children___parent___internal___content',
  children___parent___internal___contentDigest = 'children___parent___internal___contentDigest',
  children___parent___internal___description = 'children___parent___internal___description',
  children___parent___internal___fieldOwners = 'children___parent___internal___fieldOwners',
  children___parent___internal___ignoreType = 'children___parent___internal___ignoreType',
  children___parent___internal___mediaType = 'children___parent___internal___mediaType',
  children___parent___internal___owner = 'children___parent___internal___owner',
  children___parent___internal___type = 'children___parent___internal___type',
  children___parent___parent___children = 'children___parent___parent___children',
  children___parent___parent___id = 'children___parent___parent___id',
  id = 'id',
  internal___content = 'internal___content',
  internal___contentDigest = 'internal___contentDigest',
  internal___description = 'internal___description',
  internal___fieldOwners = 'internal___fieldOwners',
  internal___ignoreType = 'internal___ignoreType',
  internal___mediaType = 'internal___mediaType',
  internal___owner = 'internal___owner',
  internal___type = 'internal___type',
  message = 'message',
  message____key = 'message____key',
  message____rawChildren = 'message____rawChildren',
  message____type = 'message____type',
  message___children = 'message___children',
  message___children____key = 'message___children____key',
  message___children____type = 'message___children____type',
  message___children___marks = 'message___children___marks',
  message___children___text = 'message___children___text',
  message___list = 'message___list',
  message___style = 'message___style',
  parent___children = 'parent___children',
  parent___children___children = 'parent___children___children',
  parent___children___children___children = 'parent___children___children___children',
  parent___children___children___id = 'parent___children___children___id',
  parent___children___id = 'parent___children___id',
  parent___children___internal___content = 'parent___children___internal___content',
  parent___children___internal___contentDigest = 'parent___children___internal___contentDigest',
  parent___children___internal___description = 'parent___children___internal___description',
  parent___children___internal___fieldOwners = 'parent___children___internal___fieldOwners',
  parent___children___internal___ignoreType = 'parent___children___internal___ignoreType',
  parent___children___internal___mediaType = 'parent___children___internal___mediaType',
  parent___children___internal___owner = 'parent___children___internal___owner',
  parent___children___internal___type = 'parent___children___internal___type',
  parent___children___parent___children = 'parent___children___parent___children',
  parent___children___parent___id = 'parent___children___parent___id',
  parent___id = 'parent___id',
  parent___internal___content = 'parent___internal___content',
  parent___internal___contentDigest = 'parent___internal___contentDigest',
  parent___internal___description = 'parent___internal___description',
  parent___internal___fieldOwners = 'parent___internal___fieldOwners',
  parent___internal___ignoreType = 'parent___internal___ignoreType',
  parent___internal___mediaType = 'parent___internal___mediaType',
  parent___internal___owner = 'parent___internal___owner',
  parent___internal___type = 'parent___internal___type',
  parent___parent___children = 'parent___parent___children',
  parent___parent___children___children = 'parent___parent___children___children',
  parent___parent___children___id = 'parent___parent___children___id',
  parent___parent___id = 'parent___parent___id',
  parent___parent___internal___content = 'parent___parent___internal___content',
  parent___parent___internal___contentDigest = 'parent___parent___internal___contentDigest',
  parent___parent___internal___description = 'parent___parent___internal___description',
  parent___parent___internal___fieldOwners = 'parent___parent___internal___fieldOwners',
  parent___parent___internal___ignoreType = 'parent___parent___internal___ignoreType',
  parent___parent___internal___mediaType = 'parent___parent___internal___mediaType',
  parent___parent___internal___owner = 'parent___parent___internal___owner',
  parent___parent___internal___type = 'parent___parent___internal___type',
  parent___parent___parent___children = 'parent___parent___parent___children',
  parent___parent___parent___id = 'parent___parent___parent___id'
}

export type SanityScheduleAlertFilterInput = {
  _createdAt?: InputMaybe<DateQueryOperatorInput>;
  _id?: InputMaybe<StringQueryOperatorInput>;
  _key?: InputMaybe<StringQueryOperatorInput>;
  _rawMessage?: InputMaybe<JsonQueryOperatorInput>;
  _rev?: InputMaybe<StringQueryOperatorInput>;
  _type?: InputMaybe<StringQueryOperatorInput>;
  _updatedAt?: InputMaybe<DateQueryOperatorInput>;
  active?: InputMaybe<BooleanQueryOperatorInput>;
  children?: InputMaybe<NodeFilterListInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  message?: InputMaybe<SanityBlockFilterListInput>;
  parent?: InputMaybe<NodeFilterInput>;
};

export type SanityScheduleAlertGroupConnection = {
  __typename?: 'SanityScheduleAlertGroupConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<SanityScheduleAlertEdge>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
  group: Array<SanityScheduleAlertGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<SanityScheduleAlert>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type SanityScheduleAlertGroupConnectionDistinctArgs = {
  field: SanityScheduleAlertFieldsEnum;
};


export type SanityScheduleAlertGroupConnectionGroupArgs = {
  field: SanityScheduleAlertFieldsEnum;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type SanityScheduleAlertGroupConnectionMaxArgs = {
  field: SanityScheduleAlertFieldsEnum;
};


export type SanityScheduleAlertGroupConnectionMinArgs = {
  field: SanityScheduleAlertFieldsEnum;
};


export type SanityScheduleAlertGroupConnectionSumArgs = {
  field: SanityScheduleAlertFieldsEnum;
};

export type SanityScheduleAlertSortInput = {
  fields?: InputMaybe<Array<InputMaybe<SanityScheduleAlertFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type SanityScriptureReference = {
  __typename?: 'SanityScriptureReference';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
  verseReference?: Maybe<Scalars['String']>;
};

export type SanitySermonUpload = Node & SanityDocument & {
  __typename?: 'SanitySermonUpload';
  _createdAt?: Maybe<Scalars['Date']>;
  _id?: Maybe<Scalars['String']>;
  _key?: Maybe<Scalars['String']>;
  _rawAudioFile?: Maybe<Scalars['JSON']>;
  _rev?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  _updatedAt?: Maybe<Scalars['Date']>;
  audioFile?: Maybe<SanityFile>;
  children: Array<Node>;
  date?: Maybe<Scalars['Date']>;
  extraInfo?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  internal: Internal;
  parent?: Maybe<Node>;
};


export type SanitySermonUpload_CreatedAtArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type SanitySermonUpload_RawAudioFileArgs = {
  resolveReferences?: InputMaybe<SanityResolveReferencesConfiguration>;
};


export type SanitySermonUpload_UpdatedAtArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type SanitySermonUploadDateArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type SanitySermonUploadConnection = {
  __typename?: 'SanitySermonUploadConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<SanitySermonUploadEdge>;
  group: Array<SanitySermonUploadGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<SanitySermonUpload>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type SanitySermonUploadConnectionDistinctArgs = {
  field: SanitySermonUploadFieldsEnum;
};


export type SanitySermonUploadConnectionGroupArgs = {
  field: SanitySermonUploadFieldsEnum;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
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

export type SanitySermonUploadEdge = {
  __typename?: 'SanitySermonUploadEdge';
  next?: Maybe<SanitySermonUpload>;
  node: SanitySermonUpload;
  previous?: Maybe<SanitySermonUpload>;
};

export enum SanitySermonUploadFieldsEnum {
  _createdAt = '_createdAt',
  _id = '_id',
  _key = '_key',
  _rawAudioFile = '_rawAudioFile',
  _rev = '_rev',
  _type = '_type',
  _updatedAt = '_updatedAt',
  audioFile____key = 'audioFile____key',
  audioFile____rawAsset = 'audioFile____rawAsset',
  audioFile____type = 'audioFile____type',
  audioFile___asset____createdAt = 'audioFile___asset____createdAt',
  audioFile___asset____id = 'audioFile___asset____id',
  audioFile___asset____key = 'audioFile___asset____key',
  audioFile___asset____rawSource = 'audioFile___asset____rawSource',
  audioFile___asset____rev = 'audioFile___asset____rev',
  audioFile___asset____type = 'audioFile___asset____type',
  audioFile___asset____updatedAt = 'audioFile___asset____updatedAt',
  audioFile___asset___altText = 'audioFile___asset___altText',
  audioFile___asset___assetId = 'audioFile___asset___assetId',
  audioFile___asset___children = 'audioFile___asset___children',
  audioFile___asset___children___children = 'audioFile___asset___children___children',
  audioFile___asset___children___id = 'audioFile___asset___children___id',
  audioFile___asset___description = 'audioFile___asset___description',
  audioFile___asset___extension = 'audioFile___asset___extension',
  audioFile___asset___id = 'audioFile___asset___id',
  audioFile___asset___internal___content = 'audioFile___asset___internal___content',
  audioFile___asset___internal___contentDigest = 'audioFile___asset___internal___contentDigest',
  audioFile___asset___internal___description = 'audioFile___asset___internal___description',
  audioFile___asset___internal___fieldOwners = 'audioFile___asset___internal___fieldOwners',
  audioFile___asset___internal___ignoreType = 'audioFile___asset___internal___ignoreType',
  audioFile___asset___internal___mediaType = 'audioFile___asset___internal___mediaType',
  audioFile___asset___internal___owner = 'audioFile___asset___internal___owner',
  audioFile___asset___internal___type = 'audioFile___asset___internal___type',
  audioFile___asset___label = 'audioFile___asset___label',
  audioFile___asset___mimeType = 'audioFile___asset___mimeType',
  audioFile___asset___originalFilename = 'audioFile___asset___originalFilename',
  audioFile___asset___parent___children = 'audioFile___asset___parent___children',
  audioFile___asset___parent___id = 'audioFile___asset___parent___id',
  audioFile___asset___path = 'audioFile___asset___path',
  audioFile___asset___sha1hash = 'audioFile___asset___sha1hash',
  audioFile___asset___size = 'audioFile___asset___size',
  audioFile___asset___source____key = 'audioFile___asset___source____key',
  audioFile___asset___source____type = 'audioFile___asset___source____type',
  audioFile___asset___source___id = 'audioFile___asset___source___id',
  audioFile___asset___source___name = 'audioFile___asset___source___name',
  audioFile___asset___source___url = 'audioFile___asset___source___url',
  audioFile___asset___title = 'audioFile___asset___title',
  audioFile___asset___url = 'audioFile___asset___url',
  children = 'children',
  children___children = 'children___children',
  children___children___children = 'children___children___children',
  children___children___children___children = 'children___children___children___children',
  children___children___children___id = 'children___children___children___id',
  children___children___id = 'children___children___id',
  children___children___internal___content = 'children___children___internal___content',
  children___children___internal___contentDigest = 'children___children___internal___contentDigest',
  children___children___internal___description = 'children___children___internal___description',
  children___children___internal___fieldOwners = 'children___children___internal___fieldOwners',
  children___children___internal___ignoreType = 'children___children___internal___ignoreType',
  children___children___internal___mediaType = 'children___children___internal___mediaType',
  children___children___internal___owner = 'children___children___internal___owner',
  children___children___internal___type = 'children___children___internal___type',
  children___children___parent___children = 'children___children___parent___children',
  children___children___parent___id = 'children___children___parent___id',
  children___id = 'children___id',
  children___internal___content = 'children___internal___content',
  children___internal___contentDigest = 'children___internal___contentDigest',
  children___internal___description = 'children___internal___description',
  children___internal___fieldOwners = 'children___internal___fieldOwners',
  children___internal___ignoreType = 'children___internal___ignoreType',
  children___internal___mediaType = 'children___internal___mediaType',
  children___internal___owner = 'children___internal___owner',
  children___internal___type = 'children___internal___type',
  children___parent___children = 'children___parent___children',
  children___parent___children___children = 'children___parent___children___children',
  children___parent___children___id = 'children___parent___children___id',
  children___parent___id = 'children___parent___id',
  children___parent___internal___content = 'children___parent___internal___content',
  children___parent___internal___contentDigest = 'children___parent___internal___contentDigest',
  children___parent___internal___description = 'children___parent___internal___description',
  children___parent___internal___fieldOwners = 'children___parent___internal___fieldOwners',
  children___parent___internal___ignoreType = 'children___parent___internal___ignoreType',
  children___parent___internal___mediaType = 'children___parent___internal___mediaType',
  children___parent___internal___owner = 'children___parent___internal___owner',
  children___parent___internal___type = 'children___parent___internal___type',
  children___parent___parent___children = 'children___parent___parent___children',
  children___parent___parent___id = 'children___parent___parent___id',
  date = 'date',
  extraInfo = 'extraInfo',
  id = 'id',
  internal___content = 'internal___content',
  internal___contentDigest = 'internal___contentDigest',
  internal___description = 'internal___description',
  internal___fieldOwners = 'internal___fieldOwners',
  internal___ignoreType = 'internal___ignoreType',
  internal___mediaType = 'internal___mediaType',
  internal___owner = 'internal___owner',
  internal___type = 'internal___type',
  parent___children = 'parent___children',
  parent___children___children = 'parent___children___children',
  parent___children___children___children = 'parent___children___children___children',
  parent___children___children___id = 'parent___children___children___id',
  parent___children___id = 'parent___children___id',
  parent___children___internal___content = 'parent___children___internal___content',
  parent___children___internal___contentDigest = 'parent___children___internal___contentDigest',
  parent___children___internal___description = 'parent___children___internal___description',
  parent___children___internal___fieldOwners = 'parent___children___internal___fieldOwners',
  parent___children___internal___ignoreType = 'parent___children___internal___ignoreType',
  parent___children___internal___mediaType = 'parent___children___internal___mediaType',
  parent___children___internal___owner = 'parent___children___internal___owner',
  parent___children___internal___type = 'parent___children___internal___type',
  parent___children___parent___children = 'parent___children___parent___children',
  parent___children___parent___id = 'parent___children___parent___id',
  parent___id = 'parent___id',
  parent___internal___content = 'parent___internal___content',
  parent___internal___contentDigest = 'parent___internal___contentDigest',
  parent___internal___description = 'parent___internal___description',
  parent___internal___fieldOwners = 'parent___internal___fieldOwners',
  parent___internal___ignoreType = 'parent___internal___ignoreType',
  parent___internal___mediaType = 'parent___internal___mediaType',
  parent___internal___owner = 'parent___internal___owner',
  parent___internal___type = 'parent___internal___type',
  parent___parent___children = 'parent___parent___children',
  parent___parent___children___children = 'parent___parent___children___children',
  parent___parent___children___id = 'parent___parent___children___id',
  parent___parent___id = 'parent___parent___id',
  parent___parent___internal___content = 'parent___parent___internal___content',
  parent___parent___internal___contentDigest = 'parent___parent___internal___contentDigest',
  parent___parent___internal___description = 'parent___parent___internal___description',
  parent___parent___internal___fieldOwners = 'parent___parent___internal___fieldOwners',
  parent___parent___internal___ignoreType = 'parent___parent___internal___ignoreType',
  parent___parent___internal___mediaType = 'parent___parent___internal___mediaType',
  parent___parent___internal___owner = 'parent___parent___internal___owner',
  parent___parent___internal___type = 'parent___parent___internal___type',
  parent___parent___parent___children = 'parent___parent___parent___children',
  parent___parent___parent___id = 'parent___parent___parent___id'
}

export type SanitySermonUploadFilterInput = {
  _createdAt?: InputMaybe<DateQueryOperatorInput>;
  _id?: InputMaybe<StringQueryOperatorInput>;
  _key?: InputMaybe<StringQueryOperatorInput>;
  _rawAudioFile?: InputMaybe<JsonQueryOperatorInput>;
  _rev?: InputMaybe<StringQueryOperatorInput>;
  _type?: InputMaybe<StringQueryOperatorInput>;
  _updatedAt?: InputMaybe<DateQueryOperatorInput>;
  audioFile?: InputMaybe<SanityFileFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  date?: InputMaybe<DateQueryOperatorInput>;
  extraInfo?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  parent?: InputMaybe<NodeFilterInput>;
};

export type SanitySermonUploadGroupConnection = {
  __typename?: 'SanitySermonUploadGroupConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<SanitySermonUploadEdge>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
  group: Array<SanitySermonUploadGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<SanitySermonUpload>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type SanitySermonUploadGroupConnectionDistinctArgs = {
  field: SanitySermonUploadFieldsEnum;
};


export type SanitySermonUploadGroupConnectionGroupArgs = {
  field: SanitySermonUploadFieldsEnum;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type SanitySermonUploadGroupConnectionMaxArgs = {
  field: SanitySermonUploadFieldsEnum;
};


export type SanitySermonUploadGroupConnectionMinArgs = {
  field: SanitySermonUploadFieldsEnum;
};


export type SanitySermonUploadGroupConnectionSumArgs = {
  field: SanitySermonUploadFieldsEnum;
};

export type SanitySermonUploadSortInput = {
  fields?: InputMaybe<Array<InputMaybe<SanitySermonUploadFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type SanityShortcuts = Node & SanityDocument & {
  __typename?: 'SanityShortcuts';
  _createdAt?: Maybe<Scalars['Date']>;
  _id?: Maybe<Scalars['String']>;
  _key?: Maybe<Scalars['String']>;
  _rawContent?: Maybe<Scalars['JSON']>;
  _rev?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  _updatedAt?: Maybe<Scalars['Date']>;
  children: Array<Node>;
  content?: Maybe<Array<Maybe<SanityBlock>>>;
  id: Scalars['ID'];
  internal: Internal;
  parent?: Maybe<Node>;
};


export type SanityShortcuts_CreatedAtArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type SanityShortcuts_RawContentArgs = {
  resolveReferences?: InputMaybe<SanityResolveReferencesConfiguration>;
};


export type SanityShortcuts_UpdatedAtArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type SanityShortcutsConnection = {
  __typename?: 'SanityShortcutsConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<SanityShortcutsEdge>;
  group: Array<SanityShortcutsGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<SanityShortcuts>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type SanityShortcutsConnectionDistinctArgs = {
  field: SanityShortcutsFieldsEnum;
};


export type SanityShortcutsConnectionGroupArgs = {
  field: SanityShortcutsFieldsEnum;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
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

export type SanityShortcutsEdge = {
  __typename?: 'SanityShortcutsEdge';
  next?: Maybe<SanityShortcuts>;
  node: SanityShortcuts;
  previous?: Maybe<SanityShortcuts>;
};

export enum SanityShortcutsFieldsEnum {
  _createdAt = '_createdAt',
  _id = '_id',
  _key = '_key',
  _rawContent = '_rawContent',
  _rev = '_rev',
  _type = '_type',
  _updatedAt = '_updatedAt',
  children = 'children',
  children___children = 'children___children',
  children___children___children = 'children___children___children',
  children___children___children___children = 'children___children___children___children',
  children___children___children___id = 'children___children___children___id',
  children___children___id = 'children___children___id',
  children___children___internal___content = 'children___children___internal___content',
  children___children___internal___contentDigest = 'children___children___internal___contentDigest',
  children___children___internal___description = 'children___children___internal___description',
  children___children___internal___fieldOwners = 'children___children___internal___fieldOwners',
  children___children___internal___ignoreType = 'children___children___internal___ignoreType',
  children___children___internal___mediaType = 'children___children___internal___mediaType',
  children___children___internal___owner = 'children___children___internal___owner',
  children___children___internal___type = 'children___children___internal___type',
  children___children___parent___children = 'children___children___parent___children',
  children___children___parent___id = 'children___children___parent___id',
  children___id = 'children___id',
  children___internal___content = 'children___internal___content',
  children___internal___contentDigest = 'children___internal___contentDigest',
  children___internal___description = 'children___internal___description',
  children___internal___fieldOwners = 'children___internal___fieldOwners',
  children___internal___ignoreType = 'children___internal___ignoreType',
  children___internal___mediaType = 'children___internal___mediaType',
  children___internal___owner = 'children___internal___owner',
  children___internal___type = 'children___internal___type',
  children___parent___children = 'children___parent___children',
  children___parent___children___children = 'children___parent___children___children',
  children___parent___children___id = 'children___parent___children___id',
  children___parent___id = 'children___parent___id',
  children___parent___internal___content = 'children___parent___internal___content',
  children___parent___internal___contentDigest = 'children___parent___internal___contentDigest',
  children___parent___internal___description = 'children___parent___internal___description',
  children___parent___internal___fieldOwners = 'children___parent___internal___fieldOwners',
  children___parent___internal___ignoreType = 'children___parent___internal___ignoreType',
  children___parent___internal___mediaType = 'children___parent___internal___mediaType',
  children___parent___internal___owner = 'children___parent___internal___owner',
  children___parent___internal___type = 'children___parent___internal___type',
  children___parent___parent___children = 'children___parent___parent___children',
  children___parent___parent___id = 'children___parent___parent___id',
  content = 'content',
  content____key = 'content____key',
  content____rawChildren = 'content____rawChildren',
  content____type = 'content____type',
  content___children = 'content___children',
  content___children____key = 'content___children____key',
  content___children____type = 'content___children____type',
  content___children___marks = 'content___children___marks',
  content___children___text = 'content___children___text',
  content___list = 'content___list',
  content___style = 'content___style',
  id = 'id',
  internal___content = 'internal___content',
  internal___contentDigest = 'internal___contentDigest',
  internal___description = 'internal___description',
  internal___fieldOwners = 'internal___fieldOwners',
  internal___ignoreType = 'internal___ignoreType',
  internal___mediaType = 'internal___mediaType',
  internal___owner = 'internal___owner',
  internal___type = 'internal___type',
  parent___children = 'parent___children',
  parent___children___children = 'parent___children___children',
  parent___children___children___children = 'parent___children___children___children',
  parent___children___children___id = 'parent___children___children___id',
  parent___children___id = 'parent___children___id',
  parent___children___internal___content = 'parent___children___internal___content',
  parent___children___internal___contentDigest = 'parent___children___internal___contentDigest',
  parent___children___internal___description = 'parent___children___internal___description',
  parent___children___internal___fieldOwners = 'parent___children___internal___fieldOwners',
  parent___children___internal___ignoreType = 'parent___children___internal___ignoreType',
  parent___children___internal___mediaType = 'parent___children___internal___mediaType',
  parent___children___internal___owner = 'parent___children___internal___owner',
  parent___children___internal___type = 'parent___children___internal___type',
  parent___children___parent___children = 'parent___children___parent___children',
  parent___children___parent___id = 'parent___children___parent___id',
  parent___id = 'parent___id',
  parent___internal___content = 'parent___internal___content',
  parent___internal___contentDigest = 'parent___internal___contentDigest',
  parent___internal___description = 'parent___internal___description',
  parent___internal___fieldOwners = 'parent___internal___fieldOwners',
  parent___internal___ignoreType = 'parent___internal___ignoreType',
  parent___internal___mediaType = 'parent___internal___mediaType',
  parent___internal___owner = 'parent___internal___owner',
  parent___internal___type = 'parent___internal___type',
  parent___parent___children = 'parent___parent___children',
  parent___parent___children___children = 'parent___parent___children___children',
  parent___parent___children___id = 'parent___parent___children___id',
  parent___parent___id = 'parent___parent___id',
  parent___parent___internal___content = 'parent___parent___internal___content',
  parent___parent___internal___contentDigest = 'parent___parent___internal___contentDigest',
  parent___parent___internal___description = 'parent___parent___internal___description',
  parent___parent___internal___fieldOwners = 'parent___parent___internal___fieldOwners',
  parent___parent___internal___ignoreType = 'parent___parent___internal___ignoreType',
  parent___parent___internal___mediaType = 'parent___parent___internal___mediaType',
  parent___parent___internal___owner = 'parent___parent___internal___owner',
  parent___parent___internal___type = 'parent___parent___internal___type',
  parent___parent___parent___children = 'parent___parent___parent___children',
  parent___parent___parent___id = 'parent___parent___parent___id'
}

export type SanityShortcutsFilterInput = {
  _createdAt?: InputMaybe<DateQueryOperatorInput>;
  _id?: InputMaybe<StringQueryOperatorInput>;
  _key?: InputMaybe<StringQueryOperatorInput>;
  _rawContent?: InputMaybe<JsonQueryOperatorInput>;
  _rev?: InputMaybe<StringQueryOperatorInput>;
  _type?: InputMaybe<StringQueryOperatorInput>;
  _updatedAt?: InputMaybe<DateQueryOperatorInput>;
  children?: InputMaybe<NodeFilterListInput>;
  content?: InputMaybe<SanityBlockFilterListInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  parent?: InputMaybe<NodeFilterInput>;
};

export type SanityShortcutsGroupConnection = {
  __typename?: 'SanityShortcutsGroupConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<SanityShortcutsEdge>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
  group: Array<SanityShortcutsGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<SanityShortcuts>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type SanityShortcutsGroupConnectionDistinctArgs = {
  field: SanityShortcutsFieldsEnum;
};


export type SanityShortcutsGroupConnectionGroupArgs = {
  field: SanityShortcutsFieldsEnum;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type SanityShortcutsGroupConnectionMaxArgs = {
  field: SanityShortcutsFieldsEnum;
};


export type SanityShortcutsGroupConnectionMinArgs = {
  field: SanityShortcutsFieldsEnum;
};


export type SanityShortcutsGroupConnectionSumArgs = {
  field: SanityShortcutsFieldsEnum;
};

export type SanityShortcutsSortInput = {
  fields?: InputMaybe<Array<InputMaybe<SanityShortcutsFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type SanitySlug = {
  __typename?: 'SanitySlug';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  current?: Maybe<Scalars['String']>;
};

export type SanitySlugFilterInput = {
  _key?: InputMaybe<StringQueryOperatorInput>;
  _type?: InputMaybe<StringQueryOperatorInput>;
  current?: InputMaybe<StringQueryOperatorInput>;
};

export type SanitySpan = {
  __typename?: 'SanitySpan';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  marks?: Maybe<Array<Maybe<Scalars['String']>>>;
  text?: Maybe<Scalars['String']>;
};

export type SanitySpanFilterInput = {
  _key?: InputMaybe<StringQueryOperatorInput>;
  _type?: InputMaybe<StringQueryOperatorInput>;
  marks?: InputMaybe<StringQueryOperatorInput>;
  text?: InputMaybe<StringQueryOperatorInput>;
};

export type SanitySpanFilterListInput = {
  elemMatch?: InputMaybe<SanitySpanFilterInput>;
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

export type SanityWeeklySchedule = Node & SanityDocument & {
  __typename?: 'SanityWeeklySchedule';
  _createdAt?: Maybe<Scalars['Date']>;
  _id?: Maybe<Scalars['String']>;
  _key?: Maybe<Scalars['String']>;
  _rawDays?: Maybe<Scalars['JSON']>;
  _rev?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  _updatedAt?: Maybe<Scalars['Date']>;
  children: Array<Node>;
  days?: Maybe<Array<Maybe<SanityWeeklyScheduleDay>>>;
  id: Scalars['ID'];
  internal: Internal;
  parent?: Maybe<Node>;
};


export type SanityWeeklySchedule_CreatedAtArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type SanityWeeklySchedule_RawDaysArgs = {
  resolveReferences?: InputMaybe<SanityResolveReferencesConfiguration>;
};


export type SanityWeeklySchedule_UpdatedAtArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type SanityWeeklyScheduleConnection = {
  __typename?: 'SanityWeeklyScheduleConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<SanityWeeklyScheduleEdge>;
  group: Array<SanityWeeklyScheduleGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<SanityWeeklySchedule>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type SanityWeeklyScheduleConnectionDistinctArgs = {
  field: SanityWeeklyScheduleFieldsEnum;
};


export type SanityWeeklyScheduleConnectionGroupArgs = {
  field: SanityWeeklyScheduleFieldsEnum;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
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

export type SanityWeeklyScheduleDay = {
  __typename?: 'SanityWeeklyScheduleDay';
  _key?: Maybe<Scalars['String']>;
  _rawEvents?: Maybe<Scalars['JSON']>;
  _type?: Maybe<Scalars['String']>;
  events?: Maybe<Array<Maybe<SanityWeeklyScheduleEvent>>>;
  label?: Maybe<Scalars['String']>;
};


export type SanityWeeklyScheduleDay_RawEventsArgs = {
  resolveReferences?: InputMaybe<SanityResolveReferencesConfiguration>;
};

export type SanityWeeklyScheduleDayFilterInput = {
  _key?: InputMaybe<StringQueryOperatorInput>;
  _rawEvents?: InputMaybe<JsonQueryOperatorInput>;
  _type?: InputMaybe<StringQueryOperatorInput>;
  events?: InputMaybe<SanityWeeklyScheduleEventFilterListInput>;
  label?: InputMaybe<StringQueryOperatorInput>;
};

export type SanityWeeklyScheduleDayFilterListInput = {
  elemMatch?: InputMaybe<SanityWeeklyScheduleDayFilterInput>;
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
  description?: Maybe<Scalars['String']>;
  time?: Maybe<Scalars['String']>;
};

export type SanityWeeklyScheduleEventFilterInput = {
  _key?: InputMaybe<StringQueryOperatorInput>;
  _type?: InputMaybe<StringQueryOperatorInput>;
  description?: InputMaybe<StringQueryOperatorInput>;
  time?: InputMaybe<StringQueryOperatorInput>;
};

export type SanityWeeklyScheduleEventFilterListInput = {
  elemMatch?: InputMaybe<SanityWeeklyScheduleEventFilterInput>;
};

export enum SanityWeeklyScheduleFieldsEnum {
  _createdAt = '_createdAt',
  _id = '_id',
  _key = '_key',
  _rawDays = '_rawDays',
  _rev = '_rev',
  _type = '_type',
  _updatedAt = '_updatedAt',
  children = 'children',
  children___children = 'children___children',
  children___children___children = 'children___children___children',
  children___children___children___children = 'children___children___children___children',
  children___children___children___id = 'children___children___children___id',
  children___children___id = 'children___children___id',
  children___children___internal___content = 'children___children___internal___content',
  children___children___internal___contentDigest = 'children___children___internal___contentDigest',
  children___children___internal___description = 'children___children___internal___description',
  children___children___internal___fieldOwners = 'children___children___internal___fieldOwners',
  children___children___internal___ignoreType = 'children___children___internal___ignoreType',
  children___children___internal___mediaType = 'children___children___internal___mediaType',
  children___children___internal___owner = 'children___children___internal___owner',
  children___children___internal___type = 'children___children___internal___type',
  children___children___parent___children = 'children___children___parent___children',
  children___children___parent___id = 'children___children___parent___id',
  children___id = 'children___id',
  children___internal___content = 'children___internal___content',
  children___internal___contentDigest = 'children___internal___contentDigest',
  children___internal___description = 'children___internal___description',
  children___internal___fieldOwners = 'children___internal___fieldOwners',
  children___internal___ignoreType = 'children___internal___ignoreType',
  children___internal___mediaType = 'children___internal___mediaType',
  children___internal___owner = 'children___internal___owner',
  children___internal___type = 'children___internal___type',
  children___parent___children = 'children___parent___children',
  children___parent___children___children = 'children___parent___children___children',
  children___parent___children___id = 'children___parent___children___id',
  children___parent___id = 'children___parent___id',
  children___parent___internal___content = 'children___parent___internal___content',
  children___parent___internal___contentDigest = 'children___parent___internal___contentDigest',
  children___parent___internal___description = 'children___parent___internal___description',
  children___parent___internal___fieldOwners = 'children___parent___internal___fieldOwners',
  children___parent___internal___ignoreType = 'children___parent___internal___ignoreType',
  children___parent___internal___mediaType = 'children___parent___internal___mediaType',
  children___parent___internal___owner = 'children___parent___internal___owner',
  children___parent___internal___type = 'children___parent___internal___type',
  children___parent___parent___children = 'children___parent___parent___children',
  children___parent___parent___id = 'children___parent___parent___id',
  days = 'days',
  days____key = 'days____key',
  days____rawEvents = 'days____rawEvents',
  days____type = 'days____type',
  days___events = 'days___events',
  days___events____key = 'days___events____key',
  days___events____type = 'days___events____type',
  days___events___description = 'days___events___description',
  days___events___time = 'days___events___time',
  days___label = 'days___label',
  id = 'id',
  internal___content = 'internal___content',
  internal___contentDigest = 'internal___contentDigest',
  internal___description = 'internal___description',
  internal___fieldOwners = 'internal___fieldOwners',
  internal___ignoreType = 'internal___ignoreType',
  internal___mediaType = 'internal___mediaType',
  internal___owner = 'internal___owner',
  internal___type = 'internal___type',
  parent___children = 'parent___children',
  parent___children___children = 'parent___children___children',
  parent___children___children___children = 'parent___children___children___children',
  parent___children___children___id = 'parent___children___children___id',
  parent___children___id = 'parent___children___id',
  parent___children___internal___content = 'parent___children___internal___content',
  parent___children___internal___contentDigest = 'parent___children___internal___contentDigest',
  parent___children___internal___description = 'parent___children___internal___description',
  parent___children___internal___fieldOwners = 'parent___children___internal___fieldOwners',
  parent___children___internal___ignoreType = 'parent___children___internal___ignoreType',
  parent___children___internal___mediaType = 'parent___children___internal___mediaType',
  parent___children___internal___owner = 'parent___children___internal___owner',
  parent___children___internal___type = 'parent___children___internal___type',
  parent___children___parent___children = 'parent___children___parent___children',
  parent___children___parent___id = 'parent___children___parent___id',
  parent___id = 'parent___id',
  parent___internal___content = 'parent___internal___content',
  parent___internal___contentDigest = 'parent___internal___contentDigest',
  parent___internal___description = 'parent___internal___description',
  parent___internal___fieldOwners = 'parent___internal___fieldOwners',
  parent___internal___ignoreType = 'parent___internal___ignoreType',
  parent___internal___mediaType = 'parent___internal___mediaType',
  parent___internal___owner = 'parent___internal___owner',
  parent___internal___type = 'parent___internal___type',
  parent___parent___children = 'parent___parent___children',
  parent___parent___children___children = 'parent___parent___children___children',
  parent___parent___children___id = 'parent___parent___children___id',
  parent___parent___id = 'parent___parent___id',
  parent___parent___internal___content = 'parent___parent___internal___content',
  parent___parent___internal___contentDigest = 'parent___parent___internal___contentDigest',
  parent___parent___internal___description = 'parent___parent___internal___description',
  parent___parent___internal___fieldOwners = 'parent___parent___internal___fieldOwners',
  parent___parent___internal___ignoreType = 'parent___parent___internal___ignoreType',
  parent___parent___internal___mediaType = 'parent___parent___internal___mediaType',
  parent___parent___internal___owner = 'parent___parent___internal___owner',
  parent___parent___internal___type = 'parent___parent___internal___type',
  parent___parent___parent___children = 'parent___parent___parent___children',
  parent___parent___parent___id = 'parent___parent___parent___id'
}

export type SanityWeeklyScheduleFilterInput = {
  _createdAt?: InputMaybe<DateQueryOperatorInput>;
  _id?: InputMaybe<StringQueryOperatorInput>;
  _key?: InputMaybe<StringQueryOperatorInput>;
  _rawDays?: InputMaybe<JsonQueryOperatorInput>;
  _rev?: InputMaybe<StringQueryOperatorInput>;
  _type?: InputMaybe<StringQueryOperatorInput>;
  _updatedAt?: InputMaybe<DateQueryOperatorInput>;
  children?: InputMaybe<NodeFilterListInput>;
  days?: InputMaybe<SanityWeeklyScheduleDayFilterListInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  parent?: InputMaybe<NodeFilterInput>;
};

export type SanityWeeklyScheduleGroupConnection = {
  __typename?: 'SanityWeeklyScheduleGroupConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<SanityWeeklyScheduleEdge>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
  group: Array<SanityWeeklyScheduleGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<SanityWeeklySchedule>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type SanityWeeklyScheduleGroupConnectionDistinctArgs = {
  field: SanityWeeklyScheduleFieldsEnum;
};


export type SanityWeeklyScheduleGroupConnectionGroupArgs = {
  field: SanityWeeklyScheduleFieldsEnum;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type SanityWeeklyScheduleGroupConnectionMaxArgs = {
  field: SanityWeeklyScheduleFieldsEnum;
};


export type SanityWeeklyScheduleGroupConnectionMinArgs = {
  field: SanityWeeklyScheduleFieldsEnum;
};


export type SanityWeeklyScheduleGroupConnectionSumArgs = {
  field: SanityWeeklyScheduleFieldsEnum;
};

export type SanityWeeklyScheduleSortInput = {
  fields?: InputMaybe<Array<InputMaybe<SanityWeeklyScheduleFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type Site = Node & {
  __typename?: 'Site';
  buildTime?: Maybe<Scalars['Date']>;
  children: Array<Node>;
  host?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  internal: Internal;
  jsxRuntime?: Maybe<Scalars['String']>;
  parent?: Maybe<Node>;
  pathPrefix?: Maybe<Scalars['String']>;
  polyfill?: Maybe<Scalars['Boolean']>;
  port?: Maybe<Scalars['Int']>;
  siteMetadata?: Maybe<SiteSiteMetadata>;
  trailingSlash?: Maybe<Scalars['String']>;
};


export type SiteBuildTimeArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type SiteBuildMetadata = Node & {
  __typename?: 'SiteBuildMetadata';
  buildTime?: Maybe<Scalars['Date']>;
  children: Array<Node>;
  id: Scalars['ID'];
  internal: Internal;
  parent?: Maybe<Node>;
};


export type SiteBuildMetadataBuildTimeArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type SiteBuildMetadataConnection = {
  __typename?: 'SiteBuildMetadataConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<SiteBuildMetadataEdge>;
  group: Array<SiteBuildMetadataGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<SiteBuildMetadata>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type SiteBuildMetadataConnectionDistinctArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataConnectionGroupArgs = {
  field: SiteBuildMetadataFieldsEnum;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
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

export type SiteBuildMetadataEdge = {
  __typename?: 'SiteBuildMetadataEdge';
  next?: Maybe<SiteBuildMetadata>;
  node: SiteBuildMetadata;
  previous?: Maybe<SiteBuildMetadata>;
};

export enum SiteBuildMetadataFieldsEnum {
  buildTime = 'buildTime',
  children = 'children',
  children___children = 'children___children',
  children___children___children = 'children___children___children',
  children___children___children___children = 'children___children___children___children',
  children___children___children___id = 'children___children___children___id',
  children___children___id = 'children___children___id',
  children___children___internal___content = 'children___children___internal___content',
  children___children___internal___contentDigest = 'children___children___internal___contentDigest',
  children___children___internal___description = 'children___children___internal___description',
  children___children___internal___fieldOwners = 'children___children___internal___fieldOwners',
  children___children___internal___ignoreType = 'children___children___internal___ignoreType',
  children___children___internal___mediaType = 'children___children___internal___mediaType',
  children___children___internal___owner = 'children___children___internal___owner',
  children___children___internal___type = 'children___children___internal___type',
  children___children___parent___children = 'children___children___parent___children',
  children___children___parent___id = 'children___children___parent___id',
  children___id = 'children___id',
  children___internal___content = 'children___internal___content',
  children___internal___contentDigest = 'children___internal___contentDigest',
  children___internal___description = 'children___internal___description',
  children___internal___fieldOwners = 'children___internal___fieldOwners',
  children___internal___ignoreType = 'children___internal___ignoreType',
  children___internal___mediaType = 'children___internal___mediaType',
  children___internal___owner = 'children___internal___owner',
  children___internal___type = 'children___internal___type',
  children___parent___children = 'children___parent___children',
  children___parent___children___children = 'children___parent___children___children',
  children___parent___children___id = 'children___parent___children___id',
  children___parent___id = 'children___parent___id',
  children___parent___internal___content = 'children___parent___internal___content',
  children___parent___internal___contentDigest = 'children___parent___internal___contentDigest',
  children___parent___internal___description = 'children___parent___internal___description',
  children___parent___internal___fieldOwners = 'children___parent___internal___fieldOwners',
  children___parent___internal___ignoreType = 'children___parent___internal___ignoreType',
  children___parent___internal___mediaType = 'children___parent___internal___mediaType',
  children___parent___internal___owner = 'children___parent___internal___owner',
  children___parent___internal___type = 'children___parent___internal___type',
  children___parent___parent___children = 'children___parent___parent___children',
  children___parent___parent___id = 'children___parent___parent___id',
  id = 'id',
  internal___content = 'internal___content',
  internal___contentDigest = 'internal___contentDigest',
  internal___description = 'internal___description',
  internal___fieldOwners = 'internal___fieldOwners',
  internal___ignoreType = 'internal___ignoreType',
  internal___mediaType = 'internal___mediaType',
  internal___owner = 'internal___owner',
  internal___type = 'internal___type',
  parent___children = 'parent___children',
  parent___children___children = 'parent___children___children',
  parent___children___children___children = 'parent___children___children___children',
  parent___children___children___id = 'parent___children___children___id',
  parent___children___id = 'parent___children___id',
  parent___children___internal___content = 'parent___children___internal___content',
  parent___children___internal___contentDigest = 'parent___children___internal___contentDigest',
  parent___children___internal___description = 'parent___children___internal___description',
  parent___children___internal___fieldOwners = 'parent___children___internal___fieldOwners',
  parent___children___internal___ignoreType = 'parent___children___internal___ignoreType',
  parent___children___internal___mediaType = 'parent___children___internal___mediaType',
  parent___children___internal___owner = 'parent___children___internal___owner',
  parent___children___internal___type = 'parent___children___internal___type',
  parent___children___parent___children = 'parent___children___parent___children',
  parent___children___parent___id = 'parent___children___parent___id',
  parent___id = 'parent___id',
  parent___internal___content = 'parent___internal___content',
  parent___internal___contentDigest = 'parent___internal___contentDigest',
  parent___internal___description = 'parent___internal___description',
  parent___internal___fieldOwners = 'parent___internal___fieldOwners',
  parent___internal___ignoreType = 'parent___internal___ignoreType',
  parent___internal___mediaType = 'parent___internal___mediaType',
  parent___internal___owner = 'parent___internal___owner',
  parent___internal___type = 'parent___internal___type',
  parent___parent___children = 'parent___parent___children',
  parent___parent___children___children = 'parent___parent___children___children',
  parent___parent___children___id = 'parent___parent___children___id',
  parent___parent___id = 'parent___parent___id',
  parent___parent___internal___content = 'parent___parent___internal___content',
  parent___parent___internal___contentDigest = 'parent___parent___internal___contentDigest',
  parent___parent___internal___description = 'parent___parent___internal___description',
  parent___parent___internal___fieldOwners = 'parent___parent___internal___fieldOwners',
  parent___parent___internal___ignoreType = 'parent___parent___internal___ignoreType',
  parent___parent___internal___mediaType = 'parent___parent___internal___mediaType',
  parent___parent___internal___owner = 'parent___parent___internal___owner',
  parent___parent___internal___type = 'parent___parent___internal___type',
  parent___parent___parent___children = 'parent___parent___parent___children',
  parent___parent___parent___id = 'parent___parent___parent___id'
}

export type SiteBuildMetadataFilterInput = {
  buildTime?: InputMaybe<DateQueryOperatorInput>;
  children?: InputMaybe<NodeFilterListInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  parent?: InputMaybe<NodeFilterInput>;
};

export type SiteBuildMetadataGroupConnection = {
  __typename?: 'SiteBuildMetadataGroupConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<SiteBuildMetadataEdge>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
  group: Array<SiteBuildMetadataGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<SiteBuildMetadata>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type SiteBuildMetadataGroupConnectionDistinctArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataGroupConnectionGroupArgs = {
  field: SiteBuildMetadataFieldsEnum;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type SiteBuildMetadataGroupConnectionMaxArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataGroupConnectionMinArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataGroupConnectionSumArgs = {
  field: SiteBuildMetadataFieldsEnum;
};

export type SiteBuildMetadataSortInput = {
  fields?: InputMaybe<Array<InputMaybe<SiteBuildMetadataFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type SiteConnection = {
  __typename?: 'SiteConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<SiteEdge>;
  group: Array<SiteGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<Site>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type SiteConnectionDistinctArgs = {
  field: SiteFieldsEnum;
};


export type SiteConnectionGroupArgs = {
  field: SiteFieldsEnum;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
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

export type SiteEdge = {
  __typename?: 'SiteEdge';
  next?: Maybe<Site>;
  node: Site;
  previous?: Maybe<Site>;
};

export enum SiteFieldsEnum {
  buildTime = 'buildTime',
  children = 'children',
  children___children = 'children___children',
  children___children___children = 'children___children___children',
  children___children___children___children = 'children___children___children___children',
  children___children___children___id = 'children___children___children___id',
  children___children___id = 'children___children___id',
  children___children___internal___content = 'children___children___internal___content',
  children___children___internal___contentDigest = 'children___children___internal___contentDigest',
  children___children___internal___description = 'children___children___internal___description',
  children___children___internal___fieldOwners = 'children___children___internal___fieldOwners',
  children___children___internal___ignoreType = 'children___children___internal___ignoreType',
  children___children___internal___mediaType = 'children___children___internal___mediaType',
  children___children___internal___owner = 'children___children___internal___owner',
  children___children___internal___type = 'children___children___internal___type',
  children___children___parent___children = 'children___children___parent___children',
  children___children___parent___id = 'children___children___parent___id',
  children___id = 'children___id',
  children___internal___content = 'children___internal___content',
  children___internal___contentDigest = 'children___internal___contentDigest',
  children___internal___description = 'children___internal___description',
  children___internal___fieldOwners = 'children___internal___fieldOwners',
  children___internal___ignoreType = 'children___internal___ignoreType',
  children___internal___mediaType = 'children___internal___mediaType',
  children___internal___owner = 'children___internal___owner',
  children___internal___type = 'children___internal___type',
  children___parent___children = 'children___parent___children',
  children___parent___children___children = 'children___parent___children___children',
  children___parent___children___id = 'children___parent___children___id',
  children___parent___id = 'children___parent___id',
  children___parent___internal___content = 'children___parent___internal___content',
  children___parent___internal___contentDigest = 'children___parent___internal___contentDigest',
  children___parent___internal___description = 'children___parent___internal___description',
  children___parent___internal___fieldOwners = 'children___parent___internal___fieldOwners',
  children___parent___internal___ignoreType = 'children___parent___internal___ignoreType',
  children___parent___internal___mediaType = 'children___parent___internal___mediaType',
  children___parent___internal___owner = 'children___parent___internal___owner',
  children___parent___internal___type = 'children___parent___internal___type',
  children___parent___parent___children = 'children___parent___parent___children',
  children___parent___parent___id = 'children___parent___parent___id',
  host = 'host',
  id = 'id',
  internal___content = 'internal___content',
  internal___contentDigest = 'internal___contentDigest',
  internal___description = 'internal___description',
  internal___fieldOwners = 'internal___fieldOwners',
  internal___ignoreType = 'internal___ignoreType',
  internal___mediaType = 'internal___mediaType',
  internal___owner = 'internal___owner',
  internal___type = 'internal___type',
  jsxRuntime = 'jsxRuntime',
  parent___children = 'parent___children',
  parent___children___children = 'parent___children___children',
  parent___children___children___children = 'parent___children___children___children',
  parent___children___children___id = 'parent___children___children___id',
  parent___children___id = 'parent___children___id',
  parent___children___internal___content = 'parent___children___internal___content',
  parent___children___internal___contentDigest = 'parent___children___internal___contentDigest',
  parent___children___internal___description = 'parent___children___internal___description',
  parent___children___internal___fieldOwners = 'parent___children___internal___fieldOwners',
  parent___children___internal___ignoreType = 'parent___children___internal___ignoreType',
  parent___children___internal___mediaType = 'parent___children___internal___mediaType',
  parent___children___internal___owner = 'parent___children___internal___owner',
  parent___children___internal___type = 'parent___children___internal___type',
  parent___children___parent___children = 'parent___children___parent___children',
  parent___children___parent___id = 'parent___children___parent___id',
  parent___id = 'parent___id',
  parent___internal___content = 'parent___internal___content',
  parent___internal___contentDigest = 'parent___internal___contentDigest',
  parent___internal___description = 'parent___internal___description',
  parent___internal___fieldOwners = 'parent___internal___fieldOwners',
  parent___internal___ignoreType = 'parent___internal___ignoreType',
  parent___internal___mediaType = 'parent___internal___mediaType',
  parent___internal___owner = 'parent___internal___owner',
  parent___internal___type = 'parent___internal___type',
  parent___parent___children = 'parent___parent___children',
  parent___parent___children___children = 'parent___parent___children___children',
  parent___parent___children___id = 'parent___parent___children___id',
  parent___parent___id = 'parent___parent___id',
  parent___parent___internal___content = 'parent___parent___internal___content',
  parent___parent___internal___contentDigest = 'parent___parent___internal___contentDigest',
  parent___parent___internal___description = 'parent___parent___internal___description',
  parent___parent___internal___fieldOwners = 'parent___parent___internal___fieldOwners',
  parent___parent___internal___ignoreType = 'parent___parent___internal___ignoreType',
  parent___parent___internal___mediaType = 'parent___parent___internal___mediaType',
  parent___parent___internal___owner = 'parent___parent___internal___owner',
  parent___parent___internal___type = 'parent___parent___internal___type',
  parent___parent___parent___children = 'parent___parent___parent___children',
  parent___parent___parent___id = 'parent___parent___parent___id',
  pathPrefix = 'pathPrefix',
  polyfill = 'polyfill',
  port = 'port',
  siteMetadata___church___address = 'siteMetadata___church___address',
  siteMetadata___church___googleMapsEmbedSrc = 'siteMetadata___church___googleMapsEmbedSrc',
  siteMetadata___church___googleMapsLink = 'siteMetadata___church___googleMapsLink',
  siteMetadata___church___phone = 'siteMetadata___church___phone',
  siteMetadata___description = 'siteMetadata___description',
  siteMetadata___title = 'siteMetadata___title',
  trailingSlash = 'trailingSlash'
}

export type SiteFilterInput = {
  buildTime?: InputMaybe<DateQueryOperatorInput>;
  children?: InputMaybe<NodeFilterListInput>;
  host?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  jsxRuntime?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  pathPrefix?: InputMaybe<StringQueryOperatorInput>;
  polyfill?: InputMaybe<BooleanQueryOperatorInput>;
  port?: InputMaybe<IntQueryOperatorInput>;
  siteMetadata?: InputMaybe<SiteSiteMetadataFilterInput>;
  trailingSlash?: InputMaybe<StringQueryOperatorInput>;
};

export type SiteFunction = Node & {
  __typename?: 'SiteFunction';
  absoluteCompiledFilePath: Scalars['String'];
  children: Array<Node>;
  functionRoute: Scalars['String'];
  id: Scalars['ID'];
  internal: Internal;
  matchPath?: Maybe<Scalars['String']>;
  originalAbsoluteFilePath: Scalars['String'];
  originalRelativeFilePath: Scalars['String'];
  parent?: Maybe<Node>;
  pluginName: Scalars['String'];
  relativeCompiledFilePath: Scalars['String'];
};

export type SiteFunctionConnection = {
  __typename?: 'SiteFunctionConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<SiteFunctionEdge>;
  group: Array<SiteFunctionGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<SiteFunction>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type SiteFunctionConnectionDistinctArgs = {
  field: SiteFunctionFieldsEnum;
};


export type SiteFunctionConnectionGroupArgs = {
  field: SiteFunctionFieldsEnum;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
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

export type SiteFunctionEdge = {
  __typename?: 'SiteFunctionEdge';
  next?: Maybe<SiteFunction>;
  node: SiteFunction;
  previous?: Maybe<SiteFunction>;
};

export enum SiteFunctionFieldsEnum {
  absoluteCompiledFilePath = 'absoluteCompiledFilePath',
  children = 'children',
  children___children = 'children___children',
  children___children___children = 'children___children___children',
  children___children___children___children = 'children___children___children___children',
  children___children___children___id = 'children___children___children___id',
  children___children___id = 'children___children___id',
  children___children___internal___content = 'children___children___internal___content',
  children___children___internal___contentDigest = 'children___children___internal___contentDigest',
  children___children___internal___description = 'children___children___internal___description',
  children___children___internal___fieldOwners = 'children___children___internal___fieldOwners',
  children___children___internal___ignoreType = 'children___children___internal___ignoreType',
  children___children___internal___mediaType = 'children___children___internal___mediaType',
  children___children___internal___owner = 'children___children___internal___owner',
  children___children___internal___type = 'children___children___internal___type',
  children___children___parent___children = 'children___children___parent___children',
  children___children___parent___id = 'children___children___parent___id',
  children___id = 'children___id',
  children___internal___content = 'children___internal___content',
  children___internal___contentDigest = 'children___internal___contentDigest',
  children___internal___description = 'children___internal___description',
  children___internal___fieldOwners = 'children___internal___fieldOwners',
  children___internal___ignoreType = 'children___internal___ignoreType',
  children___internal___mediaType = 'children___internal___mediaType',
  children___internal___owner = 'children___internal___owner',
  children___internal___type = 'children___internal___type',
  children___parent___children = 'children___parent___children',
  children___parent___children___children = 'children___parent___children___children',
  children___parent___children___id = 'children___parent___children___id',
  children___parent___id = 'children___parent___id',
  children___parent___internal___content = 'children___parent___internal___content',
  children___parent___internal___contentDigest = 'children___parent___internal___contentDigest',
  children___parent___internal___description = 'children___parent___internal___description',
  children___parent___internal___fieldOwners = 'children___parent___internal___fieldOwners',
  children___parent___internal___ignoreType = 'children___parent___internal___ignoreType',
  children___parent___internal___mediaType = 'children___parent___internal___mediaType',
  children___parent___internal___owner = 'children___parent___internal___owner',
  children___parent___internal___type = 'children___parent___internal___type',
  children___parent___parent___children = 'children___parent___parent___children',
  children___parent___parent___id = 'children___parent___parent___id',
  functionRoute = 'functionRoute',
  id = 'id',
  internal___content = 'internal___content',
  internal___contentDigest = 'internal___contentDigest',
  internal___description = 'internal___description',
  internal___fieldOwners = 'internal___fieldOwners',
  internal___ignoreType = 'internal___ignoreType',
  internal___mediaType = 'internal___mediaType',
  internal___owner = 'internal___owner',
  internal___type = 'internal___type',
  matchPath = 'matchPath',
  originalAbsoluteFilePath = 'originalAbsoluteFilePath',
  originalRelativeFilePath = 'originalRelativeFilePath',
  parent___children = 'parent___children',
  parent___children___children = 'parent___children___children',
  parent___children___children___children = 'parent___children___children___children',
  parent___children___children___id = 'parent___children___children___id',
  parent___children___id = 'parent___children___id',
  parent___children___internal___content = 'parent___children___internal___content',
  parent___children___internal___contentDigest = 'parent___children___internal___contentDigest',
  parent___children___internal___description = 'parent___children___internal___description',
  parent___children___internal___fieldOwners = 'parent___children___internal___fieldOwners',
  parent___children___internal___ignoreType = 'parent___children___internal___ignoreType',
  parent___children___internal___mediaType = 'parent___children___internal___mediaType',
  parent___children___internal___owner = 'parent___children___internal___owner',
  parent___children___internal___type = 'parent___children___internal___type',
  parent___children___parent___children = 'parent___children___parent___children',
  parent___children___parent___id = 'parent___children___parent___id',
  parent___id = 'parent___id',
  parent___internal___content = 'parent___internal___content',
  parent___internal___contentDigest = 'parent___internal___contentDigest',
  parent___internal___description = 'parent___internal___description',
  parent___internal___fieldOwners = 'parent___internal___fieldOwners',
  parent___internal___ignoreType = 'parent___internal___ignoreType',
  parent___internal___mediaType = 'parent___internal___mediaType',
  parent___internal___owner = 'parent___internal___owner',
  parent___internal___type = 'parent___internal___type',
  parent___parent___children = 'parent___parent___children',
  parent___parent___children___children = 'parent___parent___children___children',
  parent___parent___children___id = 'parent___parent___children___id',
  parent___parent___id = 'parent___parent___id',
  parent___parent___internal___content = 'parent___parent___internal___content',
  parent___parent___internal___contentDigest = 'parent___parent___internal___contentDigest',
  parent___parent___internal___description = 'parent___parent___internal___description',
  parent___parent___internal___fieldOwners = 'parent___parent___internal___fieldOwners',
  parent___parent___internal___ignoreType = 'parent___parent___internal___ignoreType',
  parent___parent___internal___mediaType = 'parent___parent___internal___mediaType',
  parent___parent___internal___owner = 'parent___parent___internal___owner',
  parent___parent___internal___type = 'parent___parent___internal___type',
  parent___parent___parent___children = 'parent___parent___parent___children',
  parent___parent___parent___id = 'parent___parent___parent___id',
  pluginName = 'pluginName',
  relativeCompiledFilePath = 'relativeCompiledFilePath'
}

export type SiteFunctionFilterInput = {
  absoluteCompiledFilePath?: InputMaybe<StringQueryOperatorInput>;
  children?: InputMaybe<NodeFilterListInput>;
  functionRoute?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  matchPath?: InputMaybe<StringQueryOperatorInput>;
  originalAbsoluteFilePath?: InputMaybe<StringQueryOperatorInput>;
  originalRelativeFilePath?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  pluginName?: InputMaybe<StringQueryOperatorInput>;
  relativeCompiledFilePath?: InputMaybe<StringQueryOperatorInput>;
};

export type SiteFunctionGroupConnection = {
  __typename?: 'SiteFunctionGroupConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<SiteFunctionEdge>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
  group: Array<SiteFunctionGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<SiteFunction>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type SiteFunctionGroupConnectionDistinctArgs = {
  field: SiteFunctionFieldsEnum;
};


export type SiteFunctionGroupConnectionGroupArgs = {
  field: SiteFunctionFieldsEnum;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type SiteFunctionGroupConnectionMaxArgs = {
  field: SiteFunctionFieldsEnum;
};


export type SiteFunctionGroupConnectionMinArgs = {
  field: SiteFunctionFieldsEnum;
};


export type SiteFunctionGroupConnectionSumArgs = {
  field: SiteFunctionFieldsEnum;
};

export type SiteFunctionSortInput = {
  fields?: InputMaybe<Array<InputMaybe<SiteFunctionFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type SiteGroupConnection = {
  __typename?: 'SiteGroupConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<SiteEdge>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
  group: Array<SiteGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<Site>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type SiteGroupConnectionDistinctArgs = {
  field: SiteFieldsEnum;
};


export type SiteGroupConnectionGroupArgs = {
  field: SiteFieldsEnum;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type SiteGroupConnectionMaxArgs = {
  field: SiteFieldsEnum;
};


export type SiteGroupConnectionMinArgs = {
  field: SiteFieldsEnum;
};


export type SiteGroupConnectionSumArgs = {
  field: SiteFieldsEnum;
};

export type SitePage = Node & {
  __typename?: 'SitePage';
  children: Array<Node>;
  component: Scalars['String'];
  componentChunkName: Scalars['String'];
  id: Scalars['ID'];
  internal: Internal;
  internalComponentName: Scalars['String'];
  matchPath?: Maybe<Scalars['String']>;
  pageContext?: Maybe<Scalars['JSON']>;
  parent?: Maybe<Node>;
  path: Scalars['String'];
  pluginCreator?: Maybe<SitePlugin>;
};

export type SitePageConnection = {
  __typename?: 'SitePageConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<SitePageEdge>;
  group: Array<SitePageGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<SitePage>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type SitePageConnectionDistinctArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageConnectionGroupArgs = {
  field: SitePageFieldsEnum;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
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

export type SitePageEdge = {
  __typename?: 'SitePageEdge';
  next?: Maybe<SitePage>;
  node: SitePage;
  previous?: Maybe<SitePage>;
};

export enum SitePageFieldsEnum {
  children = 'children',
  children___children = 'children___children',
  children___children___children = 'children___children___children',
  children___children___children___children = 'children___children___children___children',
  children___children___children___id = 'children___children___children___id',
  children___children___id = 'children___children___id',
  children___children___internal___content = 'children___children___internal___content',
  children___children___internal___contentDigest = 'children___children___internal___contentDigest',
  children___children___internal___description = 'children___children___internal___description',
  children___children___internal___fieldOwners = 'children___children___internal___fieldOwners',
  children___children___internal___ignoreType = 'children___children___internal___ignoreType',
  children___children___internal___mediaType = 'children___children___internal___mediaType',
  children___children___internal___owner = 'children___children___internal___owner',
  children___children___internal___type = 'children___children___internal___type',
  children___children___parent___children = 'children___children___parent___children',
  children___children___parent___id = 'children___children___parent___id',
  children___id = 'children___id',
  children___internal___content = 'children___internal___content',
  children___internal___contentDigest = 'children___internal___contentDigest',
  children___internal___description = 'children___internal___description',
  children___internal___fieldOwners = 'children___internal___fieldOwners',
  children___internal___ignoreType = 'children___internal___ignoreType',
  children___internal___mediaType = 'children___internal___mediaType',
  children___internal___owner = 'children___internal___owner',
  children___internal___type = 'children___internal___type',
  children___parent___children = 'children___parent___children',
  children___parent___children___children = 'children___parent___children___children',
  children___parent___children___id = 'children___parent___children___id',
  children___parent___id = 'children___parent___id',
  children___parent___internal___content = 'children___parent___internal___content',
  children___parent___internal___contentDigest = 'children___parent___internal___contentDigest',
  children___parent___internal___description = 'children___parent___internal___description',
  children___parent___internal___fieldOwners = 'children___parent___internal___fieldOwners',
  children___parent___internal___ignoreType = 'children___parent___internal___ignoreType',
  children___parent___internal___mediaType = 'children___parent___internal___mediaType',
  children___parent___internal___owner = 'children___parent___internal___owner',
  children___parent___internal___type = 'children___parent___internal___type',
  children___parent___parent___children = 'children___parent___parent___children',
  children___parent___parent___id = 'children___parent___parent___id',
  component = 'component',
  componentChunkName = 'componentChunkName',
  id = 'id',
  internalComponentName = 'internalComponentName',
  internal___content = 'internal___content',
  internal___contentDigest = 'internal___contentDigest',
  internal___description = 'internal___description',
  internal___fieldOwners = 'internal___fieldOwners',
  internal___ignoreType = 'internal___ignoreType',
  internal___mediaType = 'internal___mediaType',
  internal___owner = 'internal___owner',
  internal___type = 'internal___type',
  matchPath = 'matchPath',
  pageContext = 'pageContext',
  parent___children = 'parent___children',
  parent___children___children = 'parent___children___children',
  parent___children___children___children = 'parent___children___children___children',
  parent___children___children___id = 'parent___children___children___id',
  parent___children___id = 'parent___children___id',
  parent___children___internal___content = 'parent___children___internal___content',
  parent___children___internal___contentDigest = 'parent___children___internal___contentDigest',
  parent___children___internal___description = 'parent___children___internal___description',
  parent___children___internal___fieldOwners = 'parent___children___internal___fieldOwners',
  parent___children___internal___ignoreType = 'parent___children___internal___ignoreType',
  parent___children___internal___mediaType = 'parent___children___internal___mediaType',
  parent___children___internal___owner = 'parent___children___internal___owner',
  parent___children___internal___type = 'parent___children___internal___type',
  parent___children___parent___children = 'parent___children___parent___children',
  parent___children___parent___id = 'parent___children___parent___id',
  parent___id = 'parent___id',
  parent___internal___content = 'parent___internal___content',
  parent___internal___contentDigest = 'parent___internal___contentDigest',
  parent___internal___description = 'parent___internal___description',
  parent___internal___fieldOwners = 'parent___internal___fieldOwners',
  parent___internal___ignoreType = 'parent___internal___ignoreType',
  parent___internal___mediaType = 'parent___internal___mediaType',
  parent___internal___owner = 'parent___internal___owner',
  parent___internal___type = 'parent___internal___type',
  parent___parent___children = 'parent___parent___children',
  parent___parent___children___children = 'parent___parent___children___children',
  parent___parent___children___id = 'parent___parent___children___id',
  parent___parent___id = 'parent___parent___id',
  parent___parent___internal___content = 'parent___parent___internal___content',
  parent___parent___internal___contentDigest = 'parent___parent___internal___contentDigest',
  parent___parent___internal___description = 'parent___parent___internal___description',
  parent___parent___internal___fieldOwners = 'parent___parent___internal___fieldOwners',
  parent___parent___internal___ignoreType = 'parent___parent___internal___ignoreType',
  parent___parent___internal___mediaType = 'parent___parent___internal___mediaType',
  parent___parent___internal___owner = 'parent___parent___internal___owner',
  parent___parent___internal___type = 'parent___parent___internal___type',
  parent___parent___parent___children = 'parent___parent___parent___children',
  parent___parent___parent___id = 'parent___parent___parent___id',
  path = 'path',
  pluginCreator___browserAPIs = 'pluginCreator___browserAPIs',
  pluginCreator___children = 'pluginCreator___children',
  pluginCreator___children___children = 'pluginCreator___children___children',
  pluginCreator___children___children___children = 'pluginCreator___children___children___children',
  pluginCreator___children___children___id = 'pluginCreator___children___children___id',
  pluginCreator___children___id = 'pluginCreator___children___id',
  pluginCreator___children___internal___content = 'pluginCreator___children___internal___content',
  pluginCreator___children___internal___contentDigest = 'pluginCreator___children___internal___contentDigest',
  pluginCreator___children___internal___description = 'pluginCreator___children___internal___description',
  pluginCreator___children___internal___fieldOwners = 'pluginCreator___children___internal___fieldOwners',
  pluginCreator___children___internal___ignoreType = 'pluginCreator___children___internal___ignoreType',
  pluginCreator___children___internal___mediaType = 'pluginCreator___children___internal___mediaType',
  pluginCreator___children___internal___owner = 'pluginCreator___children___internal___owner',
  pluginCreator___children___internal___type = 'pluginCreator___children___internal___type',
  pluginCreator___children___parent___children = 'pluginCreator___children___parent___children',
  pluginCreator___children___parent___id = 'pluginCreator___children___parent___id',
  pluginCreator___id = 'pluginCreator___id',
  pluginCreator___internal___content = 'pluginCreator___internal___content',
  pluginCreator___internal___contentDigest = 'pluginCreator___internal___contentDigest',
  pluginCreator___internal___description = 'pluginCreator___internal___description',
  pluginCreator___internal___fieldOwners = 'pluginCreator___internal___fieldOwners',
  pluginCreator___internal___ignoreType = 'pluginCreator___internal___ignoreType',
  pluginCreator___internal___mediaType = 'pluginCreator___internal___mediaType',
  pluginCreator___internal___owner = 'pluginCreator___internal___owner',
  pluginCreator___internal___type = 'pluginCreator___internal___type',
  pluginCreator___name = 'pluginCreator___name',
  pluginCreator___nodeAPIs = 'pluginCreator___nodeAPIs',
  pluginCreator___packageJson = 'pluginCreator___packageJson',
  pluginCreator___parent___children = 'pluginCreator___parent___children',
  pluginCreator___parent___children___children = 'pluginCreator___parent___children___children',
  pluginCreator___parent___children___id = 'pluginCreator___parent___children___id',
  pluginCreator___parent___id = 'pluginCreator___parent___id',
  pluginCreator___parent___internal___content = 'pluginCreator___parent___internal___content',
  pluginCreator___parent___internal___contentDigest = 'pluginCreator___parent___internal___contentDigest',
  pluginCreator___parent___internal___description = 'pluginCreator___parent___internal___description',
  pluginCreator___parent___internal___fieldOwners = 'pluginCreator___parent___internal___fieldOwners',
  pluginCreator___parent___internal___ignoreType = 'pluginCreator___parent___internal___ignoreType',
  pluginCreator___parent___internal___mediaType = 'pluginCreator___parent___internal___mediaType',
  pluginCreator___parent___internal___owner = 'pluginCreator___parent___internal___owner',
  pluginCreator___parent___internal___type = 'pluginCreator___parent___internal___type',
  pluginCreator___parent___parent___children = 'pluginCreator___parent___parent___children',
  pluginCreator___parent___parent___id = 'pluginCreator___parent___parent___id',
  pluginCreator___pluginFilepath = 'pluginCreator___pluginFilepath',
  pluginCreator___pluginOptions = 'pluginCreator___pluginOptions',
  pluginCreator___resolve = 'pluginCreator___resolve',
  pluginCreator___ssrAPIs = 'pluginCreator___ssrAPIs',
  pluginCreator___version = 'pluginCreator___version'
}

export type SitePageFilterInput = {
  children?: InputMaybe<NodeFilterListInput>;
  component?: InputMaybe<StringQueryOperatorInput>;
  componentChunkName?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  internalComponentName?: InputMaybe<StringQueryOperatorInput>;
  matchPath?: InputMaybe<StringQueryOperatorInput>;
  pageContext?: InputMaybe<JsonQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  path?: InputMaybe<StringQueryOperatorInput>;
  pluginCreator?: InputMaybe<SitePluginFilterInput>;
};

export type SitePageGroupConnection = {
  __typename?: 'SitePageGroupConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<SitePageEdge>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
  group: Array<SitePageGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<SitePage>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type SitePageGroupConnectionDistinctArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageGroupConnectionGroupArgs = {
  field: SitePageFieldsEnum;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type SitePageGroupConnectionMaxArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageGroupConnectionMinArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageGroupConnectionSumArgs = {
  field: SitePageFieldsEnum;
};

export type SitePageSortInput = {
  fields?: InputMaybe<Array<InputMaybe<SitePageFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type SitePlugin = Node & {
  __typename?: 'SitePlugin';
  browserAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  children: Array<Node>;
  id: Scalars['ID'];
  internal: Internal;
  name?: Maybe<Scalars['String']>;
  nodeAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  packageJson?: Maybe<Scalars['JSON']>;
  parent?: Maybe<Node>;
  pluginFilepath?: Maybe<Scalars['String']>;
  pluginOptions?: Maybe<Scalars['JSON']>;
  resolve?: Maybe<Scalars['String']>;
  ssrAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  version?: Maybe<Scalars['String']>;
};

export type SitePluginConnection = {
  __typename?: 'SitePluginConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<SitePluginEdge>;
  group: Array<SitePluginGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<SitePlugin>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type SitePluginConnectionDistinctArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginConnectionGroupArgs = {
  field: SitePluginFieldsEnum;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
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

export type SitePluginEdge = {
  __typename?: 'SitePluginEdge';
  next?: Maybe<SitePlugin>;
  node: SitePlugin;
  previous?: Maybe<SitePlugin>;
};

export enum SitePluginFieldsEnum {
  browserAPIs = 'browserAPIs',
  children = 'children',
  children___children = 'children___children',
  children___children___children = 'children___children___children',
  children___children___children___children = 'children___children___children___children',
  children___children___children___id = 'children___children___children___id',
  children___children___id = 'children___children___id',
  children___children___internal___content = 'children___children___internal___content',
  children___children___internal___contentDigest = 'children___children___internal___contentDigest',
  children___children___internal___description = 'children___children___internal___description',
  children___children___internal___fieldOwners = 'children___children___internal___fieldOwners',
  children___children___internal___ignoreType = 'children___children___internal___ignoreType',
  children___children___internal___mediaType = 'children___children___internal___mediaType',
  children___children___internal___owner = 'children___children___internal___owner',
  children___children___internal___type = 'children___children___internal___type',
  children___children___parent___children = 'children___children___parent___children',
  children___children___parent___id = 'children___children___parent___id',
  children___id = 'children___id',
  children___internal___content = 'children___internal___content',
  children___internal___contentDigest = 'children___internal___contentDigest',
  children___internal___description = 'children___internal___description',
  children___internal___fieldOwners = 'children___internal___fieldOwners',
  children___internal___ignoreType = 'children___internal___ignoreType',
  children___internal___mediaType = 'children___internal___mediaType',
  children___internal___owner = 'children___internal___owner',
  children___internal___type = 'children___internal___type',
  children___parent___children = 'children___parent___children',
  children___parent___children___children = 'children___parent___children___children',
  children___parent___children___id = 'children___parent___children___id',
  children___parent___id = 'children___parent___id',
  children___parent___internal___content = 'children___parent___internal___content',
  children___parent___internal___contentDigest = 'children___parent___internal___contentDigest',
  children___parent___internal___description = 'children___parent___internal___description',
  children___parent___internal___fieldOwners = 'children___parent___internal___fieldOwners',
  children___parent___internal___ignoreType = 'children___parent___internal___ignoreType',
  children___parent___internal___mediaType = 'children___parent___internal___mediaType',
  children___parent___internal___owner = 'children___parent___internal___owner',
  children___parent___internal___type = 'children___parent___internal___type',
  children___parent___parent___children = 'children___parent___parent___children',
  children___parent___parent___id = 'children___parent___parent___id',
  id = 'id',
  internal___content = 'internal___content',
  internal___contentDigest = 'internal___contentDigest',
  internal___description = 'internal___description',
  internal___fieldOwners = 'internal___fieldOwners',
  internal___ignoreType = 'internal___ignoreType',
  internal___mediaType = 'internal___mediaType',
  internal___owner = 'internal___owner',
  internal___type = 'internal___type',
  name = 'name',
  nodeAPIs = 'nodeAPIs',
  packageJson = 'packageJson',
  parent___children = 'parent___children',
  parent___children___children = 'parent___children___children',
  parent___children___children___children = 'parent___children___children___children',
  parent___children___children___id = 'parent___children___children___id',
  parent___children___id = 'parent___children___id',
  parent___children___internal___content = 'parent___children___internal___content',
  parent___children___internal___contentDigest = 'parent___children___internal___contentDigest',
  parent___children___internal___description = 'parent___children___internal___description',
  parent___children___internal___fieldOwners = 'parent___children___internal___fieldOwners',
  parent___children___internal___ignoreType = 'parent___children___internal___ignoreType',
  parent___children___internal___mediaType = 'parent___children___internal___mediaType',
  parent___children___internal___owner = 'parent___children___internal___owner',
  parent___children___internal___type = 'parent___children___internal___type',
  parent___children___parent___children = 'parent___children___parent___children',
  parent___children___parent___id = 'parent___children___parent___id',
  parent___id = 'parent___id',
  parent___internal___content = 'parent___internal___content',
  parent___internal___contentDigest = 'parent___internal___contentDigest',
  parent___internal___description = 'parent___internal___description',
  parent___internal___fieldOwners = 'parent___internal___fieldOwners',
  parent___internal___ignoreType = 'parent___internal___ignoreType',
  parent___internal___mediaType = 'parent___internal___mediaType',
  parent___internal___owner = 'parent___internal___owner',
  parent___internal___type = 'parent___internal___type',
  parent___parent___children = 'parent___parent___children',
  parent___parent___children___children = 'parent___parent___children___children',
  parent___parent___children___id = 'parent___parent___children___id',
  parent___parent___id = 'parent___parent___id',
  parent___parent___internal___content = 'parent___parent___internal___content',
  parent___parent___internal___contentDigest = 'parent___parent___internal___contentDigest',
  parent___parent___internal___description = 'parent___parent___internal___description',
  parent___parent___internal___fieldOwners = 'parent___parent___internal___fieldOwners',
  parent___parent___internal___ignoreType = 'parent___parent___internal___ignoreType',
  parent___parent___internal___mediaType = 'parent___parent___internal___mediaType',
  parent___parent___internal___owner = 'parent___parent___internal___owner',
  parent___parent___internal___type = 'parent___parent___internal___type',
  parent___parent___parent___children = 'parent___parent___parent___children',
  parent___parent___parent___id = 'parent___parent___parent___id',
  pluginFilepath = 'pluginFilepath',
  pluginOptions = 'pluginOptions',
  resolve = 'resolve',
  ssrAPIs = 'ssrAPIs',
  version = 'version'
}

export type SitePluginFilterInput = {
  browserAPIs?: InputMaybe<StringQueryOperatorInput>;
  children?: InputMaybe<NodeFilterListInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  nodeAPIs?: InputMaybe<StringQueryOperatorInput>;
  packageJson?: InputMaybe<JsonQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  pluginFilepath?: InputMaybe<StringQueryOperatorInput>;
  pluginOptions?: InputMaybe<JsonQueryOperatorInput>;
  resolve?: InputMaybe<StringQueryOperatorInput>;
  ssrAPIs?: InputMaybe<StringQueryOperatorInput>;
  version?: InputMaybe<StringQueryOperatorInput>;
};

export type SitePluginGroupConnection = {
  __typename?: 'SitePluginGroupConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<SitePluginEdge>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
  group: Array<SitePluginGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<SitePlugin>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type SitePluginGroupConnectionDistinctArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginGroupConnectionGroupArgs = {
  field: SitePluginFieldsEnum;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type SitePluginGroupConnectionMaxArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginGroupConnectionMinArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginGroupConnectionSumArgs = {
  field: SitePluginFieldsEnum;
};

export type SitePluginSortInput = {
  fields?: InputMaybe<Array<InputMaybe<SitePluginFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type SiteSiteMetadata = {
  __typename?: 'SiteSiteMetadata';
  church?: Maybe<SiteSiteMetadataChurch>;
  description?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type SiteSiteMetadataChurch = {
  __typename?: 'SiteSiteMetadataChurch';
  address?: Maybe<Array<Maybe<Scalars['String']>>>;
  googleMapsEmbedSrc?: Maybe<Scalars['String']>;
  googleMapsLink?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
};

export type SiteSiteMetadataChurchFilterInput = {
  address?: InputMaybe<StringQueryOperatorInput>;
  googleMapsEmbedSrc?: InputMaybe<StringQueryOperatorInput>;
  googleMapsLink?: InputMaybe<StringQueryOperatorInput>;
  phone?: InputMaybe<StringQueryOperatorInput>;
};

export type SiteSiteMetadataFilterInput = {
  church?: InputMaybe<SiteSiteMetadataChurchFilterInput>;
  description?: InputMaybe<StringQueryOperatorInput>;
  title?: InputMaybe<StringQueryOperatorInput>;
};

export type SiteSortInput = {
  fields?: InputMaybe<Array<InputMaybe<SiteFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export enum SortOrderEnum {
  ASC = 'ASC',
  DESC = 'DESC'
}

export type StringQueryOperatorInput = {
  eq?: InputMaybe<Scalars['String']>;
  glob?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['String']>;
};

export type PostCardDetailsFragment = { __typename?: 'SanityPost', _id?: string | null, date?: any | null, title?: string | null, _rawSummary?: any | null, _rawThumbnailPoster?: any | null, slug?: { __typename?: 'SanitySlug', current?: string | null } | null, thumbnail?: { __typename?: 'SanityImage', asset?: { __typename?: 'SanityImageAsset', gatsbyImageData: any } | null } | null };

export type NewsletterQueryVariables = Exact<{ [key: string]: never; }>;


export type NewsletterQuery = { __typename?: 'Query', allSanityNewsletter: { __typename?: 'SanityNewsletterConnection', nodes: Array<{ __typename?: 'SanityNewsletter', _id?: string | null, date?: any | null, link?: string | null }> } };

export type SermonUploadQueryVariables = Exact<{ [key: string]: never; }>;


export type SermonUploadQuery = { __typename?: 'Query', allSanitySermonUpload: { __typename?: 'SanitySermonUploadConnection', nodes: Array<{ __typename?: 'SanitySermonUpload', _id?: string | null, date?: any | null, extraInfo?: string | null, audioFile?: { __typename?: 'SanityFile', asset?: { __typename?: 'SanityFileAsset', url?: string | null } | null } | null }> } };

export type MinistryPageQueryVariables = Exact<{
  _id: Scalars['String'];
}>;


export type MinistryPageQuery = { __typename?: 'Query', sanityMinistryPage?: { __typename?: 'SanityMinistryPage', name?: string | null, _rawContent?: any | null, subLogoWidth?: number | null, _rawSections?: any | null, subLogo?: { __typename?: 'SanityImage', asset?: { __typename?: 'SanityImageAsset', gatsbyImageData: any } | null } | null, url?: { __typename?: 'SanitySlug', current?: string | null } | null, sections?: Array<{ __typename?: 'SanityPageSection', _key?: string | null, name?: string | null, urlSuffix?: { __typename?: 'SanitySlug', current?: string | null } | null } | null> | null } | null, allSanityPost: { __typename?: 'SanityPostConnection', nodes: Array<{ __typename?: 'SanityPost', _id?: string | null, date?: any | null, title?: string | null, _rawSummary?: any | null, _rawThumbnailPoster?: any | null, slug?: { __typename?: 'SanitySlug', current?: string | null } | null, thumbnail?: { __typename?: 'SanityImage', asset?: { __typename?: 'SanityImageAsset', gatsbyImageData: any } | null } | null }> } };

export type PageQueryVariables = Exact<{
  _id: Scalars['String'];
}>;


export type PageQuery = { __typename?: 'Query', sanityPage?: { __typename?: 'SanityPage', name?: string | null, _rawContent?: any | null } | null };

export type PostQueryVariables = Exact<{
  _id: Scalars['String'];
}>;


export type PostQuery = { __typename?: 'Query', sanityPost?: { __typename?: 'SanityPost', title?: string | null, date?: any | null, _rawBody?: any | null, _rawSummary?: any | null } | null };

export type AllPostsQueryVariables = Exact<{
  perPage: Scalars['Int'];
  offset: Scalars['Int'];
}>;


export type AllPostsQuery = { __typename?: 'Query', allSanityPost: { __typename?: 'SanityPostConnection', nodes: Array<{ __typename?: 'SanityPost', _id?: string | null, date?: any | null, title?: string | null, _rawSummary?: any | null, _rawThumbnailPoster?: any | null, slug?: { __typename?: 'SanitySlug', current?: string | null } | null, thumbnail?: { __typename?: 'SanityImage', asset?: { __typename?: 'SanityImageAsset', gatsbyImageData: any } | null } | null }> } };

export type ChurchInfoQueryVariables = Exact<{ [key: string]: never; }>;


export type ChurchInfoQuery = { __typename?: 'Query', site?: { __typename?: 'Site', siteMetadata?: { __typename?: 'SiteSiteMetadata', church?: { __typename?: 'SiteSiteMetadataChurch', phone?: string | null, address?: Array<string | null> | null } | null } | null } | null };

export type GeneralAlertQueryVariables = Exact<{ [key: string]: never; }>;


export type GeneralAlertQuery = { __typename?: 'Query', sanityGeneralAlert?: { __typename?: 'SanityGeneralAlert', _rawContent?: any | null, active?: boolean | null } | null };

export type HeaderQueryVariables = Exact<{ [key: string]: never; }>;


export type HeaderQuery = { __typename?: 'Query', sanityNavigation?: { __typename?: 'SanityNavigation', items?: Array<{ __typename: 'SanityNestedMenu', text?: string | null, items?: Array<{ __typename: 'SanityPageLink', text?: string | null, page?: { __typename?: 'SanityMinistryPage', url?: { __typename?: 'SanitySlug', current?: string | null } | null } | { __typename?: 'SanityPage', url?: { __typename?: 'SanitySlug', current?: string | null } | null } | null } | { __typename: 'SanityPlainLink', link?: string | null, text?: string | null, sameWindow?: boolean | null } | null> | null } | { __typename: 'SanityPageLink', text?: string | null, page?: { __typename?: 'SanityMinistryPage', url?: { __typename?: 'SanitySlug', current?: string | null } | null } | { __typename?: 'SanityPage', url?: { __typename?: 'SanitySlug', current?: string | null } | null } | null } | { __typename: 'SanityPlainLink', link?: string | null, text?: string | null, sameWindow?: boolean | null } | null> | null } | null };

type AnyNavLink_SanityPageLink_Fragment = { __typename: 'SanityPageLink', text?: string | null, page?: { __typename?: 'SanityMinistryPage', url?: { __typename?: 'SanitySlug', current?: string | null } | null } | { __typename?: 'SanityPage', url?: { __typename?: 'SanitySlug', current?: string | null } | null } | null };

type AnyNavLink_SanityPlainLink_Fragment = { __typename: 'SanityPlainLink', link?: string | null, text?: string | null, sameWindow?: boolean | null };

export type AnyNavLinkFragment = AnyNavLink_SanityPageLink_Fragment | AnyNavLink_SanityPlainLink_Fragment;

export type HeroSectionQueryVariables = Exact<{ [key: string]: never; }>;


export type HeroSectionQuery = { __typename?: 'Query', sanityHeroSection?: { __typename?: 'SanityHeroSection', title?: string | null, subtitle?: string | null } | null, sanityShortcuts?: { __typename?: 'SanityShortcuts', _rawContent?: any | null } | null };

export type ChurchLocationQueryVariables = Exact<{ [key: string]: never; }>;


export type ChurchLocationQuery = { __typename?: 'Query', site?: { __typename?: 'Site', siteMetadata?: { __typename?: 'SiteSiteMetadata', church?: { __typename?: 'SiteSiteMetadataChurch', address?: Array<string | null> | null, googleMapsLink?: string | null } | null } | null } | null };

export type RecentPostsQueryVariables = Exact<{ [key: string]: never; }>;


export type RecentPostsQuery = { __typename?: 'Query', allSanityPost: { __typename?: 'SanityPostConnection', nodes: Array<{ __typename?: 'SanityPost', _id?: string | null, date?: any | null, title?: string | null, _rawSummary?: any | null, _rawThumbnailPoster?: any | null, slug?: { __typename?: 'SanitySlug', current?: string | null } | null, thumbnail?: { __typename?: 'SanityImage', asset?: { __typename?: 'SanityImageAsset', gatsbyImageData: any } | null } | null }> } };

export type WeeklyScheduleQueryVariables = Exact<{ [key: string]: never; }>;


export type WeeklyScheduleQuery = { __typename?: 'Query', allSanityScheduleAlert: { __typename?: 'SanityScheduleAlertConnection', nodes: Array<{ __typename?: 'SanityScheduleAlert', active?: boolean | null, id: string, _rawMessage?: any | null }> }, allSanityWeeklySchedule: { __typename?: 'SanityWeeklyScheduleConnection', nodes: Array<{ __typename?: 'SanityWeeklySchedule', _id?: string | null, days?: Array<{ __typename?: 'SanityWeeklyScheduleDay', label?: string | null, events?: Array<{ __typename?: 'SanityWeeklyScheduleEvent', time?: string | null, description?: string | null } | null> | null } | null> | null }> } };
