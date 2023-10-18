

function Product( {productLabel, productImage, productImageAlt, productName , productPrice} ) {
    return (
        <article>
            <span>{productLabel}</span>
            <img src={productImage} alt={productImageAlt}/>
            <p>{productName}</p>
            <h4>€{productPrice}</h4>
        </article>
    )
}

export default Product;