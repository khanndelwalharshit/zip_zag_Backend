import prisma from '../models/db'

const getCategoryLevel = async (categoryId: number | null): Promise<number> => {
  if (!categoryId) {
    return 0;
  }
  const parent = await prisma.category.findUnique({ where: { id: categoryId } });
  if (!parent || !parent.parentId) {
    return 1;
  }
  return 1 + (await getCategoryLevel(parent.parentId));
};

export const getAllCategoriesService = async () => {
  const categories = await prisma.category.findMany({
    include: {
      products: true,
      children: true,
    },
  });

  const categoriesWithLevels = await Promise.all(
    categories.map(async (category) => ({
      ...category,
      level: await getCategoryLevel(category.id),
      subcategories: category.children.length,
      products: category.products.length,
    }))
  );

  return categoriesWithLevels;
};

export const getCategoryByIdService = async (id: number) => {
  return await prisma.category.findUnique({
    where: { id },
    include: {
      products: true
    }
  })
}

export const createCategoryService = async (data: {
  name: string;
  description?: string;
  active?: boolean;
  parentId?: number | null;
}) => {
  return await prisma.category.create({
    data,
  });
};

export const updateCategoryService = async (id: number, data: { name?: string; description?: string; active?: boolean; status?: string; parentId?: number | null; }) => {
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