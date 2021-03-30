//  we will make 3 modules, each module doesn't know anything about the other one, it can't access any variable or method from the outside
var budgetController = (function () // Module 1    // anonymous function (IIFE)
{
  var Expenses = function (id, desccription, value) {
    this.id = id;
    this.desccription = desccription;
    this.value = value;
    this.percentage = -1;
  };

  Expenses.prototype.calcPercentage = function (totalIncome) {
    if (totalIncome > 0) {
      this.percentage = Math.round((this.value / totalIncome) * 100);
    } else this.percentage = -1;
  };

  Expenses.prototype.getPercentage = function () {
    return this.percentage;
  };

  var Incomes = function (id, desccription, value) {
    this.id = id;
    this.desccription = desccription;
    this.value = value;
  };

  var calculateTotal = function (type) {
    var sum = 0;
    data.allItems[type].forEach(function (current, index, array) {
      sum += current.value;
    });
    data.totals[type] = sum;
  };

  var data = {
    allItems: {
      exp: [],
      inc: [],
    },
    totals: {
      exp: 0,
      inc: 0,
    },
    budget: 0,
    percentage: -1,
  };

  return { // only what is inside can be accesed by other modules
    addItem: function (type, des, val) {
      var newItem, ID;

      //[1 2 3 4 5], next ID = 6
      //[1 2 4 6 8], next ID = 9
      // ID = last ID + 1

      //Create new ID
      if (data.allItems[type].length > 0)
        ID = data.allItems[type][data.allItems[type].length - 1].id + 1;
      else ID = 0;

      if (type == "exp") {
        newItem = new Expenses(ID, des, val);
      } else if (type == "inc") {
        newItem = new Incomes(ID, des, val);
      }

      data.allItems[type].push(newItem);
      return newItem;
    },

    deleteItem: function (type, id) {
      // map is just like forEach , but the difference that it return a brnad new array
      // so if you return 2, you will have a new array with the same length and type, but all items have value of 2
      // so we will return the same array here in this method
      var ids, index;

      // id = 6
      //data.allItems[type][id];
      // ids = [1 2 4  8]
      //index = 3

      ids = data.allItems[type].map(function (current) {
        return current.id;
      });

      index = ids.indexOf(id);

      if (index != -1) {
        data.allItems[type].splice(index, 1); // remove an item at the index, 1 is how many items to delete from the index.....just delete one item
      }
    },
    calculateBudget: function () {
      // Calculate total incomes and exposes
      calculateTotal("exp");
      calculateTotal("inc");
      // Calculate the budget: income - exposes
      data.budget = data.totals.inc - data.totals.exp;
      // Calculate the percentage of the income that we spent
      if (data.totals.inc > 0)
        data.percentage = (data.totals.exp / data.totals.inc) * 100;
      else data.percentage = -1;
    },

    calculatePercentages: function () {
      /**
       * a=10, b=20, totalIncome=100
       * a=10/100 = 10%
       * b=20/100=20%
       */

      data.allItems.exp.forEach(function (cur) {
        cur.calcPercentage(data.totals.inc);
      });
    },

    getPercentages: function () {
      var allPerc = data.allItems.exp.map(function (current) {
        return current.getPercentage();
      });
      return allPerc;
    },

    getBudget: function () {
      return {
        budget: data.budget,
        totalInc: data.totals.inc,
        totalExp: data.totals.exp,
        percentage: data.percentage,
      };
    },

    testing: function () {
      console.log(data);
    },
  };
})();





