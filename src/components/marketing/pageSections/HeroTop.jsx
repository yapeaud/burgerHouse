import Illustration from '../../../assets/images/background/bg-food.jpg'
import Container from '../../elements/Container';
import Header from './Header';


const HeroTop = () => {
    return (
        <>
            <main className="bg-primary w-full h-screen ">
                <article className="bg-repeat w-full h-full" style={{ backgroundImage: `url(${Illustration})` }}>
                    <Container>
                        <Header />
                    </Container>
                </article>
            </main>
        </>
    );
}

export default HeroTop;
