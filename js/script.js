$(document).ready(function () {
    $(window).resize(function () {
        let widht = $(this).width();

        if(widht <= 768)  {
            $("#wrap").addClass("m");
        } else {
            $("#wrap").removeClass("m");
        }
    })
    $(".menu_tit").click(function () {
        $(".menu_tit").removeClass("active");
        $(".twomenu").removeClass("active");
        $(this).addClass("active");
        $(this).siblings().toggleClass("active");
    })
    $(".menu_btn").click(function () {
        $("aside").toggleClass("active")
    })
    let isClick2 = false;
    $(".mode_btn").click(function () {
        isClick2 = !isClick2;
        if (!isClick2) {
            $(this).attr("data-mode", "dark")
            document.documentElement.setAttribute("data-theme", "light");
        } else {
            $(this).attr("data-mode", "light")
            document.documentElement.setAttribute("data-theme", "dark");
        }
    })
    $(".tab .tab_list").click(function () {
        let index = $(this).index();
        $(".tab .tab_list").removeClass("active");
        $(this).addClass("active");
        $(".content_list .cont").each(function (idx, _) {
            let liindex = idx;
            if (index == liindex) {
                $(this).addClass("active");
            } else {
                $(this).removeClass("active")
            }
        })
    })
    $(".twomenuitem").click(function () {
        $(".twomenuitem").removeClass("pick");
        $(this).addClass("pick");
        if($("#wrap").hasClass("m")) {
            $("aside").removeClass("active");
        }
    })
    // 컴포넌트 버튼
    $("#btn-ld").click(function () {
        const target = $(this).find("span");

        target.text("로딩중...").css("opacity", ".7").attr("disabled", "true");
        $(this).find("span").text("로딩중...");

        setTimeout(() => {
            target.text("완료! ✓").css("opacity", "1");
            $(this).css("background", "var(--accent3)");
        }, 1200)
        setTimeout(() => {
            target.text("클릭해보세요.").attr("disabled", "true");
            $(this).css("background", "var(--text3)");
        }, 2800)

    })
    $(".copy_btn").click(function () {
        let textContent = $(".code_wrap>li.show pre").text();
        let $input = $("<input class='code_copy'>");

        $(".code_wrap>li.show").append($input);

        $input.val(textContent).select();
        document.execCommand("copy");

        $input.remove();
    })
    $(".code_tab>li").click(function () {
        let idx = $(this).index();
        $(".code_tab>li").removeClass("active");
        $(this).addClass("active");

        $(".code_wrap>li").each(function (_) {
            let index = _;

            if (idx == index) {
                $(this).addClass("show")
            } else {
                $(this).removeClass("show")
            }
        })

    })
    // 모달
    $(".preview_content[data-name='Modal'] .btn").click(function () {
        $(".modal_ov").addClass("open")
        if ($(this).hasClass("btn-p")) {
            $(".modal_ov .btn span").html("확인");
            $(".modal_ov .modal-tit").html("확인 모달");
            $(".modal_ov .madal_alert").html(" 오버레이 클릭 또는 ✕ 버튼으로 닫을 수 있어요. 배경에 블러가 적용됩니다.");
        } else {
            $(".modal_ov .btn").addClass("btn-d");
            $(".modal_ov .btn.btn-d span").html("삭제하기");
            $(".modal_ov .modal-tit").html("🗑️ 삭제 확인");
            $(".modal_ov .madal_alert").html("이 항목을 삭제하면 되돌릴 수 없어요. 정말 삭제하시겠어요?");
        }
    })
    $(".modal-close,.close_btn").click(function () {
        $(".modal_ov").removeClass("open")
        setTimeout(() => {
            $(".modal_ov .btn").removeClass("btn-d")
        }, 500)
    })
    $(".modal_ov .btn").click(function () {
        $(".modal_ov").removeClass("open")
        setTimeout(() => {
            $(".modal_ov .btn").removeClass("btn-d")
        }, 500)
    })
    $(".noti_wrap .btn").click(function (e) {
        if ($(".alert_box").is(":visible")) {
            $(".alert_box").hide();
        } else {
            $(".alert_box").show();
        }
    })
    $(".tab_list_btn .tab_btn").click(function (e, i) {
        let idx = $(this).index();
        $(".tab_list_cont .tab_cont,.tab_list_btn .tab_btn").removeClass("active");
        $(".tab_list_cont .tab_cont").eq(idx).addClass("active");
        $(this).addClass("active");
    })
    let num = 0;
    $(".new_btn").click(function () {
        $(".alert").removeClass("active")
       let date = new Date();
       num++;
       const listhtml = $(`<li><span class='num'>${num}</span><span class='title'>안녕하세요</span><span>${date.toISOString().split('T')[0]}</span>`);
       $(".edit_list").append(listhtml);
       $(".edit_list").css("height","100%");
    })
    $(".exit_btn").click(function () {
        let length = $(".edit_list li").length;
        num--;
        $(".edit_list li").eq(length - 1).remove();
        $(".edit_list").css("height","auto");
        const remaining = $(".edit_list li").length;
        if(remaining == 0){
            $(".alert").addClass("active")
        }
        // const totalPg = Math.ceil(remaining / 10);
        // if(curPage2 > totalPg && totalPg > 0) curPage2 = totalPg;
        // renderPagination2();
    })
    $(".sd_btn").click(function () {
        $("#sd").toggleClass("active");

    })
    let clickis = false;
    $(".sd_item").click(function () {
        $(this).parent().find(".sd_item").removeClass("active");
        $(this).addClass("active");
        
    })
    $(".acc-item").click(function () {
        $(this).parent().find(".acc-item").removeClass("open")
        $(this).toggleClass("open");
    })
    $(".dd_btn").click(function () {
        $(this).parent().toggleClass("open")
    })
    $(".dd_item").click(function () {
        let text = $(this).text()
        $(".dd_btn .text").text(text);
        $(".dd_wrap").removeClass("open")
    })
   
    // 모바일
    $(".m_close_btn").click(function () {
        $("aside").removeClass("active");
    })
    
});



window.addEventListener("load", function () {
    const dataData = new Date();
    const copyel = document.querySelector(".copy")
    copyel.textContent = copyel.textContent.replace("2026", `${dataData.getFullYear()}`)
    // let isclick = 
    let mabliecheck = window.matchMedia('(max-width: 768px)').matches;
    const menuEl = document.querySelectorAll(".twomenuitem");
    
    if(mabliecheck) {
        document.querySelector("#wrap").classList.add("m")
    } else {
        document.querySelector("#wrap").classList.remove("m")
    }

    // 다크모드 저장 로컬스토리지 탐색
    const currentTheme = localStorage.getItem("theme");
    
    if(currentTheme === "dark" ) {
           $(".mode_btn").attr("data-mode", "light");
        } else {
            $(".mode_btn").attr("data-mode", "dark");
        }
        document.documentElement.setAttribute("data-theme", currentTheme);

    menuEl.forEach((obj, i) => {
        const obj_bigtit = obj.parentNode.parentNode.children[0];
        const obj_smalltit = obj.children[0];
        const objdata = obj.children[0].textContent.toLocaleLowerCase();
        
        obj.dataset.name = objdata;

        $(".twomenuitem").eq(0).addClass("pick");
        // 리스트클릭
        obj.addEventListener("click", function (e) {
            let target_idx = $(this).parents(".menu_item").index();
            let target = $(this);
            fetch('./js/data.json')
                .then(response => response.json())
                .then(json => dataexport(json, target_idx, target))
            e.preventDefault();
            $(".tab_list,.content_list>.cont,.code_tab>li").removeClass("active");
            $(".code_wrap>li").removeClass("show");
            $(".tab_list").eq(0).addClass("active");
            $(".content_list>.cont").eq(0).addClass("active");
            $(".code_tab>li").eq(0).addClass("active");
            $(".code_wrap>li").eq(0).addClass("show");

            if(obj.children[0].textContent == "Pagination") {
                renderPagination();
                
            } else if(obj.children[0].textContent == "Carousel") {
                currentCal = 0; carouselEvent();
                
            } else if(obj.children[0].textContent == "Progress Bar") {
               progressEvent()
            } 
        })

        function dataexport(json, target_idx, target) {
            const bigtit_text = obj_bigtit.textContent;
            const smalltit_text = obj_smalltit.innerText;
            let target_inx = target.index();
            const content_itemEl = document.querySelectorAll(".preview_content");

            content_itemEl.forEach((item) => {
                let itemEl = item;
                let itemdata = item.dataset.name;
                if (smalltit_text == itemdata) {
                    item.classList.add("active");
                } else {
                    item.classList.remove("active");
                }
            })

            if (bigtit_text == json.navlist[target_idx].category) {
                document.querySelector(".menu_link").innerHTML = 'Components<i class="fa-solid fa-angle-right"></i>' + json.navlist[target_idx].category + '<i class="fa-solid fa-angle-right"></i>' + json.navlist[target_idx].item[target_inx];
                document.querySelector(".content_tit").innerHTML = json.navlist[target_idx].item[target_inx];
                document.querySelector(".content_explen").innerText = json.navlist[target_idx].explanation[target_inx];
            }

        }
    })

})
document.querySelector(".new_btn").addEventListener("click", function () {
    const liele = document.querySelectorAll(".edit_list li");
    // if(!liele) return;
    renderPagination2()
})
const Lists = document.querySelectorAll(".tab_list");
const twoList = Lists[1];
twoList.addEventListener("click", function () {
    codeclick();
})
// 코드복사 
document.querySelector(".copy_btn").addEventListener("click", function () {
    showtoast("copy", "info")
})
document.querySelector(".modal_ov .btn").addEventListener("click", function () {
    if (this.classList.contains("btn-d")) {
        showtoast("trash", "trash");
    }
    console.log(this.classList.contains("btn-d"))
})
document.querySelector(".read_btn").addEventListener("click", function () {
    showtoast("alarm", "bell");
    document.querySelector(".alert_box").style.display = "none"
})
const toactButtones = document.querySelectorAll(".preview_content[data-name='Toast'] .btn");
toactButtones.forEach((obj, i) => {
    obj.addEventListener("click", function (el) {
        let idx = $(this).index();
        let btntext = this.textContent.toLowerCase();
        if (idx == i) {
            showtoast(btntext, btntext);
        }
        
    })
})
// 토스트호출
async function showtoast(alertEl, icon) {
    const toactel = document.createElement("div");
    toactel.className = `toast show ${icon}`

    try {
        const response = await fetch('./js/data.json');
        const data = await response.json();
        let iconel = data.toact[0].icon[0][icon];
        let toastLaout = `
        <div class="alert_box">
        <h5 class="tit">${data.toact[0].aler[0][alertEl][0]}</h5>
        <p class="info">${data.toact[0].aler[0][alertEl][1]}</p>
        </div>`
        console.log(data.toact[0].icon[0][icon])
        toactel.innerHTML = iconel;
        toactel.innerHTML += toastLaout;
        toactel.innerHTML += "<button type='button' class='toast_close'>X</button>"
        document.querySelector(".toast_containter").appendChild(toactel);
        setTimeout(() => {
            toactel.classList.remove("show");
            setTimeout(() => {
                  toactel.remove();
                }, 350)
            }, 3500)
            document.querySelector(".toast_close").addEventListener("click", function () {
            toactel.remove();
                  
       })
    } catch (error) {
        console.error('에러 발생:', error);
    }
}
async function codeclick() {
    try {
        const res = await fetch('./js/data.json');
        const da = await res.json();
        const dataName = document.querySelector(".menu_tit.active").textContent;
        let idx = $(".preview_content.active").parent().index();
        let idx2 = $(".preview_content.active").index();
        let htmlcode = da.navlist[idx].code[0].html[idx2].trim() || "";
        let csscode = da.navlist[idx].code[0].css[idx2].trim() || "";
        let jscode = da.navlist[idx].code[0].javascript[idx2].trim() || "";
        if (dataName == da.navlist[idx].category) {
            const htmlBeautify = prettier.format(htmlcode, {
                    parser: "html",
                    plugins: prettierPlugins,
                    tabWidth: 2,
                    printWidth: 80,
                });
    
                const cssBeautify = prettier.format(csscode, {
                    parser: "css",
                    plugins: prettierPlugins,
                    tabWidth: 2,
                });
    
                const javascriptBeautify = prettier.format(jscode, {
                    parser: "babel",
                    plugins: prettierPlugins,
                    tabWidth: 2,
                    printWidth: 80,
                });
            document.querySelector(".code_wrap>li.html .code").textContent = htmlBeautify;
            document.querySelector(".code_wrap>li.css .code").textContent = cssBeautify;
            document.querySelector(".code_wrap>li.javascript .code").textContent = javascriptBeautify;

            
        }



    } catch (error) {
        console.error('에러 발생:', error);
    }

}
let curPage = 1, totalPage = 10;
const pageContents = Array.from({length:totalPage}, (_, i) => `페이지 ${i + 1} - ${['HTML/CSS', 'JavaScript', 'GSAP', '반응형', 'jQuery', 'Vue', 'React', '디자인'][i]} 관련작업`)
function renderPagination() {
    
    const pc = document.getElementById("page-content");
    const pg = document.getElementById("pagination");
    if(!pc || !pg) return
    pc.textContent = pageContents[curPage - 1];
    pg.innerHTML = '';
    const mk = (txt, p, dis, act) => {
       const b = document.createElement("button");
       b.className = 'pg-btn' + (act ? ' active': '');
       b.textContent = txt; b.disabled = dis;
       b.onclick = () => {curPage = p; renderPagination()}
       return b;
    };
    pg.appendChild(mk('<', curPage - 1, curPage === 1, false));
   for(let i =1; i<= totalPage; i++) {
       if (i === 1 || i === totalPage || Math.abs(i - curPage) <= 1) pg.appendChild(mk(i, i, false, i === curPage));
       else if (Math.abs(i - curPage) === 2) { const d = document.createElement('span'); d.textContent = '···'; pg.appendChild(d); }
    }
    pg.appendChild(mk('›', curPage + 1, curPage === totalPage, false));
    
}
let curPage2 = 1;
const ITEMS_PER_PAGE = 5;
function renderPagination2() {
    setTimeout(() => {
        const viewPageCount = 5;
        const pg2 = document.getElementById("pagination2");
        const liel = document.querySelectorAll(".edit_list li");
        const total = Math.ceil(liel.length / ITEMS_PER_PAGE);
        const mk2 = (txt, p2, dis, act) => {
            const b2 = document.createElement("button");
            b2.className = 'pg-btn' + (act ? ' active' : '');
            b2.textContent = txt; b2.disabled = dis;
            b2.onclick = () => { curPage2 = p2; renderPagination2(); }
            return b2;
        }
        const currentGroup = Math.ceil(curPage2 / viewPageCount);
        const startPage = (currentGroup - 1) * viewPageCount + 1;
        const endPage = Math.min(startPage + viewPageCount - 1, total);

        pg2.innerHTML = '';
        if (total > 0) {
            pg2.appendChild(mk2('<', startPage - viewPageCount, startPage === 1, false));
            for (let i = startPage; i <= endPage; i++) {
                pg2.appendChild(mk2(i, i, false, i === curPage2));
            }
            pg2.appendChild(mk2('>', endPage + 1, endPage >= total, false));
        }
        showList();
    }, 10)
}
function showList() {
    const liel = document.querySelectorAll(".edit_list li");
    const start = (curPage2 - 1) * ITEMS_PER_PAGE;
    const end = start + ITEMS_PER_PAGE;
    liel.forEach((li, i) => {
        li.style.display = (i >= start && i < end) ? '' : 'none';
    });
}
// 검색필터
document.querySelector("#searchInput").addEventListener("input", function () {
    let val = this.value.toLowerCase();
    let searchel = document.querySelectorAll(".twomenuitem");

    searchel.forEach((item, i)=> {
        let keyword = item.dataset.name;
        item.parentNode.classList.add("active");
        
        if(keyword.includes(val)) {
            item.style.display = "block";
            
        } else {
            item.style.display = "none";
            item.parentElement.previousElementSibling.style.display = "none"
           
        }
        
    })
})

let isblur = false;
//검색포커스 해제시
document.querySelector("#searchInput").addEventListener("blur", function () {
    let liel = document.querySelectorAll(".twomenuitem");
    let classis = document.querySelectorAll(".twomenuitem.pick");
    if(this.value == "") {
        liel.forEach((item, i)=> {
            item.style.display = "block";
            item.parentElement.previousElementSibling.style.display = "flex";
            console.log(item.parentElement.previousElementSibling)
            if(!(item.classList.contains("pick"))) {
                item.parentNode.classList.remove("active")
            }
        })
        classis[0].parentElement.classList.add("active")
    }
    console.log(this.value == "")
})
const stepData = [{ lbl: '정보입력', desc: '이름, 연락처 등 기본 정보를 입력해주세요.' }, { lbl: '기술확인', desc: '보유 기술 스택과 경력을 확인해주세요.' }, { lbl: '포트폴리오', desc: '대표 프로젝트 링크를 첨부해주세요.' }, { lbl: '제출완료', desc: '🎉 지원이 완료됐어요! 검토 후 연락드릴게요.' }];
const stepbtn = document.querySelectorAll(".step__wrap .button_wrap .btn");
let currentCiick = 1;
stepbtn.forEach((btn)=> {
    btn.addEventListener("click", function () {
        if(this.classList.contains("next_btn")){
            showstep(1);
        } else {
            showstep(-1);
        }
    })
})

function showstep(current) {
    currentCiick = Math.max(1, Math.min(stepData.length, currentCiick + current));
    stepEvent();
}
function stepEvent() {
    const text = document.querySelector(".step-content");
    const node = document.querySelectorAll(".step_node");

    node.forEach((item, i)=> {
        item.className = 'step_node' + (i < currentCiick - 1 ? ' done' : '');
        item.children[0].className = 'step-c' + (i === currentCiick - 1 ? ' active' : '');
        item.children[0].innerHTML = i < currentCiick - 1 ? "<i class='fa-solid fa-check'></i>" : 1 + i;
        if(i < currentCiick - 1) {
            item.children[2].className = 'step-line' + (i < currentCiick - 1 ? ' done' : '');
        }
       if(currentCiick === stepData.length) {
         setTimeout(()=>{
            item.classList.add("done");
            item.children[0].classList.add("active");
            item.children[0].innerHTML = "<i class='fa-solid fa-check'></i>";
            return
         },500)
       }
    })
    document.querySelector(".step__wrap .button_wrap .next_btn").innerText = currentCiick === stepData.length ? "완료" : "다음 →";
    text.textContent = stepData[currentCiick - 1].desc;
}
let carouselData = ["🎨 HTML / CSS 퍼블리싱","⚡ JavaScript / jQuery","✨ GSAP 애니메이션","⚛️ React 학습중"];
let currentCal = 1 , currentTotal = carouselData.length;
const carouselbtns = document.querySelectorAll(".carousel_btn_wrap button");
carouselbtns.forEach((btns)=> {
    btns.addEventListener("click", function () {
        if(this.classList.contains("next_btn")){
            showcarousel(1)
        } else {
            showcarousel(-1)
        }
    })
})
function showcarousel(current) {
  currentCal = (currentCal + current + currentTotal) % currentTotal;
  carouselEvent();
}
function carouselEvent() {
    const caltark = document.querySelector(".carousel_tark")
    const caldot = document.querySelector(".car-dots");
    caldot.innerHTML = "";
    caltark.innerHTML = "";
    caltark.style.transform = `translateX(-${currentCal*100}%)`
    for(let i = 1; i<=carouselData.length; i++) {
       let randomcolor = Math.floor(Math.random() * 16777215).toString(16).padStart(6,'0');
       const div = document.createElement("div");
       const li = document.createElement("li");
       li.className = "dot" + (i - 1 == currentCal ? " d_pick": "");
       li.onclick = (() => { const ci = i - 1; return () => { console.log(currentCal); currentCal = ci; carouselEvent(); }; })();
       div.className = "carousel_list";
       div.style.background = "#"+randomcolor;
       div.innerText = carouselData[i - 1];
       caltark.appendChild(div);
       caldot.appendChild(li)
   }
}
setInterval(()=> {
 showcarousel(1)
},3000)
const prog_val = document.querySelectorAll(".prog-set.set1 li");
const prog_val2 = document.querySelectorAll(".prog-set.set2 li");
const maxoffset = 314;
function progressEvent() {
    prog_val.forEach((val, i)=> {
        let valtext = val.children[0].children[1].textContent;
        let data = valtext.replace("%", "");
        val.children[1].children[0].dataset.w = data;
        setTimeout(()=>{
            val.children[1].children[0].style.width = data + "%";
        },1000)
    })
    prog_val2.forEach((item, id)=> {
        let valtext2 = item.children[1].textContent;
        let datanum = valtext2.replace("%", "");

        item.dataset.pre = datanum;
        const vaildpercent = Math.max(0, Math.min(100, item.dataset.pre))
        const offect = maxoffset - (vaildpercent/100) * maxoffset;

        setTimeout(()=> {
            item.children[0].children[1].style.strokeDashoffset = offect;
        },1000)
        console.log(item.children[0].children[1])
        item.children[1].innerText = `${item.dataset.pre}%`;
    })

    // 프로그레스
    const progObs = new IntersectionObserver(entries => {
        entries.forEach(e => {
            console.dir(e)
            if (e.isIntersecting) {
                console.log(e)
              e.target.querySelectorAll('.prog-fill').forEach((b, i) => setTimeout(() => b.style.width = b.dataset.w + '%', i * 120));
              progObs.unobserve(e.target);
            } else {
                return
            }
          });
        }, { threshold: .2 });
}
const cardes = document.querySelectorAll(".h-card");
cardes.forEach((card)=> {
  card.addEventListener("mousemove", function (e) {
    // e.preventDefault();
    const r = this.getBoundingClientRect();
    this.style.setProperty("--mx", Math.ceil((e.clientX - r.left) / r.width * 100) + '%');
    this.style.setProperty("--my", Math.ceil((e.clientY - r.top) / r.height * 100) + '%');
  })
})
// 실시간 유효성 검사
const inputel = document.querySelectorAll(".fi-group .fi");
let isinput = false;
inputel.forEach((pu, i)=> {
    const label_name = pu.parentElement.children[0].textContent;
    console.log(pu.value)
    pu.addEventListener("input", (event) => {
        if(pu.value == "") {
            document.querySelector("#forminput_wrap .btn").disabled = true;
        } else {
            document.querySelector("#forminput_wrap .btn").disabled = false;
        }
        event.preventDefault();
        let name_len = event.target.value.length;
        if(label_name == "이름") {
            event.target.className = "fi" + (name_len >= 0 && name_len <= 2 ? " err": " ok");
            event.target.nextElementSibling.className = "fi-msg" + (name_len >= 0 && name_len <= 2 ? " e": " s");
            event.target.nextElementSibling.textContent = name_len >= 0 && name_len <= 2 ? "⚠ 2자 이상 입력해주세요." : "좋아요!";
        } else {
            const ok = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(event.target.value);
            event.target.className = "fi" + (!ok && event.target.value ? " err":" ok");
            event.target.nextElementSibling.className = "fi-msg" + (!ok && event.target.value ? " e":" s");
            event.target.nextElementSibling.textContent = !ok && event.target.value ? "⚠ 올바른 이메일 형식이 아니에요.":"✓ 유효한 이메일!";
            
        }
        if(event.target.value == "") {
            event.target.className = "fi";
            event.target.nextElementSibling.className = "fi-msg"
            event.target.nextElementSibling.textContent = "";
        }


    })
    const inputbtn = document.querySelector("#forminput_wrap .btn");
    inputbtn.addEventListener("click", function () {
        const inputlen = inputel.length;
        const oklen = document.querySelectorAll(".fi-group .fi.ok").length;
        if(!isinput) {
            isinput = true;
            if(inputlen == oklen){
                showtoast("inputok","success");
            } else {
                showtoast("inputerr","error");
            }
        }
        setTimeout(()=> {
            isinput = false;
        },300)
    })
})
// 자동완성
const acData = ['HTML5', 'CSS3', 'JavaScript', 'jQuery', 'SCSS', 'GSAP', 'ScrollTrigger', 'React', 'Vue.js', 'Figma', 'Git', 'GitLab', 'Webpack', 'Vite', 'Photoshop', 'Illustrator']
document.querySelector(".search_wrap .fi").addEventListener("input", (e)=>{
    e.preventDefault();
    const list = document.querySelector(".ac-list");
    if(!e.target.value) {list.style.display = "none"; return};
    list.style.display = "block";
    console.log("ddd")
    const matches = acData.filter(d => d.toLowerCase().includes(e.target.value.toLowerCase()));

    list.innerHTML = matches.slice(0, 6).map(m=> {
        console.log(m)
        const hl = m.replace(new RegExp(e.target.value, 'gi'), s => `<span class="ac-hl">${s}</span>`);
        return `<div class="ac-item"><i class="fa-solid fa-magnifying-glass"></i>${hl}</div>`
    }).join("")
})

const chiplist = document.querySelectorAll(".chip-item");
chiplist.forEach((e, i)=> {
    e.addEventListener("click", function (el){
        this.classList.toggle("sel");
        document.querySelector(".chip-result .text").textContent = "";
        const sel = [...document.querySelectorAll(".chip-item.sel")].map((m)=> {
            return m.textContent;
        })
        document.querySelector(".chip-result .text").textContent += sel.length ? ` ${sel.join(" , ")}` : "선택없음";
    })
})
const star = document.querySelectorAll(".star-grp .star");
let curring = 0;
let starIndex;
const rLabels = ['', '별로예요', '아쉬워요', '괜찮아요', '좋아요!', '최고예요! ⭐'];

function hoverrander(idx) {
    star.forEach((st, i) => {
        const n = +st.dataset.n;
        st.textContent = + n <= idx ? "★" : "☆";
        st.classList.toggle('lit', + n <= idx);

        document.querySelector(".rating-label").textContent = rLabels[idx]
        
    })
}

star.forEach((ster, i)=> {
    
    ster.addEventListener("mouseenter", function () {
        hoverrander(this.dataset.n);
        this.style.transform = "scale(1.2)";
    })
    ster.addEventListener("mouseleave", function () {
        hoverrander(curring)
        this.style.transform = "scale(1)";
    })
    ster.addEventListener("click", function () {
        curring = +this.dataset.n;
        hoverrander(this.dataset.n);
        document.querySelector(".rating-label").textContent = "✓ " + rLabels[curring] + ` [${curring}/5] 점`;

        const toastdiv = document.createElement("div")
        toastdiv.className = "toast show success"
        const alertel = `
        <i class="star_icon">⭐</i>
        <div class="alert_box big">
        <h5 class="tit">${curring}점</h5>
        <p class="info">${rLabels[curring]}</p>
        </div>`
        toastdiv.innerHTML = alertel;
        toastdiv.innerHTML += "<button type='button' class='toast_close'>X</button>"
        console.log(toastdiv)
        document.querySelector(".toast_containter").appendChild(toastdiv);
        setTimeout(()=> {
            toastdiv.classList.remove("show");
            setTimeout(()=> {
                toastdiv.remove();
            },1000)
        },1800)
        document.querySelector(".toast_close").addEventListener("click", function () {
            toastdiv.remove();
        })
    })
})

document.querySelector(".rign input").addEventListener("input", function () {
    let rangeInput = this.value;
    let length = document.querySelector(".rign span").textContent.split("").length;
    let ranLel = Math.floor((rangeInput % 10) * 0.5);

    document.querySelector(".rign span").style.width = `${rangeInput*10}%`
    document.querySelector(".rating-label .num").innerText = `${(rangeInput % 10) * 0.5} 점`;
    document.querySelector(".two .rating-label .label").innerText = rLabels[ranLel];
    console.log(rLabels[ranLel])
    if(rangeInput >= 10) {
        document.querySelector(".ring_wrap.two .rign span").style.left = "0"
        document.querySelector(".rating-label .num").innerText =+ length + "점";
        document.querySelector(".two .rating-label .label").innerText = rLabels[length];
    }
})
document.querySelector(".file_form").addEventListener("click", function (e) {
    if (e.target.closest('#fi-inp')) return;
    e.preventDefault();
    document.querySelector("#fi-inp").click();
})
document.querySelector(".file_form").addEventListener("dragover", function (e) {
    e.preventDefault();
    document.querySelector(".file_form").style.borderColor = "var(--text3)";
    document.querySelector(".file_form").style.backgroundColor = "var(--bg2)";
})
document.querySelector(".file_form").addEventListener("dragleave", function (e) {
    e.preventDefault();
    dragleaveevent()
})
document.querySelector(".file_form").addEventListener("drop", function (e) {
    e.preventDefault();
    dragleaveevent();
    const inputfile = document.querySelector("#fi-inp");

    const files = e.dataTransfer.files;

    if(files.length>0) {
        inputfile.files = files;

        inputfile.dispatchEvent(new Event("change"))
    }
})
function dragleaveevent() {
    document.querySelector(".file_form").style.borderColor = "var(--border)";
    document.querySelector(".file_form").style.backgroundColor = "transparent";
}
let isclick3 = false;
document.querySelector("#fi-inp").addEventListener("change", function () {
    let fi_list = document.querySelector(".fi-list");
    let fi_item_len = fi_list.childNodes.length;
    let file = this.files;
    if(!fi_list) return;
    [...file].forEach((el)=> {
        const li_item = document.createElement("div");
        li_item.className = "fi-item";
        const itemhtml = `<i class="fi-icon">📄</i>
        <span class='fi-name'>${el.name}</span>
        <span class='fi-size'>${(el.size / 1024).toFixed(1)}KB</span>
        <span class='fi-close'>✕</span>
        `
        li_item.innerHTML = itemhtml;
        fi_list.appendChild(li_item)
        document.querySelector(".file-score .num").textContent = fi_item_len + 1;
    })
    document.querySelectorAll(".fi-close").forEach((fi, i)=> {
        console.log(fi)
        fi.addEventListener("click", function (e) {
            e.preventDefault();
            this.parentElement.remove();
            document.querySelector(".file-score .num").textContent = fi_item_len--;
        })
    })
})
let cntVal = 0;
let currentVal = 0
document.querySelectorAll(".co button").forEach((btn)=> {
    const counter_text_el = document.querySelector(".counter_text");
 btn.addEventListener("click", function () {
    if(this.classList.contains("prev")) {
        currentVal = -1;
    } else {
        currentVal = 1;
    }
    cntVal = Math.max(0, cntVal + currentVal)
    console.log(cntVal)
    counter_text_el.style.transform = "scale(1.08)";
    counter_text_el.style.color = currentVal > 0 ? "var(--accent3)": "var(--accent2)";
    counter_text_el.textContent = cntVal;
    setTimeout(()=> {
        counter_text_el.style.transform = "";
        counter_text_el.style.color = "";
    },2000)
 })

})
let anicnt = 2026;
let msmnu = 180;
document.querySelector(".cut_btn").addEventListener("click", function () {
   const cntel = document.querySelector(".cut_ani .cut");
   let cur = 0;
   const step = anicnt / msmnu; //얼만큼의 숫자를 높이는지
   const dur = Math.ceil(1000 / msmnu); // 듀레이션
   const iv = setInterval(()=> {
    cur = Math.min(cur + step, anicnt);
    cntel.textContent = Math.ceil(cur);
    // cntel.textContent = Math.ceil(cur).toLocaleString(); //따옴표 추가
    if(cur >= anicnt) {
        clearInterval(iv)
    }
   }, dur)
})
let timerRun = false;
let timerIv;
let timerSec;
document.querySelectorAll(".timer_wrap button").forEach((el, i)=> {
  el.addEventListener("click", function () {
    const inputtimerel = document.querySelector("#timer_num")
    let inputTimer = inputtimerel.value;
    const time_meinu = document.querySelector(".time_wrap .minute")
    const time_sec = document.querySelector(".time_wrap .sec")
    if(inputTimer == "") {
        alert("지정할 타이머을 입력해주세요.")
    }
    if(this.classList.contains("start_btn") && inputTimer !== "") {
        if(timerRun) return;
        timerRun = true;
        inputtimerel.disabled = true;
        if(!timerSec) timerSec = inputTimer;
        
        timerIv = setInterval(()=> {
          time_meinu.textContent = String(Math.floor(timerSec / 60)).padStart(2, "0");
          time_sec.textContent = String(timerSec % 60).padStart(2, "0");
        if(timerSec <= 0) {
            clearInterval(timerIv);
            timerRun = false;
            timerSec = inputTimer;
        }
        timerSec--;
      },1000)
    } else if(this.classList.contains("stop_btn")) {
        clearInterval(timerIv);
        timerRun = false;
    } else {
        timerRun = false;
        inputtimerel.value = "";
        time_meinu.textContent = "00"
        time_sec.textContent = "00"
        clearInterval(timerIv);
        inputtimerel.disabled = false;
    }
  })
})
document.querySelectorAll(".cp-code_wrap .code-btn").forEach((codeB)=> {
 codeB.addEventListener("click", function () {
    let codetext = this.previousElementSibling.innerText;
      navigator.clipboard?.writeText(codetext).then(() => {
        this.textContent = '✓ 복사됨'; this.classList.add("show");
        setTimeout(()=> {
            this.textContent = '복사'; this.classList.remove("show");
        },2000)
      }).catch(() => showtoast("error", "error"));
 })
})
document.querySelector(".scroll_wrap").addEventListener("scroll", function (e) {
    const scrolly = this.scrollTop; //현재스크롤 위치
    const scrollheight = this.scrollHeight; //전체 콘텐츠 높이
    const clientheight = this.clientHeight; //보이는 영역 높이

    const scrollbel = scrollheight - clientheight // 실제 스크롤 가능한 높이

    const pct = Math.round((scrolly/scrollbel)*100)
    document.querySelector(".scroll_bar").style.width = pct + "%"
    document.querySelector(".scroll").innerText = pct + "%";
})

// 다크모드 로컬스토리지 저장
document.querySelector(".mode_btn").addEventListener("click", function () {
    let data_mode = this.dataset.mode;
    let theme;

    theme = data_mode;

    localStorage.setItem("theme", theme);
})