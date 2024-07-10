import Card from "../components/Card";

function Lists() {
  return (
    <div
      id="homepage"
      className="w-screen h-screen flex flex-col bg-dark-blue p-16"
    >
      <h1 className="font-black text-4xl text-white mx-auto my-12">
        CARD LISTS
      </h1>

      <div className="grid grid-cols-4 grid-flow-row gap-4">
        {cardData.map((card, index) => (
          <Card key={index} title={card.title} description={card.description} />
        ))}
      </div>
    </div>
  );
}

export default Lists;

const cardData = [
  {
    title: "Card 1",
    description: "Tehcnoskill 12 Piptek EXERCISE 2028 PRABOWO PRESIDEN",
  },
  {
    title: "Card 2",
    description: "Tehcnoskill 12 Piptek EXERCISE 2028 PRABOWO PRESIDEN",
  },
  {
    title: "Card 3",
    description: "Tehcnoskill 12 Piptek EXERCISE 2028 PRABOWO PRESIDEN",
  },
  {
    title: "Card 4",
    description: "Tehcnoskill 12 Piptek EXERCISE 2028 PRABOWO PRESIDEN",
  },
  {
    title: "Card 5",
    description: "Tehcnoskill 12 Piptek EXERCISE 2028 PRABOWO PRESIDEN",
  },
  {
    title: "Card 6",
    description: "Tehcnoskill 12 Piptek EXERCISE 2028 PRABOWO PRESIDEN",
  },
  {
    title: "Card 7",
    description: "Tehcnoskill 12 Piptek EXERCISE 2028 PRABOWO PRESIDEN",
  },
  {
    title: "Card 8",
    description: "Tehcnoskill 12 Piptek EXERCISE 2028 PRABOWO PRESIDEN",
  },
];
