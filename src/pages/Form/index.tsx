import React, { useContext, useState } from 'react';
import { renderField, validationForm } from './helpers';
import { JsonContext } from '../../contexts/json';

import './index.scss';

const FormPage: React.FC = () => {
  const [config] = useContext(JsonContext);
  const [savedData, setSavedData] = useState<Record<string, string | number>>({});
  const [formData, setFormData] = useState<Record<string, string | number>>({});
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
          <span className="form-page__result-field" key={key}>{`${key}: ${value.toString()}`}</span>
        ))}
      </div>
    </div>
  );
};

export default FormPage;
