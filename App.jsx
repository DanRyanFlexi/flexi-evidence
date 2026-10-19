import React, { useEffect, useMemo, useRef, useState } from 'react';

const AREAS = {
  English: ['Language', 'Literature', 'Literacy'],
  Mathematics: ['Number', 'Algebra', 'Measurement', 'Space', 'Statistics', 'Probability'],
  Science: ['Science understanding', 'Science as a human endeavour', 'Science inquiry'],
  'Humanities and Social Sciences': ['History', 'Geography', 'Civics and Citizenship', 'Economics and Business'],
  'Health and Physical Education': ['Personal, social and community health', 'Movement and physical activity'],
  'The Arts': ['Dance', 'Drama', 'Media Arts', 'Music', 'Visual Arts'],
  Technologies: ['Design and Technologies', 'Digital Technologies'],
  Languages: ['Arabic', 'Auslan', 'Chinese', 'French', 'German', 'Hindi', 'Indonesian', 'Italian', 'Japanese', 'Korean', 'Modern Greek', 'Spanish', 'Turkish', 'Vietnamese', 'Aboriginal and Torres Strait Islander Languages', 'Classical Languages']
};
const LEVELS = ['Working towards', 'Demonstrated', 'Demonstrated independently', 'Extending'];
const STORE = 'flexi-learning-records-v2';
const emptyRecord = () => ({ student: '', year: 7, area: 'English', subject: 'Language', standard: '', evidence: '', judgement: LEVELS[0], date: new Date().toISOString().slice(0, 10) });
const uid = () => globalThis.crypto?.randomUUID?.() || `${Date.now()}-${Math.random().toString(16).slice(2)}`;
const loadRecords = () => { try { const data = JSON.parse(localStorage.getItem(STORE) || localStorage.getItem('flexi-learning-records') || '[]'); return Array.isArray(data) ? data : []; } catch { return []; } };
const download = (name, contents, type) => { const url = URL.createObjectURL(new Blob([contents], { type })); const link = document.createElement('a'); link.href = url; link.download = name; document.body.appendChild(link); link.click(); link.remove(); URL.revokeObjectURL(url); };
const csvCell = value => `"${String(value ?? '').replaceAll('"', '""')}"`;
const icons = { home: '⌂', capture: '+', people: '●', library: '▤', search: '⌕', edit: '✎', remove: '×', export: '↓' };

