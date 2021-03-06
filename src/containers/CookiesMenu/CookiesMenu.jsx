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
                this.setState({cookies: modifiedCookies})
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