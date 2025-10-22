import { Link } from "react-router-dom";
import { Item } from "../Item/Item";
import "./ItemList.css"; 

export const ItemList = ({ list }) => {
    return (
    <div className="item-list">
        {list.length ? (
        list.map((prod) => (
        <Link
            to={`/detail/${prod.id}`}
            key={prod.id}
            className="item-card"
        >
            <Item {...prod} />
            </Link>
        ))
        ) : (
        <p>No hay productos</p> )}
    </div>);
};

