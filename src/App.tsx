/* eslint-disable no-debugger */
import * as React from 'react';
import { bindActionCreators } from 'redux'
import { Layout, Button, Card, Icon, Avatar, List } from 'antd'
import { connect } from 'react-redux';
import { loaduser } from './AppRedux'
import './App.css';

import logo from './logo.svg';
const { Meta } = Card;
// import net from './net/net'
interface IAppProps {
  loading: boolean,
  name: string,
  data: any,
  follow: any,
  dispatch: any,
  listActions: any
}
interface IAppState {
  name: string
}
class App extends React.Component<IAppProps, IAppState> {
  // public state = {
  //   name: 'zho'
  // }
  public constructor(props: any) {
    super(props)
    // this.getName = this.getName.bind(this)
  }

  public componentDidMount() {
    console.log(this.props)
    // this.props.dispatch({ type: 'LOADING' })
    // net.get('/list').then((res: any) => {
    //   this.setState({
    //     name: res
    //   })
    // })
  }
  public getName = () => {
    this.props.listActions()
  }
  public getFollow = () => {
    console.log(this.props)
    this.props.dispatch({
      type: 'LOADFOLLOWER',
      url: this.props.data.followers_url
    })
  }
  public renderList = (item: any) => (
    <List.Item>
      {/* <List.Item.Meta */}
      {item}
    </List.Item>)
  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p>{this.props.name}</p>
        <Button onClick={this.getName} >Dispatch</Button>
        <Button onClick={this.getFollow}>follower</Button>
        <p>{`${this.props.loading}`}</p>
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
        <Card>
          <Meta avatar={<Avatar src={this.props.data.avatar_url} />} title="avatar" />
        </Card>
        <List dataSource={this.props.follow} renderItem={this.renderList} />
      </div>
    );
  }
}
export default connect((state: any) => {
  return {
    loading: state.appreducer.loading,
    name: state.appreducer.name,
    data: state.appreducer.data,
    follow: state.appreducer.follow
  }
}, dispatch => {
  return {
    listActions: bindActionCreators(loaduser, dispatch),
    dispatch
    // getFollewed:bindActionCreators(loadFollower,dispatch)
  }
})(App);
