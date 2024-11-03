import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto text-center">
        <p>
          &copy; {new Date().getFullYear()} ProductPulse. All rights
          reserved.
        </p>
        <nav className="mt-4">
          <ul className="flex justify-center space-x-4">
            <li>
              <Link href="/privacy-policy" className="hover:text-blue-400">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/terms-of-service" className="hover:text-blue-400">
                Terms of Service
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-blue-400">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};
export default Footer;
