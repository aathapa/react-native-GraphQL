import React, { Component } from 'react';
import { Router,Scene } from 'react-native-router-flux';
import ApolloClient, {createNetworkInterface} from 'apollo-client'
import { ApolloProvider } from 'react-apollo';
import ShowImage from './containers/ShowImage';
import MainPage from './MainPage';

const client = new ApolloClient({
    networkInterface: createNetworkInterface({ 
        uri: 'https://api.graph.cool/simple/v1/ciztddd6105qm0127rflmzebq'
    }),
})

class AppRouter extends Component {
    render() {
        return(
            <ApolloProvider client={client}>
                <Router>
                    <Scene key="root">

                        <Scene key="mainpage" component={MainPage} hideNavBar />
                        <Scene key="showimage" component={ShowImage} title="Show Image" />
                    </Scene>
                </Router>
            </ApolloProvider>
        );
    }
}

export default AppRouter;