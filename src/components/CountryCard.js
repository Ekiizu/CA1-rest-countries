import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../css/CountryCard.css"; //custom css


const CountryCard = (props) => {
    const { name, flag, region } = props;

    return (
        <Card
            style={{
                width: '25rem',
                height: '20rem',
                borderRadius: '1rem', 
                overflow: 'hidden',
            }}
            className="text-center shadow-sm custom-border"
        >
            <Card.Img
                variant="top"
                src={flag}
                alt={`${name}'s flag`}
                style={{
                    height: '11rem',
                    objectFit: 'cover',
                    width: '100%',
                }}
            />
            <Card.Body
                className="d-flex flex-column align-items-center justify-content-center"
                style={{ height: '8rem', padding: '1rem' }}
            >
                <Card.Title style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>
                    {name}
                </Card.Title>
                <p className="text-muted" style={{ margin: 0 }}>{region}</p>
            </Card.Body>
        </Card>
    );
};

export default CountryCard;

