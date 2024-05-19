import React, { useRef, useState } from "react";
import Home from "./pages/home";
import All from "./pages/all";
import Live from "./pages/live";
import Sell from "./pages/sell";
import Analytics from "./pages/analytics";
import Notifications from "./pages/notifications";
import Settings from "./pages/settings";
import "./mainpage.css";
import Bidwar, {
  AllIcon,
  AnalyticsIcon,
  Call,
  Chat,
  HomeIcon,
  Info,
  LiveIcon,
  NotificationsIcon,
  Profile,
  SearchIcon,
  SellIcon,
  SettingsIcon,
  UserIcon,
} from "./pages/svgs";

export default function MainPage() {
  const [page, setPage] = useState("home");
  const newPage = (page) => {
    setPage(page);
  };
  const members = [
    { name: "Curtis Drake", bid: "$86,000.00" },
    { name: "Douglas Wise", bid: "$75,000.00" },
    { name: "Gerald Carr", bid: "$74,000.00" },
    { name: "William Bowers", bid: "$73,000.00" },
    { name: "Zachary Copeland", bid: "$73,000.00" },
    { name: "Stephen Hudson", bid: "$71,000.00" },
    { name: "Angel Dixon", bid: "$70,000.00" },
    { name: "Chris Hines", bid: "$69,000.00" },
    { name: "Alta Campbell", bid: "$68,000.00" },
    { name: "Floyd Rhodes", bid: "$68,000.00" },
    { name: "Jorge Nguyen", bid: "$67,000.00" },
    { name: "Myrtle Schmidt", bid: "$65,000.00" },
    { name: "Louise Crawford", bid: "$65,000.00" },
    { name: "Lula Reese", bid: "$63,000.00" },
    { name: "Chester Frazier", bid: "$62,000.00" },
    { name: "Owen King", bid: "$61,000.00" },
    { name: "Lily Wright", bid: "$60,000.00" },
    { name: "Alex Smith", bid: "$58,000.00" },
    { name: "Mildred Chapman", bid: "$57,000.00" },
    { name: "Beulah Mathis", bid: "$54,000.00" },
    { name: "Juan Dixon", bid: "$53,000.00" },
    { name: "Esther Long", bid: "$51,000.00" },
    { name: "Lester Hudson", bid: "$49,000.00" },
    { name: "Frederick Stevenson", bid: "$46,000.00" },
    { name: "Marcus Freeman", bid: "$46,000.00" },
    { name: "Fannie Caldwell", bid: "$45,000.00" },
    { name: "Ruth Woods", bid: "$43,000.00" },
    { name: "Effie Briggs", bid: "$42,000.00" },
    { name: "Lucile Vasquez", bid: "$41,000.00" },
    { name: "Abbie Lindsey", bid: "$40,000.00" },
    { name: "Dominic Simon", bid: "$40,000.00" },
  ];
  return (
    <div className="container">
      <div className="sidebar">
        <div className="page-links">
          <span
            className={page === "home" ? "active" : "not-active"}
            onClick={() => newPage("home")}
          >
            <HomeIcon />
            <span className="page-name">home</span>
          </span>
          <span
            className={page === "all" ? "active" : "not-active"}
            onClick={() => newPage("all")}
          >
            <AllIcon />
            <span className="page-name">all</span>
          </span>
          <span
            className={page === "live" ? "active" : "not-active"}
            onClick={() => newPage("live")}
          >
            <LiveIcon />
            <span className="page-name">live</span>
          </span>
          <span
            className={page === "sell" ? "active" : "not-active"}
            onClick={() => newPage("sell")}
          >
            <SellIcon />
            <span className="page-name">sell</span>
          </span>
          <span
            className={page === "analytics" ? "active" : "not-active"}
            onClick={() => newPage("analytics")}
          >
            <AnalyticsIcon />
            <span className="page-name">analy...</span>
          </span>
          <span
            className={page === "notifications" ? "active" : "not-active"}
            onClick={() => newPage("notifications")}
          >
            <NotificationsIcon />
            <span className="page-name">notifi...</span>
          </span>
          <span
            className={page === "settings" ? "active" : "not-active"}
            onClick={() => newPage("settings")}
          >
            <SettingsIcon />
            <span className="page-name">settings</span>
          </span>
        </div>
      </div>
      <div className="body-wrapper">
        <div className="top-bar">
          <h2 className="topper">
            <Bidwar /> BidWar
          </h2>
          <div className="search-bar">
            <SearchIcon />
            <input
              type="text"
              placeholder="Search"
              className="input"
              id="search-input"
            />
          </div>
          <div className="top-right-bar-container">
            <div className="options"></div>
            <div className="options">
            </div>
            <div className="options">
              <Profile/>
            </div>
          </div>
        </div>
        <div className="bids">
          <div className="content-container">
            {page === "home" && <Home />}
            {page === "all" && <All />}
            {page === "live" && <Live />}
            {page === "sell" && <Sell />}
            {page === "schedule" && <Schedule />}
            {page === "analytics" && <Analytics />}
            {page === "notifications" && <Notifications />}
            {page === "settings" && <Settings />}
          </div>
        </div>
      </div>
      <div className="right-sidebar">
        <div className="page-links">
          <span className="not-active">
            <Info />
          </span>
          <span className="not-active">
            <Chat />
          </span>
          <span className="not-active">
            <Call />
          </span>
        </div>
      </div>
    </div>
  );
}
