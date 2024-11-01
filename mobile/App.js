import React from 'react';
import { Provider } from 'react-redux';
import AppStack from './srcdel/screens/App.stack';
import store from './src/store/store';
import './src/i18n';
const App = () => {
  return (
    <Provider store={store}>
      <AppStack />
   </Provider>
  );
};

export default App;