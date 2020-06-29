function normalgithub_run() {
    if(document.getElementsByClassName("pl-5 mt-2 flex-order-1 width-full Details-content--hidden").length !== 0) document.getElementsByClassName("pl-5 mt-2 flex-order-1 width-full Details-content--hidden")[0].style.visibility = "hidden"
    
    setTimeout(function() {
        if(document.getElementsByClassName("css-truncate css-truncate-overflow text-gray").length !== 0) {
            for(let d of document.getElementsByClassName("user-mention")) {
                setTimeout(function() {
                    d.style.visibility = "hidden"
                    let e = document.createElement("a")
                    e.innerHTML = d.innerHTML
                    e.style.marginRight = "5px"
                    e.style.position = "relative"
                    e.href = window.location.pathname + "/commits?author=" + d.innerHTML
                    e.className = "commit-author tooltipped tooltipped-s user-mention"
                    document.getElementsByClassName("flex-1 d-flex flex-items-center ml-3 min-width-0")[0].appendChild(e)
                }, 10)
            }
            setTimeout(function() {
                let og = document.getElementsByClassName("pl-5 mt-2 flex-order-1 width-full Details-content--hidden")[0].getElementsByTagName("a")[0]
                og.parentNode.style.display = "none"
                let cp = document.getElementsByClassName("pl-5 mt-2 flex-order-1 width-full Details-content--hidden")[0].getElementsByTagName("a")[0].cloneNode(true)
                document.getElementsByClassName("flex-1 d-flex flex-items-center ml-3 min-width-0")[0].appendChild(cp)
            }, 100)

            
            //document.getElementsByClassName("pl-5 mt-2 flex-order-1 width-full Details-content--hidden")[0].style.visibility = ""
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
                    a.style.position = "relative"
                    a.style.cursor = "pointer"
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
            try {
                
                document.getElementsByClassName("css-truncate css-truncate-overflow text-gray")[0].innerHTML = document.getElementsByClassName("css-truncate css-truncate-overflow text-gray")[0].innerHTML.replace("committed", "Latest commit")
                for(let e of document.getElementsByClassName("mr-3 flex-shrink-0")) {
                    e.style = "width: 16px;margin-right: 5px !important;"
                }
                
            }
            catch(error){}
            document.getElementsByClassName("css-truncate css-truncate-overflow text-gray")[0].innerHTML = "Latest commit " + document.getElementsByClassName("css-truncate css-truncate-overflow text-gray")[0].innerHTML.split("Latest commit")[1]
        }
        if(document.getElementById("normalgithub-stats") == null) {
            try {document.getElementsByClassName("repository-content")[0].style.marginTop = "20px"} catch(error){}
        }
        for(let frm of document.getElementsByClassName("form-control")) {
            frm.style.borderRadius = "3px"
        }
        try {document.getElementsByClassName("mt-1 text-mono text-gray text-small ws-pre-wrap")[0].style.display = "none"}catch(error){}
        console.log("Thanks for using normal-github extension ♥")
        if(window.location.pathname.includes("/issues/") == true) {
            // an issue, most likely
            if(document.getElementsByClassName("flex-shrink-0 col-12 col-md-3").length == 1) {
                document.body.overflowX = "hidden"
                let mn = document.getElementsByClassName("flex-shrink-0 col-12 col-md-3")[0]
                mn.width = "150px"
                mn.style.display = "block"
                document.getElementsByClassName("flex-shrink-0 col-12 col-md-9 mb-4 mb-md-0")[0].style.width = "800px"
                document.getElementsByClassName("repository-content")[0].getElementsByTagName("div")[0].style.width = "800px"
            }
        }
        if(window.location.pathname.includes("/compare/") == true) {
            // comparing branches
            let btxt = document.getElementsByClassName("repository-content")[0]
            let fls = document.getElementById("files_bucket").parentNode
            fls.style.position = "absolute"
            fls.style.left = "50%"
            fls.style.transform = "translateX(-50%)"
            fls.style.width = "1024px"
            fls.style.top = btxt.getBoundingClientRect().top + btxt.getBoundingClientRect().height + 50 + "px"
            document.getElementsByClassName("octicon-git-pull-request")[1].style.color = "black"
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
        jaktowidzisztonieglosujnapisdzieki.style.paddingLeft = ""
        jaktowidzisztonieglosujnapisdzieki.style.paddingRight = ""
        let ok = true;
        let excList = ["watch", "sponsor", "star", "fork"]
        excList.forEach(function(ec) {
            if(jaktowidzisztonieglosujnapisdzieki.innerHTML.toLowerCase().includes(ec) == true) ok = false
        })
        if(ok == true) jaktowidzisztonieglosujnapisdzieki.style.fontSize = "0.85em"
        jaktowidzisztonieglosujnapisdzieki.style.paddingTop = ""
        jaktowidzisztonieglosujnapisdzieki.style.paddingBottom = ""
        jaktowidzisztonieglosujnapisdzieki.style.padding = "3px 10px"
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
    css.innerHTML = `.UnderlineNav-item{padding: 8px 10px;}.UnderlineNav-item.selected, .UnderlineNav-item[aria-current]:not([aria-current=false]) {background-color: white !important;border-color: transparent !important;border: 1px #e1e4e8 solid !important;border-top: 3px #e16227 solid !important;border-bottom-color: transparent !important;padding: 3px 9px;}.avatar-user{border-radius: 2.5px !important;}#readme .Box-header{background-color: #f6f8fa !important;}nav[aria-label="User profile"]{margin-left: 170px !important;}rect{border-radius: 0px !important}.new-user-avatar-cta{margin-top: 10px;border-radius: 2px;}.social-count{border-radius: 2px;}.octicon-kebab-horizontal{/*kebab mmmm*/display: none;}.octicon-download{display: none;}.octicon-pencil{fill: black;}.news{width: calc(100% - 400px);}a[href="/new"] {color: black !important;}a[href="/new"] svg {fill: black !important;}.dropdown-menu{border-radius: 2px !important;}.repository-content {width: 990px;margin-top: 100px;position: absolute;top: initial;left: 50%;transform: translateX(-50%);margin-bottom: 150px}.repohead h1 {max-height: 32px;}.State {border-radius: 2px;}#blob-more-options-details{display: none;}.Box-header{padding: 9px 16px;height: 40px;}.Box-row {border-bottom: rgb(200,200,200) 1px solid;padding-top: 5px !important;padding-bottom: 5px !important;}.Box-row:last-of-type {border-bottom: none !important;}.btn-mktg{border-radius: 2px !important;}.day{rx: 0px !important;ry: 0px !important;}.css-truncate.css-truncate-overflow.text-gray{position: absolute;right: 10px;background-color: #f1f8fe !important;}.subnav-item:last-child{border-top-right-radius: 3px !important;border-bottom-right-radius: 3px !important;}.subnav-item:first-child{border-top-left-radius: 3px !important;border-bottom-left-radius: 3px !important;}.octicon-check{visibility: hidden;}.hidden-text-expander.d-inline-block.ml-2 {display: none !important;}.text-green{display: none;}.css-truncate.css-truncate-target.d-block.width-fit {position: relative;left: -2px;}.css-truncate.css-truncate-target.d-block.width-fit .js-navigation-open.link-gray-dark {color: #0366d6 !important;}`
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
                d.style.overflow = "hidden"
                d.id = "normalgithub-stats"
                d.style.border = "1px #c4c8cc solid"
                d.innerHTML = i.parentNode.innerHTML;
                d.style.borderRadius = "3px"
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
                        if(mtl.innerHTML.toLowerCase().includes("license") == true) {
                            let toRemove = ["License", "-Clause", " license"]
                            toRemove.forEach(function(tr) {
                                mtl.innerHTML = mtl.innerHTML.split(tr)[0]
                            })
                        }
                        d.getElementsByClassName("list-style-none d-flex")[0].appendChild(mtl)
                        
                    }
                }
                d.getElementsByClassName("list-style-none d-flex")[0].style.justifyContent = "space-evenly"
                let a_els = d.getElementsByClassName("list-style-none d-flex")[0].getElementsByTagName("a")
                a_els[a_els.length - 1].parentNode.removeChild(a_els[a_els.length - 1])
                a_els = d.getElementsByClassName("list-style-none d-flex")[0].getElementsByTagName("a");
                lgs.style.top = "5px"
                let h = 51
                let mt = 100
                let lgns = document.createElement("div")
                d.appendChild(lgns)
                setTimeout(function() {

                    if(document.getElementsByClassName("BorderGrid-cell").length !== 0) {
                        let lg = ""
                        for(let ioi of document.getElementsByClassName("BorderGrid-cell")) {
                            if(ioi.innerHTML.includes("Languages") == true) lg = ioi
                        }
                        let langs = lg.getElementsByClassName("list-style-none")[0].cloneNode(true)
                        lgns.appendChild(langs)
                        lgns.style.position = "absolute";
                        lgns.style.left = "10px"
                        lgns.style.width = "900px"
                        lgns.style.top = "55px"
                        lgns.style.height = "35px"
                        setTimeout(function() {
                            for(let lang of langs.getElementsByTagName("li")) {
                                if(lang.getElementsByTagName("a").length !== 0) {
                                    // a valid language
                                    lang.getElementsByTagName("a")[0].style.position = "relative"
                                    lang.getElementsByTagName("a")[0].style.left = ""
                                    lang.getElementsByTagName("a")[0].style.top = "2.5px"
                                } else {
                                    // "Other"
                                    lang.getElementsByTagName("span")[0].style.position = "relative"
                                    lang.getElementsByTagName("span")[0].style.top = "2.5px"
                                }
                            }
                        }, 100)
                    }
                }, 1250)
                
                let edbi = -40
                lgs.style.cursor = "pointer"
                lgs.addEventListener("click", function() {
                    if(h == 51) {h = 90} else h = 51
                    if(edbi == -40) {edbi = -79} else edbi = -40
                    if(document.getElementsByClassName("repohead")[0].getElementsByClassName("float-right").length == 1) document.getElementsByClassName("repohead")[0].getElementsByClassName("float-right")[0].style.top = edbi + "px"
                    document.getElementById("normalgithub-stats").style.height = h + "px"
                    if(mt == 100) {mt = 150} else mt = 100
                    document.getElementsByClassName("repository-content")[0].style.marginTop = mt + "px"
                })
                
                let leftpx = 10
                for(let a of d.getElementsByTagName("a")) {
                    a.style.position = "relative"
                    a.style.top = "-5px"
                }
                for(let abtn of d.getElementsByTagName("a")) {
                    if(abtn.innerHTML.includes("tags") == true) {
                        abtn.innerHTML = abtn.innerHTML.split("tags").join("releases")
                        // i would have normally done abtn.href.replace("tags", "releases" but it would break repositories with "tags" in their name)
                        let hre = abtn.href.split("tags")
                        let sda = hre.pop()
                        abtn.href = hre.join("tags") + "releases"
                    }
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
        
        
        
        setTimeout(function() {
            if(document.getElementsByClassName("fork-flag mt-1").length == 1) {
                // apply patches for forked repositories
                document.getElementsByClassName("flex-shrink-0 col-12 col-md-9 mb-4 mb-md-0")[0].style.marginTop = "10px"
                document.getElementsByClassName("repohead")[0].className += " forked"
                css.innerHTML += ".forked {max-height: 126.25px !important;}"
                del.style.marginTop = "10px"
                if(document.getElementsByClassName("list-topics-container").length !== 0) tpcs.style.marginTop = "10px"
            }
        }, 100)
        
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


    for(let scc of document.getElementsByClassName("social-count")) {
        scc.innerHTML = scc.getAttribute("aria-label").split(" ")[0]
    }

    setTimeout(function() {
        // replace all icons with old ones
        let icons = [`octicon-file-directory|<svg style="color: rgba(3,47,98,.55) !important;" aria-label="directory" class="octicon octicon-file-directory" viewBox="0 0 14 16" version="1.1" width="14" height="16" role="img"><path fill-rule="evenodd" d="M13 4H7V3c0-.66-.31-1-1-1H1c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1V5c0-.55-.45-1-1-1zM6 4H1V3h5v1z"></path></svg>`, `octicon-file|<svg aria-label="file" class="octicon octicon-file" viewBox="0 0 12 16" version="1.1" width="12" height="16" role="img"><path fill-rule="evenodd" d="M6 5H2V4h4v1zM2 8h7V7H2v1zm0 2h7V9H2v1zm0 2h7v-1H2v1zm10-7.5V14c0 .55-.45 1-1 1H1c-.55 0-1-.45-1-1V2c0-.55.45-1 1-1h7.5L12 4.5zM11 5L8 2H1v12h10V5z"></path></svg>`, `octicon-graph|<svg style="color: #959da5;" class="octicon octicon-graph" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M16 14v1H0V0h1v14h15zM5 13H3V8h2v5zm4 0H7V3h2v10zm4 0h-2V6h2v7z"></path></svg>`, `octicon-project|<svg style="color: #959da5;" class="octicon octicon-project" viewBox="0 0 15 16" version="1.1" width="15" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M10 12h3V2h-3v10zm-4-2h3V2H6v8zm-4 4h3V2H2v12zm-1 1h13V1H1v14zM14 0H1a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h13a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1z"></path></svg>`, `octicon-book|<svg style="color: #959da5;" class="octicon octicon-book" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M3 5h4v1H3V5zm0 3h4V7H3v1zm0 2h4V9H3v1zm11-5h-4v1h4V5zm0 2h-4v1h4V7zm0 2h-4v1h4V9zm2-6v9c0 .55-.45 1-1 1H9.5l-1 1-1-1H2c-.55 0-1-.45-1-1V3c0-.55.45-1 1-1h5.5l1 1 1-1H15c.55 0 1 .45 1 1zm-8 .5L7.5 3H2v9h6V3.5zm7-.5H9.5l-.5.5V12h6V3z"></path></svg>`, `octicon-eye|<svg style="color: #24292e;" class="octicon octicon-eye v-align-text-bottom" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8.06 2C3 2 0 8 0 8s3 6 8.06 6C13 14 16 8 16 8s-3-6-7.94-6zM8 12c-2.2 0-4-1.78-4-4 0-2.2 1.8-4 4-4 2.22 0 4 1.8 4 4 0 2.22-1.78 4-4 4zm2-4c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"></path></svg>`, `octicon-star|<svg style="color: #24292e;" class="octicon octicon-star v-align-text-bottom" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74L14 6z"></path></svg>`, `octicon-repo-forked|<svg class="octicon octicon-repo-forked style="color: #24292e;" v-align-text-bottom" viewBox="0 0 10 16" version="1.1" width="10" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8 1a1.993 1.993 0 0 0-1 3.72V6L5 8 3 6V4.72A1.993 1.993 0 0 0 2 1a1.993 1.993 0 0 0-1 3.72V6.5l3 3v1.78A1.993 1.993 0 0 0 5 15a1.993 1.993 0 0 0 1-3.72V9.5l3-3V4.72A1.993 1.993 0 0 0 8 1zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3 10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3-10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"></path></svg>`, `octicon-file-submodule|<svg height="16" class="octicon octicon-file-submodule color-blue-3" color="blue-3" aria-label="Submodule" viewBox="0 0 16 16" version="1.1" width="16" role="img"><path fill-rule="evenodd" d="M0 2.75C0 1.784.784 1 1.75 1H5c.55 0 1.07.26 1.4.7l.9 1.2a.25.25 0 00.2.1h6.75c.966 0 1.75.784 1.75 1.75v8.5A1.75 1.75 0 0114.25 15H1.75A1.75 1.75 0 010 13.25V2.75zm9.42 9.36l2.883-2.677a.25.25 0 000-.366L9.42 6.39a.25.25 0 00-.42.183V8.5H4.75a.75.75 0 100 1.5H9v1.927c0 .218.26.331.42.183z" style="color: rgba(3,47,98,.55) !important;"></path></svg>`]
        icons.forEach(function(icon) {
            let c = icon.split("|")
            let b = c.shift()
            for(let ic of document.getElementsByClassName(icon.split("|")[0])) {
                ic.outerHTML = c.join("|")
            }
        })    
        let bgEl = ["SelectMenu-header", "SelectMenu-filter", "SelectMenu-input", "SelectMenu-tabs"]
        bgEl.forEach(function(bg) {
            css.innerHTML += "." + bg + "{background-color: #f6f8fa !important;}"
        })

        for(let a of document.getElementsByClassName("Box-row Box-row--focus-gray py-2 d-flex position-relative js-navigation-item")) {
            a.style = "padding-top: 5px !important;padding-bottom: 5px !important;"
        }
    }, 500)
    if(document.getElementsByClassName("selected UnderlineNav-item").length == 1) {
        document.getElementsByClassName("selected UnderlineNav-item")[0].parentNode.style = "position: relative;height: 45px;top: 3px;"
    }
    for(let nvit of document.getElementsByClassName("UnderlineNav-item")) {
        if(nvit.className.includes("selected") == false) return;
        nvit.style = "position: relative;top: 5px;"
    }
}


normalgithub_run();