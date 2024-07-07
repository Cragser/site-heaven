import { z } from 'zod';

/**
 * If you have doubts about the CURP format, you can check the official documentation here:
 * https://support.sas.com/documentation/onlinedoc/qkb/27/QKBCI27/Help/Content/QKBCI_ESMEX/QKBCI_ESMEX_ID_CURP-Validation.html
 */

const validStateCodes = [
  'AS',
  'BC',
  'BS',
  'CC',
  'CS',
  'CH',
  'CL',
  'CM',
  'DF',
  'DG',
  'GT',
  'GR',
  'HG',
  'JC',
  'MC',
  'MN',
  'MS',
  'NT',
  'NL',
  'OC',
  'PL',
  'QT',
  'QR',
  'SP',
  'SL',
  'SR',
  'TC',
  'TS',
  'TL',
  'VZ',
  'YN',
  'ZS',
  'NE',
];

export const curpSchema = z
  .string()
  .length(18, 'El CURP debe tener exactamente 18 caracteres')
  .refine((curp) => /^[A-Z]{4}/i.test(curp), {
    message: 'Los primeros cuatro caracteres deben ser alfabéticos',
  })
  .refine((curp) => /^[A-Z]{4}\d{6}[HM]/i.test(curp), {
    message: 'Género inválido. Carácter 11 debe ser H o M. ',
  })
  .refine(
    (curp) => {
      const datePart = curp.substring(4, 10);
      const year = parseInt(datePart.substring(0, 2), 10) + 1900;
      const month = parseInt(datePart.substring(2, 4), 10) - 1;
      const day = parseInt(datePart.substring(4, 6), 10);
      const date = new Date(year, month, day);
      return (
        date.getFullYear() === year &&
        date.getMonth() === month &&
        date.getDate() === day
      );
    },
    {
      message:
        'Fecha inválida. Del caracter 5 al 10 debes usar este formato de fecha YYMMDD',
    }
  )
  .refine(
    (curp) => {
      // Verificación de código de estado
      const stateCode = curp.substring(11, 13).toUpperCase();
      console.log(stateCode);
      return validStateCodes.includes(stateCode);
    },
    {
      message:
        'Código de estado inválido. El caracter 12 y 13 deben ser un código de estado válido',
    }
  )
  .refine(
    (curp) => {
      const letters = curp.substring(14, 16).toUpperCase();
      console.log(letters);
      return /^[A-Z]{2}/i.test(letters);
    },
    {
      message: 'Los caracteres 14 al 16 deben ser alfabéticos',
    }
  )
  .refine((curp) => /^[0-9A-Z]{1}/i.test(curp.substring(16, 17)), {
    message: 'El caracter 17 debe ser alfanumérico',
  })
  .refine((curp) => /^\d{1}/.test(curp.substring(17, 18)), {
    message: 'El caracter 18 debe ser numérico',
  });
