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
  const { name, shortDescription, description, basePrice, categoryId } = data;
  return await prisma.product.create({
    data: {
      name,
      shortDescription,
      description,
      price: basePrice,
      category: {
        connect: { id: categoryId }
      }
    },
    include: {
      category: true
    }
  })
}

export const updateProductService = async (id: number, data: UpdateProductData) => {
  const { name, shortDescription, description, basePrice, offerPercentage, active, categoryId } = data;
  return await prisma.product.update({
    where: { id },
    data: {
      name,
      shortDescription,
      description,
      price: basePrice,
      offerPercentage,
      active,
      ...(categoryId && { category: { connect: { id: categoryId } } })
    },
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