export default function App() {
  const [records, setRecords] = useState(loadRecords);
  const [view, setView] = useState('home');
  const [form, setForm] = useState(emptyRecord);
  const [editingId, setEditingId] = useState(null);
  const [query, setQuery] = useState('');
  const [areaFilter, setAreaFilter] = useState('All');
  const [message, setMessage] = useState('');
  const importRef = useRef(null);

  useEffect(() => { localStorage.setItem(STORE, JSON.stringify(records)); }, [records]);
  useEffect(() => { if (!message) return; const timer = setTimeout(() => setMessage(''), 3500); return () => clearTimeout(timer); }, [message]);

  const students = useMemo(() => [...new Set(records.map(r => r.student).filter(Boolean))].sort((a, b) => a.localeCompare(b)), [records]);
  const visible = useMemo(() => records.filter(r => (areaFilter === 'All' || r.area === areaFilter) && JSON.stringify(r).toLowerCase().includes(query.trim().toLowerCase())), [records, areaFilter, query]);
  const goCapture = () => { setEditingId(null); setForm(emptyRecord()); setView('capture'); };
  const updateArea = area => setForm(current => ({ ...current, area, subject: AREAS[area][0] }));
  const save = () => {
    if (!form.student.trim() || !form.standard.trim() || !form.evidence.trim()) { setMessage('Add the young person, curriculum focus and evidence note.'); return; }
    const item = { ...form, student: form.student.trim(), id: editingId || uid(), updatedAt: new Date().toISOString() };
    setRecords(current => editingId ? current.map(r => r.id === editingId ? item : r) : [item, ...current]);
    setEditingId(null); setForm(emptyRecord()); setMessage(editingId ? 'Evidence updated.' : 'Evidence saved.'); setView('library');
  };
  const edit = item => { setForm({ ...item }); setEditingId(item.id); setView('capture'); window.scrollTo({ top: 0, behavior: 'smooth' }); };
  const exportCsv = () => { const headers = ['Young person', 'Year', 'Learning area', 'Subject or strand', 'Curriculum focus', 'Evidence', 'Judgement', 'Date']; const rows = records.map(r => [r.student, r.year, r.area, r.subject, r.standard, r.evidence, r.judgement, r.date]); download('flexi-evidence.csv', [headers, ...rows].map(row => row.map(csvCell).join(',')).join('\n'), 'text/csv;charset=utf-8'); };
  const exportBackup = () => download('flexi-evidence-backup.json', JSON.stringify({ version: 2, exportedAt: new Date().toISOString(), records }, null, 2), 'application/json');
  const importBackup = event => { const file = event.target.files?.[0]; if (!file) return; const reader = new FileReader(); reader.onload = () => { try { const parsed = JSON.parse(reader.result); const next = Array.isArray(parsed) ? parsed : parsed.records; if (!Array.isArray(next)) throw new Error(); setRecords(next); setMessage(`${next.length} records imported.`); } catch { setMessage('That backup file could not be read.'); } event.target.value = ''; }; reader.readAsText(file); };
  const openStudent = name => { setQuery(name); setAreaFilter('All'); setView('library'); };

  return <div className="shell">
    <aside className="sidebar">
      <div className="brand" aria-label="Flexi Evidence Studio"><span className="brand-symbol">◌</span><span><b>FLEXI</b><small>EVIDENCE</small></span></div>
      <nav aria-label="Main navigation">{[['home','Home'],['capture','Capture'],['people','Young people'],['library','Evidence']].map(([key,label]) => <button key={key} className={view === key ? 'active' : ''} onClick={() => key === 'capture' ? goCapture() : setView(key)}><span aria-hidden="true">{icons[key]}</span>{label}</button>)}</nav>
      <p className="sidebar-note">Learning made visible.</p>
    </aside>
    <main>
      <header className="topbar"><div><p className="kicker">LEARNING & PEDAGOGY</p><h1>{view === 'home' ? 'Evidence studio' : view === 'capture' ? (editingId ? 'Edit evidence' : 'Capture evidence') : view === 'people' ? 'Young people' : 'Evidence library'}</h1></div><button className="button primary" onClick={goCapture}>+ New evidence</button></header>
      {message && <div className="notice" role="status" onClick={() => setMessage('')}>{message}<button aria-label="Dismiss">×</button></div>}
      {view === 'home' && <Home records={records} students={students} goCapture={goCapture} goLibrary={() => setView('library')} />}
      {view === 'capture' && <Capture form={form} setForm={setForm} updateArea={updateArea} save={save} editing={Boolean(editingId)} cancel={() => { setEditingId(null); setForm(emptyRecord()); setView('library'); }} />}
      {view === 'people' && <People records={records} students={students} openStudent={openStudent} goCapture={goCapture} />}
      {view === 'library' && <Library records={visible} query={query} setQuery={setQuery} filter={areaFilter} setFilter={setAreaFilter} edit={edit} remove={id => { if (confirm('Delete this evidence record?')) setRecords(current => current.filter(r => r.id !== id)); }} exportCsv={exportCsv} exportBackup={exportBackup} importBackup={() => importRef.current?.click()} />}
      <input ref={importRef} className="sr-only" type="file" accept="application/json,.json" onChange={importBackup} />
    </main>
  </div>;
}

