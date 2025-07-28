// Global type definitions
export interface ApiResponse<T = any> {
    success: boolean
    data?: T
    message?: string
    error?: string
  }
  
  export interface PaginationParams {
    page?: number
    limit?: number
    search?: string
  }