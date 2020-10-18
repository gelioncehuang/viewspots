//ajax網址https://raw.githubusercontent.com/hexschool/KCGTravel/master/datastore_search.json
//資料處理
var xhr=new XMLHttpRequest();
var url='https://raw.githubusercontent.com/hexschool/KCGTravel/master/datastore_search.json'
xhr.open('get',url,true);
xhr.send(null);
//選擇地點建立
xhr.onload=function(){
let zoneArr=['--請選擇行政區--','三民區','內門區','美濃區','大樹區','小港區','六龜區','仁武區','左營區','田寮區','永安區','甲仙區','鼓山區','杉林區','那瑪夏','岡山區','高雄市','前鎮區','新興區','苓雅區','茂林區','茄萣區','梓官區','旗津區','桃源區','楠梓區','前金區','鳳山區']
var data = JSON.parse(this.response);    
    let zonelen=zoneArr.length;
    for(let i=0;i<zonelen;i++){
        let place=document.createElement('option');
        place.textContent=zoneArr[i];
        select.appendChild(place);
        place.setAttribute('value',zoneArr[i]);
    }
    render('三民區')
}

 //宣告變數
var select=document.querySelector('.chooseplace');
var hotplace=document.querySelector('.selectbar');
let tittle=document.querySelector('.placetit');
let viewpoint=document.querySelector('.viewpoint')
var data=[];
var area='';

//監聽事件
select.addEventListener('change',changeplace);
hotplace.addEventListener('click',changeArea);//熱門區域：三民區

function changeArea(e){
    if(e.target.nodeName === "LI"){
        render(e.target.dataset.area)
        
    }
}

function render(area){
    data=JSON.parse(xhr.responseText).result.records;
    let dataLen=data.length;
    let str=''; 
    tittle.textContent=area;
    for(let i=0;i<dataLen;i++){
        const dataArr={
            name:data[i].Name,
            zone:data[i].Zone,
            add:data[i].Add,
            pic:data[i].Picture1,
            open:data[i].Opentime,
            ticket:data[i].Ticketinfo,
            tel:data[i].Tel};
        if(area == dataArr.zone){
            str+=`<div class='box'>
                   <div class='pic' style='background-image:url(${dataArr.pic}')>
                   <h2>${dataArr.name}</h2>
                   <p>${dataArr.zone}</p>
                   </div>
                   <ul>
                   <li><img src='https://upload.cc/i1/2020/09/17/ZJPBg4.png'>${dataArr.open}</li>
                   <li><img src='https://upload.cc/i1/2020/09/17/bsAOt9.png'>${dataArr.add}</li>
                   <li><img src='https://upload.cc/i1/2020/09/17/au5wtN.png'>${dataArr.tel}<span><img src='https://upload.cc/i1/2020/09/17/x4LfT7.png'>${dataArr.ticket}</span></li>
                   </ul>
                   </div>
                   `;
        }        
    }
    viewpoint.innerHTML=str;
}

//更換地點
function changeplace(e){
    
    tittle.textContent=e.target.value;
    data=JSON.parse(xhr.responseText).result.records;
    let dataLen=data.length;
    let str='';
    for(let i=0;i<dataLen;i++){
        const dataArr={
            name:data[i].Name,
            zone:data[i].Zone,
            add:data[i].Add,
            pic:data[i].Picture1,
            open:data[i].Opentime,
            ticket:data[i].Ticketinfo,
            tel:data[i].Tel};
        if(e.target.value == dataArr.zone){
            str+=`<div class='box'>
                   <div class='pic' style='background-image:url(${dataArr.pic}')>
                   <h2>${dataArr.name}</h2>
                   <p>${dataArr.zone}</p>
                   </div>
                   <ul>
                   <li><img src='https://upload.cc/i1/2020/09/17/ZJPBg4.png'>${dataArr.open}</li>
                   <li><img src='https://upload.cc/i1/2020/09/17/bsAOt9.png'>${dataArr.add}</li>
                   <li><img src='https://upload.cc/i1/2020/09/17/au5wtN.png'>${dataArr.tel}<span><img src='https://upload.cc/i1/2020/09/17/x4LfT7.png'>${dataArr.ticket}</span></li>
                   </ul>
                   </div>
                   `;
        }        
    }
    viewpoint.innerHTML=str;
}




