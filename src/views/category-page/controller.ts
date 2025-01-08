import { getCategoriesApi } from '@/services/category.service'
import type { CategoryType } from '@/types/category.type'

export const fetchCategories = async (): Promise<CategoryType[]> => {
  try {
    const response = await getCategoriesApi()
    return response
  } catch (error) {
    console.error('Error fetching categories:', error)
    return []
  }
}

export const calculateTotalPages = (categories: CategoryType[], perPage: number): number => {
  return Math.ceil(categories.length / perPage)
}
