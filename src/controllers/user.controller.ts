import { Request, Response } from 'express'
import { getAllUsersService, getUserByIdService, createUserService, updateUserService, deleteUserService } from '../services/user.service'

export const getAllUsers = async (req: Request, res: Response) => {
  try {
    const users = await getAllUsersService()
    res.json({ success: true, data: users })
  } catch (error) {
    res.status(500).json({ success: false, error: 'Failed to fetch users' })
  }
}

export const getUserById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    const user = await getUserByIdService(parseInt(id))
    if (!user) {
      return res.status(404).json({ success: false, error: 'User not found' })
    }
    res.json({ success: true, data: user })
  } catch (error) {
    res.status(500).json({ success: false, error: 'Failed to fetch user' })
  }
}

export const createUser = async (req: Request, res: Response) => {
  try {
    const user = await createUserService(req.body)
    res.status(201).json({ success: true, data: user })
  } catch (error) {
    console.error('Create user error:', error) // Add this line
    res.status(500).json({ 
      success: false, 
      error: 'Failed to create user',
      details: error instanceof Error ? error.message : 'Unknown error'
    })
  }
}

export const updateUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    const user = await updateUserService(parseInt(id), req.body)
    if (!user) {
      return res.status(404).json({ success: false, error: 'User not found' })
    }
    res.json({ success: true, data: user })
  } catch (error) {
    res.status(500).json({ success: false, error: 'Failed to update user' })
  }
}

export const deleteUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    const user = await deleteUserService(parseInt(id))
    if (!user) {
      return res.status(404).json({ success: false, error: 'User not found' })
    }
    res.json({ success: true, message: 'User deleted successfully' })
  } catch (error) {
    res.status(500).json({ success: false, error: 'Failed to delete user' })
  }
}