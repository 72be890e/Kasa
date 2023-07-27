import { Link } from "react-router-dom";

function Card({ id, name, imageUri }) {
    const style = {
        backgroundImage: `url(${imageUri})`,
    };

    return (
        <Link className='component-card' to={`/housing/${id}`} style={style}>
            <p>{name}</p>
        </Link>
    );
}

export default Card;
