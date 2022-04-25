import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './Home.js';
import GetPosturized from './projects/GetPosturized.js';
import Navbar from './components/Navbar.js';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/get-posturized' element={<GetPosturized/>}/>
        </Routes>
      </BrowserRouter>
    );
  }
  /*
  const pages = [
    {
      name: 'Home',
      element: <Home/>,
      path: '/',
    },
    {
      name: 'GetPosturized',
      element: <GetPosturized/>,
      path: '/get-posturized',
    }
  ];

  const routeComponents = pages.map(({path, element}) => (
    <Route path={path} element={{element}}/> // <-- exact prop to exactly match paths
  ));

    return (
      <Router>
        <Navbar pages={pages}/>
        <div>
          <Routes>
            {routeComponents}
          </Routes>
        </div>
      </Router>
    );
    */
}

export default App;
