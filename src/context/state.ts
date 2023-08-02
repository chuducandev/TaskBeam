import React from 'react';
import {TaskBeamState} from '@store';
import {MockUpTasks} from '@mocks';

export const StateContext = React.createContext<TaskBeamState>({
  tasks: MockUpTasks,
});

export const StateContextProvider = StateContext.Provider;

export const StateContextConsumer = StateContext.Consumer;
