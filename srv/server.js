"use strict";

const cds = require("@sap/cds");
const cors = require('cors');
const proxy = require("@sap/cds-odata-v2-adapter-proxy");
// o CAP anda lado a lado com o express, e quando queremos editar eventos padroes do express, usamos o evento 'on' dentro de um arquivo 'server.js', para editar a integração entre express e cap basicamente.
// 'bootstrap' Antes de iniciar a aplicação e rodar as entidades, midlewares, roda esse script a seguir para basicamente antes de rodar as entidades, rode esses comandos para usar as bibliotecas de cors e proxys.
cds.on("bootstrap", app => {
    app.use(proxy());

    app.use(cors({
        origin: '*', // Allow all origins for development; restrict in production
        methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
        allowedHeaders: ['Content-Type', 'Authorization'],
        credentials: true
    }));
});

module.exports = cds.server;