// kalender.js – Datenhaltung + Modal

// Erstinitialisierung in localStorage
if (!localStorage.getItem('kalenderData')) {
  const initial = {
    de: {
      preset: {
        "2026-02-16": {all:["Ankunft Bangkok 13.45 Uhr","River Cruise"]},
        "2026-03-12": {all:["Osnabrück"]}
      },
      todos: {}
    },
    th: {
      preset: {
        "2026-02-16": {all:["ถึงสนามบิน 13.45 น.","ล่องเรือแม่น้ำ"]},
        "2026-03-12": {all:["ออสนาบรุค"]}
      },
      todos: {}
    }
  };
  localStorage.setItem('kalenderData', JSON.stringify(initial));
}

export function getData() {
  return JSON.parse(localStorage.getItem('kalenderData'));
}

export function setData(d) {
  localStorage.setItem('kalenderData', JSON.stringify(d));
}

// einfache Modalsteuerung (auf beiden Seiten gleich)
export function openModal(content) {
  const m=document.getElementById('editModal');
  document.getElementById('modalContent').innerHTML=content;
  m.style.display='block';
}
export function closeModal(){
  document.getElementById('editModal').style.display='none';
}
