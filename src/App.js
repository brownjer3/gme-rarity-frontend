// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import TopNav from './Components/Navbar';
import TrendingContainer from './Containers/TrendingContainer';
import CollectionContainer from './Containers/CollectionContainer';
import AllCollectionsContainer from './Containers/AllCollectionsContainer';
import NotFound from './Components/NotFound';
import AllCollections from './Containers/AllCollections';
import ContactContainer from './Containers/ContactContainer'

function App() {
  return (
    <div className="App">
      <Router>
        <TopNav />

          <Routes>
            <Route path="/" element={<TrendingContainer />} />
            <Route path="collections" element={<AllCollections />}>
              <Route index element={<AllCollectionsContainer />} />
              <Route path=":collectionName" element={<CollectionContainer />} />
            </Route>
            <Route path='contact' element={<ContactContainer />} />
            <Route path="*" element={<NotFound />} />
          </Routes>

      </Router>
    </div>
  );
}

export default App;
