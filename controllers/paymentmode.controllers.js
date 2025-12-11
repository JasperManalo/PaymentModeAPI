const Paymentmode = require('../models/paymentmode.models');
const client = require('../config/db');

const getPaymentMode = async (req, res) => {
    try {

        const paymentmode = new Paymentmode(
            req.query.paymentmodeid || "All",
            req.query.paymentmodename || null,
            req.query.isactive || null
        );
        const result = await client`
            SELECT * FROM get_paymentmode(${paymentmode.paymentmodeid}, 
            ${paymentmode.paymentmodename}, 
            ${paymentmode.isactive}
            );
        `;

        res.status(200).json(result);
    }
    catch (error) {
        console.error('Error fetching payment modes:', error);
        res.status(500).json({ 
            error: 'Internal Server Error',
            details: error.message
        });
    }
}

const postPaymentMode = async (req, res) => {
    
    await client `BEGIN`;

    try {

        const paymentmode = new Paymentmode(
            NULL,
            req.body.paymentmodename,
            req.body.isactive || true
        );

        Paymentmode.validate(paymentmode);

        const result = await client`
            SELECT * FROM post_paymentmode(${paymentmode.paymentmodename}, 
            ${paymentmode.isactive}
            ) as id;
        `;

        res.status(201).json({ 
            id: result[0].id, 
            paymentmodename: paymentmode.paymentmodename, 
            status: paymentmode.isactive
        });

    } catch (error) {
        await client `ROLLBACK`;

        console.error('Error creating program:', error);
        
       res.status(500).json({ 
            error: 'Internal server error', 
            details: error.message 
        });
    }
}


const putPaymentMode = async (req, res) => {

    await client `BEGIN`;

    try{
        const paymentmode = new Paymentmode(
            req.params.paymentmodeid,
            req.body.paymentmodename,
            req.body.isactive          
        );
        
        Paymentmode.validate(paymentmode);
        const result = await client`
            SELECT * FROM put_paymentmode(
                ${paymentmode.paymentmodeid},
                ${paymentmode.paymentmodename},
                ${paymentmode.isactive}
            );
            `;

        await client `COMMIT`;

    return res.status(200).json({
      status: "success",
      message: `Payment mode updated successfully.`,
      data: { paymentmodeid: paymentmode.paymentmodeid,
                paymentmodename: paymentmode.paymentmodename,
                isactive: paymentmode.isactive        
            }
    });

    } catch (error) {
        await client `ROLLBACK`;
        console.error('Error updating payment mode:', error);
        res.status(500).json({
            error: 'Internal server error',
            details: error.message
        });
    }
}

module.exports = {
    getPaymentMode,
    postPaymentMode,
    putPaymentMode
};
