const { useState, useEffect } = React;

const ALL_PERIODS = [
  { id: 'p1', start: '2026-04-20', end: '2026-04-22', label: 'lundi 20 avril au mercredi 22 avril 2026', monthKey: '2026-04' },
  { id: 'p2', start: '2026-04-22', end: '2026-04-24', label: 'mercredi 22 avril au vendredi 24 avril 2026', monthKey: '2026-04' },
  { id: 'p3', start: '2026-04-24', end: '2026-04-26', label: 'vendredi 24 avril au dimanche 26 avril 2026', monthKey: '2026-04' },
  { id: 'p4', start: '2026-04-26', end: '2026-04-28', label: 'dimanche 26 avril au mardi 28 avril 2026', monthKey: '2026-04' },
  { id: 'p5', start: '2026-04-28', end: '2026-04-30', label: 'mardi 28 avril au jeudi 30 avril 2026', monthKey: '2026-04' },
  { id: 'p6', start: '2026-04-30', end: '2026-05-02', label: 'jeudi 30 avril au samedi 2 mai 2026', monthKey: '2026-04' },
  { id: 'p7', start: '2026-05-02', end: '2026-05-04', label: 'samedi 2 mai au lundi 4 mai 2026', monthKey: '2026-05' },
  { id: 'p8', start: '2026-05-04', end: '2026-05-06', label: 'lundi 4 mai au mercredi 6 mai 2026', monthKey: '2026-05' },
  { id: 'p9', start: '2026-05-06', end: '2026-05-08', label: 'mercredi 6 mai au vendredi 8 mai 2026', monthKey: '2026-05' },
  { id: 'p10', start: '2026-05-08', end: '2026-05-10', label: 'vendredi 8 mai au dimanche 10 mai 2026', monthKey: '2026-05' },
  { id: 'p11', start: '2026-05-10', end: '2026-05-12', label: 'dimanche 10 mai au mardi 12 mai 2026', monthKey: '2026-05' },
  { id: 'p12', start: '2026-05-12', end: '2026-05-14', label: 'mardi 12 mai au jeudi 14 mai 2026', monthKey: '2026-05' },
  { id: 'p13', start: '2026-05-14', end: '2026-05-16', label: 'jeudi 14 mai au samedi 16 mai 2026', monthKey: '2026-05' },
  { id: 'p14', start: '2026-05-16', end: '2026-05-18', label: 'samedi 16 mai au lundi 18 mai 2026', monthKey: '2026-05' },
  { id: 'p15', start: '2026-05-18', end: '2026-05-20', label: 'lundi 18 mai au mercredi 20 mai 2026', monthKey: '2026-05' },
  { id: 'p16', start: '2026-05-20', end: '2026-05-22', label: 'mercredi 20 mai au vendredi 22 mai 2026', monthKey: '2026-05' },
  { id: 'p17', start: '2026-05-22', end: '2026-05-24', label: 'vendredi 22 mai au dimanche 24 mai 2026', monthKey: '2026-05' },
  { id: 'p18', start: '2026-05-24', end: '2026-05-26', label: 'dimanche 24 mai au mardi 26 mai 2026', monthKey: '2026-05' },
  { id: 'p19', start: '2026-05-26', end: '2026-05-28', label: 'mardi 26 mai au jeudi 28 mai 2026', monthKey: '2026-05' },
  { id: 'p20', start: '2026-05-28', end: '2026-05-30', label: 'jeudi 28 mai au samedi 30 mai 2026', monthKey: '2026-05' },
  { id: 'p21', start: '2026-05-30', end: '2026-06-01', label: 'samedi 30 mai au lundi 1 juin 2026', monthKey: '2026-05' },
  { id: 'p22', start: '2026-06-01', end: '2026-06-03', label: 'lundi 1 juin au mercredi 3 juin 2026', monthKey: '2026-06' },
  { id: 'p23', start: '2026-06-03', end: '2026-06-05', label: 'mercredi 3 juin au vendredi 5 juin 2026', monthKey: '2026-06' },
  { id: 'p24', start: '2026-06-05', end: '2026-06-07', label: 'vendredi 5 juin au dimanche 7 juin 2026', monthKey: '2026-06' },
  { id: 'p25', start: '2026-06-07', end: '2026-06-09', label: 'dimanche 7 juin au mardi 9 juin 2026', monthKey: '2026-06' },
  { id: 'p26', start: '2026-06-09', end: '2026-06-11', label: 'mardi 9 juin au jeudi 11 juin 2026', monthKey: '2026-06' },
  { id: 'p27', start: '2026-06-11', end: '2026-06-13', label: 'jeudi 11 juin au samedi 13 juin 2026', monthKey: '2026-06' },
  { id: 'p28', start: '2026-06-13', end: '2026-06-15', label: 'samedi 13 juin au lundi 15 juin 2026', monthKey: '2026-06' },
  { id: 'p29', start: '2026-06-15', end: '2026-06-17', label: 'lundi 15 juin au mercredi 17 juin 2026', monthKey: '2026-06' },
  { id: 'p30', start: '2026-06-17', end: '2026-06-19', label: 'mercredi 17 juin au vendredi 19 juin 2026', monthKey: '2026-06' },
  { id: 'p31', start: '2026-06-19', end: '2026-06-21', label: 'vendredi 19 juin au dimanche 21 juin 2026', monthKey: '2026-06' },
  { id: 'p32', start: '2026-06-21', end: '2026-06-23', label: 'dimanche 21 juin au mardi 23 juin 2026', monthKey: '2026-06' },
  { id: 'p33', start: '2026-06-23', end: '2026-06-25', label: 'mardi 23 juin au jeudi 25 juin 2026', monthKey: '2026-06' },
  { id: 'p34', start: '2026-06-25', end: '2026-06-27', label: 'jeudi 25 juin au samedi 27 juin 2026', monthKey: '2026-06' },
  { id: 'p35', start: '2026-06-27', end: '2026-06-29', label: 'samedi 27 juin au lundi 29 juin 2026', monthKey: '2026-06' },
  { id: 'p36', start: '2026-06-29', end: '2026-07-01', label: 'lundi 29 juin au mercredi 1 juillet 2026', monthKey: '2026-06' },
  { id: 'p37', start: '2026-07-01', end: '2026-07-03', label: 'mercredi 1 juillet au vendredi 3 juillet 2026', monthKey: '2026-07' },
  { id: 'p38', start: '2026-07-03', end: '2026-07-05', label: 'vendredi 3 juillet au dimanche 5 juillet 2026', monthKey: '2026-07' },
  { id: 'p39', start: '2026-07-05', end: '2026-07-07', label: 'dimanche 5 juillet au mardi 7 juillet 2026', monthKey: '2026-07' },
  { id: 'p40', start: '2026-07-07', end: '2026-07-09', label: 'mardi 7 juillet au jeudi 9 juillet 2026', monthKey: '2026-07' },
  { id: 'p41', start: '2026-07-09', end: '2026-07-11', label: 'jeudi 9 juillet au samedi 11 juillet 2026', monthKey: '2026-07' },
  { id: 'p42', start: '2026-07-11', end: '2026-07-13', label: 'samedi 11 juillet au lundi 13 juillet 2026', monthKey: '2026-07' },
  { id: 'p43', start: '2026-07-13', end: '2026-07-15', label: 'lundi 13 juillet au mercredi 15 juillet 2026', monthKey: '2026-07' },
  { id: 'p44', start: '2026-07-15', end: '2026-07-17', label: 'mercredi 15 juillet au vendredi 17 juillet 2026', monthKey: '2026-07' },
  { id: 'p45', start: '2026-07-17', end: '2026-07-19', label: 'vendredi 17 juillet au dimanche 19 juillet 2026', monthKey: '2026-07' },
  { id: 'p46', start: '2026-07-19', end: '2026-07-21', label: 'dimanche 19 juillet au mardi 21 juillet 2026', monthKey: '2026-07' },
  { id: 'p47', start: '2026-07-21', end: '2026-07-23', label: 'mardi 21 juillet au jeudi 23 juillet 2026', monthKey: '2026-07' },
  { id: 'p48', start: '2026-07-23', end: '2026-07-25', label: 'jeudi 23 juillet au samedi 25 juillet 2026', monthKey: '2026-07' },
  { id: 'p49', start: '2026-07-25', end: '2026-07-27', label: 'samedi 25 juillet au lundi 27 juillet 2026', monthKey: '2026-07' },
  { id: 'p50', start: '2026-07-27', end: '2026-07-29', label: 'lundi 27 juillet au mercredi 29 juillet 2026', monthKey: '2026-07' },
  { id: 'p51', start: '2026-07-29', end: '2026-07-31', label: 'mercredi 29 juillet au vendredi 31 juillet 2026', monthKey: '2026-07' },
  { id: 'p52', start: '2026-07-31', end: '2026-08-02', label: 'vendredi 31 juillet au dimanche 2 août 2026', monthKey: '2026-07' },
  { id: 'p53', start: '2026-08-02', end: '2026-08-04', label: 'dimanche 2 août au mardi 4 août 2026', monthKey: '2026-08' },
  { id: 'p54', start: '2026-08-04', end: '2026-08-06', label: 'mardi 4 août au jeudi 6 août 2026', monthKey: '2026-08' },
  { id: 'p55', start: '2026-08-06', end: '2026-08-08', label: 'jeudi 6 août au samedi 8 août 2026', monthKey: '2026-08' },
  { id: 'p56', start: '2026-08-08', end: '2026-08-10', label: 'samedi 8 août au lundi 10 août 2026', monthKey: '2026-08' },
  { id: 'p57', start: '2026-08-10', end: '2026-08-12', label: 'lundi 10 août au mercredi 12 août 2026', monthKey: '2026-08' },
  { id: 'p58', start: '2026-08-12', end: '2026-08-14', label: 'mercredi 12 août au vendredi 14 août 2026', monthKey: '2026-08' },
  { id: 'p59', start: '2026-08-14', end: '2026-08-16', label: 'vendredi 14 août au dimanche 16 août 2026', monthKey: '2026-08' },
  { id: 'p60', start: '2026-08-16', end: '2026-08-18', label: 'dimanche 16 août au mardi 18 août 2026', monthKey: '2026-08' },
  { id: 'p61', start: '2026-08-18', end: '2026-08-20', label: 'mardi 18 août au jeudi 20 août 2026', monthKey: '2026-08' },
  { id: 'p62', start: '2026-08-20', end: '2026-08-22', label: 'jeudi 20 août au samedi 22 août 2026', monthKey: '2026-08' },
  { id: 'p63', start: '2026-08-22', end: '2026-08-24', label: 'samedi 22 août au lundi 24 août 2026', monthKey: '2026-08' },
  { id: 'p64', start: '2026-08-24', end: '2026-08-26', label: 'lundi 24 août au mercredi 26 août 2026', monthKey: '2026-08' },
  { id: 'p65', start: '2026-08-26', end: '2026-08-28', label: 'mercredi 26 août au vendredi 28 août 2026', monthKey: '2026-08' },
  { id: 'p66', start: '2026-08-28', end: '2026-08-30', label: 'vendredi 28 août au dimanche 30 août 2026', monthKey: '2026-08' },
  { id: 'p67', start: '2026-08-30', end: '2026-09-01', label: 'dimanche 30 août au mardi 1 septembre 2026', monthKey: '2026-08' },
  { id: 'p68', start: '2026-09-01', end: '2026-09-03', label: 'mardi 1 septembre au jeudi 3 septembre 2026', monthKey: '2026-09' },
  { id: 'p69', start: '2026-09-03', end: '2026-09-05', label: 'jeudi 3 septembre au samedi 5 septembre 2026', monthKey: '2026-09' },
  { id: 'p70', start: '2026-09-05', end: '2026-09-07', label: 'samedi 5 septembre au lundi 7 septembre 2026', monthKey: '2026-09' },
  { id: 'p71', start: '2026-09-07', end: '2026-09-09', label: 'lundi 7 septembre au mercredi 9 septembre 2026', monthKey: '2026-09' },
  { id: 'p72', start: '2026-09-09', end: '2026-09-11', label: 'mercredi 9 septembre au vendredi 11 septembre 2026', monthKey: '2026-09' },
  { id: 'p73', start: '2026-09-11', end: '2026-09-13', label: 'vendredi 11 septembre au dimanche 13 septembre 2026', monthKey: '2026-09' },
  { id: 'p74', start: '2026-09-13', end: '2026-09-15', label: 'dimanche 13 septembre au mardi 15 septembre 2026', monthKey: '2026-09' },
  { id: 'p75', start: '2026-09-15', end: '2026-09-17', label: 'mardi 15 septembre au jeudi 17 septembre 2026', monthKey: '2026-09' },
  { id: 'p76', start: '2026-09-17', end: '2026-09-19', label: 'jeudi 17 septembre au samedi 19 septembre 2026', monthKey: '2026-09' },
  { id: 'p77', start: '2026-09-19', end: '2026-09-21', label: 'samedi 19 septembre au lundi 21 septembre 2026', monthKey: '2026-09' },
  { id: 'p78', start: '2026-09-21', end: '2026-09-23', label: 'lundi 21 septembre au mercredi 23 septembre 2026', monthKey: '2026-09' },
  { id: 'p79', start: '2026-09-23', end: '2026-09-25', label: 'mercredi 23 septembre au vendredi 25 septembre 2026', monthKey: '2026-09' },
  { id: 'p80', start: '2026-09-25', end: '2026-09-27', label: 'vendredi 25 septembre au dimanche 27 septembre 2026', monthKey: '2026-09' },
  { id: 'p81', start: '2026-09-27', end: '2026-09-29', label: 'dimanche 27 septembre au mardi 29 septembre 2026', monthKey: '2026-09' },
  { id: 'p82', start: '2026-09-29', end: '2026-10-01', label: 'mardi 29 septembre au jeudi 1 octobre 2026', monthKey: '2026-09' },
  { id: 'p83', start: '2026-10-01', end: '2026-10-03', label: 'jeudi 1 octobre au samedi 3 octobre 2026', monthKey: '2026-10' },
  { id: 'p84', start: '2026-10-03', end: '2026-10-05', label: 'samedi 3 octobre au lundi 5 octobre 2026', monthKey: '2026-10' },
  { id: 'p85', start: '2026-10-05', end: '2026-10-07', label: 'lundi 5 octobre au mercredi 7 octobre 2026', monthKey: '2026-10' },
  { id: 'p86', start: '2026-10-07', end: '2026-10-09', label: 'mercredi 7 octobre au vendredi 9 octobre 2026', monthKey: '2026-10' },
  { id: 'p87', start: '2026-10-09', end: '2026-10-11', label: 'vendredi 9 octobre au dimanche 11 octobre 2026', monthKey: '2026-10' },
  { id: 'p88', start: '2026-10-11', end: '2026-10-13', label: 'dimanche 11 octobre au mardi 13 octobre 2026', monthKey: '2026-10' },
  { id: 'p89', start: '2026-10-13', end: '2026-10-15', label: 'mardi 13 octobre au jeudi 15 octobre 2026', monthKey: '2026-10' },
  { id: 'p90', start: '2026-10-15', end: '2026-10-17', label: 'jeudi 15 octobre au samedi 17 octobre 2026', monthKey: '2026-10' },
  { id: 'p91', start: '2026-10-17', end: '2026-10-19', label: 'samedi 17 octobre au lundi 19 octobre 2026', monthKey: '2026-10' },
  { id: 'p92', start: '2026-10-19', end: '2026-10-21', label: 'lundi 19 octobre au mercredi 21 octobre 2026', monthKey: '2026-10' },
  { id: 'p93', start: '2026-10-21', end: '2026-10-23', label: 'mercredi 21 octobre au vendredi 23 octobre 2026', monthKey: '2026-10' },
  { id: 'p94', start: '2026-10-23', end: '2026-10-25', label: 'vendredi 23 octobre au dimanche 25 octobre 2026', monthKey: '2026-10' },
  { id: 'p95', start: '2026-10-25', end: '2026-10-27', label: 'dimanche 25 octobre au mardi 27 octobre 2026', monthKey: '2026-10' },
  { id: 'p96', start: '2026-10-27', end: '2026-10-29', label: 'mardi 27 octobre au jeudi 29 octobre 2026', monthKey: '2026-10' },
  { id: 'p97', start: '2026-10-29', end: '2026-10-31', label: 'jeudi 29 octobre au samedi 31 octobre 2026', monthKey: '2026-10' },
  { id: 'p98', start: '2026-10-31', end: '2026-11-02', label: 'samedi 31 octobre au lundi 2 novembre 2026', monthKey: '2026-10' },
  { id: 'p99', start: '2026-11-02', end: '2026-11-04', label: 'lundi 2 novembre au mercredi 4 novembre 2026', monthKey: '2026-11' },
  { id: 'p100', start: '2026-11-04', end: '2026-11-06', label: 'mercredi 4 novembre au vendredi 6 novembre 2026', monthKey: '2026-11' },
  { id: 'p101', start: '2026-11-06', end: '2026-11-08', label: 'vendredi 6 novembre au dimanche 8 novembre 2026', monthKey: '2026-11' },
  { id: 'p102', start: '2026-11-08', end: '2026-11-10', label: 'dimanche 8 novembre au mardi 10 novembre 2026', monthKey: '2026-11' },
  { id: 'p103', start: '2026-11-10', end: '2026-11-12', label: 'mardi 10 novembre au jeudi 12 novembre 2026', monthKey: '2026-11' },
  { id: 'p104', start: '2026-11-12', end: '2026-11-14', label: 'jeudi 12 novembre au samedi 14 novembre 2026', monthKey: '2026-11' },
  { id: 'p105', start: '2026-11-14', end: '2026-11-16', label: 'samedi 14 novembre au lundi 16 novembre 2026', monthKey: '2026-11' },
];

