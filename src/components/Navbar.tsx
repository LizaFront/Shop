import { NavLink, Outlet } from 'react-router-dom';

import { WrapperNavbar } from './styledComponents';

const Navbar = () => {
    return (
        <>
            <WrapperNavbar>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/catalog'>Catalog</NavLink>
            </WrapperNavbar>
            <Outlet />
        </>
    );
};

export default Navbar;
