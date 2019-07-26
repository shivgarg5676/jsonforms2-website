import React from 'react';
import { Provider } from 'react-redux';
import { JsonFormsDispatch, JsonFormsReduxContext } from '@jsonforms/react';
import { createJsonFormsStore } from '../../../../common/store';
import { Demo } from '../../../../components/common';

export const input = {
  schema: {
    properties: {
      name: { type: 'string' }
    }
  },
  uischema: {
    type: 'Control',
    scope: '#/properties/name'
  },
  data: {
    name: 'Ottgar'
  }
};

const store = createJsonFormsStore({
  data: input.data,
  schema: input.schema,
  uischema: input.uischema
});

export const Example = () => (
  <Provider store={store}>
    <JsonFormsReduxContext>
      <Demo
        js={() => {
          return (
            <JsonFormsDispatch
              schema={input.schema}
              uischema={input.uischema}
            />
          );
        }}
        schema={input.schema}
        uischema={input.uischema}
      />
    </JsonFormsReduxContext>
  </Provider>
);

export const customLabelInput = {
  schema: {
    properties: {
      name: { type: 'string' }
    }
  },
  uischema: {
    type: 'Control',
    scope: '#/properties/name',
    label: 'First name'
  },
  data: {
    name: 'Ottgar'
  }
};

const storeWithCustomLabel = createJsonFormsStore({
  data: customLabelInput.data,
  schema: customLabelInput.schema,
  uischema: customLabelInput.uischema
});

export const ExampleWithCustomLabel = () => (
  <Provider store={storeWithCustomLabel}>
    <JsonFormsReduxContext>
      <Demo
        js={() => {
          return (
            <JsonFormsDispatch
              schema={customLabelInput.schema}
              uischema={customLabelInput.uischema}
            />
          );
        }}
        schema={customLabelInput.schema}
        uischema={customLabelInput.uischema}
      />
    </JsonFormsReduxContext>
  </Provider>
);
