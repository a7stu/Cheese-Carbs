import { React, useEffect } from "react";
import styled from "styled-components";
import "@fontsource/arbutus-slab";
import "@fontsource/clicker-script";
import { AiOutlineComment, AiOutlineHeart, AiOutlineInstagram, AiOutlineTwitter, AiFillYoutube, AiFillFacebook } from "react-icons/ai";
import { gsap, ScrollTrigger, Power2 } from "gsap/all";

const HeaderBg = styled.div`
background: rgb(4,255,243);
background: radial-gradient(circle, rgba(4,255,243,1) 0%, rgba(255,234,88,1) 96%);
position: absolute;
`;

const Title = styled.h1`
font-family: 'Arbutus Slab', serif;
font-size: 100px;
margin: 30px 0px 50px 0px;
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
border-bottom: thick dotted white;
`;

const SubTitle = styled.a`
color: white;
font-family: 'Arbutus Slab', serif;
font-size: 20px;
text-align: center;
font-weight: bold;
text-decoration: none;
target: '_blank';
`;

const Container = styled.div`
margin: 0px 50px 0px 50px;
`;

const Wrap1 = styled.div`
display: flex;
flex-direction: row;
justify-content: space-evenly;
width: 100%;
`;

const Wrap2 = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`;

const Wrap3 = styled.div`
display: flex;
flex-direction: row;
justify-content: space-around;
`;

const Wrap4 = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`;

const ImgContainer = styled.div`
background-color: white;
border-top: 20px solid white;
border-left: 20px solid white;
border-bottom: 10px solid white;
`;

const ImgF = styled.img`
width: 80%;
height: 90%;
&:hover {
  opacity: 0.3;
}
`;

const ImgF1 = styled.div`
position: relative;
z-index: 1;
top: 130%;
left: -14%;
transform: translate(-50%, -50%);
box-sizing: border-box;
margin-top: -40px;
margin-right: -65px;
display: block;
opacity: 0;
width: 100%;
height: fit-content;
text-align: center;
font-size: 19px;
`;

