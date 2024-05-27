import { Link, Outlet } from "react-router-dom";

export function Layout() {
    return (
        <>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/contacts">Contact</Link>
                    </li>
                </ul>
            </nav>

            <Outlet />
        </>
    );
}