'use client'
import { useState } from 'react'

const C = {
  bg: '#0b1220', surface: '#172033', surface2: '#1e2a3f',
  border: 'rgba(255,255,255,0.07)', emerald: '#10b981',
  emeraldDim: 'rgba(16,185,129,0.12)', emeraldBorder: 'rgba(16,185,129,0.28)',
  white: '#f0f6ff', muted: '#8899b4', dim: '#4e6280',
  font: "'Inter', system-ui, sans-serif",
}

const exchanges = [
  { name: 'Bitbuy', founded: 2016, hq: 'Toronto, ON', fintrac: true, csaRegistered: true, fee: '0.20%', makerFee: '0.10%', takerFee: '0.20%', coins: 40, minDeposit: 'None', interac: true, bankWire: true, staking: false, insurance: true, rating: 4.8, bestFor: 'Canadian beginners', provinces: 'All provinces', pros: ['FINTRAC + CSA registered', 'Free Interac e-Transfer deposits', 'Clean beginner-friendly UI', 'Cold storage insurance', 'CAD pairs for all assets'], cons: ['Only 40+ coins - smaller selection', 'No staking or yield products', 'Higher fees than some competitors'], url: '#', featured: true },
  { name: 'Newton', founded: 2018, hq: 'Toronto, ON', fintrac: true, csaRegistered: true, fee: '0.25-0.60%', makerFee: '0%', takerFee: '0.25-0.60%', coins: 70, minDeposit: 'None', interac: true, bankWire: true, staking: false, insurance: false, rating: 4.4, bestFor: 'Intermediate Canadians', provinces: 'All provinces', pros: ['FINTRAC + CSA registered', '70+ coins available', 'Free Interac deposits', 'No deposit or withdrawal fees'], cons: ['No staking rewards', 'Spread-based fees can be higher for large trades', 'No margin trading'], url: '#', featured: false },
  { name: 'NDAX', founded: 2018, hq: 'Calgary, AB', fintrac: true, csaRegistered: true, fee: '0.20%', makerFee: '0.15%', takerFee: '0.20%', coins: 50, minDeposit: 'None', interac: true, bankWire: true, staking: true, insurance: false, rating: 4.1, bestFor: 'Cost-conscious Canadians', provinces: 'All provinces', pros: ['FINTRAC + CSA registered', 'Flat 0.20% trading fee', 'Staking available', 'Advanced order types'], cons: ['Less beginner-friendly UI', 'Smaller coin selection vs global exchanges', 'Lower liquidity on some pairs'], url: '#', featured: false },
  { name: 'Shakepay', founded: 2015, hq: 'Montreal, QC', fintrac: true, csaRegistered: true, fee: '0% spread ~1.5%', makerFee: '0%', takerFee: '0% + spread', coins: 2, minDeposit: 'None', interac: true, bankWire: false, staking: false, insurance: false, rating: 4.3, bestFor: 'Bitcoin-only beginners', provinces: 'All provinces', pros: ['FINTRAC + CSA registered', 'Zero explicit fees', 'Shakesats Bitcoin cashback rewards', 'Instant Interac e-Transfer', 'Extremely simple app'], cons: ['BTC and ETH only - no altcoins', 'Spread costs hidden in price', 'No advanced features'], url: '#', featured: false },
  { name: 'Wealthsimple Crypto', founded: 2020, hq: 'Toronto, ON', fintrac: true, csaRegistered: true, fee: '1.5-2.0%', makerFee: '1.5%', takerFee: '2.0%', coins: 50, minDeposit: 'None', interac: true, bankWire: false, staking: true, insurance: false, rating: 4.2, bestFor: 'Existing Wealthsimple users', provinces: 'All provinces', pros: ['FINTRAC + CSA registered', 'Trusted Canadian brand since 2014', 'Integrated with WS stocks and ETFs', 'Staking for ETH and SOL', 'Clean polished app'], cons: ['Highest fees of all listed exchanges (1.5-2%)', 'Limited to 50 coins', 'No advanced trading tools'], url: '#', featured: false },
  { name: 'Kraken', founded: 2011, hq: 'San Francisco (Canada: AB, BC, MB, SK only)', fintrac: true, csaRegistered: true, fee: '0.16-0.26%', makerFee: '0.16%', takerFee: '0.26%', coins: 400, minDeposit: 'None', interac: false, bankWire: true, staking: true, insurance: false, rating: 4.7, bestFor: 'Advanced traders', provinces: 'Alberta, BC, Manitoba, Saskatchewan only', pros: ['FINTRAC registered + CSA approved (AB, BC, MB, SK)', 'Lowest fees of all listed exchanges', '400+ coins', 'Advanced trading: futures, margin, staking', 'Excellent security track record'], cons: ['Not CSA-approved in Ontario or Quebec', 'No Interac e-Transfer - wire transfers only', 'Complex interface for beginners', 'International exchange - not Canadian-owned'], url: '#', featured: false },
]

