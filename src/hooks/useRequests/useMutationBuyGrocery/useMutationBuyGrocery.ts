import { useMutation, useQueryClient } from '@tanstack/react-query';

import { api } from 'api';

import { ERequestsKeys } from '../models';
import { IGrocery } from 'models';

export const useMutationBuyGrocery = () => {
  const queryClient = useQueryClient();

  const buyGroceryMutation = useMutation({
    mutationKey: [ERequestsKeys.CREATE_GROCERY],
    mutationFn: ({ id, ...rest }: IGrocery) =>
      api.grocery.update(id, {
        ...rest,
        isBought: !rest.isBought,
      }),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: [ERequestsKeys.ALL_GROCERY] }),
  });

  return buyGroceryMutation;
};
