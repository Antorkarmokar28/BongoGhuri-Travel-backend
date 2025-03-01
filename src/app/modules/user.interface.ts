export interface IUser {
  name: string;
  email: string;
  password: string;
  role?: 'user' | 'admin';
  isDeleted?: boolean;
  status?: 'in-progress' | 'block';
}
