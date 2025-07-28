import { Request, Response } from 'express'
import { getAllInquiriesService, getInquiryByIdService, createInquiryService, updateInquiryService, deleteInquiryService } from '../services/inquiry.service'

export const getAllInquiries = async (req: Request, res: Response) => {
  try {
    const inquiries = await getAllInquiriesService()
    res.json({ success: true, data: inquiries })
  } catch (error) {
    res.status(500).json({ success: false, error: 'Failed to fetch inquiries' })
  }
}

export const getInquiryById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    const inquiry = await getInquiryByIdService(parseInt(id))
    if (!inquiry) {
      return res.status(404).json({ success: false, error: 'Inquiry not found' })
    }
    res.json({ success: true, data: inquiry })
  } catch (error) {
    res.status(500).json({ success: false, error: 'Failed to fetch inquiry' })
  }
}

export const createInquiry = async (req: Request, res: Response) => {
  try {
    const inquiry = await createInquiryService(req.body)
    res.status(201).json({ success: true, data: inquiry })
  } catch (error) {
    res.status(500).json({ success: false, error: 'Failed to create inquiry' })
  }
}

export const updateInquiry = async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    const inquiry = await updateInquiryService(parseInt(id), req.body)
    if (!inquiry) {
      return res.status(404).json({ success: false, error: 'Inquiry not found' })
    }
    res.json({ success: true, data: inquiry })
  } catch (error) {
    res.status(500).json({ success: false, error: 'Failed to update inquiry' })
  }
}

export const deleteInquiry = async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    const inquiry = await deleteInquiryService(parseInt(id))
    if (!inquiry) {
      return res.status(404).json({ success: false, error: 'Inquiry not found' })
    }
    res.json({ success: true, message: 'Inquiry deleted successfully' })
  } catch (error) {
    res.status(500).json({ success: false, error: 'Failed to delete inquiry' })
  }
}