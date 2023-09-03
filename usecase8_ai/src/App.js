import { Provider } from 'react-redux';
import { store } from './store/store';
import FormComponent from './components/FormComponent';

import './App.css';

function App() {
    return (
        <Provider store={store}>
            <div className='App'>
                <FormComponent />
            </div>
        </Provider>
    );
}

export default App;
