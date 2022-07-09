import { useState } from "react";
import Input from "~/atomic-components/input";

export default function TraditionalAuthForm() {
  const [formState, setFormState] = useState({});

  return (
    <div className="flex flex-col space-y-4">
      <Input
        name="username"
        value=""
        changeHandler={() => {}}
        label="Username"
      />

      <Input
        name="password"
        value=""
        changeHandler={() => {}}
        label="Password"
        type="password"
      />
    </div>
  );
}
