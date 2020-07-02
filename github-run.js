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
                let cp = document.getElementsByClassName("pl-5 mt-2 flex-order-1 width-full Details-content--hidden")[0].getElementsByTagName("a")[0].cloneNode(true)
                document.getElementsByClassName("flex-1 d-flex flex-items-center ml-3 min-width-0")[0].appendChild(cp)
                document.getElementsByClassName("flex-1 d-flex flex-items-center ml-3 min-width-0")[0].style = "margin-left: 0px !important;"
            }, 100)


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
                    a.id += "normalgithub-edit"
                    a.innerHTML = "Edit"
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
            fls.id += "normalgithub-compare"
            fls.style.top = btxt.getBoundingClientRect().top + btxt.getBoundingClientRect().height + 50 + "px"
            document.getElementsByClassName("octicon-git-pull-request")[1].style.color = "black"
        }
        if(document.body.innerHTML.includes("Latest commit") == true) {
            let diff = window.innerWidth - 990
            css.innerHTML += ".Header{padding-left: " + diff / 2 + "px !important;padding-right: " + diff / 2 + "px !important;height: 60px !important;}"
        }
    }, 1250)
    let css = document.createElement("style")
    css.innerHTML = ""
    let set1024px = ["container-xl", "js-check-all-container", "flex-shrink-0 col-12 col-md-9 mb-4 mb-md-0", "footer"]
    set1024px.forEach(function(el) {
        try {
            document.getElementsByClassName(el)[0].style.width = "1024px"
        }
        catch(error){}
    })
    for(let jaktowidzisztonieglosujnapisdzieki of document.getElementsByClassName("btn")) {
        let ok = true;
        let excList = ["watch", "sponsor", "star", "fork"]
        excList.forEach(function(ec) {
            if(jaktowidzisztonieglosujnapisdzieki.innerHTML.toLowerCase().includes(ec) == true) ok = false
        })
        if(ok == true) jaktowidzisztonieglosujnapisdzieki.style.fontSize = "0.85em"
        if(jaktowidzisztonieglosujnapisdzieki.innerHTML.includes("Code") == false) {
            // standard button
        } else {
            // clone or download button
            if(jaktowidzisztonieglosujnapisdzieki.innerHTML.includes("Clone or download") == true) return;
            jaktowidzisztonieglosujnapisdzieki.innerHTML = jaktowidzisztonieglosujnapisdzieki.innerHTML.replace("Code", "Clone or download")
            jaktowidzisztonieglosujnapisdzieki.className += " clone"
        }
    }
    for(let hi of document.getElementsByClassName("Box")) {
        hi.style.borderRadius = "2px"
    }
    
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
    for(let i of document.getElementsByClassName("sr-only")) {
        if(i.innerHTML == "Git stats") {
            try {
                // it's a repository page
                // bring back stats on the top
                let lgs = document.getElementsByClassName("Progress")[1].cloneNode(true)
                let d = document.createElement("div")
                d.id = "normalgithub-stats"
                d.innerHTML = i.parentNode.innerHTML;
                document.getElementsByClassName("repohead")[0].appendChild(d)
                d.appendChild(lgs)
                lgs.id += "normalgithub-progress"
                for(let mtl of document.getElementsByClassName("muted-link")) {
                    if(mtl.href.includes("#readme") == true || mtl.href.includes("/LICENSE") == true) {
                        if(mtl.innerHTML.toLowerCase().includes("license") == true) {
                            let toRemove = ["License", " license"]
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
                        lgns.id += "normalgithub-langs"
                        lgns.appendChild(langs)
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
                    if(abtn.innerHTML.includes("tag") == true) {
                        abtn.innerHTML = abtn.innerHTML.split("tag").join("release")
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
        del.id = "description"
        if(desc.length > 125) {
            let full = ""
            full = desc
            desc = desc.substring(1,125) + "..."
            del.onclick = function() {
                alert(full);
            }
        }
        del.innerHTML = desc;
        document.getElementsByClassName("repohead")[0].appendChild(del)
        let tpcs;
        if(document.getElementsByClassName("list-topics-container").length !== 0) {
            tpcs = document.getElementsByClassName("list-topics-container")[0].cloneNode(true)
            tpcs.id += "normalgithub-topics"
            document.getElementsByClassName("repohead")[0].appendChild(tpcs)
        }
        
    }
    catch(error){}
    if(window.location.pathname == "/explore") {
        document.querySelector(".container-xl.p-responsive").style.width = ""
    }
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
        try {
            if(document.querySelector(".mt-4.position-sticky.top-0.d-none.d-md-block.bg-white.width-full.border-bottom").innerHTML.includes("Repositories") == true) {
                // A profile page
                let bar = document.querySelector(".mt-4.position-sticky.top-0.d-none.d-md-block.bg-white.width-full.border-bottom")
                bar.style.width = document.querySelectorAll(".flex-shrink-0.col-12.col-md-9.mb-4.mb-md-0")[1].getBoundingClientRect().width + "px"
                bar.className = bar.className.replace("width-full", "")
                bar.style.left = document.querySelectorAll(".flex-shrink-0.col-12.col-md-9.mb-4.mb-md-0")[1].getBoundingClientRect().left + "px"
                bar.querySelector(".container-xl.px-3.px-md-4.px-lg-5").style.marginLeft = "0px"
            }
        }catch(error){}
        
    }, 500)


    for(let scc of document.getElementsByClassName("social-count")) {
        try {scc.innerHTML = scc.getAttribute("aria-label").split(" ")[0]}catch(error){}
    }

    setTimeout(function() {
        // replace all icons with old ones
        let icons = [`octicon-file-directory|<svg style="color: rgba(3,47,98,.55) !important;" aria-label="directory" class="octicon octicon-file-directory" viewBox="0 0 14 16" version="1.1" width="14" height="16" role="img"><path fill-rule="evenodd" d="M13 4H7V3c0-.66-.31-1-1-1H1c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1V5c0-.55-.45-1-1-1zM6 4H1V3h5v1z"></path></svg>`, `octicon-file|<svg aria-label="file" class="octicon octicon-file" viewBox="0 0 12 16" version="1.1" width="12" height="16" role="img"><path fill-rule="evenodd" d="M6 5H2V4h4v1zM2 8h7V7H2v1zm0 2h7V9H2v1zm0 2h7v-1H2v1zm10-7.5V14c0 .55-.45 1-1 1H1c-.55 0-1-.45-1-1V2c0-.55.45-1 1-1h7.5L12 4.5zM11 5L8 2H1v12h10V5z"></path></svg>`, `octicon-graph|<svg style="color: #959da5;" class="octicon octicon-graph" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M16 14v1H0V0h1v14h15zM5 13H3V8h2v5zm4 0H7V3h2v10zm4 0h-2V6h2v7z"></path></svg>`, `octicon-project|<svg style="color: #959da5;" class="octicon octicon-project" viewBox="0 0 15 16" version="1.1" width="15" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M10 12h3V2h-3v10zm-4-2h3V2H6v8zm-4 4h3V2H2v12zm-1 1h13V1H1v14zM14 0H1a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h13a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1z"></path></svg>`, `octicon-book|<svg style="color: #959da5;" class="octicon octicon-book" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M3 5h4v1H3V5zm0 3h4V7H3v1zm0 2h4V9H3v1zm11-5h-4v1h4V5zm0 2h-4v1h4V7zm0 2h-4v1h4V9zm2-6v9c0 .55-.45 1-1 1H9.5l-1 1-1-1H2c-.55 0-1-.45-1-1V3c0-.55.45-1 1-1h5.5l1 1 1-1H15c.55 0 1 .45 1 1zm-8 .5L7.5 3H2v9h6V3.5zm7-.5H9.5l-.5.5V12h6V3z"></path></svg>`, `octicon-eye|<svg style="color: #24292e;" class="octicon octicon-eye v-align-text-bottom" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8.06 2C3 2 0 8 0 8s3 6 8.06 6C13 14 16 8 16 8s-3-6-7.94-6zM8 12c-2.2 0-4-1.78-4-4 0-2.2 1.8-4 4-4 2.22 0 4 1.8 4 4 0 2.22-1.78 4-4 4zm2-4c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"></path></svg>`, `octicon-star|<svg style="color: #24292e;" class="octicon octicon-star v-align-text-bottom" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74L14 6z"></path></svg>`, `octicon-repo-forked|<svg class="octicon octicon-repo-forked style="color: #24292e;" v-align-text-bottom" viewBox="0 0 10 16" version="1.1" width="10" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8 1a1.993 1.993 0 0 0-1 3.72V6L5 8 3 6V4.72A1.993 1.993 0 0 0 2 1a1.993 1.993 0 0 0-1 3.72V6.5l3 3v1.78A1.993 1.993 0 0 0 5 15a1.993 1.993 0 0 0 1-3.72V9.5l3-3V4.72A1.993 1.993 0 0 0 8 1zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3 10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3-10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"></path></svg>`, `octicon-file-submodule|<svg height="16" class="octicon octicon-file-submodule color-blue-3" color="blue-3" aria-label="Submodule" viewBox="0 0 16 16" version="1.1" width="16" role="img"><path fill-rule="evenodd" d="M0 2.75C0 1.784.784 1 1.75 1H5c.55 0 1.07.26 1.4.7l.9 1.2a.25.25 0 00.2.1h6.75c.966 0 1.75.784 1.75 1.75v8.5A1.75 1.75 0 0114.25 15H1.75A1.75 1.75 0 010 13.25V2.75zm9.42 9.36l2.883-2.677a.25.25 0 000-.366L9.42 6.39a.25.25 0 00-.42.183V8.5H4.75a.75.75 0 100 1.5H9v1.927c0 .218.26.331.42.183z" style="color: rgba(3,47,98,.55) !important;"></path></svg>`, `octicon-telescope|<svg height="14" class="octicon octicon-telescope mr-1" fill="#24292e" viewBox="0 0 14 16" version="1.1" width="12" aria-hidden="true"><path fill-rule="evenodd" d="M8 9l3 6h-1l-2-4v5H7v-6l-2 5H4l2-5 2-1zM7 0H6v1h1V0zM5 3H4v1h1V3zM2 1H1v1h1V1zM.63 9a.52.52 0 00-.16.67l.55.92c.13.23.41.31.64.2l1.39-.66-1.16-2-1.27.86.01.01zm7.89-5.39l-5.8 3.95L3.95 9.7l6.33-3.03-1.77-3.06h.01zm4.22 1.28l-1.47-2.52a.51.51 0 00-.72-.17l-1.2.83 1.84 3.2 1.33-.64c.27-.13.36-.44.22-.7z"></path></svg>`, `octicon-history|<svg class="octicon octicon-history" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8 13H6V6h5v2H8v5zM7 1C4.81 1 2.87 2.02 1.59 3.59L0 2v4h4L2.5 4.5C3.55 3.17 5.17 2.3 7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-.34.03-.67.09-1H.08C.03 7.33 0 7.66 0 8c0 3.86 3.14 7 7 7s7-3.14 7-7-3.14-7-7-7z"></path></svg>`, `octicon-git-branch|<svg height="16" class="octicon octicon-git-branch text-gray" text="gray" viewBox="0 0 16 16" version="1.1" width="16" aria-hidden="true"><path fill-rule="evenodd" d="M11.75 2.5a.75.75 0 100 1.5.75.75 0 000-1.5zm-2.25.75a2.25 2.25 0 113 2.122V6A2.5 2.5 0 0110 8.5H6a1 1 0 00-1 1v1.128a2.251 2.251 0 11-1.5 0V5.372a2.25 2.25 0 111.5 0v1.836A2.492 2.492 0 016 7h4a1 1 0 001-1v-.628A2.25 2.25 0 019.5 3.25zM4.25 12a.75.75 0 100 1.5.75.75 0 000-1.5zM3.5 3.25a.75.75 0 111.5 0 .75.75 0 01-1.5 0z"></path></svg>`, `octicon-tag|<svg class="octicon octicon-tag" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.73 1.73C7.26 1.26 6.62 1 5.96 1H3.5C2.13 1 1 2.13 1 3.5v2.47c0 .66.27 1.3.73 1.77l6.06 6.06c.39.39 1.02.39 1.41 0l4.59-4.59a.996.996 0 0 0 0-1.41L7.73 1.73zM2.38 7.09c-.31-.3-.47-.7-.47-1.13V3.5c0-.88.72-1.59 1.59-1.59h2.47c.42 0 .83.16 1.13.47l6.14 6.13-4.73 4.73-6.13-6.15zM3.01 3h2v2H3V3h.01z"></path></svg>`, `octicon-repo|<svg class="octicon octicon-repo" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"></path></svg>`, `octicon-law|<svg class="octicon octicon-law" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7 4c-.83 0-1.5-.67-1.5-1.5S6.17 1 7 1s1.5.67 1.5 1.5S7.83 4 7 4zm7 6c0 1.11-.89 2-2 2h-1c-1.11 0-2-.89-2-2l2-4h-1c-.55 0-1-.45-1-1H8v8c.42 0 1 .45 1 1h1c.42 0 1 .45 1 1H3c0-.55.58-1 1-1h1c0-.55.58-1 1-1h.03L6 5H5c0 .55-.45 1-1 1H3l2 4c0 1.11-.89 2-2 2H2c-1.11 0-2-.89-2-2l2-4H1V5h3c0-.55.45-1 1-1h4c.55 0 1 .45 1 1h3v1h-1l2 4zM2.5 7L1 10h3L2.5 7zM13 10l-1.5-3-1.5 3h3z"></path></svg>`]
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
        setTimeout(function() {
            try {
                if(document.querySelector(".flex-auto.min-width-0.width-fit.mr-3").innerHTML.includes("forked from") == true) {
                    document.querySelector(".repohead").className += " forked"
                    css.innerHTML += ".forked {max-height: 126.25px !important;}"
                    if(document.getElementsByClassName("list-topics-container").length !== 0) document.querySelector(".list-topics-container").style.marginTop = "10px"
                    document.getElementById("description").style.marginTop = "10px"
                    document.getElementsByClassName("flex-shrink-0 col-12 col-md-9 mb-4 mb-md-0")[0].style.marginTop = "10px"
                }
            }
            catch(error){}
        }, 500)
    }, 500)
    try {
        if(document.getElementsByClassName("selected UnderlineNav-item").length == 1) {
            document.getElementsByClassName("selected UnderlineNav-item")[0].parentNode.style = "position: relative;height: 45px;top: 3px;"
        }
    }
    catch(error){}
    
}


normalgithub_run();