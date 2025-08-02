import prisma from '../models/db'

export const getAllInquiriesService = async () => {
  return await prisma.inquiry.findMany({
    include: {
      customer: true,
      catalog: true
    }
  })
}

export const getInquiryByIdService = async (id: number) => {
  return await prisma.inquiry.findUnique({
    where: { id },
    include: {
      customer: true,
      catalog: true
    }
  })
}

export const createInquiryService = async (data: { message: string; customerId: number; catalogId?: number; productName?: string; priority?: string }) => {
  return await prisma.inquiry.create({
    data,
    include: {
      customer: true,
      catalog: true
    }
  })
}

export const updateInquiryService = async (id: number, data: { message?: string; status?: string; catalogId?: number; productName?: string; priority?: string }) => {
  return await prisma.inquiry.update({
    where: { id },
    data,
    include: {
      customer: true,
      catalog: true
    }
  })
}

export const deleteInquiryService = async (id: number) => {
  return await prisma.inquiry.delete({
    where: { id }
  })
}