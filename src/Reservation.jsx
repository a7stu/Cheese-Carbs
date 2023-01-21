import {useState} from "react";
import styled from "styled-components";
import myimg from "./images/reservation.png";
import DatePicker from "react-datepicker";
import {subHours, addHours, subDays, addDays, setHours, setMinutes, isFuture, getDay} from "date-fns";
import "@fontsource/clicker-script";

const H1 = styled.h1`
font-family: 'Arbutus Slab', serif;
font-size: 100px;
color: white;
display: flex;
flex-direction: row;
justify-content: center;
padding: 10px 0px 0px 0px;
`;

const Separate = styled.div`
width: 100%;
border-bottom: 5px solid black;
`;

const Background = styled.div`
background-image: url("https://cdn.shopify.com/s/files/1/0402/6741/5709/files/Roast_Set_Up_2_1200x.jpg?v=1612454960");
background-repeat: no-repeat;
background-size: 1525px 990px;
`;

const Container = styled.div`
display: flex;
flex-direction: row;
margin: 0px 0px 0px 0px;
justify-content: center;
`;

const Divider0 = styled.div`
display: flex;
flex-direction: column;
width: max-content;
background-image: url("https://www.transparenttextures.com/patterns/mocha-grunge.png");
border-top-left-radius: 25px;
border-bottom-left-radius: 25px;
margin: 40px 0px 40px 0px;
`;

const Divider1 = styled.div`
display: flex;
flex-direction: column;
width: max-content;
background-image: url("https://www.transparenttextures.com/patterns/mocha-grunge.png");
border-top-right-radius: 25px;
border-bottom-right-radius: 25px;
margin: 40px 0px 40px 0px;
`;

const Divider2 = styled.div`
width: 490px;
`;

const SubTitle = styled.div`
color: black;
font-family: 'Lucida Sans Unicode', Arial, sans-serif;
font-size: 35px;
font-weight: bold;
margin: 30px 130px 40px 70px;
`;

const Input = styled.input`
border: 4px solid gold;
border-radius: 4px;
width: 250px;
height: 50px;
margin: 0px 130px 0px 70px;
padding: 0px 10px 0px 10px;
color: black;
font-family: 'Lucida Sans Unicode', Arial, sans-serif;
font-size: 25px;
font-weight: bold;
.fname {
    border: 4px solid red;
}
`;

const Span = styled.span`
margin-left: 70px;
color: black;
font-family: 'Lucida Sans Unicode', Arial, sans-serif;
font-size: 20px;
font-weight: bold;
`;

const Select = styled.select`
border: 4px solid gold;
border-radius: 4px;
width: 274px;
height: 58px;
margin: 0px 130px 0px 70px;
padding: 0px 10px 0px 10px;
color: black;
font-family: 'Lucida Sans Unicode', Arial, sans-serif;
font-size: 25px;
font-weight: bold;
`;

const Choose = styled.option`
color: black;
font-family: 'Lucida Sans Unicode', Arial, sans-serif;
font-size: 25px;
font-weight: bold;
`;

const Wrap = styled.div`
.react-datepicker {
    box-shadow: 3px 2px 11px rgb(0 0 0 / 30%);
}
.react-datepicker__input-container input {
border: 4px solid gold;
border-radius: 4px;
width: 250px;
height: 49px;
margin: 0px 100px 0px 70px;
padding: 0px 10px 0px 10px;
color: black;
font-family: 'Lucida Sans Unicode', Arial, sans-serif;
font-size: 25px;
font-weight: bold;
}
`;

const Button1 = styled.button`
width: 275px;
height: 50px;
font-size: 25px;
font-family: 'Lucida Sans Unicode', Arial, sans-serif;
text-align: center;
font-weight: bold;
background-color: #9fe9b1;
margin: 35px 0px 50px 70px;
border: none;
border-radius: 10px;
box-shadow: 0 9px #72a87e;
color: white;
&:hover {
   cursor: pointer;
}
&:active {
    color: rgb(229, 229, 229);
    background-color: #8bcd9b;
    box-shadow: 0 5px #73a980;
    transform: translateY(4px);
    transition: ease-out .35s;
}
`;

