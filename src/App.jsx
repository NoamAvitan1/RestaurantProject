import AppRoutes from './routes/AppRoutes'
import  store  from './Store'
import { Provider } from 'react-redux'

function App() {
  return (
    <div className="App">
      <Provider store={store}>
      <AppRoutes/>
      </Provider>
    </div>
  )
}

export default App
