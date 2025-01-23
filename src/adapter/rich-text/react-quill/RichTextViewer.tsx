import ReactQuill from "react-quill";
import React from "react";

interface Props {
  note: string;
}

export default function RichTextViewer({ note }: Readonly<Props>) {
  return (
    <ReactQuill
      // className={styles.content}
      theme="bubble"
      modules={{
        toolbar: false,
      }}
      value={note}
      readOnly={true}
    />
  );
}
