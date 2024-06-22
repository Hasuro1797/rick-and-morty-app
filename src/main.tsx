import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
import { NextUIProvider } from '@nextui-org/react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.tsx'
import './index.css'

const client = new ApolloClient({
  uri: 'https://rickandmortyapi.com/graphql',
  cache: new InMemoryCache(),
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ApolloProvider client={client}>
    <NextUIProvider >
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </NextUIProvider>
  </ApolloProvider>,
)
{/* <React.StrictMode>
    <ApolloProvider client={client}>
      <NextUIProvider >
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </NextUIProvider>
    </ApolloProvider>
  </React.StrictMode> */}