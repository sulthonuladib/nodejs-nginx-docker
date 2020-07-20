import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const BASE_URL = 'http://localhost:5000';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: null,
        };
    }

    componentDidMount() {
        fetch(BASE_URL)
            .then((response) => response.json())
            .then((data) =>
                this.setState({
                    data: data,
                })
            );
    }

    render() {
        const { data } = this.state;
        console.log('waiting data', data);
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <p>
                        See at your Web Console / Developer Tools <br /> Fetched
                        data from API:
                    </p>
                    <p>{data !== null ? data.first_name : null}</p>
                    <p>{data !== null ? data.last_name : null}</p>
                    <p>{data !== null ? data.age : null}</p>
                </header>
            </div>
        );
    }
}
export default App;
