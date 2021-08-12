import AllPosts from "../../components/posts/all-posts";

const DUMMY_POSTS = [
  {
    slug: "getting-started-with-nextjs",
    title: "Getting Started with NextJS",
    image: "getting-started-nextjs.png",
    excerpt:
      "NextJS is the React framwork for production -it makes building fullstack React apps a breeze.",
    date: "2021-08-10",
  },
  {
    slug: "getting-started-with-nextjs2",
    title: "Getting Started with NextJS",
    image: "getting-started-nextjs.png",
    excerpt:
      "NextJS is the React framwork for production -it makes building fullstack React apps a breeze.",
    date: "2021-08-10",
  },
  {
    slug: "getting-started-with-nextjs3",
    title: "Getting Started with NextJS",
    image: "getting-started-nextjs.png",
    excerpt:
      "NextJS is the React framwork for production -it makes building fullstack React apps a breeze.",
    date: "2021-08-10",
  },
  {
    slug: "getting-started-with-nextjs4",
    title: "Getting Started with NextJS",
    image: "getting-started-nextjs.png",
    excerpt:
      "NextJS is the React framwork for production -it makes building fullstack React apps a breeze.",
    date: "2021-08-10",
  },
];

function AllPostsPage() {
  return <AllPosts posts={DUMMY_POSTS} />;
}

export default AllPostsPage;
