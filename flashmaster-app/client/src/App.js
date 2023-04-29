//This is importing react 
import React from 'react';
//This imports the styling for the application
import './App.css';
//This imports ApolloClient, InMemory Cache, ApolloProvider, and createHttpLink
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
//Deleted Navigate because it is not being used 

import Home from './pages/Home'; //imports home page
import Teacher from './pages/Teacher/Teacher'; //imports teacher file 
import Student from './pages/Student/Student' //imports student file
import Signup from './pages/Signup'; //imports signup page
import Login from './pages/Login'; //imports login
import Header from './components/Header'; //imports header component
import Footer from './components/Footer'; //imports footer component
// import Donation from '../src/pages/Teacher/Donation';
// import Gallery from '../src/pages/Teacher/Gallery';
// import cartIndex from '../src/pages/Teacher/Cart/index';
// import cartResolvers from '../src/pages/Teacher/Cart/resolvers';
// import cartServer from '../src/pages/Teacher/Cart/server';
// import Collections from '../src/pages/Student/Collections';

//this is a function for the routes being protected for different roles
function ProtectedRoute({ element: Element, role }) {
  //user role is being defined by grabbing the role in local storage
  const userRole = localStorage.getItem('role');
  //this is a conditional that checks is the userRole has been defined, if not, redirected 
  if (userRole !== role) {
    return <Route to="/" />;
  }
  //This checks if the role is a teacher, if not set to student
  const Component = role === 'teacher' ? Teacher : Student;
  //returned to the route for each role
  return <Route element={<Component />} />;
}

//creating link for graphql
const httpLink = createHttpLink({
  uri: '/graphql',
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
              
              <ProtectedRoute 
               path="/teachers/:teacherId" 
               element={<Teacher />}
               role="teacher"
              />
              
              
              <ProtectedRoute 
                path="/students/:studentId" 
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
            </Route>
          </div>
          <Footer />
        </div>
      </Route>
    </ApolloProvider>
  );
}

export default App;
