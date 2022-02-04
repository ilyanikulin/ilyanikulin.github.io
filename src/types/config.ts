import { RadioOption } from 'src/components/common/inputs/radio';

type BaseProps = {
  label?: string;
  required?: boolean;
  name: string;
  placeholder?: string;
  disabled?: boolean;
  defaultValue?: string | number | boolean;
};

export type NumberField = BaseProps & {
  type: 'number',
};

export type TextField = BaseProps & {
  type: 'text',
};

export type TextareaField = BaseProps & {
  type: 'textarea',
};

export type DateField = BaseProps & {
  type: 'date',
};

export type Checkbox = BaseProps & {
  type: 'checkbox',
};

export type Radio = BaseProps & {
  type: 'radio',
  options: RadioOption[]
};

export type FormButton = {
  type: 'button';
  submit?: boolean;
  label: string;
  primary?: boolean;
};

export type Config = Radio | Checkbox |
DateField | NumberField | TextField |
TextareaField | FormButton;
