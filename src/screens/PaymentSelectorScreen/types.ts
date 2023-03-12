import { RouteProp } from '@react-navigation/native';

interface IPaymentSelectorScreenItem {
  data1: string;
  data2: string;
  data3: number;
  data4: string;
}

export interface IPaymentSelectorScreenProps {
  route: RouteProp<{ params: { data: IPaymentSelectorScreenItem } }, 'params'>;
}
