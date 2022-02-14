
let programers = [];

let marcos = {
    nome: "Marcos",
    sobrenome: "Bello",
    enderecos: [
        {
            rua: "rio de janeiro",
            num: 162
        },
        {
            rua: "diu",
            num: 772
        }
    ]
}

let dani = {
            nome: "Daniele",
            sobrenome: "Bueno",
            enderecos: [
                {
                    rua: "rio de janeiro",
                    num: 161
                },
                {
                    rua: "diu",
                    num: 771
                }
            ]
        }

programers.push(dani, marcos)

for(let programador of programers) {
        for (let endereco of programador.enderecos) {
            console.log(programador.nome + " " + endereco.rua);
        }


    }


