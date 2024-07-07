'use client';

import dataProviderSimpleRest from '@refinedev/simple-rest';


const isDev = process.env.NODE_ENV === 'development';

const API_URL = isDev ? 'http://localhost:3003/api': "https://api-heaven-production.up.railway.app/";

export const dataProvider = dataProviderSimpleRest(API_URL);
