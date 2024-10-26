import { RouterProvider } from "react-router-dom";
import { routers } from "./routes";
import { ApolloProvider } from "@apollo/client";
import { client } from "@utils";
import { Provider } from "react-redux";
import store from './redux';

function App() {
  return (
    <ApolloProvider client={client}>
      <Provider store={store}>
        <RouterProvider router={routers} />
      </Provider>
    </ApolloProvider>
  );
}

export default App;
