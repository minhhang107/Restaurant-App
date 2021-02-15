import { Table } from "react-bootstrap";
import { useHistory } from "react-router-dom";

export default function RestaurantTable({ restaurants }) {
  let history = useHistory();
  return (
    <Table striped bordered hover style={{ marginTop: "40px" }}>
      <thead>
        <tr>
          <th>Name</th>
          <th>Address</th>
          <th>Borough</th>
          <th>Cuisine</th>
        </tr>
      </thead>
      <tbody>
        {/* display each restaurant in a table row */}
        {restaurants.map((restaurant) => {
          return (
            <tr
              onClick={() => {
                history.push(`/restaurant/${restaurant._id}`);
              }}
              key={restaurant._id}
            >
              <td>{restaurant.name}</td>
              <td>
                {restaurant.address.building} {restaurant.address.street}
              </td>
              <td>{restaurant.borough}</td>
              <td>{restaurant.cuisine}</td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
}
