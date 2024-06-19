import React from "react";
import {
  SnackbarProvider,
  SnackbarTimer,
  useSnackbar,
  Button,
} from "@ginger-society/ginger-ui";

const ExampleComponent = () => {
  const { show } = useSnackbar();

  const handleShowSnackbar = (message, duration, cancellable) => {
    show(<div>{message}</div>, duration, cancellable);
  };

  return (
    <div>
      <Button
        onClick={() =>
          handleShowSnackbar("Short message", SnackbarTimer.Short, false)
        }
        label="Show short Snackbar"
      />
      <Button
        onClick={() =>
          handleShowSnackbar(
            " A Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi cum sint eius voluptas itaque obcaecati, totam ratione earum ullam eligendi officiis ipsum possimus sit quas accusantium ",
            SnackbarTimer.Long,
            true
          )
        }
        label="Show long staying cancellable Snackbar"
      />
    </div>
  );
};

const ExampleApp = () => {
  return (
    <SnackbarProvider>
      <ExampleComponent />
    </SnackbarProvider>
  );
};

export default ExampleApp;
