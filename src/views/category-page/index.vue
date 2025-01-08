<template>
  <div class="category-page">
    <h1>Category</h1>
    <v-table>
      <thead>
        <tr>
          <th class="text-left">Name</th>
          <th class="text-left">Image</th>
          <th class="text-left">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in categoriesPaginated" :key="item.id">
          <td>{{ item.name }}</td>
          <td><span>No Image</span></td>
          <td><ActionsButton :itemId="item.id" /></td>
        </tr>
      </tbody>
    </v-table>

    <v-pagination
      :records="categories"
      :per-page="10"
      v-model="page"
      :length="totalPages"
      :current-page="page"
      @update:currentPage="changePage"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, computed } from 'vue'
import { fetchCategories, calculateTotalPages } from './controller'
import type { CategoryType } from '@/types/category.type'
import ActionsButton from './component/actions-button/index.vue'

export default defineComponent({
  name: 'CategoryPage',
  components: {
    ActionsButton,
  },
  setup() {
    const categories = ref<CategoryType[]>([])
    const page = ref(1)
    const totalPages = ref(1)
    const perPage = 10

    const fetchData = async () => {
      const fetchedCategories = await fetchCategories()
      categories.value = fetchedCategories
      totalPages.value = calculateTotalPages(categories.value, perPage)
    }

    const changePage = (newPage: number) => {
      page.value = newPage
    }

    onMounted(() => {
      fetchData()
    })

    const categoriesPaginated = computed(() => {
      const start = (page.value - 1) * perPage
      const end = start + perPage
      return categories.value.slice(start, end)
    })

    return {
      categories,
      categoriesPaginated,
      page,
      totalPages,
      changePage,
    }
  },
})
</script>

<style scoped>
.category-page {
  padding: 16px;
}

h1 {
  margin-bottom: 16px;
}
</style>
