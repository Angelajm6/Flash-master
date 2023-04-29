import React, { useState, useEffect } from 'react';
import './App.css';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Teacher from './pages/Teacher/Teacher';
import Student from './pages/Student/Student';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Header from './components/Header';
import Footer from './components/Footer';

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  const [userRole, setUserRole] = useState(null);

  useEffect(() => {
    const role = localStorage.getItem('role');
    setUserRole(role);
  }, []);

  return (
    <ApolloProvider client={client}>
      <Route>
        <div className="flex-column justify-flex-start min-100-vh">
          <Header />
          <div className="container">
            <Route>
              <Route
                path="/"
                element={<Home />}
              />
              <Route
                path="/login"
                element={<Login />}
              />
              <Route
                path="/signup"
                element={<Signup />}
              />
              <Route
                path="/teachers/:teacherId"
                element={<Teacher />}
              />
              <Route
                path="/students/:studentId"
                element={<Student />}
              />
              <Route
                path="/me"
                element={
                  userRole === 'admin' ? <Teacher /> : <Student />
                }
              />
            </Route>
          </div>
          <Footer />
        </div>
      </Route>
    </ApolloProvider>
  );
}

export default App;
