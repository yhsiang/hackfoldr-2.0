import React from "react/addons";

export default React.createClass({
  displayName: "View",

  render () {
    return (
      <div
        id="wrapper"
        className="desktop-expanded-layout">
        <div className="frame">
          <iframe
            id="iframe"
            name="iframe"></iframe>
        </div>
      </div>
    );
  }
});