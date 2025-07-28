import { Router } from 'express'
import { getAllCatalogs, getCatalogById, createCatalog, updateCatalog, deleteCatalog } from '../controllers/catalog.controller'

const router = Router()

router.get('/', getAllCatalogs)
router.get('/:id', getCatalogById)
router.post('/', createCatalog)
router.put('/:id', updateCatalog)
router.delete('/:id', deleteCatalog)

export default router