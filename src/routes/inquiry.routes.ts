import { Router } from 'express'
import { getAllInquiries, getInquiryById, createInquiry, updateInquiry, deleteInquiry } from '../controllers/inquiry.controller'

const router = Router()

router.get('/', getAllInquiries)
router.get('/:id', getInquiryById)
router.post('/', createInquiry)
router.put('/:id', updateInquiry)
router.delete('/:id', deleteInquiry)

export default router