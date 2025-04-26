import TodoList from './components/TodoList';
import Footer from './components/Footer';
import './App.css';
import TodoForm from './components/TodoForm';
import Header from './components/Header';

function App() {
  return (
    <div className="app-container">
      <Header />
      <main className="main-content">
        <div className="todo-container">
          <TodoForm />
          <TodoList />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
