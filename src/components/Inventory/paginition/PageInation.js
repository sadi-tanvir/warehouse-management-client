import React from "react";

const PageInation = ({children}) => {
  return (
    <>
      <div class="flex justify-center">
        <nav aria-label="Page navigation example">
          <ul class="flex list-style-none">
            <li class="page-item">
              {children}
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default PageInation;
