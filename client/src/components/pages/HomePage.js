import React, { Component } from 'react';
import HomeJumbotron from '../jumbotrons/HomeJumbotron';
import HomeCards from '../cards/HomeCards';

class HomePage extends Component {
    render() {
        return (
            <div>
                <HomeJumbotron />
                <HomeCards />
            </div>
        )
    }
}

export default HomePage;