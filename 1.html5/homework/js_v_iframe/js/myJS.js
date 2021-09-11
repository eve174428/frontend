function changeContent(file) {
switch (file) {
    case 'home':
        document.getElementById("content").contentWindow.location.reload();
        document.getElementById("content").src ="home.html" ;
        document.title = "首頁";
        break;
    case 'about':
        document.getElementById("content").contentWindow.location.reload();
        document.getElementById("content").src ="about.html" ;
        document.title = "關於我";
        break;
    case 'contact':
        document.getElementById("content").contentWindow.location.reload();
        document.getElementById("content").src ="contact.html" ;
        document.title = "連絡我";
        break;
    case 'link':
        document.getElementById("content").contentWindow.location.reload();
        document.getElementById("content").src ="link.html" ;
        document.title = "好站連結";
        break;
    case 'suggestion':
        document.getElementById("content").contentWindow.location.reload();
        document.getElementById("content").src ="suggestion.html" ;
        document.title = "意見調查表";
        break;
    default:
    break;
}
}
