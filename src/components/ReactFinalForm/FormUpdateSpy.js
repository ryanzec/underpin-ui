import React from 'react';
import {FormSpy} from 'react-final-form';

import FormUpdater from 'src/components/ReactFinalForm/FormUpdater';

export const ForumUpdateSpy = (props) => {
  return (
    /* eslint-workaround */
    <FormSpy
      {...props}
      component={FormUpdater}
      subscription={{values: true}}
    />
  );
};

export default ForumUpdateSpy;