const Button2 = styled.button`
width: 275px;
height: 50px;
font-size: 25px;
font-family: 'Lucida Sans Unicode', Arial, sans-serif;
text-align: center;
font-weight: bold;
background-color: white;
margin: 65px 0px 50px 70px;
border: none;
border-radius: 10px;
box-shadow: 0 9px #b8b8b8;
color: #9fe9b1;
&:hover {
   cursor: pointer;
}
&:active {
    color: #72a87e;
    background-color: rgb(221, 217, 217);
    box-shadow: 0 5px #999;
    transform: translateY(4px);
    transition: ease-out .35s;
}
`;

function Reservation() {

    const [message1, setMessage1, setFirstName] = useState('');
    
    const handleChange1 = event => {
        const result1 = event.target.value.replace(/[^a-z]/gi, '');
        setMessage1(result1);
        setFirstName(event.target.value);
    };

    const [message2, setMessage2, setLastName] = useState('');

    const handleChange2 = event => {
        const result2 = event.target.value.replace(/[^a-z]/gi, '');
        setMessage2(result2);
        setLastName(event.target.value);
    };

    const [message3, setMessage3, setPhone] = useState('');

    const handleChange3 = event => {

        const result3 = event.target.value.replace(/[^0-9]/gi, '');
        setMessage3(result3);
        setPhone(event.target.value);
    };

    const [startDate, setStartDate] = useState(new Date());

    const minimumDate = subDays(new Date(), 0);
    const maximumDate = addDays(new Date(), 30);
    const result = isFuture(startDate);
    const minimumTime = result ? setHours(setMinutes(new Date(), 0), 8) : subHours(new Date(), 0);
    const maximumTime = result ? setHours(setMinutes(new Date(), 0), 22) : addHours(new Date(), 4);

    const isWeekday = (date) => {
        const day = getDay(date);
        return day !== 5 && day !== 6;
    };

    const fname = document.getElementById("fname");
    const lname = document.getElementById("lname");
    const pnum = document.getElementById("pnum");
    const date = document.getElementById("date");
    const location = document.getElementById("location");
    const attendees = document.getElementById("attendees");
    const button = document.getElementById("reset-button");

    const pnumlabel = document.getElementById("pnumlabel");
    const datelabel = document.getElementById("datelabel");
    const locationlabel = document.getElementById("locationlabel");
    const attendeeslabel = document.getElementById("attendeeslabel");

    const errorfname = document.getElementById("fname-error");
    const errorlname = document.getElementById("lname-error");
    const errorpnum = document.getElementById("pnum-error");
    const errordate = document.getElementById("date-error");
    const errorlocation = document.getElementById("location-error");
    const errorattendees= document.getElementById("attendees-error");

    /*document.querySelector(".submit-button").addEventListener("click", (event) => {
        
        event.preventDefault();

        errorfname.innerText = ' ';
        errorlname.innerText = ' ';
        errorpnum.innerText = ' ';
        errordate.innerText = ' ';
        errorlocation.innerText = ' ';
        errorattendees.innerText = ' ';

        if (fname.value === '' || fname.value == null) {
            errorfname.innerText = 'Entry field cannot be blank!';
            fname.style.borderColor = "red";
            pnumlabel.style.marginTop = "0px";
        }
        else {
            fname.style.borderColor = "gold";
            pnumlabel.style.marginTop = "30px";
        }

        if (lname.value === '' || lname.value == null) {
            errorlname.innerText = 'Entry field cannot be blank!';
            lname.style.borderColor = "red";
            locationlabel.style.marginTop = "0px";
        }
        else {
            lname.style.borderColor = "gold";
            errorlname.innerText='';
            locationlabel.style.marginTop = "30px";
        }

        if (pnum.value === '' || pnum.value == null) {
            errorpnum.innerText = 'Entry field cannot be blank!';
            pnum.style.borderColor = "red";
            datelabel.style.marginTop = "0px";
        }
        else {
            pnum.style.borderColor = "gold";
            errorpnum.innerText='';
            datelabel.style.marginTop = "30px";
        }

        if (location.value === '') {
            errorlocation.innerText = 'Entry field cannot be blank!';
            location.style.borderColor = "red";
            attendeeslabel.style.marginTop = "0px";
        }
        else {
            location.style.borderColor = "gold";
            errorlocation.innerText='';
            attendeeslabel.style.marginTop = "31px";
        }

        if (date.value === '' || date.value == null) {
            errordate.innerText = 'Entry field cannot be blank!';
            date.style.borderColor = "red";
        }
        else {
            if (startDate.getDay() === 5 || startDate.getDay() === 6)
            {
                date.style.borderColor = "red";
                errordate.innerText = 'Cannot book on weekends';

            }
            else {
                date.style.borderColor = "gold";
                errordate.innerText = '';

            }
        }

        if (attendees.value==='') {
            errorattendees.innerText = 'Entry field cannot be blank!';
            attendees.style.borderColor = "red";
            button.style.marginTop = "35px";
        }
        else {
            attendees.style.borderColor = "gold";
            errorattendees.innerText='';
            attendees.style.marginBottom = "0px";
            button.style.marginTop = "65px";
        }

    }, false);

    document.querySelector(".reset-button").addEventListener("click", (event) => {
        
        event.preventDefault();

        fname.value = '';
        lname.value = '';
        pnum.value = '';
        location.value = '';
        date.value = '';
        attendees.value = '';

        errorfname.innerText = ' ';
        errorlname.innerText = ' ';
        errorpnum.innerText = ' ';
        errordate.innerText = ' ';
        errorlocation.innerText = ' ';
        errorattendees.innerText = ' ';

        fname.style.borderColor = "gold";
        lname.style.borderColor = "gold";
        pnum.style.borderColor = "gold";
        location.style.borderColor = "gold";
        date.style.borderColor = "gold";
        attendees.style.borderColor = "gold";

        button.style.marginTop = "65px";

    }, false);*/

    return (
        <div id="Reservation">

            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/react-datepicker/2.14.1/react-datepicker.min.css" />
            
            <H1>Book a Reservation</H1>

            <Separate/>

            <Background>

            <div className="error" id="error"></div>
            <form name="form" id="form" method="GET" target="_blank" action="/">
            
            <Container>

                <Divider0>

                <Divider2>
                    <SubTitle>First Name</SubTitle>
                        <Input name="fname" id="fname"
                        maxLength={15}
                        minLength={2}
                        value={message1}
                        onChange={handleChange1}/>
                    <Span id="fname-error"></Span>
                </Divider2>
                <Divider2>
                    <SubTitle name="pnumlabel" id="pnumlabel">Phone Number</SubTitle>
                    <Input name="pnum" id="pnum"
                    maxLength={8}
                    minLength={8}
                    value={message3}
                    onChange={handleChange3}/>
                    <Span id="pnum-error"></Span>
                </Divider2>
                <Divider2>
                    <SubTitle name="datelabel" id="datelabel">Date & Time</SubTitle>
                    <Wrap>
                        <DatePicker name="date" id="date"
                        selected={startDate}
                        onChange={(date) => setStartDate(date)}
                        dateFormat="dd/MM/yyyy h aa"
                        minDate={minimumDate}
                        maxDate={maximumDate}
                        showTimeSelect
                        minTime={minimumTime}
                        maxTime={maximumTime}
                        timeIntervals={60}
                        filterDate={isWeekday}/>
                    </Wrap>
                    <Span id="date-error"></Span>
                </Divider2>
                <Divider2 >
                    <Button1 className="submit-button">Book</Button1>
                </Divider2>

                </Divider0>

                <Divider1>

                <Divider2>
                    <SubTitle>Last Name</SubTitle>
                    <Input name="lname" id="lname"
                    maxLength={15}
                    minLength={2}
                    value={message2}
                    onChange={handleChange2}/>
                    <Span id="lname-error"></Span>
                </Divider2>
                <Divider2>
                    <SubTitle name="locationlabel" id="locationlabel">Location</SubTitle>
                    <Select name="location" id="location">
                        <option disabled selected value='' style={{display: 'none',}}></option>
                        <Choose>Al-Khor</Choose>
                        <Choose>Al-Wakra</Choose>
                        <Choose>Doha</Choose>
                        <Choose>Dukhan</Choose>
                    </Select>
                    <Span id="location-error"></Span>
                </Divider2>
                <Divider2>
                    <SubTitle name="attendeeslabel" id="attendeeslabel">Attendees</SubTitle>
                    <Select name="attendees" id="attendees">
                        <option disabled selected value='' style={{display: 'none',}}></option>
                        <Choose>1-5</Choose>
                        <Choose>6-10</Choose>
                        <Choose>11-20</Choose>
                    </Select>
                    <Span id="attendees-error"></Span>
                </Divider2>
                <Divider2>
                <Button2 className="reset-button" id="reset-button">Reset</Button2>
                </Divider2>
                </Divider1>

            </Container>

            </form>

            </Background>

            <Separate/>

        </div>
    );
};

export default Reservation;