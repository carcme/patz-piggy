import React from "react";
import Menu from "./components/menu";
import Navbar from "./components/Navbar";
import { BsTelephoneFill } from "react-icons/bs";
import { FaMobileAlt, FaMapPin } from "react-icons/fa";
import OpenTimes from "./components/openTime";

function updateMenuItem() {
  console.log("updateMenuItem");
}

async function getOpenTimes() {
  const res = await fetch(`${process.env.BASE_URL}/api/getOpenTimes`);

  if (!res.ok) {
    console.log(res);
  }
  return res.json();
}

async function getDinnerMenus() {
  const res = await fetch(`${process.env.BASE_URL}/api/getDinnerMenus`);

  if (!res.ok) {
    console.log(res);
  }
  return res.json();
}

function getToday() {
  return new Date().getDay();
}
export default async function Home() {
  const menus: {
    id: number;
    type: number;
    description: string;
    price: string;
  }[] = await getDinnerMenus();

  const openHours: {
    id: number;
    dayasint: number;
    day: string;
    times: string;
  }[] = await getOpenTimes();

  const dayToday = getToday();

  return (
    <main className="bg-slate-600  text-stone-300">
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

      <div className="flex px-3 justify-center bg-slate-700 text-stone-400">
        <div className="grid grid-cols-2 mt-10 w-[800px]">
          <div className=" ">
            <h2 className="text-2xl max-sm:text-lg uppercase ps-1 border-l-2 border-slate-600 mb-4">
              Contact
            </h2>
            <ul className="px-2 leading-8 max-sm:text-sm max-sm:leading-8">
              <li className="mx-2 flex flex-row items-center gap-2">
                <div>
                  <a
                    href={`tel:+49 337 636 3360`}
                    rel="nofollow noreferrer noopener"
                  >
                    <BsTelephoneFill className="hover:scale-150 hover:fill-stone-300" />
                  </a>
                </div>
                <div>+49 337 636 3360</div>
              </li>
              <li className="mx-2 flex flex-row items-center gap-2">
                <a
                  href={`tel:+49 174 807 6935`}
                  rel="nofollow noreferrer noopener"
                >
                  <FaMobileAlt className="hover:scale-150 hover:fill-stone-300" />
                </a>
                <div>+49 174 807 6935</div>
              </li>
              <li className="mx-2 flex flex-row items-center gap-2">
                <a
                  href="https://maps.google.com/maps?ll=52.226494,13.657365&z=14&t=m&hl=en&gl=DE&mapclient=embed&cid=3786600781970887142"
                  rel="nofollow noreferrer noopener"
                >
                  <FaMapPin className="hover:scale-150 hover:fill-stone-300" />
                </a>
                <div className="max-sm:leading-4">
                  Lindenstraße 4, 15741 Bestensee
                </div>
              </li>
            </ul>
          </div>
          {/* <OpenTimes /> */}
          <div className="my-2">
            <h2 className="text-2xl max-sm:text-lg uppercase ps-1 border-l-2 border-slate-600 mb-4">
              Opening Hours
            </h2>
            <div className="text-slate-500 px-2 leading-8 max-sm:text-sm">
              <ul className="px-2 leading-8 max-sm:text-sm max-sm:leading-8">
                {openHours.map((today) => {
                  return (
                    <li
                      key={today.id}
                      className={
                        dayToday === today.dayasint
                          ? "text-stone-300 border-b border-slate-600"
                          : "border-b border-slate-600"
                      }
                    >
                      {dayToday === today.dayasint ? "Heute" : today.day}
                      <span className="float-right">{today.times}</span>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          {/* END <OpenTimes /> */}
        </div>
      </div>

      <footer>
        <div className="mx-4 pb-4 flex justify-center md:mb-0 ">
          <iframe
            width="100%"
            height={240}
            className="rounded grayscale backdrop-blur-sm bg-black/25"
            title="location map"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6912.749519168954!2d13.65194608249894!3d52.22474487266107!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a8166bd79f1dd1%3A0x348cb559539751e6!2sLindenhof%20P%C3%A4tz!5e0!3m2!1sen!2sde!4v1676908879463!5m2!1sen!2sde"
            loading="lazy"
          ></iframe>
        </div>
      </footer>
    </main>
  );
}
