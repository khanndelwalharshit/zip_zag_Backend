import { PaginationParams } from './index.d';

export interface Customer {
  id: number;
  name: string;
  email: string;
  phone?: string;
  region?: string;
  status: 'active' | 'inactive';
  lastLogin?: string;
  joinedDate: string;
  createdAt: string;
  updatedAt: string;
}

export interface CreateCustomerData {
  name: string;
  email: string;
  phone?: string;
  region?: string;
  status?: 'active' | 'inactive';
}

export interface UpdateCustomerData {
  name?: string;
  email?: string;
  phone?: string;
  region?: string;
  status?: 'active' | 'inactive';
  lastLogin?: string;
}

export interface CustomerFilters extends PaginationParams {
  status?: 'active' | 'inactive';
  region?: string;
}
