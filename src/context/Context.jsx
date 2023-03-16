import { createContext, useState, useEffect } from "react";

export const Context = createContext();

export function ContextProvider(props) {
  const [url, setUrl] = useState([]);

  useEffect(() => {
    const rickAndMorityApi = async () => {
      const res = await fetch("https://rickandmortyapi.com/api/character"),
        data = await res.json();

      setUrl([...url, data.results]);
    };

    rickAndMorityApi();
  }, []);

  return <Context.Provider value={url}>{props.children}</Context.Provider>;
}
