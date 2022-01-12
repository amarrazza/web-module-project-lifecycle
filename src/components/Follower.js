import React from 'react';

class Follower extends React.Component {
    render(){
        
        return(
            <div className='followersContainer'>
                <img src={this.props.follower.avatar_url} />
                <p>{this.props.follower.login}</p>
            </div>
        )
    }
}

export default Follower;