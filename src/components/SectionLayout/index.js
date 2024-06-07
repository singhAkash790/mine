import React from "react";

const Index = (props) => {
  return (
    <>
      <section className={props._sclass} id={props._class_ID}>
        <div className={props._class}>
          <div className="row">{props.children}</div>
        </div>
      </section>
    </>
  );
};

export default Index;
