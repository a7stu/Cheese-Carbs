import { useState, useEffect } from "react";
import styled from "styled-components";
import { gsap, Linear, ScrollTrigger } from "gsap/all";
import "@fontsource/clicker-script";
import "@fontsource/clicker-script";
import bgimg from "./images/grid-new.png";
import Img1 from "./images/samosa.jpg";
import Img2 from "./images/Meatball-Skewers.jpg";
import Img3 from "./images/eggplant-parmesan.jpg";
import Img4 from "./images/spaghetti.jpg";
import Img5 from "./images/mutton-korma.jpg";
import Img6 from "./images/lamb.jpg";
import Img7 from "./images/gelato.PNG";
import Img8 from "./images/cake.jpg";

const HeaderBg = styled.div`
background-image: url(${bgimg});
height: 2600px;
@media only screen and (max-width: 769px) {
    height: 4000px;
}
@media only screen and (max-width: 456px) {
    height: 3000px;
}
`;

const Title = styled.h1`
color: rgb(164, 231, 89);
font-family: "Clicker Script", cursive;
font-size: 110px;
margin: 0px 0px 0px 0px;
text-align: center;
border-bottom: thick dotted rgb(164, 231, 89);
@media only screen and (max-width: 768px) {
    font-size: 90px;
}
@media only screen and (max-width: 540px) {
    font-size: 70px;
}
`;

const Button = styled.div`
display: flex;
justify-content: center;
align-items: center;
`;

const Button1 = styled.button`
height: 50px;
width: 200px;
font-size: 25px;
font-family: 'Arbutus Slab', serif;
text-align: center;
font-weight: bold;
background-color: #04fff3;
margin: 20px 10px 10px 10px;
border: none;
border-radius: 10px;
box-shadow: 0 9px #00c2b8;
color: white;
&:hover {
    cursor: pointer;
}
&:active {
    background-color: #03e8dc;
    box-shadow: 0 5px #00a79e;
    transform: translateY(4px);
    transition: ease-out .35s;
}
@media only screen and (max-width: 768px) {
    display: none;
}
`;

const Container = styled.div`
display: flex;
justify-content: space-evenly;
align-items: center;
`;

const Card = styled.div`
transform: translate(0%, 1%);
@media only screen and (max-width: 769px) {
    transform: translate(50%, 1%);
}
`;

const Card1 = styled.div`
transform: translate(0%, 1%);
@media only screen and (max-width: 769px) {
    transform: translate(-50%, 107%);
}
`;

const Img = styled.img`
width: 340px;
height: 475px;
padding: 10px;
border: 7px dotted rgb(164, 231, 89);
margin-bottom: 50px;
@media only screen and (max-width: 768px) {
    width: 70%;
    height: 100%;
}
@media only screen and (max-width: 540px) {
    width: 80%;
}
`;

const PriceLineL = styled.div`
height: 5px;
width: 190px;
background-color: yellow;
margin-top: -390px;
margin-left: 380px;
margin-bottom: 343px;
@media only screen and (max-width: 1074px) {
    display: none;
}
`;

const PriceCircleL = styled.div`
height: 20px;
width: 20px;
background-color: white;
border-radius: 50%;
border: 4px solid cyan;
margin-top: -360px;
margin-left: 520px;
margin-bottom: 356px;
@media only screen and (max-width: 1074px) {
    display: none;
}
`;

const PriceL = styled.div`
color: rgb(164, 231, 89);
font-family: 'Arbutus Slab', serif;
font-size: 50px;
margin-top: -95px;
margin-left: 590px;
margin-bottom: 357px;
@media only screen and (max-width: 1074px) {
    display: none;
}
`;

const BigCircleL = styled.div`
height: 90px;
width: 90px;
border: 10px solid cyan;
border-radius: 50%;
margin-top: -425px;
margin-left: 565px;
margin-bottom: 344px;
@media only screen and (max-width: 1074px) {
    display: none;
}
`;

const ContainerL = styled.div`
height: 130px;
width: 130px;
margin-top: -465px;
margin-left: 555px;
@media only screen and (max-width: 1074px) {
    display: none;
}
`;

const LilCircleL = styled.div`
height: 30px;
width: 30px;
background-color: yellow;
border-radius: 50%;
margin-top: -393px;
margin-left: 44px;
@media only screen and (max-width: 1074px) {
    display: none;
}
`;

const PriceLineR = styled.div`
height: 5px;
width: 185px;
background-color: cyan;
margin-top: -235px;
margin-left: -181px;
margin-bottom: 320px;
@media only screen and (max-width: 1074px) {
    display: none;
}
`;

const PriceCircleR = styled.div`
height: 20px;
width: 20px;
background-color: white;
border-radius: 50%;
border: 4px solid yellow;
margin-top: -335px;
margin-left: -155px;
margin-bottom: 184px;
@media only screen and (max-width: 1074px) {
    display: none;
}
`;

const PriceR = styled.div`
color: rgb(164, 231, 89);
font-family: 'Arbutus Slab', serif;
font-size: 50px;
margin-top: -95px;
margin-left: -259px;
margin-bottom: 201px;
@media only screen and (max-width: 1074px) {
    display: none;
}
`;

const BigCircleR = styled.div`
height: 90px;
width: 90px;
border: 10px solid yellow;
border-radius: 50%;
margin-top: -255px;
margin-left: -284px;
@media only screen and (max-width: 1074px) {
    display: none;
}
`;

