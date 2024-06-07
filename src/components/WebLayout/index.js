import React from "react";

const index = (props) => {
  return (
    <>
      <section className={props._sclass} id={props._class_ID}>
        <div className={props._class}>
          <div className="container">
            <div className="row">
              <div className="web-container">{props.children}</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default index;
