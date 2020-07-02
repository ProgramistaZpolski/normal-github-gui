let css  = `
body {
    overflow-x: hidden !important;
}

.UnderlineNav-item{
    padding: 8px 10px;
    position: relative;
    top: 5px;
}
.UnderlineNav-item.selected, .UnderlineNav-item[aria-current]:not([aria-current=false]) {
    background-color: white !important;
    border-color: transparent !important;
    border: 1px #e1e4e8 solid !important;
    border-top: 3px #e16227 solid !important;
    border-bottom-color: transparent !important;
    padding: 3px 9px;
    border-radius: 3px;
}
.avatar-user{
    border-radius: 2.5px !important;
}
#readme .Box-header{
    background-color: #f6f8fa !important;
}
rect{
    border-radius: 0px !important;
}
.new-user-avatar-cta{
    margin-top: 10px;
    border-radius: 2px;
}
.social-count{
    border-radius: 2px;
}
.octicon-kebab-horizontal{
    display: none;
}
.octicon-download{
    display: none;
}
.octicon-pencil{
    fill: black;
}
.news{
    width: calc(100% - 400px);
}
a[href="/new"], a[href="/new"] svg {
    color: black !important;
}
.dropdown-menu{
    border-radius: 2px !important;
}
.repository-content {
    width: 990px;
    margin-top: 100px;
    position: absolute;
    top: initial;
    left: 50%;
    transform: translateX(-50%);
    margin-bottom: 150px;
}
.repohead h1 {
    max-height: 32px;
}
.State {
    border-radius: 2px;
}
#blob-more-options-details{
    display: none;
}
.Box-header{
    padding: 9px 16px;
    height: 40px;
}
.Box-row {
    border-bottom: rgb(200,200,200) 1px solid;
    padding-top: 5px !important;
    padding-bottom: 5px !important;
}
.Box-row:last-of-type {
    border-bottom: none !important;
}
.btn-mktg{
    border-radius: 2px !important;
}
.day{
    rx: 0px !important;
    ry: 0px !important;
}
.css-truncate.css-truncate-overflow.text-gray{
    position: absolute;
    right: 10px;
    background-color: #f1f8fe !important;
}
.subnav-item:last-child{
    border-top-right-radius: 3px !important;
    border-bottom-right-radius: 3px !important;
}
.subnav-item:first-child{
    border-top-left-radius: 3px !important;
    border-bottom-left-radius: 3px !important;
}
.octicon-check{
    visibility: hidden;
}
.hidden-text-expander.d-inline-block.ml-2 {
    display: none !important;
}
.text-green{
    display: none;
}
.css-truncate.css-truncate-target.d-block.width-fit {
    position: relative;
    left: -2px;
}
.css-truncate.css-truncate-target.d-block.width-fit .js-navigation-open.link-gray-dark {
    color: #0366d6 !important;
}
.mt-4.position-sticky.top-0.d-none.d-md-block.bg-white.width-full.border-bottom {
    position: relative !important;
}
.topic-tag{
    border-radius: 3px;
}
.user-profile-sticky-bar.js-user-profile-sticky-bar.d-none.d-md-block.is-follow-stuck.is-stuck{
    background: white;
}
.footer{
    display: none;
}
.btn {
    padding-top: 0px !important;
    padding-bottom: 0px !important;
    padding-left: 0px !important;
    padding-right: 0px !important;
    padding: 3px 10px !important;
    border-radius: 2px;
}
.btn:not(.clone) {
    border-color: #c4c8cc;
    background: linear-gradient(to bottom, #fafbfc, #f0f3f6);
    color: black;
}
.btn:hover:not(.clone) {
    background-color: #e6ebf1 !important;
    background-image: linear-gradient(-180deg,#f0f3f6,#e6ebf1 90%) !important;
    background-position: -.5em !important;
    border-color: rgba(27,31,35,.35) !important;
}
.btn.clone {
    border-color: #37aa51;
    background: linear-gradient(to bottom, #3dc95c, #31a84b);
    color: white;
}
.btn.clone:hover{
    background-color: #269f42 !important;
    background-image: linear-gradient(-180deg,#2fcb53,#269f42 90%) !important;
    background-position: -.5em !important;
    border-color: rgba(27,31,35,.5) !important;
}
.text-normal{
    margin-left: 5px;
}
.clone{
    color: white !important;
}
.flex-order-1.flex-md-order-none.mt-2.mt-md-0:first {
    display: none;
}
.container-xl:first(), .js-check-all-container:first(), .flex-shrink-0.col-12.col-md-9.mb-4.mb-md-0:first(), .footer {
    width: 1024px;
}
.UnderlineNav-item.selected {
    position: relative;
    top: 5px;
}
#description {
    position: absolute;
    font-size: 16px;
    top: 120px;
    left: calc(50% - 20px);
    width: 950px;
    transform: translateX(-50%);
}
#normalgithub-topics {
    position: absolute;
    top: 155px;
    left: 50%;
    width: 990px;
    height: 28px;
    overflow-y: hidden;
    transform: translateX(-50%)
}
#normalgithub-topics a {
    border-radius: 2px;
}
#normalgithub-langs {
    position: absolute;
    left: 10px;
    width: 900px;
    top: 55px;
    height: 35px;
}
#normalgithub-langs a:first(), #normalgithub-langs span:first() {
    position: relative;
    top: 2.5px;
}
#normalgithub-langs a:first() {
    left: unset !important;
}
#normalgithub-stats {
    width: 990px;
    overflow: hidden;
    border: 1px #c4c8cc solid;
    border-radius: 3px;
    position: relative;
    left: 50%;
    margin-left: 0px;
    transform: translateX(-50%);
    top: 70px;
    padding-top: 15px;
    padding-bottom: 5px;
}
#normalgithub-stats a {
    position: relative;
    /*top: -5px;*/
}
#normalgithub-progress {
    width: 989px;
    border-radius: 0px;
    position: relative;
}
#normalgithub-compare {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    width: 1024px;
}
.form-control {
    border-radius: 3px;
}
#normalgithub-edit {
    position: relative;
    cursor: pointer;
    top: -40px;
    right: 9px;
    padding: 5px 9px;
    background: linear-gradient(to bottom, #fafbfc, #f0f3f6);
    border: 1px #c4c8cc solid;
    border-radius: 2px;
}
.pl-5.mt-2.flex-order-1.width-full.Details-content--hidden:first {
    display: none;
}
.get-repo-modal .d-flex {
    height: 30px !important;
    position: relative;
    left: 30px;
    padding: 0px 5px !important;
}
.get-repo-modal .list-style-none {
    display: flex;
    position: relative;
    border-top: 1px #e1e4e8 solid;
    background: linear-gradient(to bottom, #fafbfc, #f0f3f6);
}
.get-repo-modal .d-flex svg {
    display: none;
}
.get-repo-modal .d-flex:hover, .get-repo-modal li:hover, .get-repo-modal li {
    background: none !important;
    border-bottom: none;
}

`

// fun fact: the main code has shrunk over 70 lines after this
// another one: over 60 .style calls were removed from the main code
// more code splits soon

let st = document.createElement("style")
st.innerHTML = css;
document.body.appendChild(st)