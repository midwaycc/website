declare module '@sanity/desk-tool/structure-builder'
declare module 'part:@sanity/base/schema-creator'
declare module 'all:part:@sanity/base/schema-type'
declare module 'part:@sanity/components/buttons/default'
declare module '*.css'
declare module '*.svg'

declare module '@sanity/validation' {
  declare class Rule {
    required(): Rule
    max(arg: number): Rule
    custom(arg: (arg: any) => boolean | string): Rule
  }
}
