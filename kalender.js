// kalender.js – Datenhaltung + Modal

// Initialisierung, falls noch nichts im localStorage
if(!localStorage.getItem('kalenderData')){
  const initial={
    de: {
      preset: {
        "2026-02-16":{"all":["Ankunft Bangkok-Suvarnabhumi 13.45 Uhr","River Cruise"]},
        "2026-02-19":{"Henrik":["Familienfest Sa Kaeo"],"Benja":["Familienfest Sa Kaeo"],"Holger":["Familienfest Sa Kaeo"]},
        "2026-02-26":{"all":["Einweihungsfeier Sa Kaeo"]},
        "2026-03-11":{"all":["Abflug Bangkok-Suvarnabhumi 12.40 Uhr // Ankunft Frankfurt/Main 19.05 Uhr"]},
        "2026-03-12":{"all":["Osnabrück"]}
      },
      todos:{}
    },
    th: {
      preset: {
        "2026-02-16":{"all":["ถึงสนามบินสุวรรณภูมิ 13.45 น.","ล่องเรือแม่น้ำ"]},
        "2026-02-19":{"Henrik":["งานเลี้ยงครอบครัวสระแก้ว"],"Benja":["งานเลี้ยงครอบครัวสระแก้ว"],"Holger":["งานเลี้ยงครอบครัวสระแก้ว"]},
        "2026-02-26":{"all":["งานฉลองบ้านใหม่สระแก้ว"]},
        "2026-03-11":{"all":["ออกจากสนามบินสุวรรณภูมิ 12.40 น. // ถึงแฟรงก์เฟิร์ต/สนามบินหลัก 19.05 น."]},
        "2026-03-12":{"all":["ออสนาบรุค"]}
      },
      todos:{}
    }
  };
  localStorage.setItem('kalenderData',JSON.stringify(initial));
}

export function getData(){ return JSON.parse(localStorage.getItem('kalenderData')); }
export function setData(d){ localStorage.setItem('kalenderData',JSON.stringify(d)); }

// Modalsteuerung
export function openModal(content){
  const m=document.getElementById('editModal');
  document.getElementById('modalContent').innerHTML=content;
  m.style.display='block';
}
export function closeModal(){document.getElementById('editModal').style.display='none';}