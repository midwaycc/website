import { NavItem, hasSubItems, hasLink } from './Navigation/types'
import {
  SanityNavigation,
  SanityPlainLink,
  SanityPageLink,
  SanityNestedMenu
} from '~/types/graphqlTypes'

export type SanityItems = SanityNavigation['items']

export function validateNavigationItems(navigationItems: NavItem[]) {
  return navigationItems.every(navItem => {
    if (!navItem.text) return false
    if (hasSubItems(navItem) && (navItem as any).link) return false
    if (hasLink(navItem) && (navItem as any).items) return false
    return true
  })
}

export function navigationItemsFromSanityItems(items: SanityItems): NavItem[] {
  if (!items) return []

  return items
    .map(item => {
      if (!item) return undefined
      if (!item.__typename) return undefined
      switch (item.__typename) {
        case 'SanityPlainLink':
          return navigationItemFromSanityPlainLink(item)
        case 'SanityPageLink':
          return navigationItemFromSanityPageLink(item)
        case 'SanityNestedMenu':
          return navigationItemsFromSanityNestedMenu(item)
      }
    })
    .filter(Boolean) as NavItem[]
}

function navigationItemFromSanityPlainLink(item: SanityPlainLink) {
  return { text: item.text, link: item.link, sameWindow: item.sameWindow }
}

function navigationItemFromSanityPageLink(item: SanityPageLink) {
  if (!item.page || !item.page.url || !item.page.url.current) return undefined
  return { text: item.text, link: item.page.url.current }
}

function navigationItemsFromSanityNestedMenu(menu: SanityNestedMenu) {
  return {
    text: menu.text,
    items: navigationItemsFromSanityItems(menu.items)
  }
}
