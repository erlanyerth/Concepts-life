import React from 'react'
import Form from '../components/Form-contact'

class Contact extends React.Component {

    state = {
        form: {}
    }
    handleChange = e => {
        this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        })
        
    }
    render(){
        return (
            <Form
                onChange={this.handleChange}
                form={this.state.form}
            />
        )
    }
}

export default Contact