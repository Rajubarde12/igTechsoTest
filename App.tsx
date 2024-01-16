import {NavigationContainer} from '@react-navigation/native';
import MyStack from './src/navigation';
import { Provider } from 'react-redux';
import { igtechso } from './src/redux';

const App = () => {
  return (
    <>
      <NavigationContainer>
        <Provider store={igtechso}>
        <MyStack />
        </Provider>
      </NavigationContainer>
    
    </>
  );
};
export default App;
