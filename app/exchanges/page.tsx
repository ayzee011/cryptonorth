'use client'
import { useState } from 'react'

const C = {bg:'#0b1220',surface:'#172033',surface2:'#1e2a3f',border:'rgba(255,255,255,0.07)',emerald:'#10b981',emeraldDim:'rgba(16,185,129,0.12)',emeraldBorder:'rgba(16,185,129,0.28)',white:'#f0f6ff',muted:'#8899b4',dim:'#4e6280',font:"'Inter', system-ui, sans-serif"}

const exchanges = [
  {name:'Bitbuy',founded:2016,hq:'Toronto, ON',fee:'0.20%',makerFee:'0.10%',takerFee:'0.20%',coins:40,interac:true,staking:false,rating:4.8,bestFor:'Canadian beginners',provinces:'All provinces',pros:['FINTRAC + CSA registered','Free Interac e-Transfer deposits','Beginner-friendly UI','Cold storage insurance'],cons:['Only 40+ coins','No staking'],url:'#',featured:true},
  {name:'Newton',founded:2018,hq:'Toronto, ON',fee:'0.25-0.60%',makerFee:'0%',takerFee:'0.25-0.60%',coins:70,interac:true,staking:false,rating:4.4,bestFor:'Intermediate Canadians',provinces:'All provinces',pros:['FINTRAC + CSA registered','70+ coins','Free Interac deposits','No deposit fees'],cons:['No staking','Spread fees on large trades'],url:'#',featured:false},
  {name:'NDAX',founded:2018,hq:'Calgary, AB',fee:'0.20%',makerFee:'0.15%',takerFee:'0.20%',coins:50,interac:true,staking:true,rating:4.1,bestFor:'Low fees',provinces:'All provinces',pros:['FINTRAC + CSA registered','Flat 0.20% fee','Staking available','Advanced order types'],cons:['Less beginner-friendly','Lower liquidity on some pairs'],url:'#',featured:false},
  {name:'Shakepay',founded:2015,hq:'Montreal, QC',fee:'0% + spread',makerFee:'0%',takerFee:'0% + spread',coins:2,interac:true,staking:false,rating:4.3,bestFor:'Bitcoin-only beginners',provinces:'All provinces',pros:['FINTRAC + CSA registered','Zero explicit fees','Shakesats Bitcoin cashback','Instant Interac'],cons:['BTC and ETH only','Spread costs hidden in price'],url:'#',featured:false},
  {name:'Wealthsimple',founded:2020,hq:'Toronto, ON',fee:'1.5-2.0%',makerFee:'1.5%',takerFee:'2.0%',coins:50,interac:true,staking:true,rating:4.2,bestFor:'Existing WS users',provinces:'All provinces',pros:['FINTRAC + CSA registered','Trusted Canadian brand','Integrated with WS stocks and ETFs','Staking for ETH and SOL'],cons:['Highest fees (1.5-2%)','No advanced trading'],url:'#',featured:false},
  {name:'Kraken',founded:2011,hq:'San Francisco (Canada: AB, BC, MB, SK only)',fee:'0.16-0.26%',makerFee:'0.16%',takerFee:'0.26%',coins:400,interac:false,staking:true,rating:4.7,bestFor:'Advanced traders',provinces:'Alberta, BC, Manitoba, Saskatchewan only',pros:['FINTRAC + CSA approved (AB BC MB SK)','Lowest fees','400+ coins','Advanced trading: futures, margin, staking'],cons:['NOT available in Ontario or Quebec','No Interac - wire transfers only','Complex for beginners'],url:'#',featured:false},
]

