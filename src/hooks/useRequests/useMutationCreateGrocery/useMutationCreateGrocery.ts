import { useMutation, useQueryClient } from '@tanstack/react-query';

import { api } from 'api';

import { ERequestsKeys } from '../models';
import { IGroceryInfo } from 'api/features/grocery/models';

export const useMutationCreateGrocery = () => {
  const queryClient = useQueryClient();

  const createGroceryMutation = useMutation({
    mutationKey: [ERequestsKeys.CREATE_GROCERY],
    mutationFn: (grocery: IGroceryInfo) => api.grocery.add(grocery),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: [ERequestsKeys.ALL_GROCERY] }),
  });

  return createGroceryMutation;
};
