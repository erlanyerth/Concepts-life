import React from 'react'
import Header from '../components/Header';
import Ubication from '../components/Ubication';
import Footer from '../components/Footer';
import Carousel from '../components/Carousel';
import Explore from '../components/Explore';
import Card from '../components/Card';
import Cardslist from '../components/Cardlist';
import '../components/styles/card.css';

class Home extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            data: [{
                "id": 1,
                "img": "card1.png",
                "title": "Learn more about",
                "description": "Orci varius natoque penatibus et magnis dis parturient montes, nascetur riduculus mus."
            },{
                "id": 2,
                "img": "card2.png",
                "title": "Learn more about",
                "description": "Orci varius natoque penatibus et magnis dis parturient montes, nascetur riduculus mus."
            },{
                "id": 3,
                "img": "card3.jpg",
                "title": "Learn more about",
                "description": "Orci varius natoque penatibus et magnis dis parturient montes, nascetur riduculus mus."
            }]
        }
    }
    render(){
        return (
            <div className="container-blue">
            <Header />
            <Carousel />
            <Explore />
            <Card />
            <Cardslist
            information={this.state.data}
             />
            <Ubication 
            link_ubication="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d505208.5613480773!2d-80.93262342913376!3d8.407368812887524!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1spanama!5e0!3m2!1ses!2sve!4v1614456843187!5m2!1ses!2sve"
            />
            <Footer/>
            </div>
        )
    }
}
export default Home;