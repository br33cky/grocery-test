import { NavigatorScreenParams } from '@react-navigation/native';

import { IGrocery } from 'models';

export enum EAppRoutes {
  MAIN = 'MAIN',
}

export enum EMainRoutes {
  HOME = 'HOME',
  CREATE = 'CREATE',
  UPDATE = 'UPDATE',
}

export type TMainRoutesParams = {
  [EMainRoutes.HOME]: undefined;
  [EMainRoutes.CREATE]: undefined;
  [EMainRoutes.UPDATE]: IGrocery;
};

export type TAppRoutesParams = {
  [EAppRoutes.MAIN]: NavigatorScreenParams<TMainRoutesParams>;
};

export type TRoutes = EAppRoutes | EMainRoutes;

export type TRoutesParams = TAppRoutesParams & TMainRoutesParams;

export type RouteParams<T extends TRoutes> = TRoutesParams[T];
