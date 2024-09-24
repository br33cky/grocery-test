import { useQuery } from '@tanstack/react-query';

import { api } from 'api';

import { ERequestsKeys } from '../models';

export const useQueryGetAllGrocery = () => {
  const getGroceryQuery = useQuery({
    queryKey: [ERequestsKeys.ALL_GROCERY],
    queryFn: () => api.grocery.getAll(),
    select: ({ data }) => data,
  });

  return getGroceryQuery;
};
