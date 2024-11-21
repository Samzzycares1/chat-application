// // // Function to fetch data based on the table type
// // function fetchData(table) {
// //     const url = `http://localhost:4500/${table}`;  // API route to fetch data from backend

// //     // Show loading state
// //     const tableBody = document.getElementById('data-table').getElementsByTagName('tbody')[0];
// //     tableBody.innerHTML = `<tr><td colspan="5">Loading...</td></tr>`;

// //     // Fetch data from the backend
// //     fetch(url)
// //         .then(response => response.json())
// //         .then(data => {
// //             // Dynamically update the table based on the data
// //             updateTable(data, table);
// //         })
// //         .catch(error => {
// //             console.error('Error fetching data:', error);
// //             tableBody.innerHTML = `<tr><td colspan="5">Failed to load data. Please try again later.</td></tr>`;
// //         });
// // }
// //
// function fetchData(table) {
//     const url = `http://localhost:4500/${table}`;  // API route to fetch data from the backend

//     // Reference the table body
//     const tableBody = document
//         .getElementById('data-table')
//         .getElementsByTagName('tbody')[0];

//     // Show loading state
//     tableBody.innerHTML = `<tr><td colspan="5">Loading...</td></tr>`;

//     // Fetch data from the backend
//     fetch(url)
//         .then(response => {
//             // Handle HTTP errors
//             if (!response.ok) {
//                 throw new Error(`HTTP error! Status: ${response.status}`);
//             }
//             return response.json(); // Parse JSON response
//         })
//         .then(data => {
//             // Dynamically update the table based on the data
//             if (Array.isArray(data) && data.length > 0) {
//                 updateTable(data, table);
//             } else {
//                 // Handle empty data gracefully
//                 tableBody.innerHTML = `<tr><td colspan="5">No data available.</td></tr>`;
//             }
//         })
//         .catch(error => {
//             // Handle errors gracefully
//             console.error('Error fetching data:', error);
//             tableBody.innerHTML = `<tr><td colspan="5">Failed to load data. Please try again later.</td></tr>`;
//         });
// }

// // Function to update the table with the fetched data
// function updateTable(data, table) {
//     const tableBody = document.getElementById('data-table').getElementsByTagName('tbody')[0];
//     tableBody.innerHTML = '';  // Clear any existing rows

//     if (table === 'users') {
//         data.forEach(user => {
//             const row = document.createElement('tr');
//             row.innerHTML = `
//                 <td>${user.user_id}</td>
//                 <td>${user.name}</td>
//                 <td>${user.email}</td>
//                 <td>${user.password}</td>
//             `;
//             tableBody.appendChild(row);
//         });
//     } else if (table === 'products') {
//         data.forEach(product => {
//             const row = document.createElement('tr');
//             row.innerHTML = `
//                 <td>${product.product_id}</td>
//                 <td>${product.name}</td>
//                 <td>${product.price}</td>
//                 <td>${product.category}</td>
//             `;
//             tableBody.appendChild(row);
//         });
//     } else if (table === 'orders') {
//         data.forEach(order => {
//             const row = document.createElement('tr');
//             row.innerHTML = `
//                 <td>${order.order_id}</td>
//                 <td>${order.user_id}</td>
//                 <td>${new Date(order.order_date).toLocaleString()}</td>
//                 <td>${order.status}</td>
//             `;
//             tableBody.appendChild(row);
//         });
//     } else if (table === 'order-details') {
//         data.forEach(detail => {
//             const row = document.createElement('tr');
//             row.innerHTML = `
//                 <td>${detail.detail_id}</td>
//                 <td>${detail.order_id}</td>
//                 <td>${detail.product_id}</td>
//                 <td>${detail.quantity}</td>
//                 <td>${detail.price}</td>
//             `;
//             tableBody.appendChild(row);
//         });
//     }
// }
