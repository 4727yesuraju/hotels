import { BrowserRouter,Routes,Route, Link } from 'react-router-dom';
import Page from './components/Page';
import Card from './components/Card';
import Property from './components/Property';

function App() {
  return (
    <BrowserRouter>
       <Routes>
          <Route path="/" element={<Link to="/properties">goto</Link>} />
          <Route path="/properties" element={<Page />} />
          <Route path="/properties/:id" element={<Property />} />
       </Routes>
    </BrowserRouter>
  );
}

export default App;