const MONTHS_META = [
  { key: '2026-04', label: 'Avril 2026',     short: 'Avr' },
  { key: '2026-05', label: 'Mai 2026',        short: 'Mai' },
  { key: '2026-06', label: 'Juin 2026',       short: 'Juin' },
  { key: '2026-07', label: 'Juillet 2026',    short: 'Juil' },
  { key: '2026-08', label: 'Aout 2026',       short: 'Aout' },
  { key: '2026-09', label: 'Septembre 2026',  short: 'Sep' },
  { key: '2026-10', label: 'Octobre 2026',    short: 'Oct' },
  { key: '2026-11', label: 'Novembre 2026',   short: 'Nov' },
];

const today = () => new Date().toISOString().slice(0,10);

function validate(f) {
  const e = {};
  if (!f.nom.trim())    e.nom    = 'Requis';
  if (!f.prenom.trim()) e.prenom = 'Requis';
  const digits = f.telephone.replace(/\D/g,'');
  if (digits.length < 6) e.telephone = 'Numero invalide';
  if (f.periodeIds.length === 0) e.periodes = 'Choisissez au moins une periode';
  if (!f.intentionPriere) e.intentionPriere = 'Requis';
  return e;
}

const emptyForm = () => ({
  nom: '', prenom: '', telephone: '',
  periodeIds: [], intentionPriere: '', notes: ''
});

