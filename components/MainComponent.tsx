"use client";

import { useEffect, useState } from "react";
import DateInputComponent from "./DateInputComponent";
import ButtonComponent from "./ButtonComponent";
import SearchIcon from "@mui/icons-material/Search";
import RadioBtnComponent from "./RadioBtnComponent";
import NavComponent from "./NavBarComponent";
import { applyDataType } from "../types/common";
import MainTableComponent from "./MainTableComponent";
import { searchData } from "@/axios/axiosInstance";
import { useQuery } from "@tanstack/react-query";

function MainComponent(): JSX.Element {
  //메인페이지 검색 후 가져온 데이터
  const [searchedData, setSearchedData] = useState<applyDataType[]>([]);
  // 날짜 입력 state
  const [dateState1, setDateState1] = useState<string>();
  const [dateState2, setDateState2] = useState<string>();
  // 메인 테이블에 보낼 state
  const [renderState, setRenderState] = useState<boolean>(false);
  const [noData, setNoData] = useState<string>("조회된 데이터가 없습니다.");
  const [clicked, setClicked] = useState<boolean>(false);

  // useEffect(() => {}, []);

  const { data, error } = useQuery({
    queryKey: [dateState1!, dateState2!],
    queryFn: () => searchData(dateState1!, dateState2!),
    enabled: clicked,
  });
  //axios.get 요청
  const searchWorkType = () => {
    setClicked(true);
    console.log(data);
    if (error) {
      console.log(error);
    } else if (data!.length == 0) {
      setNoData("해당 기간 내 신청 건이 없습니다.");
    } else if (data!) {
      console.log(data);
      setSearchedData(data);
      setRenderState(true);
      setNoData("");
    }
  };

  useEffect(() => {
    console.log(searchedData);
  }, [searchedData]);

  const getDate1 = (dateValue: string) => {
    setDateState1(dateValue);
  };
  const getDate2 = (dateValue: string) => {
    setDateState2(dateValue);
    console.log(dateState1);
    console.log(dateState2);
  };

  // const selectValue = [
  //   { val: 1, name: "10개씩" },
  //   { val: 2, name: "20개씩" },
  //   { val: 3, name: "30개씩" },
  // ];
  return (
    <div>
      <NavComponent />
      <div
        className="container"
        style={{ display: "flex", flexDirection: "column" }}
      >
        <div className="header-container">
          <header>
            <div className="floatL">
              <span className="notice">공지</span>
              <span>&nbsp;2023-03-03&nbsp;·&nbsp;제이니스 재택근무 수칙</span>
            </div>
          </header>
        </div>

        <form className="mainForm">
          <h2 className="mainH2">출장관리</h2>
          <table className="tableWrap bgBox">
            <thead>
              <tr>
                <td>
                  <div className="formRadio">
                    <RadioBtnComponent />
                  </div>
                </td>
                <td>
                  <div className="dateControl">
                    <div>
                      <DateInputComponent getStartDate={getDate1} />
                    </div>
                    &nbsp;~
                    <div>
                      <DateInputComponent getEndDate={getDate2} />
                    </div>
                    <ButtonComponent
                      btnName="검색"
                      icon={<SearchIcon sx={{ width: 20 }} />}
                      search={searchWorkType}
                    />
                  </div>
                </td>
                <td>
                  <div
                    onClick={() => {
                      window.open(
                        "/modal",
                        "modal",
                        "scrollbars=yes,resizable=no, width=780, height=650, left=500,top=100"
                      );
                    }}
                  >
                    <ButtonComponent btnName="출장신청" />
                  </div>
                </td>
              </tr>
            </thead>
          </table>

          <div className="mainTable">
            <MainTableComponent
              renderState={renderState}
              searchedData={searchedData}
              noData={noData}
              setNoData={setNoData}
              setSearchedData={setSearchedData}
            />
            {/* <div className="tablePage">
              <SelectBoxComponent selectValue={selectValue} />
            </div> */}
          </div>
        </form>
      </div>
    </div>
  );
}
export default MainComponent;
