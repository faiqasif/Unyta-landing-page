"use client";

import { Toaster } from "react-hot-toast";

export function AppToaster() {
  return (
    <Toaster
      position="top-center"
      containerStyle={{ zIndex: 9999 }}
      toastOptions={{
        className: "!font-sans !text-sm sm:!text-base",
        duration: 4500,
        success: {
          style: {
            background: "#22000C",
            color: "#fff",
            borderRadius: "9999px",
            padding: "12px 20px",
            boxShadow: "0 10px 40px rgba(34, 0, 12, 0.2)",
          },
          iconTheme: {
            primary: "#fff",
            secondary: "#741717",
          },
        },
        error: {
          style: {
            background: "#450a0a",
            color: "#fff",
            borderRadius: "9999px",
            padding: "12px 20px",
          },
        },
      }}
    />
  );
}
