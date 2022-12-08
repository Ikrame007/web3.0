import logo from '../../images/logo.png';

const Navbar = () => {

    return (
        <nav className='w-full flex justify-center items-center p-4'>
            <img src={logo} alt="logo" className='w-64 cursor-pointer' />
        </nav>
    );
}

export default Navbar;