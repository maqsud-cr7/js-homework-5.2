function receipt() {

    const arrayReceipt = [{
        'Lavash': {
            info: 'Big Cheese',
            price: 15000
        }, 'Hot-dog': {
            info: 'mini',
            price: 8500
        }, 'Cola': {
            info: '1.5 L',
            price: 9000
        }
    }, {
        'Milk': {
            info: '1 L',
            price: 8500
        },
        'Sugar': {
            info: '1 kg',
            price: 7000
        }
    }, {
        'Cola': {
            info: '1 L',
            price: 6500
        },
        'Fanta': {
            info: '1.5 L',
            price: 9000
        },
        'Lipton': {
            info: '1.2 L',
            price: 5000
        }, 
        'Nestle': {
            info: '10 L',
            price: 8500
        }
    }]
    const count = Math.floor(Math.random() * arrayReceipt.length)
    return arrayReceipt[count]
}

function randomNumbers(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

let productObj = receipt();
let order = ""  ;
let price = Number();
const delivery = 9000;
for (key in productObj) {
    for (keynum in productObj[key]) {
        if (keynum == "info")
        order += key + ": " + productObj[key][keynum] + ", ";
    }
}
for (key in productObj) {
    for (keynum in productObj[key]) {
        if (keynum == "price")
        price += productObj[key][keynum];
    }
}
alert("Вы заказали: " + order + " " + "\n" + "Общая стоимость заказа с доставкой: " +(price + delivery) + ", цена доставки: " + delivery + "\n" + "СПАСИБО ЗА ПОКУПКУ!"); 