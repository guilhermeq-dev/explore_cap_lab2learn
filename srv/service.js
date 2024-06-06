const cds = require('@sap/cds');

module.exports = async (srv) => {

    const sOrd = await cds.connect.to('API_SALES_ORDER_SRV')
    
    srv.on('READ', 'A_SalesOrder', (req) => {

        const data = sOrd.transaction(req).send({
            query: req.query,
            headers: {
                apikey: 'dC46AGyXp5e3lqdgHGr5HiIteDdMJ0UC'
            }
        })

       return data;
        
    });
}