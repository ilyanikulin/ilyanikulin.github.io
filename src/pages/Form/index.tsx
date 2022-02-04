import React, { useContext, useState } from 'react';

import { ConfigContext } from 'src/contexts/config';
import Button from 'src/components/common/button';

import {
  FormValue, getInitialValues, renderField, validationForm,
} from './helpers';

import './index.scss';

const FormPage: React.FC = () => {
  const [config] = useContext(ConfigContext);
  const [savedData, setSavedData] = useState<FormValue>({});
  const [formData, setFormData] = useState<FormValue>(getInitialValues(config.items));
  const [errors, setErrors] = useState<Record<string, string>>({});

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { success, errors: nextErrors } = validationForm(config.items, formData);
    if (success) {
      setSavedData(formData);
    }
    setErrors(nextErrors);
  };

  const onChange = (name: string, value: string | number) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="form-page">
      <div className="form-page__col">
        {config.title && <h3>{config.title}</h3>}
        <form onSubmit={onSubmit} className="form-page__form" noValidate>
          <div className="form-page__fields">
            {Array.isArray(config.items) && config.items.map((conf) => renderField(conf, (val) => {
              onChange(conf.name, val);
            }, errors))}
          </div>

          <div className="form-page__buttons">
            {Array.isArray(config.buttons) && config.buttons.map((button) => (
              <Button key={button.label.replaceAll(' ', '_')} {...button} />
            ))}
          </div>
        </form>
      </div>

      <div className="form-page__col form-page__col--result">
        <h3>Preview of form</h3>
        <div className="form-page__preview">
          {Object.entries(savedData).map(([key, value]) => (
            !!value.toString() && <span className="form-page__result-field" key={key}>{`${key}: ${value.toString()}`}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FormPage;
