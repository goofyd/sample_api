const config = require('./dbconfig')
const connection = require('pg').Pool

const db = new connection(config)

const getData = (req, res) => {
    db.query('SELECT * from table', (err, results) => {
        if(err)
            throw err
        res.status(200).json(results.rows)
    })
}

const updateData = (req, res) => {
    const id = parseInt(req.params.id)
  
    db.query(
      'UPDATE users SET col1 = $1, col2 = $2 WHERE id = $3',
      ["new_value1", "new_value2", id],
      (err, results) => {
        if (err) 
          throw err
        res.status(200).json({status: `User modified with ID: ${id}`})
      }
    )
  }


  module.exports = {
    getData,
    updateData
  }