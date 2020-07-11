const redirected = false;

const homePageButtons     = ()=>{
    const btnViewer   = document.getElementById('btnViewer');
    const btnEditor   = document.getElementById('btnEditor');

        btnViewer.addEventListener("click", ()=>{
            window.location.href = "viewer.html";
            redirected = true;
        });
        btnEditor.addEventListener("click", ()=>{
            window.location.href = "editor.html";
            redirected = true;
        });
    
}
window.addEventListener("load", ()=>{
    homePageButtons();
})