import Comments from "../comments/Comments";
import "./BlogComponent.css";

function BlogComponent(props) {
  const { posts } = props;

  return (
    <div className="blog-posts">
      {posts.map((post) => (
        <article className="blog-post" key={post.id} id={`item-${post.id}`}>
          {post.image && (
            <div className="blog-post-image">
              <img src={post.image} alt={post.title} />
            </div>
          )}
          <h3>{post.title}</h3>
          <p className="blog-meta">
            By {post.author} on {post.date}
          </p>
          <p>{post.content}</p>
          <Comments postId={post.id} />
        </article>
      ))}
    </div>
  );
}

export default BlogComponent;
