import "./styles.css";
import React from "react";

export default function App() {
  const [show, setShow] = React.useState("");
  return (
    <div className="App">
      <h1>ACCORDIONS IN REACT</h1>
      <p>My trick for making accordions in react</p>
      <div className="div">
        <p className="accordions">
          This is an accordion
          {show === "" || show !== "text1" ? (
            <span
              style={{
                marginLeft: "35px",
                background: "black",
                padding: "6px",
                borderRadius: "4px"
              }}
              onClick={() => setShow("text1")}
            >
              +
            </span>
          ) : (
            ""
          )}
        </p>
        {show === "text1" && (
          <span
            style={{
              marginLeft: "15px",
              background: "black",
              padding: "6px 8px",
              borderRadius: "4px"
            }}
            onClick={() => setShow("")}
          >
            -
          </span>
        )}
      </div>

      {show === "text1" && (
        <span className="span">
          I will be revealed once you click on the text1 accordion plus sign.
        </span>
      )}

      <div className="div">
        <p className="accordions">
          This is an accordion
          {show === "" || show !== "text2" ? (
            <span
              style={{
                marginLeft: "35px",
                background: "black",
                padding: "6px",
                borderRadius: "4px"
              }}
              onClick={() => setShow("text2")}
            >
              +
            </span>
          ) : (
            ""
          )}
        </p>
        {show === "text2" && (
          <span
            style={{
              marginLeft: "15px",
              background: "black",
              padding: "6px 8px",
              borderRadius: "4px"
            }}
            onClick={() => setShow("")}
          >
            -
          </span>
        )}
      </div>

      {show === "text2" && (
        <span className="span">
          I will be revealed once you click on the text1 accordion plus sign.
        </span>
      )}

      <div className="div">
        <p className="accordions">
          This is an accordion
          {show === "" || show !== "text3" ? (
            <span
              style={{
                marginLeft: "35px",
                background: "black",
                padding: "6px",
                borderRadius: "4px"
              }}
              onClick={() => setShow("text3")}
            >
              +
            </span>
          ) : (
            ""
          )}
        </p>
        {show === "text3" && (
          <span
            style={{
              marginLeft: "15px",
              background: "black",
              padding: "6px 8px",
              borderRadius: "4px"
            }}
            onClick={() => setShow("")}
          >
            -
          </span>
        )}
      </div>

      {show === "text3" && (
        <span className="span">
          I will be revealed once you click on the text1 accordion plus sign.
        </span>
      )}

      <div className="div">
        <p className="accordions">
          This is an accordion
          {show === "" || show !== "text4" ? (
            <span
              style={{
                marginLeft: "35px",
                background: "black",
                padding: "6px",
                borderRadius: "4px"
              }}
              onClick={() => setShow("text4")}
            >
              +
            </span>
          ) : (
            ""
          )}
        </p>
        {show === "text4" && (
          <span
            style={{
              marginLeft: "15px",
              background: "black",
              padding: "6px 8px",
              borderRadius: "4px"
            }}
            onClick={() => setShow("")}
          >
            -
          </span>
        )}
      </div>

      {show === "text4" && (
        <span className="span">
          I will be revealed once you click on the text1 accordion plus sign.
        </span>
      )}
    </div>
  );
}
