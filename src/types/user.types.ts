
export interface CreateUserData {
  email: string;
  name: string;
  phone: string;
  password: string;
  role?: string;
  active?: boolean;
}


export interface UpdateUserData {
  email?: string;
  name?: string;
  phone?: string;
  password?: string;
  role?: string;
  active?: boolean;
}
  
// export interface UserFilters extends PaginationParams {
//   role?: string
// }