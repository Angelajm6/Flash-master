
import React from 'react';
import './App.css';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navigate } from 'react-router-dom';

import Home from './pages/Home';
import Teacher from './pages/Teacher/Teacher';
import Student from './pages/Student/Student';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Header from './components/Header';
import Footer from './components/Footer';

function ProtectedRoute({ element: Element, role }) {
  const userRole = localStorage.getItem('role');
  if (userRole !== role) {
    return <Navigate to="/" />;
  }
  const Component = role === 'teacher' ? Teacher : Student;
  return <Route element={<Component />} />;
}


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
              
              <ProtectedRoute 
               path="/me" 
               element={<Teacher />}
               role="teacher"
              />
              
              
              <ProtectedRoute 
                path="/me" 
                element={<Student />}
                role="student"
                />
              
              <Route 
                path="/teachers/:teacherId"
                element={<Teacher />}
              />
              <Route
              path="/students/:studentId"
              element={<Student />}
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
