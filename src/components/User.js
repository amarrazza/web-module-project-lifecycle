import React from 'react';

class User extends React.Component {
    render(){
        
        return(
            <div>
                <h1>User info</h1>
                <h2>{this.props.userInfo.name}</h2>
                <p>Handle: {this.props.userInfo.login}</p>
                <img src={this.props.userInfo.avatar_url} />
                <p>Total Repos: {this.props.userInfo.public_repos}</p>
                <p>Followers: {this.props.userInfo.followers}</p>
            </div>
        )
    }
}

export default User;