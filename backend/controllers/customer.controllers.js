import _database from '../models/index.js'

// CREATING MAIN MODEL
const Customer = _database.customers

// CREATE NEW CUSTOMER

// const add_new_customer = async (req, res, next) => {
//     try {
//         let info = {
//             first_name: req.body.first_name,
//             last_name: req.body.last_name,
//             email: req.body.email,
//             birthdate: req.body.birthdate,
//         }
//         const customer = await Customer.create(info)
//         res.status(200).send(customer)
//         console.log(customer)
//     } catch (err) {
//         console.log(err)
//         res.status(500).send({
//             message: 'Credentials For to Create New Customer is Invalid...',
//         })
//     }
// }

// CREATE NEW CUSTOMER
const add_new_customer = async (req, res, next) => {
    let info = {
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        birthdate: req.body.birthdate,
    }
    const customer = await Customer.create(info)
    res.status(200).send(customer)
    console.log(customer)
}

// GET ALL CUSTOMERS
const get_all_customers = async (req, res, next) => {
    let customers = await Customer.findAll({})
    res.status(200).send(customers)
}

// UPDATE CUSTOMER
const update_customer = async (req, res, next) => {
    let _id = req.params.id
    const customer = await Customer.update(req.body, { where: { id: _id } })
    res.status(200).send(customer)
}

// DELETE CUSTOMER
const delete_customer = async (req, res, next) => {
    let _id = req.params.id
    await Customer.destroy({ where: { id: _id } })
    res.status(200).send(`Customer ${_id} is Deleted`)
}

export { add_new_customer, get_all_customers, update_customer, delete_customer }
