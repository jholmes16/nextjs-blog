import AllPosts from "../../components/posts/all-posts";
import { getAllPosts } from "../../lib/posts-util";

function AllPostsPage(props) {
  return <AllPosts posts={props.posts} />;
}

export function getStaticProps() {
  const getPosts = getAllPosts();

  return {
    props: {
      posts: getPosts,
    },
  };
}

export default AllPostsPage;
