import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import Header from "./components/Header/Header";
import CartPage from "./pages/CartPage/CartPage";
import ProductDetailPage from "./pages/ProductDetailPage/ProductDetailPage";
import "./App.css"; // This can include global styles if necessary
import HomePage from "./pages/HomePage/HomePage";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// Initialize Query Client
const queryClient = new QueryClient();

const App = () => {
  return (
    <CartProvider>
      <QueryClientProvider client={queryClient}>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/product/:id" element={<ProductDetailPage />} />
          </Routes>
        </Router>
      </QueryClientProvider>
    </CartProvider>
  );
};

export default App;
