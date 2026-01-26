import { Outlet } from 'react-router-dom';
import Header from './header/Header';

export default function Layout() {
    return (
        <div id="container" className="bg-black">
            <Header />
            <main>
                <Outlet />
            </main>
        </div>
    );
}
