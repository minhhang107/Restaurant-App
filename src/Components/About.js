import { Container, Card, CardDeck } from "react-bootstrap";

export default function About() {
  return (
    <Container>
      <Card style={{ top: "20px", backgroundColor: "#e3e3e3" }}>
        <Card.Body>
          <Card.Title>About</Card.Title>
          <Card.Text>All about my projects</Card.Text>
        </Card.Body>
      </Card>

      <CardDeck style={{ marginTop:"40px"}}>
        <Card>
        <Card.Header><h5>DayIn</h5></Card.Header>
          <Card.Img variant="top" src="https://github.com/minhhang107/DayInBooking/raw/main/public/SharedScreenshot1.jpg?raw=true"/>
          <Card.Body>
            <Card.Text><div>An Airbnb simulation website that implements NodeJS, MongoDB and Bootstrap.</div>
            <br/>
            <div>Visit the website <a href="https://sheltered-plateau-53659.herokuapp.com/">here</a></div></Card.Text>
          </Card.Body>
        </Card>

        <Card>
        <Card.Header><h5>The Very Berry</h5></Card.Header>
          <Card.Img variant="top" src="https://github.com/minhhang107/theveryberry/blob/master/images/SharedScreenshot2.jpg?raw=true"/>
          <Card.Body>
            <Card.Text><div>A simplified front-end online cake store that implements CSS and Vanilla Javascript. </div> 
            <br/>
            <div>Visit the website <a href="https://minhhang107.github.io/theveryberry/index.html">here</a></div>
            </Card.Text>
          </Card.Body>
        </Card>
       
      </CardDeck>
    </Container>
  );
}
