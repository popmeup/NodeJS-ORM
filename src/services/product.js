const { getAllProducts, getProductById } = require('../repository/product')

module.exports = {
    getAllProducts: async () => {
        var products = await getAllProducts();
        let results = [];
        products.map( (p) => results.push({ displayPrice:`${p.price} ${p.Currency.isoCode}`, name: p.name,  url: p.url, image: p.mainImageUrl, seller: p.seller }));
        return results;
    },
    getProductById: async (id) => {
        var product = await getProductById(id);
        if (!product) {
            return null;
        }
        product.displayPrice = `${product.price} ${product.Currency.isoCode}`;
        return {
            displayPrice: product.displayPrice,
            name: product.name,
            url: product.url,
            image: product.mainImageUrl,
            seller: product.seller
        }
    }
}