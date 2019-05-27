import * as React from 'react';

function container(Wrap) {
    return class extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                name: ''
            }
            this.onNameChange = this.onNameChange.bind(this)

        }
        onNameChange(e) {
            console.log(this.state.name)
            this.setState({
                name: e.target.value
            })
        }
        render() {
            const newProps = {
                name: {
                    value: this.state.name,
                    onChange: this.onNameChange
                }
            }
            return <Wrap {...this.props} {...newProps} />
        }
    }
}

class Rest extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'hahahahha'
        }
    }
    onChange = e => {
        this.setState({
            name: e.target.value
        })
    }
    componentDidMount() {
        setInterval(() => {
            console.log(this.state)
        }, 5000)
    }
    render() {
        return (<div><input {...this.props.name} />
            <input value={this.state.name} onChange={this.onChange} /></div>)
    }
}
export default container(Rest)