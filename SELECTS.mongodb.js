
const database = 'BD3-NoSQL-AtlasMongoDB'


use(database);

db['bd3-nosql-atv6'].find();



const database = 'BD3-NoSQL-AtlasMongoDB'

use(database);

db['bd3-nosql-atv6'].find({"cpf": "000.000.000-00"}, { cod_aluno: false});