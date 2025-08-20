const users = []; // simula um "db", futuramente um Mysql aqui
// Simulando um salvamento em DB
export const saveUser = (user) => {
  return new Promise((resolve) => {
    console.log(`saving in database`);
    setTimeout(() => {
      users.push(user);
      resolve(user);
    }, 1000);
  });
};
// Simulando uma busca em DB
export const getUsers = () => {
  return new Promise((resolve) => {
    console.log(`searching the database`);
    setTimeout(() => {
      resolve(users);
    }, 1000);
  });
};
