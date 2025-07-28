export interface CreateProductData {
    name: string
    description?: string
    price: number
    categoryId: number
  }
  
  export interface UpdateProductData {
    name?: string
    description?: string
    price?: number
    categoryId?: number
  }
  
  export interface ProductFilters extends PaginationParams {
    categoryId?: number
    minPrice?: number
    maxPrice?: number
  }