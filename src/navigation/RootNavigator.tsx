import { FC } from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import MainStack from './stacks/MainStack';

import { EAppRoutes, TAppRoutesParams } from './models';

const Stack = createNativeStackNavigator<TAppRoutesParams>();

const RootNavigator: FC = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen component={MainStack} name={EAppRoutes.MAIN} />
    </Stack.Navigator>
  );
};

export default RootNavigator;
