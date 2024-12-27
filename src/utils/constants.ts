export const ROUTES = {
  login: {
    name: 'login',
    path: 'login',
  },
  forgotPassword: {
    name: 'forgot-password',
    path: 'forgot-password',
  },
  home: {
    name: 'home',
    path: '',
  },
  settings: {
    name: 'settings',
    path: 'settings',
  },
  abouts: {
    name: 'abouts',
    path: 'abouts',
  },
} as const

export const VALIDATION_MESSAGES = {
  email: {
    invalid: 'Invalid email format',
    required: 'Email is required',
  },
  password: {
    minLength: 'Password must be at least 6 characters',
    required: 'Password is required',
  },
  general: {
    invalidCredentials: 'Invalid username or password',
  },
}
