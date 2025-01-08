import { deleteCategoryApi } from '@/services/category.service'

export const handleCategoryAction = async (itemId: number, action: string) => {
  if (action === 'Edit') {
    alert(`Edit item with ID: ${itemId}`)
  } else if (action === 'Delete') {
    // Xử lý xóa
    await deleteCategoryApi(itemId)
    alert(`Delete item with ID: ${itemId}`)
  }
}