function RapportModal({ eng, onClose, onSave }) {
  const [h, setH] = useState('');
  const [m, setM] = useState('');
  const [txt, setTxt] = useState('');
  const [err, setErr] = useState({});
  function submit() {
    const e = {};
    if (h === '' || isNaN(h) || +h < 0 || +h > 72) e.h = '0-72';
    if (m === '' || isNaN(m) || +m < 0 || +m > 59) e.m = '0-59';
    if (!txt.trim()) e.txt = 'Requis';
    setErr(e);
    if (!Object.keys(e).length) onSave({ heures: +h, minutes: +m, temoignage: txt });
  }
  const periods = ALL_PERIODS.filter(p => eng.periodeIds.includes(p.id));
  return (
    <div style={S.overlay}>
      <div style={S.modal}>
        <div style={S.mHead}>
          <div style={S.mIcon}>🕊️</div>
          <h2 style={S.mTitle}>Compte-rendu de Jeune</h2>
          <p style={S.mSub}>{eng.prenom} {eng.nom}</p>
          <p style={{...S.mSub, fontSize:12, opacity:.7}}>{periods.map(p=>p.label).join(' · ')}</p>
        </div>
        <div style={S.mBody}>
          <label style={S.label}>Temps de priere total investi</label>
          <div style={{display:'flex',gap:12,marginBottom:16}}>
            <div style={{flex:1}}>
              <input style={{...S.inp,...(err.h?S.inpErr:{})}} type="number" placeholder="Heures" value={h} onChange={e=>setH(e.target.value)} />
              {err.h && <p style={S.errTxt}>{err.h}h</p>}
            </div>
            <div style={{flex:1}}>
              <input style={{...S.inp,...(err.m?S.inpErr:{})}} type="number" placeholder="Minutes" value={m} onChange={e=>setM(e.target.value)} />
              {err.m && <p style={S.errTxt}>{err.m}min</p>}
            </div>
          </div>
          <label style={S.label}>Temoignage / compte-rendu</label>
          <textarea rows={4} style={{...S.inp,resize:'vertical',...(err.txt?S.inpErr:{})}} placeholder="Partagez votre experience..." value={txt} onChange={e=>setTxt(e.target.value)} />
          {err.txt && <p style={S.errTxt}>{err.txt}</p>}
        </div>
        <div style={S.mFoot}>
          <button style={S.btnSec} onClick={onClose}>Annuler</button>
          <button style={S.btnPri} onClick={submit}>Confirmer</button>
        </div>
      </div>
    </div>
  );
}

function Preview({ form, onEdit, onConfirm }) {
  const periods = ALL_PERIODS.filter(p => form.periodeIds.includes(p.id));
  return (
    <div style={S.overlay}>
      <div style={{...S.modal, maxWidth:560}}>
        <div style={S.mHead}>
          <div style={S.mIcon}>🔍</div>
          <h2 style={S.mTitle}>Verification de l engagement</h2>
          <p style={S.mSub}>Confirmez vos informations avant l enregistrement</p>
        </div>
        <div style={{...S.mBody, maxHeight:'60vh', overflowY:'auto'}}>
          {[
            ['Nom complet', form.prenom + ' ' + form.nom],
            ['Telephone', form.telephone],
            ['Type de jeune', 'Jeune complet - eau uniquement, sans manger'],
            ['Temps de priere envisage', form.intentionPriere],
            ...(form.notes ? [['Notes', form.notes]] : []),
          ].map(([k,v]) => (
            <div key={k} style={S.pvRow}>
              <span style={S.pvKey}>{k}</span>
              <span style={S.pvVal}>{v}</span>
            </div>
          ))}
          <div style={{marginTop:12}}>
            <span style={{...S.pvKey, display:'block', marginBottom:8}}>
              {periods.length > 1 ? 'Periodes choisies' : 'Periode choisie'} ({periods.length})
            </span>
            {periods.map(p => (
              <div key={p.id} style={S.pvPeriod}>✦ {p.label}</div>
            ))}
          </div>
        </div>
        <div style={S.mFoot}>
          <button style={S.btnSec} onClick={onEdit}>Modifier</button>
          <button style={S.btnPri} onClick={onConfirm}>Enregistrer</button>
        </div>
      </div>
    </div>
  );
}

