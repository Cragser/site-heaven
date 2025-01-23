import Handlebars, { HelperOptions } from "handlebars";

export function listItems(this: any, context: unknown, options: HelperOptions) {
  console.log("\n\n\n");
  console.log("list content", {
    context,
    options,
  });
  if (!Array.isArray(context)) {
    console.error("El contexto proporcionado no es un arreglo");
    return "";
  }

  const result: string[] = context.map((item) => {
    // Procesa cada elemento y devuelve como string seguro
    const content = options.fn(item).trim();
    console.log("Processed Content for item:", content);
    return `<li>${content}</li>`;
  });

  // Une todos los elementos del array con un `<ul>` y devuélvelo como string seguro
  return new Handlebars.SafeString(`<ul>${result.join("")}</ul>`);
}
