// import React from 'react';

// export default function GamesList({games}) {
//     return(
//         <div>

//         </div>
//     );

// }
import React, { Component } from 'react';

 

class GamesList extends Component {
    
  render() {
    return (
      <div >
       
      </div>
    );
  }
}

GamesList.propTypes={
  games:React.propTypes.array.isRequired
}

function mapStateToProps(state){
  return{
    games:state.games
  }
}
export default GamesList ;