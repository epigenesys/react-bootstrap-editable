import React from 'react';
import { action } from '@storybook/addon-actions';
import Editable from '../src/Editable';

export default {
  title: 'Editable',
};

let sharedProps = {
  ajax: null,
  alwaysEditing: false,
  className: null,
  disabled: false,
  editText: null,
  id: null,
  initialValue: "Hello",
  isValueClickable: true,
  label: null,
  mode: "popover",
  onSubmit: null,
  onValidated: null,
  options: null,
  placement: "right",
  renderCancelElement: null,
  renderConfirmElement: null,
}

export const TextField = () => <Editable
  { ...sharedProps }
  type="textfield"
/>;

export const TextArea = () => <Editable
  {...sharedProps}
  type="textarea"
/>;

export const Select = () => <Editable
  {...sharedProps}
  type="select"
  initialValue="hello"
  options={[
    { label: 'Hello', value: 'hello' },
    { label: 'Mellow', value: 'mellow' },
    { label: 'Yellow', value: 'yell' }
  ]}
/>;

export const Ajax = () => <Editable
  {...sharedProps}
  type="textfield"
  validate={(value) => {}}
  ajax={(xhr, validValue, id) => { console.log(validValue); console.log(id) }}
/>;
