
import { useEffect, useState } from "react";
import Header from "../components/common/Header";
import TabComponents from "../components/dashboard/tabs";
import axios from "axios";
import Search from "../components/dashboard/searchBar";
import PaginationComponent from "../components/dashboard/pagination";
import Loader from "../components/common/loader";
import BackToTop from "../components/common/backToTop";
import { get100Coins } from "../functions/get100Coins";

const Dashboard = () => {
  const [search, setSearch] = useState("");
  const [coins, setCoins] = useState([]);
  const [paginatedcoins, setPaginatedCoins] = useState([]);
  const [page, setPage] = useState(1);
  const [isloading, setIsLoading] = useState(true);

  const handlePageChange = (event, value) => {
    setPage(value);
    var previousIndex = (value - 1) * 10;
    setPaginatedCoins(coins.slice(previousIndex, previousIndex + 10));
    setIsLoading(false)
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
    getData();
  }, []);

  const getData = async()=>{
    const Mycoins=  await get100Coins();
    if(Mycoins){

      setCoins(Mycoins);
      setPaginatedCoins(Mycoins.slice(0, 10));
      setIsLoading(false);
    }
  }

  return (

    <>
    <Header />
    <BackToTop/>
  {isloading?(
    <Loader/>
  ):( <div>
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
    </div>)}

    </> 
  );
};

export default Dashboard;
