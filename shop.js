const goods = {
    1: {
        id: 1,
        'name': 'Сапоги',
        description: 'Модные, классные',
        sizes: [40, 41, 42, 43, 44],
        price: 12000,
        available: true,
    },
    2: {
        id: 2,
        'name': 'Кроссы',
        description: 'На колёсиках',
        sizes: [40, 41, 42, 43, 44],
        price: 19000,
        available: false,
    },
    3: {
        id: 3,
        'name': 'Унты',
        description: 'Тепло зимой, жарко летом',
        sizes: [40, 41, 42, 43, 44],
        price: 35000,
        available: true,
    },
    4: {
        id: 4,
        'name': 'Найки',
        description: 'Не палённые',
        sizes: [40, 41, 42, 43, 44],
        price: 5000,
        available: false,
    },
    5: {
        id: 5,
        'name': 'Туфли',
        description: 'На высоком каблуке',
        sizes: [40, 41, 42, 43, 44],
        price: 50,
        available: true,
    },

}

const basket = [
    {
        goodId: 3,
        amount: 1,
    },
    {
        goodId: 1,
        amount: 3,
    },
]

function addBasket(goodChoose, amountGood) {
    if (!goods[goodChoose]) {
        return console.log('Такого товара нет в каталоге');
    }
    let good = {};
    good.goodId = goodChoose;
    good.amount = amountGood;
    basket.push(good);
}

function deleteGood(goodChoose) {
    for (i = 0; i <= basket.length - 1; i++) {
        if (basket[i].goodId == goodChoose) {
            return basket.splice(i, 1);
        }
    }
    return console.log('Такого товара нет в корзине');
}

function deleteAll() {
    return basket.splice(0, basket.length);
}

function totalBasket() {
    let totalResult = {};
    totalResult.totalAmount = 0;
    totalResult.totalSumm = 0;
    for (i = 0; i <= basket.length - 1; i++) {
        totalResult.totalAmount += basket[i].amount;
        totalResult.totalSumm += goods[basket[i].goodId].price * basket[i].amount;
    }
    return totalResult
}

addBasket(4, 2);
deleteGood(3);
deleteAll();
addBasket(5, 20);
addBasket(1, 2);
addBasket(2, 1);
console.log(totalBasket());