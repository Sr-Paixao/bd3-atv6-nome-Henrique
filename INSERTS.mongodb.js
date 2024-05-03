
const database = 'BD3-NoSQL-AtlasMongoDB'


use(database);

db['bd3-nosql-atv6'].insertOne(
    {
        "cod_aluno": "12345",
        "nome": "João Silva",
        "cpf": "000.000.000-00",
        "rg": "MG-11.222.333",
        "telefone_aluno": "(31) 98765-4321",
        "telefone_responsavel": "(31) 12345-6789",
        "email": "joaosilva@example.com",
        "data_nascimento": "2005-03-15"
    }
);

db['bd3-nosql-atv6'].insertMany(
    [
        {
            "cod_aluno": "12355",
            "nome": "Patricia Lima",
            "cpf": "100.200.300-40",
            "rg": "MS-10.220.330",
            "telefone_aluno": "(67) 99276-5432",
            "telefone_responsavel": "(67) 98765-4321",
            "email": "patricialima@example.com",
            "data_nascimento": "2003-02-17"
        },
        {
            "cod_aluno": "12356",
            "nome": "Ricardo Nunes",
            "cpf": "200.300.400-50",
            "rg": "MT-80.990.100",
            "telefone_aluno": "(65) 97654-3211",
            "telefone_responsavel": "(65) 12345-6790",
            "email": "ricardonunes@example.com",
            "data_nascimento": "2006-12-01"
        },
        {
            "cod_aluno": "12357",
            "nome": "Isabela Moura",
            "cpf": "300.400.500-60",
            "rg": "GO-11.223.344",
            "telefone_aluno": "(62) 95432-1009",
            "telefone_responsavel": "(62) 32109-8756",
            "email": "isabelamoura@example.com",
            "data_nascimento": "2004-06-16"
        },
        {
            "cod_aluno": "12358",
            "nome": "Pedro Alcântara",
            "cpf": "400.500.600-70",
            "rg": "DF-44.556.667",
            "telefone_aluno": "(61) 93210-9877",
            "telefone_responsavel": "(61) 67890-1235",
            "email": "pedroalcantara@example.com",
            "data_nascimento": "2001-10-10"
        },
        {
            "cod_aluno": "12359",
            "nome": "Camila Porto",
            "cpf": "500.600.700-80",
            "rg": "AC-77.889.990",
            "telefone_aluno": "(68) 91011-1214",
            "telefone_responsavel": "(68) 56789-0124",
            "email": "camilaporto@example.com",
            "data_nascimento": "2008-03-27"
        },
        {
            "cod_aluno": "12360",
            "nome": "Felipe Castro",
            "cpf": "600.700.800-90",
            "rg": "AM-22.334.455",
            "telefone_aluno": "(92) 88990-0124",
            "telefone_responsavel": "(92) 33445-5679",
            "email": "felipecastro@example.com",
            "data_nascimento": "2002-05-05"
        },
        {
            "cod_aluno": "12361",
            "nome": "Teresa Santos",
            "cpf": "700.800.900-00",
            "rg": "TO-66.778.889",
            "telefone_aluno": "(63) 86879-0235",
            "telefone_responsavel": "(63) 54677-8902",
            "email": "teresasantos@example.com",
            "data_nascimento": "2006-11-12"
        },
        {
            "cod_aluno": "12362",
            "nome": "Leonardo Rocha",
            "cpf": "800.900.000-11",
            "rg": "PA-55.667.778",
            "telefone_aluno": "(91) 84756-0294",
            "telefone_responsavel": "(91) 76890-4322",
            "email": "leonardorocha@example.com",
            "data_nascimento": "2000-01-25"
        },
        {
            "cod_aluno": "12363",
            "nome": "Bianca Freitas",
            "cpf": "900.000.111-22",
            "rg": "RR-33.445.556",
            "telefone_aluno": "(95) 82635-0413",
            "telefone_responsavel": "(95) 98012-3457",
            "email": "biancafreitas@example.com",
            "data_nascimento": "2005-08-19"
        }
        
    ]
)