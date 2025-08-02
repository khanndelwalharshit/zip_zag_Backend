export interface CreateProductData {
    name: string
    shortDescription?: string
    description?: string
    basePrice: number
    categoryId: number
  }
  
  export interface UpdateProductData {
    name?: string
    shortDescription?: string
    description?: string
    basePrice?: number
    offerPercentage?: number
    active?: boolean
    categoryId?: number
  }
  
  export interface ProductFilters extends PaginationParams {
    categoryId?: number
    minPrice?: number
    maxPrice?: number
  }