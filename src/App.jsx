import React, { useEffect, useState } from "react";
import axios from "axios";
import Weather from "./components/Weather";

const App = () => {
  const [weather, setWeather] = useState();
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");

  const getData = async () => {
    try {
      const { data } = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?q=london&appid=37b29f091f8754cf8600dea56dee3863`
      );
      setWeather(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {}, []); //[] means run once

  const toggleLiked = () => {
    const list = [...weather.list];
    const indexOf = list.findIndex((item) => {
      return item.dt === dt;
    });
    //toggle the liked property
    list[indexOf].liked = !list[indexOf].liked;
    setWeather({ ...weather, list });
  };

  const deleteItem = (dt) => {
    const list = [...weather.list];
    const indexOf = list.findIndex((item) => {
      return item.dt === dt;
    });
    list.splice(indexOf, 1);
  };

  const onInput = (e) => {
    setSearch(e);
  };

  const onTempInput = (e) => {
    setSort(e.target.value);
  };

  //below is the return

  if (!weather) return <h1>Loading</h1>;

  //calculate the total
  let total = 0;
  weather.list.forEach((item) => {
    if (item.liked) {
      total++;
    }
  });

  //filter the results
  let list = [...weather.list];

  if (search) {
    list = list.filter((item) => {
      return item.weather[0].description.toLowerCase().includes(search);
    });
  }

  if (sort === "asc") {
    list.sort((itemOne, itemTwo) => {
      if (itemOne.main.temp > itemTwo.main.temp) return 1;
      if (itemOne.main.temp < itemTwo.main.temp) return -1;
    });
  } else if (sort === "des") {
    list.sort((itemOne, itemTwo) => {
      if (itemOne.main.temp > itemTwo.main.temp) return -1;
      if (itemOne.main.temp < itemTwo.main.temp) return 1;
    });
  }

  return (
    <>
      <h1>Liked: #{total}</h1>
      <input onInput={onInput} type="text" />
      <select onInput={onTempInput}>
        <option value=""></option>
        <option value="asc">Temp - Asc</option>
        <option value="desc">Temp - Desc</option>
      </select>
      <Weather list={list} toggleLiked={toggleLiked} />
    </>
  );
};

export default App;
