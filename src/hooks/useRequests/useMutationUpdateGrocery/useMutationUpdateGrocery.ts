import { useMutation, useQueryClient } from '@tanstack/react-query';

import { api } from 'api';

import { ERequestsKeys } from '../models';
import { IGrocery } from 'models';

export const useMutationUpdateGrocery = () => {
  const queryClient = useQueryClient();

  const updateGroceryMutation = useMutation({
    mutationKey: [ERequestsKeys.UPDATE_GROCERY],
    mutationFn: ({ id, ...rest }: IGrocery) => api.grocery.update(id, rest),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: [ERequestsKeys.ALL_GROCERY] }),
  });

  return updateGroceryMutation;
};
