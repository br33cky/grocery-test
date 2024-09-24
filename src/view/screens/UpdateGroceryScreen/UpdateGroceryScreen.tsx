import { FC } from 'react';

import { RouteProp, useRoute } from '@react-navigation/native';

import { useMutationUpdateGrocery } from 'hooks/useRequests';

import { GroceryForm } from 'view/components/GroceryForm';

import { EMainRoutes, TMainRoutesParams } from 'navigation/models';

const UpdateGroceryScreen: FC = () => {
  const { params } = useRoute<RouteProp<TMainRoutesParams, EMainRoutes.UPDATE>>();

  console.info(params);

  const updateGroceryMutaion = useMutationUpdateGrocery();

  return <GroceryForm defaultValues={params} onSubmit={updateGroceryMutaion.mutate} />;
};

export default UpdateGroceryScreen;
