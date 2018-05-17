import {TabNavigator} from "react-navigation";

import  Login from './Login';
import  Register from './Register';


var myTabs = TabNavigator({
    Tab1: {screen: Login},
    Tab2: {screen: Register}

});

export default myTabs;