function normalgithub_run() {
    if(document.getElementById("normalgithub-stats") !== null) {
        document.body.removeChild(document.getElementById("normalgithub-stats"))
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
    css.innerHTML = `.UnderlineNav-item.selected, .UnderlineNav-item[aria-current]:not([aria-current=false]) {background-color: white !important;border-color: transparent !important;border-top: 3px #e16227 solid !important;}.avatar-user{border-radius: 5px !important;}nav[aria-label="User profile"]{margin-left: 170px !important;}rect{border-radius: 0px !important}.new-user-avatar-cta{margin-top: 10px;border-radius: 2px;}.social-count{border-radius: 2px;}.octicon-kebab-horizontal{/*kebab mmmm*/display: none;}.octicon-download{display: none;}.octicon-pencil{fill: black;}.news{width: calc(100% - 400px);}a[href="/new"] {color: black !important;}a[href="/new"] svg {fill: black !important;}.dropdown-menu{border-radius: 2px !important;}.repository-content {width: 990px;margin-top: 90px;position: absolute;top: initial;left: 50%;transform: translateX(-50%);margin-bottom: 150px}.flash-full{display: none;}`
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
                let leftpx = 20
                for(let a of d.getElementsByTagName("a")) {
                    a.style.position = "relative"
                    a.style.top = "-5px"
                    a.style.left = leftpx + "px"
                    leftpx += 320
                }
                i.parentNode.style.display = "none"
            }
            catch(error){css.innerHTML = css.innerHTML.replace("margin-top: 90px;", "")}
            break;
        }
    }
    document.getElementsByClassName("footer")[0].style.display = "none"
    try {
        setTimeout(function() {
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
        }, 10)
    }
    catch(error){}
}


let oldurl = window.location.pathname
// github uses this weird thing like youtube which doesn't load the new page entirely when you click on a link
let urlchange = setInterval(function() {
    if(window.location.pathname !== oldurl) {
        setTimeout(function() {
            location.reload();
        }, 10)
    }
    oldurl = window.location.pathname
}, 1000)

normalgithub_run();
