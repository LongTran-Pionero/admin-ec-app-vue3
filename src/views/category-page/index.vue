<template>
  <div>
    <v-data-table
      :headers="headers"
      :items="categories"
      item-value="id"
      class="elevation-1"
      :items-length="30"
      :page.sync="page"
      @update:options="loadItems"
      :loading="loading"
    >
      <template v-slot:top>
        <v-toolbar flat>
          <v-toolbar-title>Category List</v-toolbar-title>
        </v-toolbar>
      </template>
      <v-pagination :length="4"></v-pagination>
    </v-data-table>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue'
import { getCategoriesApi } from '@/services/category.service'

export default defineComponent({
  name: 'CategoryPage',
  setup() {
    const categories = ref([])
    const itemsPerPage = ref(5)
    const page = ref(1)

    const headers = [
      { title: 'Name', value: 'name' },
      { title: 'Image', value: 'image' },
      { title: 'Actions', value: 'actions' },
    ]

    onMounted(async () => {
      try {
        const response = await getCategoriesApi()
        categories.value = response.map((category) => ({
          ...category,
          image: category.image || 'No image',
          actions: category.actions || 'No action',
        }))
      } catch (error) {
        console.error(error)
      }
    })

    return {
      categories,
      headers,
      itemsPerPage,
      page,
    }
  },
})
</script>

<style scoped></style>
