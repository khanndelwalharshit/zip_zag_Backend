import { Product } from './product.types';
import { Customer } from './customer.types';

export interface Catalog {
  id: number;
  name: string;
  customerId: number;
  customer?: Customer;
  products?: Product[];
  inquiries?: any[]; // Assuming Inquiry type will be defined later
  hasPassword?: boolean;
  password?: string;
  status?: string;
  views?: number;
  createdAt: string;
  updatedAt: string;
}

export interface CreateCatalogData {
  name: string;
  customerId: number;
  hasPassword?: boolean;
  password?: string;
  status?: string;
}

export interface UpdateCatalogData {
  name?: string;
  customerId?: number;
  hasPassword?: boolean;
  password?: string;
  status?: string;
  productIds?: number[];
}
