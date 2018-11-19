/* eslint-disable no-debugger */
import * as React from 'react';
import { bindActionCreators } from 'redux'
import { Layout } from 'antd'
import { connect } from 'react-redux';
import { loaduser } from './AppRedux'
import './App.css';

import logo from './logo.svg';
// import net from './net/net'
interface IAppProps {
  loading: boolean,
  dispatch: any
}
interface IAppState {
  name: string
}
class App extends React.Component<IAppProps, IAppState> {
  public state = {
    name: 'zhou'
  }
  public constructor(props: any) {
    super(props)
  }

  public componentDidMount() {
    console.log('a')
    // this.props.dispatch({ type: 'LOADING' })
    // net.get('/list').then((res: any) => {
    //   this.setState({
    //     name: res
    //   })
    // })
  }
  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p>{this.state.name}</p>

        <p>{`${this.props.loading}`}</p>
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
        <Layout>hahah</Layout>
      </div>
    );
  }
}
const mapStateToProps = (state = { loading: false }) => {
  return {
    loading: state.loading
  }
}
export default connect(mapStateToProps, dispatch => {
  return {
    listActions: bindActionCreators(loaduser, dispatch)
  }
})(App);
