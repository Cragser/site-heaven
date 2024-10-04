import ReactQuill, { Value } from "react-quill";
import React from "react";

export default function richTextRender(value: unknown) {
  if (value === undefined || value === null) return null;
  return (
    <ReactQuill
      theme="bubble"
      value={value as Value}
      readOnly={true}
      modules={{
        toolbar: false,
        history: false,
      }}
    />
  );
}
