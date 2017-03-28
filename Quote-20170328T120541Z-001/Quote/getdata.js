function myFunction(arr) {
    
    var i;
    for(i = 0; i<arr.length; i++) {
    document.getElementById("q"+i).innerHTML = arr[i].quote;
}

}
    