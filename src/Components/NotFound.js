import { Card } from "react-bootstrap";

export default function NotFound({ content }) {
  return (
    <Card style={{ top: "20px", backgroundColor: "#f5f5f5" }}>
      <Card.Body>
        <Card.Text>{content}</Card.Text>
      </Card.Body>
    </Card>
  );
}