function Footer() {

  useEffect(() => {

    gsap.registerPlugin(ScrollTrigger);
  
    let t1 = gsap.timeline({
      scrollTrigger: {
          trigger: ".Footer",
          start: "top top",
          end: "+=720px",
          pin: true,
          markers: true,
          scrub: 1
      },
    })

    .to(".heading", {
      duration: 2,
      delay: 0,
      backgroundPositionX: "0%",
      stagger: 1,
      lazy: false
    })
  
    ScrollTrigger.create({
      trigger: ".Footer",
      start: "top top",
      pin: true,
      end: "+=720px",
      animation: t1,
      pinSpacing: false,
      scrub: true,
      markers: true
    });

  });

  function func1(e) {
    e.target.nextSibling.style.opacity = 1;
    e.target.nextSibling.style.marginTop = "-115px";
    e.target.nextSibling.style.transition = "all 0.3s ease";
  }

  function func2(e) {
    e.target.nextSibling.style.opacity = 0;
    e.target.nextSibling.style.marginTop = "-160px";
    e.target.nextSibling.style.transition = "all 0.3s ease";
  }

  function func3(e) {
    const socials = document.getElementsByClassName("socials");
    for( const social of socials) {
      if(social == e.target) { social.style.opacity = 1; }
      else { social.style.opacity = 0.5; }
    }
  }

  function func4(e) {
    const socials = document.getElementsByClassName("socials");
    for( const social of socials) {
      social.style.opacity = 1;
    }
  }

    return (

        <HeaderBg id="Footer">

            <Title className="heading">Our Socials</Title>

            <Container>

              <Wrap3>

              <Wrap4 style={{ flex: 2 }}>
                  <SubTitle style={{ fontSize: "40px" }}>Cheese and Carbs</SubTitle>
              </Wrap4>

              <Wrap4 style={{ flex: 2 }}>
                <SubTitle style={{ fontSize: "40px" }}>Check our posts</SubTitle>
              </Wrap4>

              <Wrap4 style={{ flex: 2 }}>
                  <SubTitle style={{ fontSize: "26px" }}>CandC © 2022. All Rights Reserved.</SubTitle>
              </Wrap4>

              </Wrap3>

              <br/>

              <Wrap3>

                <Wrap4 style={{ flex: 2 }}>
                  <SubTitle style={{ fontSize: "25px" }}>Cheese and Carbs is an up-and-coming restaurant chain that has locations throughout Qatar. We offer both vegetarian and non-vegetarian options that are prepared with fresh ingredients and of course, love! </SubTitle>
                </Wrap4>

                <Wrap4 style={{ flex: 2 }}>
                <ImgContainer>
                  <Wrap3 style={{ height: "140px" }}>
                  <ImgF onMouseOver={func1} onMouseOut={func2} id="box00" src="https://giardino.axiomthemes.com/wp-content/uploads/2020/09/image-copyright-10-scaled-370x370.jpg" />
                  <ImgF1 id="box01">
                    146<AiOutlineHeart width="130px" height="130px"/>
                    23<AiOutlineComment width="130px" height="130px"/>
                  </ImgF1>
                  <ImgF onMouseOver={func1} onMouseOut={func2} id="box10" src="https://giardino.axiomthemes.com/wp-content/uploads/2020/09/image-copyright-7-scaled-370x370.jpg" />
                  <ImgF1 id="box11">
                    139<AiOutlineHeart width="130px" height="130px"/>
                    19<AiOutlineComment width="130px" height="130px"/>
                  </ImgF1>
                  <ImgF onMouseOver={func1} onMouseOut={func2} id="box20" src="https://giardino.axiomthemes.com/wp-content/uploads/2020/09/image-copyright-6-scaled-370x370.jpg" />
                  <ImgF1 id="box21">
                    207<AiOutlineHeart width="130px" height="130px"/>
                    30<AiOutlineComment width="130px" height="130px"/>
                  </ImgF1>
                  </Wrap3>
                  <Wrap3 style={{ height: "140px" }}>
                  <ImgF onMouseOver={func1} onMouseOut={func2} id="box30" src="https://giardino.axiomthemes.com/wp-content/uploads/2020/09/image-copyright-4-scaled-370x370.jpg" />
                  <ImgF1 id="box31">
                    199<AiOutlineHeart width="130px" height="130px"/>
                    27<AiOutlineComment width="130px" height="130px"/>
                  </ImgF1>
                  <ImgF onMouseOver={func1} onMouseOut={func2} id="box40" src="https://giardino.axiomthemes.com/wp-content/uploads/2020/09/image-copyright-9-scaled-370x370.jpg" />
                  <ImgF1 id="box41">
                    99<AiOutlineHeart width="130px" height="130px"/>
                    10<AiOutlineComment width="130px" height="130px"/>
                  </ImgF1>
                  <ImgF onMouseOver={func1} onMouseOut={func2} id="box50" src="https://giardino.axiomthemes.com/wp-content/uploads/2020/09/image-copyright-8-scaled-370x370.jpg" />
                  <ImgF1 id="box51">
                    114<AiOutlineHeart width="130px" height="130px"/>
                    21<AiOutlineComment width="130px" height="130px"/>
                  </ImgF1>
                  </Wrap3>
                </ImgContainer>
                </Wrap4>

                <Wrap4 style={{ flex: 2 }}>
                  <Wrap1>

                    <Wrap2>
                      <a href="https://www.instagram.com/" target="_blank">
                      <AiOutlineInstagram className="socials" onMouseOver={func3} onMouseOut={func4} color="white" size={80}/>
                      </a>
                      <SubTitle>Instagram</SubTitle>
                    </Wrap2>

                    <Wrap2>
                      <a href="https://twitter.com/" target="_blank">
                      <AiOutlineTwitter className="socials" onMouseOver={func3} onMouseOut={func4} color="white" size={80}/>
                      </a>
                      <SubTitle>Twitter</SubTitle>
                    </Wrap2>

                    <Wrap2>
                      <a href="https://www.youtube.com/" target="_blank">
                      <AiFillYoutube className="socials" onMouseOver={func3} onMouseOut={func4} color="white" size={80}/>
                      </a>
                      <SubTitle>Youtube</SubTitle>
                    </Wrap2>

                    <Wrap2>
                      <a href="https://www.facebook.com/" target="_blank">
                      <AiFillFacebook className="socials" onMouseOver={func3} onMouseOut={func4} color="white" size={80}/>
                      </a>
                      <SubTitle>Facebook</SubTitle>
                    </Wrap2>
                
                  </Wrap1>

                  <br/><br/>

                  <Wrap1>
                    <SubTitle>Email us at <a style={{ color: "white", textDecoration: "none" }} target="_blank" href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=CllgCJvnJMnJKDdJrRxKdlWLMmGjNlkBFZSZkrjQKmzSzKlfBvKCrlNCPJbBrKLPcxPLrcSVbzg">candc@gmail.com</a> for questions or complaints.</SubTitle>
                  </Wrap1>
                </Wrap4>

              </Wrap3>

              <br/><br/><br/>
              
            </Container>

        </HeaderBg>
    )
}
  
export default Footer;