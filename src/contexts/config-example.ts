import { Config } from 'src/types/config';

export const CONFIG_EXAMPLE: Config = {
  title: 'Form title',
  items: [
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
  ],
  buttons: [
    {
      type: 'button',
      label: 'Send',
      submit: true,
    },
  ],
};
