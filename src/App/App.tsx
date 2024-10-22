import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from '../components/Layout/Layout'

const router = createBrowserRouter([

  { id: 'root', path: '/', Component: Layout}
])

function App() {
  return (
    <RouterProvider router={router} fallbackElement={<p>Initial Load...</p>} />
  )
}

export default App