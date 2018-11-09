// import mongoose from 'mongoose';
// import connection from '../utils/connect';
// import Task  from '../models/Task'
import { getAllPapers } from './Resources'; 
//, createNewTask, getOneTask, updateTaskById, removeTask } from './Resources'
// module.exports.listPapers = async (event, context, callback) => {
// //   await connection(context);
//   let params = {
//     paper_id: event.queryStringParameters.paper_id
//   }
//   let allTasks = [];
//   try {
//     allTasks = await getAllPapers(Paper, params);
//   } catch (error) {
//     await mongoose.connection.close();
//     callback({
//       statusCode: 500,
//       body: JSON.stringify({
//         error: `There was an error fetching your tasks.`
//       })
//     });
//   }
//   await mongoose.connection.close();
//   callback(null, {
//     statusCode: 200,
//     headers: {
//       'Access-Control-Allow-Origin': '*',
//       'Access-Control-Allow-Credentials': true,
//     },
//     body: JSON.stringify({
//      tasks: allTasks
//     })
//   });
// };
// module.exports.createTask = async (event, context, callback) => {
//   await connection(context);
//   const task = JSON.parse(event.body);
//   if (!task) {
//     return callback({
//       statusCode: 500,
//       headers: {
//         'Access-Control-Allow-Origin': '*',
//         'Access-Control-Allow-Credentials': true,
//       },
//       body: JSON.stringify({
//         error: 'The property "task" is required.'
//       })
//     });
//   }
//   try {
//     await createNewTask(Task, task);
//   } catch (error) {
//     callback({
//       statusCode: 500,
//       headers: {
//         'Access-Control-Allow-Origin': '*',
//         'Access-Control-Allow-Credentials': true,
//       },
//       body: JSON.stringify({
//         error: `There was an error creating your task. ${error}`
//       })
//     });
//   }
//   await mongoose.connection.close();
//   callback(null, {
//     statusCode: 201,
//     headers: {
//       'Access-Control-Allow-Origin': '*',
//       'Access-Control-Allow-Credentials': true,
//     },
//     body: JSON.stringify({
//       message: "success"
//     })
//   });
// };
// module.exports.getTask = async (event, context, callback) => {
//   await connection(context);
//   const task_id = event.pathParameters.id;
//   let task = {};
//   try {
//     task = await getOneTask(Task, task_id);
//   } catch (error) {
//     await mongoose.connection.close()
//     callback({
//       statusCode: 500,
//       body: JSON.stringify({
//         error: `There was an error getting your task with id ${task_id}. \n ${error}`
//       })
//     });
//   }
//   await mongoose.connection.close();
//   callback(null, {
//     statusCode: 200,
//     headers: {
//       'Access-Control-Allow-Origin': '*',
//       'Access-Control-Allow-Credentials': true,
//     },
//     body: JSON.stringify({
//       task
//     })
//   });
// };
// module.exports.updateTask = async (event, context, callback) => {
//   await connection(context);
//   const task_id = event.pathParameters.id;
//   const update = JSON.parse(event.body);
//   if (!update) {
//     return callback({
//       statusCode: 500,
//       body: JSON.stringify({
//         error: 'The property "task" is required.'
//       })
//     });
//   }
//   try {
//     await updateTaskById(Task, task_id, update);
//   } catch (error) {
//     await mongoose.connection.close()
//     callback({
//       statusCode: 500,
//       body: JSON.stringify({
//         error: `There was an error updating your task with id ${task_id}. \n ${error}`
//       })
//     });
//   }
//   await mongoose.connection.close();
//   callback(null, {
//     statusCode: 201,
//     headers: {
//       'Access-Control-Allow-Origin': '*',
//       'Access-Control-Allow-Credentials': true,
//     },
//     body: JSON.stringify({
//       message: "success"
//     })
//   });
// };
// module.exports.deleteTask = async (event, context, callback) => {
//   await connection(context);
//   console.log(event)
//   const task_id = event.pathParameters.id;
//   try {
//     await removeTask(Task, task_id);
//   } catch (error) {
//     await mongoose.connection.close()
//     callback({
//       statusCode: 500,
//       body: JSON.stringify({
//         error: `There was an error deleting your task with id ${task_id}. \n ${error}`
//       })
//     });
//   }
//   await mongoose.connection.close();
//   callback(null, {
//     statusCode: 204,
//     headers: {
//       'Access-Control-Allow-Origin': '*',
//       'Access-Control-Allow-Credentials': true,
//     },
//     body: JSON.stringify({
//       message : "success"
//     })
//   });
// };
// module.exports.archiveTask = (event, context, callback) => {
//   const task_id = event.pathParameters.id;
//   db.task
//     .destroy({ where: { id: task_id } })
//     .then(num_deleted => {
//       return callback(null, {
//         statusCode: 200,
//         body: JSON.stringify({
//           num_deleted: task
//         })
//       });
//     })
//     .catch(error => {
//       callback(null, {
//         statusCode: 500,
//         body: JSON.stringify({
//           error: `There was an error fetching your task with id: ${task_id}.`
//         })
//       });
//     });
// };
