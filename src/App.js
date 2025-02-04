import Header from './components/Header'
import './App.css';
import TodoItem from './components/TodoItem'
import Button from './components/Button';
import './style.css';
import CounterComponent from './components/CounterComponent';
import MyComponent from './components/MyComp';
import Timer from './components/Timer';

function App() {
  return (
    <div className='todo-container'>
      <MyComponent/>
      {/* <CounterComponent/>
     <Header/>
     <TodoItem text="Eat"/>
     <TodoItem completed={true} text="Code"/>
     <TodoItem text="Sleep"/>
     <TodoItem text="Play"/>
     <TodoItem text="Repeat"/> */}
     {/* <Timer/> */}
     
     <Button/>
     
    </div>
  );
}

export default App;
