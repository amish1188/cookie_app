import React, { Component } from 'react';
import axios from 'axios';

import MenuViewer from '../../components/Layout/MenuViewer/MenuViewer';
class CookiesMenu extends Component {
    state = {
        cookies: null
    };

    componentDidMount() {
        axios.get('https://cookie-app-80b62.firebaseio.com/cookies.json')
        .then(response => {
                const modifiedCookies = response.data;
                modifiedCookies.forEach(item => {
                    if(item.price >= 1){item.price = '$ ' + item.price + '.00'}
                    else{item.price = '$ ' + item.price + '0'}
                })
                this.setState({cookies: modifiedCookies})
                console.log('mounted');
            });
    };

    render() {
        let content = this.state.cookies ? <MenuViewer cookies={this.state.cookies}/> : null
        return(
            <React.Fragment>
                {content}
            </React.Fragment>
        )
    }
};
 
export default CookiesMenu;