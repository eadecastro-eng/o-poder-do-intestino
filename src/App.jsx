import React from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import SalesPage from './pages/SalesPage';




function App() {
    return (
        <Router>
            <ScrollToTop />
            <Routes>
                <Route path="/" element={<SalesPage />} />
            </Routes>
        </Router>
    );
}




export default App;