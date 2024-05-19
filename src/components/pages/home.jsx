import React from "react";
import "./home.css";
import { ImageIcon } from "./svgs";

export default function Home() {
  const items = [
    "1353",
    "9693",
    "9693",
    "9693",
    "0917",
    "0917",
    "4987",
    "4987",
    "5653",
    "5653",
    "5667",
    "5667",
    "9662",
    "9662",
    "9351",
    "9351",
    "9698",
    "9698",
    "4594",
    "4594",
    "1427",
    "1427",
    "6630",
    "6630",
    "7280",
    "7280",
    "4549",
    "4549",
    "3549",
    "3549",
    "6770",
    "6770",
    "3888",
    "3888",
    "1096",
    "1096",
    "1595",
    "1595",
    "7993",
    "7993",
    "7993",
    "7993",
    "1802",
    "1802",
    "1802",
    "1802",
    "4882",
    "4882",
    "4882",
    "4882",
    "4778",
    "4778",
    "4778",
    "4778",
    "7482",
    "7482",
    "7482",
    "7482",
    "1165",
    "1165",
    "1165",
    "1165",
    "2215",
    "2215",
    "2215",
    "2215",
    "7848",
    "7848",
    "7848",
    "7848",
    "1829",
    "1829",
    "2764",
    "2764",
    "0100",
    "0100",
    "8908",
    "6340",
  ];
  return (
    <div id="home" className="page">
      <div className="items-container">
        <span className="home-heading-one">Trending Bid Items</span>
        <div className="items-sub-container">
          {items.map((item, i) => {
            return (
              <div className="item-div">
                <span className="trending-items-image">
                  <ImageIcon />
                </span>
                <span className="trending-items-number">item: {item}</span>
              </div>
            );
          })}
        </div>
      </div>
      <div className="items-container">
        <span className="home-heading-one">Sold Items</span>
        <div className="items-sub-container">
          {items.map((item, i) => {
            return (
              <div className="item-div">
                <span className="trending-items-image">
                  <ImageIcon />
                </span>
                <span className="trending-items-number">item: {item}</span>
              </div>
            );
          })}
        </div>
      </div>
      <div className="items-container">
        <span className="home-heading-one">Statistics Chart</span>
        <div className="statistics-chart">
        </div>
        <div className="statistics-container">
          <div className="statistic-div"></div>
          <div className="statistic-div"></div>
          <div className="statistic-div"></div>
          <div className="statistic-div"></div>
        </div>
      </div>
    </div>
  );
}
