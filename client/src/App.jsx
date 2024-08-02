import {
  createBrowserRouter as Router,
  RouterProvider
} from 'react-router-dom'
import Home from './pages/Home'

const router = Router([
  {
    path: "/",
    element: <Home />
  }
])

function App() {
  return <RouterProvider router={router} />
}

export default App
