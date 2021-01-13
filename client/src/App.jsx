import logo from './logo.svg';
import './App.css';

function App() {
    const ahref = () => {
        window.location.href = '/auth/google';
    }

  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={ahref}>Sign in with Google</button>
      </header>
    </div>
  );
}

export default App;
