import { Route, Routes } from 'react-router-dom';
import Home from 'pages/Home';
import Catalog from 'pages/Catalog';
import NotFound from 'pages/NotFound';
import Navbar from 'components/Navbar';
import Card from 'components/product/Card';

function App() {
    return (
        <Routes>
            <Route path='/' element={<Navbar />}>
                <Route index element={<Home />} />
                <Route path='catalog' element={<Catalog />} />
                <Route path='catalog/product/:id' element={<Card />} />
                <Route path='*' element={<NotFound />} />
            </Route>
        </Routes>
    );
}

export default App;
