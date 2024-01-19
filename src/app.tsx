import { Route, Routes } from 'react-router-dom';

import Catalog from 'pages/Catalog';
import NotFound from 'pages/NotFound';
import Navbar from 'components/Navbar';
import Card from 'components/product/Card';

function App() {
    return (
        <Routes>
            <Route path='/' element={<Navbar />}>
                <Route index element={<Catalog />} />
                <Route path='/product/:id' element={<Card />} />
                <Route path='*' element={<NotFound />} />
            </Route>
        </Routes>
    );
}

export default App;
