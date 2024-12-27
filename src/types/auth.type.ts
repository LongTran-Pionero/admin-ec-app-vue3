export type LoginResponse = {
  token: string
}

export type UserType = {
  email: string
  name: string
}

export type LoginFormType = {
  email: string
  password: string
}

export type AuthStateType = {
  user?: UserType
}
