import { CompositeNavigationProp, RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

export type RootParamsList = {
  Welcome: undefined;
  SignUp: undefined;
  SignIn: undefined;
  ForgotPassword: undefined;
  App: undefined;
};

export type AppStackParams = {
  Home: undefined;
  Doctors: undefined;
  DoctorProfile: { id: string };
  ScheduleDialog: {
    date: Date;
    appointments: Array<Date>;
    onSchedule: (time: Date) => void;
  };
  Profile: undefined;
  Chartting:undefined;
};

export type AppStackRouteName = keyof AppStackParams;

export type ModalStackParams = {
  AppStack: undefined;
  DoctorProfileModal: AppStackParams['DoctorProfile'];
  ScheduleDialogModal: AppStackParams['ScheduleDialog'];
};

export type ModalStackRouteName = keyof ModalStackParams;

export type DoctorStackParams = {
  Doctors: AppStackParams['Doctors'];
  DoctorProfileModal: AppStackParams['DoctorProfile'];
};

export type DrawerStackParams = {
  HomeDrawer: undefined;
  DoctorsDrawer: undefined;
  ProfileDrawer: undefined;
  CharttingDrawer:undefined
};

export type DrawerStackRouteName = keyof DrawerStackParams;

export type TotalRouteName =
  | ModalStackRouteName
  | AppStackRouteName
  | DrawerStackRouteName;

export type TotalParamList = ModalStackParams &
  AppStackParams &
  DrawerStackParams;

export type AppModalNavigationProp<
  R extends keyof TotalParamList = any
> = StackNavigationProp<TotalParamList, R>;

export type TotalNavigationProp<
  T extends TotalRouteName
> = CompositeNavigationProp<
  StackNavigationProp<TotalParamList, T>,
  AppModalNavigationProp
>;

export type AppStackRouteProp<T extends TotalRouteName> = RouteProp<
  TotalParamList,
  T
>;
