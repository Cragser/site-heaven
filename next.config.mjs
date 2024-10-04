import MillionLint from "@million/lint";
/** @type {import('next').NextConfig} */
const nextConfig = {};

// export default MillionLint.next({
//   rsc: true
// })(nextConfig);

// Solo aplica MillionLint si estás en modo desarrollo
const withMillionLint =
  process.env.NODE_ENV === "development"
    ? MillionLint.next({ rsc: true })(nextConfig)
    : nextConfig;

export default withMillionLint;
