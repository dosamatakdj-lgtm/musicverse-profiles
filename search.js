/* =========================================================
   MUSICVERSE GLOBAL SEARCH
   Uses data.js as the single source of truth
========================================================= */

document.addEventListener("DOMContentLoaded", function(){

    const search = document.getElementById("search");

    if(!search){
        return;
    }


    /* =====================================================
       SEARCH BOX
    ===================================================== */

    const wrapper = search.parentElement;

    wrapper.style.position = "relative";


    const resultsBox = document.createElement("div");

    resultsBox.id = "musicverse-search-results";

    resultsBox.style.cssText = `
        position:absolute;
        top:48px;
        right:0;
        width:320px;
        max-height:430px;
        overflow-y:auto;

        background:white;
        color:#211c25;

        border-radius:16px;

        box-shadow:0 18px 45px rgba(0,0,0,.20);

        padding:8px;

        display:none;

        z-index:2000;

        border:1px solid #eee;
    `;


    wrapper.appendChild(resultsBox);


    /* =====================================================
       DATA
    ===================================================== */

    const idols =
        typeof MUSICVERSE_IDOLS !== "undefined"
            ? MUSICVERSE_IDOLS
            : [];

    const groups =
        typeof MUSICVERSE_GROUPS !== "undefined"
            ? MUSICVERSE_GROUPS
            : [];


    /* =====================================================
       ESCAPE HTML
    ===================================================== */

    function escapeHTML(text){

        return String(text)
            .replace(/&/g,"&amp;")
            .replace(/</g,"&lt;")
            .replace(/>/g,"&gt;")
            .replace(/"/g,"&quot;")
            .replace(/'/g,"&#039;");

    }


    /* =====================================================
       SEARCH
    ===================================================== */

    function performSearch(){

        const query =
            search.value
                .toLowerCase()
                .trim();


        resultsBox.innerHTML = "";


        if(!query){

            resultsBox.style.display = "none";

            return;
        }


        /* =================================================
           FIND IDOLS
        ================================================= */

        const idolResults = idols.filter(idol => {

            const name =
                String(idol.name || "")
                    .toLowerCase();

            const group =
                String(idol.group || "")
                    .toLowerCase();

            const company =
                String(idol.company || "")
                    .toLowerCase();

            const positions =
                String(idol.positions || "")
                    .toLowerCase();

            return (
                name.includes(query) ||
                group.includes(query) ||
                company.includes(query) ||
                positions.includes(query)
            );

        }).slice(0,8);


        /* =================================================
           FIND GROUPS
        ================================================= */

        const groupResults = groups.filter(group => {

            const name =
                String(group.name || "")
                    .toLowerCase();

            const company =
                String(group.company || "")
                    .toLowerCase();

            const fandom =
                String(group.fandom || "")
                    .toLowerCase();

            return (
                name.includes(query) ||
                company.includes(query) ||
                fandom.includes(query)
            );

        }).slice(0,5);


        /* =================================================
           NOTHING FOUND
        ================================================= */

        if(
            idolResults.length === 0 &&
            groupResults.length === 0
        ){

            resultsBox.innerHTML = `
                <div style="
                    padding:18px;
                    text-align:center;
                    color:#888;
                    font-size:14px;
                ">
                    No results found
                </div>
            `;

            resultsBox.style.display = "block";

            return;
        }


        /* =================================================
           GROUP RESULTS
        ================================================= */

        if(groupResults.length > 0){

            const groupTitle =
                document.createElement("div");

            groupTitle.textContent = "GROUPS";

            groupTitle.style.cssText = `
                font-size:10px;
                font-weight:bold;
                letter-spacing:1.5px;
                color:#9865b2;
                padding:10px 10px 5px;
            `;

            resultsBox.appendChild(groupTitle);


            groupResults.forEach(group => {

                const item =
                    document.createElement("a");

                item.href =
                    group.page || "#";

                item.style.cssText = `
                    display:block;
                    text-decoration:none;
                    color:#211c25;

                    padding:12px 10px;

                    border-radius:10px;

                    transition:.2s;
                `;


                item.innerHTML = `
                    <strong style="
                        font-size:14px;
                        display:block;
                    ">
                        ${escapeHTML(group.name)}
                    </strong>

                    <small style="
                        color:#8b748f;
                        display:block;
                        margin-top:3px;
                    ">
                        ${escapeHTML(group.company || "Musicverse")}
                    </small>
                `;


                item.addEventListener(
                    "mouseenter",
                    function(){

                        item.style.background = "#f6f0f8";

                    }
                );


                item.addEventListener(
                    "mouseleave",
                    function(){

                        item.style.background = "transparent";

                    }
                );


                resultsBox.appendChild(item);

            });

        }


        /* =================================================
           IDOL RESULTS
        ================================================= */

        if(idolResults.length > 0){

            const idolTitle =
                document.createElement("div");

            idolTitle.textContent = "IDOLS";

            idolTitle.style.cssText = `
                font-size:10px;
                font-weight:bold;
                letter-spacing:1.5px;
                color:#9865b2;
                padding:12px 10px 5px;
            `;

            resultsBox.appendChild(idolTitle);


            idolResults.forEach(idol => {

                const item =
                    document.createElement("a");


                item.href =
                    idol.page || "#";


                item.style.cssText = `
                    display:flex;
                    align-items:center;
                    gap:11px;

                    text-decoration:none;
                    color:#211c25;

                    padding:9px 10px;

                    border-radius:10px;

                    transition:.2s;
                `;


                const image =
                    document.createElement("img");


                image.src =
                    idol.image || "";


                image.alt =
                    idol.name || "Idol";


                image.style.cssText = `
                    width:42px;
                    height:52px;

                    object-fit:cover;

                    border-radius:8px;

                    background:#eee;

                    flex-shrink:0;
                `;


                const text =
                    document.createElement("div");


                text.innerHTML = `
                    <strong style="
                        font-size:14px;
                        display:block;
                    ">
                        ${escapeHTML(idol.name)}
                    </strong>

                    <small style="
                        color:#8b748f;
                        display:block;
                        margin-top:3px;
                    ">
                        ${escapeHTML(idol.group || "")}
                    </small>
                `;


                item.appendChild(image);

                item.appendChild(text);


                item.addEventListener(
                    "mouseenter",
                    function(){

                        item.style.background = "#f6f0f8";

                    }
                );


                item.addEventListener(
                    "mouseleave",
                    function(){

                        item.style.background = "transparent";

                    }
                );


                resultsBox.appendChild(item);

            });

        }


        resultsBox.style.display = "block";

    }


    /* =====================================================
       INPUT
    ===================================================== */

    search.addEventListener(
        "input",
        performSearch
    );


    /* =====================================================
       ENTER
    ===================================================== */

    search.addEventListener(
        "keydown",
        function(event){

            if(event.key !== "Enter"){
                return;
            }


            const query =
                search.value
                    .trim();


            if(!query){
                return;
            }


            /*
               Enter sends the user to the full
               idol database with the search query.
            */

            window.location.href =
                "idols.html?search=" +
                encodeURIComponent(query);

        }
    );


    /* =====================================================
       CLOSE WHEN CLICKING OUTSIDE
    ===================================================== */

    document.addEventListener(
        "click",
        function(event){

            if(!wrapper.contains(event.target)){

                resultsBox.style.display = "none";

            }

        }
    );


    /* =====================================================
       ESCAPE KEY
    ===================================================== */

    document.addEventListener(
        "keydown",
        function(event){

            if(event.key === "Escape"){

                resultsBox.style.display = "none";

                search.blur();

            }

        }
    );

});
