import React from 'react';
import Card from './Card';
import Searchbox from './Searchbox';
import Scroll from './Scroll';
import ErrorBoundary from './Error.js';

class CardList extends React.Component {
    constructor() {
        super()
        this.state = {
            robot: [],
            search: [],
            result: []
        }
    }

    componentWillMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                return response.json()
            }).then(
                users => {
                    this.setState({ robot: users })
                }
            );

    }

    searchChange = (e) => {
        this.setState({
            search: this.state.result.filter((robo) => robo.props.name.toLowerCase().includes(e.target.value.toLowerCase()))
        })
    }
    // used arrow fn to refer this to cardlist and not to e

    render() {
        return (
            <div className="tc">
                <h1>ROBOFRIENDS</h1>
                <Searchbox searchChange={this.searchChange} />

                {this.state.robot.forEach((value, index) => {
                    this.state.result.push(<Card key={index} id={index} name={value.name} email={value.email} />)
                    this.state.search.push(<Card key={index} id={index} name={value.name} email={value.email} />)
                })}

                <ErrorBoundary>
                    <Scroll>
                        <div>{this.state.search}</div>
                    </Scroll>
                </ErrorBoundary>
            </div>
        );
    }
}

export default CardList;