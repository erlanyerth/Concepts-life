import React from 'react'

class Form extends React.Component {
    
    handleSubmit = e => { 
        e.preventDefault()
        console.log(this.state)
    }
    
    render(){
        const { onChange, form } = this.props
        return (
            <section className="container">
                <form
                    onSubmit={this.handleSubmit}
                >
                <div className="mb-3">
                    <label className="form-label">Email address</label>
                    <input type="email" name="email" className="form-control" onChange={onChange} value={form.email} id="exampleFormControlInput1" placeholder="name@example.com"/>
                </div>
                <div className="mb-3">
                    <label className="form-label">Example textarea</label>
                    <textarea className="form-control" name="description" onChange={onChange} value={form.description} id="exampleFormControlTextarea1" rows="3"></textarea>
                </div> 
                <button type="submit" className="btn btn-primary">Primary</button>
                </form>
            </section>
        )
    }

}

export default Form
