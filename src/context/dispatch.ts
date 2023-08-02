import React from 'react';
import {TaskBeamAction} from '@store';

type Dispatch = (action: TaskBeamAction) => void;

export const DispatchContext = React.createContext<Dispatch | undefined>(
  undefined,
);

export const DispatchContextProvider = DispatchContext.Provider;

export const DispatchContextConsumer = DispatchContext.Consumer;
