import React, { useState } from 'react';
import BaseInput from '../base';
import { CommonBaseInputProps } from '../base/types';

import './index.scss';

export type RadioOption = {
  label: string;
  value: string;
};

export type RadioInputProps = CommonBaseInputProps & {
  options: RadioOption[]
};

const RadioInput: React.FC<RadioInputProps> = ({
  options,
  required,
  name,
  onChange,
  value,
  ...props
}) => {
  const [localValue, setLocalValue] = useState<string>(value?.toString() || '');

  const onChangeHandler = (val: string) => {
    if (onChange) {
      onChange(val);
    }
    setLocalValue(val);
  };

  return (
    <BaseInput
      {...props}
      type="custom"
      name={name}
      required={required}
      render={(inputProps) => (
        <fieldset name={name} className="radio__fieldset">
          {options.map((opt) => (
            <BaseInput
              {...inputProps}
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
      )}
    />
  );
};

export default React.memo(RadioInput);
