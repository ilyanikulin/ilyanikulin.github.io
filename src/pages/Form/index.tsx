import React, { useContext, useState } from 'react';
import { JsonContext } from 'src/contexts/json';

import {
  FormValue, getInitialValues, renderField, validationForm,
} from './helpers';

import './index.scss';

const FormPage: React.FC = () => {
  const [config] = useContext(JsonContext);
  const [savedData, setSavedData] = useState<FormValue>({});
  const [formData, setFormData] = useState<FormValue>(getInitialValues(config));
  const [errors, setErrors] = useState<Record<string, string>>({});

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { success, errors: nextErrors } = validationForm(config, formData);
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
      <div>
        <form onSubmit={onSubmit} className="form-page__form" noValidate>
          {Array.isArray(config) && config.map((conf) => renderField(conf, (val) => {
            if ('name' in conf) onChange(conf.name, val);
          }, errors))}
        </form>
      </div>

      <div className="form-page__result">
        {Object.entries(savedData).map(([key, value]) => (
          !!value.toString() && <span className="form-page__result-field" key={key}>{`${key}: ${value.toString()}`}</span>
        ))}
      </div>
    </div>
  );
};

export default FormPage;
