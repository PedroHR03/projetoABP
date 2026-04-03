"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.get('/api/profissionais', (req, res) => {
    res.json([
        { id: 1, nome: 'Ana Souza', especialidade: 'Manicure' },
        { id: 2, nome: 'Carlos Silva', especialidade: 'Cabeleireiro' }
    ]);
});
app.listen(3000, () => console.log("Backend rodando na porta 3000"));