export default function ExchangesPage() {
  const [filter, setFilter] = useState('all')
  const filtered = filter === 'staking' ? exchanges.filter(e => e.staking)
    : filter === 'advanced' ? exchanges.filter(e => e.coins >= 50)
    : filter === 'beginners' ? exchanges.filter(e => e.coins <= 10 || e.bestFor.includes('beginner'))
    : exchanges
  return (
    <div style={{fontFamily:C.font,background:C.bg,color:C.white,minHeight:'100vh'}}>
      <nav style={{position:'sticky',top:0,zIndex:100,background:'rgba(11,18,32,0.95)',backdropFilter:'blur(16px)',borderBottom:'1px solid '+C.border}}>
        <div style={{maxWidth:1200,margin:'0 auto',padding:'0 32px',display:'flex',alignItems:'center',justifyContent:'space-between',height:68,gap:24}}>
          <a href="/" style={{display:'flex',alignItems:'center',gap:10,fontWeight:700,fontSize:18,color:C.white,textDecoration:'none',flexShrink:0}}>
            <div style={{width:36,height:36,background:C.emerald,borderRadius:8,display:'flex',alignItems:'center',justifyContent:'center'}}><svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" style={{width:22,height:22}}><path fill="white" d="M50 5 L58 30 L85 20 L70 42 L95 45 L75 58 L80 80 L50 68 L20 80 L25 58 L5 45 L30 42 L15 20 L42 30 Z"/></svg></div>
            Crypto<span style={{color:C.emerald}}>North</span>
          </a>
          <div style={{display:'flex'}}>
            {[['/','Home'],['/exchanges','Exchanges'],['/tax-guide','Tax Guide'],['/wallets','Wallets'],['/beginners-guide',"Beginner's Guide"]].map(([h,l]) => (
              <a key={l} href={h} style={{color:h==='/exchanges'?C.white:C.muted,fontSize:14,fontWeight:h==='/exchanges'?600:500,padding:'0 14px',height:68,display:'flex',alignItems:'center',whiteSpace:'nowrap',textDecoration:'none'}}>{l}</a>
            ))}
          </div>
          <a href="/beginners-guide" style={{background:C.emerald,color:'#fff',padding:'0 22px',height:40,borderRadius:9999,fontWeight:600,fontSize:14,display:'flex',alignItems:'center',whiteSpace:'nowrap',flexShrink:0,textDecoration:'none'}}>Beginner's Guide</a>
        </div>
      </nav>
      <div style={{background:'linear-gradient(180deg,#0f1d35 0%,#0b1220 100%)',borderBottom:'1px solid '+C.border,padding:'64px 32px 56px'}}>
        <div style={{maxWidth:1200,margin:'0 auto'}}>
          <div style={{display:'inline-flex',alignItems:'center',background:C.emeraldDim,border:'1px solid '+C.emeraldBorder,color:C.emerald,fontSize:12,fontWeight:600,borderRadius:9999,padding:'5px 14px',marginBottom:20,letterSpacing:'0.05em',textTransform:'uppercase'}}>Updated April 2026 - CSA and FINTRAC Verified</div>
          <h1 style={{fontSize:'clamp(2rem,4vw,3rem)',fontWeight:700,letterSpacing:'-0.025em',margin:'0 0 16px',color:C.white}}>Best Canadian Crypto Exchanges 2026</h1>
          <p style={{fontSize:16,color:C.muted,maxWidth:640,lineHeight:1.7,margin:'0 0 24px'}}>All 6 exchanges below are registered with FINTRAC as Money Services Businesses and authorized by the CSA. CSA approval varies by province - always confirm availability in your province before signing up. Verified April 2026.</p>
          <div style={{display:'flex',gap:10,flexWrap:'wrap'}}>
            {[['all','All Exchanges'],['beginners','Beginners'],['advanced','Advanced Traders'],['staking','Staking Available']].map(([v,l]) => (
              <button key={v} onClick={() => setFilter(v)} style={{background:filter===v?C.emerald:C.surface,color:filter===v?'#fff':C.muted,border:'1px solid '+(filter===v?C.emerald:C.border),borderRadius:9999,padding:'8px 18px',fontSize:13,fontWeight:500,cursor:'pointer',fontFamily:C.font}}>{l}</button>
            ))}
          </div>
        </div>
      </div>
      <div style={{background:'rgba(16,185,129,0.06)',borderBottom:'1px solid '+C.emeraldBorder}}>
        <div style={{maxWidth:1200,margin:'0 auto',padding:'14px 32px'}}>
          <p style={{fontSize:13,color:C.muted,margin:0,lineHeight:1.6}}><strong style={{color:C.white}}>Provincial note:</strong> Canada has no single national crypto license. Each province approves exchanges independently. <strong style={{color:C.white}}>Kraken is only CSA-approved in Alberta, BC, Manitoba, and Saskatchewan</strong> - NOT Ontario or Quebec. Always verify at <a href="https://www.securities-administrators.ca" target="_blank" rel="noopener noreferrer" style={{color:C.emerald}}>securities-administrators.ca</a></p>
        </div>
      </div>
      <div style={{maxWidth:1200,margin:'0 auto',padding:'48px 32px'}}>
        <div style={{display:'flex',flexDirection:'column',gap:20}}>
          {filtered.map((e, idx) => (
            <div key={e.name} style={{background:e.featured?C.surface2:C.surface,border:'1px solid '+(e.featured?C.emeraldBorder:C.border),borderRadius:18,padding:'28px 32px',position:'relative'}}>
              {e.featured && <div style={{position:'absolute',top:-1,right:24,background:C.emerald,color:'#fff',fontSize:11,fontWeight:700,padding:'4px 14px',borderRadius:'0 0 8px 8px'}}>TOP PICK</div>}
              <div style={{display:'grid',gridTemplateColumns:'180px 1fr 1fr auto',gap:28,alignItems:'start'}}>
                <div>
                  <div style={{fontWeight:700,fontSize:18,color:C.white,marginBottom:6}}>{e.name}</div>
                  <div style={{color:'#f59e0b',fontSize:13,marginBottom:8}}>{'★'.repeat(Math.round(e.rating))} <span style={{color:C.dim,fontSize:12}}>{e.rating}/5</span></div>
                  <span style={{display:'inline-flex',fontSize:11,fontWeight:600,padding:'3px 8px',borderRadius:5,background:C.emeraldDim,color:C.emerald,border:'1px solid '+C.emeraldBorder}}>FINTRAC + CSA</span>
                  <div style={{fontSize:11,color:e.provinces.includes('All')?C.muted:'#f59e0b',marginTop:8,fontWeight:e.provinces.includes('All')?400:600}}>{e.provinces}</div>
                </div>
                <div>
                  <div style={{fontSize:12,color:C.dim,fontWeight:600,marginBottom:8,textTransform:'uppercase',letterSpacing:'0.06em'}}>Fees & Features</div>
                  {[['Trading Fee',e.fee],['Maker/Taker',e.makerFee+' / '+e.takerFee],['Coins',e.coins+'+'],['Interac',e.interac?'Yes':'No'],['Staking',e.staking?'Yes':'No'],['Best for',e.bestFor]].map(([k,v]) => (
                    <div key={k} style={{fontSize:13,color:C.muted,marginBottom:4}}>{k}: <strong style={{color:C.white}}>{v}</strong></div>
                  ))}
                </div>
                <div>
                  <div style={{fontSize:12,color:C.dim,fontWeight:600,marginBottom:8,textTransform:'uppercase',letterSpacing:'0.06em'}}>Pros & Cons</div>
                  {e.pros.map(p => <div key={p} style={{fontSize:12,color:C.emerald,marginBottom:3}}>+ {p}</div>)}
                  {e.cons.map(c => <div key={c} style={{fontSize:12,color:'#ef4444',marginBottom:3}}>- {c}</div>)}
                </div>
                <div style={{display:'flex',flexDirection:'column',gap:8,alignItems:'flex-end'}}>
                  <a href={e.url} target="_blank" rel="noopener noreferrer" style={{display:'block',background:C.emerald,color:'#fff',borderRadius:10,padding:'11px 20px',fontWeight:600,fontSize:13,textAlign:'center',textDecoration:'none',whiteSpace:'nowrap'}}>Sign up with referral</a>
                  <div style={{fontSize:10,color:C.dim,textAlign:'center'}}>Affiliate link</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div style={{borderTop:'1px solid '+C.border,borderBottom:'1px solid '+C.border,background:C.surface}}>
        <div style={{maxWidth:1200,margin:'0 auto',padding:'56px 32px'}}>
          <h2 style={{fontSize:'1.5rem',fontWeight:700,letterSpacing:'-0.02em',marginBottom:32,color:C.white}}>Understanding Canadian Crypto Regulation</h2>
          <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:20}}>
            {[
              {icon:'🏛️',title:'FINTRAC (Federal)',body:'All crypto exchanges must register with FINTRAC as a Money Services Business under the PCMLTFA. Required since June 2020. Requires KYC identity verification, AML programs, and reporting transactions over CAD $10,000.'},
              {icon:'🏦',title:'CSA (Provincial)',body:'The Canadian Securities Administrators (CSA) is an umbrella of provincial securities regulators. Each province independently approves exchanges. Ontario (OSC), BC (BCSC), Quebec (AMF), and Alberta (ASC) each maintain separate approved platform lists.'},
              {icon:'🔒',title:'Your Protections',body:'Regulated exchanges must segregate client funds, use qualified custodians for cold storage, and implement AML/KYC programs. Note: crypto is NOT covered by CDIC (Canada Deposit Insurance Corporation). Always verify registration status before depositing.'},
            ].map(f => (
              <div key={f.title} style={{background:C.bg,border:'1px solid '+C.border,borderRadius:16,padding:24}}>
                <div style={{fontSize:24,marginBottom:12}}>{f.icon}</div>
                <div style={{fontWeight:700,fontSize:15,marginBottom:10,color:C.white}}>{f.title}</div>
                <p style={{fontSize:13,color:C.muted,lineHeight:1.7,margin:0}}>{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div style={{maxWidth:1200,margin:'0 auto',padding:'56px 32px'}}>
        <h2 style={{fontSize:'1.5rem',fontWeight:700,letterSpacing:'-0.02em',marginBottom:32,color:C.white}}>Frequently Asked Questions</h2>
        <div style={{display:'flex',flexDirection:'column',gap:16}}>
          {[
            {q:'Are my crypto holdings insured in Canada?',a:'No. Crypto assets are not protected by CDIC. They are not bank deposits. While regulated exchanges must segregate client funds, there is no government-backed insurance on your crypto. Some exchanges like Bitbuy carry private cold storage insurance - check each platform terms.'},
            {q:'Can I use Binance or Coinbase in Canada?',a:'Coinbase is CSA-registered and available across Canada. Binance was fined $6 million by FINTRAC in 2024 for non-compliance and has a complicated regulatory status in Canada - exercise caution. Always check the CSA authorized platform list at securities-administrators.ca.'},
            {q:'Is Kraken available in Ontario or Quebec?',a:'No. As of April 2026, Kraken (Payward Canada Inc.) is only CSA-approved in Alberta, British Columbia, Manitoba, and Saskatchewan. Ontario and Quebec residents cannot use Kraken through compliant channels.'},
            {q:'Do I need to report crypto to the CRA even if I have not sold?',a:'Simply buying and holding crypto is not a taxable event in Canada. You only trigger tax when you dispose of crypto - by selling, trading, spending, or gifting it. Keep records of every purchase including date and CAD value for your ACB calculation.'},
          ].map(({q,a}) => (
            <div key={q} style={{background:C.surface,border:'1px solid '+C.border,borderRadius:14,padding:'20px 24px'}}>
              <div style={{fontWeight:600,fontSize:15,color:C.white,marginBottom:8}}>{q}</div>
              <p style={{fontSize:13,color:C.muted,lineHeight:1.7,margin:0}}>{a}</p>
            </div>
          ))}
        </div>
      </div>
      <footer style={{background:'#070e1a',borderTop:'1px solid '+C.border,padding:'44px 32px'}}>
        <div style={{maxWidth:1200,margin:'0 auto',display:'flex',justifyContent:'space-between',alignItems:'center',flexWrap:'wrap',gap:20}}>
          <div><div style={{fontWeight:700,fontSize:16,display:'flex',alignItems:'center',gap:8}}><div style={{width:20,height:20,background:C.emerald,borderRadius:4,display:'flex',alignItems:'center',justifyContent:'center'}}><svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" style={{width:12,height:12}}><path fill="white" d="M50 5 L58 30 L85 20 L70 42 L95 45 L75 58 L80 80 L50 68 L20 80 L25 58 L5 45 L30 42 L15 20 L42 30 Z"/></svg></div>CryptoNorth</div><div style={{fontSize:12,color:C.dim,marginTop:3}}>Canada's independent crypto resource</div></div>
          <div style={{display:'flex',gap:24,flexWrap:'wrap'}}>{[['/','Home'],['/exchanges','Exchanges'],['/tax-guide','Tax Guide'],['/wallets','Wallets'],['/beginners-guide',"Beginner's Guide"]].map(([h,l])=><a key={l} href={h} style={{fontSize:13,color:C.dim,textDecoration:'none'}}>{l}</a>)}</div>
          <div style={{fontSize:11,color:'#2a3a52',width:'100%',marginTop:8}}>© 2026 CryptoNorth. Not financial or legal advice. Regulatory status verified April 2026. Some links are affiliate links.</div>
        </div>
      </footer>
    </div>
  )
}