function Home({ records, students, goCapture, goLibrary }) { const recent = records.slice(0, 4); return <>
  <section className="hero"><div><p className="kicker gold">FLEXI LEARNING EVIDENCE</p><h2>Notice the learning.<br />Capture what matters.</h2><p>A focused workspace for recording clear, curriculum-linked evidence without unnecessary admin.</p><button className="button light" onClick={goCapture}>Capture evidence →</button></div><div className="hero-art" aria-hidden="true"><i/><i/><i/></div></section>
  <section className="metrics"><Metric value={records.length} label="Evidence records"/><Metric value={students.length} label="Young people"/><Metric value={new Set(records.map(r => r.area)).size} label="Learning areas used"/></section>
  <div className="home-grid"><section><div className="section-heading"><h2>Recent evidence</h2><button onClick={goLibrary}>View all →</button></div>{recent.length ? <div className="recent-list">{recent.map(r => <button key={r.id} onClick={goLibrary}><i/><span><b>{r.student}</b><small>{r.area} · Year {r.year}</small></span><time>{r.date}</time></button>)}</div> : <Empty title="No evidence captured yet." action={goCapture}/>}</section><aside className="quick"><p className="kicker">QUICK START</p><h2>One clear record at a time.</h2><p>Choose a young person, connect the curriculum and record what was observed.</p><ol><li><span>1</span>Young person</li><li><span>2</span>Curriculum link</li><li><span>3</span>Evidence note</li></ol></aside></div>
</>; }
function Metric({ value, label }) { return <div><strong>{value}</strong><span>{label}</span></div>; }
function Capture({ form, setForm, updateArea, save, editing, cancel }) { return <div className="capture-layout"><section className="panel form-panel"><Step n="01" title="Who and when" text="Identify the young person and context."/><div className="fields two"><Field label="Young person"><input autoFocus value={form.student} onChange={e => setForm({...form, student:e.target.value})} placeholder="Start typing a name" /></Field><Field label="Date"><input type="date" value={form.date} onChange={e => setForm({...form,date:e.target.value})}/></Field><Field label="Year level"><select value={form.year} onChange={e => setForm({...form,year:Number(e.target.value)})}>{[7,8,9,10].map(y => <option key={y}>{y}</option>)}</select></Field></div><hr/>
<Step n="02" title="Connect the curriculum" text="Choose the most useful curriculum reference."/><div className="fields two"><Field label="Learning area"><select value={form.area} onChange={e => updateArea(e.target.value)}>{Object.keys(AREAS).map(a => <option key={a}>{a}</option>)}</select></Field><Field label="Subject or strand"><select value={form.subject} onChange={e => setForm({...form,subject:e.target.value})}>{AREAS[form.area].map(s => <option key={s}>{s}</option>)}</select></Field><Field wide label="Achievement standard focus"><textarea value={form.standard} onChange={e => setForm({...form,standard:e.target.value})} placeholder="Paste the relevant curriculum statement"/></Field></div><hr/>
<Step n="03" title="Record what happened" text="Keep the note observable, specific and useful."/><div className="fields"><Field label="Evidence note"><textarea className="evidence-input" value={form.evidence} onChange={e => setForm({...form,evidence:e.target.value})} placeholder="What did the young person say, make, write or do?"/></Field><fieldset><legend>Teacher judgement</legend><div className="choices">{LEVELS.map(level => <button type="button" key={level} className={form.judgement === level ? 'selected' : ''} onClick={() => setForm({...form,judgement:level})}>{level}</button>)}</div></fieldset></div><div className="form-actions"><button className="button secondary" onClick={cancel}>Cancel</button><button className="button primary" onClick={save}>{editing ? 'Update evidence' : 'Save evidence'} →</button></div></section><aside className="writing-guide"><p className="kicker gold">A STRONG NOTE</p><h2>Write what was seen, not what is assumed.</h2><p><b>Useful:</b> “Jordan compared two strategies and explained why one was more efficient.”</p><p><b>Avoid:</b> “Jordan understands maths.”</p><i/><small>Specific evidence supports better planning, feedback and moderation.</small></aside></div>; }
function Step({n,title,text}) { return <div className="step"><span>{n}</span><div><h2>{title}</h2><p>{text}</p></div></div>; }
function Field({ label, children, wide }) { return <label className={wide ? 'wide' : ''}><span>{label}</span>{children}</label>; }
function People({ records, students, openStudent, goCapture }) { return students.length ? <div className="people-grid">{students.map((name,index) => { const items=records.filter(r=>r.student===name); const initials=name.split(/\s+/).map(x=>x[0]).join('').slice(0,2).toUpperCase(); return <button key={name} onClick={()=>openStudent(name)}><span className={`avatar tone-${index%3}`}>{initials}</span><span><b>{name}</b><small>{items.length} evidence record{items.length===1?'':'s'}</small><em>{[...new Set(items.map(r=>r.area))].slice(0,2).join(' · ')}</em></span><strong>→</strong></button>; })}</div> : <Empty title="No young people added yet." action={goCapture}/>; }
function Library({ records, query, setQuery, filter, setFilter, edit, remove, exportCsv, exportBackup, importBackup }) { return <><div className="toolbar"><label className="search"><span aria-hidden="true">{icons.search}</span><span className="sr-only">Search evidence</span><input value={query} onChange={e=>setQuery(e.target.value)} placeholder="Search young people or evidence"/></label><select aria-label="Filter by learning area" value={filter} onChange={e=>setFilter(e.target.value)}><option>All</option>{Object.keys(AREAS).map(a=><option key={a}>{a}</option>)}</select><button onClick={exportCsv}>CSV</button><button onClick={exportBackup}>Backup</button><button onClick={importBackup}>Import</button></div>{records.length ? <div className="record-grid">{records.map(r => <article key={r.id}><header><span>{r.area}</span><time>{r.date}</time></header><h2>{r.student}</h2><p className="meta">Year {r.year} · {r.subject}</p><p className="standard">{r.standard}</p><p className="evidence">{r.evidence}</p><footer><span>{r.judgement}</span><div><button aria-label={`Edit evidence for ${r.student}`} onClick={()=>edit(r)}>{icons.edit}</button><button aria-label={`Delete evidence for ${r.student}`} onClick={()=>remove(r.id)}>{icons.remove}</button></div></footer></article>)}</div> : <Empty title="No matching evidence records."/>}</>; }
function Empty({ title, action }) { return <div className="empty"><span>+</span><h2>{title}</h2>{action && <button className="button primary" onClick={action}>Capture evidence</button>}</div>; }
