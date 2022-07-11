import { AdjustmentsIcon } from "@heroicons/react/outline";

const DesktopNavSort = () => {
  return (
    <div className="hidden md:block md:col-span-9">
      <div className="bg-white rounded-3xl px-4">
        <div className="flex gap-x-2 items-center ">
          <div className="ml-5 flex gap-x-2 items-center">
            <AdjustmentsIcon className="w-6 h-6" />
            <span className="text-gray-700">مرتب سازی :</span>
          </div>
          <ul className="flex gap-x-4 items-center ">
            <li className="cursor-pointer py-4 text-gray-700">پربازدید ترین</li>
            <li className="cursor-pointer py-4 text-gray-700">محبوب ترین</li>
            <li className="cursor-pointer py-4 text-gray-700">جدیدترین</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DesktopNavSort;
