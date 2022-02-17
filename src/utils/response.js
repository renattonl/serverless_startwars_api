
const response = (data = {}, statusCode = 200) => {
  if(!data || typeof data !== "object"){
    data = {};
  }
  return {
    statusCode,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data, null, 2),
  };
}

module.exports = response