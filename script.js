const goods = [
    { title: 'Shirt', price: 150 },
    { title: 'Socks', price: 50 },
    { title: 'Jacket', price: 350 },
    { title: 'Shoes', price: 250 },
];

class GoodsItem {
    constructor({ title = ' ', price = 0 }) {
        this.title = title;
        this.price = price;
    }
    render() {
        return `
      <div class="goods-item">
        <h3>${this.title}</h3>
        <p>${this.price}</p>
      </div>
    `;
    }
}
class GoodsList {
    item = []
    fetchGoods() {
        this.items = goods;
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
        const goods = this.items.map(item => {
            const goodItem = new GoodsItem(item);
            return goodItem.render()
        }).join('');
        document.querySelector('.goods-list').innerHTML = goods;
    }
}

const goodsList = new GoodsList();
goodsList.fetchGoods();
//goodsList.getCount();
goodsList.render();