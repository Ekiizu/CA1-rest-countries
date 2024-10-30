import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Image, Row, Col, Container, Card } from "react-bootstrap";

const Country = () => {
  const { name } = useParams();

  // Store the country data in a state
  const [country, setCountry] = useState({});

  // Fetch detailed country data
  useEffect(() => {
    axios
      .get(`https://restcountries.com/v3.1/name/${name}?fullText=true`)
      .then((response) => {
        setCountry(response.data[0]);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [name]);

  if (!country.name || !country.flags) {
    return <p>Loading...</p>;
  }

  return (
    <Container className="my-5">
      <Card className="p-4 shadow-lg">
        <Row className="align-items-center">
          <Col md={6} className="text-center">
            <Image
              src={country.flags?.png}
              alt={`${country.name?.common}'s flag`}
              rounded
              fluid
              style={{ maxHeight: "300px" }}
            />
          </Col>
          <Col md={6}>
            <h3 className="text-center mb-4">{country.name.common}</h3>
            <ul className="list-unstyled">
              <li><strong>Official Name:</strong> {country.name.official}</li>
              <li><strong>Region:</strong> {country.region}</li>
              <li><strong>Subregion:</strong> {country.subregion}</li>
              <li>
                <strong>Currency:</strong> {Object.values(country.currencies)[0].name}
              </li>
            </ul>
          </Col>
        </Row>
      </Card>
    </Container>
  );
};

export default Country;
