import React from "react";
import { capitalizeFirstLetter } from "../../utils/helpers";

function Nav(props) {
  const { tabs = [], setCurrentTab, currentTab } = props;

  // const handleClick = (item) => {
  //   console.log(item);
  //   return item;
  // };

  return (
    <nav>
      <ul className="flex-row">
        <li className="mx-2"></li>
        {tabs.map((tab) => (
          <li
            className={`mx-1 ${currentTab.name === tab.name && "navActive"}`}
            key={tab.name}
          >
            <span
              onClick={() => {
                setCurrentTab(tab);
              }}
            >
              {capitalizeFirstLetter(tab.name)}
            </span>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Nav;
