import React from 'react';
import User from './components/User';
import FollowerList from './components/FollowerList';
import axios from 'axios';


class App extends React.Component {

  state = {
    userInfo: [],
    followers: [],
    input: "",
  }

  componentDidMount(){
    axios.get("https://api.github.com/users/amarrazza")
      .then(resp => {
        this.setState({
          ...this.state,
          userInfo: resp.data
        })
        axios.get("https://api.github.com/users/amarrazza/followers")
          .then(resp => {
            this.setState({
              ...this.state,
              followers: resp.data
            })
          })
      }).catch(err => {
        console.log(err);
      })
  }

 
  // componentDidUpdate(){
  //   this.setState({
  //     ...this.state,
  //     input: 
  //   })
  // }

  handleChange = (e) => {
    this.setState({
      ...this.state,
      input: e.target.value
    });
  }

  handleSearch = (e) => {
    e.preventDefault();
    const searched = this.state.input;
    console.log(searched);

    axios.get(`https://api.github.com/users/${searched}`)
      .then(resp => {
        this.setState({
          ...this.state,
          userInfo: resp.data
        })
        axios.get(`https://api.github.com/users/${searched}/followers`)
          .then(resp => {
            this.setState({
              ...this.state,
              followers: resp.data
            })
          })
      })
    
  }

  render() {
    return(
      <div>
        <h1>Github Info</h1>
        <form>
          <input onChange={this.handleChange}/>
          <button onClick={this.handleSearch}>Search</button>
        </form>
        <User userInfo={this.state.userInfo} />
        <FollowerList followers={this.state.followers} />
      </div>
    );
  }
}

export default App;
