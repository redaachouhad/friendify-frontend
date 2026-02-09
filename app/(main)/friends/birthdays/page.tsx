import BirthdayCard from "@/components/myComponents/friends/BirthdayCard";
import EmptyState from "@/components/myComponents/friends/EmptyState";
import { peopleBirthday } from "@/types/friends";
import Avatar from "@mui/material/Avatar";

type peopleBirthdayListType = {
  title: string;
  people: peopleBirthday[];
};

function birthdayPage() {
  const peopleBirthdayList: peopleBirthdayListType[] = [
    {
      title: "March",
      people: [
        {
          id: 1,
          name: "Reda",
          image: "2.jpg",
        },
        {
          id: 2,
          name: "Reda",
          image: "2.jpg",
        },
      ],
    },
    {
      title: "February",
      people: [
        {
          id: 1,
          name: "Reda",
          image: "2.jpg",
        },
        {
          id: 2,
          name: "Reda",
          image: "2.jpg",
        },
      ],
    },
  ];
  return (
    <div className="w-full flex flex-col">
      <h1 className="text-2xl font-bold mb-2">Anniversaires</h1>

      {peopleBirthdayList.length === 0 ? (
        <EmptyState
          title="Anniversaires"
          description="Vous n’avez envoyé aucune amies."
        />
      ) : (
        <div className="border w-full h-172 flex flex-col p-4 items-center gap-4 overflow-y-scroll">
          {/* Aniversaire à venir */}
          <div className="border bg-white w-full lg:w-1/2 rounded-md flex flex-col justify-start p-3 gap-2">
            <p className="font-bold">Anniversaire à Venir</p>
            <p>
              <strong>Reda</strong>, <strong>Hamid</strong>,
              <strong>Oussama</strong> et 3 autres personnes
            </p>
            <div className="flex gap-2">
              <Avatar />
              <Avatar />
              <Avatar />
              <Avatar />
            </div>
          </div>

          <hr className="border-gray-300  w-full lg:w-1/2" />

          {/* Anniversaire Passé */}
          {peopleBirthdayList.map((item, index) => {
            return (
              <BirthdayCard
                title={item.title}
                people={item.people}
                key={index}
              />
            );
          })}
        </div>
      )}
    </div>
  );
}

export default birthdayPage;