var UIController = (function () // Module 2
{
  var DOMStrings =
    //HTML classes
    {
      inputType: ".add__type",
      inputDescription: ".add__description",
      inputValue: ".add__value",
      inputBtn: ".add__btn",
      incomeContainer: ".income__list",
      expensesContainer: ".expenses__list",
      budgetLabel: ".budget__value",
      incomeLabel: ".budget__income--value",
      expensesLabel: ".budget__expenses--value",
      percentageLabel: ".budget__expenses--percentage",
      container: ".container",
      expensesPercentageLabel: ".item__percentage",
      dateLabel: ".budget__title--month",
    };

  var formatNumber = function (num, type) {
    var numSplit, int, dec;

    /*
      + or - before number
      exactly 2 decimal points
      comma separating the thousands
      examples:
      2310.4567 -> + 2,310.46
      2000 -> + 2,000.00
    */

    num = Math.abs(num);
    num = num.toFixed(2); // limits the decimal numbers to 2, this is now a string
    numSplit = num.split(".");
    int = numSplit[0];
    if (int.length > 3) {
      int = int.substr(0, int.length - 3) + "," + int.substr(int.length - 3, 3); // input : 23510 >> output : 23,510
    }
    dec = numSplit[1];
    return (type == "exp" ? "-" : "+") + int + "." + dec;
  };

  var nodeListForEach = function (list, callback) {
    for (var i = 0; i < list.length; i++) {
      callback(list[i], i);
    }
  };
  return {
    // return object
    getInput: function () {
      return {
        // return object
        type: document.querySelector(DOMStrings.inputType).value, // will be either inc or exp
        description: document.querySelector(DOMStrings.inputDescription).value,
        value: parseFloat(document.querySelector(DOMStrings.inputValue).value),
      };
    },
    addItemList: function (obj, type) {
      var html, newHTML, elemnt;

      // Create HTML string with placeholder text
      if (type == "inc") {
        elemnt = DOMStrings.incomeContainer;

        html =
          '<div class="item clearfix" id="inc-%id%">' +
          '<div class="item__description">%description%</div>' +
          '<div class="right clearfix">' +
          '<div class="item__value">%value%</div>' +
          '<div class="item__delete">' +
          '<button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button>' +
          "</div>" +
          "</div>" +
          "</div>";
      } else if (type == "exp") {
        elemnt = DOMStrings.expensesContainer;

        html =
          '<div class="item clearfix" id="exp-%id%">' +
          '<div class="item__description">%description%</div>' +
          '<div class="right clearfix">' +
          '<div class="item__value">%value%</div>' +
          '<div class="item__percentage">21%</div>' +
          '<div class="item__delete">' +
          '<button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button>' +
          "</div>" +
          "</div>" +
          "</div>";
      }

      // Replace placeholder texts with actual data
      newHTML = html.replace("%id%", obj.id);
      newHTML = newHTML.replace("%description%", obj.desccription);
      newHTML = newHTML.replace("%value%", formatNumber(obj.value, type));

      // Insert HTML into the DOM
      document.querySelector(elemnt).insertAdjacentHTML("beforeend", newHTML);
    },

    deleteListItem: function (selectorID) {
      var el = document.getElementById(selectorID);
      // In DOM manipulation, you can't remove an item directly, you have to select its parent first, then choose the child
      el.parentNode.removeChild(el);
    },

    clearFields: function () {
      var fields, fieldsArr;
      fields = document.querySelectorAll(
        DOMStrings.inputDescription + ", " + DOMStrings.inputValue
      );
      // It returns a list, so we must change the list to array to deal with it easily
      fieldsArr = Array.prototype.slice.call(fields); // make a copy from fields to fieldsArr
      console.log(fieldsArr);
      fieldsArr.forEach(function (
        current,
        index,
        array /* array = fieldsArr*/
      ) {
        current.value = "";
      });
      fieldsArr[0].focus(); // inputDescription
    },

    displayBudget: function (obj) {
      var type;
      obj.budget > 0 ? (type = "inc") : (type = "exp");
      document.querySelector(DOMStrings.budgetLabel).textContent = formatNumber(
        obj.budget,
        type
      );
      document.querySelector(DOMStrings.incomeLabel).textContent = formatNumber(
        obj.totalInc,
        "inc"
      );
      document.querySelector(
        DOMStrings.expensesLabel
      ).textContent = formatNumber(obj.totalExp, "exp");

      if (obj.percentage > 0) {
        document.querySelector(DOMStrings.percentageLabel).textContent =
          obj.percentage + "%";
      } else {
        document.querySelector(DOMStrings.percentageLabel).textContent = "----";
      }
    },

    displayPercentages: function (percentages) {
      var fields = document.querySelectorAll(
        DOMStrings.expensesPercentageLabel
      ); // returns a nodeList

      nodeListForEach(fields, function (current, index) {
        if (percentages[index] > 0) {
          current.textContent = percentages[index] + "%";
        } else {
          current.textContent = "---";
        }
      });
    },

    displayMonth: function () {
      var now, months, month, year;

      now = new Date();
      months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ];
      month = now.getMonth();
      year = now.getFullYear();
      document.querySelector(DOMStrings.dateLabel).textContent =
        months[month] + " " + year;
    },

    changeType: function () {
      var fields = document.querySelectorAll(
        DOMStrings.inputType +
          "," +
          DOMStrings.inputDescription +
          "," +
          DOMStrings.inputValue
      );
      nodeListForEach(fields, function (current, index) {
        current.classList.toggle("red-focus");
      });
      document.querySelector(DOMStrings.inputBtn).classList.toggle("red");
    },

    getDOMStrings: function () {
      return DOMStrings;
    },
  };
})();






