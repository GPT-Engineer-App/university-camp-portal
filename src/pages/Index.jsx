import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const Index = () => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Navbar />
        <main className="flex-1 p-4">
          <h1 className="text-3xl">Welcome to the University Orientation Camp</h1>
          <p className="mt-4">Select an option from the sidebar to get started.</p>
        </main>
      </div>
    </div>
  );
};

export default Index;