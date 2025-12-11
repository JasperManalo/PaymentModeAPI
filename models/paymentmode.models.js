class Paymentmode {
    constructor(paymentmodeid, paymentmodename, isactive = true) {
        this.paymentmodeid = paymentmodeid;
        this.paymentmodename = paymentmodename;
        this.isactive = isactive;
    }

    static validate(Paymentmode) {
        if (!Paymentmode.paymentmodeid || !Paymentmode.paymentmodename) { 
                throw new Error('paymentmodeid and paymentmodename are required');
        }
    }

}
module.exports = Paymentmode;
