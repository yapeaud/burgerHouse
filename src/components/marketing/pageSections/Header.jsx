import Logo from '../../../assets/svg/Logo-burger-house.svg';
import Icone from '../../../assets/svg/ico-bag-clickAndCollect.svg';
import Button from '../../elements/Button';

const Header = () => {
    return (
        <>
            <section className='relative z-10 flex items-center justify-between py-10'>
                <article className='w-full'>
                    <img src={Logo} alt="Logo Burger House" className="w-64" /> 
                </article>
                <article className='w-full text-secondary'>
                    <div className='flex items-center justify-end'>
                        <img src={Icone} alt='' className="w-5 h-5 mr-1" />
                        <span>Commandez votre repas en ligne</span> 
                    </div>
                    <div className='mt-5 flex items-center justify-end'>
                        <Button className='tracking-widest mr-3'>Inscription</Button>
                        <Button className='tracking-widest' color='secondary'>Connexion</Button>
                    </div>
                </article>
            </section>
        </>
    );
}

export default Header;
