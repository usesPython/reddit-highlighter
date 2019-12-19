var curtime = document.cookie.replace(/(?:(?:^|.*;\s*)highlighter_timestamp\s*\=\s*([^;]*).*$)|^.*$/, "$1");
if (curtime == ""){
    document.cookie = "highlighter_timestamp="+new Date();
} else {
    document.cookie = "highlighter_timestamp="+new Date();
    curtime = new Date(curtime);
    var comment_links = document.getElementsByClassName("comment");
    var entry_list = [];
    var i;
    for (i = 0; i < comment_links.length; i++){
        entry_list.push(comment_links[i].querySelector("div.entry"));
    }
    for (i = 0; i < entry_list.length; i++){
        timestamp = new Date(entry_list[i].querySelector("time.live-timestamp").getAttribute("datetime"));
        if(timestamp > curtime){
            entry_list[i].style.backgroundColor = "#fffdcc";
        }
    }
}