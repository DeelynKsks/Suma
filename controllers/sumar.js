const ctrlOp = {}

ctrlOp.sum = async (req, res) => {

    const num1 = parseInt(req.query.num1)
    const num2 = parseInt(req.query.num2)

    const suma = num1 + num2

    // const numeros = JSON.parse(datos)

    // const num1 = parseInt(numeros.n1)
    // const num2 = parseInt(numeros.n2)

    // const suma = num1 + num2

    return res.send(`El resultado de la suma es ${suma}`)
}

module.exports = ctrlOp