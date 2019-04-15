export interface NavItemWithLink {
  text: string
  link: string
}

export interface NavItemWithSubitems {
  text: string
  items: Array<NavItemWithLink>
}

export type NavItem = NavItemWithLink | NavItemWithSubitems

export function hasSubItems(navItem: NavItem): navItem is NavItemWithSubitems {
  const item: any = navItem
  return item.items && Array.isArray(item.items)
}

export function hasLink(navItem: NavItem): navItem is NavItemWithLink {
  const item: any = navItem
  return Boolean(item.link)
}
