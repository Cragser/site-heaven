import React, { useEffect } from "react";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-handlebars";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/ext-language_tools";
import ace, { Ace } from "ace-builds";
import { customHandlebarsSuggestions } from "@/adapter/ace-editor/suggestions/custom";
import { dataSuggestions } from "@/adapter/ace-editor/suggestions/data-suggestions";

interface AceCodeEditorProps {
  value?: string;
  onChange?: (value: string) => void;
}

const AceCodeEditor: React.FC<AceCodeEditorProps> = ({ value, onChange }) => {
  useEffect(() => {
    const languageTools = (ace as any).require("ace/ext/language_tools");
    const completer = {
      getCompletions: (
        editor: Ace.Editor,
        session: Ace.EditSession,
        pos: Ace.Position,
        prefix: string,
        callback: (error: null, completions: Ace.Completion[]) => void,
      ) => {
        try {
          const customSuggestions = [
            ...customHandlebarsSuggestions,
            ...dataSuggestions,
          ];
          // @ts-ignore
          callback(null, customSuggestions);
        } catch (error) {
          console.error("Error in autocomplete:", error);
          callback(null, []);
        }
      },
    };

    languageTools.setCompleters([completer]);

    return () => {
      languageTools.setCompleters([]);
    };
  }, []);

  return (
    <AceEditor
      mode="handlebars"
      theme="monokai"
      name="code-editor"
      value={value}
      onChange={onChange}
      width="100%"
      fontSize={14}
      showPrintMargin={false}
      enableBasicAutocompletion={true}
      enableLiveAutocompletion={true}
      enableSnippets={true}
      editorProps={{ $blockScrolling: true }}
      setOptions={{
        useWorker: false,
        tabSize: 2,
        wrap: true,
      }}
    />
  );
};

export default AceCodeEditor;