// Global App Controller
var controller = (function (
  budgetCtrl,
  UICtrl // Module 3
) {
  var setupEventListeners = function () {
    var DOM = UICtrl.getDOMStrings();

    document.querySelector(DOM.inputBtn).addEventListener("click", ctrlAddItem);

    document.addEventListener("keypress", function (event) {
      if (event.keyCode == 13 || event.which == 13) {
        // Key code: http://keycodes.atjayjo.com/#charcode
        ctrlAddItem();
      }
    });

    document
      .querySelector(DOM.container)
      .addEventListener("click", ctrlDeleteItem);

    document
      .querySelector(DOM.inputType)
      .addEventListener("change", UICtrl.changeType);
  };

  var updateBudget = function () {
    // 1. Calculate budget
    budgetCtrl.calculateBudget();
    // 2.  Calculate the budget
    var budget = budgetCtrl.getBudget();
    // 3. Display the budget in the UI
    UICtrl.displayBudget(budget);
  };

  var updatePercentages = function () {
    // 1. Calaulate percentages
    budgetCtrl.calculatePercentages();

    // 2. Read percentages from the budget controller
    var percentages = budgetCtrl.getPercentages();

    // 3. Update the UI with the new percentages
    UICtrl.displayPercentages(percentages);
  };

  var ctrlAddItem = function () {
    var input, newItem;
    // 1. Get the field input data
    input = UICtrl.getInput();
    if (input.description != "" && input.value > 0 && !isNaN(input.value)) {
      //Nan : not a number
      // 2.Add the item to the budget controller
      newItem = budgetCtrl.addItem(input.type, input.description, input.value);

      // 3. Add the item to the UI
      UICtrl.addItemList(newItem, input.type);

      // 4. Clear fields
      UICtrl.clearFields();

      // 5. Calculate and update budget
      updateBudget();

      // 6. Calculate and update percentages
      updatePercentages();
    }
  };

  // Event delegation video: 18
  var ctrlDeleteItem = function (event) {
    var itemID, splitID, type, ID;
    itemID = event.target.parentNode.parentNode.parentNode.parentNode.id;
    // console.log(itemID); // inc-0 or exp-0 (0 is the number of the item(changable))
    if (itemID) {
      splitID = itemID.split("-");
      type = splitID[0];
      ID = parseInt(splitID[1]);
      // console.log(type, ID);

      // 1. Delete the item from the data structure
      budgetCtrl.deleteItem(type, ID);

      // 2. Delete the item from the UI
      UICtrl.deleteListItem(itemID);

      // 3. Update and show the new budget
      updateBudget();

      // 4. Calculate and update percentages
      updatePercentages();
    }
  };

  return {
    init: function () {
      console.log("Application has started");
      UICtrl.displayMonth();
      UICtrl.displayBudget({
        budget: 0, //  these attributes are from BudgetController, getBudget function
        totalInc: 0,
        totalExp: 0,
        percentage: -1,
      });
      setupEventListeners();
    },
  };
})(budgetController, UIController); // we will pass the other 2 controllers so that this controller knows about them

controller.init();
