import { createContext, useState, useEffect } from "react";

export const Context = createContext();

export function ContextProvider(props) {
  {
    /**UseState */
  }
  const [url, setUrl] = useState([]);
  const [f_iltered, setFiltered] = useState([]);
  const [allow, setAllow] = useState(false);

  {
    /**UseEffecs */
  }
  useEffect(() => {
    const rickAndMorityApi = async () => {
      const res = await fetch("https://rickandmortyapi.com/api/character"),
        data = await res.json();

      setUrl([...url, data.results]);
    };

    rickAndMorityApi();
  }, []);

  {
    /**Fuction Crate */
  }

  const createProducts = (filter, boolean) => {
    const flattened = url.flatMap((el) => el),
      filtered = flattened.filter((el) => el.id === filter);

    setFiltered([...f_iltered, filtered]);
    setAllow(boolean);
  };

  const Createlabels = [
    { id: 1, title: "Empy Cart - strat Shooping!", done: true },
    { id: 2, done: false },
  ];

  return (
    <Context.Provider
      value={{ url, createProducts, f_iltered, Createlabels, allow, setAllow }}
    >
      {props.children}
    </Context.Provider>
  );
}
