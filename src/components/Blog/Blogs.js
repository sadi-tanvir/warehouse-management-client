import React from "react";
import ReactHelmet from "../shared/ReactHelmet/ReactHelmet";
import FAQFormat from "./FAQFormat"
import {data} from "./Question"

const Blogs = () => {
  
  return (
    <>
      <ReactHelmet title="Blogs" />

      <div className="accordion mt-20 min-h-screen px-10 md:px-24" id="accordionExample">
          <h1 className="text-center text-green-700 fw-bold my-5 text-5xl">My Blogs</h1>
          {
            data.map(elem => <FAQFormat key={elem.id} elem={elem} />)
          }
      </div>
    </>
  );
};

export default Blogs;
