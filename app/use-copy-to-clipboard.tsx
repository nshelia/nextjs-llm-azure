"use client";

import * as React from "react";

export interface UseCopyToClipboardProps {
  timeout?: number;
}

export function useCopyToClipboard({
  timeout = 2000,
}: UseCopyToClipboardProps) {
  const [isCopied, setIsCopied] = React.useState<boolean>(false);

  const copyToClipboard = (value: string) => {
    if (typeof window === "undefined") {
      return;
    }

    if (!value) {
      return;
    }

    void navigator.clipboard.writeText(value).then(() => {
      setIsCopied(true);

      setTimeout(() => {
        setIsCopied(false);
      }, timeout);
    });
  };

  return { isCopied, copyToClipboard };
}
