import {FaBars} from 'react-icons/fa';
import KeepLogo from '../../resources/keep_2020q4_48dp.png';

const Header = () => {
    return (
        <header className="header">
            <span>
                <FaBars/>
            </span>
            <span>
                <img alt="logo" src={KeepLogo} className="header__logo"/>
            </span>
            <span>
                Keep
            </span>
        </header>
    );
}

export default Header;