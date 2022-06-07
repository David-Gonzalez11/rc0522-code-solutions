/* exported Account */
function Account(number, holder) {
  this.number = number;
  this.holder = holder;
  this.transactions = [];
}
Account.prototype.deposit = function (amount) {
  if (Number.isInteger(amount) && amount > 0) {
    this.transactions.push(new Transaction('deposit', amount));

    return true;
  } else {
    return false;
  }
};

Account.prototype.withdraw = function (amount) {
  if (Number.isInteger(amount) && amount > 0) {
    this.transactions.push(new Transaction('withdrawal', amount));
    return true;
  } else {
    return false;
  }
};

Account.prototype.getBalance = function () {
  if (this.transactions.length === 0) {
    return 0;
  } else {
    var totalDeposits = 0;
    var totalWithdrawls = 0;
    var depositArray = this.transactions.filter(transaction => transaction.type === 'deposit');
    var withdrawlArray = this.transactions.filter(transaction => transaction.type === 'withdrawal');
    for (var i = 0; i < depositArray.length; i++) {
      totalDeposits += depositArray[i].amount;
    }
    for (var x = 0; x < withdrawlArray.length; x++) {
      totalWithdrawls += withdrawlArray[x].amount;
    }
    return totalDeposits - totalWithdrawls;
  }
};
