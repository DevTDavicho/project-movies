//import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { LandingPage } from '../pages/LandingPage'; // Importa LandingPage como una exportación con nombre
import { MovieDetails } from '../pages/MovieDetails'; // Importa LandingPage como una exportación con nombre

function MyRoutes() {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<LandingPage />} />
                <Route exact path="/movies/:moviedId" element={<MovieDetails />} />
            </Routes>
        </Router>
    );
}

export default MyRoutes;

