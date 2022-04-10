// import Parent from './components/Parent';
// import Child from './components/Child';
import Counter from './components/Counter';
import ErrorBoundary from './components/ErrorBoundary';
import FormTest from './components/FormsTest';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <FormTest />
      {/*<ErrorBoundary>
          <Counter /> 
        </ErrorBoundary>
        <ErrorBoundary>
          <Counter /> 
        </ErrorBoundary>*/}
      </header>
    </div>
  );
}

export default App;
