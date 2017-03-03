import React from 'react';
import { View,Text } from 'react-native';
import { Actions } from 'react-native-router-flux';

const MainPage =() => {
    return(
        <View
            style={{
                flex:1,
                justifyContent:'center',
                alignItems:'center'
            }}
        >
            <Text style={{color: '#000',fontSize: 20}} onPress={Actions.showimage}>Start Now</Text>
        </View>
    );
}

export default MainPage;