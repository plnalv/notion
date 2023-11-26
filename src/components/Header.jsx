import { Link, useLocation } from 'react-router-dom'

export default function Header({ userEmail }) {
    const location = useLocation()

    return (
        <div className="flex flex-row justify-between">
            <h1>Hello, {userEmail}</h1>
            <header className="flex flex-row gap-10">
                <Link
                    to="/home"
                    className={`font-medium ${
                        location.pathname === '/'
                            ? 'text-[#000000]'
                            : 'text-[#a1a1a1] hover:text-[#000000]'
                    }`}
                >
                    Home
                </Link>
                <Link
                    to="/notes"
                    className={`font-medium ${
                        location.pathname === '/notes'
                            ? 'text-[#000000]'
                            : 'text-[#a1a1a1] hover:text-[#000000]'
                    }`}
                >
                    Notes
                </Link>
                <Link
                    to="/login"
                    className={`font-medium ${
                        location.pathname === '/login'
                            ? 'text-[#000000]'
                            : 'text-[#a1a1a1] hover:text-[#000000]'
                    }`}
                >
                    Log out
                </Link>
            </header>
        </div>
    )
}
