import pg from 'pg';
const {Client} = pg;

const config = {
    user: 'db_limawave_user',
    host: 'dpg-cue8orhopnds738e8q10-a.oregon-postgres.render.com',
    database: 'db_limawave',
    password: 'qm9ljO7jayeBOSRIGG8FAkU9Kv2z64hN',
    port: 5432,
    ssl: {
        rejectUnauthorized: false,
    }
}
export async function conectar(params) {

    const client = new Client(config);
    try{
        await client.connect();
        console.log("Conexión exitosa");
    }catch(error){
        console.log("Error en la conexión");
    }
}

export async function consultarproductos(params) {
    const cliente = new Client(config);
    try {
        await cliente.connect();
        const resultado = await cliente.query('SELECT * FROM productos');
        return resultado.rows;
    } catch (error) {
        console.log("Error en la consulta");
    }
}