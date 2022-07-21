import { Route, Routes } from 'react-router-dom';
import Home from './routes/home/home';
import Navigation from './routes/navigation/Navigation';
import SignIn from './routes/authentication/authentication';
import Shop from './routes/shop/shop';


const App = () =>{

  return (
    <Routes>
      <Route path='/' element={<Navigation />} >
        <Route index element={<Home /> } />
        <Route path='/shop' element={<Shop /> } />
        <Route path='/authentication' element={<SignIn />} />
      </Route>
    </Routes>
  );
}

export default App;
