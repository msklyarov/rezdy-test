export default (name: string) => ({
  name,
  PENDING: `${name}_PENDING`,
  FULFILLED: `${name}_FULFILLED`,
  REJECTED: `${name}_REJECTED`,
  triplet: [`${name}_PENDING`, `${name}_FULFILLED`, `${name}_REJECTED`],
});
