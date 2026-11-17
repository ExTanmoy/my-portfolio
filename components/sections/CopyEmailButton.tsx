"use client";

import React, { useState } from "react";
import { Copy, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CopyEmailButtonProps {
  email: string;
}

export function CopyEmailButton({ email }: CopyEmailButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  return (
    <Button
      type="button"
      variant="outline"
      size="sm"
      onClick={handleCopy}
      className="gap-1.5 border-border/80 text-xs hover:border-primary/50 hover:bg-muted/70 hover:text-foreground"
      aria-label={copied ? "Email address copied to clipboard" : "Copy email address to clipboard"}
    >
      {copied ? (
        <>
          <Check className="size-3.5 text-primary" aria-hidden="true" />
          <span className="font-medium text-primary">Copied!</span>
        </>
      ) : (
        <>
          <Copy className="size-3.5 text-muted-foreground" aria-hidden="true" />
          <span>Copy Email</span>
        </>
      )}
    </Button>
  );
}

export default CopyEmailButton;
