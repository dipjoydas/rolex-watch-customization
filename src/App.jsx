
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import Home from './components/Home/Home'
import Configure from './components/Configure/Configure'
import Checkout from './components/Checkout/Checkout'

function App() {
  const router = createBrowserRouter([
    {
      path:'/',
      element:<Home></Home>
    },
    {
      path:'/configure/:selected',
      element:<Configure></Configure>
    },{
      path:'/checkout',
      element:<Checkout></Checkout>
    }
    
  ])
 

  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
     
    </div>
  )
}

export default App
