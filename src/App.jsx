import MainBody from "./Components/Body/MainBody";
import Header from "./Components/Header/Header";
import Navigator from "./Components/Navigator/Navigator";

function App() {
  return (
    <div className="flex flex-col h-[100vh] w-[100vw]  bg-[#ededf3]">
      <Header />
      <div className="flex flex-1 space-x-2">
        <Navigator />
        <MainBody />
      </div>
    </div>
  );
}

export default App;
