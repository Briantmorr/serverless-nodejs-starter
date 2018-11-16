const Users = require('../Models/UserDummyData.js');

export const getUsers = async (event, context, callback) => {
    console.log(Users);
    const response = {
        statusCode: 200,
        body: JSON.stringify({
            message: Users.users,
        }),
    };
    
    callback(null, response);
};

export const getUser = async (event, context, callback) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify({
        message: Users.users.filter(x => {
            console.log('xid', x.id);
            console.log(event.pathParameters.id);
            return x.id == event.pathParameters.id}),
    }),
    };
  callback(null, response);
};

// const message = () => new Promise((resolve, reject) => 
//   {
//     resolve(Users);
//   }
// )

export const createUser = async (event, context, callback) => {
    // console.log(Users);
  const response = {
    statusCode: 200,
    body: JSON.stringify({
       message: 'creating',
    }),
  };


  callback(null, response);
};

export const updateUser = async (event, context, callback) => {
    // console.log(Users);
  const response = {
    statusCode: 200,
    body: JSON.stringify({
       message: 'update',
    }),
  };


  callback(null, response);
};

export const deleteUser = async (event, context, callback) => {
    console.log(event);
  const response = {
    statusCode: 200,
    body: JSON.stringify({
       message: 'delete',
    }),
  };


  callback(null, response);
};
