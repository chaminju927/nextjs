import { useState } from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs, { Dayjs } from "dayjs";
import { createTheme, ThemeProvider } from "@mui/material/styles";
const theme = createTheme({
  typography: {
    fontSize: 12,
  },
});

function DateInputComponent({
  getStartDate, // MainComponent에서 보내는 콜백함수
  getEndDate,
  applyStartDate,
  applyEndDate,
}: {
  getStartDate?: (dateValue: string) => void;
  getEndDate?: (dateValue: string) => void;
  applyStartDate?: (inputDate: string) => void;
  applyEndDate?: (inputDate: string) => void;
}): JSX.Element {
  const [dateValue, setDateValue] = useState<string>();
  // useEffect(() => {
  //   console.log(dateValue);
  // }, [dateValue]);

  const dateChange = (newValue: Dayjs) => {
    const inputDate: string = newValue.format("YYYY-MM-DD");
    console.log(inputDate);
    setDateValue(inputDate);

    if (getStartDate) {
      getStartDate(inputDate);
    } else if (getEndDate) {
      getEndDate(inputDate);
    } else if (applyStartDate) {
      applyStartDate(inputDate);
    } else if (applyEndDate) {
      applyEndDate(inputDate);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <div className="date-picker-container">
          <DatePicker
            defaultValue={dayjs(new Date())}
            sx={{ width: 160 }}
            value={dayjs(dateValue)}
            onChange={(newValue) => {
              if (newValue) {
                dateChange(newValue);
              } else {
                return null;
              }
            }}
          />
        </div>
      </LocalizationProvider>
    </ThemeProvider>
  );
}
export default DateInputComponent;
