let leaveCommits = false; // Set to true if the top blue bar wth latest commit doesn't display correctly.

function normalgithub_run() {
    console.log("Thanks for using normal-github extension ♥")
    if(document.getElementById("normalgithub-stats") !== null) {
        document.body.removeChild(document.getElementById("normalgithub-stats"))
    }
    if(document.getElementsByClassName("css-truncate css-truncate-overflow text-gray").length !== 0) {
        function tryChange() {
            document.getElementsByClassName("list-style-none d-flex")
            let a = document.getElementsByClassName("css-truncate css-truncate-overflow text-gray")[0].getElementsByTagName("a")[0]
            let author = a.outerHTML;
            a.innerHTML = a.innerHTML.replace(a.innerHTML, "").replace("committed", "")
            document.getElementsByClassName("pl-5 mt-2 flex-order-1 width-full")[0].innerHTML = author + document.getElementsByClassName("pl-5 mt-2 flex-order-1 width-full")[0].innerHTML
            for(let el of document.getElementsByClassName("pl-5 mt-2 flex-order-1 width-full")[0].getElementsByTagName("a")) {
                el.style.position = "relative"
                el.style.top = "-29.5px"
                el.style.backgroundColor = "#f1f8fe"
            }
        }
        setTimeout(function() {
            try {
                if(leaveCommits == false) { 
                    tryChange();
                }
            }
            catch(error) {console.error(error)}
        }, 1000)
    }
    let set1024px = ["container-xl", "js-check-all-container", "flex-shrink-0 col-12 col-md-9 mb-4 mb-md-0", "footer"]
    set1024px.forEach(function(el) {
        try {
            document.getElementsByClassName(el)[0].style.width = "1024px"
        }
        catch(error){}
    })
    for(let jaktowidzisztonieglosujnapisdzieki of document.getElementsByClassName("btn")) {
        jaktowidzisztonieglosujnapisdzieki.style.borderRadius = "2px"
        if(jaktowidzisztonieglosujnapisdzieki.innerHTML.includes("Clone") == false) {
            // standard button
            jaktowidzisztonieglosujnapisdzieki.style.borderColor = "#c4c8cc"
            jaktowidzisztonieglosujnapisdzieki.style.background = "linear-gradient(to bottom, #fafbfc, #f0f3f6)"
            jaktowidzisztonieglosujnapisdzieki.style.backgroundColor = ""
            jaktowidzisztonieglosujnapisdzieki.style.color = "black"
        } else {
            // clone or download button
            if(jaktowidzisztonieglosujnapisdzieki.innerHTML.includes("Clone or download") == true) return;
            jaktowidzisztonieglosujnapisdzieki.innerHTML = jaktowidzisztonieglosujnapisdzieki.innerHTML.replace("Clone", "Clone or download")
            jaktowidzisztonieglosujnapisdzieki.style.borderColor = "#37aa51"
            jaktowidzisztonieglosujnapisdzieki.style.background = "linear-gradient(to bottom, #3dc95c, #31a84b)"
            jaktowidzisztonieglosujnapisdzieki.style.backgroundColor = ""
        }
    }
    for(let hi of document.getElementsByClassName("Box")) {
        hi.style.borderRadius = "2px"
    }
    let css = document.createElement("style")
    css.innerHTML = `.UnderlineNav-item.selected, .UnderlineNav-item[aria-current]:not([aria-current=false]) {background-color: white !important;border-color: transparent !important;border: 1px #e1e4e8 solid !important;border-top: 3px #e16227 solid !important;border-bottom-color: transparent !important;}.avatar-user{border-radius: 2.5px !important;}nav[aria-label="User profile"]{margin-left: 170px !important;}rect{border-radius: 0px !important}.new-user-avatar-cta{margin-top: 10px;border-radius: 2px;}.social-count{border-radius: 2px;}.octicon-kebab-horizontal{/*kebab mmmm*/display: none;}.octicon-download{display: none;}.octicon-pencil{fill: black;}.news{width: calc(100% - 400px);}a[href="/new"] {color: black !important;}a[href="/new"] svg {fill: black !important;}.dropdown-menu{border-radius: 2px !important;}.repository-content {width: 990px;margin-top: 90px;position: absolute;top: initial;left: 50%;transform: translateX(-50%);margin-bottom: 150px}.flash-full{display: none;}.repohead h1 {max-height: 32px;}.State {border-radius: 2px;}#blob-more-options-details{display: none;}.Box-header{padding: 9px 16px;height: 40px;}.Box-row {border-bottom: rgb(200,200,200) 1px solid;}.Box-row:last-of-type {border-bottom: none !important;}.btn-mktg{border-radius: 2px !important;}.day{rx: 0px !important;ry: 0px !important;}.css-truncate.css-truncate-overflow.text-gray{position: absolute;right: 10px;background-color: #f1f8fe !important;}.pl-5.mt-2.flex-order-1.width-full{display: block !important;height: 0px !important;}.pl-5.mt-2.flex-order-1.width-full pre {visibility: hidden !important;.ellipsis-expander.js-details-target{display: none !important;}.hidden-text-expander.d-inline-block {visibility: hidden !important;}`
    if(window.innerWidth <= 1325) {
        css.innerHTML += `aside[aria-label="Explore"]{visibility: hidden;}`
    }
    document.body.appendChild(css)
    try {
        let rh = document.getElementsByClassName("repohead")[0]
        let diff = window.innerWidth - 1024
        rh.style.paddingLeft = diff / 2 + "px";
        rh.style.paddingRight = diff / 2 + "px";
        css.innerHTML += ".repohead{padding-left: " + diff / 2 + "px;padding-right: " + diff / 2 + "px;}"
    }
    catch(error){
        console.error("Normal GitHub error: " + error)
    }
    try {
        document.getElementsByClassName("flex-order-1 flex-md-order-none mt-2 mt-md-0")[0].style.display = "none"
    }
    catch(error){}
    for(let i of document.getElementsByClassName("sr-only")) {
        if(i.innerHTML == "Git stats") {
            
            try {
                // it's a repository page
                // bring back stats on the top
                let lgs = document.getElementsByClassName("Progress")[1].cloneNode(true)
                let d = document.createElement("div")
                d.style.width = "990px"
                d.id = "normalgithub-stats"
                d.style.border = "1px #c4c8cc solid"
                d.innerHTML = i.parentNode.innerHTML;
                d.style.position = "absolute"
                document.body.appendChild(d)
                d.style.left = "50%"
                d.style.transform = "translateX(-50%)"
                d.style.top = "230px"
                d.style.paddingTop = "15px"
                d.style.paddingBottom = "5px"
                
                d.appendChild(lgs)
                lgs.style.width = "989px"
                lgs.style.borderRadius = "0px"
                lgs.style.position = "relative"
                lgs.style.top = "5px"
                let leftpx = 10
                for(let a of d.getElementsByTagName("a")) {
                    a.style.position = "relative"
                    a.style.top = "-5px"
                    a.style.left = leftpx + "px"
                    leftpx += 320
                }
                i.parentNode.style.display = "none"
            }
            catch(error){//css.innerHTML += ".repository-content {margin-top: 20px !important;}"
        }
            break;
        }
    }
    document.getElementsByClassName("footer")[0].style.display = "none"
    try {
        document.getElementsByClassName("flex-shrink-0 col-12 col-md-3")[0].style.display = "none"
        document.getElementsByClassName("details-overlay details-reset position-relative")[0].style.display = "none"
        let desc = document.getElementsByClassName("f4 mt-3")[0].innerHTML
        let del = document.createElement("p")
        del.style.position = "absolute"
        del.style.top = "175px";
        del.style.left = "50%";
        del.style.width = "990px"
        del.innerHTML = desc;
        document.body.appendChild(del)
        del.style.transform = "translateX(-50%)";
        let tpcs = document.getElementsByClassName("list-topics-container")[0].cloneNode(true)
        tpcs.style.position = "absolute"
        tpcs.style.top = "200px"
        tpcs.style.left = "50%"
        tpcs.style.width = "990px"
        tpcs.style.height = "28px";
        tpcs.style.overflowY = "hidden"
        tpcs.style.transform = "translateX(-50%)"
        for(let i of tpcs.getElementsByTagName("a")) {
            i.style.borderRadius = "2px"
        }
        document.body.appendChild(tpcs)
    }
    catch(error){//css.innerHTML += ".repository-content {margin-top: 20px !important;}"
    }
}


let oldurl = window.location.pathname
// github uses this weird thing like youtube which doesn't load the new page entirely when you click on a link
let urlchange = setInterval(function() {
    if(window.location.pathname !== oldurl) {
        setTimeout(function() {
            window.location = window.location.pathname;
        }, 10)
    }
    oldurl = window.location.pathname
}, 1000)

normalgithub_run();
