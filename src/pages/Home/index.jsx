import Banner from "../../components/Banner/Banner";
import Card from "../../components/Card/Card";
import data from "../../assets/data.json";
import BannerHome from "../../assets/images/banners/home.png";

function Home() {
    return (
        <section className='page-container home-container'>
            <div className='banner-container'>
                <Banner
                    img={BannerHome}
                    content='Chez vous, partout ailleurs'
                />
            </div>

            <div className='gallery-container'>
                {data.map(({ id, title, cover }) => (
                    <Card key={id} id={id} name={title} imageUri={cover} />
                ))}
            </div>
        </section>
    );
}

export default Home;
