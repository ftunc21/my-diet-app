// React kütüphanesini ve gerekli bileşenleri import ediyoruz
import React from 'react';

// react-router-dom kütüphanesinden bazı bileşenleri import ediyoruz
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

// Proje içi bileşenleri import ediyoruz
import Header from './components/Header';
import Home from './components/Home';
import CustomDiet from './components/CustomDiet';
import CreateDiet from './components/CreateDiet';
import DietPlans from './components/DietPlans';
import Recipes from './components/Recipes';
import Auth from './components/Auth';
import AddRecipe from './components/AddRecipe';
import RecipeSlider from './components/RecipeSlider';
import { AuthProvider, useAuth } from './AuthContext';
import DietResult from './components/DietResults';
import { Layout } from 'antd';
import './styles.css';
import Footer from './components/Footer';
import { RecipesProvider } from './contexts/RecipesContext';
import { DietsProvider } from './contexts/DietsContext';
import RecipeDetail from './contexts/RecipeDetail';
import AboutUs from './components/AboutUs';
import FormAboutUs from './components/FormAboutUs';


const { Content } = Layout;


const PrivateRoute = ({ children }) => {
    const { user } = useAuth();

    if (!user) {
        return <Navigate to="/auth" />;
    }

    return children;
};


const App = () => {

    return (
        <Router>
            <AuthProvider>
                <DietsProvider>
                    <RecipesProvider>
                        <Layout className="flex flex-col min-h-screen">
                            <Header />
                            <Content className="flex-grow">
                                <Routes>
                                    <Route path="/" element={<><Home /><RecipeSlider /></>} />
                                    <Route path="/create-diet" element={<PrivateRoute><CreateDiet /></PrivateRoute>} />
                                    <Route path="/diet-plans" element={<DietPlans />} />
                                    <Route path="/recipes" element={<Recipes />} />
                                    <Route path="/recipe/:id" element={<RecipeDetail />} />
                                    <Route path="/auth" element={<Auth />} />
                                    <Route path="/about-us" element={<><AboutUs /><FormAboutUs /></>} />
                                    <Route path="/add-recipe" element={<PrivateRoute><AddRecipe /></PrivateRoute>} />
                                    <Route path="/custom-diet" element={<PrivateRoute><CustomDiet /></PrivateRoute>} />
                                    <Route path="/diet-result" element={<PrivateRoute><DietResult /></PrivateRoute>} />
                                </Routes>
                            </Content>
                            <Footer />
                        </Layout>
                    </RecipesProvider>
                </DietsProvider>
            </AuthProvider>
        </Router>
    );
};

export default App;
