import Radio, { RadioProps } from "@mui/material/Radio";
import FormControlLabel from "@mui/material/FormControlLabel";
import { RadioGroup } from "@mui/material";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";

function RadioBtnComponent() {
  const BtnIcon = styled("span")(() => ({
    //radiobtn 클릭 전
    borderRadius: "50%",
    width: 19,
    height: 19,
    display: "inline-block",
    backgroundColor: "#fff",
  }));

  const CheckedBtn = styled(BtnIcon)({
    borderRadius: "50%",
    backgroundColor: "#00c0aa",
    "&:before": {
      display: "inline-block",
      width: 19,
      height: 19,
      backgroundImage: "radial-gradient(#fff,#fff 28%,transparent 32%)",
      content: '""',
    },
    outline: "none",
    boxShadow: "none",
  });

  function RadioBtn(props: RadioProps) {
    return (
      <Radio
        disableRipple
        color="default"
        checkedIcon={<CheckedBtn />}
        icon={<BtnIcon />}
        {...props}
      />
    );
  }
  return (
    <div>
      <RadioGroup defaultValue="all" style={{ flexDirection: "row" }}>
        <FormControlLabel
          value="all"
          control={<RadioBtn />}
          label={<Typography sx={{ fontSize: 12 }}>전체</Typography>}
        />
        <FormControlLabel
          value="normal"
          control={<RadioBtn />}
          label={<Typography sx={{ fontSize: 12 }}>정상</Typography>}
        />
        <FormControlLabel
          value="cancel"
          control={<RadioBtn />}
          label={<Typography sx={{ fontSize: 12 }}>취소</Typography>}
        />
      </RadioGroup>
    </div>
  );
}
export default RadioBtnComponent;
