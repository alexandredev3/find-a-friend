import { RouterProvider } from 'react-router-dom'

import { router } from 'shared/routes'
import { ThemeProvider } from 'shared/contexts/ThemeProvider'

function App() {
  return (
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  )
}

export default App