function RappelModal({ eng, onClose }) {
  const [copied, setCopied] = useState(false);
  const ps = ALL_PERIODS.filter(p => eng.periodeIds?.includes(p.id));

  function veilleLabel(startDate) {
    const d = new Date(startDate);
    d.setDate(d.getDate() - 1);
    const DAYS = ['dimanche','lundi','mardi','mercredi','jeudi','vendredi','samedi'];
    const MOIS = ['janvier','fevrier','mars','avril','mai','juin','juillet','aout','septembre','octobre','novembre','decembre'];
    return DAYS[d.getDay()] + ' ' + d.getDate() + ' ' + MOIS[d.getMonth()] + ' ' + d.getFullYear();
  }

  function buildMessage(p) {
    return 'Rappel - Chaine de Jeune JOJ DAKAR 2026\n\nBonjour ' + eng.prenom + ' ' + eng.nom + ',\n\nVotre periode de jeune commence demain :\n' + p.label + '\n\nJeune complet - eau uniquement, sans manger\n\nTemps de priere envisage : ' + eng.intentionPriere + '\n\nQue Dieu vous fortifie !';
  }

  function openWhatsApp(p) {
    const phone = eng.telephone.replace(/\D/g,'');
    const msg = encodeURIComponent(buildMessage(p));
    window.open('https://wa.me/' + phone + '?text=' + msg, '_blank');
  }

  function copyMessage(p) {
    navigator.clipboard.writeText(buildMessage(p)).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    });
  }

  return (
    <div style={S.overlay}>
      <div style={{...S.modal, maxWidth:520}}>
        <div style={S.mHead}>
          <div style={S.mIcon}>🔔</div>
          <h2 style={S.mTitle}>Envoyer un rappel</h2>
          <p style={S.mSub}>{eng.prenom} {eng.nom} - {eng.telephone}</p>
        </div>
        <div style={{...S.mBody, maxHeight:'65vh', overflowY:'auto'}}>
          {ps.length === 0 && <p style={{color:'#94a3b8',fontSize:14}}>Aucune periode enregistree.</p>}
          {ps.map(p => {
            const isPast = p.end < today();
            return (
              <div key={p.id} style={{...S.rappelBox,...(isPast?{opacity:.45}:{})}}>
                <div style={{fontSize:13,fontWeight:700,color:'#0f2a4a',marginBottom:4}}>
                  📅 {p.label}
                </div>
                {isPast
                  ? <span style={S.pastBadge}>Passee</span>
                  : <div style={S.rappelVeille}>Rappel a envoyer le {veilleLabel(p.start)}</div>
                }
                <div style={S.rappelMsgPreview}>{buildMessage(p)}</div>
                {!isPast && (
                  <div style={S.rappelBtns}>
                    <button style={S.btnWA} onClick={() => openWhatsApp(p)}>
                      💬 WhatsApp
                    </button>
                    <button style={{...S.btnCopy,...(copied?S.btnCopied:{})}} onClick={() => copyMessage(p)}>
                      {copied ? 'Copie !' : 'Copier'}
                    </button>
                  </div>
                )}
              </div>
            );
          })}
        </div>
        <div style={S.mFoot}>
          <button style={{...S.btnSec, flex:'none', width:'100%'}} onClick={onClose}>Fermer</button>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  const [tab, setTab]               = useState('form');
  const [form, setForm]             = useState(emptyForm());
  const [errors, setErrors]         = useState({});
  const [preview, setPreview]       = useState(false);
  const [engagements, setEngagements] = useState([]);
  const [rapport, setRapport]       = useState(null);
  const [rappel, setRappel]         = useState(null);
  const [success, setSuccess]       = useState('');
  const [activeMois, setActiveMois] = useState('2026-06');
  const [filterMois, setFilterMois] = useState('');

  useEffect(() => {
    (async () => {
      try { const r = await window.storage.get('eng_v2'); if (r) setEngagements(JSON.parse(r.value)); } catch {}
    })();
  }, []);

  async function saveAll(list) {
    setEngagements(list);
    try { await window.storage.set('eng_v2', JSON.stringify(list)); } catch {}
  }

  function togglePeriode(id) {
    const ids = form.periodeIds.includes(id)
      ? form.periodeIds.filter(x => x !== id)
      : [...form.periodeIds, id];
    setForm(f => ({ ...f, periodeIds: ids }));
    if (errors.periodes) setErrors(e => { const n={...e}; delete n.periodes; return n; });
  }

  function handleChange(k, v) {
    setForm(f => ({ ...f, [k]: v }));
    if (errors[k]) setErrors(e => { const n={...e}; delete n[k]; return n; });
  }

  function handleSubmit() {
    const e = validate(form);
    setErrors(e);
    if (!Object.keys(e).length) setPreview(true);
  }

  async function confirmEng() {
    const eng = { ...form, id: Date.now(), statut: 'en_attente', createdAt: today() };
    await saveAll([...engagements, eng]);
    setPreview(false); setForm(emptyForm()); setErrors({});
    setSuccess('Engagement enregistre avec succes !');
    setTimeout(() => setSuccess(''), 4500);
    setTab('liste');
  }

  async function confirmRapport({ heures, minutes, temoignage }) {
    const updated = engagements.map(e =>
      e.id === rapport.id ? { ...e, statut: 'confirme', rapport: { heures, minutes, temoignage, date: today() } } : e
    );
    await saveAll(updated);
    setRapport(null);
    setSuccess('Compte-rendu enregistre ! Merci pour votre fidelite');
    setTimeout(() => setSuccess(''), 4500);
  }

  const monthPeriods = ALL_PERIODS.filter(p => p.monthKey === activeMois);
  const liste = filterMois ? engagements.filter(e => {
    const ps = ALL_PERIODS.filter(p => e.periodeIds?.includes(p.id));
    return ps.some(p => p.monthKey === filterMois);
  }) : engagements;

  const total    = engagements.length;
  const conf     = engagements.filter(e => e.statut === 'confirme').length;
  const hPriere  = engagements.filter(e => e.rapport).reduce((s,e) => s + e.rapport.heures + e.rapport.minutes/60, 0);
  const takenIds = new Set(engagements.flatMap(e => e.periodeIds || []));
  const pctCov   = Math.round(takenIds.size / ALL_PERIODS.length * 100);

  const PRAYER_OPTS = ['01 heure', '02 heures', '03 heures', 'Plus'];

  return (
    <div style={S.root}>
      <div style={S.header}>
        <div style={S.hTop}>
          <div>
            <h1 style={S.hTitle}>Chaine de Jeune et Priere — JOJ DAKAR 2026</h1>
            <p style={S.hSub}>20 Avril → 20 Novembre 2026 · Periodes de 3 jours</p>
          </div>
          <div style={S.hBadge}>
            <span style={{fontSize:22,display:'block'}}>🔥</span>
            <span style={{fontWeight:700}}>{total}</span>
            <span style={{fontSize:11,opacity:.8}}>engagements</span>
          </div>
        </div>
        <div style={S.tabs}>
          {[['form','✍️ Engagement'],['liste','📋 Liste'],['stats','📊 Bilan']].map(([id,lbl]) => (
            <button key={id} style={{...S.tab,...(tab===id?S.tabOn:{})}} onClick={() => setTab(id)}>{lbl}</button>
          ))}
        </div>
      </div>

      {success && <div style={S.toast}>{success}</div>}

      <div style={S.content}>

        {tab === 'form' && (
          <div style={S.card}>
            <h2 style={S.cardT}>Formulaire d Engagement</h2>

            <div style={S.section}>
              <h3 style={S.secT}>Informations personnelles</h3>
              <div style={S.g2}>
                {[['nom','Nom *'],['prenom','Prenom *']].map(([k,lbl]) => (
                  <Fld key={k} label={lbl} err={errors[k]}>
                    <input style={{...S.inp,...(errors[k]?S.inpErr:{})}} placeholder={lbl.replace(' *','')} value={form[k]} onChange={e => handleChange(k, e.target.value)} />
                  </Fld>
                ))}
              </div>
              <Fld label="Telephone *" err={errors.telephone}>
                <input style={{...S.inp,...(errors.telephone?S.inpErr:{})}} placeholder="ex : +221 77 123 45 67 ou +33 6 12 34 56 78" value={form.telephone} inputMode="tel" onChange={e => handleChange('telephone', e.target.value)} />
              </Fld>
            </div>

            <div style={S.section}>
              <h3 style={S.secT}>Choisissez vos periodes de jeune</h3>
              {errors.periodes && <div style={S.errBanner}>{errors.periodes}</div>}
              <div style={S.moisBar}>
                {MONTHS_META.map(m => (
                  <button key={m.key} style={{...S.moisBtn,...(activeMois===m.key?S.moisBtnOn:{})}} onClick={() => setActiveMois(m.key)}>
                    {m.short}
                    {ALL_PERIODS.filter(p => p.monthKey===m.key && form.periodeIds.includes(p.id)).length > 0 &&
                      <span style={S.moisDot}>{ALL_PERIODS.filter(p => p.monthKey===m.key && form.periodeIds.includes(p.id)).length}</span>
                    }
                  </button>
                ))}
              </div>
              <div style={S.moisTitre}>
                CHAINE DE JEUNE POUR LE JOJ DAKAR 2026 — {(MONTHS_META.find(m => m.key===activeMois)?.label || '').toUpperCase()}
                <div style={S.moisTitreS}>Cochez votre / vos periode(s)</div>
              </div>
              <div style={S.periodesGrid}>
                {monthPeriods.map((p, i) => {
                  const checked = form.periodeIds.includes(p.id);
                  const isPast  = p.end < today();
                  const takenByOther = takenIds.has(p.id);
                  return (
                    <label key={p.id}
                      style={{...S.periodeRow,...(checked?S.periodeRowOn:{}),...(isPast?S.periodeRowPast:{})}}
                      onClick={() => !isPast && togglePeriode(p.id)}>
                      <div style={{...S.checkbox,...(checked?S.checkboxOn:{}),...(isPast?S.checkboxPast:{})}}>
                        {isPast ? <span style={{fontSize:11}}>X</span> : checked && <span style={S.checkMark}>✔</span>}
                      </div>
                      <div style={S.periodeContent}>
                        <span style={S.periodeNum}>Periode {i+1}</span>
                        <span style={{...S.periodeLabel,...(isPast?{color:'#94a3b8',textDecoration:'line-through'}:{})}}>{p.label}</span>
                      </div>
                      {isPast
                        ? <span style={S.pastBadge}>Passee</span>
                        : takenByOther && !checked && <span style={S.takenBadge}>👤</span>
                      }
                    </label>
                  );
                })}
              </div>
              {form.periodeIds.length > 0 && (
                <div style={S.selSummary}>
                  {form.periodeIds.length} periode{form.periodeIds.length>1?'s':''} selectionnee{form.periodeIds.length>1?'s':''}
                </div>
              )}
            </div>

            <div style={S.section}>
              <h3 style={S.secT}>Details du jeune</h3>
              <div style={S.jeuneInfo}>
                💧 Jeune complet — eau uniquement, sans manger
              </div>
              <Fld label="Temps de priere envisage *" err={errors.intentionPriere}>
                <div style={S.radioGroup}>
                  {PRAYER_OPTS.map(opt => (
                    <label key={opt} style={{...S.radioRow,...(form.intentionPriere===opt?S.radioRowOn:{})}}
                      onClick={() => handleChange('intentionPriere', opt)}>
                      <div style={{...S.radioCircle,...(form.intentionPriere===opt?S.radioCircleOn:{})}}>
                        {form.intentionPriere===opt && <div style={S.radioDot} />}
                      </div>
                      <span style={{fontSize:14,color:'#1e293b'}}>{opt}</span>
                    </label>
                  ))}
                </div>
              </Fld>
              <Fld label="Notes / Remarques (optionnel)">
                <textarea rows={2} style={{...S.inp,resize:'vertical'}} placeholder="Informations supplementaires..." value={form.notes} onChange={e => handleChange('notes', e.target.value)} />
              </Fld>
            </div>

            {Object.keys(errors).length > 0 && (
              <div style={S.errBanner}>Corrigez {Object.keys(errors).length} erreur{Object.keys(errors).length>1?'s':''} avant de continuer.</div>
            )}
            <button style={S.btnBig} onClick={handleSubmit}>Verifier et Confirmer</button>
          </div>
        )}

        {tab === 'liste' && (
          <div style={S.card}>
            <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',flexWrap:'wrap',gap:12,marginBottom:20}}>
              <h2 style={S.cardT}>Engagements ({liste.length})</h2>
              <select style={{...S.inp,width:'auto',minWidth:180}} value={filterMois} onChange={e => setFilterMois(e.target.value)}>
                <option value="">Tous les mois</option>
                {MONTHS_META.map(m => <option key={m.key} value={m.key}>{m.label}</option>)}
              </select>
            </div>
            {liste.length === 0
              ? <div style={S.empty}>Aucun engagement pour ce filtre.</div>
              : liste.slice().reverse().map(eng => {
                  const ps = ALL_PERIODS.filter(p => eng.periodeIds?.includes(p.id));
                  return (
                    <div key={eng.id} style={S.engCard}>
                      <div style={S.engTop}>
                        <div>
                          <strong style={{fontSize:16,color:'#1e293b'}}>{eng.prenom} {eng.nom}</strong>
                          <div style={{fontSize:13,color:'#64748b',marginTop:2}}>📞 {eng.telephone}</div>
                        </div>
                        <span style={{...S.badge,...(eng.statut==='confirme'?S.bdgOk:S.bdgWait)}}>
                          {eng.statut==='confirme' ? 'Confirme' : 'En attente'}
                        </span>
                      </div>
                      <div style={{fontSize:13,color:'#475569',margin:'6px 0 4px'}}>
                        💧 Jeune complet — eau uniquement
                      </div>
                      <div style={S.periodesListe}>
                        {ps.map(p => <span key={p.id} style={S.perTag}>{p.label}</span>)}
                      </div>
                      <div style={{fontSize:13,color:'#475569',marginTop:6}}>⏱ {eng.intentionPriere}</div>
                      {eng.rapport && (
                        <div style={S.rapBox}>
                          <strong>Compte-rendu :</strong> {eng.rapport.heures}h{String(eng.rapport.minutes).padStart(2,'0')} de priere · {eng.rapport.date}
                          <div style={{fontSize:12,color:'#64748b',marginTop:4,fontStyle:'italic'}}>{eng.rapport.temoignage}</div>
                        </div>
                      )}
                      <div style={{display:'flex',gap:8,marginTop:10,flexWrap:'wrap'}}>
                        {eng.statut !== 'confirme' && (
                          <button style={S.btnRap} onClick={() => setRapport(eng)}>📝 Compte-rendu</button>
                        )}
                        <button style={S.btnRappel} onClick={() => setRappel(eng)}>🔔 Envoyer rappel</button>
                      </div>
                    </div>
                  );
                })
            }
          </div>
        )}

        {tab === 'stats' && (
          <div>
            <div style={S.statsGrid}>
              {[
                ['🤝','Engagements',total,'total'],
                ['✅','Confirmes',conf, total ? Math.round(conf/total*100)+'%' : '0%'],
                ['⏰','Heures de priere',Math.round(hPriere)+'h','cumulees'],
                ['📆','Couverture',pctCov+'%',takenIds.size+'/'+ALL_PERIODS.length+' periodes'],
              ].map(([icon,lbl,val,sub]) => (
                <div key={lbl} style={S.statCard}>
                  <div style={{fontSize:30,marginBottom:8}}>{icon}</div>
                  <div style={S.statVal}>{val}</div>
                  <div style={S.statLbl}>{lbl}</div>
                  <div style={S.statSub}>{sub}</div>
                </div>
              ))}
            </div>
            <div style={S.card}>
              <h3 style={S.cardT}>Couverture par mois</h3>
              {MONTHS_META.map(m => {
                const tot = ALL_PERIODS.filter(p => p.monthKey===m.key).length;
                const tak = ALL_PERIODS.filter(p => p.monthKey===m.key && takenIds.has(p.id)).length;
                const pct = Math.round(tak/tot*100);
                return (
                  <div key={m.key} style={S.moisRow}>
                    <span style={{minWidth:140,fontSize:13,fontWeight:600}}>{m.label}</span>
                    <div style={S.barBg}><div style={{...S.barFill,width:pct+'%'}} /></div>
                    <span style={S.moisCnt}>{tak}/{tot} periodes · {pct}%</span>
                  </div>
                );
              })}
            </div>
            <div style={S.card}>
              <h3 style={S.cardT}>Grille de toutes les periodes</h3>
              <p style={{fontSize:13,color:'#64748b',marginBottom:16}}>Vert = prise · Gris = disponible</p>
              {MONTHS_META.map(m => (
                <div key={m.key} style={{marginBottom:16}}>
                  <div style={{fontSize:13,fontWeight:700,color:'#1a3a5c',marginBottom:6}}>{m.label}</div>
                  <div style={{display:'flex',flexWrap:'wrap',gap:6}}>
                    {ALL_PERIODS.filter(p => p.monthKey===m.key).map((p,i) => (
                      <div key={p.id} title={p.label} style={{...S.cellBase,...(takenIds.has(p.id)?S.cellTaken:S.cellFree)}}>{i+1}</div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {preview && <Preview form={form} onEdit={() => setPreview(false)} onConfirm={confirmEng} />}
      {rapport  && <RapportModal eng={rapport} onClose={() => setRapport(null)} onSave={confirmRapport} />}
      {rappel   && <RappelModal eng={rappel} onClose={() => setRappel(null)} />}
    </div>
  );
}

function Fld({ label, err, children }) {
  return (
    <div style={{marginBottom:14}}>
      <label style={S.label}>{label}</label>
      {children}
      {err && <p style={S.errTxt}>{err}</p>}
    </div>
  );
}

const S = {
  root:    { fontFamily:'Georgia,serif', background:'#f0f4f8', minHeight:'100vh', color:'#1e293b' },
  header:  { background:'linear-gradient(140deg,#0f2a4a 0%,#1a5c3a 100%)', color:'#fff' },
  hTop:    { display:'flex', justifyContent:'space-between', alignItems:'flex-start', padding:'24px 28px 12px', flexWrap:'wrap', gap:12 },
  hTitle:  { margin:0, fontSize:18, fontWeight:700 },
  hSub:    { margin:'5px 0 0', fontSize:12, opacity:.75 },
  hBadge:  { background:'rgba(255,255,255,.15)', border:'1px solid rgba(255,255,255,.25)', borderRadius:14, padding:'10px 18px', textAlign:'center', lineHeight:1.4, color:'#fff' },
  tabs:    { display:'flex', gap:4, padding:'0 24px', borderTop:'1px solid rgba(255,255,255,.12)' },
  tab:     { background:'none', border:'none', color:'rgba(255,255,255,.65)', padding:'12px 18px', fontSize:14, cursor:'pointer', borderBottom:'3px solid transparent', fontFamily:'inherit' },
  tabOn:   { color:'#fff', borderBottom:'3px solid #a3e635', fontWeight:700 },
  content: { padding:'24px 16px', maxWidth:800, margin:'0 auto' },
  card:    { background:'#fff', borderRadius:14, padding:'24px', boxShadow:'0 2px 16px rgba(0,0,0,.08)', marginBottom:24 },
  cardT:   { margin:'0 0 20px', fontSize:18, fontWeight:700, color:'#0f2a4a' },
  section: { marginBottom:24, paddingBottom:20, borderBottom:'1px solid #f1f5f9' },
  secT:    { margin:'0 0 14px', fontSize:15, fontWeight:700, color:'#1a5c3a' },
  g2:      { display:'grid', gridTemplateColumns:'1fr 1fr', gap:'0 20px' },
  label:   { display:'block', fontSize:12, fontWeight:700, color:'#475569', marginBottom:6, textTransform:'uppercase', letterSpacing:'.5px' },
  inp:     { width:'100%', padding:'10px 12px', border:'1.5px solid #e2e8f0', borderRadius:8, fontSize:14, color:'#1e293b', background:'#fafafa', boxSizing:'border-box', outline:'none', fontFamily:'inherit' },
  inpErr:  { borderColor:'#ef4444', background:'#fff5f5' },
  errTxt:  { margin:'4px 0 0', fontSize:12, color:'#ef4444' },
  errBanner:{ background:'#fef2f2', border:'1px solid #fecaca', borderRadius:8, padding:'10px 14px', color:'#dc2626', fontSize:13, marginBottom:14 },
  moisBar: { display:'flex', flexWrap:'wrap', gap:6, marginBottom:16 },
  moisBtn: { padding:'6px 12px', border:'1.5px solid #cbd5e1', borderRadius:20, fontSize:12, fontWeight:600, cursor:'pointer', background:'#f8fafc', color:'#475569', fontFamily:'inherit', position:'relative' },
  moisBtnOn:{ background:'#0f2a4a', color:'#fff', border:'1.5px solid #0f2a4a' },
  moisDot: { position:'absolute', top:-6, right:-6, background:'#a3e635', color:'#0f2a4a', borderRadius:10, fontSize:10, fontWeight:800, padding:'1px 5px', lineHeight:1.4 },
  moisTitre:{ background:'linear-gradient(135deg,#0f2a4a,#1a5c3a)', color:'#fff', borderRadius:10, padding:'14px 18px', textAlign:'center', fontWeight:700, fontSize:13, letterSpacing:'.5px', marginBottom:16 },
  moisTitreS:{ fontSize:12, opacity:.8, fontWeight:400, marginTop:4 },
  periodesGrid:{ display:'flex', flexDirection:'column', gap:6 },
  periodeRow:{ display:'flex', alignItems:'center', gap:12, padding:'10px 14px', border:'1.5px solid #e2e8f0', borderRadius:10, cursor:'pointer', background:'#fafbfc', userSelect:'none' },
  periodeRowOn:{ border:'1.5px solid #1a5c3a', background:'#f0fdf4', boxShadow:'0 0 0 3px rgba(26,92,58,.08)' },
  periodeRowPast:{ opacity:.5, cursor:'not-allowed', background:'#f8fafc' },
  checkbox:{ width:22, height:22, border:'2px solid #cbd5e1', borderRadius:6, display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0, background:'#fff' },
  checkboxOn:{ background:'#1a5c3a', border:'2px solid #1a5c3a' },
  checkboxPast:{ background:'#e2e8f0', border:'2px solid #cbd5e1', color:'#94a3b8' },
  checkMark:{ color:'#fff', fontSize:13, fontWeight:800 },
  periodeContent:{ flex:1 },
  periodeNum:{ fontSize:11, fontWeight:700, color:'#94a3b8', textTransform:'uppercase', letterSpacing:'.5px', display:'block' },
  periodeLabel:{ fontSize:14, color:'#1e293b', fontWeight:500 },
  pastBadge:{ fontSize:11, fontWeight:700, color:'#94a3b8', background:'#e2e8f0', borderRadius:10, padding:'2px 8px', whiteSpace:'nowrap' },
  takenBadge:{ fontSize:16, opacity:.6 },
  selSummary:{ marginTop:12, padding:'10px 14px', background:'#f0fdf4', border:'1px solid #bbf7d0', borderRadius:8, fontSize:13, color:'#166534', fontWeight:600 },
  jeuneInfo:{ background:'#eff6ff', border:'1px solid #bfdbfe', borderRadius:8, padding:'11px 16px', fontSize:14, color:'#1d4ed8', marginBottom:14 },
  radioGroup:{ display:'flex', flexDirection:'column', gap:8, marginTop:4 },
  radioRow:{ display:'flex', alignItems:'center', gap:12, padding:'11px 14px', border:'1.5px solid #e2e8f0', borderRadius:9, cursor:'pointer', background:'#fafbfc', userSelect:'none' },
  radioRowOn:{ border:'1.5px solid #1a5c3a', background:'#f0fdf4' },
  radioCircle:{ width:20, height:20, borderRadius:'50%', border:'2px solid #cbd5e1', display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0, background:'#fff' },
  radioCircleOn:{ border:'2px solid #1a5c3a' },
  radioDot:{ width:10, height:10, borderRadius:'50%', background:'#1a5c3a' },
  btnBig:{ width:'100%', padding:'15px', background:'linear-gradient(135deg,#0f2a4a,#1a5c3a)', color:'#fff', border:'none', borderRadius:10, fontSize:16, fontWeight:700, cursor:'pointer', marginTop:8, fontFamily:'inherit' },
  toast:{ position:'fixed', top:20, right:20, background:'#22c55e', color:'#fff', padding:'14px 22px', borderRadius:10, fontSize:15, fontWeight:600, zIndex:9999, boxShadow:'0 4px 20px rgba(0,0,0,.2)' },
  engCard:{ border:'1px solid #e2e8f0', borderRadius:10, padding:'16px 18px', marginBottom:14, background:'#fafbfc' },
  engTop:{ display:'flex', justifyContent:'space-between', alignItems:'flex-start', marginBottom:8 },
  badge:{ padding:'4px 12px', borderRadius:20, fontSize:12, fontWeight:700 },
  bdgOk:{ background:'#dcfce7', color:'#16a34a' },
  bdgWait:{ background:'#fef9c3', color:'#854d0e' },
  periodesListe:{ display:'flex', flexDirection:'column', gap:3, margin:'6px 0' },
  perTag:{ fontSize:13, color:'#0f2a4a', fontWeight:500 },
  rapBox:{ background:'#f0fdf4', border:'1px solid #bbf7d0', borderRadius:8, padding:'10px 14px', fontSize:13, color:'#166534', marginTop:10 },
  btnRap:{ padding:'8px 16px', background:'#0f2a4a', color:'#fff', border:'none', borderRadius:8, fontSize:13, fontWeight:600, cursor:'pointer', fontFamily:'inherit' },
  btnRappel:{ padding:'8px 16px', background:'#0e7490', color:'#fff', border:'none', borderRadius:8, fontSize:13, fontWeight:600, cursor:'pointer', fontFamily:'inherit' },
  empty:{ textAlign:'center', color:'#94a3b8', padding:'40px 0', fontSize:15 },
  statsGrid:{ display:'grid', gridTemplateColumns:'repeat(2,1fr)', gap:16, marginBottom:24 },
  statCard:{ background:'#fff', borderRadius:14, padding:'22px 20px', boxShadow:'0 2px 12px rgba(0,0,0,.07)', textAlign:'center' },
  statVal:{ fontSize:32, fontWeight:800, color:'#0f2a4a' },
  statLbl:{ fontSize:13, color:'#64748b', marginTop:4, fontWeight:600 },
  statSub:{ fontSize:12, color:'#94a3b8', marginTop:2 },
  moisRow:{ display:'flex', alignItems:'center', gap:12, marginBottom:12, flexWrap:'wrap' },
  barBg:{ flex:1, height:10, background:'#e2e8f0', borderRadius:5, minWidth:80, overflow:'hidden' },
  barFill:{ height:'100%', background:'linear-gradient(90deg,#0f2a4a,#1a5c3a)', borderRadius:5 },
  moisCnt:{ fontSize:12, color:'#64748b', minWidth:150 },
  cellBase:{ width:28, height:28, borderRadius:6, display:'flex', alignItems:'center', justifyContent:'center', fontSize:11, fontWeight:700, cursor:'default' },
  cellTaken:{ background:'#1a5c3a', color:'#fff' },
  cellFree:{ background:'#e2e8f0', color:'#94a3b8' },
  overlay:{ position:'fixed', inset:0, background:'rgba(0,0,0,.6)', zIndex:1000, display:'flex', alignItems:'center', justifyContent:'center', padding:16 },
  modal:{ background:'#fff', borderRadius:16, width:'100%', maxWidth:500, boxShadow:'0 20px 60px rgba(0,0,0,.3)', overflow:'hidden' },
  mHead:{ background:'linear-gradient(135deg,#0f2a4a,#1a5c3a)', color:'#fff', padding:'24px 28px', textAlign:'center' },
  mIcon:{ fontSize:36, display:'block', marginBottom:8 },
  mTitle:{ margin:'0 0 6px', fontSize:20, fontWeight:700 },
  mSub:{ margin:0, opacity:.8, fontSize:13 },
  mBody:{ padding:'20px 24px', maxHeight:'55vh', overflowY:'auto' },
  mFoot:{ display:'flex', gap:12, padding:'16px 24px', borderTop:'1px solid #f1f5f9' },
  btnPri:{ flex:1, padding:'12px', background:'linear-gradient(135deg,#0f2a4a,#1a5c3a)', color:'#fff', border:'none', borderRadius:8, fontWeight:700, fontSize:14, cursor:'pointer', fontFamily:'inherit' },
  btnSec:{ flex:1, padding:'12px', background:'#f1f5f9', color:'#475569', border:'none', borderRadius:8, fontWeight:600, fontSize:14, cursor:'pointer', fontFamily:'inherit' },
  pvRow:{ display:'flex', borderBottom:'1px solid #f1f5f9', padding:'9px 0', gap:12, flexWrap:'wrap' },
  pvKey:{ minWidth:140, fontSize:12, fontWeight:700, color:'#64748b', textTransform:'uppercase', letterSpacing:'.4px' },
  pvVal:{ fontSize:13, color:'#1e293b', flex:1 },
  pvPeriod:{ fontSize:13, color:'#0f2a4a', padding:'4px 0', fontWeight:500 },
  rappelBox:{ border:'1px solid #e2e8f0', borderRadius:10, padding:'14px', marginBottom:14, background:'#fafbfc' },
  rappelVeille:{ fontSize:12, color:'#0e7490', fontWeight:600, marginTop:4, marginBottom:8 },
  rappelMsgPreview:{ background:'#f0f9ff', border:'1px solid #bae6fd', borderRadius:8, padding:'10px 12px', fontSize:12, color:'#0c4a6e', whiteSpace:'pre-wrap', lineHeight:1.6, marginBottom:10 },
  rappelBtns:{ display:'flex', gap:10 },
  btnWA:{ flex:1, padding:'9px', background:'#16a34a', color:'#fff', border:'none', borderRadius:8, fontSize:13, fontWeight:700, cursor:'pointer', fontFamily:'inherit', display:'flex', alignItems:'center', justifyContent:'center', gap:6 },
  btnCopy:{ flex:1, padding:'9px', background:'#475569', color:'#fff', border:'none', borderRadius:8, fontSize:13, fontWeight:700, cursor:'pointer', fontFamily:'inherit' },
  btnCopied:{ background:'#0f2a4a' },
};
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
