export interface IProps {
  children: React.ReactNode;
}

export interface InputProps {
  label: string;
  onChangeText: (text: string) => void;
  icon?: JSX.Element | null;
  IsSecureText?: boolean | undefined;
  keyboardType?: KeyboardTypeOptions | undefined;
  placeholder?: string | undefined;
}

export interface CustomButtonProps {
  onPress?: null | ((event: GestureResponderEvent) => void) | undefined;
  buttonClassNames?: string;
  textClassNames?: string;
  buttonText: string;
}
