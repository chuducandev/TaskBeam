import React from 'react';
import {Home} from '@screens';
import {DispatchStateContextProvider} from '@components';

const App: React.FC = () => {
  return (
    <DispatchStateContextProvider>
      <Home />
    </DispatchStateContextProvider>
  );
};

export default App;
