const goods = [
    { title: 'Shirt', price: 150 },
    { title: 'Socks', price: 50 },
    { title: 'Jacket', price: 350 },
    { title: 'Shoes', price: 250 },
];

class GoodsItem {
    constructor(title, price) {
        this.title = title;
        this.price = price;
    }
    render() {
        return `
        <div class="goods-item">
        <h3>${this.title}</h3>
        <p>${this.price}</p>
        </div>`;
    }
}

class GoodsList {
    constructor() {
        this.goods = [];
    }
    fetchGoods() {
        this.goods = [
            { title: 'Shirt', price: 150 },
            { title: 'Socks', price: 50 },
            { title: 'Jacket', price: 350 },
            { title: 'Shoes', price: 250 },
        ];
    }

    /*getCount() {
        let totalPrice = document.getElementById('goods-list__price');
        let sum = 0;
        this.goods.forEach(goods => {
            sum += goods.price
        });
        totalPrice.innerText = `Итого  ${sum} рублей`;
    }*/ // Я просто не понимаю из-за чего, при добавления данного метода, все перестает работать
    render() {
        let listHtml = '';
        this.goods.forEach(good => {
            const goodItem = new GoodsItem(good.title, good.price);
            listHtml += goodItem.render();
        });
        document.querySelector('.goods-list').innerHTML = listHtml;
    }
}

const list = new GoodsList();
list.fetchGoods();
list.render();
