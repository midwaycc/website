import S from '@sanity/desk-tool/structure-builder'

const singletons = [
  {
    title: 'Navigation',
    schema: 'navigation',
    id: '39e3e2cd-f904-4c55-aa97-df25ee541932'
  },
  {
    title: 'General Alert',
    schema: 'generalAlert',
    id: '13f98916-0879-4734-9db9-af2e9b253597'
  },
  {
    title: 'Hero Section',
    schema: 'heroSection',
    id: 'ec25ee54-245b-40e3-9876-cffd186f42ff'
  },
  {
    title: 'Schedule Alert',
    schema: 'scheduleAlert',
    id: 'd9104f8d-bbd8-4f63-9947-7cfb65f19808'
  }
]

const singletonItem = (singleton: typeof singletons[number]) =>
  S.listItem()
    .title(singleton.title)
    .child(S.editor().schemaType(singleton.schema).documentId(singleton.id))

const schemasToFilterOut = singletons.map(singleton => singleton.schema)

export default () =>
  S.list()
    .title('Content')
    .items([
      ...singletons.map(singletonItem),
      ...S.documentTypeListItems().filter(
        (item: any) => !schemasToFilterOut.includes(item.getId())
      )
    ])
