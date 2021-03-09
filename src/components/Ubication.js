import React from 'react'

function Map(props){
    return(
      <section className="mt-3 pt-5">
        <div>
          <div className="text-center font-color-black p-5">
            <h1>Found in over</h1>
            <h1>XXXX Stores</h1>
            <a className="font-color-black" href="#">find store near you →</a>
          </div>
            <div>
              <iframe src={props.link_ubication} width="100%" height="300" loading="lazy"></iframe>
            </div>
        </div>
      </section>
    
    )
}
export default Map;