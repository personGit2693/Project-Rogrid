<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Product List</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      margin: 30px;
      background-color: #f9f9f9;
    }

    h2 {
      color: #333;
    }

    ul.product-list {
      list-style-type: none;
      padding: 0;
    }

    ul.product-list li {
      padding: 10px;
      background-color: #fff;
      margin-bottom: 5px;
      border-left: 4px solid #4CAF50;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
    }

    .form-group {
      margin-top: 20px;
    }

    input[type="text"],
    input[type="date"] {
      padding: 8px;
      margin-right: 10px;
      font-size: 14px;
      border: 1px solid #ccc;
      border-radius: 4px;
    }

    button {
      padding: 10px 15px;
      font-size: 16px;
      color: #fff;
      background-color: #4CAF50;
      border: none;
      cursor: pointer;
      border-radius: 4px;
    }

    button:hover {
      background-color: #45a049;
    }
  </style>
</head>
<body>

  <h2>Product List</h2>
  <ul class="product-list">
    <li data-name="Amlodipine 10mg" data-date="2023-01-10">Amlodipine 10mg - 2023-01-10</li>
    <li data-name="Metoprolol 50mg" data-date="2023-03-05">Metoprolol 50mg - 2023-03-05</li>
    <li data-name="Farxiga 10mg" data-date="2023-02-20">Farxiga 10mg - 2023-02-20</li>
    <li data-name="Hydralazine 10mg" data-date="2023-01-25">Hydralazine 10mg - 2023-01-25</li>
  </ul>

  <div class="form-group">
    <input type="text" id="product-name" placeholder="Product name (e.g., Lisinopril 20mg)">
    <input type="date" id="product-date">
    <button onclick="addProduct()">Add Product</button>
  </div>

  <div class="form-group">
    <button onclick="sortItems('name')">Sort by Name</button>
    <button onclick="sortItems('date')">Sort by Date</button>
  </div>

  <script>
    let sortOrder = {
      name: 'asc',
      date: 'asc'
    };

    function addProduct() {
      const name = document.getElementById("product-name").value.trim();
      const date = document.getElementById("product-date").value;

      if (!name || !date) {
        alert("Please fill in both product name and date.");
        return;
      }

      const newItem = document.createElement("li");
      newItem.setAttribute("data-name", name);
      newItem.setAttribute("data-date", date);
      newItem.textContent = `${name} - ${date}`;

      const list = document.querySelector(".product-list");
      list.appendChild(newItem);

      document.getElementById("product-name").value = "";
      document.getElementById("product-date").value = "";
    }

    function sortItems(attribute) {
      const list = document.querySelector(".product-list");
      const items = Array.from(list.children);

      items.sort((a, b) => {
        let valueA = a.getAttribute(`data-${attribute}`);
        let valueB = b.getAttribute(`data-${attribute}`);

        if (attribute === 'date') {
          valueA = new Date(valueA);
          valueB = new Date(valueB);
        }

        if (sortOrder[attribute] === 'asc') {
          return valueA < valueB ? -1 : valueA > valueB ? 1 : 0;
        } else {
          return valueA > valueB ? -1 : valueA < valueB ? 1 : 0;
        }
      });

      items.forEach(item => list.appendChild(item));

      // Toggle sort order for next click
      sortOrder[attribute] = sortOrder[attribute] === 'asc' ? 'desc' : 'asc';
    }
  </script>

</body>
</html>
-