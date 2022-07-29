var library=[
    {
        title: "kitap1",
        author: "yazar1",
        status: true
    },
    {
        title: "kitap2",
        author: "yazar2",
        status: true
    },
    {
        title: "kitap3",
        author: "yazar3",
        status: false
    }
];

for(var i=0;i<library.length;i++){
    var book=library[i].title+", Yazarı: "+library[i].author;
    
    if(library[i].status){
        console.log(book+", Okundu.");
    }
    else{
        console.log(book+", Okunmadı.")
    }
}