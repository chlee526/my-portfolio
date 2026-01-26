import { Link, useNavigate } from 'react-router-dom';

export default function Header() {
    const navigate = useNavigate();

    return (
        <header className="sticky top-0 left-0 w-full z-10 bg-gray-200 h-[67px] px-[30px]">
            <div className="max-w-[1200px] h-full flex items-center justify-between mx-auto">
                <div className="flex items-center gap-[10px]" onClick={() => navigate('/')}>
                    <div className="w-[30px] h-[30px]">
                        <img src="/assets/images/logo.svg" alt="logo" />
                    </div>
                    <h1>CHLEE</h1>
                </div>
                <nav>
                    <ul className="flex items-center gap-[20px]">
                        <li>
                            <Link to="/">Home</Link>
                        </li>

                        <li>
                            <Link to="/skills">Skills</Link>
                        </li>
                        <li>
                            <Link to="/career">Career</Link>
                        </li>
                        <li>
                            <Link to="/portfolio">Portfolio</Link>
                        </li>
                    </ul>
                </nav>

                <button>
                    <span>Contact</span>
                </button>
            </div>
        </header>
    );
}
