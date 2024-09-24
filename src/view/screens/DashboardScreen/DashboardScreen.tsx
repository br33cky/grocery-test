import { FC } from 'react';
import { FlatList } from 'react-native';

import { useMainNavigation } from 'hooks';
import { useMutationBuyGrocery, useMutationDeleteGrocery, useQueryGetAllGrocery } from 'hooks/useRequests';

import Grocery from 'view/components/Grocery';

import { IGrocery } from 'models';
import { EMainRoutes } from 'navigation/models';

const DashboardScreen: FC = () => {
  const getGroceryQuery = useQueryGetAllGrocery();
  const deleteGroceryMutation = useMutationDeleteGrocery();
  const buyGroceryMutation = useMutationBuyGrocery();

  const navigation = useMainNavigation();
  const navigateUpdateForm = (grocery: IGrocery) => navigation.navigate(EMainRoutes.UPDATE, grocery);

  return (
    <FlatList
      data={getGroceryQuery.data}
      keyExtractor={({ id }) => id}
      renderItem={({ item }) => (
        <Grocery
          buyItem={buyGroceryMutation.mutate}
          data={item}
          removeItem={deleteGroceryMutation.mutate}
          updateItem={navigateUpdateForm}
        />
      )}
    />
  );
};

export default DashboardScreen;
