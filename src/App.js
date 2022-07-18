// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TopNav from './Components/Navbar';
import TrendingContainer from './Containers/TrendingContainer';
import CollectionContainer from './Containers/CollectionContainer';
import AllCollectionsContainer from './Containers/AllCollectionsContainer';

function App() {
  return (
    <div className="App">
    <Router>
      <TopNav />

        <Routes>
          <Route path="/" element={<TrendingContainer />} />
          <Route path="/collectionPage" element={<CollectionContainer />} />
          <Route path="all" element={<AllCollectionsContainer />} />
        </Routes>
          

          {/* <Route exact path="/all" component={CollectionContainer}/> */}
          {/* <Route exact path="/collectionPage" component={CollectionContainer}/> */}
          {/* <Route exact path="/new" component={EventFormContainer} /> */}
        
          </Router>
    </div>
  );
}

export default App;
