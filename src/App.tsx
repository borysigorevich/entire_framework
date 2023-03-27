import {ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import {Home} from "./pages";

const client = new ApolloClient({
    cache: new InMemoryCache(),
    uri: 'https://test-task.entireframework.com/cms/graphql'
})

const router = createBrowserRouter([
    {
        path: '/*',
        element: <Home/>
    }
])

function App() {

    return (
        <ApolloProvider client={client}>
            <RouterProvider router={router}/>
        </ApolloProvider>
    )
}

export default App
