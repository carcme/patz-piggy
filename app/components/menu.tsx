"use client";
import React from "react";
import { BiEditAlt } from "react-icons/bi";

const updateMenuItem = async (id: number) => {
  console.log("id: ", id);

  const body = {
    id,
    description: "New Menu Item, with chips",
    price: "132",
  };

  const res = await fetch(`/api/editMenuItem?id=` + id, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  console.log("res, ", res);

  if (!res.ok) {
    console.log(res);
  }
  return res.json();
};

const Menu = (props: { description: string; price: string; id: number }) => {
  const showEdit = false;

  return (
    <div className="grid grid-flow-col items-center gap-4 py-2 tracking-widest max-sm:text-xs  hover:font-medium">
      <p className="flex justify-start w-[600px] max-md:w-[300px] max-sm:w-[200px] px-4">
        {props.description}
      </p>
      <p className="text-end">{props.price} </p>
      {showEdit && (
        <BiEditAlt
          className="text-end cursor-pointer"
          onClick={() => updateMenuItem(props.id)}
        />
      )}
    </div>
  );
};

export default Menu;
