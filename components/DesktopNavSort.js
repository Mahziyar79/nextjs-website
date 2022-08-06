import { AdjustmentsIcon } from "@heroicons/react/outline";
import { useRouter } from "next/router";
import { useState } from "react";

const DesktopNavSort = () => {
  const [sort, setSort] = useState("newest");
  const router = useRouter();
  const sortOptions = [
    { label: "پربازدید ترین", id: "most" },
    { label: "محبوب ترین", id: "popular" },
    { label: "جدید ترین", id: "newest" },
  ];

  const setSortHandler = (id) => {
    setSort(id);
    router.query.sort = id;
    router.push(router);
  };

  return (
    <div className="hidden md:block md:col-span-9">
      <div className="bg-white rounded-3xl px-4">
        <div className="flex gap-x-2 items-center ">
          <div className="ml-5 flex gap-x-2 items-center">
            <AdjustmentsIcon className="w-6 h-6" />
            <span className="text-gray-700">مرتب سازی :</span>
          </div>
          <ul className="flex gap-x-4 items-center ">
            {sortOptions.map(({ label, id }) => {
              return (
                <>
                  <li
                    key={id}
                    className={`relative cursor-pointer py-4 ${
                      id === sort ? "text-purple-700" : "text-gray-700"
                    }`}
                    onClick={() => setSortHandler(id)}
                  >
                    {label}
                    {id === sort && (
                      <span className="absolute right-0 bottom-0 h-1 rounded w-8 bg-purple-700"></span>
                    )}
                  </li>
                </>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DesktopNavSort;
