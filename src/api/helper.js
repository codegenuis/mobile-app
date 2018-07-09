const stringify = (data) => {
  let value = JSON.stringify(data);
  value = value.replace(/\"([^(\")"]+)\":/g, '$1:');
  return value;
};
export default stringify;
