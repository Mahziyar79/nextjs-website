import Link from "next/link";

const Header = () => {
  return (
   <header className="bg-white shadow-md py-2 mb-8">
     <div className="container mx-auto xl:max-w-screen-xl">
      <nav className="flex justify-between">
        <ul className="flex items-center gap-x-8">
          <li>
            <Link href="/">
              <a className="py-2 block">خانه</a>
            </Link>
          </li>
          <li>
            <Link href="/blogs">
              <a className="py-2 block">بلاگ ها</a>
            </Link>
          </li>
        </ul>
        <ul className="flex items-center gap-x-8">
          <li>
            <Link href="/">
              <a className="py-2">پروفایل</a>
            </Link>
          </li>
          <li>
            <Link href="/signup">
              <a className="py-2">ثبت نام</a>
            </Link>
          </li>
          <li>
            <Link href="/signin">
              <a className="py-2 block">ورود</a>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
   </header>
  );
};

export default Header;
