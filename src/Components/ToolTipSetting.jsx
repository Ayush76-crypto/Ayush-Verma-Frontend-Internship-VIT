import React, { useState } from "react";
import "./ToolTipSetting.css";
import "./Column1st.css";
import "./Column2nd.css";

import Header from "./Header.jsx";
import Footer from "./Footer.jsx";


function ToolTipSetting() {

  // PRE-REQUISITE -- 1
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
  });

  // PRE-REQUISITE -- 2
  const buttons = ["Button 1", "Button 2", "Button 3", "Button 4", "Button 5"];

  // PRE-REQUISITE -- 3
  const handleInputChange = (event, property) => {
    const value = event.target.value;
    setTooltipConfig((prevConfig) => ({ ...prevConfig, [property]: value }));
  };


  return (
    <div>

      <Header />

      <div className="row_outer">
        <div className="outerbox column_outer">
          
          {/* First Row */}

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

          {/* Second Row */}

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

          {/* Third Row */}

          <div className="container">
            <div className="column">
              <label htmlFor="textSize">Text Size:</label>
              <input
                type="number"
                value={tooltipConfig.textSize}
                onChange={(e) => handleInputChange(e, "textSize")}
                className="box_width_1"
              />
            </div>

            <div className="column">
              <label htmlFor="padding">Padding:</label>
              <input
                type="number"
                value={tooltipConfig.padding}
                onChange={(e) => handleInputChange(e, "padding")}
                className="box_width_1"
              />
            </div>
          </div>

          {/* Fourth Row */}

          <div className="column">
            <label htmlFor="textColor">Text Colour:</label>
            <input
              type="text"
              value={tooltipConfig.textColor}
              onChange={(e) => handleInputChange(e, "textColor")}
              className="box_width"
            />
          </div>

          {/* Fifth Row */}

          <div className="column">
            <label htmlFor="backgroundColor">Background Colour:</label>
            <input
              type="text"
              value={tooltipConfig.backgroundColor}
              onChange={(e) => handleInputChange(e, "backgroundColor")}
              className="box_width"
            />
          </div>

          {/* Sixth Row */}

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

          {/* Seventh Row */}

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
        </div>

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
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

    <Footer />
      
    </div>
  );
}

export default ToolTipSetting;
