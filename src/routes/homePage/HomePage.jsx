import SearchBar from "../../components/searchBar/SearchBar";
import "./homePage.scss";

const HomePage = () => {
  return (
    <div className="homePage">
      <div className="textContainer">
        <div className="wrapper">
          <h1 className="title">Find Real Estate & Get Your Dream Place </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
            obcaecati amet eius praesentium molestias magnam temporibus sequi,
            id eum repudiandae autem possimus ipsa, distinctio sint explicabo
            corrupti saepe quaerat laborum.
          </p>
          <SearchBar />
          <div className="boxes">
            <div className="box">
                <h1>10+</h1>
                <h2>Year Of Expreince</h2>
            </div>
            <div className="box">
                <h1>200</h1>
                <h2>Award Gain</h2>
            </div>
            <div className="box">
                <h1>1200+</h1>
                <h2>Property Ready</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="imageContainer">
        <img src="/bg.png" alt="bg" />
      </div>
    </div>
  );
};

export default HomePage;