const ContainerR = styled.div`
height: 130px;
width: 130px;
margin-top: -443px;
margin-left: -290px;
@media only screen and (max-width: 1074px) {
    display: none;
}
`;

const LilCircleR = styled.div`
height: 30px;
width: 30px;
background-color: cyan;
border-radius: 50%;
margin-top: 325px;
margin-left: 40px;
@media only screen and (max-width: 1074px) {
    display: none;
}
`;

function Menu() {

    useEffect(() => {

    gsap.registerPlugin(ScrollTrigger);

    let t1 = gsap.timeline({
        scrollTrigger: {
            trigger: ".Menu",
            start: "top top",
            toggleActions: "restart none none none none",
            pin: true,
            markers: false,
            scrub: 1
        },
    })

        .to('.container-l', {
            rotation: 360,
            duration: 2,
            ease: Linear.easeNone,
            lazy: false,
            immediateRender: false,
            scrollTrigger: {
                trigger: ".img",
                toggleActions: "restart none none none",
                start: "top center",
                end: "bottom center",
                markers: false,
                scrub: 1
            }
        })

        .to('.container-r', {
            rotation: -360,
            duration: 2,
            ease: Linear.easeNone,
            lazy: false,
            immediateRender: false,
            scrollTrigger: {
                trigger: ".img",
                toggleActions: "restart none none none",
                start: "top center",
                end: "bottom center",
                markers: false,
                scrub: 1
            }
        });

    ScrollTrigger.create({
        trigger: ".Menu",
        start: "top top",
        pin: true,
        animation: t1,
        pinSpacing: false,
        scrub: true,
        markers: false
    });

    });

    const menuData1 = [
        {img: Img1, className: "all", tag: "veg", price: "12"},
        {img: Img3, className: "all", tag: "veg", price: "20"},
        {img: Img5, className: "all", tag: "nonveg", price: "25"},
        {img: Img7, className: "all", tag: "veg", price: "10"},
    ];

    const menuData2 = [
        {img: Img2, className: "all", tag: "nonveg", price: "25"},
        {img: Img4, className: "all", tag: "veg", price: "15"},
        {img: Img6, className: "all", tag: "nonveg", price: "30"},
        {img: Img8, className: "all", tag: "veg", price: "30"},
    ];
    
    const [item1, allData1] = useState(menuData1);
    const [item2, allData2] = useState(menuData2);

    const filterData = (selected) => {

    const newData1 = menuData1.filter( (newItem) => { return newItem.tag === selected || newItem.className === selected; });
    const newData2 = menuData2.filter( (newItem) => { return newItem.tag === selected || newItem.className === selected; });
    allData1(newData1);
    allData2(newData2);

    if (selected === "veg")  {
        document.getElementById("Card1").style.marginTop = "-1689px";
        document.getElementById("Card1").style.marginBottom = "590px";
        document.getElementById("HeaderBg").style.height = "2000px";
        gsap.to('.container-l', 3, { rotation: 360, ease: Linear.easeNone, repeat: -1 } );
        gsap.to('.container-r', 3, { rotation: -360, ease: Linear.easeNone, repeat: -1 } );
    }

    if (selected === "nonveg")  {
        document.getElementById("Card1").style.marginTop = "-563px";
        document.getElementById("Card1").style.marginBottom = "0px";
        document.getElementById("HeaderBg").style.height = "1450px"; 
        gsap.to('.container-l', 3, { rotation: 360, ease: Linear.easeNone, repeat: -1 } );
        gsap.to('.container-r', 3, { rotation: -360, ease: Linear.easeNone, repeat: -1 } );
    }

    if (selected === "all")  {
        document.getElementById("Card1").style.marginTop = "-2250px";
        document.getElementById("Card1").style.marginBottom = "0px"; 
        document.getElementById("HeaderBg").style.height = "2600px";
        gsap.to('.container-l', 3, { rotation: 360, ease: Linear.easeNone, repeat: -1 } );
        gsap.to('.container-r', 3, { rotation: -360, ease: Linear.easeNone, repeat: -1 } );
    }
    };

    return (

        <HeaderBg className="section">

        <Title id="Menu">Browse our Menu</Title>

        <Button>
            <Button1 onClick={() => filterData("all")}>Show All</Button1>
            <Button1 onClick={() => filterData("veg")}>Veg</Button1>
            <Button1 onClick={() => filterData("nonveg")}>Non-Veg</Button1>
        </Button>

        <Container>

        <Card className="img" item={item1}>
            <div>
                {item1.map((Val) => {
                    return (
                    <div key={Val.id}>
                        <div>
                        <Img src={Val.img}/>
                        <PriceLineL/>
                        <PriceCircleL/>
                        <BigCircleL/>
                        <ContainerL className="container-l"><LilCircleL className="circle-l"/></ContainerL>
                        <PriceL>{Val.price}</PriceL>
                        </div>
                    </div>
                    );
                })}
            </div>
        </Card>

        
        <Card1 id="Card1" item={item2}>
            <div>
                {item2.map((Val) => {
                    return (
                        <div key={Val.id}>
                            <div>
                            <Img src={Val.img}/>
                            <PriceLineR/>
                            <PriceCircleR/>
                            <BigCircleR/>
                            <ContainerR className="container-r"><LilCircleR className="circle-r"/></ContainerR>
                            <PriceR>{Val.price}</PriceR>
                            </div>
                        </div>
                    );
                })}
            </div>
        </Card1>

        </Container>
        
        </HeaderBg>

    );
}
  
export default Menu;