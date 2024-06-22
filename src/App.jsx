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
import DietSlider from './components/DietSlider';
import { AuthProvider, useAuth } from './AuthContext';  // AuthProvider ve useAuth'u import ediyoruz
import DietResult from './components/DietResults';
import { Layout } from 'antd';  // Ant Design Layout bileşenini import ediyoruz
import './styles.css';  // Stil dosyasını import ediyoruz
import Footer from './components/Footer';
import { RecipesProvider } from './contexts/RecipesContext';
import { DietsProvider } from './contexts/DietsContext';
import RecipeDetail from './contexts/RecipeDetail';

// Layout bileşeninden Content bileşenini çıkartıyoruz
const { Content } = Layout;

// Özel route bileşeni oluşturuyoruz, kullanıcı giriş yapmamışsa auth sayfasına yönlendiriyoruz
const PrivateRoute = ({ children }) => {
    const { user } = useAuth();

    if (!user) {
        return <Navigate to="/auth" />;
    }

    return children;
};

// App bileşenini tanımlıyoruz
const App = () => {
    // Bileşenin render edileceği JSX yapısını döndürüyoruz
    return (
        <Router>
            <AuthProvider>
                <DietsProvider>
                    <RecipesProvider>
                        <Layout className="flex flex-col min-h-screen">
                            <Header />
                            <Content className="flex-grow">
                                <Routes>
                                    <Route path="/" element={<><Home /><RecipeSlider /><DietSlider /></>} />
                                    <Route path="/create-diet" element={<PrivateRoute><CreateDiet /></PrivateRoute>} />
                                    <Route path="/diet-plans" element={<DietPlans />} />
                                    <Route path="/recipes" element={<Recipes />} />
                                    <Route path="/recipe/:id" element={<RecipeDetail />} />
                                    <Route path="/auth" element={<Auth />} />
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

// Bileşeni dışa aktarıyoruz
export default App;
