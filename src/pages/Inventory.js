import {React,useEffect} from "react";

const Inventory = () => {

    useEffect(() => {
        var serialNumber = 1;
        var modal = document.querySelector('#modal-dialog');
        var closeModal = document.querySelector('.close');
        var proceedButton = document.querySelector('#proceed-button');
        var cancelButton = document.querySelector('#cancel-button');
      
        closeModal.onclick = function() {
          modal.style.display = 'none';
        };
      
        proceedButton.onclick = function() {
          modal.style.display = 'none';
          // Handle logic for adding item to grocery list state
        };
      
        cancelButton.onclick = function() {
          modal.style.display = 'none';
          // No need for additional logic in this case
        };
      
        document.getElementById('grocery-form').addEventListener('submit', function(event) {
          event.preventDefault();
          var itemName = document.getElementById('item-name').value;
          var itemQuantity = document.getElementById('item-quantity').value;
          var itemCost = document.getElementById('item-cost').value;
          var expiryDate = document.getElementById('expiry-date').value;
          console.log('Item Name:', itemName);
          console.log('Quantity:', itemQuantity);
          console.log('Total Cost:', itemCost);
          console.log('Expiry Date:', expiryDate);
          document.getElementById('grocery-form').reset();
      
          var groceryTable = document.getElementById('grocery-list').getElementsByTagName('tbody')[0];
      
          var itemExists = false;
          var rows = groceryTable.getElementsByTagName('tr');
          for (var i = 0; i < rows.length; i++) {
            var row = rows[i];
            var nameCell = row.cells[1];
            if (nameCell.textContent === itemName) {
              itemExists = true;
              break;
            }
          }
      
          if (itemExists) {
            modal.style.display = 'block';
          } else {
            addItemToGroceryList(itemName, itemQuantity, itemCost, expiryDate);
          }
        });
      
        function addItemToGroceryList(itemName, itemQuantity, itemCost, expiryDate) {
          var groceryTable = document.getElementById('grocery-list').getElementsByTagName('tbody')[0];
          var newRow = groceryTable.insertRow();
          var serialNumberCell = newRow.insertCell();
          var itemNameCell = newRow.insertCell();
          var itemQuantityCell = newRow.insertCell();
          var itemCostCell = newRow.insertCell();
          var expiryDateCell = newRow.insertCell();
          var consumedCell = newRow.insertCell();
          serialNumberCell.textContent = serialNumber++;
          itemNameCell.textContent = itemName;
          itemQuantityCell.textContent = itemQuantity;
          itemCostCell.textContent = itemCost;
          expiryDateCell.textContent = expiryDate;
          consumedCell.innerHTML = '<input type="checkbox">';
      
          var expiryDateObj = new Date(expiryDate);
          var currentDate = new Date();
          var daysDifference = Math.floor((expiryDateObj - currentDate) / (1000 * 60 * 60 * 24));
      
          if (daysDifference <= 0) {
            newRow.classList.add('expiry-red');
          } else if (daysDifference <= 14) {
            newRow.classList.add('expiry-yellow');
          }
          
          // Handle logic for adding item to grocery list state
        }
      }, []);
      


  return (
    <div  className="grocery-form-body">
      <div className="inventory-heading">
        <h1>YOUR <span className="inventory">INVENTORY</span></h1>
      </div>
      <div className="grocery-form-container">
        <form id="grocery-form">
          <input type="text" id="item-name" placeholder="Item Name" required />
          <input
            type="number"
            id="item-quantity"
            placeholder="Quantity"
            required
          />
          <input type="text" id="item-cost" placeholder="Total Cost" required />
          <input type="date" id="expiry-date" required />
          <button type="submit">Add Item</button>
        </form>
        <table id="grocery-list">
          <thead>
            <tr>
              <th>Serial No.</th>
              <th>Item Name</th>
              <th>Quantity</th>
              <th>Total Cost</th>
              <th>Expiry Date</th>
              <th>Consumed</th>
            </tr>
          </thead>
          <tbody></tbody>
        </table>
      </div>

      <div id="modal-dialog" className="modal">
        <div className="modal-content">
          <span className="close">&times;</span>
          <p>This item is already in the list and has not been consumed yet.</p>
          <div className="button-container">
            <button id="proceed-button" className="proceed-button">
              Proceed
            </button>
            <button id="cancel-button" className="cancel-button">
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Inventory;
