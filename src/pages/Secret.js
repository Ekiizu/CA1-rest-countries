import React from "react";
import { Container, Card } from "react-bootstrap";

const Secrets = () => {
    return (
        <Container className="my-5">
            <Card className="p-4 shadow-lg" style={{ borderRadius: "1rem" }}>
                <h2>Coola Boola</h2>
                <ul>
                    <li>
                        <a href="https://youtu.be/Dwi7NF8-3Jk?si=dWEYoH-PYjIcPJG9/" target="_blank" rel="noopener noreferrer">
                            Secret!
                        </a>
                    </li>
                    <li>
                        <a href="https://youtu.be/8liPBsUtND4?si=zwgKGWSg6_NqPjGT" target="_blank" rel="noopener noreferrer">
                            Secret TWO!
                        </a>
                    </li>
                   
                </ul>
            </Card>
        </Container>
    );
};

export default Secrets;