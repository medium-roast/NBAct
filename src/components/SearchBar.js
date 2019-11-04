import React from 'react';
import { AutoComplete, Input, Icon } from 'antd';
import nba from 'nba';
import { PROFILE_PIC_URL_PREFIX } from '../constants';

const Option = AutoComplete.Option;
// const { Option } = AutoComplete;     // Alternative way to deconstruct Option from AutoComplete

export class SearchBar extends React.Component {
    state = {
        dataSource: [],
    }

    handleSearch = (value) => {
        console.log(value);
        this.setState({
            dataSource: !value ?
                [] : nba.searchPlayers(value).map(player => ({
                    fullName: player.fullName,
                    playerId: player.playerId,
                }))
        });
    }

    onSelect = (playerName) => {
        this.props.handleSelectPlayer(playerName);
    }

    render() {
        const { dataSource } = this.state;
        const options = dataSource.map((player) => (
            // Unique key is needed for multi-instance components
            <Option key={player.fullName} value={player.fullName} className="player-option">
                <img className="player-option-image" src={`${PROFILE_PIC_URL_PREFIX}/${player.playerId}.png`} alt="player"/>
                <span className="player-option-label">{player.fullName}</span>
            </Option>
        ));

        return (
            <AutoComplete
                className="search-bar"
                size="large"
                dataSource={options}    // dataSource is the attribute that takes Option elements
                onSelect={this.onSelect}
                onSearch={this.handleSearch}    // onSearch is triggered for every input change
                placeholder="Search NBA Player"
                optionLabelProp="value"
            >
                <Input suffix={<Icon type="search" className="certain-category-icon" />} />
            </AutoComplete>
        );
    }
}
