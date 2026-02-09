import { peopleBirthday } from "@/types/friends";
import Avatar from "@mui/material/Avatar";

type BirthdayCardProps = {
  title: string;
  people: peopleBirthday[];
};

function BirthdayCard({ title, people }: BirthdayCardProps) {
  return (
    <div className="border bg-white w-full lg:w-1/2 rounded-md flex flex-col justify-start p-3 gap-2">
      <p className="font-bold">{title}</p>
      <p>
        {people.map((item, index) => (
          <strong key={item.id}>
            {item.name}
            {index < people.length - 1 && ", "}
          </strong>
        ))}
      </p>
      <div className="flex gap-2">
        {people.map((item, index) => {
          return <Avatar key={index} />;
        })}
      </div>
    </div>
  );
}

export default BirthdayCard;
