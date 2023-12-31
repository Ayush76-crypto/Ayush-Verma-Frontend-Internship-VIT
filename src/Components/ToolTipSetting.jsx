import React, { useState } from "react";
import "./ToolTipSetting.css";
import "./Column1st.css";
import "./Column2nd.css";

import Header from "./Header.jsx";
import Footer from "./Footer.jsx";

function ToolTipSetting() {
  // BUTTON-CONFIGURATION -- 1
  // State Declaration: tooltipConfig
  // Properties for customizing the appearance and behavior of the tooltip

  const [tooltipConfig, setTooltipConfig] = useState({
    targetElement: "Button 1",
    tooltipText: "Tooltip Text",
    textSize: 15,
    padding: 10,
    textColor: "#000000",
    backgroundColor: "#FFFFFF",
    cornerRadius: 10,
    tooltipWidth: 100,
    tooltipHeight: 45,
    arrowWidth: 10,
    arrowHeight: 10,
    tooltipImage: "",
  });

  // BUTTON-CONFIGURATION -- 2
  const buttons = ["Button 1", "Button 2", "Button 3", "Button 4", "Button 5"];

  // BUTTON-CONFIGURATION -- 3
  const handleInputChange = (event, property) => {
    const value = event.target.value;
    setTooltipConfig((prevConfig) => ({ ...prevConfig, [property]: value }));
  };

  return (
    <div>
      {/* Header */}
      <Header />

      <div className="row_outer">
        {/* Ist PART */}
        {/* 
            It includes various rows of input fields and labels for customizing aspects 
            such as the target element, tooltip text, dimensions, colors, corner 
            radius, and arrow dimensions.
        */}

        <div className="outerbox column_outer">
          {/* First Row -- FOR FORM */}

          <div className="column">
            <label htmlFor="targetElement">Target Element:</label>
            <select
              id="targetElement"
              className="box_width"
              value={tooltipConfig.targetElement}
              onChange={(e) => handleInputChange(e, "targetElement")}
            >
              {buttons.map((button) => (
                <option key={button} value={button}>
                  {button}
                </option>
              ))}
            </select>
          </div>

          {/* Second Row -- FOR FORM */}

          <div className="column">
            <label htmlFor="tooltipText">Tooltip Text:</label>
            <input
              type="text"
              id="tooltipText"
              value={tooltipConfig.tooltipText}
              onChange={(e) => handleInputChange(e, "tooltipText")}
              className="box_width"
            />
          </div>

          {/* Third Row -- FOR FORM */}

          <div className="container">
            <div className="column">
              <label htmlFor="textSize">Text Size:  (ex 
              10 - 22)</label>
              <input
                type="number"
                value={tooltipConfig.textSize}
                onChange={(e) => handleInputChange(e, "textSize")}
                className="box_width_1"
              />
            </div>

            <div className="column">
              <label htmlFor="padding">Padding:  (ex 
              10 - 20)</label>
              <input
                type="number"
                value={tooltipConfig.padding}
                onChange={(e) => handleInputChange(e, "padding")}
                className="box_width_1"
              />
            </div>
          </div>

          {/* Fourth Row -- FOR FORM */}

          <div className="column">
            <label htmlFor="textColor">Text Colour:</label>
            <input
              type="text"
              value={tooltipConfig.textColor}
              onChange={(e) => handleInputChange(e, "textColor")}
              className="box_width"
            />
          </div>

          {/* Fifth Row -- FOR FORM */}

          <div className="column">
            <label htmlFor="backgroundColor">Background Colour:</label>
            <input
              type="text"
              value={tooltipConfig.backgroundColor}
              onChange={(e) => handleInputChange(e, "backgroundColor")}
              className="box_width"
            />
          </div>

          {/* Sixth Row -- FOR FORM */}

          <div className="container">
            <div className="column">
              <label htmlFor="cornerRadius">Corner Radius:</label>
              <input
                type="text"
                value={tooltipConfig.cornerRadius}
                onChange={(e) => handleInputChange(e, "cornerRadius")}
                className="box_width_1"
              />
            </div>

            <div className="column">
              <label htmlFor="tooltipWidth">Tooltip Width:</label>
              <input
                type="number"
                value={tooltipConfig.tooltipWidth}
                onChange={(e) => handleInputChange(e, "tooltipWidth")}
                className="box_width_1"
              />
            </div>
          </div>

          {/* Seventh Row -- FOR FORM */}

          <div className="container">
            <div className="column">
              <label htmlFor="arrowWidth">Arrow Width:</label>
              <input
                type="number"
                value={tooltipConfig.arrowWidth}
                onChange={(e) => handleInputChange(e, "arrowWidth")}
                className="box_width_1"
              />
            </div>

            <div className="column">
              <label htmlFor="arrowHeight">Arrow Height:</label>
              <input
                type="number"
                value={tooltipConfig.arrowHeight}
                onChange={(e) => handleInputChange(e, "arrowHeight")}
                className="box_width_1"
              />
            </div>
          </div>

          {/* Eighth Row -- FOR FORM */}

          <div className="column">
            <label htmlFor="tooltipImage">
              <i class="fa fa-heart"></i>
              <span
                style={{
                  color: "red",
                  fontWeight: "extrabold",
                  fontSize: "16px",
                }}
              >
                {" "}
                TOOLTIP IMAGE URL:
              </span>{" "}
              (*Additional Feature*) - <i>Paste your URL here</i>
            </label>
            <input
              type="text"
              id="tooltipImage"
              value={tooltipConfig.tooltipImage}
              onChange={(e) => handleInputChange(e, "tooltipImage")}
              className="box_width"
            />
          </div>
        </div>

        {/* IInd PART */}
        {/*  
            Each button's appearance is customized using tooltipConfig settings, 
            including dimensions, colors, and text styling. 
            A tooltip with specified dimensions and content is displayed. 
        */}

        <div className="column_outer2">
          <div className="outer_mobile_screen">
            <div className="mobile-screen">
              {buttons.map((button, index) => (
                <button
                  key={index}
                  className={`corner-button ${
                    button === "Button 3"
                      ? "center-button"
                      : button === "Button 1"
                      ? "top-left"
                      : button === "Button 2"
                      ? "top-right"
                      : button === "Button 4"
                      ? "bottom-left"
                      : button === "Button 5"
                      ? "bottom-right"
                      : button
                  }`}
                  style={{
                    width: tooltipConfig.tooltipWidth + "px",
                    height: tooltipConfig.tooltipHeight + "px",
                    borderRadius: tooltipConfig.cornerRadius + "px",
                    backgroundColor: tooltipConfig.backgroundColor,
                    color: tooltipConfig.textColor,
                    fontSize: tooltipConfig.textSize + "px",
                    padding: tooltipConfig.padding + "px",
                  }}
                >
                  {button}
                  <div
                    className="tooltip"
                    style={{
                      width: tooltipConfig.tooltipWidth + "px",
                      borderWidth: tooltipConfig.arrowWidth + "px",
                      borderColor:
                        "transparent transparent " +
                        tooltipConfig.backgroundColor +
                        " transparent",
                    }}
                  >
                    {tooltipConfig.tooltipText}
                    {tooltipConfig.tooltipImage && (
                      <div className="tooltip-image">
                        <img
                          src={tooltipConfig.tooltipImage}
                          alt="Tooltip Image"
                        />
                      </div>
                    )}
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default ToolTipSetting;
