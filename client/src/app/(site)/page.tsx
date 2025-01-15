import React from "react";
import Header from "../components/layout/header";


const App = () => {
  return (
    <main>
      <Header />
      <section className="flex items-center justify-evenly gap-4 pt-[255px] px-16 flex-wrap">
 
        <div className="w-[316px] h-[316px]  bg-white shadow-header rounded-[12px]">
          App
        </div>
        <div className="w-[316px] h-[316px]  bg-white shadow-header rounded-[12px]">
          App
        </div>
        <div className="w-[316px] h-[316px]  bg-white shadow-header rounded-[12px]">
          App
        </div>
        <div className="w-[316px] h-[316px]  bg-white shadow-header rounded-[12px]">
          App
        </div>
      </section>
    </main>
  );
};

export default App;
