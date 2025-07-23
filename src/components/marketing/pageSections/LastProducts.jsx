import Container from '../../elements/Container';
import Image1 from '../../../assets/images/products/LastProducts-1.jpg';
import Image2 from '../../../assets/images/products/LastProducts-2.jpg';
import Image3 from '../../../assets/images/products/LastProducts-3.jpg'

const LastProducts = () => {
    return (
        <>
            <Container> 
                <section className='grid grid-rows-2 grid-cols-2 gap-x-9 gap-y-9 w-full h-96 px-11 my-20 text-white uppercase'>

                    <article className='relative bg-primary row-span-2 w-full h-full rounded-md p-7'>
                        {/* <div className='absolute z-10 top-0 left-0 rounded-md w-full h-full bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 opacity-40'></div> */}
                        <img src={Image1} alt="image1" className='absolute top-0 left-0 w-full h-full object-cover z-0 rounded-md' />
                        <div className='relative z-10'>
                            <span className='block font-bold text-lg'>Killer Burger</span>
                            <span className='text-2xl font-black'>Burger le plus populaire</span>
                        </div>
                    </article>

                    <article className='relative bg-primary w-full h-full rounded-md p-7'>
                        <img src={Image2} alt="image2" className='absolute top-0 left-0 w-full h-full object-cover z-0 rounded-md' />
                        <div className='relative z-10'>
                            <span className='block font-bold text-lg'>Island Burger</span>
                        <span className='block text-2xl font-black'>plus de plaisir</span>
                        <span className='text-2xl font-black'>plus de goût</span>
                        </div>
                    </article>

                    <article className='relative bg-primary w-full h-full rounded-md p-7'>
                        <img src={Image3} alt="image3" className='absolute top-0 left-0 w-full h-full object-cover z-0 rounded-md' />
                        <div className='relative z-10'>
                            <span className='block font-bold text-lg'>Orlando's Burger</span>
                        <span className='text-2xl font-black'>frais & pimenté </span> 
                        </div>
                    </article>
                </section>
            </Container>
        </>
    );
}

export default LastProducts;
