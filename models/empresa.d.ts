import Endereco from "./endereço";
import Funcionario from "./funcionario";
export default class Empresa {
    razaoSocial: string;
    nomeFantasia: string;
    cnpj: string;
    endereco: Endereco;
    funcionarios: Funcionario[];
    constructor(razaoSocial: string, nomeFantasia: string, cnpj: string, endereco: Endereco, funcionarios: Funcionario[]);
    exibir(): void;
}
//# sourceMappingURL=empresa.d.ts.map