export interface Category {
  id: number;
  name: string;
  description?: string;
  active?: boolean;
  status?: string;
  parentId?: number | null;
  createdAt: string;
  updatedAt: string;
  // These are added by the service for frontend display
  level?: number;
  subcategories?: number;
  products?: number;
}

export interface CreateCategoryData {
  name: string;
  description?: string;
  active?: boolean;
  parentId?: number | null;
}

export interface UpdateCategoryData {
  name?: string;
  description?: string;
  active?: boolean;
  status?: string;
  parentId?: number | null;
}
