import React from "react";

const Quenstion = ({ elem }) => {
    const {headingId, collapseid, isExpanded,isCollapse, question, answer} = elem;
  return (
    <div className="accordion-item">
      <h2 className="accordion-header" id={headingId}>
        <button
          className="accordion-button"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target={`#${collapseid}`}
          aria-expanded={isExpanded}
          aria-controls={collapseid}
        >
          {question}
        </button>
      </h2>
      <div
        id={collapseid}
        className={`accordion-collapse collapse ${isCollapse}`}
        aria-labelledby={headingId}
        data-bs-parent="#accordionExample"
      >
        <div className="accordion-body">{answer}</div>
      </div>
    </div>
  );
};

export default Quenstion;
