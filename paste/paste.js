const inputBox = document.getElementById("input-box")

// listener for page load
// inserts the content from the text url, if present, into the text area
document.addEventListener("DOMContentLoaded",function(){
    // gets parameters
    var query = window.location.search.substring(1)
    if (query.indexOf("text") != -1){
        var currentUrl = new URL(window.location.href)
        inputBox.value = atob(currentUrl.searchParams.get("text"))
    }
    else {
        console.log("no text parameter found")
    }
})

// listener for change
inputBox.addEventListener("keyup", handleTextChange)

function handleTextChange(){
    var query = window.location.search.substring(1)
    
    // if text parameter not present, add into the parameter
    if (query.indexOf("text") === -1){
        window.history.replaceState(null, null, "?text=");
    }

    // gets current text contents and 
    var textContents = inputBox.value

    //gets current url, edits the text parameter and pushes the new state
    var url = new URL(window.location.href)
    url.searchParams.set("text",btoa(textContents))
    history.pushState({}, null, url);


}