import * as yup from 'yup'
import { ref } from 'vue'
import { useMutation } from '@tanstack/vue-query'
import type { SubmissionHandler, GenericObject } from 'vee-validate'

import router from '@/router'
import { ROUTES, VALIDATION_MESSAGES } from '@/utils/constants'
import { loginApi } from '@/services/auth.service'
import type { LoginFormType } from '@/types/auth.type'

export const useLoginFormController = () => {
  const schema = yup.object({
    email: yup
      .string()
      .email(VALIDATION_MESSAGES.email.invalid)
      .required(VALIDATION_MESSAGES.email.required)
      .trim(),
    password: yup
      .string()
      .min(6, VALIDATION_MESSAGES.password.minLength)
      .required(VALIDATION_MESSAGES.password.required)
      .trim(),
  })

  const generalError = ref('')

  const { mutate: handleLogin, isPending } = useMutation({
    mutationFn: async (data: LoginFormType) => {
      const response = await loginApi(data.email, data.password)
      if (!response.token) {
        throw new Error(VALIDATION_MESSAGES.general.invalidCredentials)
      }
      return response
    },
    onSuccess: (response) => {
      localStorage.setItem('auth-token', response.token)
      router.push({ name: ROUTES.home.name })
    },
    onError: (error) => {
      generalError.value =
        error instanceof Error ? error.message : VALIDATION_MESSAGES.general.invalidCredentials
    },
  })

  const onSubmit: SubmissionHandler<GenericObject, GenericObject, unknown> = (values) => {
    handleLogin(values as LoginFormType)
  }

  return {
    schema,
    generalError,
    onSubmit,
    isPending,
  }
}
