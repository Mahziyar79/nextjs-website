import Link from "next/link";
import { useAuth ,useAuthActions } from "../../context/AuthContext";

const Header = () => {
  const {user,loading} = useAuth();
  const dispatch = useAuthActions()
  return (
    <header className="bg-white shadow-md py-2 mb-8 sticky top-0">
      <div
        className={`container mx-auto xl:max-w-screen-xl ${
          loading ? "opacity-0" : "opacity-100"
        }`}
      >
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
            {user ? (
              <>
                <li>
                  <Link href="/">
                    <a onClick={()=>dispatch({type : "SIGNOUT"})} className="bg-red-600 text-red-100 rounded py-1 px-2">خروج</a>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <a className="py-2">پروفایل</a>
                  </Link>
                </li>
              </>
            ) : (
              <>
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
              </>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
