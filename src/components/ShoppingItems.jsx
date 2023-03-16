import { useContext } from "react";
import { Context } from "../context/Context";

function ShoppingItems() {
  const url = useContext(Context);

  const flattened = url.flatMap((num) => num);

  return (
    <section>
      {flattened
        .filter((el) => el.id <= 6)
        .map((el) => (
          <div key={el.id}>
            <img src={el.image} alt="Avatar" />
            <div>
              <h4>
                <b>{el.name}</b>
              </h4>
              <p>{el.id % 2 === 0 ? el.id * 300 : el.id * 200}$</p>
            </div>
            <button>{el.origin.name}</button>
          </div>
        ))}
    </section>
  );
}

export default ShoppingItems;
