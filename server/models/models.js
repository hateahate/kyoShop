const sequelize = require('../db'); // Подключаемся к базе
const { DataTypes } = require('sequelize'); // Импортируем библиотеку работы с типами данных

// Сущность пользователя

const User = sequelize.define('user', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    email: { type: DataTypes.STRING, unique: true },
    password: { type: DataTypes.STRING },
    first_name: { type: DataTypes.STRING },
    last_name: { type: DataTypes.STRING },
    role: { type: DataTypes.STRING, defaultValue: 'USER' },
});

// Сущность компании

const Company = sequelize.define('company', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    company_name: { type: DataTypes.STRING },
    category: { type: DataTypes.STRING, defaultValue: 'UNAPPROVED' },
    vat: { type: DataTypes.STRING, unique: true },
    register_code: { type: DataTypes.INTEGER, unique: true },
    address: { type: DataTypes.STRING },
});


// Сущность товара

const Product = sequelize.define('product', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, unique: true, allowNull: false },
    description: { type: DataTypes.STRING },
    price: { type: DataTypes.INTEGER, allowNull: false },
    img: { type: DataTypes.STRING },
    moq: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 1 },
    qty_step: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 1 },
    stock: { type: DataTypes.INTEGER },
    status: { type: DataTypes.STRING, allowNull: false, defaultValue: 'Pre-order' },
    category: { type: DataTypes.STRING, allowNull: true },
});

// Сущность поста блога
const Post = sequelize.define('post', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    title: { type: DataTypes.STRING, allowNull: false },
    description: { type: DataTypes.JSON, allowNull: false },
    img: { type: DataTypes.STRING },
    link: { type: DataTypes.STRING, unique: true, allowNull: true },
    category: { type: DataTypes.STRING, allowNull: true },
})

// Сущность поста вики
const Wiki = sequelize.define('wiki', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    title: { type: DataTypes.STRING, allowNull: false },
    description: { type: DataTypes.JSON, allowNull: false },
    img: { type: DataTypes.STRING },
    link: { type: DataTypes.STRING, unique: true, allowNull: true },
    category: { type: DataTypes.STRING, allowNull: true },
})


// Информация о товаре

const ProductInfo = sequelize.define('product_info', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    title: { type: DataTypes.STRING, allowNull: false },
    description: { type: DataTypes.STRING, allowNull: false },
})


// Корзина

const Basket = sequelize.define('basket', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
});

// Продукт в корзине

const BasketProduct = sequelize.define('basket_product', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
});

// Сущность категории

const ProductCategory = sequelize.define('product_category', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, unique: true, allowNull: false },
});

// Сущность категории поста

const PostCategory = sequelize.define('post_category', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, unique: true, allowNull: false },
    categorylink: { type: DataTypes.STRING, allowNull: false, unique: true },
})

// Сущность заказа

const Order = sequelize.define('order', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    status: { type: DataTypes.STRING, allowNull: false, defaultValue: 'NEW' },
});

const MetaTag = sequelize.define('metatag', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, allowNull: false, defaultValue: 'Unknown' },
})

const DashboardNotification = sequelize.define('dashboardnotifications', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    title: { type: DataTypes.STRING },
    body: { type: DataTypes.TEXT },
})

const Ticket = sequelize.define('ticket', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    subject: { type: DataTypes.STRING },
    messages: { type: DataTypes.TEXT },
    status: { type: DataTypes.STRING, defaultValue: 'Waiting' },
})



// Устанавливаем связи

User.hasOne(Basket); // Связываем корзину с пользователем (одна корзина на юзера) и устанавливаем отношение объекта корзины к пользователю
Basket.belongsTo(User);

User.hasOne(Company); // По аналогии с корзиной связываем одну компанию с пользователем
Company.belongsTo(User);

Basket.hasMany(BasketProduct); // Корзине передаём объект товара в корзине

Product.hasMany(ProductInfo, { as: 'info' }); // Товар может содержать множество описаний
ProductInfo.belongsTo(Product);

User.hasMany(Post);
Post.belongsTo(User);

User.hasMany(Wiki);
Wiki.belongsTo(User);

User.hasMany(Order);
Order.belongsTo(User);

Wiki.hasMany(MetaTag);
Product.hasMany(MetaTag);
Post.hasMany(MetaTag);

MetaTag.belongsTo(Wiki);
MetaTag.belongsTo(Post);
MetaTag.belongsTo(Product);

// Экспортируем модели сущностей для дальнейшего использования

module.exports = {
    User,
    Product,
    Company,
    Basket,
    BasketProduct,
    ProductCategory,
    ProductInfo,
    Post,
    Order,
    Wiki,
    PostCategory,
    MetaTag,
    DashboardNotification,
    Ticket,
}


