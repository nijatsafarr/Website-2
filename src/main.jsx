import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { createRouter, RouterProvider } from '@tanstack/react-router'
import { routeTree } from './routeTree.gen'
import './index.css'
import './i18n.js'
import 'i18next'
import App from './App.jsx'

const queryClient = new QueryClient()
const router = createRouter({
  routeTree
})
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <QueryClientProvider client={queryClient}>  
        <RouterProvider router={router} />
        </QueryClientProvider>
  </StrictMode>
)
