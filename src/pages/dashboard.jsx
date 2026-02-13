
import { useEffect, useState } from "react";
import Header from "../components/common/Header";
import TabComponents from "../components/dashboard/tabs";
import axios from "axios";
import Search from "../components/dashboard/searchBar";
import PaginationComponent from "../components/dashboard/pagination";

const Dashboard = () => {
  const [search, setSearch] = useState("");
  const [coins, setCoins] = useState([]);
  const [paginatedcoins, setPaginatedCoins] = useState([]);
  const [page, setPage] = useState(1);

  const handlePageChange = (event, value) => {
    setPage(value);
    var previousIndex = (value - 1) * 10;
    setPaginatedCoins(coins.slice(previousIndex, previousIndex + 10));
  };

  const onSearchChange = (e) => {
    setSearch(e.target.value);
  };

  var filteredCoins = coins.filter(
    (item) =>
      item.name.toLowerCase().includes(search.toLowerCase()) ||
      item.symbol.toLowerCase().includes(search.toLowerCase())
  );

  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=100&page=1"
      )
      .then((response) => {
        setCoins(response.data);
        setPaginatedCoins(response.data.slice(0, 10));
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <Header />
      <Search search={search} onSearchChange={onSearchChange} />

      <TabComponents
        coins={search ? filteredCoins : paginatedcoins}
      />

      {!search && (
        <PaginationComponent
          page={page}
          handlePageChange={handlePageChange}
        />
      )}
    </div>
  );
};

export default Dashboard;
