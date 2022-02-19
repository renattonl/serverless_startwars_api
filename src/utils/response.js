
const response = (data = {}, statusCode = 200) => {
  if(!data || typeof data !== "object"){
    data = {};
  }
  if(statusCode === 500){
    data.message = `Hubo un problema en el servidor.`
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