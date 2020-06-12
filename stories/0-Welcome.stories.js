import React from 'react';
import { action } from '@storybook/addon-actions';
import Editable from '../src/Editable';

export default {
  component: Editable,
  title: 'Editable',
};

export const text = () => <Editable
  ajax={null}
  alwaysEditing={false}
  className={null}
  disabled={false}
  editText="Edit"
  id={null}
  initialValue="Hello World!"
  isValueClickable={false}
  label={null}
  mode="inline"
  onSubmit={null}
  onValidated={null}
  options={null}
  placement="top"
  renderCancelElement={null}
  renderConfirmElement={null}
  showText
  type="textfield"
  validate={null}
/>;
