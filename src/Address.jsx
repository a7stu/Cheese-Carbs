import { React, useState } from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import 'mapbox-gl/dist/mapbox-gl.css';
import "@fontsource/arbutus-slab";
import "@fontsource/clicker-script";
import styled from "styled-components";
import myimg1 from "./images/grid.png";
import myimg2 from "./images/loc1.png";
import Img1 from "./images/4.2.png";
import Img2 from "./images/4.8.png";
import Img3 from "./images/4.4.png";

const HeaderBg = styled.div`
background-image: url(${myimg1});
height: 1390px;
margin-top: -20px;
@media only screen and (max-width: 1145px) {
    height: 1000px;
}
`;

const Title = styled.h1`
color: rgb(0, 255, 200);
font-family: "Clicker Script", cursive;
font-size: 110px;
margin: 20px 0px 10px 0px;
text-align: center;
padding-top: 40px;
@media only screen and (max-width: 768px) {
    font-size: 90px;
}
@media only screen and (max-width: 540px) {
    font-size: 70px;
}
`;

const Img = styled.img.attrs(props => ({
    src: props.Img || myimg2,
}))`
width: 100%;
@media only screen and (max-width: 1080px) {
    display: none;
}
`;

const SubTitle = styled.h1`
color: cyan;
font-family: 'Arbutus Slab', serif;
font-size: 25px;
@media only screen and (max-width: 1245px) {
    font-size: 20px;
    transform: translate(0%, 200%);
}
@media only screen and (max-width: 515px) {
    font-size: 15px;
}
@media only screen and (max-width: 341px) {
    font-size: 13px;
}
`;

const Wrapper1 = styled.div`
display: flex;
flex-direction: column;
justify-content: space-around;
@media only screen and (max-width: 1080px) {
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
}
`;

const Wrapper2 = styled.div`
display: flex;
flex-direction: row;
justify-content: space-around;
margin: -350px 0px 500px 0px;
@media only screen and (max-width: 1080px) {
    flex-direction: column;
    width: 100%;
    margin: 0px 0px 100px 0px;
}
`;

const Heading = styled.h1`
font-size: 40px;
color: rgb(164, 231, 89);
font-family: 'Lucida Sans Unicode', Arial, sans-serif;
display: flex;
felx-direction: row;
justify-content: center;
`;

const SubHeading = styled.h1`
font-size: 30px;
color: rgb(164, 231, 89);
font-family: 'Lucida Sans Unicode', Arial, sans-serif;
`;

const Separate = styled.div`
border-top: 5px dotted cyan;
padding: 9px 0px 0px 0px;
@media only screen and (max-width: 1080px) {
    display: none;
}
`;

const Separate1 = styled.div`
border-top: 5px dotted cyan;
padding: 20px 0px 0px 0px;
@media only screen and (max-width: 1080px) {
    display: none;
}
`;

const Separate2 = styled.div`
border-bottom: 5px dotted cyan;
padding: 20px 0px 0px 0px;
`;

const Stars = styled.img`
width: 200px;
height: 40px;
`;

const Link = styled.a`
display: flex;
felx-direction: row;
justify-content: center;
font-size: 30px;
color: cyan;
font-family: 'Lucida Sans Unicode', Arial, sans-serif;
text-decoration: none;
padding-bottom: 7px;
`;

function Address() {

    const [lng] = useState(51.1839);
    const [lat] = useState(25.3548);

    const markerData = [
        { id: "1", img: Img1, location: "Al-Khor", rating: "4.2", reviews: "23", latitude: "25.6804", longitude: "51.4969" },
        { id: "2", img: Img2, location: "Al-Wakra", rating: "4.8", reviews: "32", latitude: "25.1659", longitude: "51.5976" },
        { id: "3", img: Img3, location: "Doha", rating: "4.4", reviews: "33", latitude: "25.2854", longitude: "51.5310" },
        { id: "4", img: Img1, location: "Dukhan", rating: "4.2", reviews: "28", latitude: "25.4280", longitude: "50.7833" },
    ];

    const [item] = useState(markerData);

    const [currentPlaceId, setCurrentPlaceId] = useState(null);

    const Popup0 = (id) => {
        setCurrentPlaceId(id);
    };

    const indiLink = (lat, lng) => {
        return "https://www.google.com/maps/dir//'"+lat+","+lng+"'/@"+lat+","+lng+"/"
    };

    return (
        <HeaderBg id="Address">

            <Title>View Locations</Title>

            <Separate1/>

            <Img/>

            <Separate2/>

            <Wrapper2>

            <Wrapper1>
            <Wrapper1>
                <SubTitle>Al-Khor</SubTitle>
                <SubTitle>Block 1</SubTitle>
                <SubTitle>Al-Riffa Street</SubTitle>
                <SubTitle>+974 66444996</SubTitle>
            </Wrapper1>
            </Wrapper1>

            <Wrapper1>
            <Wrapper1>
                <SubTitle>Al-Wakra</SubTitle>
                <SubTitle>Block 2</SubTitle>
                <SubTitle>123 Lane</SubTitle>
                <SubTitle>+974 66444997</SubTitle>
            </Wrapper1>
            </Wrapper1>
            
            <Wrapper1>
            <Wrapper1>
                <SubTitle>Doha</SubTitle>
                <SubTitle>Block 3</SubTitle>
                <SubTitle>A20 Avenue</SubTitle>
                <SubTitle>+974 66444998</SubTitle>
            </Wrapper1>
            </Wrapper1>

            <Wrapper1>
            <Wrapper1>
                <SubTitle>Dukhan</SubTitle>
                <SubTitle>Block 4</SubTitle>
                <SubTitle>Al-Liwan Club</SubTitle>
                <SubTitle>+974 66444999</SubTitle>
            </Wrapper1>
            </Wrapper1>

            </Wrapper2>

            <Wrapper2>

            <div>

                <ReactMapGL id="map"
                style = {{ width: "800px", height: "600px"}}
                mapboxAccessToken = "pk.eyJ1IjoiYTdzdHUiLCJhIjoiY2w3NTBxcWw5MHo3bjNvbWEzdDNmbmQxNyJ9.9QnY54UywWsFqT7MJxPeKg"
                mapStyle = "mapbox://styles/mapbox/light-v9"
                
                initialViewState = {{
                    longitude: lng,
                    latitude: lat,
                    zoom: 8,
                }} >

                {
                item.map((marker) => (
                
                <>

                <Marker
                key={marker.id}
                latitude={marker.latitude}
                longitude={marker.longitude}
                anchor="bottom"
                color="#79e494"
                onClick={() => Popup0(marker.id)} />

                {
                currentPlaceId === marker.id && (
                    <Popup
                    latitude={marker.latitude}
                    longitude={marker.longitude}
                    closeButton={true}
                    closeOnClick={false}
                    onClose={() => setCurrentPlaceId(null)}
                    anchor="left" >
                        <Heading>{marker.location}</Heading>
                        <Separate/>
                        <Stars src={marker.img} />
                        <Separate/>
                        <SubHeading>{marker.rating} ✪</SubHeading>
                        <SubHeading>{marker.reviews} ☺️</SubHeading>
                        <Separate/>
                        <Link target="_blank" href={indiLink(marker.latitude, marker.longitude)}>Directions</Link>
                        <Separate/>
                    </Popup>
                )
                }

                </>

                ))}
                
                </ReactMapGL>

            </div>

            </Wrapper2>

        </HeaderBg>
    )
}
  
export default Address;