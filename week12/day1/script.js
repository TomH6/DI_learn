const axios = require('axios');

const getUsers = async () => {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        return response.data;
      } catch (error) {
        throw new error;
      }
}

module.exports = {
    getUsers
}