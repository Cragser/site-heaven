import { z, ZodType } from 'zod';
// import { PersonAssetType } from '@lib/types/person-asset.type;
import { extendApi } from '@anatine/zod-openapi';
import { PersonAssetType } from '../types/person-asset.type';

export const personAssetSchema: ZodType<Omit<PersonAssetType, 'id'>> = z.object(
  {
    assetId: z.string(),
    personId: z.string(),
  }
);

export const personAssetSchemaExtended = extendApi(personAssetSchema, {
  description: 'TODO: Add description',
  title: ' Asset Schema',
});
