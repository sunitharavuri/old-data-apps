import React, { Component } from 'react';
import {connect} from 'react-redux';
import {GamesList} from './GamesList'
 

class GamesPage extends Component {
  render() {
    return (
      <div className="App">
       <h1>Games List</h1>
       <GamesList games={this.props.games}/>
      </div>
    );
  }
}

GamesPage.propTypes={
  games:React.propTypes.array.isRequired
}

function mapStateToProps(state){
  return{
    games:state.games
  }
}
export default GamesPage ;