const myForm = document.getElementById('shopform');
const item = document.getElementById('itemname');
const price = document.getElementById('price');
const quantity = document.getElementById('quantity');
const description = document.getElementById('description');
myForm.addEventListener('submit',(e)=>{
    e.preventDefault();
    var myobj = {
        item : document.getElementById('itemname').value,
        description : document.getElementById('description').value,
        price : document.getElementById('price').value,
        quantity : document.getElementById('quantity').value,
};
axios.post("https://crudcrud.com/api/84d6ed829d68487eabdbab612a358e0d/itemdetails",myobj)
.then(res=>showdetailsonscreen(res.data));
});
window.addEventListener("DOMContentLoaded",()=>{
    axios.get("https://crudcrud.com/api/84d6ed829d68487eabdbab612a358e0d/itemdetails")
    .then(res=>{
        for(var i=0;i<res.data.length;i++){
            showdetailsonscreen(res.data[i]);
        }
    })
})
function showdetailsonscreen(obj){
const cont = document.querySelector('.finalitems');
const li = document.createElement('li');
li.innerHTML = obj.item + '-' + obj.description + '-' + obj.price + '-' + obj.quantity;
const buy1 = document.createElement('button');
buy1.appendChild(document.createTextNode('BUY 1'));
const buy2 = document.createElement('button');
buy2.appendChild(document.createTextNode('BUY 2'));
const buy3 = document.createElement('button');
buy3.appendChild(document.createTextNode('BUY 3'));
const del = document.createElement('button');
del.appendChild(document.createTextNode('DELETE'));
const edit = document.createElement('button');
edit.appendChild(document.createTextNode('EDIT'));
li.appendChild(buy1);
li.appendChild(buy2);
li.appendChild(buy3);
li.appendChild(edit);
li.appendChild(del);
cont.appendChild(li);
buy1.onclick=()=>{
    buy1.style.backgroundColor = 'yellow';
    obj.quantity-=1;
    axios.put(`https://crudcrud.com/api/84d6ed829d68487eabdbab612a358e0d/itemdetails/${obj._id}`,{
    item : obj.item,
    description : obj.description,
    price : obj.price,
    quantity : obj.quantity
});
};
buy2.onclick=()=>{
    buy2.style.backgroundColor = 'yellow';
    obj.quantity -= 2;
    axios.put(`https://crudcrud.com/api/84d6ed829d68487eabdbab612a358e0d/itemdetails/${obj._id}`,{
        item : obj.item,
        description : obj.description,
        price : obj.price,
        quantity : obj.quantity
    });
}
buy3.onclick=()=>{
    buy3.style.backgroundColor = 'yellow';
    obj.quantity-=3;
    axios.put(`https://crudcrud.com/api/84d6ed829d68487eabdbab612a358e0d/itemdetails/${obj._id}`,{
    item : obj.item,
    description : obj.description,
    price : obj.price,
    quantity : obj.quantity
});
}
del.onclick=()=>{
    axios.delete(`https://crudcrud.com/api/84d6ed829d68487eabdbab612a358e0d/itemdetails/${obj._id}`);
    cont.removeChild(li);
}
edit.onclick=()=>{
document.getElementById('itemname').value = obj.item;
document.getElementById('description').value=obj.description;
document.getElementById('price').value = obj.price;
document.getElementById('quantity').value = obj.quantity;
    axios.delete(`https://crudcrud.com/api/84d6ed829d68487eabdbab612a358e0d/itemdetails/${obj._id}`);
    cont.removeChild(li);
}
document.getElementById('itemname').value = '';
document.getElementById('description').value='';
document.getElementById('price').value = '';
document.getElementById('quantity').value = '';


}