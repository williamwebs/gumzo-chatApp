import { Chats, Nav, Search } from "./Index";

const Sidebar = () => {
  return (
    <div className="side__bar">
      <Nav />
      <Search />
      <Chats />
    </div>
  );
};

export default Sidebar;
