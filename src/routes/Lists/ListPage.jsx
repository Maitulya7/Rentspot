import Card from "../../components/card/Card";
import Filter from "../../components/filter/Filter";
import Map from "../../components/map/Map";
import { listData } from "../../lib/dummyData";
import "./listPage.scss";
const ListPage = () => {
  const data = listData;
  console.log(data);
  return (
    <div className="listPage">
      <div className="listContainer">
        <div className="wrapper">
          <Filter />
          {data.map((item)=>(
            <Card key={item.id} item={item}/>
          ))}
        </div>
      </div>
      <div className="mapContianer">
        <Map items={data}/>
      </div>
    </div>
  );
};

export default ListPage;
