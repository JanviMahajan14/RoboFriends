import React from 'react';
import Card from './Card';
import robot from './robot.js';
import Searchbox from './Searchbox';

class CardList extends React.Component {
    constructor() {
        super()
        this.state = {
            robot,
            search: [],
            result: []
        }
    }

    componentWillMount() {
        robot.forEach((value, index) => {
            this.state.result.push(<Card key={index} id={index} name={value.name} email={value.email} />)
            this.state.search.push(<Card key={index} id={index} name={value.name} email={value.email} />)
        })
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
                <div>{this.state.search}</div>
            </div>
        );
    }
}

export default CardList;