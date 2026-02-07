import InputNewPost from "./InputNewPost";
import Post from "./Post";

function PostsLanding() {
  const stories = new Array(20).fill(null);
  return (
    <div className="w-[90vmin] mt-2 flex flex-col gap-2 justify-start h-[calc(100vh-4rem)] overflow-y-scroll">
      {/* Creating a New Post */}
      <InputNewPost />

      {/* List Of Posts */}
      <div className="w-full flex flex-col gap-3">
        {stories.map((item, index) => {
          return <Post key={index} />;
        })}
      </div>
      <br />
    </div>
  );
}

export default PostsLanding;
