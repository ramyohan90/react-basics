import './App.css';
import RootScreen from './components/root';
import { BrowserRouter } from 'react-router-dom';
import AuthStateProvider from './states/AuthState';
function App() {

  return (
    <AuthStateProvider>
      <BrowserRouter>
        <RootScreen appName="React Solutions" />
      </BrowserRouter>
    </AuthStateProvider>
  );
}

export default App;
