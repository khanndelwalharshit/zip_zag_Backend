import { Request, Response } from 'express'
import { getAllProductsService, getProductByIdService, createProductService, updateProductService, deleteProductService } from '../services/product.service'

export const getAllProducts = async (req: Request, res: Response) => {
  try {
    const products = await getAllProductsService()
    res.json({ success: true, data: products })
  } catch (error) {
    res.status(500).json({ success: false, error: 'Failed to fetch products' })
  }
}

export const getProductById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    const product = await getProductByIdService(parseInt(id))
    if (!product) {
      return res.status(404).json({ success: false, error: 'Product not found' })
    }
    res.json({ success: true, data: product })
  } catch (error) {
    res.status(500).json({ success: false, error: 'Failed to fetch product' })
  }
}

export const createProduct = async (req: Request, res: Response) => {
  try {
    const product = await createProductService(req.body)
    res.status(201).json({ success: true, data: product })
  } catch (error) {
    res.status(500).json({ success: false, error: 'Failed to create product' })
  }
}

export const updateProduct = async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    const product = await updateProductService(parseInt(id), req.body)
    if (!product) {
      return res.status(404).json({ success: false, error: 'Product not found' })
    }
    res.json({ success: true, data: product })
  } catch (error) {
    res.status(500).json({ success: false, error: 'Failed to update product' })
  }
}

export const deleteProduct = async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    const product = await deleteProductService(parseInt(id))
    if (!product) {
      return res.status(404).json({ success: false, error: 'Product not found' })
    }
    res.json({ success: true, message: 'Product deleted successfully' })
  } catch (error) {
    res.status(500).json({ success: false, error: 'Failed to delete product' })
  }
}