// import HomeCard from "../component/SectionHome"; descomentar
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="p-2 md:p-4">
      <div className="md:flex gap-4 py-2">
        <div className="md:w-1/2">
          <h2 className="text-4xl md:text-7xl font-bold py-3">
            Bienvenidos a nuestro sitio web{" "}
            <span className="text-red-600 text-">Yamaha</span>
          </h2>
          <p className="py-3 text-base ">
            Yamaha Motor Company Limited, es una compañía japonesa con sede
            central en Iwata, Japón, parte de Yamaha Corporation, especializada
            en fabricación de quads, motocicletas, motonieves, motores fuera de
            borda, motos de agua y motores de vehículos.
          </p>
          <Link to={"login"}>
            <button className="font-bold bg-red-500 text-slate-200 px-4 py-2 rounded-md">
              Descubrelo
            </button>
          </Link>

          {/* <HomeCard />  */}
        </div>
      </div>
    </div>
  );
};

export default Home;
