export type MenuSubItem = {
  name: string
  description?: string
}

export type MenuItem = {
  id?: number
  name: string
  description?: string
  subItems: MenuSubItem[]
  adicional?: string
}

export type MenuSubCategory = {
  id: number
  name: string
  items: MenuItem[]
}

export type MenuCategoryNoSub = {
  id: number
  name: string
  hasSubCategory: false
  items: MenuItem[]
}

export type MenuCategoryWithSub = {
  id: number
  name: string
  hasSubCategory: true
  subCategories: MenuSubCategory[]
}

export type MenuCategory = MenuCategoryNoSub | MenuCategoryWithSub

export type MenuDB = {
  categories: MenuCategory[]
}
