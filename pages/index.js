import { AdjustmentsIcon } from "@heroicons/react/outline";
import axios from "axios";
import Link from "next/link";
import DesktopCategory from "../components/DesktopCategory";
import DesktopNavSort from "../components/DesktopNavSort";
import MobileCategory from "../components/MobileCategory";
import PostList from "../components/PostList";

export default function Home({ postCategories, posts }) {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto lg:max-w-screen-xl px-4 md:px-0">
        <h1 className="text-center">Go to Blog Page</h1>
        <Link href="/blogs">
          <a>
            <p className="text-center text-teal-600">Blog Page</p>
          </a>
        </Link>
      </div>
    </div>
  );
}
