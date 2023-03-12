export interface IPrimaryButtonProps {
  label: string | {};
  onPress: () => void;
  size: string;
  bordered: boolean;
  type: string;
  color: string;
  textToUpperCase?: boolean;
  textSize: number;
}
