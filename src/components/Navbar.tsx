import { memo } from 'react';
import { NavLink, Outlet } from 'react-router-dom';

import { WrapperNavbar } from './styledComponents';

const Navbar = memo(() => {
    return (
        <>
            <WrapperNavbar>
                <NavLink to='/'>Catalog</NavLink>
            </WrapperNavbar>
            <Outlet />
        </>
    );
});

export default Navbar;
