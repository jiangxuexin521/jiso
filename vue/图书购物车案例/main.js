const app = new Vue({
    el:"#app",
    data:{
        books:[
            {
                id:1,
                name:'《算法导论》',
                data:'2006-9',
                price:85.00,
                count:1
            },
            {
                id:2,
                name:'《UNIX编程艺术》',
                data:'2006-2',
                price:59.00,
                count:1

            },
            {
                id:3,
                name:'《编程珠玑》',
                data:'2008-10',
                price:39.00,
                count:1,
            },
            {
                id:4,
                name:'《代码大全》',
                data:'2006-3',
                price:128.00,
                count:1
            }
        ]  
    },
    methods:{
    //     increment(index){
    //         // console.log('increment',index);
    //         this.books[index].count++
    //     },
    //     decrement(index){
    //         // console.log('drement',index);
    //         this.books[]
    //     },
    //     removeHandle(index){
    //         this.books.splice()
    //     }
    // },
    // let totalPrice = 0
    // for (let obj of this.books){
    //     totalPrice +=obj.price*obj.count
    // }
    // return totalPrice
},
    filters:{
        showPrice(price){
            retun'￥' + price.toFixed(2)
        }
    }
})