import img from "../asset/image.jpg";

const SearchBar = () => {
  return (
    <div className="search">
      <div className="search__form">
        <input type="text" placeholder="Find a user" />
      </div>

      <div className="user__chat">
        <img src={img} alt="" />
        <div className="user__chat__info">
          <span>Jane</span>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
