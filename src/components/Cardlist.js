import React from 'react'
import Cardlist from './Cards_info';

function list(props){
    return(
        <section className="container mt-3 pt-5">
            <div className="row">
                <div className="col-md-9 mx-auto  px-0">
                    <div className="row">
                        { props.information.map((info) => {
                            return(
                                <Cardlist
                                    img={info.img} 
                                    title={info.title}
                                    description={info.description}
                                />
                            )
                        })}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default list