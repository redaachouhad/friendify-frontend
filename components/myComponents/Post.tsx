import StyledBadge from "@/helpers/StyledBadge";
import Avatar from "@mui/material/Avatar";
import Image from "next/image";
import { BiLike } from "react-icons/bi";
import { FaRegMessage } from "react-icons/fa6";
import { TbShare3 } from "react-icons/tb";

function Post() {
  return (
    <div className="w-full rounded-md border border-gray-300 flex flex-col bg-white p-3 gap-3">
      {/* User */}
      <div className="w-full flex gap-2">
        <StyledBadge
          overlap="circular"
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
          variant="dot"
        >
          <Avatar alt="Remy Sharp" src="2.jpg" sx={{ width: 50, height: 50 }} />
        </StyledBadge>
        <div>
          <p className="text-lg font-semibold">Reda Achouhad</p>
          <p className="text-sm text-gray-500">2 min ago</p>
        </div>
      </div>

      {/* description de post */}
      <p className="text-gray-700">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor,
        nisl eget ultricies tincidunt, nunc nisl aliquam nisl, eget ultricies
        nisl nunc eget nisl.
      </p>

      {/* the media content (image or video) of the post */}
      <div className="relative w-full h-80">
        <Image
          src="/post-1.jpg"
          alt="Post image"
          fill
          className="object-cover rounded-md"
        />
      </div>

      {/* reactions count and comments count */}
      <div className="flex items-center justify-between w-full">
        <p>Reda et 100 autres personnes</p>
        <p>28 commentaires</p>
      </div>

      {/* reaction button + comment button + share button */}
      <div className="flex items-center justify-between w-full font-semibold">
        <div className="flex items-center gap-2 cursor-pointer flex-1/3 justify-center">
          <BiLike className="text-2xl" />
          <p>J'aime</p>
        </div>
        <div className="flex items-center gap-2 cursor-pointer flex-1/3 justify-center">
          <FaRegMessage className="text-xl" />
          <p>Commenter</p>
        </div>
        <div className="flex items-center gap-2 cursor-pointer flex-1/3 justify-center">
          <TbShare3 className="text-2xl" />
          <p>Share</p>
        </div>
      </div>
    </div>
  );
}

export default Post;
