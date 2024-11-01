import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import CountryCard from '../components/CountryCard';
import { Row, Col, Container, Form, FormControl } from 'react-bootstrap';

const Home = () => {
    const [countriesList, setCountriesList] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        // fetch all countries if no search term is provided
        if (!searchTerm) {
            axios.get('https://restcountries.com/v3.1/all')
                .then(response => {
                    console.log(response.data);
                    setCountriesList(response.data);
                })
                .catch(error => {
                    console.error(error);
                });
        } else {
            // filter countries based on the search term
            setCountriesList(prevCountriesList =>
                prevCountriesList.filter(country =>
                    country.name.common.toLowerCase().includes(searchTerm.toLowerCase())
                )
            );
        }
    }, [searchTerm]);

    const handleChange = (e) => {
        setSearchTerm(e.target.value);
    };

    let countryCards = countriesList.map((country) => (
        <Col key={country.ccn3} className="mb-4">
            <Link to={`/country/${country.name.common}`} style={{ textDecoration: 'none' }}>
                <CountryCard
                    flag={country.flags.png}
                    name={country.name.common}
                    region={country.region}
                />
            </Link>
        </Col>
    ));

    return (
        <Container className="my-4">
            
            <Form className="d-flex justify-content-right mb-4">
                <FormControl
                    type="search"
                    placeholder="Search for a country"
                    className="w-50"
                    onChange={handleChange}
                />
            </Form>
            <Row md={3} xs={2} className="g-4">
                {countryCards}
            </Row>
        </Container>
    );
};

export default Home;

