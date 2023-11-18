import { createContext, children, useState, useEffect } from "react";

import axios from "axios";

import { options } from "../utils/constants";

export const YoutubeContext = createContext();

// contextte tutulan verileri bütün uygulamaya aktarıcak
export const YoutubeProvider = ({ children }) => {
  const [selectedCategory, setSelectedCategory] = useState({
    name: "New",
    type: "category",
  });

  const [videos, setVideos] = useState(null);

  useEffect(() => {
    setVideos(null);

    if (selectedCategory.type === "category") {
      fetchCategory(selectedCategory.name);
    }
  }, [selectedCategory]);

  // Youtube'dan verileri çeker

  const fetchCategory = (category) => {
    axios
      .get(`https://youtube138.p.rapidapi.com/search/?q=${category}`, options)
      .then((res) => setVideos(res.data.contents))
      .catch((err) => console.log(err));
  };

  return (
    <YoutubeContext.Provider
      value={{ selectedCategory, setSelectedCategory, videos }}
    >
      {children}
    </YoutubeContext.Provider>
  );
};
