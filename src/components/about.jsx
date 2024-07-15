import React from "react";

export const About = (props) => {
  return (
    <div id="about">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-6">
            {" "}
            <img src="img/image/arc6.jpg" className="img-responsive" alt="" />{" "}
          </div>
          <div className="col-xs-12 col-md-6">
            <div className="about-text">
              <h2>About Us</h2>
              <p>{props.data ? props.data.paragraph : "loading..."}</p>
              
              <p>Ընկերության աշխատանքների պատշաճ կատարման համար ներգրավվել են տարբեր մասնագիտական որակավորման (ճարտարապետ, ճարտարագետ-կոնստրուկտոր, ջրամատակարարման և կոյուղու, էլեկտրամատակարարման, օդափոխության-ջեռուցման-գազամատակարարման, ճանապարհաշինարար)  փորձառու և երիտասարդ մասնագետներ: Նախագծերը մշակված են համակարգչային ծրագրերով:</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
