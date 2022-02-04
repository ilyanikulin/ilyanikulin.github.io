import React from 'react';
import RadioInput from 'src/components/common/inputs/radio';
import Button from 'src/components/common/button';
import { Config } from 'src/types/config';
import BaseInput from 'src/components/common/inputs/base';
import { BaseInputProps } from 'src/components/common/inputs/base/types';

export type FormValue = Record<string, string | number | boolean>;

const REQUIRED_FIELD = 'This field is required';

export const renderField = (config: Config, onChange: BaseInputProps['onChange'], errors: Record<string, string>) => {
  if (
    config.type === 'text'
    || config.type === 'number'
    || config.type === 'checkbox'
    || config.type === 'textarea'
    || config.type === 'date'
  ) {
    return (
      <BaseInput
        className="form-page__field"
        key={config.name}
        {...config}
        value={config.defaultValue}
        onChange={onChange}
        checked={(config.type === 'checkbox' && !!config.defaultValue) || false}
        errorMessage={errors[config.name]}
      />
    );
  }
  if (config.type === 'radio') {
    return (
      <RadioInput
        {...config}
        className="form-page__field"
        key={config.name}
        value={config.defaultValue}
        onChange={onChange}
        errorMessage={errors[config.name]}
      />
    );
  } if (config.type === 'button') {
    return <Button {...config} key={config.label.replaceAll(' ', '_')} className="form-page__button" />;
  }
  return null;
};

type ValidResult = {
  success: boolean;
  errors: Record<string, string>;
};

export const validationForm = (
  configs: Config[],
  formDate: FormValue,
): ValidResult => {
  const errors = configs.reduce((acc, config) => {
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
  configs: Config[],
): Record<string, string | number | boolean> => (
  configs.reduce((acc, config) => {
    if ('defaultValue' in config && config.defaultValue) {
      acc[config.name] = config.defaultValue;
    }
    return acc;
  }, {} as Record<string, string | number | boolean>)
);
