import React from "react";
import { MDBFooter, MDBContainer, MDBCol, MDBRow } from "mdb-react-ui-kit";
import { Link } from "react-router-dom";

import classes from "./Footer.module.css";

export default function Footer() {
  return (
    <div className={classes.Footer}>
      <MDBFooter className={classes.input}>
        <MDBContainer className="p-3">
          <section style={{ textAlign: "center" }}>
            <h6>
              <b>
                KHAALO is a food delivery service with the largest network of
                restaurants in your city.
              </b>
            </h6>
          </section>
        </MDBContainer>
        <div
          style={{
            backgroundColor: "rgba(1, 1, 1,0.5)",
            color: "white",
            textAlign: "center",
          }}
        >
          © 2022 Copyright: &nbsp;
          <Link to="/" style={{ textDecoration: "none", color: "white" }}>
            KHAALO
          </Link>
        </div>
      </MDBFooter>
    </div>
  );
}