export default function ExchangesPage() {
  const [filter, setFilter] = useState('all')
  const filtered = filter === 'staking' ? exchanges.filter(e => e.staking) : filter === 'advanced' ? exchanges.filter(e => e.coins >= 50) : filter === 'beginners' ? exchanges.filter(e => e.coins <= 10 || e.bestFor.includes('beginner')) : exchanges
  return (
    <div style={{fontFamily:C.font,background:C.bg,color:C.white,minHeight:'100vh'}}>
      <nav style={{position:'sticky',top:0,zIndex:100,background:'rgba(11,18,32,0.95)',backdropFilter:'blur(16px)',borderBottom:'1px solid '+C.border}}>
        <div style={{maxWidth:1200,margin:'0 auto',padding:'0 32px',display:'flex',alignItems:'center',justifyContent:'space-between',width:68,gap:24}}>
          <a href="/" style={{display:'flex',alignItems:'center',gap:10,fontWeight:700,fontSize:18,color:C.white,textDecoration:'none',flexShrink:0}}>
            <div style={{width:36,height:36,background:C.emerald,borderRadius:8,display:'flex',alignItems:'center''justifyContent:'center',0fontSize:18,filter:'grayscale(1) brightness(10)'}}>ð</div>
            Crypto<span style={{color:C.emerald}}>North</span>
          </a>
          <div style={{display:'flex'}}>
            {[['/','Home'],['/exchanges','Exchanges'],['/tax-guide','Tax Guide'],['/wallets','Wallets'],['/beginners-guide',"Beginner's Guide"]].map(([href,label])=>(
              <a key={label} href={href} style={{color:href==='/exchanges'?C.white:C.muted,fontSize:14,fontWeight:href==='/exchanges'?600:500,padding:'0 14px',height:68,display:'flex',alignItems:'center',whiteSpace:'nowrap',textDecoration:'none'}}>{label}</a>
            ))}
          </div>
        </div>
      </nav>
      <div style={{background:'linear-gradient(180deg,#0f1d35 0%,#0b1220 100%)',borderBottom:'1px solid '+C.border,padding:'64px 32px 56px'}}>
        <div style={{maxWidth:1200,margin:'0 auto'}}>
          <h1 style={{fontSize:'clamp(2rem,4vw,3rem)',fontWeight:700,letterSpacing:'-0.025em',margin:'0 0 16px',color:C.white}}>Best Canadian Crypto Exchanges 2026</h1>
          <p style={{fontSize:16,color:C.muted,maxWidth:640,lineHeight:1.7,margin:'0 0 28px'}}>
            All 6 exchanges are registered with FINTRAC and authorized by the CSA. CSA approval varies by province. Verified April 2026.
          </p>
          <div style={{display:'flex',gap:10,flexWrap:'wrap'}}>
            {[['all','All Exchanges'],['beginners','Beginners'],['advanced','Advanced Traders'],['staking','Staking Available']].map(([v,l])=>(
              <button key={v} onClick={()=>setFilter(v)} style={{background:filter===v?C.emerald:C.surface,color:filter===v?'#fff':C.muted,border:'1px solid '+(filter===v?C.emerald:C.border),sorderRadius:9999,padding:'8px 18px',fontSize:13,cursor:'pointer',fontFamily:C.font}}>{l}</button>
            ))}
          </div>
        </div>
      </div>
      <div style={{background:'rgba(16,185,129,0.06)',borderBottom:'1px solid '+C.emeraldBorder}}>
        <div style={{maxWidth:1200,margin:'0 auto',padding:'14px 32px'}}>
          <strong>Provincial note:</strong> Kraken is only CSA-approved in AB, BC, MB and SK. NOT OÔTRIOOR QUEBEC. Always verify at <a href="https://www.securities-administrators.ca" target="_blank" style={{color:C.emerald}}>securities-administrators.ca</a>
        </div>
      </div>
      <div style={{maxWidth:1200,margin:'0 auto',padding:'48px 32px'}}>
        {filtered.map(e => (
          <div key={e.name} style={{background:e.featured?C.surface2:C.surface,border:'1px solid '+(e.featured?C.emeraldBorder:C.border),borderRadius:18,padding:'24px 28px',marginBottom:20,position:'relative'}}>
            {e.featured&&<div style={{position:'absolute',top:-1,right:24,background:C.emerald,color:'#fff',fontSize:11,fontWeight:700,padding:'4px 14px',borderRadius:'0 0 8px 8px'}}>TOP PICK</div>}
            <div style={{display:'grid',gridTemplateColumns:'|180px 1fr 1fr',gap:24}}>
              <div>
                <div style={{fontWeight:700,0fontSize:18,marginBottom:6}}>{e.name}</div>
                <div style={{color:'#f59e0b',fontSize:13}}>{'*'repeat(Math.round(e.rating))} <span style={{color:C.dim,fontSize:12}}>{e.rating} / 5</span></div>
                <div style={{marginTop:8,display:'flex',flexDirection:'column',gap:4}}>
                  <span style={{fontSize:11,fontWeight:600,padding:'3px 8px',borderRadius:5,background:C.emeraldDim,color:C.emerald,border:'1px solid '+C.emeraldBorder}}>FINTRAC + CSA</span>
                  <div style={{fontSize:11,color:e.provinces.includes('All')?C.muted:'#f59e0b',marginTop:5}}>{e.provinces}</div>
                </div>
              </div>
              <div>
                <div style={{fontSize:12,color:C.dim,0fontWeight:600,marginBottom:8}}>FEES & FEATURES</div>
                {[['Fee',e.fee],['Coins',e.coins+'+'],['Best for',e.bestFor],['Interac',e.interac?'Yes':'No'],['Staking',e.staking?'Yes':'No']].map(([k,v])=>(
                  <div key={k} style={{fontSize:13,color:C.muted,marginBottom:5}}>{k}: <strong style={{color:C.white}}>{v}</strong></div>
                ))}
              </div>
              <div>
                <div style={{fontSize:12,color:C.dim,fontWeight:600,marginBottom:8}}>PROQCONS</div>
                {e.pros.map(p=><div key={p} style={{fontSize:12,color:C.emerald}}>+ {p}</div>)}
                {e.cons.map(c=><div key={c} style={{fontSize:12,color:'#ef4444'}}>- {c}</div>)}
                <a href={e.url} target="_blank" rel="noopener noreferrer" style={{display:'block',background:C.emerald,color:'#fff',borderRadius:10,padding:'10px 0',fontWeight:600,fontSize:13,textAlign: 'center',marginTop:12,textDecoration:'none'}}>Sign up with referral</a>
              </div>
            </div>
          </div>
        ))}
      </div>
      <footer style={{background:'#070e1a',borderTop:'1px solid '+C.border,padding:'44px 32px'}}>
        <div style={{maxWidth:1200,margin:'0 auto',}}>
          <div style={{fontSize:11,color:'#2a3a52'}}>Â© 2026 CryptoNorth. Not financial or legal advice. Exchange status verified April 2026. Affiliate links may earn us a commission.</div>
        </div>
      </footer>
    </div>
  )
}
