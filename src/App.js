import React from 'react';
import Navbar from './components/Navbar';
import { Route } from 'react-router-dom';
import List from './components/List';
import Form from './components/Form'

class App extends React.Component {
    render() {
        return (
            <div>
                <Navbar />
                <div className="container">
                    <div className="jumbotron">
                        <h1 className="text-center">
                            CRUD
                        </h1>
                    </div>
                </div>
                <Route exact path="/" />
                <Route exact path="/form" component={Form} />
                <Route exact path="/list" component={List} />
            </div>
        )
    }
}

export default App;