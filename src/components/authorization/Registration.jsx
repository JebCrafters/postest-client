import React, { useState } from "react";
import "./authorization.css";
import Input from "../utils/Input/Input";
import Button from "../utils/btn/Button";
import { registration } from "../../action/user";

const Registration = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="authorization">
      <div className="authorization__header"> Registration </div>
      <Input
        value={email}
        setValue={setEmail}
        type="text"
        placeholder="Write your email address"
      />
      <Input
        value={password}
        setValue={setPassword}
        type="password"
        placeholder="Write your password"
      />
      <Button
        onClick={() => registration(email, password)}
        title="Registration"
      ></Button>
    </div>
  );
};

export default Registration;
