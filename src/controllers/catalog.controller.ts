import { Request, Response } from 'express'
import { getAllCatalogsService, getCatalogByIdService, createCatalogService, updateCatalogService, deleteCatalogService } from '../services/catalog.service'

export const getAllCatalogs = async (req: Request, res: Response) => {
  try {
    const catalogs = await getAllCatalogsService()
    res.json({ success: true, data: catalogs })
  } catch (error) {
    res.status(500).json({ success: false, error: 'Failed to fetch catalogs' })
  }
}

export const getCatalogById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    const catalog = await getCatalogByIdService(parseInt(id))
    if (!catalog) {
      return res.status(404).json({ success: false, error: 'Catalog not found' })
    }
    res.json({ success: true, data: catalog })
  } catch (error) {
    res.status(500).json({ success: false, error: 'Failed to fetch catalog' })
  }
}

export const createCatalog = async (req: Request, res: Response) => {
  try {
    const catalog = await createCatalogService(req.body)
    res.status(201).json({ success: true, data: catalog })
  } catch (error) {
    res.status(500).json({ success: false, error: 'Failed to create catalog' })
  }
}

export const updateCatalog = async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    const catalog = await updateCatalogService(parseInt(id), req.body)
    if (!catalog) {
      return res.status(404).json({ success: false, error: 'Catalog not found' })
    }
    res.json({ success: true, data: catalog })
  } catch (error) {
    console.error('Error in updateCatalog:', error);
    res.status(500).json({ success: false, error: 'Failed to update catalog' });
  }
}

export const deleteCatalog = async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    const catalog = await deleteCatalogService(parseInt(id))
    if (!catalog) {
      return res.status(404).json({ success: false, error: 'Catalog not found' })
    }
    res.json({ success: true, message: 'Catalog deleted successfully' })
  } catch (error) {
    console.error('Error in deleteCatalog:', error);
    res.status(500).json({ success: false, error: 'Failed to delete catalog' });
  }
}