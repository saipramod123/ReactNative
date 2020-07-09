import  React,{ Component} from 'react';
import { View, Text,StyleSheet } from "react-native";
import  Main from './components/Maincomponent';
import { Provider } from 'react-redux';
 import  { ConfigureStore } from './redux/ConfigureStore';  
import { PersistGate } from 'redux-persist/integration/react';
import { Loading } from './components/Loadingcomponent';
                                                      
//import ErrorBoundary from './components/Errorcomponent';
const {persistor,store}= ConfigureStore();
export default class App extends React.Component {
  render() {
    return(
  <Provider store={store} >
        <PersistGate
          loading={<Loading />}
          persistor={persistor}>
    <Main/>  
    </PersistGate>
 </Provider> 
    );

  }
}
