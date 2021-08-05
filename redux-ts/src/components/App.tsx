import React from 'react';
import { Provider } from 'react-redux'

import { store } from '../state'


import RepositoriesList from './RepositoriesList';




const App: React.FC  = () => {
  return (
    <Provider store={ store }>
      <div>
        <h1>Search for a NPM Package</h1>
        <RepositoriesList />
      </div>
    </Provider>
  )
}

export default App