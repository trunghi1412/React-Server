import React from 'react'
import Blogimg from './blogImg'
import Blogimg1 from './blogImg1'
import Blogimg2 from './blogImg2'
import Blogimg3 from './blogImg3'
import Blogimg4 from './blogImg4'
import Blogimg5 from './blogImg5'
import './blog.css'
import styled from 'styled-components'
import Header from '../header/Header'
import Announcement from '../Assest/Announcement'
import Footer from '../Assest/Footer'


const Container = styled.div``;

const Wrapper = styled.div`

`;

const Title = styled.h1`
  font-weight: 300;
  font-size: 40px;
  text-align: center;
`;


const Blog = () => {

    return (
    <div>
        <Announcement/>
        <Header/>
        <Container>
            <Wrapper>
            { Blogimg.map(img => (<img style={{width: "100%",}} src={img} alt=''></img>))}
                <Title><b>G6-NEWS</b></Title>
                <div className='blog-news'>
    {
    Blogimg1.map(img => (<img className='img1-news' src={img} alt=''></img>))
    }
    <div className='news'>
        <p className='news-tit'>How to effortlessly achieve a real figure. How to effortlessly achieve a real figure.</p>

        <p className='news-desc'>WARNING: ONLY RAIL WATER, BIRD SHOCK, AND MARLEY'S MILITARY TITANS FLOW FOR FREE IN THIS 
    WORLD; MONEY DOESN'T FLOOR FROM HEAVEN. The information that follows should only be read for share-related 
    information, not for investment advice. IT IS ENTIRELY UP TO YOU WHETHER TO VOTE OR JOIN. IF YES, JAPAN IS NOT RESPONSIBLE FOR THE OPPORTUNITIES + RISKS OF ASSETS FIGURE.</p>

        <p className='post-date'>Post by : Hirito Shop &#183; Wednesday-30st-2022 </p>
    </div>
       
    </div>

    <div className='blog-news'>
    {
    Blogimg2.map(img => (<img className='img2-news' src={img} alt=''></img>))
    }
    <div className='news'>
        <p className='news-tit'>Nendoroid Shinra Kusakabe is now available.</p>

        <p className='news-desc'>A Nendoroid of Shinra Kusakabe from the anime series "Fire Force" is now available! He comes 
        with three face plates: one for his expression, one for his fierce combat look, and one for his usual expression. 
        He comes with three face plates: a neutral expression, a combat-
        focused expression, and a smiley expression that some claim makes him look like the devil.</p>

        <p className='post-date'>Post by : Hirito Shop &#183; Tuesday-29th-2022 </p>
    </div>
       
    </div>

    <div className='blog-news'>
    {
    Blogimg3.map(img => (<img className='img3-news' src={img} alt=''></img>))
    }
    <div className='news'>
        <p className='news-tit'>Rem ga Ippai Collection Figure</p>

        <p className='news-desc'>A Nendoroid of senior sister Ginko Sora from the well-known anime series 
        "The Ryuo's Work is Never Done!" has been released! She comes with three face plates: one for a neutral 
        expression, one for anger, and one for embarrassment. She is equipped with a shogi board, a seat cushion, 
        and an additional lower body for the game. She also has an "Indomitable" supporter with her. Remember 
        to include her in your collection!</p>

        <p className='post-date'>Post by : Hirito Shop &#183; Monday-28th-2022 </p>
    </div>
       
    </div>
    
    <div className='blog-news'>
    {
    Blogimg4.map(img => (<img className='img4-news' src={img} alt=''></img>))
    }
    <div className='news'>
        <p className='news-tit'>Chika Fujiwara's Nendoroid is now available.</p>

        <p className='news-desc'>This afternoon there is no rain nor cloudy, :v 
        is hot and sunny, so to avoid hatred xD… We will come back to Review Figure :3 to take a
        look at some lovely faces !!!!! As well as helping you have a better view to decide :3 
        to add a certain baby to your collection  Now!! Let's go : 3 Chika Fujiwara 
        will be today's character :3 !! Shuchiin Academy's student council secretary has aired on the cutest Nendoroid xD version of the world.</p>

        <p className='post-date'>Post by : Hirito Shop &#183; Sunday-27th-2022 </p>
    </div>
       
    </div>
    <div className='blog-news'>
    {
    Blogimg5.map(img => (<img className='img5-news' src={img} alt=''></img>))
    }
    <div className='news'>
        <p className='news-tit'>Nendoroid Shinra Kusakabe is now available.</p>

        <p className='news-desc'>A Nendoroid of Shinra Kusakabe from the anime series "Fire Force" is now available! He comes 
        with three face plates: one for his expression, one for his fierce combat look, and one for his usual expression. 
        He comes with three face plates: a neutral expression, a combat-
        focused expression, and a smiley expression that some claim makes him look like the devil.</p>

        <p className='post-date'>Post by : Hirito Shop &#183; Tuesday-29th-2022 </p>
    </div>
       
    </div>

    <div className='blog-news'>
    {
    Blogimg4.map(img => (<img className='img4-news' src={img} alt=''></img>))
    }
    <div className='news'>
        <p className='news-tit'>Nendoroid Shinra Kusakabe is now available.</p>

        <p className='news-desc'>A Nendoroid of Shinra Kusakabe from the anime series "Fire Force" is now available! He comes 
        with three face plates: one for his expression, one for his fierce combat look, and one for his usual expression. 
        He comes with three face plates: a neutral expression, a combat-
        focused expression, and a smiley expression that some claim makes him look like the devil.</p>

        <p className='post-date'>Post by : Hirito Shop &#183; Tuesday-29th-2022 </p>
    </div>
       
    </div>

    <div className='blog-news'>
    {
    Blogimg4.map(img => (<img className='img4-news' src={img} alt=''></img>))
    }
    <div className='news'>
        <p className='news-tit'>Nendoroid Shinra Kusakabe is now available.</p>

        <p className='news-desc'>A Nendoroid of Shinra Kusakabe from the anime series "Fire Force" is now available! He comes 
        with three face plates: one for his expression, one for his fierce combat look, and one for his usual expression. 
        He comes with three face plates: a neutral expression, a combat-
        focused expression, and a smiley expression that some claim makes him look like the devil.</p>

        <p className='post-date'>Post by : Hirito Shop &#183; Tuesday-29th-2022 </p>
    </div>
       
    </div>

    <div className='blog-news'>
    {
    Blogimg4.map(img => (<img className='img4-news' src={img} alt=''></img>))
    }
    <div className='news'>
        <p className='news-tit'>Nendoroid Shinra Kusakabe is now available.</p>

        <p className='news-desc'>A Nendoroid of Shinra Kusakabe from the anime series "Fire Force" is now available! He comes 
        with three face plates: one for his expression, one for his fierce combat look, and one for his usual expression. 
        He comes with three face plates: a neutral expression, a combat-
        focused expression, and a smiley expression that some claim makes him look like the devil.</p>

        <p className='post-date'>Post by : Hirito Shop &#183; Tuesday-29th-2022 </p>
    </div>
       
    </div>
            </Wrapper>
        </Container>
        <Footer/>
    </div>
    
    )
}

export default Blog