import { createContext, useState, useContext } from "react";

// 1. Create the context
const DataContext = createContext();

export const emojiStatus = {
  happy: "happy",
  unhappy: "unhappy",
  throwTable: "throwTable",
};

export const DataProvider = ({ children }) => {
  const [emoji, setEmoji] = useState("@_@");

  const displayEmojiHandler = (emojiName) => {
    switch (emojiName) {
      case emojiStatus.happy:
        setEmoji(":)");
        break;
      case emojiStatus.unhappy:
        setEmoji(":(");
        break;
      case emojiStatus.throwTable:
        setEmoji("╯° · °)╯︵ ┻━┻");
        break;
      default:
        setEmoji("@_@");
        break;
    }
  };

  return (
    <DataContext.Provider value={{ emoji, displayEmojiHandler }}>
      {children}
    </DataContext.Provider>
  );
};

export const useDataContext = () => {
  return useContext(DataContext);
};
