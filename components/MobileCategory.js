import Link from "next/link";

const MobileCategory = ({postCategories}) => {
  return (
    <div className="md:hidden flex items-center overflow-auto gap-x-4 pb-5 pt-3">
      {postCategories.data.map((category) => {
        return (
          <Link href={`/blogs/${category.englishTitle}`} key={category._id}>
            <a className="border rounded-3xl whitespace-nowrap border-gray-500 text-gray-500 px-3 py-1">
              {category.title}
            </a>
          </Link>
        );
      })}
    </div>
  );
};

export default MobileCategory;
