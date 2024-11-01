import React from "react";
import { Container, Card } from "react-bootstrap";

const Credits = () => {
    return (
        <Container className="my-5">
            <Card className="p-4 shadow-lg" style={{ borderRadius: "1rem" }}>
                <h2>Credits</h2>
                <h5><strong>Created by:</strong> Emma Ann Hynes N00222012</h5>
                <h5><strong>APIs Used:</strong></h5>
                <ul>
                    <li>
                        <a href="https://restcountries.com/" target="_blank" rel="noopener noreferrer">
                            REST Countries API
                        </a>
                    </li>
                    <li>
                        <a href="https://openweathermap.org/api" target="_blank" rel="noopener noreferrer">
                            OpenWeather API
                        </a>
                    </li>
                    <li>
                        <a href="https://developers.google.com/maps" target="_blank" rel="noopener noreferrer">
                            Google Maps API
                        </a>
                    </li>
                </ul>
            </Card>
        </Container>
    );
};

export default Credits;