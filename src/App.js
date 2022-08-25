import {Routes,Route,Link} from 'react-router-dom';
import Header from './Pages/Static/Header';
import Index from './Pages/Index';
import ItemDetail from './Pages/ItemDetail';
import ItemCreate from './Pages/ItemCreate';
import ErrorPage from './Pages/Static/ErrorPage';
function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/item-detail/:id" element={<ItemDetail />} />
        <Route path="/item-create" element={<ItemCreate />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;
