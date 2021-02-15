import { Spinner } from "react-bootstrap";

export default function Loading({ content }) {
  return (
    <div style={{ textAlign: "center", margin: "auto", marginTop: "35vh" }}>
      <Spinner animation="border" variant="success" />
      <div>Loading {content}...</div>
    </div>
  );
}
