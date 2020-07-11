const homePageButtons = ()=>{
    const btnViewer   = document.getElementById('btnViewer');
    const btnEditor   = document.getElementById('btnEditor');

    btnViewer.addEventListener("click", ()=>{
        window.location.href = "viewer.html";
    })
    btnEditor.addEventListener("click", ()=>{
        window.location.href = "editor.html";
    })
}

window.addEventListener("load", ()=>{
    homePageButtons();
})