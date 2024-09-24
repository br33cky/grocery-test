import { FC, useCallback } from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { useMainNavigation } from 'hooks';

import CreateGroceryScreen from 'view/screens/CreateGroceryScreen';
import DashboardScreen from 'view/screens/DashboardScreen';
import UpdateGroceryScreen from 'view/screens/UpdateGroceryScreen';
import { Button } from 'view/ui-kit';

import { EMainRoutes, TMainRoutesParams } from 'navigation/models';

const Stack = createNativeStackNavigator<TMainRoutesParams>();

const MainStack: FC = () => {
  const navigation = useMainNavigation();
  const navigateCreateForm = () => navigation.navigate(EMainRoutes.CREATE);

  const HeaderDashboardAction = useCallback(
    () => <Button action="primary" title="Add +" onPress={navigateCreateForm} />,
    [],
  );

  return (
    <Stack.Navigator initialRouteName={EMainRoutes.HOME}>
      <Stack.Screen
        component={DashboardScreen}
        name={EMainRoutes.HOME}
        options={{ title: 'Dashboard', headerRight: HeaderDashboardAction }}
      />
      <Stack.Screen component={CreateGroceryScreen} name={EMainRoutes.CREATE} options={{ title: 'Create' }} />
      <Stack.Screen component={UpdateGroceryScreen} name={EMainRoutes.UPDATE} options={{ title: 'Update' }} />
    </Stack.Navigator>
  );
};

export default MainStack;
