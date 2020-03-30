import S from '@sanity/desk-tool/structure-builder'

const singletons = [
  {
    title: 'Navigation',
    schema: 'navigation',
    id: '39e3e2cd-f904-4c55-aa97-df25ee541932'
  },
  {
    title: 'Hero Section',
    schema: 'heroSection',
    id: 'ec25ee54-245b-40e3-9876-cffd186f42ff'
  }
]

const singletonItem = singleton =>
  S.listItem()
    .title(singleton.title)
    .child(
      S.editor()
        .schemaType(singleton.schema)
        .documentId(singleton.id)
    )

const schemasToFilterOut = singletons.map(singleton => singleton.schema)

export default () =>
  S.list()
    .title('Content')
    .items([
      ...singletons.map(singletonItem),
      ...S.documentTypeListItems().filter(
        item => !schemasToFilterOut.includes(item.spec.schemaType.name)
      )
    ])
