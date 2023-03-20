import { MainChat, Sidebar } from "../../components/Index";

const Home = () => {
  // handle openChat
  const openChat = () => {};
  return (
    <section className="home">
      <div className="container">
        <Sidebar />
        <MainChat />
      </div>
    </section>
  );
};

export default Home;
