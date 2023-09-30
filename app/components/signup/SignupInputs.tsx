"use client";

import Input from "../inputs/Input";

interface ThisType {
  name: string;
  username: string;
  email: string;
  password: string;
  otp: string;
  section: number;
  setName: (val: string) => void;
  setUsername: (val: string) => void;
  setEmail: (val: string) => void;
  setPassword: (val: string) => void;
  setOtp: (val: string) => void;
  setSection: (val: number) => void;
}

export default function SignupInputs({
  name,
  username,
  email,
  password,
  setName,
  setUsername: setAge,
  setEmail,
  setPassword,
  otp,
  section,
  setSection,
  setOtp,
}: ThisType) {
  const values = [
    {
      id: "name",
      placeholder: "Name",
      type: "text",
      value: name,
      setValue: setName,
    },
    {
      id: "username",
      placeholder: "Username",
      type: "text",
      value: username,
      setValue: setAge,
    },
    {
      id: "email",
      placeholder: "Email",
      type: "email",
      value: email,
      setValue: setEmail,
    },
    {
      id: "password",
      placeholder: "Password",
      type: "password",
      value: password,
      setValue: setPassword,
    },
  ];
  return (
    <main className="flex flex-col items-center gap-4 w-full">
      {section == 1 &&
        values.map((value) => (
          <Input
            id={value.id}
            placeholder={value.placeholder}
            type={value.type}
            value={value.value}
            setValue={value.setValue}
            key={value.id}
          />
        ))}
      {section == 2 && (
        <div className="flex flex-col w-full items-start gap-4">
          <Input
            id="otp"
            placeholder="Enter your code"
            type="number"
            value={otp}
            setValue={setOtp}
            key={"otp"}
          />
          <h1 className="opacity-60 font-extralight text-sm pl-4">
            Email sent to {email}
          </h1>
        </div>
      )}
    </main>
  );
}
