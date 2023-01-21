import { useEffect } from "react";
import styled from "styled-components";
import "@fontsource/arbutus-slab";
import { gsap, ScrollTrigger, Power3 } from "gsap/all";
import bordertopimg from "./images/bordertop.png";
import img1 from "./images/bg.png";
import img2 from "./images/piece.png";
import img3 from "./images/cheese.png";
import img4 from "./images/cracker.png";
import img5 from "./images/dip.png";
import img6 from "./images/logonew.png";
import img7 from "./images/pngwing.png";

const Header1 = styled.div`
@media only screen and (max-width: 900px) {
  padding-bottom: 240px;
}
@media only screen and (max-width: 768px) {
  padding-bottom: 30px;
}
@media only screen and (max-width: 540px) {
  margin-bottom: -130px;
}
@media only screen and (max-width: 439px) {
  padding-bottom: 430px;
}
`;

const Whiteline = styled.img`
width: 400px;
height: 100px;
`;

const Welcome = styled.h1`
color: white;
font-family: 'Arbutus Slab', serif;
font-size: 75px;
margin-left: 30px;
`;

const Bgboard = styled.img.attrs(props => ({
  src: props.Img || img1,
}))`
width: 80%;
height: 650px;
transform: translate(450px, 40px);
background-repeat: no-repeat;
background-size: contain;
`;

const Piece = styled.img.attrs(props => ({
  src: props.Img || img2,
}))`
width: 180px;
height: 200px;
background-repeat: no-repeat;
background-size: contain;
`;

const Cheese = styled.img.attrs(props => ({
  src: props.Img || img3,
}))`
width: 260px;
height: 260px;
background-repeat: no-repeat;
background-size: contain;
`;

const Cracker = styled.img.attrs(props => ({
  src: props.Img || img4,
}))`
width: 280px;
height: 180px;
background-repeat: no-repeat;
background-size: contain;
`;

const Dip = styled.img.attrs(props => ({
  src: props.Img || img5,
}))`
width: 220px;
height: 220px;
background-repeat: no-repeat;
background-size: contain;
`;

const Title = styled.h1`
font-family: 'Arbutus Slab', serif;
font-size: 100px;
margin: 0px 0px 20px 0px;
text-align: center;
background: linear-gradient(
  to right,
  rgb(255, 255, 255) 50%,
  rgb(255, 234, 88) 50%
);
background-size: 200% 100%;
background-position-x: 100%;
color: transparent;
background-clip: text;
-webkit-background-clip: text;
@media only screen and (max-width: 768px) {
  font-size: 70px;
}
@media only screen and (max-width: 540px) {
  font-size: 45px;
}
`;

const SubTitle = styled.h1`
color: white;
font-family: 'Arbutus Slab', serif;
font-size: 28px;
margin: -20px 0px 30px 0px;
text-align: center;
@media only screen and (max-width: 768px) {
  font-size: 20px;
  margin: 20px 0px 30px 0px;
}
`;

const Navbar = styled.ul`
background-color: white;
width: 100%;
height: 70px;
padding: 0px 0px 0px 0px;
margin: 0px 0px 0px 0px;
border-top: thick dotted black;
border-bottom: thick dotted black;
display: flex;
flex-direction: row;
justify-content: space-evenly;
align-items: center;
list-style-type: none;
@media only screen and (max-width: 540px) {
  height: 40px;
}
`;

const Logo = styled.img.attrs(props => ({
  src: props.Img || img6,
}))`
width: 200px;
height: 200px;
background-repeat: no-repeat;
background-size: contain;
margin-top: 20px;
transform: rotate(60deg);
@media only screen and (max-width: 639px) {
  display: none;
}
@media only screen and (max-width: 540px) {
  width: 100%;
  height: 200%;
}
`;

const Item = styled.a`
color: #66f7b6;
text-decoration: none;
font-family: 'Arbutus Slab', serif;
font-size: 30px;
font-weight: bold;
align-content: center;
&:hover {
    color: rgb(238, 217, 34);
    transition: ease-out .35s;
}
@media only screen and (max-width: 768px) {
  font-size: 25px;
}
@media only screen and (max-width: 540px) {
  font-size: 20px;
}
`;

const NavSeparate = styled.div`
height: 50px;
width: 3px;
background: black;
margin: auto 10px;
`;

const CheeseLogo = styled.img.attrs(props => ({
  src: props.Img || img7,
}))`
width: 100%;
height: 270%;
background-repeat: round;
@media only screen and (max-width: 768px) {
  width: 150%;
  height: 170%;
}
@media only screen and (max-width: 540px) {
  width: 150%;
  height: 100%;
}
`;
  
