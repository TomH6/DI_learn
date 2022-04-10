//** BROWSER NAV **/
import ErrorBoundary from "./ErrorBoundary";


const NavBrowser = (props) => {
    return(
        <>
            <ErrorBoundary>
                <NavLink to='/'>Home</NavLink> |
            </ErrorBoundary>
            <ErrorBoundary>
                <NavLink to='/profile'>Profile Screen</NavLink> |
            </ErrorBoundary>
            <ErrorBoundary>
                <NavLink to='/shop'>Shop Screen</NavLink>
            </ErrorBoundary>
        </>
    )
};
export default NavBrowser