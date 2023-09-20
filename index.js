var customerName = "bob";
function upperCaseCustomerName (){
    customerName = customerName.toUpperCase();
}
function setBestCustomer(){
     bestCustomer = 'not bob';
    return bestCustomer;
}
function overwriteBestCustomer() {
    bestCustomer = "maybe bob"; 
}
const leastFavoriteCustomer = "Vick";
function  changeLeastFavoriteCustomer(){
    leastFavoriteCustomer = 'bob';
    return leastFavoriteCustomer;
  }