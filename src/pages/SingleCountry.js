import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { Row, Col, Image, Container, Card } from "react-bootstrap";
import MapComponent from '../components/GoogleMap.js';

const SingleCountry = () => {
    const { name } = useParams();

    const [country, setCountry] = useState(null);

    useEffect(() => {
        axios
            .get(`https://restcountries.com/v3.1/name/${name}?fullText=true`)
            .then((res) => {
                console.log("Response:", res.data[0]);
                setCountry(res.data[0]);
            })
            .catch((e) => {
                console.error(e);
            });
    }, [name]);

    if (!country) {
        return <div>Loading...</div>;
    }

    // Extract latitude and longitude from the country data for the google map API
    const lat = country.latlng[0]; // Latitude
    const lng = country.latlng[1]; // Longitude

    console.log("Latitude:", lat, "Longitude:", lng); 

    return (
        <Container className="my-5">
            <Card className="p-4 shadow-lg">
                <Row className="align-items-center">
                    <Col md={6} className="text-center mb-4 mb-md-0">
                        <Image
                            src={country.flags.png}
                            alt={`${country.name.common}'s flag`}
                            rounded
                            fluid
                            style={{ maxHeight: "300px" }}
                        />
                    </Col>

                    <Col md={6}>
                        <h1 className="mb-3 text">{country.name.common}</h1>
                        <h2 className="mb-3 text-muted">Official name: {country.name.official}</h2>
                        <p><strong>Region:</strong> {country.region}</p>
                        {country.subregion && <p><strong>Sub-Region:</strong> {country.subregion}</p>}

                        <p><strong>Languages:</strong></p>
                        <ul className="list-unstyled">
                            {Object.values(country.languages).map((language, index) => (
                                <li key={index}>{language}</li>
                            ))}
                        </ul>

                        <p>
                            <strong>Currency:</strong> {Object.values(country.currencies)[0].name} 
                            ({Object.values(country.currencies)[0].symbol})
                        </p>
                    </Col>
                </Row>
            </Card>

            <div className="my-5">
                <h2>Location</h2>
                <MapComponent lat={lat} lng={lng} /> 
            </div>
        </Container>
    );
};

export default SingleCountry;


