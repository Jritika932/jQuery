// Create an ajax call, by using this api "https://jsonplaceholder.typicode.com/todos/12" and print the title as the heading of the page
$("#btn").click(function(){
    $.ajax({
        url:"https://jsonplaceholder.typicode.com/posts/2",
        type: "GET",
        success: function(data){
            console.log(data);
            document.getElementsByTagName("h1")[0].innerText = data.title;
        },
    });
});