import InputBox from "@/components/inputBox/InputBox";
import styles from "./signup.module.scss";
import {
  useState,
  forwardRef,
  useImperativeHandle,
  useRef,
  useEffect,
} from "react";
//import Button from '@/components/button/button';

export type Step1InputValueTypes = {
  comName: string;
  comNumber: string;
  domain: string;
  partner: string;
};

type Step1Props = {
  validation: boolean;
};

export type Step1InputHandle = {
  getData: () => Step1InputValueTypes;
};

const lengthRegex = /^.{2,20}$/; //모든 글자 2글자이상 20글자 이하
//var pr = /^[0-9]{4,}$/      //숫자 4글자 이상

const comNameRegex = /^[A-Za-z0-9가-힣]+$/;
const comNumberRegex = /^[0-9]$/;
const domainRegex = /^[a-zA-Z0-9_-]{2,20}$/;
const partnerRegex = /^[a-zA-Z가-힣]{2,8}$/;

const Step1 = forwardRef<Step1InputHandle, Step1Props>(
  ({ validation }: Step1Props, ref): JSX.Element => {
    const refCompanyName = useRef<HTMLInputElement>(null);
    const refCompanyNumber = useRef<HTMLInputElement>(null);
    const refDomain = useRef<HTMLInputElement>(null);
    const refPartner = useRef<HTMLInputElement>(null);

    const [errorMessage, setErrorMessage] = useState<Step1InputValueTypes>({
      comName: "",
      comNumber: "",
      domain: "",
      partner: "",
    });

    const validComName = () => {
      if (!lengthRegex.test(refCompanyName.current?.value!)) {
        setErrorMessage((prev) => ({
          ...prev,
          comName: "최소 2글자 이상 입력해주세요.",
        }));
        return false;
      }
      if (!comNameRegex.test(refCompanyName.current?.value!)) {
        setErrorMessage((prev) => ({
          ...prev,
          comName: "한글/영문자/숫자만 사용하여 입력해주세요.",
        }));
        return false;
      }
      setErrorMessage((prev) => ({ ...prev, comName: "" }));
      return true;
    };

    const validComNo = () => {
      if (!lengthRegex.test(refCompanyNumber.current?.value!)) {
        setErrorMessage((prev) => ({
          ...prev,
          comNumber: "최소 2글자 이상 입력해주세요.",
        }));

        return false;
      } else if (!comNumberRegex.test(refCompanyNumber.current?.value!)) {
        setErrorMessage((prev) => ({
          ...prev,
          comNumber: "숫자만 사용하여 입력해주세요.",
        }));
        return false;
      }
      setErrorMessage((prev) => ({ ...prev, comNumber: "" }));
      return true;
    };

    const validDomain = () => {
      if (!lengthRegex.test(refDomain.current?.value!)) {
        setErrorMessage((prev) => ({
          ...prev,
          domain: "최소 2글자 이상 입력해주세요.",
        }));

        return false;
      } else if (!domainRegex.test(refDomain.current?.value!)) {
        setErrorMessage((prev) => ({
          ...prev,
          domain: "영문 소문자/숫자/-만 사용하여 입력해주세요.",
        }));
        return false;
      }
      setErrorMessage((prev) => ({ ...prev, domain: "" }));
      return true;
    };
    const validPartner = () => {
      if (!lengthRegex.test(refPartner.current?.value!)) {
        setErrorMessage((prev) => ({
          ...prev,
          domain: "최소 2글자 이상 입력해주세요.",
        }));
        return false;
      } else if (!partnerRegex.test(refPartner.current?.value!)) {
        setErrorMessage((prev) => ({
          ...prev,
          partner: "한글/영문자만 사용하여 입력해주세요.",
        }));
        return false;
      }
      setErrorMessage((prev) => ({ ...prev, partner: "" }));
      return true;
    };

    const validateForm = () => {
      const isValidComName = validComName();
      const isValidComNo = validComNo();
      const isValidDomain = validDomain();
      const isValidPartner = validPartner();
      return isValidComName && isValidComNo && isValidDomain && isValidPartner
        ? true
        : false;
    };
    useImperativeHandle(ref, () => {
      return {
        getData() {
          if (validateForm()) {
            console.log("유효성 체크 완료");
            // setErrorMessage({
            //   comName: "",
            //   comNumber: "",
            //   domain: "",
            //   partner: "",
            // });
            return {
              comName: refCompanyName.current?.value || "",
              comNumber: refCompanyNumber.current?.value || "",
              domain: refDomain.current?.value || "",
              partner: refPartner.current?.value || "",
            };
          } else {
            console.log("유효성 체크 실패");
            return {
              comName: "",
              comNumber: "",
              domain: "",
              partner: "",
            };
          }
        },
      };
    });

    useEffect(() => {
      console.log(errorMessage);
    }, [errorMessage]);

    return (
      <div
        className={styles.step1_container}
        style={{ marginLeft: 120, marginTop: 60 }}
      >
        <InputBox
          ref={refCompanyName}
          type="text"
          name="company"
          placeholder="회사명을 입력해주세요"
          label="회사명"
          isImportant
          inputStyle={{ width: 320 }}
          errorMessage={errorMessage.comName}
        />
        <div className={styles.companyNo_area}>
          <InputBox
            ref={refCompanyNumber}
            type="text"
            name="companyNo"
            placeholder="000-00-000000"
            label="사업자번호"
            isImportant
            maxLength={20}
            inputStyle={{ width: 250, marginRight: 10 }}
            errorMessage={errorMessage.comNumber}
          />
          {/* <Button label="조회" size="x-small" customStyle={{ width: 40, height: 28 }} /> */}
        </div>

        <InputBox
          ref={refDomain}
          type="text"
          name="domain"
          placeholder="영문 소문자/숫자/- 만 사용하여 입력해주세요."
          label="도메인명"
          isImportant
          inputStyle={{ width: 320 }}
          errorMessage={errorMessage.domain}
        />
        <InputBox
          ref={refPartner}
          type="text"
          name="partner"
          placeholder="파트너사명으로 검색해주세요. (최소 2글자 이상 입력)"
          label="담당 파트너사"
          inputStyle={{ width: 320 }}
          errorMessage={errorMessage.partner}
        />
      </div>
    );
  }
);
export default Step1;
