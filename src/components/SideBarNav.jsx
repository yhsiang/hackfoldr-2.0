import React from "react/addons";
import "./SideBarNav.sass";

export default React.createClass({
  displayName: "SideBarNav",

  render () {
    return (
      <nav id="nav"
           className="desktop only">
        <div className="ui borderless menu">
          <div className="ui dropdown icon item history">
            <i className="icon time"></i>
            <div className="menu">
              <div className="item no data hidden">
                您還沒有瀏覽 foldr 的紀錄
              </div>
            </div>
          </div>
          <div className="ui dropdown icon item about">
            <i className="icon help"></i>
            <div className="menu">
              <a className="foldr item"
                 href="/welcome-to-hackfoldr">
                <i className="icon exchange"></i>
                使用說明、問題回報
              </a>
              <a className="foldr item"
                 href="/hackfoldr-2.0-template-hackathon">
                <i className="icon exchange"></i>
                Hackfoldr 2.0 空白模版 - 黑客松
              </a>
              <a className="foldr item"
                 href="//github.com/hackfoldr/maker.moztw.org"
                 target="_blank">
                <i className="icon github"></i>
                <i className="icon forward mail"></i>
                程式碼
              </a>
            </div>
          </div>
          <a className="right item expand button collapsed mode hidden desktop only">
            <i className="icon arrow right" data-content="展開"></i>
          </a>
          <a className="right item collapse button expanded mode desktop only">
            <i className="icon arrow left" data-content="收合"></i>
          </a>
          <div className="right icon item zoom ui dropdown">
            <i className="icon zoom in"></i>
            <div className="menu">
              <div className="item normal">100%</div>
              <div className="item large">130%</div>
              <div className="item larger">150%</div>
            </div>
          </div>
        </div>
      </nav>
    );
  }
});