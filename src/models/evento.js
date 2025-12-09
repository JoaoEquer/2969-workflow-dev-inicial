/* eslint-disable import/no-unresolved */
/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
/* eslint-disable indent */
import db from '../db/config/db.js';

class Evento {
    constructor({
        id,
        nome,
        descrição,
        data,
        autor_id,
        created_at,
        updated_at,
    }) {
        this.id = null || id;
        this.nome = nome;
        this.descrição = descrição;
        this.data = data;
        this.autor_id = autor_id;
        this.created_at = created_at || new Date().toISOString();
        this.updated_at = updated_at || new Date().toISOString();
    }

    static async pegarEventos() {
        return [{
            id: 1,
            nome: 'lançamento',
            descrição: 'Descrição',
            data: '2023-01-01',
            autor_id: 1,
            created_at: '2023-01-01 07:00:00',
            updated_at: '2023-01-01 07:00:00',
        }];
    }
}

export default Evento;
