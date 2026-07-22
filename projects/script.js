const filings = [
  {company:"8x8, Inc.",date:"2026-06-17",outcome:"yes",vendor:"Klue Labs via Salesforce integration",control:"Access management — compromised API integration",detail:"Specific: vendor and mechanism named"},
  {company:"BayFirst Financial",date:"2025-10-30",outcome:"yes",vendor:"Unnamed marketing services provider",control:"Vendor notification lag",detail:"Mid: vendor type named"},
  {company:"iRhythm Technologies",date:"2026-06-10",outcome:"unclear",vendor:"Unnamed third-party-hosted application(s)",control:"Unknown / insufficient disclosure",detail:"Vague: no vendor or control detail"},
  {company:"Sonic Automotive",date:"2024-07-05",outcome:"yes",vendor:"CDK Global",control:"Third-party concentration risk",detail:"Specific: vendor and systems named"},
  {company:"Federal Home Loan Bank of New York",date:"2024-03-01",outcome:"yes",vendor:"A vendor of a Bank vendor",control:"Nth-party monitoring gap",detail:"Mid: chain disclosed, names withheld"},
  {company:"AT&T",date:"2024-07-12",outcome:"yes",vendor:"Unnamed third-party cloud platform",control:"Access management on vendor platform",detail:"Mid: platform type named"},
  {company:"Coinbase",date:"2025-05-15",outcome:"yes",vendor:"Unnamed overseas support contractors",control:"Insider misuse of authorized access",detail:"Mid: relationship described"},
  {company:"Frontier Communications",date:"2024-04-18",outcome:"excluded",vendor:"Not a vendor — third party means attacker",control:"Not a TPRM incident",detail:"Excluded after primary-source review"},
  {company:"OraSure Technologies",date:"2024-04-12",outcome:"excluded",vendor:"Not a vendor — third party means attacker",control:"Not a TPRM incident",detail:"Excluded after primary-source review"},
  {company:"ADT",date:"2024-08-08",outcome:"excluded",vendor:"No vendor mentioned in primary filing",control:"Not a TPRM incident per filing",detail:"Excluded despite secondary-source claim"}
];

const rows = document.querySelector('#filingRows');
const search = document.querySelector('#searchInput');
const filters = [...document.querySelectorAll('.filter')];
const count = document.querySelector('#resultCount');
let activeFilter = 'all';

function label(outcome){
  return outcome === 'yes' ? 'TPRM relevant' : outcome === 'excluded' ? 'Excluded' : 'Insufficient detail';
}
function render(){
  const q = search.value.trim().toLowerCase();
  const visible = filings.filter(item => (activeFilter === 'all' || item.outcome === activeFilter) && Object.values(item).join(' ').toLowerCase().includes(q));
  rows.innerHTML = visible.map(item => `<tr><td><strong>${item.company}</strong></td><td>${item.date}</td><td><span class="badge ${item.outcome}">${label(item.outcome)}</span></td><td>${item.vendor}</td><td>${item.control}</td><td>${item.detail}</td></tr>`).join('');
  count.textContent = `${visible.length} of ${filings.length} filings shown`;
}
search.addEventListener('input', render);
filters.forEach(button => button.addEventListener('click', () => {
  filters.forEach(b => b.classList.remove('active'));
  button.classList.add('active');
  activeFilter = button.dataset.filter;
  render();
}));
render();
