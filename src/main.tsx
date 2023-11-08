import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './pages/Home';

import Header from './components/Header';
import Footer from './components/Footer';

import './style/index.css';
import '@radix-ui/themes/styles.css';


const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<BrowserRouter>
		<Header />
  		<Routes>
				<Route path="/" element={<Home/>}></Route>
		</Routes>
		<Footer />
	</BrowserRouter>
)
