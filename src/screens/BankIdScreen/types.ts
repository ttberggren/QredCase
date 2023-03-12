import { RouteProp } from '@react-navigation/native';

export interface IBankIdItemProps {
  selected: string;
}

export interface IBankIdScreenProps {
  route: RouteProp<{ params: { selected: IBankIdItemProps } }, 'params'>;
}
