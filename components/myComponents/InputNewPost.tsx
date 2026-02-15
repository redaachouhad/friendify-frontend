import StyledBadge from "@/helpers/StyledBadge";
import useVisibilityFormNewPost from "@/store/useVisibilityFormNewPost";
import Avatar from "@mui/material/Avatar";
import Image from "next/image";

function InputNewPost() {
  const { toggleVisibilityFormNewPost } = useVisibilityFormNewPost();
  return (
    <div className="p-2 bg-white rounded-md flex items-center gap-2 border border-gray-300 sticky top-0 z-10">
      <StyledBadge
        overlap="circular"
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        variant="dot"
      >
        <Avatar alt="Remy Sharp" src="2.jpg" sx={{ width: 40, height: 40 }} />
      </StyledBadge>
      <input
        type="text"
        placeholder="Quoi de neuf ?"
        className="border p-1.5 rounded-md flex-1 outline-none"
        onClick={() => toggleVisibilityFormNewPost()}
      />
      <div className="flex items-center gap-2">
        <Image
          src="/icons/direct-video.png"
          alt="Post"
          width={30}
          height={30}
          className="cursor-pointer"
        />
        <Image
          src="/icons/image-create-post.png"
          alt="Post"
          width={30}
          height={30}
          className="cursor-pointer"
        />
        <Image
          src="/icons/feeling.png"
          alt="Post"
          width={30}
          height={30}
          className="cursor-pointer"
        />
      </div>
    </div>
  );
}

export default InputNewPost;
