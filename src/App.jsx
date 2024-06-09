// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import CustomDiet from './components/CustomDiet';
import CreateDiet from './components/CreateDiet';
import DietPlans from './components/DietPlans';
import Recipes from './components/Recipes';
import Blog from './components/Blog';
import Auth from './components/Auth';
import AddRecipe from './components/AddRecipe';
import RecipeSlider from './components/RecipeSlider';
import DietSlider from './components/DietSlider';
import { AuthProvider, useAuth } from './AuthContext';
import DietResult from './components/DietResults';
import { Layout } from 'antd';
import './styles.css';
import Footer from './components/Footer';

const { Content } = Layout;

const PrivateRoute = ({ element, ...rest }) => {
    const { user } = useAuth();
    return user ? element : <Auth />;
};

const App = () => {
    return (
        <AuthProvider>
            <Router>
                <Layout className="flex flex-col min-h-screen">
                    <Header />
                    <Content className="flex-grow">
                        <Routes>
                            <Route path="/" element={<><Home /><RecipeSlider /><DietSlider/></>} />
                            <Route path="/create-diet" element={<CreateDiet />} />
                            <Route path="/diet-plans" element={<DietPlans />} />
                            <Route path="/recipes" element={<Recipes />} />
                            <Route path="/blog" element={<Blog />} />
                            <Route path="/auth" element={<Auth />} />
                            <Route path="/add-recipe" element={<AddRecipe />} />
                            <Route path="/custom-diet" element={<CustomDiet />} />
                            <Route path="/diet-result" element={<DietResult />} />
                        </Routes>
                    </Content>
                    <Footer />
                </Layout>
            </Router>
        </AuthProvider>
    );
};

export default App;
