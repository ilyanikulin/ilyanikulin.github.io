export type InputValue = string | number | boolean | Date;

export type BaseInputProps = CommonBaseInputProps & {
  type?: 'text' | 'textarea' | 'number' | 'date' | 'checkbox' | 'radio';
  checked?: boolean;
};

export type CommonBaseInputProps = {
  name?: string;
  required?: boolean;
  label?: string | null;
  disabled?: boolean;
  placeholder?: string;
  className?: string;
  value?: InputValue;
  onChange?: (val: any) => void;
  id?: string;
  errorMessage?: string;
};
