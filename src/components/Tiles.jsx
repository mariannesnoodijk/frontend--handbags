

function Tile( {tileImage, tileImageAlt, tileTitle, children} ) {
    return (
        <section>
            { tileImage && <img src={tileImage} alt={tileImageAlt}/> }
            <h2>{tileTitle}</h2>
            {children}
        </section>
    )
}

export default Tile;