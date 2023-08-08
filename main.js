let str=""
$.ajax({
    url:"https://jsonplaceholder.typicode.com/posts",
    method:"get",
    type:"json",
    data:{},
    success:function (getdata){
        getdata.map(function (elem){
            str+=`
            <div>
            <h1>${elem.userId}</h1>
            <h2>${elem.id}</h2>
            <p>${elem.title}</p>
            <h3>${elem.body}</h3>
            <hr class="redclass">
</div>
            `
        })
        $("#root").html(str)
    }
})