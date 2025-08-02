import { Customer } from './customer.types';
import { Catalog } from './catalog.types';

export interface Inquiry {
  id: number;
  message: string;
  customerId: number;
  customer?: Customer;
  catalogId?: number;
  catalog?: Catalog;
  productName?: string;
  priority?: string;
  status: string;
  createdAt: string;
  updatedAt: string;
}

export interface CreateInquiryData {
  message: string;
  customerId: number;
  catalogId?: number;
  productName?: string;
  priority?: string;
}

export interface UpdateInquiryData {
  message?: string;
  status?: string;
  catalogId?: number;
  productName?: string;
  priority?: string;
}
