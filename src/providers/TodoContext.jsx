import { createContext, useState } from "react";

export const TodoContext = createContext({});
export const TodoProvider = ({ children }) => {
  const [Theme, setTheme] = useState(false);
  const [cartList, setCartList] = useState([]);

  const [OnModal, setOnModal] = useState(false);

  const removeQtd = (item) => {
    if (item.qtd < 2) {
      const updateList = cartList.filter((i) => i.id != item.id);
      return setCartList([...updateList]);
    }
    const index = cartList.findIndex((i) => i.id === item.id);
    const updatedItem = { ...cartList[index], qtd: cartList[index].qtd - 1 };
    setCartList([
      ...cartList.slice(0, index),
      updatedItem,
      ...cartList.slice(index + 1),
    ]);
  };

  const addItemCardList = (item) => {
    if (cartList.some((i) => i.id == item.id)) {
      const index = cartList.findIndex((i) => i.id === item.id);
      const updatedItem = { ...cartList[index], qtd: cartList[index].qtd + 1 };
      setCartList([
        ...cartList.slice(0, index),
        updatedItem,
        ...cartList.slice(index + 1),
      ]);
    } else {
      setCartList([...cartList, { ...item }]);
    }
  };
  const delItemCardList = (item) => {
    const itemDelet = cartList.find((i) => i.id === item.id);
    itemDelet && setCartList(cartList.filter((i) => i.id !== item.id));
  };

  return (
    <TodoContext.Provider
      value={{
        Theme,
        setTheme,
        OnModal,
        setOnModal,
        cartList,
        setCartList,
        addItemCardList,
        delItemCardList,
        removeQtd,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};
