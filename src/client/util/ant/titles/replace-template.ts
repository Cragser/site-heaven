export function replaceTemplate(
  template: string,
  context: Record<string, unknown>
): string {
  return template.replace(/\[(.*?)\]/g, (_, fieldPath) => {
    return replaceField(fieldPath, context);
  });
}

function replaceField(
  fieldPath: string,
  context: Record<string, unknown>
): string {
  const formattedFields = fieldPath.match(/(?:[^\s()]+(?:\(\))?)/g) || [];
  const results = formattedFields.map((field) =>
    getFieldFromContext(field.trim(), context)
  );

  // Formatear la salida final según si hay paréntesis o no
  const lastElementIndex = formattedFields.findIndex((f) => f.includes('('));
  if (lastElementIndex !== -1) {
    return `${results.slice(0, lastElementIndex).join(' ')} (${
      results[lastElementIndex]
    })`;
  } else {
    return results.join(' ');
  }
}

function getFieldFromContext(
  field: string,
  context: Record<string, unknown>
): string {
  field = field.replace(/[()]/g, '');
  const [objectKey, property] = field.split('.');
  if (
    objectKey &&
    property &&
    objectKey in context &&
    context[objectKey] &&
    context[objectKey][property] !== undefined
  ) {
    return context[objectKey][property];
  }
  return `[${field}]`;
}
