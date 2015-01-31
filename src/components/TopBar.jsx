import React from "react/addons";

export default React.createClass({
  displayName: "TopBar",

  render () {
    return (
      <nav id="topbar">
        <div className="ui borderless menu">
          <a target="iframe" className="right icon item edit table">
            <i data-content="編輯" className="icon pencil"></i>
          </a>
          <a className="right icon item refresh table hidden">
            <i data-content="更新" className="icon repeat"></i>
          </a>
          <a className="right icon item add to list hidden">
            <i className="icon add"></i>
          </a>
        </div>
      </nav>
    );
  }
});
