import logo from './logo.svg';
import './App.css';
import { Header } from './components/Header';
import { useDispatch,useSelector } from 'react-redux';
// import { fetchPosts } from './components/redux/postActions';
import { fetchData } from './redux toolkit/postsReducer';
import { useEffect,useState } from 'react';
import Inner from './components/Inner';
import Another from './components/Another';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import { Route, Routes } from 'react-router';

function App() {
  const dispatch = useDispatch();
  const [select,setSelect] = useState(false);
  
  

  useEffect(() => {
   
    dispatch(fetchData());
  }, []);

  const {loading,data,error} = useSelector(state => state.posts);
  // console.log(1)
  // console.log(data);
  return (
   <>
   <Router>
      <Header select={select} setSelect={setSelect}/>
      <Routes>
        <Route path="/" element={<Inner data={data} setSelect={setSelect}/>} />
        <Route path="/item/:id" element={<Another />} />
      </Routes>
    </Router>
   </>
  );
}

export default App;
