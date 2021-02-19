import { useState, useEffect } from "react";
import { Card, Container, Pagination } from "react-bootstrap";
import queryString from "query-string";

import Loading from "./Loading";
import RestaurantTable from "./RestaurantTable";
import NotFound from "./NotFound";

function Restaurants({ query }) {
  const [restaurants, setRestaurants] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const previousPage = () => {
    setPage(page > 1 ? page - 1 : page);
  };

  const nextPage = () => {
    setPage(page + 1);
  };

  useEffect(() => {
    setLoading(true);

    // get the query parameter
    const searchQuery = queryString.parse(query).borough;
    var apiUrl = `https://guarded-inlet-74678.herokuapp.com/api/restaurants`;

    // generate api url to search by borough
    if (query === null || query === "") {
      apiUrl += `?page=${page}&perPage=10`;
    } else {
      setPage(1);
      apiUrl += `?page=${page}&perPage=10&borough=${searchQuery}`;
    }

    // get data from api
    fetch(apiUrl)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Unable to load data.");
        }
        return res.json();
      })
      .then((data) => {
        if (data !== []) setRestaurants(data);
        else setRestaurants([]);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [query, page]);

  if (loading) return <Loading content={"Restaurants"} />;

  if (restaurants.length === 0)
    return <NotFound content={"No Restaurants Found"} />;

  return (
    <Container>
      <Card style={{ top: "20px", backgroundColor: "#e3e3e3" }}>
        <Card.Body>
          <Card.Title>Restaurant List</Card.Title>
          <Card.Text>
            Full list of restaurants. Optionally sorted by borough
          </Card.Text>
        </Card.Body>
      </Card>

      <RestaurantTable restaurants={restaurants} />

      <Pagination>
        <Pagination.Prev onClick={previousPage} />
        <Pagination.Item>{page}</Pagination.Item>
        <Pagination.Next onClick={nextPage} />
      </Pagination>
    </Container>
  );
}

export default Restaurants;
