import express from 'express'
import {
    add_new_customer,
    get_all_customers,
    update_customer,
    delete_customer,
} from '../controllers/customer.controllers.js'

const router = express.Router()
const use = (fn) => (req, res, next) => Promise.resolve(fn(req, res, next)).catch(next)

// POST STATIC
// ROUTE --ADD NEW CUSTOMER         --CREATE
router.post('/addCustomer', use(add_new_customer))

// GET STATIC
// ROUTE --GET ALL CUSTOMERS        --READ
router.get('/getAllCustomers', use(get_all_customers))

// PUT DYNAMIC
// ROUTE --UPDATE CUSTOMER BY ID    --UPDATE
router.put('/updateCustomer/:id', use(update_customer))

// DELETE DYNAMIC
// ROUTE --DELETE CUSTOMER BY ID    --DELETE
router.delete('/deleteCustomer/:id', use(delete_customer))

export default router
