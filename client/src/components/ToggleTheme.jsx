import React, { useContext } from "react";
import talentTrailContext from "./Context/context";
import { Sun, Moon } from "lucide-react";
import { Switch } from "@nextui-org/react";

function ToggleTheme() {
  const { defaultTheme, setTheme } = useContext(talentTrailContext);

  return (
    <Switch
      onClick={() => setTheme((preValue) => !preValue)}
      defaultSelected
      size="lg"
      color="success"
      startContent={<Sun />}
      endContent={<Moon />}
    >
    </Switch>
  );
}

export default ToggleTheme;
