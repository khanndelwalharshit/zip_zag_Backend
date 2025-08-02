import prisma from '../models/db';
import { CreateCustomerData, UpdateCustomerData } from '../types/customer.types';

export const getAllCustomersService = async () => {
  const customers = await prisma.customer.findMany({
    include: {
      catalogs: true,
      inquiries: true,
    },
  });

  return customers.map(customer => ({
    ...customer,
    totalCatalogs: customer.catalogs.length,
    totalInquiries: customer.inquiries.length,
  }));
};

export const getCustomerByIdService = async (id: number) => {
  return await prisma.customer.findUnique({
    where: { id },
  });
};

export const createCustomerService = async (data: CreateCustomerData) => {
  return await prisma.customer.create({
    data,
  });
};

export const updateCustomerService = async (id: number, data: UpdateCustomerData) => {
  return await prisma.customer.update({
    where: { id },
    data,
  });
};

export const deleteCustomerService = async (id: number) => {
  return await prisma.customer.delete({
    where: { id },
  });
};
