import React from 'react';
import './App.css';
import Header from './components/Header';
import HomePage from './components/HomePage';
import Inquiries from './components/Inquiries';
import InquireForm from './components/InquireForm';
import NotFoundPage from './components/NotFoundPage';
import Courses from './components/Courses';
import {BrowserRouter, Route, Routes} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <div className="container">
          <Routes>
            <Route path="/" element={<HomePage />}  />
            <Route path="/courses" element={<Courses />}  />
            <Route path="/inquire/:id" element={<InquireForm />}  />
            <Route path="/inquiries" element={<Inquiries />}  />
            <Route path="*" element={<NotFoundPage />}  />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
    
  );
}

export default App;
