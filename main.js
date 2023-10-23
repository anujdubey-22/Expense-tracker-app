

function savetolocalstorage(event){
    event.preventDefault();
    

    var amount=document.getElementById('Expenseamount').value;
    var description = document.getElementById('Description').value;
    var category = document.getElementById('Category').value;
    console.log(amount,description,category)

    var obj={
        amount:amount,
        description:description,
        category:category    
    };

    var list = document.getElementById('list');

    var li = document.createElement('li');
    var btn = document.createElement('button');
    var edit = document.createElement('button');

    btn.id='button';
    btn.appendChild(document.createTextNode('DeleteExpense'));
    edit.appendChild(document.createTextNode('EditExpense'));

    

    li.appendChild(document.createTextNode(`${amount} - ${description} - ${category}`));
    li.appendChild(btn)
    li.appendChild(edit)
    list.appendChild(li)
    console.log(li)

    var objString=JSON.stringify(obj);

    localStorage.setItem(description,objString);

    
    btn.addEventListener('click',clicked);

    function clicked(e){
        console.log('hi',obj,e.target)
        var li = e.target.parentElement;
        list.removeChild(li);
        
        localStorage.removeItem(obj.description);

    }


    edit.addEventListener('click',edited);

    function edited(e){
        //console.log('hi',obj,e.target)
        var li = e.target.parentElement;
        //console.log(li)
        list.removeChild(li);
        
        localStorage.removeItem(obj.description);

        document.getElementById('Expenseamount').value=obj.amount
        document.getElementById('Description').value=obj.description
        document.getElementById('Category').value=obj.category
        
        //console.log(name)
    }
    



}