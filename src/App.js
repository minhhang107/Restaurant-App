import "./App.css";
import { useState } from "react";
import {
  Button,
  Col,
  Container,
  Form,
  FormControl,
  Nav,
  Navbar,
  Row,
} from "react-bootstrap";
import { Redirect, Route, Switch, useHistory } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import About from "./Components/About";
import Restaurants from "./Components/Restaurants";
import Restaurant from "./Components/Restaurant";
import NotFound from "./Components/NotFound";

function App() {
  const [searchString, setSearchString] = useState("");

  let history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    history.push(`/restaurants?borough=${searchString}`);
    setSearchString("");
  };
  
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <LinkContainer to="/">
          <Navbar.Brand>New York Restaurants</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <LinkContainer to="/restaurants">
              <Nav.Link>Full List</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/about">
              <Nav.Link>About</Nav.Link>
            </LinkContainer>
          </Nav>
          <Form onSubmit={handleSubmit} inline>
            <FormControl
              type="text"
              placeholder="Borough"
              className="mr-sm-2"
              value={searchString}
              onChange={(e) => setSearchString(e.target.value)}
            />
            <Button type="submit" variant="outline-success">
              Search
            </Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>

      <Container>
        <Row>
          <Col>
            <Switch>
              <Route exact path="/">
                <Redirect to="/Restaurants" />
              </Route>

              <Route exact path="/about" render={() => <About />} />

              <Route
                exact
                path="/Restaurants"
                render={(props) => <Restaurants query={props.location.search} />}
              />

              <Route
                path="/Restaurant/:id"
                render={(props) => <Restaurant id={props.match.params.id} />}
              />

              <Route render={() => <NotFound content={"The page you're looking for is not found."}/>} />
            </Switch>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
