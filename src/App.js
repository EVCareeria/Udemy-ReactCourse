import { Route, Routes } from 'react-router-dom';
import Home from './routes/home/home';
import Navigation from './routes/navigation/Navigation';
import SignIn from './routes/authentication/authentication';
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



const Shop = () => {
  return(
    <h1>I am shop page</h1>
  )
}
