import prisma from '../models/db'
import { CreateProductData, UpdateProductData } from '../types/product.types'

export const getAllProductsService = async () => {
  return await prisma.product.findMany({
    include: {
      category: true,
      catalogs: true
    }
  })
}

export const getProductByIdService = async (id: number) => {
  return await prisma.product.findUnique({
    where: { id },
    include: {
      category: true,
      catalogs: true
    }
  })
}

export const createProductService = async (data: CreateProductData) => {
  return await prisma.product.create({
    data,
    include: {
      category: true
    }
  })
}

export const updateProductService = async (id: number, data: UpdateProductData) => {
  return await prisma.product.update({
    where: { id },
    data,
    include: {
      category: true
    }
  })
}

export const deleteProductService = async (id: number) => {
  return await prisma.product.delete({
    where: { id }
  })
}