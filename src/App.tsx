import './style.min.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import HomeView from './views/HomeView';
import ProductsView from './views/ProductsView';
import ContactsView from './views/ContactsView';
import NotFoundView from './views/NotFoundView';
import ProductDetailsView from './views/ProductDetailsView';
import  ProductProvider from './contexts/ProductContext'
import {ShoppingCartProvider} from './contexts/ShoppingCartContext';
import  SignInView  from './views/SignInView';
import SignUpFormSection from './sections/SignUpFormSection';


function App() {
  return (
    <BrowserRouter>
      <ShoppingCartProvider>
      <ProductProvider>
    <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="products" element={<ProductsView />} />
        <Route path="products/:id" element={<ProductDetailsView />} />
        <Route path="contacts" element={<ContactsView />} />
        <Route path="*" element={<NotFoundView />} />
        <Route path="signin" element={<SignInView />} />
        <Route path="SignUpFormSection" element={<SignUpFormSection />} />
      </Routes>
      </ProductProvider>
      </ShoppingCartProvider>
    </BrowserRouter>
  );
}

export default App;