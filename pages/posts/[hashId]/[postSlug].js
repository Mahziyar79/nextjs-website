import axios from "axios";
import Link from "next/link";
import PostInteraction from "../../../components/PostInteraction";
import ToPersianDigits from "../../../components/ToPersinaDigits";
import { FaTelegram } from "react-icons/fa";
import { IoLogoTwitter, IoLogoInstagram } from "react-icons/io";
import { MdContentCopy, MdCheckCircleOutline } from "react-icons/md";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { useState } from "react";
import PostList from "../../../components/PostList";

const PostPage = ({ post }) => {
  const [copied, setCopied] = useState(false);
  const { data: postInfo } = post;

  const copyHandler = () => {
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <div>
      <div className="bg-gray-50 min-h-screen">
        <div className="container mx-auto lg:max-w-screen-lg px-4 md:px-0 pt-6">
          {/* blog header */}
          <div className="md:flex-row items-start flex mx-auto lg:max-w-screen-md md:items-center justify-between flex-col gap-y-6">
            <div className="flex items-center">
              <div>
                <img
                  src="/images/authorImg.jpg"
                  className="w-24 h-24 rounded-full"
                />
              </div>
              <div className="flex flex-col gap-y-2">
                <div className="flex items-center">
                  <span className="text-sm font-bold mx-3">
                    مهزیار گیلانپور
                  </span>
                  <div className="text-xs px-2 py-1 rounded-xl bg-blue-100 text-blue-600 hover:text-blue-100 hover:bg-blue-600 transition-all duration-200 cursor-pointer">
                    <Link href={`/blogs/${postInfo.category.englishTitle}`}>
                      <a>
                        <span> {postInfo.category.title}</span>
                      </a>
                    </Link>
                  </div>
                </div>
                <span className="text-xs mr-3 text-gray-600">
                  Front End Developer
                </span>
                <div className="mr-3 items-center text-xs flex gap-x-2">
                  <span>
                    {new Date(postInfo.createdAt).toLocaleDateString("fa-IR")}
                  </span>
                  <span className="text-2xl mt-[-12px]">.</span>
                  <div>
                    <span>زمان مطالعه :</span>
                    <span>{ToPersianDigits(postInfo.readingTime)}</span>
                    <span>دقیقه</span>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <PostInteraction blog={postInfo} />
            </div>
          </div>
          {/* blog content */}
          <main className="mt-8 prose mx-auto max-w-screen-md prose-slate md:prose-h1:text-3xl prose-h1:text-2xl md:prose-h2:text-2xl prose-h2:text-xl prose-h1:font-bold prose-img:rounded-xl">
            <h1 className="text-sm">{postInfo.title}</h1>
            <h2>عنوان تستی اول</h2>
            <p>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
              نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،
              کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان
              جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای
              طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان
              فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری
              موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد
              نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل
              دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
            </p>
            <img src={postInfo.coverImage} />
            <h2>عنوان تستی دوم</h2>
            <p>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
              نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،
              کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان
              جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای
              طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان
              فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری
              موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد
              نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل
              دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
            </p>
          </main>
          {/* post tags */}
          <section className="flex items-center justify-center md:justify-start gap-x-3 mt-8 flex-wrap gap-y-2 md:gap-y-0 mb-6">
            {["ری اکت", "فرانت اند", "نکست", "تیلویند"].map((tag, index) => {
              return (
                <span
                  className="bg-gray-200 text-slate-500 py-1 px-3 rounded-full border border-slate-400 cursor-pointer"
                  key={index}
                >
                  {tag}
                </span>
              );
            })}
          </section>
          <div className=" flex items-center flex-col gap-y-3 md:flex-row justify-between">
            {/* post interactions */}
            <PostInteraction blog={postInfo} />
            {/* post share */}
            <section className="flex items-center gap-x-6 w-full justify-around md:justify-end">
              <div className="flex items-center gap-x-4 my-4">
                <a rel="noreferrer" href="#" target="_blank">
                  <FaTelegram
                    size={24}
                    className="fill-gray-400 hover:fill-gray-500 transition-all duration-150 cursor-pointer"
                  />
                </a>
                <a rel="noreferrer" href="#" target="_blank">
                  <IoLogoTwitter
                    size={24}
                    className="fill-gray-400 hover:fill-gray-500 transition-all duration-150 cursor-pointer"
                  />
                </a>
                <a rel="noreferrer" href="#" target="_blank">
                  <IoLogoInstagram
                    size={24}
                    className="fill-gray-400 hover:fill-gray-500 transition-all duration-150 cursor-pointer"
                  />
                </a>
              </div>
              <div>
                <CopyToClipboard
                  text={`http://localhost:3000/posts/${postInfo.hashId}/${postInfo.slug}`}
                  onCopy={() => copyHandler()}
                >
                  <div className="flex cursor-pointer border border-slate-300 items-center text-sm gap-x-2 bg-gray-100 px-4 py-2 rounded-2xl text-gray-600">
                    {copied ? (
                      <>
                        <span>کپی شد</span>
                        <span>
                          <MdCheckCircleOutline size={20} />
                        </span>
                      </>
                    ) : (
                      <>
                        <span>کپی لینک</span>
                        <span>
                          <MdContentCopy size={20} />
                        </span>
                      </>
                    )}
                  </div>
                </CopyToClipboard>
              </div>
            </section>
          </div>
          {/* related posts */}
          <div className="h-0.5 w-full bg-slate-400 my-4"></div>
          {postInfo.related.length ? (
            <section>
              <h2 className="text-2xl mb-6 mt-5">پست های مرتبط</h2>
              <PostList posts={postInfo.related} />
            </section>
          ) : <></>}
        </div>
      </div>
    </div>
  );
};

export default PostPage;

export async function getServerSideProps(ctx) {
  const { params } = ctx;
  const { data: post } = await axios.get(
    `http://localhost:5000/api/posts/${params.postSlug}`
  );

  return {
    props: {
      post,
    },
  };
}
