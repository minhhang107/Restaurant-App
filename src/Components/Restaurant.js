import { useState, useEffect } from "react";
import { Container, Card, CardDeck } from "react-bootstrap";
import { MapContainer, TileLayer, Marker } from "react-leaflet";

import Loading from "./Loading";
import NotFound from "./NotFound";

function Restaurant({ id }) {
  const [restaurant, setRestaurant] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    // get data from api
    fetch(`https://guarded-inlet-74678.herokuapp.com/api/restaurant/${id}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Unable to load data.");
        }
        return res.json();
      })
      .then((data) => {
        if (data.hasOwnProperty("_id")) {
          setRestaurant(data);
        } else {
          setRestaurant(null);
        }
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [id]);

  if (loading) 
    return <Loading content={"Restaurant"} />;

  if (restaurant === null)
    return <NotFound content={"Unable to find Restaurant with id: " + id} />;

  return (
    <Container>
      <Card style={{ top: "20px", backgroundColor: "#f3f3f3" }}>
        <Card.Body>
          <Card.Title>{restaurant.name}</Card.Title>
          <Card.Text>
            {restaurant.address.building} {restaurant.address.street}
          </Card.Text>
        </Card.Body>
      </Card>

      <MapContainer
        style={{ height: "400px", marginTop: "40px" }}
        center={[restaurant.address.coord[1], restaurant.address.coord[0]]}
        zoom={13}
        scrollWheelZoom={false}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Marker
          position={[restaurant.address.coord[1], restaurant.address.coord[0]]}
        ></Marker>
      </MapContainer>

      <div style={{ marginTop: "20px", marginBottom: "20px" }}>
        <h4>Ratings</h4>
        <hr />
        <CardDeck>
          {restaurant.grades.map((grade) => {
            return (
              <Card key={grade.date}>
                <Card.Footer>Grade: {grade.grade}</Card.Footer>
                <Card.Body>
                  Completed: {new Date(grade.date).toLocaleDateString()}
                </Card.Body>
              </Card>
            );
          })}
        </CardDeck>
      </div>
    </Container>
  );
}

export default Restaurant;
