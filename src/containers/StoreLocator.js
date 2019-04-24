import React, { Component } from 'react';
import Header from '../components/Header';
import Button from '../components/Button';
import Map from '../components/Map';
import mapChooser from '../containers/mapChooser';
import Axios from 'axios';


class StoreLocator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentMap: 'none.png',
            Markets: []
        }
        this.chooseMap = this.chooseMap.bind(this);
    }
    componentDidMount() {
        this.getMarkets();

    }
    getMarkets = async () => {
        let response = await Axios.get('http://localhost:3000/data/Markets.json')
        this.setState({
            Markets: response.data.Markets
        })
    }
    chooseMap(e) {
        this.setState({ currentMap: mapChooser(e.target.value) });

    }
    render() {
        let locationButtons = this.state.Markets.map((market, id) => { return (<Button handleClick={this.chooseMap} key={id} location={market.Location} />) }
        )
        return (
            <div>
                <Header />
                <div>
                    {locationButtons}
                </div>
                <Map imagename={this.state.currentMap} location={this.props.location} />
            </div>

        );

    }
}

export default StoreLocator;