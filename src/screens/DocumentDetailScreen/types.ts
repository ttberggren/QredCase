import { RouteProp } from '@react-navigation/native';

interface IDocumentDetailScreenItem {
  data1: string;
  data2: string;
  data3: number;
  data4: string;
}

export interface IDocumentDetailDataProps {
  //   data: IDocumentDetailScreenItem;
  route: RouteProp<{ params: { data: IDocumentDetailScreenItem } }, 'params'>;
}
