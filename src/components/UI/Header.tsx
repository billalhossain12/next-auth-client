import Link from "next/link";

const Header = () => {
  return (
    <header className="flex justify-between items-center px-[3rem] py-5">
      <h1 className="text-[2rem] font-bold">
        <Link href="/">ProductPulse</Link>
      </h1>

      <ul className="flex items-center gap-[3rem] text-[1.3rem] font-medium">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/shop">Shop</Link>
        </li>
        <li>
          <Link href="/auth/login">Login</Link>
        </li>
        <li>
          <Link href="/auth/register">Register</Link>
        </li>
      </ul>
    </header>
  );
};
export default Header;
