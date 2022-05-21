import React from "react";

const PageInation = ({children}) => {
  return (
    <>
      <div className="flex justify-center">
        <nav aria-label="Page navigation example">
          <ul className="flex list-style-none">
            <li className="page-item">
              {children}
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default PageInation;
