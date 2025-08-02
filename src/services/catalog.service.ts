import prisma from '../models/db'

export const getAllCatalogsService = async () => {
  return await prisma.catalog.findMany({
    include: {
      customer: true,
      products: true,
      inquiries: true
    }
  })
}

export const getCatalogByIdService = async (id: number) => {
  return await prisma.catalog.findUnique({
    where: { id },
    include: {
      customer: true,
      products: true,
      inquiries: true
    }
  })
}

export const createCatalogService = async (data: { name: string; customerId: number; hasPassword?: boolean; password?: string; status?: string, productIds?: number[] }) => {
  const { productIds, ...catalogData } = data;
  return await prisma.catalog.create({
    data: {
      ...catalogData,
      products: {
        connect: productIds?.map(id => ({ id })) || []
      }
    },
    include: {
      customer: true,
      products: true
    }
  })
}

export const updateCatalogService = async (id: number, data: { name?: string; customerId?: number; hasPassword?: boolean; password?: string; status?: string; productIds?: number[] }) => {
  const { productIds, ...rest } = data;
  return await prisma.catalog.update({
    where: { id },
    data: {
      ...rest,
      products: {
        set: productIds?.map(id => ({ id })) || []
      }
    },
    include: {
      customer: true,
      products: true
    }
  })
}

export const deleteCatalogService = async (id: number) => {
  return await prisma.catalog.delete({
    where: { id }
  })
}