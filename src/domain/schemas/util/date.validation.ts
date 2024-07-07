import { DateRegex } from '../../regex/date.regex';
import { z } from 'zod';

export const dateValidation = z.string().regex(DateRegex, 'Fecha no válida');
