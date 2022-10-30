const sequelize = require('../db'); // Подключаемся к базе
const { DataTypes } = require('sequelize'); // Импортируем библиотеку работы с типами данных

// Сущность пользователя

const User = sequelize.define('user', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    email: { type: DataTypes.STRING, unique: true },
    password: { type: DataTypes.STRING, allowNull: false },
    birthDate: { type: DataTypes.DATEONLY },
    first_name: { type: DataTypes.STRING, allowNull: false },
    last_name: { type: DataTypes.STRING, allowNull: false },
    gender: { type: DataTypes.STRING },
    role: { type: DataTypes.STRING, defaultValue: 'USER' },
    approved: { type: DataTypes.BOOLEAN, defaultValue: false },
    phone: { type: DataTypes.STRING },
});


// Сущность адреса

const Address = sequelize.define('address', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    type: { type: DataTypes.STRING },
    country: { type: DataTypes.STRING, allowNull: false },
    city: { type: DataTypes.STRING, allowNull: false },
    state: { type: DataTypes.STRING, allowNull: false },
    post: { type: DataTypes.STRING, allowNull: false },
    zip: { type: DataTypes.STRING, allowNull: false },
})


// Сущность компании

const Company = sequelize.define('company', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    companyName: { type: DataTypes.STRING },
    vat: { type: DataTypes.STRING, unique: true },
    registryCode: { type: DataTypes.STRING, unique: true },
    website: { type: DataTypes.STRING },
});


// Сущность товара

const Product = sequelize.define('product', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    title: { type: DataTypes.STRING, unique: true, allowNull: false },
    description: { type: DataTypes.STRING },
    price: { type: DataTypes.INTEGER, allowNull: false },
    img: { type: DataTypes.STRING },
    moq: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 1 },
    qty_step: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 1 },
    stock: { type: DataTypes.INTEGER },
    status: { type: DataTypes.STRING, allowNull: false, defaultValue: 'Pre-order' },
    category: { type: DataTypes.STRING, allowNull: true },
    sku: { type: DataTypes.STRING },
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
    items: { type: DataTypes.JSON },
});

// Продукт в корзине

const BasketProduct = sequelize.define('basket_product', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
});

// Сущность категории

const ProductCategory = sequelize.define('product_category', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, unique: true, allowNull: false },
}, { timestamps: false });

// Сущность подкатегории
const ProductSubCategory = sequelize.define('product_category', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, unique: true, allowNull: false },
});

// Сущность категории поста

const PostCategory = sequelize.define('post_category', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, unique: true, allowNull: false },
})

// Сущность заказа

const Order = sequelize.define('order', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    status: { type: DataTypes.STRING, allowNull: false, defaultValue: 'NEW' },
    items: { type: DataTypes.JSON },
});

const DashboardNotification = sequelize.define('dashboardnotifications', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    title: { type: DataTypes.STRING },
    body: { type: DataTypes.TEXT },
})

const Ticket = sequelize.define('ticket', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    subject: { type: DataTypes.STRING },
    messages: { type: DataTypes.JSON },
    status: { type: DataTypes.STRING, defaultValue: 'Waiting' },
})

const Attribute = sequelize.define('attribute', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING },
    description: { type: DataTypes.STRING },
}, { timestamps: false })



// Устанавливаем связи

User.hasOne(Basket); // Связываем корзину с пользователем (одна корзина на юзера) и устанавливаем отношение объекта корзины к пользователю
Basket.belongsTo(User);

User.hasOne(Company); // По аналогии с корзиной связываем одну компанию с пользователем
Company.belongsTo(User);

Basket.hasMany(BasketProduct); // Корзине передаём объект товара в корзине

Product.hasMany(ProductInfo, { as: 'info' }); // Товар может содержать множество описаний
ProductInfo.belongsTo(Product);

Product.hasMany(Attribute)
Attribute.belongsTo(Product)

User.hasMany(Post);
Post.belongsTo(User);

User.hasMany(Address);
Address.belongsTo(User);

User.hasMany(Wiki);
Wiki.belongsTo(User);

User.hasMany(Order);
Order.belongsTo(User);

User.hasMany(Ticket);
Ticket.belongsTo(User);

ProductCategory.hasMany(ProductSubCategory);
ProductSubCategory.belongsTo(ProductCategory);

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
    DashboardNotification,
    Ticket,
    Address,
    ProductSubCategory,
    Attribute,
}


