import React from 'react';
import { TabNavigator } from 'react-navigator';
import { Icon } from 'react-native-elements';

import  Login from './AppCommponents/Login/Login';
import Register from './AppCommponents/Registration/Register';

export const Tabs = TabNavigator({
    Login: {
        Scree:Login,
    },
    Register:{
        screen: Register,
    },
});