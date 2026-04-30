'use client'

const C = {
  bg: '#0b1220', surface: '#111d30', surface2: '#162238',
  border: 'rgba(255,255,255,0.07)', emerald: '#10b981',
  emeraldDim: 'rgba(16,185,129,0.1)', emeraldBorder: 'rgba(16,185,129,0.28)',
  white: '#f0f6ff', muted: '#8ca0b8', dim: '#3a506b',
  font: "'Inter', system-ui, -apple-system, sans-serif",
}

const Logo = () => (
  <div style={{width:36,height:36,background:'#0d1f35',borderRadius:9,border:'1.5px solid #10b981',display:'flex',alignItems:'center',justifyContent:'center',flexShrink:0}}>
    <svg viewBox="0 0 48 48" style={{width:22,height:22}}>
      <path d="M24 5 L26.5 20 L24 18 L21.5 20 Z" fill="#10b981"/>
      <path d="M24 43 L26.5 28 L24 30 L21.5 28 Z" fill="#10b981"/>
      <path d="M5 24 L20 26.5 L18 24 L20 21.5 Z" fill="#10b981"/>
      <path d="M43 24 L28 21.5 L30 24 L28 26.5 Z" fill="#10b981"/>
      <path d="M9 9 L20 20 L18 20 L20 18 Z" fill="rgba(16,185,129,0.5)"/>
      <path d="M39 9 L28 20 L30 20 L28 18 Z" fill="rgba(16,185,129,0.5)"/>
      <path d="M9 39 L20 28 L20 30 L18 28 Z" fill="rgba(16,185,129,0.5)"/>
      <path d="M39 39 L28 28 L30 28 L28 30 Z" fill="rgba(16,185,129,0.5)"/>
      <circle cx="24" cy="24" r="3" fill="#10b981"/>
    </svg>
  </div>
)

const navLinks: [string, string][] = [['/', 'Home'],['/exchanges','Exchanges'],['/tax-guide','Tax Guide'],['/wallets','Wallets'],['/beginners-guide',"Beginner's Guide"]]

const Sup = ({n, href}: {n: number, href: string}) => (
  <a href={href} target="_blank" rel="noopener noreferrer"
    style={{fontSize:10,color:C.emerald,fontWeight:700,verticalAlign:'super',marginLeft:2,textDecoration:'none',border:'1px solid '+C.emeraldBorder,borderRadius:3,padding:'0 4px',background:C.emeraldDim}}
  >[{n}]</a>
)

const sources = [
  {n:1, label:'CRA — Digital currency (cryptocurrency)', url:'https://www.canada.ca/en/revenue-agency/programs/about-canada-revenue-agency-cra/compliance/digital-currency.html'},
  {n:2, label:'CRA — Guide for cryptocurrency users and tax professionals', url:'https://www.canada.ca/en/revenue-agency/programs/about-canada-revenue-agency-cra/compliance/digital-currency/cryptocurrency-guide.html'},
  {n:3, label:'Government of Canada — Capital gains inclusion rate remains 50% (March 2025)', url:'https://www.canada.ca/en/department-finance/news/2025/03/government-of-canada-announces-capital-gains-tax-measures.html'},
  {n:4, label:'CRA — Schedule 3 Capital Gains (T1)', url:'https://www.canada.ca/en/revenue-agency/services/forms-publications/tax-packages-years/general-income-tax-benefit-package/5000-s3.html'},
  {n:5, label:'CRA — 2025 Federal Income Tax Rates', url:'https://www.canada.ca/en/revenue-agency/services/tax/individuals/frequently-asked-questions-individuals/canadian-income-tax-rates-individuals-current-previous-years.html'},
  {n:6, label:'CRA — Basic Personal Amount 2025', url:'https://www.canada.ca/en/revenue-agency/services/forms-publications/publications/t4012/t4012-corporations-guide-t2-return.html'},
  {n:7, label:'FINTRAC — Money Services Businesses registration', url:'https://www.fintrac-canafe.gc.ca/re-re/reg-eng'},
  {n:8, label:'CSA — Crypto asset trading platforms', url:'https://www.securities-administrators.ca/investor-tools/crypto-asset-trading-platforms/'},
  {n:9, label:'CRA — Crypto-Asset Reporting Framework (CARF)', url:'https://www.canada.ca/en/revenue-agency/programs/about-canada-revenue-agency-cra/compliance/digital-currency/crypto-asset-reporting.html'},
  {n:10, label:'CRA — Adjusted Cost Base explained', url:'https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/personal-income/line-12700-capital-gains/calculating-reporting-your-capital-gains-losses/adjusted-cost-base.html'},
  {n:11, label:'CRA — Superficial loss rules', url:'https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/personal-income/line-12700-capital-gains/capital-losses-deductions/what-a-superficial-loss.html'},
  {n:12, label:'CRA — T1 filing deadline April 30, 2026', url:'https://www.canada.ca/en/revenue-agency/news/newsroom/tax-tips/tax-tips-2026/file-your-2025-taxes-april-30.html'},
]

