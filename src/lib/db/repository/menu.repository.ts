import type { MenuDB } from '../../../types/menu'
import menuDB from '../menuData.json'

const { categories, updatedAt } = menuDB as unknown as MenuDB

export const lastMenuUpdated = () => updatedAt

export const menuList = () => categories
