import { IGrocery } from 'models';
import { RequireAtLeastOne } from 'types';

export type IGroceryInfo = Omit<IGrocery, 'id'>;

export type IAddGrocery = RequireAtLeastOne<IGroceryInfo>;

export type IAmountGrocery = Pick<IGrocery, 'id' | 'amount'>;
