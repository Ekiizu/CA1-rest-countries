import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { Row, Col, Image, Container, Card } from "react-bootstrap";
import MapComponent from '../components/GoogleMap.js';
import CurrentWeatherComponent from '../components/CurrentWeather.js';

const SingleCountry = () => {
    const { name } = useParams();
    const [country, setCountry] = useState(null);
    const [locationKey, setLocationKey] = useState(null); 
    const apiKey = "OgEH38w3L3n4cnB1CAuTSMK3EMfHHPhi"; 
   

    useEffect(() => {
        const fetchCountryData = async () => {
            try {
                const response = await axios.get(`https://restcountries.com/v3.1/name/${name}?fullText=true`);
                console.log("Response:", response.data[0]);
                setCountry(response.data[0]);

                // Fetch the location key using the country name
                const locationResponse = await axios.get(`http://dataservice.accuweather.com/locations/v1/cities/search`, {
                    params: {
                        apikey: apiKey,
                        q: response.data[0].name.common // Using the common name of the country
                    }
                });

                // Set the location key from the response
                if (locationResponse.data.length > 0) {
                    setLocationKey(locationResponse.data[0].Key); // Use the first result
                } else {
                    console.error("No location key found.");
                }
            } catch (error) {
                console.error(error);
            }
        };

        fetchCountryData();
    }, [name, apiKey]);

    if (!country) {
        return <div>Loading...</div>;
    }

    // Extract latitude and longitude from the country data for the Google Map API
    const lat = country.latlng[0]; // Latitude
    const lng = country.latlng[1]; // Longitude

    console.log("Latitude:", lat, "Longitude:", lng); 

    return (
        <Container className="my-5">
            <Card className="p-4 shadow-lg">
                <Row className="align-items-center">
                    <Col md={6}>
                        <h1 className="mb-3 text">{country.name.common}</h1>
                        <h3 className="mb-3 text-muted">Official name: {country.name.official}</h3>
                        <h5><strong>Region:</strong> {country.region}</h5>
                        {country.subregion && <p><strong>Sub-Region:</strong> {country.subregion}</p>}

                        <h5><strong>Languages:</strong></h5>
                        <ul className="list-unstyled">
                            {Object.values(country.languages).map((language, index) => (
                                <li key={index}>{language}</li>
                            ))}
                        </ul>

                        <h5>
                            <strong>Currency:</strong> {Object.values(country.currencies)[0].name} 
                            ({Object.values(country.currencies)[0].symbol})
                        </h5>
                    </Col>

                    <Col md={6} className="text-center mb-4 mb-md-0">
                        <Image
                            src={country.flags.png}
                            alt={`${country.name.common}'s flag`}
                            rounded
                            fluid
                            style={{ maxHeight: "1000px" }}
                        />
                    </Col>
                </Row>

            

                <div className="my-5">
                    <h2>Location</h2>
                    <MapComponent lat={lat} lng={lng} /> 
                </div>

    
                <div className="my-5">
                    <h2>Weather Forecast</h2>
                    <Col md={4} className="text-right mb-4 mb-md-0">
                        <CurrentWeatherComponent lat={lat} lon={lng} />
                    </Col>
                </div>

        

            </Card>
        </Container>
    );
};

export default SingleCountry;

