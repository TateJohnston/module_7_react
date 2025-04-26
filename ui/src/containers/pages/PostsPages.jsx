import { Outlet, useParams, Link } from "react-router-dom";
import { useQuery } from "../../stores/useQuery";
import { useSearchParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export function PostsPage() {
  return (
    <div className="Posts">
      <h1>Posts</h1>
      <Outlet />
    </div>
  );
}

export function PostList() {
  const [searchParams, setSearchParams] = useSearchParams();
  const limit = searchParams.get("limit") ? searchParams.get("limit") : 5;

  const [data, isLoading] = useQuery(
    `https://jsonplaceholder.typicode.com/posts?_limit=${limit}`
  );

  const postList = data?.map((post) => (
    <li style={{ color: "black" }} key={post.id}>
      <Link to={"/posts/" + post.id}>
        Post #{post.id}: {post.title}
      </Link>
    </li>
  ));
  return <ul style={{ backgroundColor: "darkgray" }}>{postList}</ul>;
}

export function Post() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [data, isLoading] = useQuery(
    "https://jsonplaceholder.typicode.com/posts/" + id
  );
  const goToNext = () => {
    navigate(`/posts/${parseInt(id) + 1}`);
  };
  return (
    <div className="Post">
      {data && !isLoading ? (
        <>
          <h3>
            Post #{data.id}: {data.title}
          </h3>
          <p>{data.body}</p>
        </>
      ) : (
        "Loading ..."
      )}
      <button onClick={goToNext}>To Next Post</button>
    </div>
  );
}
