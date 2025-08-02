import { Request, Response } from 'express';
import {
  getAllCustomersService,
  getCustomerByIdService,
  createCustomerService,
  updateCustomerService,
  deleteCustomerService,
} from '../services/customer.service';

export const getAllCustomers = async (req: Request, res: Response) => {
  try {
    const customers = await getAllCustomersService();
    res.json({ success: true, data: customers });
  } catch (error) {
    res.status(500).json({ success: false, error: 'Failed to fetch customers' });
  }
};

export const getCustomerById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const customer = await getCustomerByIdService(parseInt(id));
    if (!customer) {
      return res.status(404).json({ success: false, error: 'Customer not found' });
    }
    res.json({ success: true, data: customer });
  } catch (error) {
    res.status(500).json({ success: false, error: 'Failed to fetch customer' });
  }
};

export const createCustomer = async (req: Request, res: Response) => {
  try {
    const customer = await createCustomerService(req.body);
    res.status(201).json({ success: true, data: customer });
  } catch (error) {
    res.status(500).json({ success: false, error: 'Failed to create customer' });
  }
};

export const updateCustomer = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const customer = await updateCustomerService(parseInt(id), req.body);
    if (!customer) {
      return res.status(404).json({ success: false, error: 'Customer not found' });
    }
    res.json({ success: true, data: customer });
  } catch (error) {
    res.status(500).json({ success: false, error: 'Failed to update customer' });
  }
};

export const deleteCustomer = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const customer = await deleteCustomerService(parseInt(id));
    if (!customer) {
      return res.status(404).json({ success: false, error: 'Customer not found' });
    }
    res.json({ success: true, message: 'Customer deleted successfully' });
  } catch (error) {
    res.status(500).json({ success: false, error: 'Failed to delete customer' });
  }
};
