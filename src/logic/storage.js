export const LS = {
  saveResult(result)  { try { localStorage.setItem('ntt_result',    JSON.stringify(result))  } catch(e) {} },
  loadResult()        { try { return JSON.parse(localStorage.getItem('ntt_result'))           } catch(e) { return null } },
  saveChecklist(cl)   { try { localStorage.setItem('ntt_checklist', JSON.stringify(cl))       } catch(e) {} },
  loadChecklist()     { try { return JSON.parse(localStorage.getItem('ntt_checklist')) || {}  } catch(e) { return {} } },
  setWillTry(v)       { try { localStorage.setItem('ntt_will_try',  v ? '1' : '')             } catch(e) {} },
  getWillTry()        { return !!localStorage.getItem('ntt_will_try') },
  setTried(v)         { try { localStorage.setItem('ntt_tried',     v ? '1' : '')             } catch(e) {} },
  getTried()          { return !!localStorage.getItem('ntt_tried') },
  clear()             { ['ntt_result','ntt_checklist','ntt_will_try','ntt_tried'].forEach(k => localStorage.removeItem(k)) },
}
