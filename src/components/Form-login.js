import React from 'react'

class Form extends React.Component {
    render(){
        return(
        <section className="container mt-3 pt-5">
            <div className="row">
            <div className="col-8">
            <div className="card">
            <div className="card-body">
                    <form className="form-signin">
                        <div className="text-center mb-4">
                            <h1 className="h3 mb-3 font-weight-normal">Iniciar sesión</h1>
                        </div>
                        
                        <div className="form-label-group">
                            <input type="email" id="inputEmail" className="form-control" placeholder="Ingrese correo" required autofocus/>
                        </div>
                        
                        <div className="form-label-group my-2">
                            <input type="password" id="inputPassword" className="form-control" placeholder="Ingrese contraseña" required/>
                        </div>
                        
                        <button className="btn btn-lg btn-primary btn-block" type="submit">Ingresar</button>
                    </form>
                </div> 
            </div> 
            </div>
            </div>
            
            
        </section>
        )
    }
    

}

export default Form