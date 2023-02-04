import React from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import SignUpForm from './components/SignUpFprm';
import Header from "./components/Header";
import SumNumbers from "./components/SumNumbers";
import TaskScreen from "./components/TaskScreen";
import CounterComponent from './components/CounterComponent';
import Photos from "./components/Photos";
import higherOrderComponent from './components/Hoc';
const App = () => {
  const TestApp = higherOrderComponent(() => {
    return <div>Test App</div>;
  })
  return (
    <div>
      <BrowserRouter>
      <Header />
      <Routes>
          <Route path={"/"} element={<h1>This is onHome page</h1>} />
          <Route path={"/contact"} element={<h1>This is contact page</h1>} />
          <Route path={"/about"} element={<h1>About Page</h1>} />
          <Route path={"/signup"} element={<SignUpForm />} >
            <Route path={"sum"} element={<SumNumbers />} />
        </Route>
        <Route path={"/tasks"} element={<TaskScreen />} />
        <Route path={"/counter"} element={<CounterComponent />} />
        <Route path={"/photos"} element={<Photos/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
