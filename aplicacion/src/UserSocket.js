// import { client } from './local_socket';

// export default class UserSocket {
//     create(data) {
//         const dataSend = {
//             model: 'users',
//             method: 'create',
//             cont: data //{
//                 //nombre: 'anyely',
//                 //apellido: 'Guzman',
//                 //edad: 21
//             //}
//         }

//         client.write(JSON.stringify(dataSend));
//     }

//     read(callback) {
//         const dataSend = {
//             model: 'users',
//             method: 'read'
//         };

//         client.write(JSON.stringify(dataSend));
//         client.on('data', data => callback(data));
//     }
// }
//     /*

//         data = {
//             model: 'users',
//             method: 'readId',
//             cont: { id_usuarios: 1 }
//         }
        
//         data = {
//             model: 'users',
//             method: 'update',
//             cont: {
//                 nombre: 'anyely',
//                 apellido: 'Guzman',
//                 edad: 21,
//                 id_usuarios: 1
//             }
//         }
        
//         data = {
//             model: 'users',
//             method: 'delete',
//             cont: { id_usuarios: 1 }
//         }
//     */