import React from 'react';
import RadioInput from 'src/components/common/inputs/radio-group';
// import Button from 'src/components/common/button';
import { FieldsType } from 'src/types/config';
import BaseInput from 'src/components/common/inputs/base';
import { BaseInputProps } from 'src/components/common/inputs/base/types';

export type FormValue = Record<string, string | number | boolean>;

const REQUIRED_FIELD = 'This field is required';

export const renderField = (
  field: FieldsType,
  onChange: BaseInputProps['onChange'],
  value: string | boolean | number,
  errors: Record<string, string>,
) => {
  if (
    field.type === 'text'
    || field.type === 'number'
    || field.type === 'checkbox'
    || field.type === 'textarea'
    || field.type === 'date'
  ) {
    return (
      <BaseInput
        className="form-page__field"
        key={field.name}
        {...field}
        value={value}
        onChange={onChange}
        checked={(field.type === 'checkbox' && !!value) || false}
        errorMessage={errors[field.name]}
      />
    );
  }
  if (field.type === 'radio') {
    return (
      <RadioInput
        {...field}
        className="form-page__field"
        key={field.name}
        value={value}
        onChange={onChange}
        errorMessage={errors[field.name]}
      />
    );
  }
  return null;
};

type ValidResult = {
  success: boolean;
  errors: Record<string, string>;
};

export const validationForm = (
  fields: FieldsType[],
  formDate: FormValue,
): ValidResult => {
  const errors = fields.reduce((acc, config) => {
    if ('required' in config && config.required && !formDate[config.name]) {
      acc[config.name] = REQUIRED_FIELD;
    }
    return acc;
  }, {} as Record<string, string>);

  return {
    success: !Object.keys(errors).length,
    errors,
  };
};

export const getInitialValues = (
  fields: FieldsType[],
): Record<string, string | number | boolean> => (
  fields.reduce((acc, field) => {
    if ('defaultValue' in field && field.defaultValue) {
      acc[field.name] = field.defaultValue;
    }
    return acc;
  }, {} as Record<string, string | number | boolean>)
);
