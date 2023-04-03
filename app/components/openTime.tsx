import React, { useEffect, useState } from "react";

function getToday() {
  return new Date().getDay();
}

async function getOpenTimes() {
  const res = await fetch(`/api/getOpenTimes`);

  if (!res.ok) {
    console.log(res);
  }
  return res.json();
}

async function OpenTimes() {
  const openHours: {
    id: number;
    dayasint: number;
    day: string;
    times: string;
  }[] = await getOpenTimes();

  // const [isLoaded, setIsLoaded] = useState(false);

  // useEffect(() => {
  //   const fetchOpenTimes = async () => {
  //     const res = await fetch(`/api/getOpenTimes`);
  //     const json = await res.json();
  //     console.log(res.ok);
  //     if (res.ok) {
  //       openHours = json;
  //       setIsLoaded(true);
  //     }
  //   };

  //   fetchOpenTimes();
  // }, []);

  const dayToday = getToday();

  // if (!isLoaded) return;

  return (
    <div className="">
      <h2 className="text-2xl max-sm:text-lg uppercase ps-1 border-l-4 border-slate-600 mb-4">
        Opening Hours
      </h2>
      <div className="text-slate-500 px-2 leading-8 max-sm:text-sm">
        <ul className="px-2 leading-8 max-sm:text-sm max-sm:leading-8">
          {openHours.map((today) => {
            return (
              <li
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
  );
}

export default OpenTimes;
