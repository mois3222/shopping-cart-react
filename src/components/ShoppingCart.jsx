import React from "react";
import ShoppingProducts from "./ShoppingProducts";
import { useContext } from "react";
import { Context } from "../context/Context";

function ShoppingCart() {
  const { f_iltered } = useContext(Context);
  const flatMapFiltered = f_iltered.flatMap((el) => el);
  return flatMapFiltered.map((el) => (
    <ShoppingProducts key={Date.now()} id={el.id} name={el.name} />
  ));
}

export default ShoppingCart;
