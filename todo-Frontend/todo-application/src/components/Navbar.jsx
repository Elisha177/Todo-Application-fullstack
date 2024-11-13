
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className='bg-white border border-gray-200 dark:border-gray-700 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-800 shadow'>
            <div className='container flex flex-wrap items-center mx-auto justify-around'>
                <ul className='flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium'>
                    <Link to="/">Home</Link>
                    <Link to="/signup">Signup</Link>
                    <Link to="/login">Login</Link>
                    <Link to="/profile">Profile</Link>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar