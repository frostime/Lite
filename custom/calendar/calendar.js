// REF: notion-light
/**----------------日历面板----------------*/
function initcalendar() {
    // 把日历图标 放到搜索图标前面
    var barSearch = document.getElementById("barSearch");
    barSearch.insertAdjacentHTML("beforebegin", '<div id="calendar"class="toolbar__item b3-tooltips b3-tooltips__se" aria-label="日历" ></div>');
    let calendarIcon = document.getElementById("calendar");

    // 日历面板，这里是插入挂件
    barSearch.insertAdjacentHTML("afterend", ` <div
        data-node-index="1"
        data-type="NodeWidget"
        class="iframe"
        data-subtype="widget"
    >
        <div class="iframe-content">
            <iframe id="calendarPanel" style="visibility:hidden;position: fixed; z-index: 1000; top: 225px; left: 170px;    width: 300px; height: 350px; background-color: var(--b3-theme-background);box-shadow: rgba(15, 15, 15, 0.05) 0px 0px 0px 1px, rgba(15, 15, 15, 0.1) 0px 3px 6px, rgba(15, 15, 15, 0.2) 0px 9px 24px;border:none; border-radius: 5px; transform: translate(-50%, -50%); overflow: auto;" src="/appearance/themes/Lite/custom/calendar" data-src="/appearance/themes/Lite/custom/calendar" data-subtype="widget" ></iframe>
        </div>
    </div>`);

    let calendarPanel = document.getElementById("calendarPanel");

    calendarIcon.innerHTML = `<svg t="1662957805816" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2374" width="200" height="200"><path d="M797.257 402.286h-570.514v113.371h570.514v-113.371zM910.629 76.8h-58.514v-76.8h-113.371v76.8h-453.486v-76.8h-113.371v76.8h-58.514c-62.171 0-113.371 51.2-113.371 113.371v724.114c0 62.171 51.2 109.714 113.371 109.714h797.257c62.171 0 113.371-47.543 113.371-109.714v-724.114c0-62.171-51.2-113.371-113.371-113.371zM910.629 914.286h-797.257v-625.371h797.257v625.371zM625.371 629.029h-398.629v113.371h398.629v-113.371z"></path></svg>`;

    calendarIcon.addEventListener("click", function(e) {
        e.stopPropagation();
        if (calendarPanel.style.visibility === "hidden") {
            calendarPanel.style.visibility = "visible";
        } else {
            calendarPanel.style.visibility = "hidden";
        }
    }, false);
    calendarPanel.addEventListener('click', function(e) {
        e.stopPropagation()
    }, false)

    // 隐藏历史面板
    function hideCalendarPanel() {
        if (calendarPanel.style.visibility === "visible") {
            calendarPanel.style.visibility = "hidden";
        }
    }
    // 点击其他区域时，隐藏日历面板
    window.addEventListener("click", hideCalendarPanel, false);
}

setTimeout(()=>{

    /* 生成日历面板 */
    initcalendar(); 

    console.log("calendar 已执行");
}
, 500);
