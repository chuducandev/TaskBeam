import React from 'react';
import {DispatchContext} from '@context';

export const useDispatch = () => {
  const context = React.useContext(DispatchContext);
  if (context === undefined) {
    throw new Error();
  }
  return context;
};
