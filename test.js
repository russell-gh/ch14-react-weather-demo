if (searchInput) {
  const filteredList = weather.list.filter((item) => {
    console.log(item.weather[0].description.toLowerCase());
    if (
      item.weather[0].description
        .toLowerCase()
        .includes(searchInput.toLowerCase())
    ) {
      return true;
    }
  });
}
