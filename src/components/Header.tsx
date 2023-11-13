import Portrait from '../assets/blob-haikei 1.png'
import './styles.scss'

const Header = () => {
  return (
    <section className="hero md:pl-20 md:pr-20">
      

        <div className='py-48 text-center md:text-left'>
        <h1 className="text-9xl font-bold head-text">Hello</h1>
        <p className="text-4xl head-text mt-5">Lorem ipsum dolor sit amet</p>
        <p className="text-4xl mt-5">Lorem ipsum dolor sit amet elit.</p>
        </div>

      <img src={Portrait} className='head-img hidden md:block'/>
      
    </section>
  );
};

export default Header;

