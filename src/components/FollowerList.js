import React from "react";
import Follower from "./Follower";

class FollowerList extends React.Component {
    render(){
        return(
            <div>
                <h2>Followers</h2>
                <div className="hifam">
                    {this.props.followers.map(follower => {
                        // console.log(follower);
                        return <Follower follower={follower} />
                    })}
                </div>
            </div>
        );
    }
}

export default FollowerList;