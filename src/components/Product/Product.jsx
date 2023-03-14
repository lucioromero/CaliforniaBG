import "./Product.css"

function Product(props){
    return (
        <div className="card">
            <h3>{props.titulo}</h3>
            <h4>{props.precio}</h4>
            <p>{props.description}</p>
        </div>
    )
}

export default Product;