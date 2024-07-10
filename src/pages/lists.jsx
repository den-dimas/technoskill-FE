import Kotak from "../components/Kotak"

function Lists() {
  return (
    <div
      id="lists"
      className="w-screen h-screen flex flex-col bg-dark-blue p-16"
    >
      <h1 className="text-white font-black text-2xl mx-auto m-4">
        {" "}
        CARD LISTS{" "}
      </h1>

      <div id="simpen-kotak" className="bg-pink grid grid-cols-4 gap-2 p-4">
        <Kotak judul="MATEK" deskripsi="MATEK ADALAH MATKUL TERBAIk" />

        <Kotak judul="DSD" deskripsi="DSD EZ PARAH" />

        <Kotak judul="PRAKTIKUM" deskripsi="Praktikum ga cape kok !!!" deskripsi2="INI DEskripsi 2" />

        <Kotak judul="TECHNOSKILL" deskripsi="SEMOGA PROFITNYA BANYAK" />
      </div>
    </div>
  );
}

export default Lists;
