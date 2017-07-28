<template lang="pug">
.container
    .addList
        h3 新增單筆:
        p(v-html="status")
        label(for="name") 名稱
        input(id="name" v-model="name")
        label(for="price") 單價
        input(id="price" v-model="price")
        label(for="qty") 數量
        input(id="qty" v-model="qty")
        button(@click="addList") 新增
        .allList
            h3 購物清單:
            table
                thead
                    tr
                        th 名稱
                        th 單價
                        th 數量
                tbody
                    tr(v-for="(p,i) in products")
                        td {{p.name}}
                        td {{p.price}}
                        td {{p.qty}}
                        td
                            button(@click="deleteProduct(i)") 刪除
    .totlePrice
    h3 總價: {{totalPrice}}
</template>
<script>
    export default {
        data(){
           return {
               products:  [{
                    name: "蘋果",
                    price: 30,
                    qty: 3
                  },
                  {
                    name: "水蜜桃",
                    price: 15,
                    qty: 2
                  },
                  {
                    name: "芒果",
                    price: 35,
                    qty: 1
                  }],
                name: "",
                qty: "",
                price: "",
                status: ""
               
                  }
        },
        methods:{
            addList(){
              this.status = "";
              if(this.name == "" || this.qty == "" || this.price ==""){
                this.status = "請不要空白"
              }
              if(isNaN(this.qty) == true){
                this.status += "<span>數量請輸入數字</span>"
              }
              if(isNaN(this.price) == true){
                this.status += "<span>單價請輸入數字</span>"
              }
              if(this.name != "" && this.qty != "" && this.price !="" && isNaN(this.qty) == false && isNaN(this.price) == false  ){
                var addList = {
                name: this.name,
                qty: this.qty,
                price: this.price
              }
              this.products.push(addList);
                this.name = "";
                this.qty = "";
                this.price = "";
              }
                
            },
            deleteProduct(id){
                this.products.splice(id,1);
                }
            },
            computed:{
                totalPrice(){
                  var total = 0
                  this.products.forEach((p,i)=>{
                    total += p.qty*p.price
                  })
                  return total
                }
        }
    }
</script>   
<style lang="sass">
.addList
  span
    margin-left: 10px
  input
    padding: 5px
    margin: 10px
    width: 60px
  button
    background-color: #222
    border: 1px solid #000
    padding: 8px 30px
    margin-left: 10px
    border-radius: 8px
    color: #eee
  
.allList
  table
    text-align: center
    button
      background-color: #222
      padding: 5px 30px
      margin-left: -10px
      border-radius: 8px
      color: #eee
    thead
      background-color: #222
      color: #ddd
      th
        padding: 7px 30px
    tbody
      td
        padding: 5px 30px
        border: 1px solid #000
        &:nth-child(4)
          border: none
      


</style>