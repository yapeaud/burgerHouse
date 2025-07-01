import Logo from '../../../assets/svg/Logo-burger-house.svg';

const Header = () => {
    return (
        <>
            <section className='flex items-center justify-between py-10 bg-gray-600'>
                <article className='bg-red-500 h-20 w-full'>
                    <img src={Logo} alt="Logo Burger House" className="w-64" /> 
                </article>
                <article className='bg-green-500 h-20 w-full'></article>
            </section>
        </>
    );
}

export default Header;