function Header() {
  
  useEffect(() => {

  gsap.registerPlugin(ScrollTrigger);

  let t1 = gsap.timeline({
    scrollTrigger: {
        trigger: ".first-section",
        start: "top top",
        end: "+=720px",
        pin: true,
        markers: false,
        scrub: true
    },
  })

  .fromTo(".piece", {
    x: -755,
    y: -350,
    rotate: 290
  }, {
    x:-422,
    y: -212,
    rotate: 0,
    ease: Power3.easeInOut,
    duration: 1.5
  }, "<")

  .fromTo(".cheese", {
    x: 40,
    y: -220,
    rotate: 60
  }, {
    x: 845,
    y: -519,
    rotate: 0,
    ease: Power3.easeInOut,
    duration: 1,
    delay: 0.25
  }, "<")

  .fromTo(".cracker", {
    x: -150,
    y: -600,
    rotate: 70
  }, {
    x: 640,
    y: -370,
    rotate: 0,
    ease: Power3.easeInOut,
    duration: 1,
    delay: 0.5
  }, "<")

  .fromTo(".dip", {
    x: -140,
    y: -300
  }, {
    x: 595,
    y: -375,
    rotate: 0,
    ease: Power3.easeInOut,
    duration: 1,
    delay: 0.75
  }, "<")

  .fromTo(".welcome", {
    x: -400,
    y: -780
  }, {
    x: 150,
    y: -780,
    ease: Power3.easeInOut,
    duration: 1,
    delay: 0.8
  }, "<");

  ScrollTrigger.create({
    trigger: ".first-section",
    start: "top top",
    pin: true,
    end: "+=720px",
    animation: t1,
    pinSpacing: false,
    scrub: true,
    markers: false
  });

  gsap.set(".logo", { x: -265, rotate: 180 });
  gsap.set(".subtitle", { y: -15, opacity: 0 });
  gsap.set(".navbar", { y: -15, opacity: 0 });

  let t2 = gsap.timeline({
    scrollTrigger: {
        trigger: ".second-section",
        start: "top top",
        end: "+=720px",
        pin: true,
        markers: false,
        scrub: 1
    },
  })

  .fromTo(".logo", { x: -265, rotate: 180 }, {
    x: 0,
    rotate: 0,
    opacity: 1,
    ease: Power3.easeInOut,
    duration: 3,
    immediateRender: false,
    lazy: false,
    scrollTrigger: {
      trigger: ".subtitle",
      toggleActions: "restart none none none none",
      start: "top +=30px"
    }
  })

  .to(".title", {
    duration: 4,
    delay: 0,
    backgroundPositionX: "0%",
    stagger: 1,
    lazy: false,
    scrollTrigger: {
      trigger: ".title",
      toggleActions: "restart none none none none",
      start: "top center",
      end: "bottom center",
      pinSpacing: false,
      markers: false,
      scrub: 1
    }
  })

  .fromTo(".subtitle", { y: -15, opacity: 0 }, {
    y: 0,
    opacity: 1,
    ease: "expo",
    duration: 2,
    immediateRender: false,
    delay: 0.5,
    lazy: false,
    scrollTrigger: {
      trigger: ".subtitle",
      toggleActions: "restart none none none none",
      start: "top +=30px"
    }
  })

  .fromTo(".navbar", { y: -15, opacity: 0 }, {
    y: 0,
    opacity: 1,
    ease: "expo",
    duration: 2,
    immediateRender: false,
    delay: 1,
    lazy: false,
    scrollTrigger: {
      trigger: ".navbar",
      toggleActions: "restart none none none none",
      start: "top +=30px"
    }
  });

  ScrollTrigger.create({
    trigger: ".second-section",
    start: "top top",
    pin: true,
    end: "+=720px",
    animation: t2,
    pinSpacing: false,
    scrub: true,
    markers: false,
  });

});

    return (

      <Header1 style={{ height: "2800px" }} className="Header">

        <div className="first-section">

            <Bgboard className="board"/>
            <Piece className="piece"/>
            <Cheese className="cheese"/>
            <Cracker className="cracker"/>
            <Dip className="dip"/>
            <div className="welcome">
                <Whiteline src={bordertopimg}/>
                <Welcome>Welcome!</Welcome>
                <Whiteline src={bordertopimg}/>
            </div>

        </div>

        <div className="second-section" style={{ height: "135px", paddingTop: "10px" }}>

            <Title className="title" style={{ paddingTop: "30px" }}>Cheese & Carbs</Title>
            <SubTitle className="subtitle">A warm (& cheesy) welcome! Come taste the delight that the perfect combination of cheese & carbs bring!</SubTitle>

          <Navbar>
                <Logo className="logo"/>
                <Item className="navbar" href="#Menu">Menu</Item >
                <NavSeparate/>
                <Item  className="navbar" href="#Reservation">Reservation</Item >
                <NavSeparate/>
                <Item  className="navbar" href="#Address">Location</Item >
                <NavSeparate/>
                <Item  className="navbar" href='#Footer'>Socials</Item >
            </Navbar>

            <CheeseLogo/>

        </div>

      </Header1>
    )
  }
  
  export default Header;