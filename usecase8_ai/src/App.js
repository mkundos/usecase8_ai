import { Provider } from 'react-redux';
import { store } from './store/store';
import FormComponent from './components/FormComponent';

import './App.css';
import DisplayStore from './components/DisplayStore';

function App() {
    return (
        <Provider store={store}>
            <div className='App'>
                <FormComponent />
                <DisplayStore />
            </div>
        </Provider>
    );
}

export default App;
