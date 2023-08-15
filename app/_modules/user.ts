export interface IUser {
  _id: string;
  name: string;
  email: string;
  isAdmin: boolean;
  passwordHash: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export type UserFormValues = Omit<
  IUser,
  "_id" | "isAdmin" | "passwordHash" | "createdAt" | "updatedAt" | "__v"
> & { password: string; passwordConfirm: string };

export const UserFormInitialValues: UserFormValues = {
  name: "",
  email: "",
  password: "",
  passwordConfirm: "",
};
