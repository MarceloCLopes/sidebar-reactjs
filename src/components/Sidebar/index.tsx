import { useContext, useRef, useState } from "react";
import { logoSVG } from "../../assets";
import * as S from "./styles";

import {
  AiOutlineApartment,
  AiOutlineHome,
  AiOutlineLeft,
  AiOutlineSearch,
  AiOutlineSetting,
} from "react-icons/ai";
import { MdLogout, MdOutlineAnalytics } from "react-icons/md";
import { BsPeople } from "react-icons/bs";

import { ThemeContext } from "../../App";
import { useLocation } from "react-router-dom";

export function Sidebar() {
  const searchRef = useRef(null);
  const { setTheme, theme } = useContext(ThemeContext);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { pathname } = useLocation();

  function searchClickHandler() {
    if (!sidebarOpen) {
      setSidebarOpen(true);
      searchRef.current.focus();
    } else {
      // search funcionality
    }
  }

  return (
    <S.Sidebar isOpen={sidebarOpen}>
      <>
        <S.SidebarButton
          isOpen={sidebarOpen}
          onClick={() => setSidebarOpen((p) => !p)}
        >
          <AiOutlineLeft />
        </S.SidebarButton>
      </>
      <S.Logo>
        <img src={logoSVG} alt="logo" />
      </S.Logo>

      <S.Search
        onClick={searchClickHandler}
        style={!sidebarOpen ? { width: `fit-content` } : {}}
      >
        <S.SearchIcon>
          <AiOutlineSearch />
        </S.SearchIcon>
        <input
          ref={searchRef}
          placeholder="Search"
          style={!sidebarOpen ? { width: 0, padding: 0 } : {}}
        />
      </S.Search>

      <S.Divider />
      {linksArray.map(({ icon, label, notification, to }) => (
        <S.LinkContainer key={label} isActive={pathname === to}>
          <S.SLink to={to} style={!sidebarOpen ? { width: `fit-content` } : {}}>
            <S.LinkIcon>{icon}</S.LinkIcon>
            {sidebarOpen && (
              <>
                <S.LinkLabel>{label}</S.LinkLabel>
                {!!notification && (
                  <S.LinkNotification>{notification}</S.LinkNotification>
                )}
              </>
            )}
          </S.SLink>
        </S.LinkContainer>
      ))}

      <S.Divider />
      {secondaryLinksArray.map(({ icon, label }) => (
        <S.LinkContainer key={label}>
          <S.SLink to="/" style={!sidebarOpen ? { width: `fit-content` } : {}}>
            <S.LinkIcon>{icon}</S.LinkIcon>
            {sidebarOpen && <S.LinkLabel>{label}</S.LinkLabel>}
          </S.SLink>
        </S.LinkContainer>
      ))}

      <S.Divider />
      <S.Theme>
        {sidebarOpen && <S.ThemeLabel>Dark Mode</S.ThemeLabel>}
        <S.ThemeToggler
          isActive={theme === "dark"}
          onClick={() => setTheme((p) => (p === "light" ? "dark" : "light"))}
        >
          <S.ToggleThumb style={theme === "dark" ? { right: "1px" } : {}} />
        </S.ThemeToggler>
      </S.Theme>
    </S.Sidebar>
  );
}

const linksArray = [
  {
    label: "Home",
    icon: <AiOutlineHome />,
    to: "/",
    notification: 0,
  },
  {
    label: "Statistics",
    icon: <MdOutlineAnalytics />,
    to: "/statistics",
    notification: 0,
  },
  {
    label: "Customer",
    icon: <BsPeople />,
    to: "/customers",
    notification: 0,
  },
  {
    label: "Diagrams",
    icon: <AiOutlineApartment />,
    to: "/diagrams",
    notification: 1,
  },
];

const secondaryLinksArray = [
  {
    label: "Settings",
    icon: <AiOutlineSetting />,
  },
  {
    label: "Logout",
    icon: <MdLogout />,
  },
];
