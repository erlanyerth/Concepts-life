import React from 'react'
import Form from '../components/Form-contact'

class Contact extends React.Component {
    //inicializamos el state
    state = {
        form: {}
    }
    //setea el estado del campo cada vez que se tipea
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
                onChange={this.handleChange} //se envian por props los cambios
                form={this.state.form}
            />
        )
    }
}

export default Contact