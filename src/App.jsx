// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import CreateDiet from './components/CreateDiet';
import DietPlans from './components/DietPlans';
import Recipes from './components/Recipes';
import Blog from './components/Blog';
import Auth from './components/Auth';
import { AuthProvider, useAuth } from './AuthContext';

const PrivateRoute = ({ element, ...rest }) => {
    const { user } = useAuth();
    return user ? element : <Auth />;
};

const App = () => {
    return (
        <AuthProvider>
            <Router>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/create-diet" element={<PrivateRoute element={<CreateDiet />} />} />
                    <Route path="/diet-plans" element={<PrivateRoute element={<DietPlans />} />} />
                    <Route path="/recipes" element={<PrivateRoute element={<Recipes />} />} />
                    <Route path="/blog" element={<PrivateRoute element={<Blog />} />} />
                    <Route path="/auth" element={<Auth />} />
                </Routes>
            </Router>
        </AuthProvider>
    );
};

export default App;
