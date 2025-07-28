export interface CreateUserData {
    email: string
    name: string
    role?: string
  }
  
  export interface UpdateUserData {
    email?: string
    name?: string
    role?: string
  }
  
  export interface UserFilters extends PaginationParams {
    role?: string
  }