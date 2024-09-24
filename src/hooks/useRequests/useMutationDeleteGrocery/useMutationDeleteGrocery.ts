import { useMutation, useQueryClient } from '@tanstack/react-query';

import { api } from 'api';

import { ERequestsKeys } from '../models';
import { IGrocery } from 'models';

export const useMutationDeleteGrocery = () => {
  const queryClient = useQueryClient();

  const deleteGroceryMutation = useMutation({
    mutationKey: [ERequestsKeys.DELETE_GROCERY],
    mutationFn: ({ id }: IGrocery) => api.grocery.remove(id),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: [ERequestsKeys.ALL_GROCERY] }),
  });

  return deleteGroceryMutation;
};
