import React from 'react';
import {StateContext} from '@context';

export const useGlobalState = () => {
  const context = React.useContext(StateContext);
  if (context === undefined) {
    throw new Error();
  }
  return context;
};
