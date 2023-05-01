import React, { useState, useEffect } from 'react';
import './App.css';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
//This is importing setContext
import { setContext } from '@apollo/client/link/context';
//This imports BrowserRouter for routing to other pages in the application
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home'; //imports home page
import Teacher from './pages/Teacher/Teacher'; //imports teacher file 
import Student from './pages/Student/Student' //imports student file
import Signup from './pages/Signup'; //imports signup page
import Login from './pages/Login'; //imports login
import Header from './components/Header'; //imports header component
import Footer from './components/Footer'; //imports footer component
import Flash from './components/FlashCard/index';
// import Donation from '../src/pages/Teacher/Donation';
// import Gallery from '../src/pages/Teacher/Gallery';
// import cartIndex from '../src/pages/Teacher/Cart/index';
// import cartResolvers from '../src/pages/Teacher/Cart/resolvers';
// import cartServer from '../src/pages/Teacher/Cart/server';
// import Collections from '../src/pages/Student/Collections';

const httpLink = createHttpLink({
  uri: 'http://localhost:3001/graphql',
});

//function that grabs token from database to check if the user is authorized 
const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});
//creating a new instance of apollo client
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
      <Router>
        <div className="flex-column justify-flex-start min-100-vh">
          <Header />
          <div className="container">
            <Routes>
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
              <Route
                path="/teachers/:teacherId/flash"
                element={<Flash/>}
              />
            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
    </ApolloProvider>
    
  );
}

export default App;
