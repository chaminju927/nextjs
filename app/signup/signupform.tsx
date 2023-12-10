import React, { useState } from 'react';

interface SignUpFormState {
  email: string;
  password: string;
  confirmPassword: string;
}

const SignUpForm: React.FC = () => {
  const [formData, setFormData] = useState<SignUpFormState>({
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState<Partial<SignUpFormState>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('폼이 유효합니다:', formData);
    } else {
      console.log('폼이 유효하지 않습니다.');
    }
  };

  const validateForm = () => {
    const newErrors: Partial<SignUpFormState> = {};

    // 이메일 유효성 검사 정규식
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    if (!emailRegex.test(formData.email)) {
      newErrors.email = '이메일 형식이 올바르지 않습니다.';
    }

    // 비밀번호 길이 및 형식 검사 정규식
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;
    if (!passwordRegex.test(formData.password)) {
      newErrors.password =
        '비밀번호는 최소 6자 이상이어야 하며, 영문자와 숫자를 포함해야 합니다.';
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = '비밀번호가 일치하지 않습니다.';
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="email">이메일:</label>
        <input
          type="text"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        <span style={{ color: 'red' }}>{errors.email}</span>
      </div>

      <div>
        <label htmlFor="password">비밀번호:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
        <span style={{ color: 'red' }}>{errors.password}</span>
      </div>

      <div>
        <label htmlFor="confirmPassword">비밀번호 확인:</label>
        <input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
        />
        <span style={{ color: 'red' }}>{errors.confirmPassword}</span>
      </div>

      <button type="submit">가입하기</button>
    </form>
  );
};

export default SignUpForm;
