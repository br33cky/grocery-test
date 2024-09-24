import { axiosInstance } from 'api/utils';

import { IAddGrocery, IGroceryInfo } from './models';
import { IGrocery } from 'models';

export const getAll = () => axiosInstance.get<IGrocery[]>('grocery');

export const remove = (id: string) => axiosInstance.delete(`grocery/${id}`);

export const add = (item: IAddGrocery) => axiosInstance.post('grocery', item);

export const update = (id: string, item: IGroceryInfo) => axiosInstance.patch(`grocery/${id}`, item);

export const changeAmount = (id: string, amount: number) => axiosInstance.patch(`grocery/${id}`, { amount });
