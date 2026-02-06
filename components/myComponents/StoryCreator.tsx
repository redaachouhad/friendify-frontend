import Image from "next/image";
import { AiTwotonePlusCircle } from "react-icons/ai";

function StoryCreator() {
  return (
    <div className="w-32 h-full rounded-md relative cursor-pointer shrink-0 flex flex-col overflow-hidden">
      <div className="flex relative h-full">
        <Image
          src="/images/image-story.png"
          alt="Story"
          width={128}
          height={128}
          className="object-cover"
        />
        <AiTwotonePlusCircle className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 text-3xl bg-white rounded-full" />
      </div>

      <div className="h-20 bg-white text-center flex flex-col justify-center">
        <p className="text-sm font-bold">Créer une Story</p>
      </div>
    </div>
  );
}

export default StoryCreator;
