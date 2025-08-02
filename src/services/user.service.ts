import prisma from '../models/db'
import { CreateUserData, UpdateUserData } from '../types/user.types'

export const getAllUsersService = async () => {
  return await prisma.user.findMany()
}

export const getUserByIdService = async (id: number) => {
  return await prisma.user.findUnique({
    where: { id }
  })
}

export const createUserService = async (data: CreateUserData) => {
  try {
    return await prisma.user.create({
      data
    })
  } catch (error) {
    console.error('Database error:', error)
    throw error
  }
}

import { validatePhone } from '../utils/validation';

export const updateUserService = async (id: number, data: UpdateUserData) => {
  if (data.phone && !validatePhone(data.phone)) {
    throw new Error('Invalid phone number format. Please use a 10-digit number.');
  }

  return await prisma.user.update({
    where: { id },
    data
  });
};

export const deleteUserService = async (id: number) => {
  return await prisma.user.delete({
    where: { id }
  })
}