export default function TaxGuidePage() {
  return (
    <div style={{fontFamily:C.font,background:C.bg,color:C.white,minHeight:'100vh'}}>

      <nav style={{position:'sticky',top:0,zIndex:100,background:'rgba(11,18,32,0.97)',backdropFilter:'blur(20px)',borderBottom:'1px solid '+C.border}}>
        <div style={{maxWidth:1200,margin:'0 auto',padding:'0 32px',display:'flex',alignItems:'center',justifyContent:'space-between',height:68,gap:32}}>
          <a href="/" style={{display:'flex',alignItems:'center',gap:10,fontWeight:800,fontSize:18,letterSpacing:'-0.03em',color:C.white,textDecoration:'none',flexShrink:0}}>
            <Logo/>CryptoNorth
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
            Everything Canadians need to know about reporting cryptocurrency to the CRA for the 2025 tax year. All key claims are cited to official government sources.
          </p>
          <p style={{fontSize:13,color:C.dim,margin:0}}>This guide is for informational purposes only. It does not constitute tax or legal advice. Always consult a qualified CPA for your specific situation.</p>
        </div>
      </div>

      <div style={{borderBottom:'1px solid '+C.border,background:C.surface}}>
        <div style={{maxWidth:900,margin:'0 auto',padding:'0 32px',display:'flex',gap:0,overflowX:'auto'}}>
          {[['April 30, 2026','T1 Deadline'],['50%','Inclusion Rate'],['$16,129','Basic Personal Amount'],['6 years','Keep Records']].map(([n,l],i)=>(
            <div key={l} style={{padding:'20px 28px',textAlign:'center',borderRight:i<3?'1px solid '+C.border:'none',flexShrink:0}}>
              <div style={{fontSize:'1.4rem',fontWeight:800,color:C.emerald,letterSpacing:'-0.02em'}}>{n}</div>
              <div style={{fontSize:11,color:C.muted,marginTop:4,fontWeight:600,textTransform:'uppercase',letterSpacing:'0.05em'}}>{l}</div>
            </div>
          ))}
        </div>
      </div>

      <div style={{maxWidth:900,margin:'0 auto',padding:'64px 32px 80px'}}>

        <section style={{marginBottom:52,paddingBottom:52,borderBottom:'1px solid '+C.border}}>
          <div style={{display:'flex',alignItems:'center',gap:14,marginBottom:20}}>
            <div style={{width:44,height:44,borderRadius:12,background:C.emeraldDim,border:'1px solid '+C.emeraldBorder,display:'flex',alignItems:'center',justifyContent:'center',fontSize:20,flexShrink:0}}>📌</div>
            <h2 style={{fontSize:'1.4rem',fontWeight:800,letterSpacing:'-0.025em',color:C.white,margin:0}}>The Basics: How CRA Treats Crypto</h2>
          </div>
          <p style={{fontSize:15,color:C.muted,lineHeight:1.8,marginBottom:20}}>
            The CRA treats cryptocurrency as a <strong style={{color:C.white}}>commodity</strong> under the Income Tax Act — not legal currency.<Sup n={1} href={sources[0].url}/> Buying and holding is NOT taxable. Tax is only triggered when you <em>dispose</em> of crypto: by selling, trading, spending, or gifting it.<Sup n={2} href={sources[1].url}/>
          </p>
          <div style={{background:'rgba(16,185,129,0.08)',border:'1px solid rgba(16,185,129,0.25)',borderRadius:12,padding:'16px 20px',marginBottom:16}}>
            <div style={{fontWeight:700,color:C.emerald,marginBottom:6,fontSize:14}}>✓ 66.67% Inclusion Rate Was Cancelled</div>
            <p style={{fontSize:13,color:C.muted,lineHeight:1.7,margin:0}}>The proposed hike to 66.67% was formally cancelled by Prime Minister Mark Carney on March 21, 2025.<Sup n={3} href={sources[2].url}/> The inclusion rate remains <strong style={{color:C.white}}>50%</strong> for the 2025 tax year. Nothing changed for the average Canadian crypto investor.</p>
          </div>
        </section>

        <section style={{marginBottom:52,paddingBottom:52,borderBottom:'1px solid '+C.border}}>
          <div style={{display:'flex',alignItems:'center',gap:14,marginBottom:20}}>
            <div style={{width:44,height:44,borderRadius:12,background:C.emeraldDim,border:'1px solid '+C.emeraldBorder,display:'flex',alignItems:'center',justifyContent:'center',fontSize:20,flexShrink:0}}>⚡</div>
            <h2 style={{fontSize:'1.4rem',fontWeight:800,letterSpacing:'-0.025em',color:C.white,margin:0}}>What Is (and Is Not) a Taxable Event</h2>
          </div>
          <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:16,marginBottom:20}}>
            <div style={{background:'rgba(16,185,129,0.06)',border:'1px solid rgba(16,185,129,0.2)',borderRadius:14,padding:20}}>
              <div style={{fontWeight:700,color:C.emerald,marginBottom:12,fontSize:14}}>✓ NOT Taxable</div>
              {['Buying crypto with CAD','Holding crypto (any duration)','Transferring between your own wallets (with proof)','Receiving crypto as a gift (for the recipient at time of receipt)'].map(i=><div key={i} style={{fontSize:13,color:C.muted,padding:'5px 0',borderBottom:'1px solid rgba(255,255,255,0.04)'}}>• {i}</div>)}
            </div>
            <div style={{background:'rgba(239,68,68,0.06)',border:'1px solid rgba(239,68,68,0.2)',borderRadius:14,padding:20}}>
              <div style={{fontWeight:700,color:'#f87171',marginBottom:12,fontSize:14}}>✗ Taxable Disposal</div>
              {['Selling crypto for CAD','Trading crypto-to-crypto (e.g. BTC → ETH)','Spending crypto on goods or services','Gifting crypto (for the giver)','Receiving payment in crypto','Mining rewards received','Staking rewards received'].map(i=><div key={i} style={{fontSize:13,color:C.muted,padding:'5px 0',borderBottom:'1px solid rgba(255,255,255,0.04)'}}>• {i}</div>)}
            </div>
          </div>
          <div style={{background:'rgba(239,68,68,0.08)',border:'1px solid rgba(239,68,68,0.25)',borderRadius:12,padding:'16px 20px'}}>
            <div style={{fontWeight:700,color:'#f87171',marginBottom:6,fontSize:14}}>⚠️ Crypto-to-Crypto Trades Are Taxable</div>
            <p style={{fontSize:13,color:C.muted,lineHeight:1.7,margin:0}}>Swapping Bitcoin for Ethereum — even without touching CAD — is a taxable disposal.<Sup n={2} href={sources[1].url}/> You must calculate the fair market value in CAD at the time of the trade and report any gain or loss.</p>
          </div>
        </section>

        <section style={{marginBottom:52,paddingBottom:52,borderBottom:'1px solid '+C.border}}>
          <div style={{display:'flex',alignItems:'center',gap:14,marginBottom:20}}>
            <div style={{width:44,height:44,borderRadius:12,background:C.emeraldDim,border:'1px solid '+C.emeraldBorder,display:'flex',alignItems:'center',justifyContent:'center',fontSize:20,flexShrink:0}}>⚖️</div>
            <h2 style={{fontSize:'1.4rem',fontWeight:800,letterSpacing:'-0.025em',color:C.white,margin:0}}>Capital Gains vs Business Income</h2>
          </div>
          <p style={{fontSize:15,color:C.muted,lineHeight:1.8,marginBottom:20}}>The most important distinction in Canadian crypto tax. Your profits are taxed very differently depending on how the CRA classifies your activity.<Sup n={2} href={sources[1].url}/></p>
          <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:16,marginBottom:20}}>
            <div style={{background:C.surface,border:'1px solid '+C.border,borderRadius:14,padding:22}}>
              <div style={{fontWeight:800,fontSize:16,color:C.white,marginBottom:4}}>Capital Gains</div>
              <div style={{fontSize:13,color:C.emerald,fontWeight:600,marginBottom:12}}>50% of gain is taxable</div>
              <p style={{fontSize:13,color:C.muted,lineHeight:1.7,margin:0}}>Report on <strong style={{color:C.white}}>Schedule 3</strong> of your T1.<Sup n={4} href={sources[3].url}/> For casual investors who buy, hold, and occasionally sell. Example: $10,000 gain → only $5,000 added to taxable income.</p>
            </div>
            <div style={{background:C.surface,border:'1px solid '+C.border,borderRadius:14,padding:22}}>
              <div style={{fontWeight:800,fontSize:16,color:C.white,marginBottom:4}}>Business Income</div>
              <div style={{fontSize:13,color:'#f87171',fontWeight:600,marginBottom:12}}>100% of profit is taxable</div>
              <p style={{fontSize:13,color:C.muted,lineHeight:1.7,margin:0}}>Report on <strong style={{color:C.white}}>Form T2125</strong>.<Sup n={2} href={sources[1].url}/> Applies to frequent traders, commercial miners, and anyone whose crypto activity resembles a business.</p>
            </div>
          </div>
        </section>

        <section style={{marginBottom:52,paddingBottom:52,borderBottom:'1px solid '+C.border}}>
          <div style={{display:'flex',alignItems:'center',gap:14,marginBottom:20}}>
            <div style={{width:44,height:44,borderRadius:12,background:C.emeraldDim,border:'1px solid '+C.emeraldBorder,display:'flex',alignItems:'center',justifyContent:'center',fontSize:20,flexShrink:0}}>🧮</div>
            <h2 style={{fontSize:'1.4rem',fontWeight:800,letterSpacing:'-0.025em',color:C.white,margin:0}}>Adjusted Cost Base (ACB): Canada's Required Method</h2>
          </div>
          <p style={{fontSize:15,color:C.muted,lineHeight:1.8,marginBottom:20}}>
            Unlike the US (FIFO, LIFO, HIFO), Canada requires the <strong style={{color:C.white}}>Adjusted Cost Base (ACB)</strong> method.<Sup n={10} href={sources[9].url}/> Your ACB is the average cost of each coin you own, updated with every purchase.
          </p>
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
                  ['Apr 2025','Buy','0.1 BTC','$80,000','$65,000 (average)'],
                  ['Oct 2025','Sell','0.1 BTC','$120,000','Gain = $55,000 → $27,500 taxable'],
                ].map((row,i)=>(
                  <tr key={i} style={{borderBottom:'1px solid rgba(255,255,255,0.04)',background:i===2?'rgba(16,185,129,0.05)':'transparent'}}>
                    {row.map((cell,j)=><td key={j} style={{padding:'10px 14px',color:i===2&&j===4?C.emerald:C.muted}}>{cell}</td>)}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div style={{background:'rgba(245,158,11,0.08)',border:'1px solid rgba(245,158,11,0.25)',borderRadius:12,padding:'16px 20px'}}>
            <div style={{fontWeight:700,color:'#f59e0b',marginBottom:6,fontSize:14}}>⚠️ Superficial Loss Rule</div>
            <p style={{fontSize:13,color:C.muted,lineHeight:1.7,margin:0}}>If you sell crypto at a loss and repurchase the same crypto within 30 days before or after the sale, the CRA denies the loss.<Sup n={11} href={sources[10].url}/> The denied loss is added to the ACB of your repurchased coins, deferring — not eliminating — the loss.</p>
          </div>
        </section>

        <section style={{marginBottom:52,paddingBottom:52,borderBottom:'1px solid '+C.border}}>
          <div style={{display:'flex',alignItems:'center',gap:14,marginBottom:20}}>
            <div style={{width:44,height:44,borderRadius:12,background:C.emeraldDim,border:'1px solid '+C.emeraldBorder,display:'flex',alignItems:'center',justifyContent:'center',fontSize:20,flexShrink:0}}>📊</div>
            <h2 style={{fontSize:'1.4rem',fontWeight:800,letterSpacing:'-0.025em',color:C.white,margin:0}}>2025 Federal Tax Rates — T1 Due April 30, 2026</h2>
          </div>
          <p style={{fontSize:15,color:C.muted,lineHeight:1.8,marginBottom:20}}>
            Canada uses progressive marginal tax rates.<Sup n={5} href={sources[4].url}/> Only 50% of your capital gain is added to taxable income. The basic personal amount for 2025 is <strong style={{color:C.white}}>$16,129</strong> — income below this is not taxed federally.<Sup n={6} href={sources[5].url}/>
          </p>
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
                {[['$0 – $57,375','15%'],['$57,375 – $114,750','20.5%'],['$114,750 – $158,519','26%'],['$158,519 – $220,000','29%'],['Over $220,000','33%']].map(([range,rate])=>(
                  <tr key={range} style={{borderBottom:'1px solid rgba(255,255,255,0.04)'}}>
                    <td style={{padding:'12px 20px',color:C.white,fontWeight:500}}>{range}</td>
                    <td style={{padding:'12px 20px',color:C.emerald,fontWeight:700}}>{rate}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div style={{padding:'14px 20px',background:'rgba(16,185,129,0.05)',borderTop:'1px solid '+C.border,fontSize:12,color:C.muted}}>
              Remember: only 50% of your capital gain is added to income. Provincial taxes apply on top — combined rates typically 30–53%+ depending on province.<Sup n={5} href={sources[4].url}/>
            </div>
          </div>
        </section>

        <section style={{marginBottom:52,paddingBottom:52,borderBottom:'1px solid '+C.border}}>
          <div style={{display:'flex',alignItems:'center',gap:14,marginBottom:20}}>
            <div style={{width:44,height:44,borderRadius:12,background:C.emeraldDim,border:'1px solid '+C.emeraldBorder,display:'flex',alignItems:'center',justifyContent:'center',fontSize:20,flexShrink:0}}>🏛️</div>
            <h2 style={{fontSize:'1.4rem',fontWeight:800,letterSpacing:'-0.025em',color:C.white,margin:0}}>CARF and CRA Enforcement</h2>
          </div>
          <p style={{fontSize:15,color:C.muted,lineHeight:1.8,marginBottom:20}}>
            The Crypto-Asset Reporting Framework (CARF) took effect January 1, 2026.<Sup n={9} href={sources[8].url}/> Canadian exchanges must now report user transaction data to the CRA, with first filings expected in 2027. The CRA has a dedicated crypto audit team that has recovered over $100M in unpaid taxes. Keep records of every transaction — date, CAD value, amount, fees — for at least 6 years.
          </p>
          <div style={{background:'rgba(239,68,68,0.08)',border:'1px solid rgba(239,68,68,0.25)',borderRadius:12,padding:'16px 20px'}}>
            <div style={{fontWeight:700,color:'#f87171',marginBottom:6,fontSize:14}}>⚠️ The CRA Has More Visibility Than Ever</div>
            <p style={{fontSize:13,color:C.muted,lineHeight:1.7,margin:0}}>With CARF, the CRA will cross-reference your filings against exchange-reported data starting in 2027. Exchanges registered in Canada are already required to report transactions over $10,000 CAD to FINTRAC.<Sup n={7} href={sources[6].url}/></p>
          </div>
        </section>

        <section style={{marginBottom:52,paddingBottom:52,borderBottom:'1px solid '+C.border}}>
          <div style={{display:'flex',alignItems:'center',gap:14,marginBottom:20}}>
            <div style={{width:44,height:44,borderRadius:12,background:C.emeraldDim,border:'1px solid '+C.emeraldBorder,display:'flex',alignItems:'center',justifyContent:'center',fontSize:20,flexShrink:0}}>💻</div>
            <h2 style={{fontSize:'1.4rem',fontWeight:800,letterSpacing:'-0.025em',color:C.white,margin:0}}>Crypto Tax Software for Canadians</h2>
          </div>
          <p style={{fontSize:15,color:C.muted,lineHeight:1.8,marginBottom:20}}>Manually tracking ACB across hundreds of transactions is error-prone. These platforms generate CRA-ready Schedule 3 and T2125 reports automatically.</p>
          <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:14}}>
            {[
              {name:'CoinLedger',badge:'RECOMMENDED',desc:'Popular choice for Canadians. Generates Schedule 3, T2125, and TurboTax-compatible files. Supports all major Canadian exchanges.',featured:true,url:'#'},
              {name:'Koinly',badge:null,desc:'Supports 300+ exchanges including all Canadian platforms. ACB calculation and superficial loss rule built in. Free up to 25 transactions.',featured:false,url:'#'},
              {name:'TurboTax Canada',badge:null,desc:'Best for simple crypto situations. Good for basic capital gains reporting. Less ideal for high-volume trading or complex DeFi activity.',featured:false,url:'#'},
              {name:'CryptoTaxCalculator',badge:null,desc:'Best for DeFi, NFTs, and complex transactions. ACB method built in. Exports CRA-compatible reports.',featured:false,url:'#'},
            ].map(sw=>(
              <div key={sw.name} style={{background:C.surface,border:'1px solid '+(sw.featured?C.emeraldBorder:C.border),borderRadius:14,padding:20}}>
                <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:8}}>
                  <div style={{fontWeight:700,fontSize:15,color:C.white}}>{sw.name}</div>
                  {sw.badge&&<span style={{fontSize:10,color:C.emerald,background:C.emeraldDim,padding:'3px 8px',borderRadius:4,fontWeight:700}}>{sw.badge}</span>}
                </div>
                <p style={{fontSize:13,color:C.muted,lineHeight:1.65,margin:'0 0 12px'}}>{sw.desc}</p>
                {sw.featured&&<a href={sw.url} style={{display:'inline-block',background:C.emerald,color:'#fff',borderRadius:8,padding:'8px 16px',fontSize:12,fontWeight:700,textDecoration:'none'}}>Get CoinLedger →</a>}
              </div>
            ))}
          </div>
        </section>

        <div style={{background:'rgba(239,68,68,0.06)',border:'1px solid rgba(239,68,68,0.25)',borderRadius:14,padding:'20px 24px',marginBottom:52}}>
          <div style={{fontWeight:700,color:'#f87171',marginBottom:8,fontSize:15}}>⚠️ Important Disclaimer</div>
          <p style={{fontSize:13,color:C.muted,lineHeight:1.75,margin:0}}>This guide is for general informational purposes only based on CRA guidance as of April 2026. It does not constitute tax, legal, or financial advice. Tax laws change and individual circumstances vary significantly. Always verify information directly with the <a href="https://www.canada.ca/en/revenue-agency/programs/about-canada-revenue-agency-cra/compliance/digital-currency.html" target="_blank" rel="noopener noreferrer" style={{color:C.emerald}}>CRA</a> and consult a qualified CPA for your specific situation.</p>
        </div>

        <div style={{background:C.surface,border:'1px solid '+C.border,borderRadius:16,padding:28}}>
          <div style={{fontWeight:700,fontSize:16,color:C.white,marginBottom:20,letterSpacing:'-0.01em'}}>Sources & References</div>
          <div style={{display:'flex',flexDirection:'column',gap:10}}>
            {sources.map(s=>(
              <div key={s.n} style={{display:'flex',gap:12,alignItems:'flex-start'}}>
                <span style={{fontSize:11,color:C.emerald,fontWeight:700,background:C.emeraldDim,border:'1px solid '+C.emeraldBorder,borderRadius:4,padding:'2px 7px',flexShrink:0,marginTop:2}}>[{s.n}]</span>
                <a href={s.url} target="_blank" rel="noopener noreferrer" style={{fontSize:13,color:C.muted,textDecoration:'none',lineHeight:1.5}}
                  onMouseEnter={e=>(e.currentTarget.style.color=C.white)} onMouseLeave={e=>(e.currentTarget.style.color=C.muted)}
                >{s.label}</a>
              </div>
            ))}
          </div>
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
          <a href="/" style={{display:'flex',alignItems:'center',gap:10,fontWeight:800,fontSize:17,letterSpacing:'-0.03em',color:C.white,textDecoration:'none'}}><Logo/>CryptoNorth</a>
          <div style={{display:'flex',gap:24,flexWrap:'wrap'}}>
            {navLinks.map(([h,l])=>(
              <a key={l} href={h} style={{fontSize:13,color:C.muted,textDecoration:'none',fontWeight:500}}
                onMouseEnter={e=>(e.currentTarget.style.color=C.white)} onMouseLeave={e=>(e.currentTarget.style.color=C.muted)}>{l}</a>
            ))}
          </div>
        </div>
        <div style={{maxWidth:1200,margin:'20px auto 0',paddingTop:20,borderTop:'1px solid '+C.border,display:'flex',justifyContent:'space-between',flexWrap:'wrap',gap:8}}>
          <div style={{fontSize:12,color:C.dim}}>© 2026 CryptoNorth · Canada's independent crypto resource</div>
          <div style={{fontSize:12,color:C.dim}}>Not tax or legal advice. Always verify with the CRA and a qualified CPA.</div>
        </div>
      </footer>
    </div>
  )
}