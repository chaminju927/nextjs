import React, { useEffect, useState } from "react";
import { dataType } from "../types/common";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";

function TextAreaComponent({
  content,
  selectedData,
  getReason,
}: {
  content: string;
  selectedData?: dataType;
  getReason: (inputText: string) => void;
}): JSX.Element {
  useEffect(() => {
    if (selectedData !== undefined) {
      setTableData([selectedData]);
    }
  }, [selectedData]);

  const [tableData, setTableData] = useState<dataType[]>([]);
  const [inputText, setInputText] = useState<string>("");

  const deleteBtn: () => void = () => {
    setTableData([]);
    console.log(content);
  };
  const getText = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputText(e.target.value);
    getReason(inputText);
  };

  if (tableData.length > 0) {
    return (
      <div>
        <table className="textArea selectedBox">
          {tableData.map((data, index) => (
            <tr key={index}>
              <td className="TableHead selectedNo">{index + 1}차</td>

              <td colSpan={4} className="selected">
                {data.part} {data.name} {data.position}
                <IconButton onClick={deleteBtn}>
                  <DeleteIcon sx={{ width: 16, marginRight: 0 }} />
                </IconButton>
              </td>
            </tr>
          ))}
        </table>
      </div>
    );
  } else {
    return (
      <div>
        <textarea
          className="textArea"
          placeholder={content}
          onChange={getText}
        ></textarea>
      </div>
    );
  }
}
export default TextAreaComponent;
