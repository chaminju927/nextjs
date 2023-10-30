"use client";

import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import BeachAccessIcon from "@mui/icons-material/BeachAccess";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import MoreTimeIcon from "@mui/icons-material/MoreTime";
import MonitorIcon from "@mui/icons-material/Monitor";
import ChairIcon from "@mui/icons-material/Chair";
import AnnouncementIcon from "@mui/icons-material/Announcement";
import HistoryToggleOffIcon from "@mui/icons-material/HistoryToggleOff";
import AddHomeWorkIcon from "@mui/icons-material/AddHomeWork";
import GroupsIcon from "@mui/icons-material/Groups";
import Typography from "@mui/material/Typography";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { createTheme, ThemeProvider } from "@mui/material";
import Page from "../app/calendar/page";

function NavComponent(): JSX.Element {
  const clicked = (e: React.MouseEvent): void => {
    var path = e.currentTarget.id;
    console.log(path);
  };

  return (
    <div>
      <nav id="sideBar">
        <h1 className="logo">
          <Image
            //className="logo"
            src="/public/images/logo.png"
            width={80}
            height={80}
            alt="logo"
          />
        </h1>
        <div className="lnb">
          <Link
            href="/calendar"
            style={{ textDecoration: "none", color: "#363a54" }}
          >
            <div className="sideBox" onClick={clicked}>
              <CalendarTodayIcon
                sx={{ marginRight: 3, marginLeft: 3, marginTop: 2 }}
              />
              <Typography sx={{ marginTop: 2 }}> 캘린더</Typography>
            </div>
          </Link>

          <Link
            href="/vacation"
            style={{ textDecoration: "none", color: "#363a54" }}
          >
            <div className="sideBox" onClick={clicked}>
              <BeachAccessIcon
                sx={{ marginRight: 3, marginLeft: 3, marginTop: 2 }}
              />
              <Typography sx={{ marginTop: 2 }}>휴가</Typography>
            </div>
          </Link>

          <Link
            href="/workTrip"
            style={{ textDecoration: "none", color: "#363a54" }}
          >
            <div className="sideBox" onClick={clicked}>
              <FlightTakeoffIcon
                sx={{ marginRight: 3, marginLeft: 3, marginTop: 2 }}
              />
              <Typography sx={{ marginTop: 2 }}>출장</Typography>
            </div>
          </Link>

          <Link
            href="/workTrip"
            style={{ textDecoration: "none", color: "#363a54" }}
          >
            <div className="sideBox" onClick={clicked}>
              <MoreTimeIcon
                sx={{ marginRight: 3, marginLeft: 3, marginTop: 2 }}
              />
              <Typography sx={{ marginTop: 2 }}>연장근무</Typography>
            </div>
          </Link>

          <Link
            href="/pcOnOff"
            style={{ textDecoration: "none", color: "#363a54" }}
          >
            <div id="pcOnOff" className="sideBox" onClick={clicked}>
              <MonitorIcon
                sx={{ marginRight: 3, marginLeft: 3, marginTop: 2 }}
              />
              <Typography sx={{ marginTop: 2 }}>근무기록</Typography>
            </div>
          </Link>

          <Link
            href="/vacant"
            style={{ textDecoration: "none", color: "#363a54" }}
          >
            <div className="sideBox" onClick={clicked}>
              <ChairIcon sx={{ marginRight: 3, marginLeft: 3, marginTop: 2 }} />
              <Typography sx={{ marginTop: 2 }}>자리비움</Typography>
            </div>
          </Link>

          <Link
            href="/notice"
            style={{ textDecoration: "none", color: "#363a54" }}
          >
            <div className="sideBox" onClick={clicked}>
              <AnnouncementIcon
                sx={{ marginRight: 3, marginLeft: 3, marginTop: 2 }}
              />
              <Typography sx={{ marginTop: 2 }}>공지사항</Typography>
            </div>
          </Link>

          <Link
            href="/flexible"
            style={{ textDecoration: "none", color: "#363a54" }}
          >
            <div className="sideBox" onClick={clicked}>
              <HistoryToggleOffIcon
                sx={{ marginRight: 3, marginLeft: 3, marginTop: 2 }}
              />
              <Typography sx={{ marginTop: 2 }}>유연근무</Typography>
            </div>
          </Link>

          <Link
            href="/telecommute"
            style={{ textDecoration: "none", color: "#363a54" }}
          >
            <div id="telecommute" className="sideBox" onClick={clicked}>
              <AddHomeWorkIcon
                sx={{ marginRight: 3, marginLeft: 3, marginTop: 2 }}
              />
              <Typography sx={{ marginTop: 2 }}>재택근무</Typography>
            </div>
          </Link>

          <Link
            href="/workState"
            style={{ textDecoration: "none", color: "#363a54" }}
          >
            <div id="workState" className="sideBox" onClick={clicked}>
              <GroupsIcon
                sx={{ marginRight: 3, marginLeft: 3, marginTop: 2 }}
              />
              <Typography sx={{ marginTop: 2 }}>부서원 근무 현황</Typography>
            </div>
          </Link>
          <div>
            <button className="btn btnTip">인증 초기화</button>
          </div>
        </div>
      </nav>
    </div>
  );
}
export default NavComponent;
