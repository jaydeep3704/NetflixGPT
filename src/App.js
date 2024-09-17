
import React from 'react'
import Body from './pages/Body'

import { Provider } from 'react-redux'
import store from './store/store.js'

const App = () => {




  
   


  return (
   <Provider store={store}>
      <Body/>
   </Provider>
  )
}

export default App
