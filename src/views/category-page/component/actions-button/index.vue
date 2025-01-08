<template>
  <div class="relative">
    <v-menu>
      <template v-slot:activator="{ props }">
        <v-btn color="primary" v-bind="props"> Actions </v-btn>
      </template>
      <v-list>
        <v-list-item
          v-for="(item, index) in items"
          :key="index"
          @click="handleActionSelect(item.action)"
        >
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </div>
</template>

<script lang="ts" setup>
import { ref, defineProps } from 'vue'
import { handleCategoryAction } from './controllers'

const props = defineProps<{
  itemId: number
}>()

const items = ref([
  { title: 'Edit', action: 'Edit' },
  { title: 'Delete', action: 'Delete' },
])

const handleActionSelect = async (action: string) => {
  await handleCategoryAction(props.itemId, action)
}
</script>

<style scoped></style>
