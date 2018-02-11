import React, { Component } from 'react';

class InputSubmit extends Component {
    constructor() {
        super()

        this.state = { input: '' }
    }

    keepInput(input) {
        if (input)
            this.setState({ input })
    }

    submit() {
        this.props.onSubmit(this.state.input)

        this.setState({ input: '' })
    }

    render() {
        return <form onSubmit={(e) => { e.preventDefault(); this.submit() }}>
            <input type="text" className="form-control add-todo" placeholder={this.props.placeholder} onChange={(e) => this.keepInput(e.target.value)} value={this.state.input} required />
        </form>
    }
}

export default InputSubmit