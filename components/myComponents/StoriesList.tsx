import Story from "./Story";
import StoryCreator from "./StoryCreator";

function StoriesList() {
  const stories = new Array(20).fill(null);

  return (
    <div className="w-full flex flex-row gap-3 overflow-x-scroll bg-transparent rounded-md py-2">
      <StoryCreator />
      {stories.map((_, index) => {
        return <Story key={index} />;
      })}
    </div>
  );
}

export default StoriesList;
