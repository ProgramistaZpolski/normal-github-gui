function normalgithub_run() {
    setTimeout(function() {
        if(document.getElementsByClassName("css-truncate css-truncate-overflow text-gray").length !== 0) {
            let a = document.getElementsByClassName("css-truncate css-truncate-overflow text-gray")[0].getElementsByTagName("a")[0];
            
            let author = a.outerHTML;
            a.innerHTML = a.innerHTML.replace(a.innerHTML, "").replace("committed", "")
            document.getElementsByClassName("pl-5 mt-2 flex-order-1 width-full")[0].innerHTML = author + document.getElementsByClassName("pl-5 mt-2 flex-order-1 width-full")[0].innerHTML
            for(let el of document.getElementsByClassName("pl-5 mt-2 flex-order-1 width-full")[0].getElementsByTagName("a")) {
                el.style.position = "relative"
                el.style.top = "-29.5px"
                el.style.backgroundColor = "#f1f8fe"
            }
            let de;
            for(let det of document.getElementsByTagName("details-dialog")) {
                if(det.getAttribute("aria-label") == "Edit repository details") {
                    de = det;
                    det.style.visibility = "hidden"
                    document.body.appendChild(det)
                    for(let btn of det.getElementsByTagName("button")) {
                        if(btn.innerHTML == "Cancel") {
                            btn.onclick = function() {
                                det.style.visibility = "hidden"
                            }
                        }
                    }
                    det.getElementsByTagName("button")[0].onclick = function() {
                        det.style.visibility = "hidden"
                    }
                    break;
                }
            }
            for(let svg of document.getElementsByTagName("svg")) {
                if(svg.getAttribute("aria-label") == "Edit repository metadata") {
                    // found a edit button!
                    let a = svg.parentNode.parentNode.cloneNode(true);
                    a.onclick = function() {
                        de.style.visibility = "visible"
                    }
                    a.innerHTML = "Edit"
                    a.style.cursor = "pointer"
                    a.style.position = "relative"
                    a.style.top = "-40px"
                    a.style.right = "9px"
                    a.style.padding = "5px 9px"
                    a.style.background = "linear-gradient(to bottom, #fafbfc, #f0f3f6)"
                    a.style.border = "1px #c4c8cc solid"
                    a.style.borderRadius = "2px"
                    document.getElementsByClassName("repohead")[0].appendChild(a)

                    break;
                }
            }
            
        }
    }, 1250)
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
    css.innerHTML = `.UnderlineNav-item.selected, .UnderlineNav-item[aria-current]:not([aria-current=false]) {background-color: white !important;border-color: transparent !important;border: 1px #e1e4e8 solid !important;border-top: 3px #e16227 solid !important;border-bottom-color: transparent !important;}.avatar-user{border-radius: 2.5px !important;}nav[aria-label="User profile"]{margin-left: 170px !important;}rect{border-radius: 0px !important}.new-user-avatar-cta{margin-top: 10px;border-radius: 2px;}.social-count{border-radius: 2px;}.octicon-kebab-horizontal{/*kebab mmmm*/display: none;}.octicon-download{display: none;}.octicon-pencil{fill: black;}.news{width: calc(100% - 400px);}a[href="/new"] {color: black !important;}a[href="/new"] svg {fill: black !important;}.dropdown-menu{border-radius: 2px !important;}.repository-content {width: 990px;margin-top: 100px;position: absolute;top: initial;left: 50%;transform: translateX(-50%);margin-bottom: 150px}.repohead h1 {max-height: 32px;}.State {border-radius: 2px;}#blob-more-options-details{display: none;}.Box-header{padding: 9px 16px;height: 40px;}.Box-row {border-bottom: rgb(200,200,200) 1px solid;}.Box-row:last-of-type {border-bottom: none !important;}.btn-mktg{border-radius: 2px !important;}.day{rx: 0px !important;ry: 0px !important;}.css-truncate.css-truncate-overflow.text-gray{position: absolute;right: 10px;background-color: #f1f8fe !important;}.pl-5.mt-2.flex-order-1.width-full{display: block !important;height: 0px !important;}.pl-5.mt-2.flex-order-1.width-full pre {visibility: hidden !important;.ellipsis-expander.js-details-target{display: none !important;}.hidden-text-expander.d-inline-block {visibility: hidden !important;}`
    if(window.innerWidth <= 1325) {
        css.innerHTML += `aside[aria-label="Explore"]{visibility: hidden;}`
    }
    document.body.appendChild(css)
    try {
        let rh = document.getElementsByClassName("repohead")[0]
        let diff = window.innerWidth - 1024
        rh.style.paddingLeft = diff / 2 + "px";
        rh.style.paddingRight = diff / 2 + "px";
        rh.style.maxHeight = "114.25px"
        css.innerHTML += ".repohead{padding-left: " + diff / 2 + "px;padding-right: " + diff / 2 + "px;max-height: 113.25px !important;}"
    }
    catch(error){}
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
                d.style.position = "relative"
                document.getElementsByClassName("repohead")[0].appendChild(d)
                d.style.left = "50%"
                d.style.marginLeft = "0px"
                d.style.transform = "translateX(-50%)"
                d.style.top = "70px"
                d.style.paddingTop = "15px"
                d.style.paddingBottom = "5px"
                
                d.appendChild(lgs)
                lgs.style.width = "989px"
                lgs.style.borderRadius = "0px"
                lgs.style.position = "relative"
                for(let mtl of document.getElementsByClassName("muted-link")) {
                    if(mtl.href.includes("#readme") == true || mtl.href.includes("/LICENSE") == true) {
                        if(mtl.innerHTML.includes("License") == true) {
                            mtl.innerHTML = mtl.innerHTML.split("License")[0]
                        }
                        d.getElementsByClassName("list-style-none d-flex")[0].appendChild(mtl)
                    }
                }
                let addNumber = 120
                let a_els = d.getElementsByClassName("list-style-none d-flex")[0].getElementsByTagName("a")
                a_els[a_els.length - 1].parentNode.removeChild(a_els[a_els.length - 1])
                a_els = d.getElementsByClassName("list-style-none d-flex")[0].getElementsByTagName("a");
                if(a_els.length == 3) addNumber = 320
                lgs.style.top = "5px"
                let leftpx = 10
                for(let a of d.getElementsByTagName("a")) {
                    a.style.position = "relative"
                    a.style.top = "-5px"
                    a.style.left = leftpx + "px"
                    leftpx += addNumber
                }
                i.parentNode.style.display = "none"
            }
            catch(error){}
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
        del.id = "description"
        del.style.top = "120px";
        del.style.left = "calc(50% - 20px)";
        del.style.width = "950px"
        if(desc.length > 140) {
            let full = ""
            full = desc
            desc = desc.substring(1,140) + "..."
            del.onclick = function() {
                alert(full);
            }
        }
        del.innerHTML = desc;
        document.getElementsByClassName("repohead")[0].appendChild(del)
        del.style.transform = "translateX(-50%)";
        let tpcs;
        if(document.getElementsByClassName("list-topics-container").length !== 0) {
            tpcs = document.getElementsByClassName("list-topics-container")[0].cloneNode(true)
            tpcs.style.position = "absolute"
            tpcs.id += "normalgithub-topics"
            tpcs.style.top = "155px"
            tpcs.style.left = "50%"
            tpcs.style.width = "990px"
            tpcs.style.height = "28px";
            tpcs.style.overflowY = "hidden"
            tpcs.style.transform = "translateX(-50%)"
            for(let i of tpcs.getElementsByTagName("a")) {
                i.style.borderRadius = "2px"
            }
            document.getElementsByClassName("repohead")[0].appendChild(tpcs)
        }
        
        
        
        if(document.body.innerHTML.includes("forked from") == true || document.body.innerHTML.includes("mirrored from") == true) {
            // apply patches for forked repositories
            document.getElementsByClassName("flex-shrink-0 col-12 col-md-9 mb-4 mb-md-0")[0].style.marginTop = "10px"
            document.getElementsByClassName("repohead")[0].style.maxHeight = "126.25px"
            del.style.marginTop = "10px"
            if(document.getElementsByClassName("list-topics-container").length !== 0) tpcs.style.marginTop = "10px"
        }
        
    }
    catch(error){}
    // navigation fix(?)
    setTimeout(function() {
        try {
            for(let a of document.getElementsByTagName("a")) {
                let atts = ["data-selected-links", "data-ga-click", "data-tab-item", "data-hydro-click", "data-hydro-click-hmac"]
                atts.forEach(function(attr) {
                    a.removeAttribute(attr)
                })
                let classNames = ["js-selected-navigation-item", "js-responsive-underlinenav-item", "hx_underlinenav-item", "no-wrap"]
                classNames.forEach(function(cls) {
                    if(a.className !== null && a.className !== "")
                    a.className = a.className.replace(cls, "")
                })
                a.addEventListener("click", function (event) {
                    event.stopPropagation();
                }, true);
            }
        }
        catch(error){}
    }, 500)
    console.log("Thanks for using normal-github extension ♥")
}


normalgithub_run();
