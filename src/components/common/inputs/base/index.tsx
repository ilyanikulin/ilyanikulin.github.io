import React, { ForwardedRef, useState } from 'react';
import classNames from 'classnames';
import bem from 'bem-ts';

import { BaseInputProps, InputValue } from './types';

import './index.scss';

const b = bem('input');

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
      CustomInput,
      required,
      id,
      checked,
      errorMessage,
    }: BaseInputProps,
    ref: ForwardedRef<HTMLDivElement>,
  ): JSX.Element => {
    const [localValue, setLocalValue] = useState<InputValue>(
      value?.toString(),
    );

    const setValue = (nextValue: InputValue) => {
      if (onChange) {
        onChange(nextValue);
      }
      setLocalValue(nextValue);
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
      onChange: setValue,
      value: localValue,
      required,
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
            {CustomInput ? (
              <CustomInput {...nativeInputProps} />
            ) : (
              React.createElement(type === 'textarea' ? 'textarea' : 'input', {
                ...nativeInputProps,
                checked,
                onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
                  nativeInputProps.onChange(type === 'checkbox' ? `${e.target.checked}` : e.target.value);
                },
              })
            )}

            {errorMessage && <span className={b('error')}>{errorMessage}</span>}
          </div>
        </label>
      </div>
    );
  },
);

export default BaseInput;
