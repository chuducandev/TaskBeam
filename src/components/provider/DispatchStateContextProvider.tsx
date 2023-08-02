import {getTaskBeamState, taskBeamReducer} from '@store';
import React, {useReducer} from 'react';
import {useConst} from '@hooks';
import {DispatchContextProvider, StateContextProvider} from '@context';
import {DispatchStateContextProviderProps} from './DispatchStateContextProvider.types';

export const DispatchStateContextProvider: React.FC<
  DispatchStateContextProviderProps
> = ({children}: DispatchStateContextProviderProps) => {
  const initialState = useConst(getTaskBeamState);
  const [state, dispatch] = useReducer(
    taskBeamReducer(initialState),
    initialState,
  );

  return (
    <DispatchContextProvider value={dispatch}>
      <StateContextProvider value={state}>{children}</StateContextProvider>
    </DispatchContextProvider>
  );
};
