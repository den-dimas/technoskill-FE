function Kotak({ judul, deskripsi, deskripsi2 }) {
  return (
    <div
      id="kotak-1"
      className="w-[250px] h-[250px] bg-white flex flex-col items-center justify-center gap-2 p-2"
    >

      <div
        id="kotak-abuabu"
        className="bg-gray-500 w-[120px] h-[120px]"
      ></div>

      <h1 className="font-bold text-lg"> { judul } </h1>

      <p className="text-justify">
        { deskripsi }
      </p>

      <p>
        { deskripsi2 }
      </p>

    </div>
  )
}

export default Kotak;