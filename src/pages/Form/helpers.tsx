import React from 'react';
import RadioInput from '../../components/common/inputs/radio';
import Button from '../../components/common/button';
import { Config } from '../../types/config';
import BaseInput from '../../components/common/inputs/base';
import { BaseInputProps } from '../../components/common/inputs/base/types';

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
        onChange={onChange}
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
  formDate: Record<string, string | number>,
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
