// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCollections } from './Store/Slices/collectionsSlice';
import TopNav from './Components/TopNav';
import Footer from './Components/Footer';
import ContactContainer from './Containers/ContactContainer';
import NotFound from './Components/NotFound';
import AllCollections from './Containers/AllCollections';
import AllCollectionsContainer from './Containers/AllCollectionsContainer';
import CollectionContainer from './Containers/CollectionContainer';
import TrendingContainer from './Containers/TrendingContainer';


function App() {

  const dispatch = useDispatch();
  const {data} = useSelector((state) => state.collections);

  useEffect(() => {
    dispatch(fetchCollections())
  }, [])

  const renderItems = () => {
    if (data.length > 0) {
      return data.map(collection => 
        <p className='text-white'>{collection.name}</p>
      )
    } else {
      return <div>nothing yet</div>
    }
  }

  return (
    <div className="App bg-dark text-white d-flex flex-column min-vh-100">
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
