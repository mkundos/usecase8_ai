import { Provider } from 'react-redux';
import { store } from './store/store';
import './App.css';

function App() {
    return (
        <Provider store={store}>
            <div className='App'>initial</div>
        </Provider>
    );
}

export default App;
