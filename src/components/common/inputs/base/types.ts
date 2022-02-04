import React from 'react';

export type InputValue = string | number | boolean | Date;

export type BaseInputProps = CommonBaseInputProps & {
  render?: React.FC<CommonBaseInputProps>;
  type?: string;
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
