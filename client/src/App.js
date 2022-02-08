import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Layouts from "./layouts/layout";

//redux setup
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import reducers from "./store/reducres";

const store = createStore(reducers, compose(applyMiddleware(thunk)));

function App() {
  return <>
    <Provider store={store}>
      <Router>
        <Navbar />
        <Layouts />
      </Router>
    </Provider>
  </>  
}

export default App;
