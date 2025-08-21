import './Header.css';

const Header = ({title, left}) => {
    return(
        <div className='Header'>
            <div className='header_left'>
                {left}
            </div>

            <div className='header_title'>
                {title}
            </div>

            <div className='header_right'>
                test right
            </div>
        </div>
    );
};

export default Header;