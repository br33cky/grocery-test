import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { TMainRoutesParams, TRoutesParams } from 'navigation/models';

export const useAppNavigation = () => useNavigation<NativeStackNavigationProp<TRoutesParams>>();

export const useMainNavigation = () => useNavigation<NativeStackNavigationProp<TMainRoutesParams>>();
