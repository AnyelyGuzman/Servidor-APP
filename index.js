const net = require('net');
const client = new net.Socket();

client.connect(52275, '127.0.0.1', () => {
	console.log('Connected');
    /*
        data = {
            model: 'users',
            method: 'create',
            cont: {
                nombre: 'anyely',
                apellido: 'Guzman',
                edad: 21
            }
        }

        data = {
            model: 'users',
            method: 'readId',
            cont: { id_usuarios: 1 }
        }
        
        data = {
            model: 'users',
            method: 'update',
            cont: {
                nombre: 'anyely',
                apellido: 'Guzman',
                edad: 21,
                id_usuarios: 1
            }
        }
        
        data = {
            model: 'users',
            method: 'delete',
            cont: { id_usuarios: 1 }
        }
    */

    data = {
        model: 'users',
        method: 'read'
    }
	
    client.write(JSON.stringify(data));
});

client.on('data', data => {
	console.log('Received: ' + data);
});

client.on('close', () => console.log('Connection closed'));