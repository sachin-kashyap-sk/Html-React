import React from "react";
import classes from "../../Styles/Htmlpage/Htmlpage.module.css";
import board from "../../Assets/board.png";
const SecSection = () => {
  return (
    <div>
      <div className={classes.mainContainer}>
        <div className={classes.left}>
          <p className={classes.firstText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>

          <p className={classes.secText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sed
            commodo est.Pellentesque eu placerat mauris. Etiam ut maximus ante.
            Suspendisse varius dolor nec bibendum dignissim. Proin in diam a
            justo sollicitudin mattis eu sagittis nunc. In hac habitasse platea
            dictumst.
          </p>
          <div>
            <button class="btn btn-primary btn-lg" type="button">
              Check Pricing
            </button>
          </div>
        </div>
        <div className={classes.right}>
          <img class="img-fluid" src={board} alt="board" />
        </div>
      </div>
    </div>
  );
};

export default SecSection;
