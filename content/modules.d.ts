declare module '@sanity/desk-tool/structure-builder'
declare module 'part:@sanity/base/schema-creator'
declare module 'part:@sanity/form-builder'
declare module 'all:part:@sanity/base/schema-type'
declare module 'part:@sanity/components/buttons/default'
declare module 'part:@sanity/base/document-actions'
declare module 'sanity-plugin-gatsby-cloud-preview'
declare module '*.css'
declare module '*.svg'

declare module '@sanity/validation' {
  declare class Rule {
    required(): Rule
    max(arg: number): Rule
    min(arg: number): Rule
    custom(
      arg: (
        arg: any,
        context: any
      ) => boolean | string | Promise<boolean | string>
    ): Rule
  }
}
