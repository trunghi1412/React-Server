import React from 'react'
import './homepage.css'
import Slider from '../Slider'
import Announcement from '../Assest/Announcement'
import Header from '../header/Header'
import Footer from '../Assest/Footer'
import Categories from '../Categories/Catgories'



const HomePage = () => {
    return (
        <div>
            <Announcement/>
            <Header style={{}}/>
            <Slider/>
            <Categories/>
            <Footer/>
        </div>
    )
}

export default HomePage;