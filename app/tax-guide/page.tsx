'use client'

const C = {
  bg: '#0b1220', surface: '#111d30', surface2: '#162238',
  border: 'rgba(255,255,255,0.07)', emerald: '#10b981',
  emeraldDim: 'rgba(16,185,129,0.1)', emeraldBorder: 'rgba(16,185,129,0.28)',
  white: '#f0f6ff', muted: '#8ca0b8', dim: '#3a506b',
  font: "'Inter', system-ui, -apple-system, sans-serif",
}

const Logo = () => (
  <div style={{width:36,height:36,background:C.emerald,borderRadius:9,display:'flex',alignItems:'center',justifyContent:'center',flexShrink:0}}>
    <svg viewBox="0 0 100 100" style={{width:20,height:20}}><path fill="white" d="M50 4 L60 32 L88 18 L72 44 L96 48 L74 62 L80 84 L50 70 L20 84 L26 62 L4 48 L28 44 L12 18 L40 32 Z"/></svg>
  </div>
)

const navLinks = [['/', 'Home'],['/exchanges','Exchanges'],['/tax-guide','Tax Guide'],['/wallets','Wallets'],['/beginners-guide',"Beginner's Guide"]]

const sections = [
  {
    id: 'basics',
    icon: '📌',
    title: 'The Basics: How CRA Treats Crypto',
    content: 'The CRA treats cryptocurrency as a commodity under the Income Tax Act — not legal currency. Buying and holding is NOT taxable. Tax is triggered only when you dispose of crypto: by selling, trading, spending, or gifting it.',
    highlight: {color: 'green', title: '66.67% Inclusion Rate Was Cancelled', body: 'The proposed hike to 66.67% was formally cancelled by PM Mark Carney on March 21, 2025. The inclusion rate remains 50% for the 2025 tax year. Nothing changed for the average Canadian crypto investor.'},
  },
  {
    id: 'taxable',
    icon: '⚡',
    title: 'What Is (and Is Not) a Taxable Event',
    content: null,
    twoCol: {
      green: {title: 'NOT Taxable', items: ['Buying crypto with CAD', 'Holding crypto (any duration)', 'Transferring between your own wallets', 'Receiving crypto as a gift (for the recipient)']},
      red: {title: 'Taxable Disposal', items: ['Selling crypto for CAD', 'Trading crypto-to-crypto (BTC → ETH)', 'Spending crypto on goods or services', 'Gifting crypto (for the giver)', 'Receiving payment in crypto', 'Mining rewards received', 'Staking rewards received']},
    },
    highlight: {color: 'red', title: 'Crypto-to-Crypto Trades Are Taxable', body: 'Swapping Bitcoin for Ethereum — even without touching CAD — is a taxable disposal. Calculate the fair market value in CAD at the time of the trade and report any gain or loss.'},
  },
  {
    id: 'capgains',
    icon: '⚖️',
    title: 'Capital Gains vs Business Income',
    content: 'This is the most important distinction in Canadian crypto tax. Your profits are taxed very differently depending on classification.',
    twoColSimple: [
      {title: 'Capital Gains', sub: '50% of gain is taxable', col: 'green', body: 'Report on Schedule 3 of your T1. For casual investors who buy, hold, and occasionally sell. Example: $10,000 gain → only $5,000 added to taxable income.'},
      {title: 'Business Income', sub: '100% of profit is taxable', col: 'red', body: 'Report on Form T2125. Applies to frequent traders, commercial miners. Example: Same $10,000 gain → full $10,000 added to taxable income.'},
    ],
  },
  {
    id: 'acb',
    icon: '🧮',
    title: 'Adjusted Cost Base (ACB): Canada Required Method',
    content: 'Unlike the US (FIFO, LIFO, HIFO), Canada requires the ACB method. Your ACB is the average cost of each coin you own, updated with every purchase.',
    acbExample: true,
    highlight: {color: 'yellow', title: 'Superficial Loss Rule', body: 'If you sell crypto at a loss and repurchase the same crypto within 30 days before or after the sale, the CRA denies the loss. The denied loss is added to the ACB of your repurchased coins.'},
  },
  {
    id: 'rates',
    icon: '📊',
    title: '2025 Federal Tax Rates (T1 Due April 30, 2026)',
    content: 'Canada uses progressive marginal rates. Only 50% of your capital gain is added to taxable income. Basic personal amount 2025: $16,129.',
    ratesTable: true,
  },
  {
    id: 'carf',
    icon: '🏛️',
    title: 'CARF and CRA Enforcement',
    content: 'The Crypto-Asset Reporting Framework (CARF) took effect January 1, 2026. Canadian exchanges must now report user transaction data to the CRA. First filings expected in 2027. The CRA has a dedicated 35-person crypto audit team that has recovered over $100M in unpaid taxes.',
    highlight: {color: 'red', title: 'The CRA Has More Visibility Than Ever', body: 'Keep records of every transaction — date, CAD value, amount, fees — for at least 6 years. With CARF, the CRA will cross-reference your filings against exchange data starting in 2027.'},
  },
  {
    id: 'software',
    icon: '💻',
    title: 'Crypto Tax Software for Canadians',
    content: 'Manually tracking ACB across hundreds of transactions is error-prone. These platforms generate CRA-ready Schedule 3 and T2125 reports.',
    software: true,
  },
]

