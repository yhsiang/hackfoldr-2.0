import React from "react/addons";
import "./Toc.sass";

export default React.createClass({
  displayName: "Toc",

  render () {
    return (
      <nav id="toc">
        <div className="ui fluid vertical menu sortable">
        </div>
      </nav>
    );
  }
});