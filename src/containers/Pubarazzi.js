import React, { Component } from 'react';
import PubThumbnail from '../components/PubThumbnail';
import AppHeader from '../components/AppHeader';
import PubDetails from './PubDetails';
import { getPubs } from '../helpers/apiClient';
import './Pubarazzi.css';

class PubSelector extends Component {
    state = {
        pubs: [],
        selectedPub: undefined
    }
    
    async componentDidMount() {
        const pubs = await getPubs();

        this.setState({
            pubs
        });
    }

    selectPub = (selectedPub) => {
        this.setState({
            selectedPub
        });
    }

    deselectPub = () => {
        this.setState({
            selectedPub: undefined
        });
    }

    renderView() {
        if (this.state.selectedPub) {
            return <PubDetails deselectPub={this.deselectPub} pub={this.state.selectedPub} />
        } else {
            return (
                <div className="pub-container">
                    {
                        this.state.pubs.map((pub) => {
                            return (<PubThumbnail onSelectPub={() => this.selectPub(pub)} key={pub.id} pub={pub} />)
                        })
                    }
                </div>
            )
        }
    }

    render() {
        const { selectedPub = {} } = this.state;

        return (
            <div>
                <AppHeader title={selectedPub.name} closeButton={this.deselectPub} />
                
                {this.renderView()}        
            </div>
        );
    }
}
export default PubSelector;