import { Route, Routes } from 'react-router-dom';
import Home from './Components/Routers/Home';
import About from './Components/Routers/About';
import Navigate from './Components/Routers/Navigate';
import Order from './Components/Routers/Order';
// import UsingAsync from './Components/UseReducer/DataFetching/UsingAsync';
// import UsingReducerAxios from './Components/UseReducer/DataFetching/UsingReducerAxios';
// import MultipleReducer from './Components/UseReducer/MultipleReducer';
// import ReducerAndContext from './Components/UseReducer/Reducer-with-Context/ReducerAndContext';
// import ReducerObjCounter from './Components/UseReducer/ReducerObjCounter';
// import ContextFunction from './Components/UseContext/ContextFunction';
// import ReducerCounter from './Components/UseReducer/ReducerCounter';
// import DataFetching from './Components/UseEffect/DataFetching';
// import Display from './Components/UseEffect/Display';
// import IntervalClass from './Components/UseEffect/IntervalClass';
// import IntervalFunction from './Components/UseEffect/IntervalFunction';
// import UseEffectClass from './Components/UseEffect/UseEffectClass';
// import UseEffectFunction from './Components/UseEffect/UseEffectFunction';

function App() {

  return (
    <div className="App">
      {/* <UseEffectClass />
      <UseEffectFunction />
      <Display />
      <IntervalClass />
      <IntervalFunction /> 
      <DataFetching/> 
     <ContextFunction /> 
      <ReducerCounter/>
      <ReducerObjCounter/>
      <MultipleReducer/> 
      <ReducerAndContext/>
      <UsingReducerAxios />
      <UsingAsync /> */}

      <Navigate />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='order' element={<Order />} />
      </Routes>
    </div>
  );
}

export default App;
