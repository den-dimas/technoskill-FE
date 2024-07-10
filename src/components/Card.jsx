function Card({ title, description }) {
  return (
    <div className="bg-white p-4 flex flex-col items-center justify-center gap-4 rounded-lg">
      <div className="w-36 h-36 bg-gray-400" />

      <h1 className="text-xl font-bold">{title}</h1>

      <p className="text-justify">{description}</p>
    </div>
  );
}

export default Card;
