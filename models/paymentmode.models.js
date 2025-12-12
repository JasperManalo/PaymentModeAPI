class Paymentmode {
    constructor(paymentmodeid, paymentmodename, isactive = true) {
        this.paymentmodeid = paymentmodeid;
        this.paymentmodename = paymentmodename;
        this.isactive = isactive;
    }

    static validateCreate(paymentmode) {
        if (!paymentmode.paymentmodename || typeof paymentmode.paymentmodename !== 'string') {
            throw new Error('paymentmodename is required and must be a string');
        }
    }

    static validateUpdate(paymentmode) {
        if (!paymentmode.paymentmodeid) {
            throw new Error('paymentmodeid is required');
        }
        if (!paymentmode.paymentmodename || typeof paymentmode.paymentmodename !== 'string') {
            throw new Error('paymentmodename is required and must be a string');
        }
    }
}

module.exports = Paymentmode;
