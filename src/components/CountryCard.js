import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";


const CountryCard = (props) => {
    const {name, flag, region} = props;

    return (
        <Card style={{ width: '25rem', height: '20rem' }} className="text-center shadow-sm">
            <Card.Img
                variant="top"
                src={flag}
                alt={`${name}'s flag`}
                style={{ height: '12rem', objectFit: 'cover', width: '100%',}}
            />
            <Card.Body>
                <Card.Title>
                    <div>{name}</div> 
                    {/* changed this from a link as I added a hover */}
                </Card.Title>
                <p>{region}</p>
            </Card.Body>
        </Card>
    );
    
  
}

export default CountryCard;
