import React from "react";
import AppProvider from "./providers/AppProvider/";

import { Provider as ReduxProvider } from 'react-redux'
import { storeDeclaration } from './redux/InitialStore'

function App() {
  return (
    <ReduxProvider store={ storeDeclaration }>
      <AppProvider />
    </ReduxProvider>
  );
}

export default App;
