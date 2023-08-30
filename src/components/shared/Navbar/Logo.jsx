import { Link } from 'react-router-dom';
import logoImg from '../../../assets/images/logo.png'
import logoImgMd from '../../../assets/images/logo-md.png'

const Logo = () => {
    return (
        <Link to='/'>
            <img className='hidden xl:block' src={logoImg} alt="logo" width='100' height='100' />
            <img className='hidden md:block xl:hidden' src={logoImgMd} alt="logo" width='35' height='35' />
        </Link>
    );
};

export default Logo;