import React, { ForwardedRef, useState } from 'react';
import classNames from 'classnames';
import bem from 'bem-ts';

import { BaseInputProps, InputValue } from './types';

import './index.scss';

const b = bem('input');

const getInitialValue = (value: InputValue, type: string) => {
  switch (type) {
    case 'date':
      return (value && typeof value === 'string') ? new Date(value).toISOString().substring(0, 10) : value;
    default:
      return value?.toString();
  }
};

const BaseInput = React.forwardRef(
  (
    {
      name = '',
      value = '',
      disabled,
      placeholder,
      className,
      label,
      onChange,
      type = 'text',
      required,
      id,
      checked,
      errorMessage,
    }: BaseInputProps,
    ref: ForwardedRef<HTMLDivElement>,
  ): JSX.Element => {
    const [localValue, setLocalValue] = useState<InputValue>(getInitialValue(value, type));
    const [checkboxValue, setCheckboxValue] = useState<boolean>(checked || false);

    const setValue = (nextValue: InputValue) => {
      if (onChange) {
        onChange(nextValue);
      }
      setLocalValue(nextValue);
      if (type === 'checkbox') {
        setCheckboxValue(!!nextValue);
      }
    };

    const nativeInputProps = {
      ref,
      type,
      name,
      placeholder: !label ? placeholder : undefined,
      className: classNames(
        b('native', { disabled }),
        b('native', [type]),
      ),
      id: id || name,
      disabled,
      required,
      onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(type === 'checkbox' ? e.target.checked : e.target.value);
      },

      checked: type === 'checkbox' ? checkboxValue : checked,
      value: localValue,
    };

    return (
      <div
        className={classNames(
          b({ disabled }),
          b([type]),
          className,
        )}
      >
        <label
          htmlFor={id || name}
          className={classNames(b('label', [type]))}
        >
          {label && (
            <div className={classNames(b('title', [type]))}>
              <span>{label}</span>
              {required && type !== 'radio' && <span className={b('required')}>*</span>}
            </div>
          )}
          <div
            className={classNames(
              b('container', [type]),
              b('container', { disabled }),
            )}
          >
            {React.createElement(type === 'textarea' ? 'textarea' : 'input', {
              ...nativeInputProps,
            })}

            {errorMessage && <span className={b('error')}>{errorMessage}</span>}
          </div>
        </label>
      </div>
    );
  },
);

export default React.memo(BaseInput);
