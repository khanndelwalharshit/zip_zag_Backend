import prisma from '../models/db'

export const getAllCategoriesService = async () => {
  return await prisma.category.findMany({
    include: {
      products: true
    }
  })
}

export const getCategoryByIdService = async (id: number) => {
  return await prisma.category.findUnique({
    where: { id },
    include: {
      products: true
    }
  })
}

export const createCategoryService = async (data: { name: string }) => {
  return await prisma.category.create({
    data
  })
}

export const updateCategoryService = async (id: number, data: { name?: string }) => {
  return await prisma.category.update({
    where: { id },
    data
  })
}

export const deleteCategoryService = async (id: number) => {
  return await prisma.category.delete({
    where: { id }
  })
}