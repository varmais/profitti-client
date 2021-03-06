import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { connect } from 'react-redux';
import AppStyles from '../helpers/Styles';
import SongButton from '../components/songs/SongButton';
import { resetSearchSongs } from '../redux/songs';
import NavigationButtonListView from '../components/navigation/NavigationButtonListView';
import { navigatorPropTypes, songPropTypes } from '../helpers/PropTypes';
import { createHeader } from '../helpers/NavigationOptions';

export class SongSearchScreen extends Component {
  static navigationOptions = ({navigation}) => createHeader(`Haku: ${navigation.state.params.searchString}`);

  static propTypes = {
    songs: PropTypes.arrayOf(songPropTypes()).isRequired,
    navigation: navigatorPropTypes({
      searchString: PropTypes.string.isRequired
    }),
    resetSearchSongs: PropTypes.func.isRequired
  };

  componentWillUnmount () {
    this.props.resetSearchSongs();
  }

  render() {
    const { navigation, songs } = this.props;
    return (
      <ScrollView style={AppStyles.background}>
        <NavigationButtonListView
          title={`Haku: ${navigation.state.params.searchString}`}
          navigation={navigation}
          items={songs}
          renderRow={rowData => <SongButton song={rowData} navigation={navigation} />}
        />
      </ScrollView>
    );
  }
}

export default connect(state => ({
  songs: state.songs.searchResult
}), {
  resetSearchSongs
})(SongSearchScreen);