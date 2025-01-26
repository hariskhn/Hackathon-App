import Link from 'next/link';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-blue-500 p-4">
      <div className="flex justify-between items-center">
        {/* Left side: Logo/Brand Name (Optional) */}
        <div className="text-white font-bold text-2xl text-center">
          <Link href="/">Saylani Microfinance</Link>
        </div>

        <div className="flex items-center space-x-4">
          <Link href="/signin" legacyBehavior>
            <a className="text-white font-bold text-xl hover:bg-blue-700 py-2 px-4 rounded-lg transition-all duration-300">
              Sign In
            </a>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
