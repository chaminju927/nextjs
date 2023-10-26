import Button from "@mui/material/Button";
import { createTheme, ThemeProvider } from "@mui/material/styles";
//import { useMemo, useState } from "react";
import React from "react";

const mainTheme = createTheme({
  palette: {
    primary: {
      main: "#363a54",
      contrastText: "#fff",
    },
  },
  typography: {
    fontSize: 12,
  },
});

const roundTheme = createTheme({
  palette: {
    primary: {
      main: "#00c0aa",
      contrastText: "#fff",
    },
  },
  typography: {
    fontSize: 12,
  },
});

function ButtonComponent({
  searchTable, // ModalTable의 결재자 검색
  search, // Maincomponent에서 보냄
  btnName,
  icon,
}: {
  searchTable?: () => void;
  btnName: string;
  icon?: React.ReactNode;
  search?: () => void;
}): JSX.Element {
  if (btnName === "선택") {
    return (
      <div>
        <ThemeProvider theme={mainTheme}>
          <Button
            className="Button"
            size="medium"
            color="primary"
            variant="outlined"
            startIcon={icon}
            onClick={searchTable}
          >
            {btnName}
          </Button>
        </ThemeProvider>
      </div>
    );
  } else if (btnName === "출장신청") {
    return (
      <div>
        <ThemeProvider theme={roundTheme}>
          <Button
            size="medium"
            className="buttonText"
            color="primary"
            variant="contained"
            startIcon={icon}
            sx={{
              borderRadius: 20,
              height: 30,
            }}
          >
            {btnName}
          </Button>
        </ThemeProvider>
      </div>
    );
  } else if (btnName === "신청") {
    return (
      <div>
        <ThemeProvider theme={mainTheme}>
          <Button
            size="medium"
            color="primary"
            variant="contained"
            startIcon={icon}
            onClick={searchTable}
          >
            {btnName}
          </Button>
        </ThemeProvider>
      </div>
    );
  } else {
    // 메인 검색 버튼
    return (
      <div>
        <ThemeProvider theme={mainTheme}>
          <Button
            size="medium"
            color="primary"
            variant="contained"
            startIcon={icon}
            onClick={search}
          >
            {btnName}
          </Button>
        </ThemeProvider>
      </div>
    );
  }
}
export default ButtonComponent;
