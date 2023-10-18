import './App.css';

import bag1 from './assets/bag_1.png';
import bag2 from './assets/bag_2.png';
import bag3 from './assets/bag_3.png';
import bag4 from './assets/bag_4.png';

import brand from './assets/brand.png';
import ourStory from './assets/our_story.png';

import Button from './components/Button.jsx';
import Product from "./components/Product.jsx";
import Tile from "./components/Tiles.jsx";

function App() {


    return (
        <>
            <h1>Handbags & Purses</h1>

            <nav>
                <Button
                    buttonText="to the collection"
                    disabled={false}
                />
                <Button
                    buttonText="shop all bags"
                    disabled={false}
                />
                <Button
                    buttonText="pre-orders"
                    disabled={true}
                />
            </nav>

            <main>
                <Product
                    productLabel="Best seller"
                    productImage={bag1}
                    productImageAlt="the handy bag"
                    productName="The Handy Bag"
                    productPrice={400}
                />
                <Product
                    productLabel="Best seller"
                    productImage={bag2}
                    productImageAlt="the stylish bag"
                    productName="The Stylish Bag"
                    productPrice={250}
                />

                <Product
                    productLabel="New collection"
                    productImage={bag3}
                    productImageAlt="the simple bag"
                    productName="The Simple Bag"
                    productPrice={300}
                />

                <Product
                    productLabel="New collection"
                    productImage={bag4}
                    productImageAlt="the trendy bag"
                    productName="The Trendy Bag"
                    productPrice={150}
                />

            </main>

            <footer>
                <Tile
                    tileTitle="The brand"
                >
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis ducimus ea, eos illo itaque
                        mollitia nisi non officia optio quibusdam, recusandae, repellat sint sit soluta.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis ducimus ea, eos illo itaque
                        mollitia nisi non officia optio quibusdam, recusandae, repellat sint sit soluta.</p>
                </Tile>

                <Tile
                    tileImage={brand}
                    tileImageAlt="the brand logo"
                />

                <Tile
                    tileTitle="Our story">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis ducimus ea, eos illo itaque
                    mollitia nisi non officia optio quibusdam, recusandae, repellat sint sit soluta.</p>
                </Tile>

                <Tile
                    tileImage={ourStory}
                    tileImageAlt="our story"
                />

              

            </footer>
        </>
    )
}

export default App
