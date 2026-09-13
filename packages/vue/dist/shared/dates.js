export function parseDate(value) {
 if (typeof value !== 'string' || !/^\d{4}-\d{2}-\d{2}$/.test(value)) return null;
 const [y,m,d] = value.split('-').map(Number);
 if (y < 1900 || y > 2100 || m < 1 || m > 12 || d < 1 || d > 31) return null;
 const date = new Date(Date.UTC(y,m-1,d)); return date.getUTCFullYear()===y && date.getUTCMonth()===m-1 && date.getUTCDate()===d ? date : null;
}
export const isoDate = date => date.toISOString().slice(0,10);
export function todayISO() { const n=new Date();return `${n.getFullYear()}-${String(n.getMonth()+1).padStart(2,'0')}-${String(n.getDate()).padStart(2,'0')}`; }
export function shiftDate(value,days=0,months=0) {
 const d=parseDate(value); if (!d) return null;
 if (months) {const target=new Date(Date.UTC(d.getUTCFullYear(),d.getUTCMonth()+months,1));const last=new Date(Date.UTC(target.getUTCFullYear(),target.getUTCMonth()+1,0)).getUTCDate();d.setUTCFullYear(target.getUTCFullYear(),target.getUTCMonth(),Math.min(d.getUTCDate(),last));}
 d.setUTCDate(d.getUTCDate()+days);return isoDate(d);
}
export function dateAllowed(value,min,max) {return !!parseDate(value) && (!min || value>=min) && (!max || value<=max);}
export function monthGrid(value,weekStartsOn=1) {
 const d=parseDate(value);if(!d)return [];
 const first=new Date(Date.UTC(d.getUTCFullYear(),d.getUTCMonth(),1));
 const offset=(first.getUTCDay()-weekStartsOn+7)%7;first.setUTCDate(first.getUTCDate()-offset);
 return Array.from({length:42},(_,i)=>{const date=new Date(first);date.setUTCDate(date.getUTCDate()+i);return {date:isoDate(date),day:date.getUTCDate(),outside:date.getUTCMonth()!==d.getUTCMonth()};});
}
