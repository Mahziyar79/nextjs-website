import { ChevronDownIcon } from "@heroicons/react/outline";
import Link from "next/link";
import { useState } from "react";

const DesktopCategory = ({postCategories}) => {
    const [isOpenAcc, setIsOpenAcc] = useState(true);

    return ( 
         <div className="hidden md:block md:col-span-3 md:row-span-2">
         <div className="bg-white rounded-3xl overflow-hidden">
           {/* Accordion Header */}
           <div
             onClick={() => setIsOpenAcc(!isOpenAcc)}
             className="flex items-center justify-between p-4 cursor-pointer bg-purple-200"
           >
             <span>دسته بندی مقالات</span>
             <ChevronDownIcon
               className={`w-6 h-6 stroke-violet-700 transition-all duration-200 ${
                 isOpenAcc && "rotate-180"
               }`}
             />
           </div>
           <div className={`${isOpenAcc ? "block" : "hidden"}`}>
             <Link href="/blogs">
               <a className="block pr-4 hover:bg-purple-50 py-3">
                 همه مقالات
               </a>
             </Link>
             {postCategories.data.map((category) => {
               return (
                 <Link
                   href={`/blogs/${category.englishTitle}`}
                   key={category._id}
                 >
                   <a className="block pr-4 hover:bg-purple-50 py-3">
                     {category.title}
                   </a>
                 </Link>
               );
             })}
           </div>
         </div>
       </div>
     );
}
 
export default DesktopCategory;