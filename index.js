"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const empresa_1 = __importDefault(require("./models/empresa"));
const endere__o_1 = __importDefault(require("./models/endere\u00E7o"));
const funcionario_1 = __importDefault(require("./models/funcionario"));
const telefone_1 = __importDefault(require("./models/telefone"));
let endereco1 = new endere__o_1.default(123, 'Av. Paulista', 'Jardim Paulista', 'São Paulo');
let telefone1 = new telefone_1.default('011', '9-9999-9999');
let funcionario1 = new funcionario_1.default('Tony Stark', '123456789', '999.999.999-99', endereco1, telefone1);
let endereco2 = new endere__o_1.default(456, 'Rua Augusta', 'Consolação', 'São Paulo');
let telefone2 = new telefone_1.default('011', '9-8888-8888');
let funcionario2 = new funcionario_1.default('Pepper Potts', '987654321', '888.888.888-88', endereco2, telefone2);
let endereco3 = new endere__o_1.default(789, 'Av. Ibirapuera', 'Moema', 'São Paulo');
let telefone3 = new telefone_1.default('011', '9-7777-7777');
let funcionario3 = new funcionario_1.default('Peter Parker', '456789123', '777.777.777-77', endereco3, telefone3);
let funcionarios = [funcionario1, funcionario2, funcionario3];
let telefones = [telefone1, telefone2, telefone3];
let empresa = new empresa_1.default('ABC LTDA', 'Mercado online', '999-999-999-99', endereco1, funcionarios);
empresa.exibir();
//# sourceMappingURL=index.js.map