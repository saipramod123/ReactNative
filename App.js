import  React,{ Component} from 'react';
import { View, Text,StyleSheet } from "react-native";
import  Main from './components/Maincomponent';
import { Provider } from 'react-redux';
 import  { ConfigureStore } from './redux/ConfigureStore';                                                                       
//import ErrorBoundary from './components/Errorcomponent';
const store= ConfigureStore();
export default class App extends React.Component {
  render() {
    return(
  <Provider store={store} >
    <Main/>  
 </Provider> 
    );

  }
}
