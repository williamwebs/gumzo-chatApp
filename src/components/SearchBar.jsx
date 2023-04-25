import { useState } from "react";
import img from "../asset/image.jpg";

const SearchBar = () => {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState(null);
  const [err, setErr] = useState(false);

  const handleSearch = () => {};

  const handleKey = (e) => {
    console.log(e);
    // e.code == "Enter" && handleSearch();
  };

  return (
    <div className="search">
      <div className="search__form">
        <input
          type="text"
          placeholder="Find a user"
          onChange={(e) => setUsername(e.target.value)}
          onKeyDown={handleKey}
        />
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
