import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCollections } from './Store/Slices/collectionsSlice';
import TopNav from './Components/TopNav';
import Footer from './Components/Footer';
import HomeContainer from './Containers/HomeContainer';
import ContactContainer from './Containers/ContactContainer';
import AllCollections from './Containers/AllCollections';
import AllCollectionsContainer from './Containers/AllCollectionsContainer';
import CollectionContainer from './Containers/CollectionContainer';
import CollectionContainer2 from './Containers/CollectionContainer2';
import { NotFound, LoadingScreen, Stars } from './Components/Components';

const App = () => {

  const dispatch = useDispatch();
  const {loading} = useSelector((state) => state.collections);

  useEffect(() => {
    dispatch(fetchCollections())
  }, [])

  const loadingContent = () => {
    return (
      <LoadingScreen />
    )
  }

  const appContent = () => {
    return (
      <Router>
        <TopNav />
        <Stars />
          <Routes>
            <Route path="/" element={<HomeContainer />} />
            <Route path="collections" element={<AllCollections />}>
              <Route index element={<AllCollectionsContainer />} />
              <Route path=":collectionSlug" element={<CollectionContainer2 />} />
            </Route>
            <Route path='contact' element={<ContactContainer />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
      </Router>
    )
  }

  return (
    <div className="App bg-dark text-white d-flex flex-column min-vh-100">
      {loading ? loadingContent() : appContent()}
    </div>
  );
}

export default App;
