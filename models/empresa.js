"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Empresa {
    razaoSocial;
    nomeFantasia;
    cnpj;
    endereco;
    funcionarios;
    constructor(razaoSocial, nomeFantasia, cnpj, endereco, funcionarios) {
        this.razaoSocial = razaoSocial;
        this.nomeFantasia = nomeFantasia;
        this.cnpj = cnpj;
        this.endereco = endereco;
        this.funcionarios = funcionarios;
    }
    exibir() {
        console.log("Nome:" + this.razaoSocial + "\n" +
            "Matricula:" + this.nomeFantasia + "\n" +
            "CNPJ:" + this.cnpj + "\n" +
            "Rua:" + this.endereco.rua + " Bairro:" + this.endereco.bairro + " Cidade:" + this.endereco.cidade +
            " Numero:" + this.endereco.numero);
        this.funcionarios.forEach(element => {
            console.log("Funcionários:" + "\n" +
                "Nome:" + element.nome + "\n" +
                "Matricula:" + element.matricula + "\n" +
                "CPF:" + element.cpf + "\n" +
                "Rua:" + element.endereco.rua + " Bairro:" + element.endereco.bairro + " Cidade:" + element.endereco.cidade
                + " Numero:" + element.endereco.numero + "\n");
        });
    }
}
exports.default = Empresa;
//# sourceMappingURL=empresa.js.map