import Illustration from "../../../assets/images/background/bg-food.jpg";
import Container from "../../elements/Container";
import Header from "./Header";
import Product from "../../../assets/images/heroTop/burger-hero-top.png";
import Button from "../../elements/Button";
const HeroTop = () => {
    return (
        <>
            <main className="bg-primary w-full">
                <article className="bg-repeat w-full h-full pb-32" style={{ backgroundImage: `url(${Illustration})` }}>
                    <Container>
                        <Header />
                        <section className="w-full mt-28 relative">
                            <img src={Product} alt="Un menu de hambuger avec une boisson et frites" className="absolute z-0 -top-64 right-0 w-6/12" />

                            <article className="absolute right-80 top-40 rounded-full bg-red-primary w-40 h-40 p-3">
                                <div className="w-full h-full rounded-full border-2 border-dashed border-white text-white flex items-center justify-center">
                                    <div className="text-center">
                                        <span className="block font font-extrabold">
                                            <span className="text-5xl">5</span>.49€
                                        </span>
                                        <span className="tracking-widest uppercase text-sm">seulement</span>
                                    </div>
                                </div>
                            </article>

                            <article className="relative z-10 text-secondary uppercase">
                                <h1 className="mb-4 font-semibold">C'est le moment de goûter au bon goût des hambugers.</h1>
                                <h2 className="font-secondary shadowTitleSecondary">
                                    <span className="text-8xl block">Burger</span>
                                    <span className="text-6xl">House</span><span className="text-4xl ml-3">Click<span className="text-red-primary">&</span>Collect</span>
                                </h2>
                            </article>
                        </section>
                        <Button className="mt-5" color="secondary" theme="big">Créer un compte</Button>
                    </Container>
                </article>
            </main>
        </>
    );
};

export default HeroTop;
