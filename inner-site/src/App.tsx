import './App.css';
import Desktop from './components/os/Desktop';
import { HashRouter } from 'react-router-dom';

function App() {
    return (
        <HashRouter>
            <div className="App">
                <Desktop />
            </div>
        </HashRouter>
    );
}

export default App;
