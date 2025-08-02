import { Request, Response } from 'express'
import { getAllCategoriesService, getCategoryByIdService, createCategoryService, updateCategoryService, deleteCategoryService } from '../services/category.service'

export const getAllCategories = async (req: Request, res: Response) => {
  try {
    const categories = await getAllCategoriesService()
    res.json({ success: true, data: categories })
  } catch (error) {
    console.error('Error in getAllCategories:', error);
    res.status(500).json({ success: false, error: 'Failed to fetch categories' });
  }
}

export const getCategoryById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    const category = await getCategoryByIdService(parseInt(id))
    if (!category) {
      return res.status(404).json({ success: false, error: 'Category not found' })
    }
    res.json({ success: true, data: category })
  } catch (error) {
    res.status(500).json({ success: false, error: 'Failed to fetch category' })
  }
}

export const createCategory = async (req: Request, res: Response) => {
  try {
    const { name, description, active = true, parentId } = req.body;

    const category = await createCategoryService({
      name,
      description,
      active,
      parentId: parentId ? Number(parentId) : null,
    });

    res.status(201).json({ success: true, data: category });
  } catch (error) {
    res.status(500).json({ success: false, error: 'Failed to create category' });
  }
};


export const updateCategory = async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    const category = await updateCategoryService(parseInt(id), req.body)
    if (!category) {
      return res.status(404).json({ success: false, error: 'Category not found' })
    }
    res.json({ success: true, data: category })
  } catch (error) {
    res.status(500).json({ success: false, error: 'Failed to update category' })
  }
}

export const deleteCategory = async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    const category = await deleteCategoryService(parseInt(id))
    if (!category) {
      return res.status(404).json({ success: false, error: 'Category not found' })
    }
    res.json({ success: true, message: 'Category deleted successfully' })
  } catch (error) {
    res.status(500).json({ success: false, error: 'Failed to delete category' })
  }
}