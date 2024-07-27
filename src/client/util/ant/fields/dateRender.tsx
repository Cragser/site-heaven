import { DateField } from '@refinedev/antd';

export const dateRender = (value: unknown) => {
	console.log(value)
	if (!value) return null;
	return <DateField value={value} format={'ll'} />;
};
