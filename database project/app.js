// const { addSampleData, fetchData } = require('./controllers/databaseOperations');

// // Call the function to add sample data or fetch data
// async function main() {
//   // Uncomment the desired function to run
//   // await addSampleData(); // To add sample data
//   await fetchData(); // To fetch and display data
// }

// main();
///
//const { sequelize } = require('./models'); // Adjust the path as needed
// const fetchData = require('./controllers/databaseOperations'); // Adjust the path as needed

// async function main() {
//     try {
//         // Ensure all tables are synchronized before querying
//         await sequelize.sync({ force: true }); // Set `force: true` only for development; removes all data and recreates tables
//         console.log("Database synchronized");

//         // Fetch data or perform other operations
//         // await fetchData();
//     } catch (error) {
//         console.error("Error initializing the application:", error);
//     }
// }
const { fetchData, addSampleData } = require('./controllers/databaseOperations');
const { sequelize } = require('./models'); // Adjust the path to your sequelize models/index.js
// const fetchData = require('./controllers/databaseOperations'); // Adjust the path as needed

async function main() {
    try {
        // Sync database
        await sequelize.sync({ force: true });
        console.log("Database synchronized");

        // Fetch data (or add sample data)
        await fetchData(); // Or await addSampleData() if you intend to add sample data
        console.log("Data fetch completed successfully");
    } catch (error) {
        console.error("Error initializing the application:", error);
    }
}

main();

///
const express = require('express'); // Import Express framework
const app = express(); // Initialize Express app

// Middleware to parse JSON requests
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const cors = require('cors');
app.use(cors()); // This will enable CORS for all domains

// A sample route
app.get('/', (req, res) => {
    res.send('Server is running and responding!');
});
fetch('http://localhost:3000/tables') // Ensure this is correct
    .then(response => response.json())
    .then(data => updateTable(data, table))
    .catch(error => console.error('Error fetching data:', error));


// Define the port
const PORT = process.env.PORT || 3000;

// Start the server
app.listen(PORT, (err) => {
    if (err) {
        console.error('Error starting the server:', err); // Log if there's an error
    } else {
        console.log(`Server is running on port ${PORT}`); // Confirm the server is running
    }
});

const { Sequelize, DataTypes, Op } = require('sequelize');

// Initialize express app
// Set up Sequelize to connect to your MySQL database

// const Sequelize = new Sequelize('ecommerce', 'root', 'Samzzyluv1$', {
//     host: 'localhost',
//     dialect: 'mysql'
// });

// Define models (for reference)
const User = sequelize.define('User', {
    user_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING,
        unique: true
    },
    password: {
        type: DataTypes.STRING
    }
}, {
    tableName: 'Users',
    timestamps: false
});

const Product = sequelize.define('Product', {
    product_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING
    },
    price: {
        type: DataTypes.DECIMAL(10, 2)
    },
    category: {
        type: DataTypes.STRING
    }
}, {
    tableName: 'Products',
    timestamps: false
});

const Order = sequelize.define('Order', {
    order_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    user_id: {
        type: DataTypes.INTEGER,
        references: {
            model: User,
            key: 'user_id'
        }
    },
    order_date: {
        type: DataTypes.DATE
    },
    status: {
        type: DataTypes.STRING,
        defaultValue: 'Pending'
    }
}, {
    tableName: 'Orders',
    timestamps: false
});

const OrderDetail = sequelize.define('OrderDetail', {
    detail_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    order_id: {
        type: DataTypes.INTEGER,
        references: {
            model: Order,
            key: 'order_id'
        }
    },
    product_id: {
        type: DataTypes.INTEGER,
        references: {
            model: Product,
            key: 'product_id'
        }
    },
    quantity: {
        type: DataTypes.INTEGER
    },
    price: {
        type: DataTypes.FLOAT
    }
}, {
    tableName: 'order_details',
    timestamps: false
});

// API route to get all table names
app.get('/tables', async (req, res) => {
    try {
        const tables = await sequelize.getQueryInterface().showAllTables();
        res.json(tables);  // Send the table names as a JSON response
    } catch (error) {
        console.error('Error fetching tables:', error);
        res.status(500).send('Error fetching tables');
    }
});

// Route to view all users
app.get('/users', async (req, res) => {
    try {
        const users = await User.findAll();
        res.json(users);  // Send users data as JSON
    } catch (error) {
        console.error('Error fetching users:', error);
        res.status(500).send('Error fetching users');
    }
});


// Route to view all products
app.get('/products', async (req, res) => {
    try {
        const products = await Product.findAll();
        res.json(products);  // Send products data as JSON
    } catch (error) {
        console.error('Error fetching products:', error);
        res.status(500).send('Error fetching products');
    }
});

// Route to view all orders
app.get('/orders', async (req, res) => {
    try {
        const orders = await Order.findAll();
        res.json(orders);  // Send orders data as JSON
    } catch (error) {
        console.error('Error fetching orders:', error);
        res.status(500).send('Error fetching orders');
    }
});

// Route to view all order details
app.get('/order-details', async (req, res) => {
    try {
        const orderDetails = await OrderDetail.findAll();
        res.json(orderDetails);  // Send order details data as JSON
    } catch (error) {
        console.error('Error fetching order details:', error);
        res.status(500).send('Error fetching order details');
    }
});

////


// const cors = require('cors');
// const { Sequelize, DataTypes } = require('sequelize');


// Define associations
Order.belongsTo(User);
OrderDetail.belongsTo(Order);
OrderDetail.belongsTo(Product);

// Sync database (create tables)
sequelize.sync({ force: true }).then(() => {
    console.log("Database synchronized");
});
////