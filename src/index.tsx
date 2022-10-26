import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ApolloClient, InMemoryCache, ApolloProvider, HttpLink } from '@apollo/client';
import { RetryLink } from '@apollo/client/link/retry';

// const directionalLink = new RetryLink().split(
//   (operation) => operation.getContext().urlName === 1,
//   new HttpLink({ uri: "http://localhost:4000/v1/graphql" }),
//   new HttpLink({ uri: "http://localhost:4000/v2/graphql" })
// );

const client = new ApolloClient({
  //uri: 'https://flyby-gateway.herokuapp.com/',
  //uri: 'https://graphql.anilist.co',
  //uri: 'https://api.github.com/graphql',
  uri: ' https://swapi-graphql.netlify.app/.netlify/functions/index',
  //link: directionalLink,
  cache: new InMemoryCache(),
});
const initValue = {
  doSomeThing: 'yes'
}
export const MyContext = createContext(initValue);
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <MyContext.Provider value={initValue}>
        <App />
      </MyContext.Provider>
    </ApolloProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