export default function TaxGuidePage() {
  return (
    <div style={{fontFamily:C.font,background:C.bg,color:C.white,minHeight:'100vh'}}>

      <nav style={{position:'sticky',top:0,zIndex:100,background:'rgba(11,18,32,0.97)',backdropFilter:'blur(20px)',borderBottom:'1px solid '+C.border}}>
        <div style={{maxWidth:1200,margin:'0 auto',padding:'0 32px',display:'flex',alignItems:'center',justifyContent:'space-between',height:68,gap:32}}>
          <a href="/" style={{display:'flex',alignItems:'center',gap:10,fontWeight:800,fontSize:18,letterSpacing:'-0.03em',color:C.white,textDecoration:'none',flexShrink:0}}>
            <Logo/>Crypto<span style={{color:C.emerald}}>North</span>
          </a>
          <div style={{display:'flex'}}>
            {navLinks.map(([h,l])=>(
              <a key={l} href={h} style={{color:h==='/tax-guide'?C.white:C.muted,fontSize:14,fontWeight:h==='/tax-guide'?600:500,padding:'0 16px',height:68,display:'flex',alignItems:'center',whiteSpace:'nowrap',textDecoration:'none'}}
                onMouseEnter={e=>(e.currentTarget.style.color=C.white)} onMouseLeave={e=>{if(h!=='/tax-guide')e.currentTarget.style.color=C.muted}}>{l}</a>
            ))}
          </div>
          <a href="/exchanges" style={{background:C.emerald,color:'#fff',padding:'0 22px',height:40,borderRadius:9999,fontWeight:700,fontSize:13,display:'flex',alignItems:'center',whiteSpace:'nowrap',flexShrink:0,textDecoration:'none'}}
            onMouseEnter={e=>(e.currentTarget.style.opacity='0.85')} onMouseLeave={e=>(e.currentTarget.style.opacity='1')}>Compare Exchanges</a>
        </div>
      </nav>

      <div style={{background:'linear-gradient(180deg,#0e1d35 0%,#0b1220 100%)',borderBottom:'1px solid '+C.border,padding:'72px 32px 64px'}}>
        <div style={{maxWidth:900,margin:'0 auto'}}>
          <div style={{display:'inline-flex',alignItems:'center',gap:8,background:C.emeraldDim,border:'1px solid '+C.emeraldBorder,color:C.emerald,fontSize:11,fontWeight:700,borderRadius:9999,padding:'6px 14px',marginBottom:24,letterSpacing:'0.07em',textTransform:'uppercase'}}>
            Updated April 2026 · 2025 Tax Year · CRA Verified
          </div>
          <h1 style={{fontSize:'clamp(2.2rem,4vw,3.2rem)',fontWeight:800,lineHeight:1.1,letterSpacing:'-0.035em',color:C.white,margin:'0 0 20px'}}>
            Canadian Crypto Tax Guide 2026
          </h1>
          <p style={{fontSize:17,color:C.muted,lineHeight:1.75,margin:'0 0 12px',maxWidth:620}}>
            Everything Canadians need to know about reporting cryptocurrency to the CRA for the 2025 tax year. Plain English, verified accuracy.
          </p>
          <p style={{fontSize:13,color:C.dim,margin:0}}>This guide is for informational purposes only and does not constitute tax or legal advice. Consult a qualified CPA for your situation.</p>
        </div>
      </div>

      <div style={{borderBottom:'1px solid '+C.border,background:C.surface}}>
        <div style={{maxWidth:900,margin:'0 auto',padding:'0 32px',display:'flex',gap:0,overflowX:'auto'}}>
          {[['April 30, 2026','T1 Deadline'],['50%','Inclusion Rate'],['$16,129','Basic Personal Amount'],['6 years','Record Keeping']].map(([n,l],i)=>(
            <div key={l} style={{padding:'20px 28px',textAlign:'center',borderRight:i<3?'1px solid '+C.border:'none',flexShrink:0}}>
              <div style={{fontSize:'1.4rem',fontWeight:800,color:C.emerald,letterSpacing:'-0.02em'}}>{n}</div>
              <div style={{fontSize:11,color:C.muted,marginTop:4,fontWeight:600,textTransform:'uppercase',letterSpacing:'0.05em'}}>{l}</div>
            </div>
          ))}
        </div>
      </div>

      <div style={{maxWidth:900,margin:'0 auto',padding:'64px 32px 80px'}}>

        {sections.map(s=>(
          <section key={s.id} id={s.id} style={{marginBottom:56,paddingBottom:56,borderBottom:'1px solid '+C.border}}>
            <div style={{display:'flex',alignItems:'center',gap:14,marginBottom:20}}>
              <div style={{width:44,height:44,borderRadius:12,background:C.emeraldDim,border:'1px solid '+C.emeraldBorder,display:'flex',alignItems:'center',justifyContent:'center',fontSize:20,flexShrink:0}}>{s.icon}</div>
              <h2 style={{fontSize:'1.4rem',fontWeight:800,letterSpacing:'-0.025em',color:C.white,margin:0}}>{s.title}</h2>
            </div>
            {s.content&&<p style={{fontSize:15,color:C.muted,lineHeight:1.8,marginBottom:20}}>{s.content}</p>}

            {s.twoCol&&(
              <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:16,marginBottom:20}}>
                <div style={{background:'rgba(16,185,129,0.06)',border:'1px solid rgba(16,185,129,0.2)',borderRadius:14,padding:20}}>
                  <div style={{fontWeight:700,color:C.emerald,marginBottom:12,fontSize:14}}>✓ {s.twoCol.green.title}</div>
                  {s.twoCol.green.items.map(i=><div key={i} style={{fontSize:13,color:C.muted,padding:'5px 0',borderBottom:'1px solid rgba(255,255,255,0.04)'}}>• {i}</div>)}
                </div>
                <div style={{background:'rgba(239,68,68,0.06)',border:'1px solid rgba(239,68,68,0.2)',borderRadius:14,padding:20}}>
                  <div style={{fontWeight:700,color:'#f87171',marginBottom:12,fontSize:14}}>✗ {s.twoCol.red.title}</div>
                  {s.twoCol.red.items.map(i=><div key={i} style={{fontSize:13,color:C.muted,padding:'5px 0',borderBottom:'1px solid rgba(255,255,255,0.04)'}}>• {i}</div>)}
                </div>
              </div>
            )}

            {s.twoColSimple&&(
              <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:16,marginBottom:20}}>
                {s.twoColSimple.map(c=>(
                  <div key={c.title} style={{background:C.surface,border:'1px solid '+C.border,borderRadius:14,padding:22}}>
                    <div style={{fontWeight:800,fontSize:16,color:C.white,marginBottom:4}}>{c.title}</div>
                    <div style={{fontSize:13,color:c.col==='green'?C.emerald:'#f87171',fontWeight:600,marginBottom:12}}>{c.sub}</div>
                    <p style={{fontSize:13,color:C.muted,lineHeight:1.7,margin:0}}>{c.body}</p>
                  </div>
                ))}
              </div>
            )}

            {s.acbExample&&(
              <div style={{background:C.surface,border:'1px solid '+C.border,borderRadius:14,padding:24,marginBottom:20,overflowX:'auto'}}>
                <div style={{fontWeight:700,color:C.white,marginBottom:16,fontSize:14}}>ACB Example: Bitcoin Purchases</div>
                <table style={{width:'100%',borderCollapse:'collapse',fontSize:13}}>
                  <thead>
                    <tr style={{borderBottom:'1px solid '+C.border}}>
                      {['Date','Action','BTC','Price (CAD)','Your ACB/BTC'].map(h=>(
                        <th key={h} style={{textAlign:'left',padding:'8px 14px',color:C.dim,fontWeight:600,fontSize:11,textTransform:'uppercase',letterSpacing:'0.05em'}}>{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ['Jan 2025','Buy','0.1 BTC','$50,000','$50,000'],
                      ['Apr 2025','Buy','0.1 BTC','$80,000','$65,000'],
                      ['Oct 2025','Sell 0.1 BTC','—','$120,000','Gain = $120k − $65k = $5,500 taxable'],
                    ].map((row,i)=>(
                      <tr key={i} style={{borderBottom:'1px solid rgba(255,255,255,0.04)',background:i===2?'rgba(16,185,129,0.05)':'transparent'}}>
                        {row.map((cell,j)=><td key={j} style={{padding:'10px 14px',color:i===2&&j===4?C.emerald:C.muted}}>{cell}</td>)}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {s.ratesTable&&(
              <div style={{background:C.surface,border:'1px solid '+C.border,borderRadius:14,overflow:'hidden',marginBottom:20}}>
                <table style={{width:'100%',borderCollapse:'collapse',fontSize:13}}>
                  <thead>
                    <tr style={{background:'rgba(255,255,255,0.03)',borderBottom:'1px solid '+C.border}}>
                      {['Taxable Income (2025)','Federal Rate'].map(h=>(
                        <th key={h} style={{textAlign:'left',padding:'12px 20px',color:C.dim,fontWeight:600,fontSize:11,textTransform:'uppercase',letterSpacing:'0.05em'}}>{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ['$0 – $57,375','15%'],
                      ['$57,375 – $114,750','20.5%'],
                      ['$114,750 – $158,519','26%'],
                      ['$158,519 – $220,000','29%'],
                      ['Over $220,000','33%'],
                    ].map(([range,rate],i)=>(
                      <tr key={range} style={{borderBottom:'1px solid rgba(255,255,255,0.04)'}}>
                        <td style={{padding:'12px 20px',color:C.white,fontWeight:500}}>{range}</td>
                        <td style={{padding:'12px 20px',color:C.emerald,fontWeight:700}}>{rate}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <div style={{padding:'14px 20px',background:'rgba(16,185,129,0.05)',borderTop:'1px solid '+C.border,fontSize:12,color:C.muted}}>Remember: only 50% of your capital gain is added to income. Provincial taxes apply on top — combined rates typically 30–53%+ depending on province.</div>
              </div>
            )}

            {s.software&&(
              <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:14,marginBottom:20}}>
                {[
                  {name:'CoinLedger',badge:'RECOMMENDED',desc:'Popular choice for Canadians. Generates Schedule 3, T2125, and TurboTax-compatible files. Supports all major Canadian exchanges.',featured:true},
                  {name:'Koinly',badge:null,desc:'Supports 300+ exchanges including all Canadian platforms. ACB calculation and superficial loss rule built in. Free up to 25 transactions.',featured:false},
                  {name:'TurboTax Canada',badge:null,desc:'Best for simple situations. Good for basic capital gains reporting. Less ideal for high-volume trading or DeFi activity.',featured:false},
                  {name:'CryptoTaxCalculator',badge:null,desc:'Best for DeFi, NFTs, and complex transactions. ACB method built in. Exports CRA-compatible reports.',featured:false},
                ].map(sw=>(
                  <div key={sw.name} style={{background:C.surface,border:'1px solid '+(sw.featured?C.emeraldBorder:C.border),borderRadius:14,padding:20}}>
                    <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:8}}>
                      <div style={{fontWeight:700,fontSize:15,color:C.white}}>{sw.name}</div>
                      {sw.badge&&<span style={{fontSize:10,color:C.emerald,background:C.emeraldDim,padding:'3px 8px',borderRadius:4,fontWeight:700}}>{sw.badge}</span>}
                    </div>
                    <p style={{fontSize:13,color:C.muted,lineHeight:1.65,margin:'0 0 12px'}}>{sw.desc}</p>
                    {sw.featured&&<a href="#" style={{display:'inline-block',background:C.emerald,color:'#fff',borderRadius:8,padding:'8px 16px',fontSize:12,fontWeight:700,textDecoration:'none'}}>Get CoinLedger →</a>}
                  </div>
                ))}
              </div>
            )}

            {s.highlight&&(()=>{
              const bg = s.highlight.color==='green'?'rgba(16,185,129,0.08)':s.highlight.color==='yellow'?'rgba(245,158,11,0.08)':'rgba(239,68,68,0.08)'
              const border = s.highlight.color==='green'?'rgba(16,185,129,0.25)':s.highlight.color==='yellow'?'rgba(245,158,11,0.25)':'rgba(239,68,68,0.25)'
              const col = s.highlight.color==='green'?C.emerald:s.highlight.color==='yellow'?'#f59e0b':'#f87171'
              return (
                <div style={{background:bg,border:'1px solid '+border,borderRadius:12,padding:'16px 20px'}}>
                  <div style={{fontWeight:700,color:col,marginBottom:6,fontSize:14}}>{s.highlight.title}</div>
                  <p style={{fontSize:13,color:C.muted,lineHeight:1.7,margin:0}}>{s.highlight.body}</p>
                </div>
              )
            })()}
          </section>
        ))}

        <div style={{background:'rgba(239,68,68,0.06)',border:'1px solid rgba(239,68,68,0.25)',borderRadius:14,padding:'20px 24px'}}>
          <div style={{fontWeight:700,color:'#f87171',marginBottom:8,fontSize:15}}>⚠️ Important Disclaimer</div>
          <p style={{fontSize:13,color:C.muted,lineHeight:1.75,margin:0}}>This guide is for general informational purposes only and reflects CRA guidance as of April 2026. It does not constitute tax, legal, or financial advice. Tax laws change, and individual circumstances vary. Always verify with the <a href="https://www.canada.ca/en/revenue-agency.html" target="_blank" rel="noopener noreferrer" style={{color:C.emerald}}>CRA directly</a> and consult a qualified CPA for your specific situation.</p>
        </div>
      </div>

      <div style={{background:'linear-gradient(135deg,#0c2a1a 0%,#0b1220 100%)',borderTop:'1px solid rgba(16,185,129,0.2)',padding:'64px 32px',textAlign:'center'}}>
        <h2 style={{fontSize:'1.7rem',fontWeight:800,letterSpacing:'-0.03em',marginBottom:12,color:C.white}}>Find the best Canadian crypto exchange</h2>
        <p style={{color:C.muted,fontSize:16,maxWidth:420,margin:'0 auto 32px',lineHeight:1.7}}>All FINTRAC-registered. All CSA-authorized. Honest fees, real pros and cons.</p>
        <a href="/exchanges" style={{background:C.emerald,color:'#fff',padding:'14px 32px',borderRadius:12,fontWeight:700,fontSize:15,display:'inline-block',textDecoration:'none'}}
          onMouseEnter={e=>(e.currentTarget.style.opacity='0.88')} onMouseLeave={e=>(e.currentTarget.style.opacity='1')}>Compare Canadian Exchanges →</a>
      </div>

      <footer style={{background:'#070d1a',borderTop:'1px solid '+C.border,padding:'40px 32px'}}>
        <div style={{maxWidth:1200,margin:'0 auto',display:'flex',justifyContent:'space-between',alignItems:'center',flexWrap:'wrap',gap:20}}>
          <a href="/" style={{display:'flex',alignItems:'center',gap:10,fontWeight:800,fontSize:17,letterSpacing:'-0.03em',color:C.white,textDecoration:'none'}}><Logo/>Crypto<span style={{color:C.emerald}}>North</span></a>
          <div style={{display:'flex',gap:24,flexWrap:'wrap'}}>
            {navLinks.map(([h,l])=>(
              <a key={l} href={h} style={{fontSize:13,color:C.muted,textDecoration:'none',fontWeight:500}}
                onMouseEnter={e=>(e.currentTarget.style.color=C.white)} onMouseLeave={e=>(e.currentTarget.style.color=C.muted)}>{l}</a>
            ))}
          </div>
        </div>
        <div style={{maxWidth:1200,margin:'20px auto 0',paddingTop:20,borderTop:'1px solid '+C.border,display:'flex',justifyContent:'space-between',flexWrap:'wrap',gap:8}}>
          <div style={{fontSize:12,color:C.dim}}>© 2026 CryptoNorth · Canada's independent crypto resource</div>
          <div style={{fontSize:12,color:C.dim}}>Not tax or legal advice. Always verify with CRA and a qualified CPA.</div>
        </div>
      </footer>
    </div>
  )
}