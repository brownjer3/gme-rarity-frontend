// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import TopNav from './Components/Navbar';
import Footer from './Components/Footer';
import ContactContainer from './Containers/ContactContainer';
import NotFound from './Components/NotFound';
import AllCollections from './Containers/AllCollections';
import AllCollectionsContainer from './Containers/AllCollectionsContainer';
import CollectionContainer from './Containers/CollectionContainer';
import TrendingContainer from './Containers/TrendingContainer';


function App() {
  return (
    <div className="App bg-dark text-white">
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
          <Footer />
      </Router>
    </div>
  );
}

export default App;
