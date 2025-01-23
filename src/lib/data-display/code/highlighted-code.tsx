import React, { useEffect, useMemo, useRef } from "react";
import hljs from "highlight.js/lib/core";
import handlebars from "highlight.js/lib/languages/handlebars";
import { htmlToText } from "html-to-text"; // const { htmlToText } = require('html-to-text');
// const { htmlToText } = require('html-to-text');

// Registra los lenguajes que vayas a usar
hljs.registerLanguage("handlebars", handlebars);

interface Props {
  code: string;
}

const HighlightedCode = ({ code }: Props) => {
  const language = "handlebars";
  const codeRef = useRef<HTMLElement>(null);

  const memoCode = useMemo(() => {
    const cleanCode = htmlToText(code, {
      // Opciones de configuración
      wordwrap: false, // Evita el ajuste de líneas
      selectors: [
        // {
        //   selector: "p",
        //   format: "block", // Convierte <p> en bloques separados con saltos de línea
        // },
        {
          selector: "br",
          format: "skip", // Omite las etiquetas <br>
        },
      ],
    });
    // Por cada \n. Divide la cantidad de \n a la mitad
    return cleanCode;
  }, [code]);

  useEffect(() => {
    if (codeRef.current) {
      // Eliminar primero la marca de resaltado previa
      codeRef.current.removeAttribute("data-highlighted");

      // Resaltar el elemento específico
      hljs.highlightElement(codeRef.current);
    }
  }, [code, memoCode]);

  return (
    <pre>
      <code
        className={`language-${language}`}
        ref={codeRef}
        style={{
          whiteSpace: "pre-wrap",
          wordWrap: "break-word",
          fontSize: "0.69rem",
          marginTop: "4.5rem",
          paddingTop: "0.5rem",
          border: "1px solid #ccc",
        }}
      >
        {memoCode}
      </code>
    </pre>
  );
};

export default HighlightedCode;
