import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Import components
import Navbar from "./components/Navbar";

// Import pages
import Home from './pages/Home';
import SingleCountry from './pages/SingleCountry';
import Credit from './pages/Credit';
import Secret from './pages/Secret';

import { Container } from 'react-bootstrap';

const App = () => {
    return (
        <Container>
            <Router>
                <Navbar />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/country/:name' element={<SingleCountry />} />
                    <Route path='/credit' element={<Credit/>} /> 
                    <Route path='/secret' element={<Secret/>} /> 
                </Routes>
            </Router>
        </Container>
    );
};

export default App;
