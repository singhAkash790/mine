import React, { Children } from "react";

const SectionLayout = (props) => {
  return (
    <>
      <section className={props._sclass}  id={props._class_ID} ref={props._ref}>
        <div className={props._class}>
          <div className="container mx-auto">
            <div className="row">{props.children}</div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SectionLayout;
