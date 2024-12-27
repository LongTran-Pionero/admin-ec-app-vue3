<template>
  <Form v-slot="{ errors }" :validation-schema="schema" @submit="onSubmit">
    <Field name="email">
      <template #default="{ field }">
        <v-text-field v-bind="field" :error-messages="errors.email" label="Email" type="email" />
      </template>
    </Field>

    <Field name="password">
      <template #default="{ field }">
        <v-text-field
          v-bind="field"
          :error-messages="errors.password"
          label="Password"
          type="password"
        />
      </template>
    </Field>

    <v-btn
      :loading="isPending"
      type="submit"
      class="w-full rounded-md hover:opacity-80 text-white custom-btn mt-5"
    >
      Login
    </v-btn>
    <div v-if="generalError" class="text-center text-red-500 mt-4">
      {{ generalError }}
    </div>

    <div class="text-center mt-4">
      <RouterLink
        :to="{ name: ROUTES.forgotPassword.name }"
        class="text-sm text-blue-500 hover:underline"
      >
        Click here if you forgot your password!
      </RouterLink>
    </div>
  </Form>
</template>

<script lang="ts" setup>
import { Form, Field } from 'vee-validate'

import { ROUTES } from '@/utils/constants'
import { useLoginFormController } from './controller'

const { schema, generalError, onSubmit, isPending } = useLoginFormController()
</script>

<style scoped>
.v-btn--variant-elevated,
.v-btn--variant-flat {
  background-color: #4caf50;
  color: white;
}

::v-deep(.v-text-field .v-input__details) {
  padding-inline: 3px;
  padding-top: 0px;
  align-items: center;
}
</style>
