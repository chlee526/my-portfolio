import { useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

export default function Header() {
    const navigate = useNavigate();
    const location = useLocation();

    const ROUTES = [
        {
            path: '/',
            name: 'Home',
        },
        {
            path: '/skills',
            name: 'Skills',
        },
        {
            path: '/career',
            name: 'Career',
        },
        {
            path: '/portfolio',
            name: 'Portfolio',
        },
    ];

    useEffect(() => {
        console.log('location', location);
    }, [location]);

    return (
        <header className="sticky top-0 left-0 w-full z-10 bg-gray-200 h-[67px] px-[30px]">
            <div className="l-inner h-full flex items-center justify-between">
                <div className="flex items-center gap-[10px] p-[6px] cursor-pointer" onClick={() => navigate('/')}>
                    <div className="w-[30px] h-[30px]">
                        <img src="/assets/images/logo.svg" alt="logo" />
                    </div>
                    <h1 className="text-[18px] font-bold">CHLEE</h1>
                </div>
                <nav>
                    <ul className="flex items-center gap-[20px]">
                        {ROUTES.map((route) => (
                            <li className={`${location.pathname === route.path ? 'active' : ''} transition-base`} key={route.path}>
                                <Link to={route.path}>{route.name}</Link>
                            </li>
                        ))}
                    </ul>
                </nav>

                <button className="group px-[20px] py-[6px] rounded-[8px] border-gray-100 border text-[18px] font-bold transition-base hover:bg-orange hover:border-orange">
                    <span className="text-orange group-hover:text-white transition-base">Contact</span>
                </button>
            </div>
        </header>
    );
}
