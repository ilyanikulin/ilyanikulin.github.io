import React, { useEffect, useState } from 'react';
import classNames from 'classnames';

import BaseInput from '../base';
import { CommonBaseInputProps } from '../base/types';

import './index.scss';

export type RadioOption = {
  label: string;
  value: string;
};

export type RadioGroupInputProps = CommonBaseInputProps & {
  options: RadioOption[]
};

const RadioGroupInput: React.FC<RadioGroupInputProps> = ({
  options,
  required,
  name,
  onChange,
  value,
  label,
  className,
  errorMessage,
}) => {
  const [localValue, setLocalValue] = useState<string | void>(value?.toString());

  useEffect(() => {
    setLocalValue((prev) => (prev !== value?.toString() ? value?.toString() : prev));
  }, [value]);

  const onChangeHandler = (val: string) => {
    if (onChange) {
      onChange(val);
    }
    setLocalValue(val);
  };

  return (
    <div className={classNames('input input--radio', className)}>
      <div className="input__container">
        {label && (
        <div className={classNames('input__title')}>
          <span>{label}</span>
          {required && <span className="input__required">*</span>}
        </div>
        )}
        <fieldset name={name} className="input__fieldset">
          {options.map((opt) => (
            <BaseInput
              type="radio"
              key={opt.value}
              checked={localValue === opt.value}
              value={opt.value}
              onChange={onChangeHandler}
              name={name}
              label={opt.label}
            />
          ))}
        </fieldset>
        {errorMessage && <span className="input__error">{errorMessage}</span>}
      </div>

    </div>
  );
};

export default React.memo(RadioGroupInput);
