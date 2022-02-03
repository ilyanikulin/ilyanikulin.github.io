import React from 'react';
import RadioInput from '../../components/common/inputs/radio';
import Button from '../../components/common/button';
import { Config } from '../../types/config';
import BaseInput from '../../components/common/inputs/base';
import { BaseInputProps } from '../../components/common/inputs/base/types';

export const renderField = (config: Config, onChange: BaseInputProps['onChange']) => {
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
      />
    );
  } if (config.type === 'button') {
    return <Button {...config} key={config.label.replaceAll(' ', '_')} className="form-page__button" />;
  }
  return null;
};
