// kalender.js
export function getData() {
  let data=localStorage.getItem('thailand2026');
  if(!data){
    data={
      de:{
        preset:{
          "2026-02-16":{"all":["Ankunft Bangkok-Suvarnabhumi 13.45 Uhr","River Cruise"]},
          "2026-02-19":{"Henrik":["Familienfest Sa Kaeo"],"Benja":["Familienfest Sa Kaeo"],"Holger":["Familienfest Sa Kaeo"]},
          "2026-02-26":{"all":["Einweihungsfeier Sa Kaeo"]},
          "2026-03-11":{"all":["Abflug Bangkok-Suvarnabhumi 12.40 Uhr // Ankunft Frankfurt/Main Flughafen 19.05 Uhr"]},
          "2026-03-12":{"all":["Osnabrück"]}
        },
        todos:{}
      },
      th:{
        preset:{
          "2026-02-16":{"all":["ถึงสนามบินสุวรรณภูมิ 13.45 น.","ล่องเรือแม่น้ำ"]},
          "2026-02-19":{"Henrik":["งานเลี้ยงครอบครัวสระแก้ว"],"Benja":["งานเลี้ยงครอบครัวสระแก้ว"],"Holger":["งานเลี้ยงครอบครัวสระแก้ว"]},
          "2026-02-26":{"all":["งานฉลองบ้านใหม่สระแก้ว"]},
          "2026-03-11":{"all":["ออกจากสนามบินสุวรรณภูมิ 12.40 น. // ถึงแฟรงก์เฟิร์ต/สนามบินหลัก 19.05 น."]},
          "2026-03-12":{"all":["ออสนาบรุค"]}
        },
        todos:{}
      }
    };
    localStorage.setItem('thailand2026',JSON.stringify(data));
  }else data=JSON.parse(data);
  return data;
}

export function setData(data){
  localStorage.setItem('thailand2026',JSON.stringify(data));
}

export function openModal(content){
  document.getElementById("modalContent").innerHTML=content;
  document.getElementById("editModal").style.display="block";
}

export function closeModal(){
  document.getElementById("editModal").style.display="none";
}