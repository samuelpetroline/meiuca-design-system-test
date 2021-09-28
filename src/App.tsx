import React from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'

import Layout from 'views/Layout'

import Routes from 'router/Routes'

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Layout>
        <Routes />
      </Layout>
    </QueryClientProvider>
  )
}

export default App
