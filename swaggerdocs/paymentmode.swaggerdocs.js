/**
 * @swagger
 * tags:
 *   name: PaymentMode
 *   description: Payment Mode management API
 */

/**
 * @swagger
 * /paymentmodes:
 *   get:
 *     summary: Retrieve payment modes
 *     description: Retrieve payment modes filtered by ID, name, or active status. Use 'All' as paymentmodeid to fetch all.
 *     tags: [PaymentMode]
 *     parameters:
 *       - in: query
 *         name: paymentmodeid
 *         schema:
 *           type: string
 *         required: false
 *         description: Payment mode ID or 'All' to fetch all
 *       - in: query
 *         name: paymentmodename
 *         schema:
 *           type: string
 *         required: false
 *         description: Filter by payment mode name
 *       - in: query
 *         name: isactive
 *         schema:
 *           type: boolean
 *         required: false
 *         description: Filter by active status
 *     responses:
 *       200:
 *         description: List of payment modes
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   v_paymentmodeid:
 *                     type: integer
 *                     example: 1
 *                   v_paymentmodename:
 *                     type: string
 *                     example: "GCash"
 *                   v_isactive:
 *                     type: boolean
 *                     example: true
 *                   v_createdat:
 *                     type: string
 *                     format: date-time
 *                     example: "2025-12-06T08:00:00Z"
 *                   v_modifiedat:
 *                     type: string
 *                     format: date-time
 *                     example: "2025-12-06T10:00:00Z"
 *       500:
 *         description: Internal Server Error
 */

/**
 * @swagger
 * /paymentmodes:
 *   post:
 *     summary: Create a new payment mode
 *     description: Add a new payment mode with a name and active status.
 *     tags: [PaymentMode]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - paymentmodename
 *             properties:
 *               paymentmodename:
 *                 type: string
 *                 example: "GCash"
 *               isactive:
 *                 type: boolean
 *                 example: true
 *     responses:
 *       201:
 *         description: Payment mode created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   example: 1
 *                 paymentmodename:
 *                   type: string
 *                   example: "GCash"
 *                 status:
 *                   type: boolean
 *                   example: true
 *       400:
 *         description: Bad request - invalid or missing parameters
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /paymentmodes/{paymentmodeid}:
 *   put:
 *     summary: Update a payment mode
 *     description: Update the name or active status of a payment mode by ID.
 *     tags: [PaymentMode]
 *     parameters:
 *       - in: path
 *         name: paymentmodeid
 *         schema:
 *           type: string
 *         required: true
 *         description: ID of the payment mode to update
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - paymentmodename
 *               - isactive
 *             properties:
 *               paymentmodename:
 *                 type: string
 *                 example: "GCash"
 *               isactive:
 *                 type: boolean
 *                 example: true
 *     responses:
 *       200:
 *         description: Payment mode updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: "success"
 *                 message:
 *                   type: string
 *                   example: "Payment mode updated successfully."
 *                 data:
 *                   type: object
 *                   properties:
 *                     paymentmodeid:
 *                       type: string
 *                       example: "1"
 *                     paymentmodename:
 *                       type: string
 *                       example: "GCash"
 *                     isactive:
 *                       type: boolean
 *                       example: true
 *       400:
 *         description: Bad request - invalid or missing parameters
 *       404:
 *         description: Payment mode not found
 *       500:
 *         description: Internal server error
 */
