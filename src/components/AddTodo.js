import React, { Component } from 'react'

export class AddTodo extends Component {
    state = {
        title: ''
    }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.title);
        this.setState({ title: '' })
    }
    render() {
        return (
            <form style={{ display: 'flex' }} onSubmit={this.handleSubmit}>
                <input
                    type="text"
                    name="title"
                    placeholder="Add Todo..."
                    style={{ flex: '10' }}
                    value={this.state.title}
                    onChange={this.onChange} />
                <input type="submit" value="Submit" style={{ flex: '1' }} className="btn" />
            </form>
        )
    }
}

export default AddTodo
