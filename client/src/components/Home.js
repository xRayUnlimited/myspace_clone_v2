import React, { Component } from 'react';
import { Header } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { getPosts } from '../actions/posts';

class Home extends Component {

  componentDidMount() {
    this.props.dispatch(getPosts())
  }

  render() {
    return (
      <Header as='h1' textAlign='center'>Home Component</Header>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    coolPerson: state.user,
    posts: state.posts,
  }
}
export default connect(mapStateToProps)(Home);
