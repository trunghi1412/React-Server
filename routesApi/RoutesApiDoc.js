    
    
    /**
     * @api {GET} /api/getproduct  Get ALL product
     * @apiVersion 1.0.0
     * @apiName get ALL Product
     * @apiGroup Product
     * @apiPermission Every one
     *
     * @apiDescription Get ALL product
     * 
     *
     * @apiExample Example usage:
     * curl -i http://localhost:2000/api/getproduct
     *
     * 
     *
     * @apiError Not found product
     * 
     * @apiErrorExample Error-Response:
     *    HTTP/1.1 404 Not Found
     *    {
     *      "message": "No such Product Found!!"
     *    }
     * 
     * @apiError invalid input data
     *
     * @apiErrorExample Error-Response:
     *     HTTP/1.1 400 Bad Request
     *     {
     *       "result": "fail",
     *       "message": "",
     *     }
     * 
     * @apiSampleRequest http://localhost:2000/api/getproduct
     */
    app.get("/api/getproduct");




    /**
     * @api {POST} /api/addproduct Add one Product
     * @apiVersion 1.0.0
     * @apiName add Product
     * @apiGroup Product
     * @apiPermission just moderator user
     *
     * @apiDescription add product
     *
     * @apiBody {String} name name of name
     * @apiBody {String} image image of image
     * @apiBody {Number} price price of price
     * @apiBody {Number} quantity quantity of quantity
     *
   
     * @apiSuccess {Object} createdProduct information of product
     *
     * @apiError invalid input data
     *
     * @apiErrorExample Error-Response:
     *     HTTP/1.1 400 Bad Request
     *     {
     *       "result":"fail",
     *       "message": "invalid input"
     *     }
     * 
     * @apiSampleRequest http://localhost:2000/api/addproduct
     */
    app.post("/api/addproduct");




    /**
     * @api {POST} /api/register  Register User
     * @apiVersion 1.0.0
     * @apiName Register User
     * @apiGroup User
     * @apiPermission Every one
     *
     * @apiDescription Register User
     * 
     * @apiBody {String} name name of name
     * @apiBody {String} email email of email
     * @apiBody {String} password password of password
     *
     *
     *
     *
     * 
     * @apiErrorExample Error-Response:
     *    HTTP/1.1 404 Not Found
     *    {
     *      "message": "Can't Create user!!"
     *    }
     * 
     * @apiError invalid input data
     *
     * @apiErrorExample Error-Response:
     *     HTTP/1.1 400 Bad Request
     *     {
     *       "result": "fail",
     *       "message": "",
     *     }
     * 
     * 
     * 
     * @apiSampleRequest http://localhost:2000/api/register
     */
        app.post("/api/register");



    /**
     * @api {POST} /api/loginr  Login User
     * @apiVersion 1.0.0
     * @apiName Login User
     * @apiGroup User
     * @apiPermission Every one
     *
     *
     *
     * @apiDescription Login User
     * 
     * @apiBody {String} name name of name
     * @apiBody {String} password password of password
     *
     *
     * 
     * @apiErrorExample Error-Response:
     *    HTTP/1.1 404 Not Found
     *    {
     *      "message": "Login Failed !"
     *    }
     * 
     * 
     * @apiError invalid input data
     *
     * @apiErrorExample Error-Response:
     *     HTTP/1.1 400 Bad Request
     *     {
     *       "result": "fail",
     *       "message": "",
     *     }
     * 
     * @apiSampleRequest http://localhost:2000/api/login
     */
    app.post("/api/login");