import React from "react";
import Menu from "./components/menu";
import Navbar from "./components/Navbar";

function updateMenuItem() {
  console.log("updateMenuItem");
}

async function getDinnerMenus() {
  const res = await fetch(`${process.env.BASE_URL}/api/getDinnerMenus`);

  if (!res.ok) {
    console.log(res);
  }
  return res.json();
}

export default async function Home() {
  const menus: {
    id: number;
    type: number;
    description: string;
    price: string;
  }[] = await getDinnerMenus();

  return (
    <main className="bg-slate-600 text-stone-300">
      <Navbar />
      <div className="flex flex-col items-center">
        <h2 className="text-2xl pt-16 px-2 max-sm:text-lg">
          Wochenend-Spezialmenü
        </h2>
        <h3 className="py-4 px-2 text-lg max-sm:text-sm">
          Wochenende zwischen 12:00 und 15:00 Uhr
        </h3>
        <div className=" justify-center">
          {/* The Specials menu (1) */}
          {menus.map((item) => {
            return (
              <div key={item.id}>
                {item.type === 1 && (
                  <Menu
                    description={item.description}
                    price={item.price}
                    id={item.id}
                  />
                )}
              </div>
            );
          })}
        </div>
        <h2 className="text-2xl pt-16 px-2 max-sm:text-lg">
          Das „Immer“ verfügbare Menü
        </h2>
        <h3 className="py-4 px-2 text-lg max-sm:text-sm">
          Bis zum Küchenschluss
        </h3>

        <div className=" ">
          {/* always available menu  (0) */}
          {menus.map((item) => {
            return (
              <div key={item.id}>
                {item.type === 0 && (
                  <Menu
                    description={item.description}
                    price={item.price}
                    id={item.id}
                  />
                )}
              </div>
            );
          })}
        </div>
        <h2 className="text-2xl pt-16 px-2 max-sm:text-lg py-4">
          Das Spezialmenü der nächsten Woche
        </h2>
        <div className="pb-14 ">
          {/* next week menu  (2) */}
          {menus.map((item) => {
            return (
              <div key={item.id}>
                {item.type === 2 && (
                  <Menu
                    description={item.description}
                    price={item.price}
                    id={item.id}
                  />
                )}
              </div>
            );
          })}
        </div>
      </div>
      <footer>
        <div className="mx-4 pb-4 flex justify-center md:mb-0 ">
          <iframe
            width="100%"
            height={320}
            className="rounded"
            title="location map"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6912.749519168954!2d13.65194608249894!3d52.22474487266107!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a8166bd79f1dd1%3A0x348cb559539751e6!2sLindenhof%20P%C3%A4tz!5e0!3m2!1sen!2sde!4v1676908879463!5m2!1sen!2sde"
            loading="lazy"
          ></iframe>
        </div>
      </footer>
    </main>
  );
}
