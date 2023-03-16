const Productmodels = require("./Productmodels")

exports.addProduct = async (req, res) => {
    try {
        const product = new Productmodels(req.body)
        await product.save()
        return res.status(200).send({ msg: "product added", product })
    } catch (error) {
        return res.status(500).send(error)
    }
}
exports.getProduct = async (req, res) => {
    try {
        const product = await Productmodels.find()
        return res.status(200).send({ msg: "product list", product })
    } catch (error) {
        return res.status(500).send(error)
    }
}
exports.deleteProduct = async (req, res) => {
    try {
        const product = await Productmodels.findByIdAndDelete(req.params.id)
        return res.status(200).send({ msg: "product deleted", product })
    } catch (error) {
        return res.status(500).send(error)
    }
}
exports.editProduct = async (req, res) => {
    try {
        const product = await Productmodels.findByIdAndUpdate(req.params.id, { $set: { ...req.body } }, { new: true })
        return res.status(200).send({ msg: "product updated", product })
    } catch (error) {
        return res.status(500).send(error)
    }
}
const collection = require("./usermodel")
exports.register = async (req, res) => {
    try {
        const user = new collection(req.body)
        await user.save()
        return res.status(200).send({ msg: "user added", user })
    } catch (error) {
        return res.status(500).send(error)
    }
}
