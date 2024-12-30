import { BaseQueryApi } from "@reduxjs/toolkit/query";
import { TCarManagement } from "./carManagement.type";

export type TError = {
  data: {
    message: string;
    stack?: string;
    success?: boolean;
  };
  status: number;
};

export type TMeta = {
  limit: number;
  page: number;
  total: number;
  totalPage: number;
};

export type TResponse<T> = {
  data?: T;
  meta?: TMeta;
  error?: TError;
  success?: boolean;
  message?: string;
};

export type TResponseRedux<T> = TResponse<T> & BaseQueryApi;

export type TUser = {
  _id: string;
  name: string;
  email: string;
  role: string;
  phone: string;
  address: string;
  isDeleted: boolean;
  __v?: number;
};

export type TBooking = {
  _id: string;
  date: string;
  user: TUser;
  carId: TCarManagement;
  startTime: string;
  endTime: string;
  totalCost: number;
  __v?: number;
};
