const delAllBtn = document.getElementById("delAllBtn");
delAllBtn.addEventListener("click", function(){
    const template = document.getElementById("confirmationGuiTemplate");
    let confirmGui = template.content.cloneNode(true);
    const body = document.getElementsByTagName("body")[0];
    body.appendChild(confirmGui);

    const yBtn = document.getElementById("confirmDelBtn");
    yBtn.addEventListener("click", function(){
        localStorage.removeItem("notes");
        removeAllContent();
        document.getElementById("confirmationGui").remove();
    });

    const nBtn = document.getElementById("cancelDelBtn");
    nBtn.addEventListener("click", function(){
        document.getElementById("confirmationGui").remove();
    });
});