import { FC } from 'react';

import { useMutationCreateGrocery } from 'hooks/useRequests';

import { GroceryForm } from 'view/components/GroceryForm';

const CreateGroceryScreen: FC = () => {
  const createGroceryMutaion = useMutationCreateGrocery();

  return <GroceryForm onSubmit={createGroceryMutaion.mutate} />;
};

export default CreateGroceryScreen;
