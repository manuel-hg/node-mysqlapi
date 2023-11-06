import { mysql } from '../db/db.js'

export const getEmployees = async (req, res) => {
    try {
        const [rows] = await mysql.query(`SELECT * FROM employee`)
        res.json({
            status: 200,
            data: rows
        })
    } catch (error) {
        res.json({
            status: 500,
            message: `Something goes wrong`
        })
    }
}

export const getEmployee = async (req, res) => {
    try {
        const [row] = await mysql.query(`SELECT * FROM employee WHERE id = ?`, [req.params.id])
        res.json({
            status: (row.length > 0 ? 200 : 404),
            data: row[0],
            message: (row.length <= 0 && 'Employee not found')
        })
    } catch (error) {
        res.json({
            status: 500,
            message: `Someting goes wrong`
        })
    }
}

export const createEmployees = async (req, res) => {
    try {
        const { name, salary } = req.body
        const [rows] = await mysql.query(`INSERT INTO employee(name, salary) VALUES(?,?)`, [name, salary])
        res.json({
            status: (rows.insertId > 0 ? 200 : 404),
            data: {
                id: rows.insertId,
                name,
                salary
            },
            message: (rows.insertId <= 0 && 'There is an error')
        })
    } catch (error) {
        res.json({
            status: 500,
            message: `Something goes wrong`
        })
    }
}

export const updateEmployees = async (req, res) => {
    try {
        const { id } = req.params
        const { name, salary } = req.body
        const [result] = await mysql.query(`UPDATE employee SET name = IFNULL(?, name), salary = IFNULL(?, salary) WHERE id = ?`, [name, salary, id])
        const [row] = await mysql.query(`SELECT * FROM employee WHERE id = ?`, [id])
        res.json({
            status: (result.affectedRows > 0 ? 200 : 404),
            message: (result.affectedRows > 0 ? 'Employee updated' : 'Employee not found'),
            data: (result.affectedRows > 0 && row)
        })
    } catch (error) {
        res.json({
            status: 500,
            message: `Something goes wrogn`
        })
    }
}

export const deleteEmployees = async (req, res) => {
    try {
        const [result] = await mysql.query(`DELETE FROM employee WHERE id = ?`, [req.params.id])
        res.json({
            status: (result.affectedRows > 0 ? 200 : 404),
            message: (result.affectedRows > 0 ? 'Employee deleted' : 'Employee not found')
        })
    } catch (error) {
        res.json({
            status: 500,
            message: `Something goes wrong`
        })
    }

}