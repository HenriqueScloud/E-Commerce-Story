import { MdDelete } from "react-icons/md";
import style from "../CartItemCard/style.module.scss";
import { useContext } from "react";
import { TodoContext } from "../../../providers/TodoContext";

export const CartItemCard = ({ card }) => {
  const { delItemCardList, addItemCardList, removeQtd } = useContext(TodoContext);
  return (
    <li className={style.CartItemCard}>
        <span>
          <div>
            <img src={card.img} alt={card.title} />
          </div>
          <main>
            <h3 className="font_title_3">{card.title}</h3>
            <span className="font_body">
              {card.price.toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              })}
            </span>
          </main>
        </span>
      <span className="spanno">
        <aside className="unico">
          <button onClick={()=> removeQtd(card)}> - </button>
          <p> {card.qtd} </p>
          <button onClick={()=> addItemCardList(card)}> + </button>
        </aside>
        <button
          aria-label="delete"
          title="Remover item"
          onClick={() => delItemCardList(card)}
        >
          <MdDelete size={21} />
        </button>
      </span>
    </li>
  );
};
