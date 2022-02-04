import React, { useState } from 'react';
import { Config } from 'src/types/config';

export type JsonContextValue = Config[];

type JsonContextType = [JsonContextValue, (cfg: JsonContextValue) => void];

const EXAMPLE: JsonContextValue = [
  {
    type: 'checkbox',
    label: 'checkbox',
    required: true,
    defaultValue: true,
    name: 'checkbox',
  },
  {
    type: 'radio',
    label: 'radio',
    required: true,
    name: 'radio',
    options: [
      {
        value: 'one',
        label: 'one',
      },
      {
        value: 'two',
        label: 'two',
      },
    ],
  },
  {
    type: 'date',
    label: 'date',
    required: true,
    defaultValue: '2022-02-04T12:13:25.679Z',
    name: 'date',
    placeholder: 'Enter value',
  },
  {
    type: 'number',
    label: 'number',
    required: true,
    name: 'number',
    placeholder: 'Enter number value',
  },
  {
    type: 'textarea',
    label: 'textarea',
    disabled: true,
    name: 'textarea',
    placeholder: 'Enter value',
  },
  {
    type: 'text',
    label: 'text',
    name: 'text',
    placeholder: 'Enter value',
  },
  {
    type: 'button',
    label: 'Send',
    submit: true,
  },
];

export const JsonContext = React.createContext<JsonContextType>([EXAMPLE, () => {}]);

const JsonProvide: React.FC = ({ children }) => {
  const cfgState = useState<JsonContextValue>(EXAMPLE);

  return (
    <JsonContext.Provider value={cfgState}>
      {children}
    </JsonContext.Provider>
  );
};

export default JsonProvide;
