const ctrlOp = {}

ctrlOp.sum = async (req, res) => {

    const num1 = req.query.num1
    const num2 = req.query.num2
    let suma
    const regex = /^[0-9]*$/;

    if ((!regex.test(num1, num2) )|| (num1 && num2) == ''){
        return res.send('Solo se pueden aceptar números')
    } else suma = parseInt(num1) + parseInt(num2)


    // const numeros = JSON.parse(datos)

    // const num1 = parseInt(numeros.n1)
    // const num2 = parseInt(numeros.n2)

    // const suma = num1 + num2

    return res.send(`El resultado de la suma es ${suma}`)
}

module.exports = ctrlOp