document.getElementById('btn-calculate').addEventListener('click',function(){
    const foodPriceField = document.getElementById('food-price-field');
    const foodPrice = parseFloat(foodPriceField.value);

    const rentField = document.getElementById('rent-field');
    const rent = parseFloat(rentField.value);

    const clothesPriceField = document.getElementById('clothes-price-field');
    const clothesPrice = parseFloat(clothesPriceField.value);

    const totalExpenseField = document.getElementById('total-expense-field');
    const totalExpense = parseFloat(totalExpenseField.value);

    const total = foodPrice + rent + clothesPrice;
    totalExpenseField.value = total;
})