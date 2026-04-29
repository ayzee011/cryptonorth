'use client'
import { useState, useEffect } from 'react'

const C = {
  bg: '#0b1220', surface: '#131f35', surface2: '#1a2842',
  border: 'rgba(255,255,255,0.06)', emerald: '#10b981',
  emeraldDim: 'rgba(16,185,129,0.1)', emeraldBorder: 'rgba(16,185,129,0.25)',
  white: '#f0f6ff', muted: '#7a8fa8', dim: '#3d5170',
  font: "'Inter', system-ui, sans-serif",
}

const Logo = () => (
  <div style={{width:36,height:36,background:C.emerald,borderRadius:9,display:'flex',alignItems:'center',justifyContent:'center',flexShrink:0}}>
    <svg viewBox="0 0 100 100" style={{width:20,height:20}}><path fill="white" d="M50 4 L60 32 L88 18 L72 44 L96 48 L74 62 L80 84 L50 70 L20 84 L26 62 L4 48 L28 44 L12 18 L40 32 Z"/></svg>
  </div>
)

const others = [
  {name:'Newton',fee:'0.25–0.60%',coins:'70+',bestFor:'Intermediate',rating:4.4,stars:'★★★★☆',pros:['FINTRAC + CSA registered','70+ coins with CAD pairs','Free Interac e-Transfer','No deposit fees'],cons:['No staking','Spread widens on large orders'],province:null,url:'#'},
  {name:'NDAX',fee:'0.20% flat',coins:'50+',bestFor:'Low-fee traders',rating:4.1,stars:'★★★★☆',pros:['Flat 0.20% fee','Staking available','Advanced order types'],cons:['Less beginner-friendly','Lower liquidity on some pairs'],province:null,url:'#'},
  {name:'Shakepay',fee:'0% + spread',coins:'BTC, ETH',bestFor:'Bitcoin beginners',rating:4.3,stars:'★★★★☆',pros:['Zero explicit fees','Shakesats Bitcoin cashback','Instant Interac e-Transfer'],cons:['BTC and ETH only','Spread hidden in price'],province:null,url:'#'},
  {name:'Wealthsimple',fee:'1.5–2.0%',coins:'50+',bestFor:'Existing WS users',rating:4.2,stars:'★★★★☆',pros:['Trusted Canadian brand','Integrated with WS stocks','ETH and SOL staking'],cons:['Highest fees (1.5–2%)','No advanced trading'],province:null,url:'#'},
  {name:'Kraken',fee:'0.16–0.26%',coins:'400+',bestFor:'Advanced traders',rating:4.7,stars:'★★★★★',pros:['Lowest fees listed','400+ coins','Futures and margin trading'],cons:['AB, BC, MB, SK only','No Interac e-Transfer'],province:'AB · BC · MB · SK only',url:'#'},
]

function fmt(n: number) {
  return '$' + n.toLocaleString('en-CA', {minimumFractionDigits:2,maximumFractionDigits:2})
}

export default function Home() {
  const [prices, setPrices] = useState<any>({})
  useEffect(() => {
    function load() {
      fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum&vs_currencies=cad&include_24hr_change=true')
        .then(r => r.json()).then(setPrices).catch(()=>{})
    }
    load()
    const t = setInterval(load, 30000)
    return () => clearInterval(t)
  }, [])
  const btc = prices.bitcoin
  const eth = prices.ethereum

  return (
    <div style={{fontFamily:C.font,background:C.bg,color:C.white,minHeight:'100vh'}}>

      <nav style={{position:'sticky',top:0,zIndex:100,background:'rgba(11,18,32,0.96)',backdropFilter:'blur(20px)',borderBottom:'1px solid '+C.border}}>
        <div style={{maxWidth:1200,margin:'0 auto',padding:'0 32px',display:'flex',alignItems:'center',justifyContent:'space-between',height:68,gap:32}}>
          <a href="/" style={{display:'flex',alignItems:'center',gap:10,fontWeight:800,fontSize:18,letterSpacing:'-0.03em',color:C.white,textDecoration:'none',flexShrink:0}}>
            <Logo/>Crypto<span style={{color:C.emerald}}>North</span>
          </a>
          <div style={{display:'flex'}}>
            {[['/','Home'],['/exchanges','Exchanges'],['/tax-guide','Tax Guide'],['/wallets','Wallets'],['/beginners-guide',"Beginner's Guide"]].map(([h,l])=>(
              <a key={l} href={h} style={{color:C.muted,fontSize:14,fontWeight:500,padding:'0 16px',height:68,display:'flex',alignItems:'center',whiteSpace:'nowrap',textDecoration:'none'}}
                onMouseEnter={e=>(e.currentTarget.style.color=C.white)} onMouseLeave={e=>(e.currentTarget.style.color=C.muted)}>{l}</a>
            ))}
          </div>
          <a href="/exchanges" style={{background:C.emerald,color:'#fff',padding:'0 22px',height:40,borderRadius:9999,fontWeight:700,fontSize:13,display:'flex',alignItems:'center',whiteSpace:'nowrap',flexShrink:0,textDecoration:'none'}}
            onMouseEnter={e=>(e.currentTarget.style.opacity='0.85')} onMouseLeave={e=>(e.currentTarget.style.opacity='1')}>Compare Exchanges</a>
        </div>
      </nav>

      <div style={{maxWidth:1200,margin:'0 auto',padding:'88px 32px 72px',display:'grid',gridTemplateColumns:'1fr 440px',gap:64,alignItems:'center'}}>
        <div>
          <div style={{display:'inline-flex',alignItems:'center',gap:8,background:C.emeraldDim,border:'1px solid '+C.emeraldBorder,color:C.emerald,fontSize:11,fontWeight:700,borderRadius:9999,padding:'6px 14px',marginBottom:28,letterSpacing:'0.07em',textTransform:'uppercase'}}>
            🍁 Built for Canadians &nbsp;·&nbsp; FINTRAC and CSA Compliant
          </div>
          <h1 style={{fontSize:'clamp(2.6rem,4.5vw,3.8rem)',fontWeight:800,lineHeight:1.08,letterSpacing:'-0.035em',color:C.white,margin:'0 0 22px'}}>
            The best Canadian<br/><span style={{color:C.emerald}}>crypto exchanges,</span><br/>ranked for you.
          </h1>
          <p style={{fontSize:17,color:C.muted,lineHeight:1.75,maxWidth:460,margin:'0 0 40px'}}>
            Unbiased reviews of every FINTRAC-registered exchange. Real CAD fees, honest pros and cons, and up-to-date CRA tax guidance. No U.S. bias, no fluff.
          </p>
          <div style={{display:'flex',gap:12}}>
            <a href="/exchanges" style={{background:C.emerald,color:'#fff',padding:'14px 28px',borderRadius:12,fontWeight:700,fontSize:15,display:'inline-flex',alignItems:'center',gap:8,textDecoration:'none'}}
              onMouseEnter={e=>(e.currentTarget.style.opacity='0.88')} onMouseLeave={e=>(e.currentTarget.style.opacity='1')}>Find the Best Exchange →</a>
            <a href="/tax-guide" style={{background:'transparent',color:C.white,padding:'14px 24px',borderRadius:12,fontWeight:600,fontSize:15,border:'1.5px solid rgba(255,255,255,0.15)',display:'inline-flex',alignItems:'center',textDecoration:'none'}}
              onMouseEnter={e=>(e.currentTarget.style.borderColor='rgba(255,255,255,0.4)')} onMouseLeave={e=>(e.currentTarget.style.borderColor='rgba(255,255,255,0.15)')}>2026 Tax Guide</a>
          </div>
        </div>

        <div style={{background:C.surface,border:'1px solid '+C.border,borderRadius:24,padding:32,boxShadow:'0 40px 100px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.04) inset'}}>
          <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:28}}>
            <span style={{fontSize:11,color:C.dim,fontWeight:700,letterSpacing:'0.1em',textTransform:'uppercase'}}>Live Prices · CAD</span>
            <span style={{display:'flex',alignItems:'center',gap:6,fontSize:12,color:C.emerald,fontWeight:600}}>
              <span style={{width:7,height:7,background:C.emerald,borderRadius:'50%',display:'inline-block'}}/>Live
            </span>
          </div>
          {[{icon:'₿',bg:'rgba(247,147,26,0.12)',color:'#f7931a',name:'Bitcoin',sym:'BTC',data:btc},{icon:'Ξ',bg:'rgba(98,126,234,0.12)',color:'#627eea',name:'Ethereum',sym:'ETH',data:eth}].map((coin,i)=>(
            <div key={coin.sym} style={{display:'flex',justifyContent:'space-between',alignItems:'center',padding:'20px 0',borderBottom:i===0?'1px solid '+C.border:'none'}}>
              <div style={{display:'flex',alignItems:'center',gap:14}}>
                <div style={{width:46,height:46,borderRadius:14,background:coin.bg,color:coin.color,display:'flex',alignItems:'center',justifyContent:'center',fontSize:20,fontWeight:800}}>{coin.icon}</div>
                <div>
                  <div style={{fontWeight:700,fontSize:15}}>{coin.name}</div>
                  <div style={{fontSize:12,color:C.dim,marginTop:1}}>{coin.sym}</div>
                </div>
              </div>
              <div style={{textAlign:'right'}}>
                <div style={{fontSize:22,fontWeight:800,letterSpacing:'-0.02em',fontFamily:'monospace'}}>{coin.data?.cad ? fmt(coin.data.cad) : <span style={{color:C.dim,fontSize:16}}>Loading…</span>}</div>
                {coin.data?.cad_24h_change!=null&&<div style={{fontSize:13,fontWeight:700,color:coin.data.cad_24h_change>=0?C.emerald:'#f87171',marginTop:3}}>{coin.data.cad_24h_change>=0?'▲ +':'▼ '}{Math.abs(coin.data.cad_24h_change).toFixed(2)}%</div>}
              </div>
            </div>
          ))}
          <div style={{marginTop:24,display:'grid',gridTemplateColumns:'1fr 1fr',gap:10}}>
            {[['FINTRAC','Federal compliance'],['CSA','Provincial approval'],['CAD','On-ramp focus'],['CRA','Tax guidance']].map(([k,v])=>(
              <div key={k} style={{background:'rgba(255,255,255,0.03)',borderRadius:10,padding:'10px 14px',border:'1px solid '+C.border}}>
                <div style={{fontSize:12,fontWeight:700,color:C.emerald}}>{k}</div>
                <div style={{fontSize:11,color:C.dim,marginTop:2}}>{v}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div style={{borderTop:'1px solid '+C.border,borderBottom:'1px solid '+C.border,background:'rgba(255,255,255,0.015)'}}>
        <div style={{maxWidth:1200,margin:'0 auto',padding:'0 32px',display:'grid',gridTemplateColumns:'repeat(4,1fr)'}}>
          {[['6+','FINTRAC-registered exchanges reviewed'],['100%','CAD on-ramps — no forced USD conversion'],['50%','Capital gains inclusion rate for 2025'],['$0','Minimum deposit on most platforms']].map(([n,l],i)=>(
            <div key={l} style={{padding:'28px 0',textAlign:'center',borderRight:i<3?'1px solid '+C.border:'none'}}>
              <div style={{fontSize:'2rem',fontWeight:800,color:C.emerald,letterSpacing:'-0.02em'}}>{n}</div>
              <div style={{fontSize:12,color:C.muted,marginTop:6,lineHeight:1.4,maxWidth:140,margin:'6px auto 0'}}>{l}</div>
            </div>
          ))}
        </div>
      </div>

      <div style={{maxWidth:1200,margin:'0 auto',padding:'80px 32px 0'}}>
        <div style={{display:'flex',justifyContent:'space-between',alignItems:'baseline',marginBottom:32}}>
          <div>
            <h2 style={{fontSize:'1.9rem',fontWeight:800,letterSpacing:'-0.03em',margin:'0 0 6px'}}>Best Canadian Crypto Exchanges 2026</h2>
            <p style={{fontSize:14,color:C.muted,margin:0}}>All exchanges are FINTRAC-registered and CSA-authorized. Verified April 2026.</p>
          </div>
          <a href="/exchanges" style={{color:C.emerald,fontSize:14,fontWeight:600,textDecoration:'none',whiteSpace:'nowrap',flexShrink:0}}>Full comparison →</a>
        </div>

        <div style={{background:'linear-gradient(135deg,#0f2d1f 0%,#0a1f2e 50%,#0b1220 100%)',border:'1px solid rgba(16,185,129,0.35)',borderRadius:24,padding:'40px 44px',marginBottom:20,position:'relative',overflow:'hidden'}}>
          <div style={{position:'absolute',top:0,right:0,width:400,height:400,background:'radial-gradient(circle at 80% 20%,rgba(16,185,129,0.08) 0%,transparent 60%)',pointerEvents:'none'}}/>
          <div style={{position:'absolute',top:20,right:24,background:C.emerald,color:'#fff',fontSize:11,fontWeight:800,padding:'5px 14px',borderRadius:9999,letterSpacing:'0.05em'}}>★ TOP PICK — EDITOR'S CHOICE</div>
          <div style={{display:'grid',gridTemplateColumns:'1fr 1fr auto',gap:48,alignItems:'center',position:'relative'}}>
            <div>
              <div style={{fontSize:11,color:C.emerald,fontWeight:700,letterSpacing:'0.08em',textTransform:'uppercase',marginBottom:10}}>#1 for Canadian Beginners</div>
              <div style={{fontSize:'2.2rem',fontWeight:800,letterSpacing:'-0.03em',color:C.white,marginBottom:6}}>Bitbuy</div>
              <div style={{color:'#f59e0b',fontSize:16,marginBottom:12}}>★★★★★ <span style={{color:C.muted,fontSize:13,fontWeight:400}}>4.8 / 5 · 200,000+ Canadians</span></div>
              <p style={{fontSize:14,color:C.muted,lineHeight:1.75,margin:'0 0 20px',maxWidth:380}}>Canada's most trusted regulated exchange. Free Interac e-Transfer deposits, cold storage insurance, and a UI built for first-time buyers. FINTRAC registered since 2016.</p>
              <div style={{display:'flex',gap:8,flexWrap:'wrap'}}>
                {['FINTRAC','CSA Registered','Insurance','All Provinces'].map(b=>(
                  <span key={b} style={{fontSize:11,fontWeight:600,padding:'4px 10px',borderRadius:6,background:C.emeraldDim,color:C.emerald,border:'1px solid '+C.emeraldBorder}}>{b}</span>
                ))}
              </div>
            </div>
            <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:10}}>
              {[['Trading Fee','0.20%'],['Maker Fee','0.10%'],['Min. Deposit','None'],['Coins','40+'],['Interac','Free'],['Provinces','All']].map(([k,v])=>(
                <div key={k} style={{background:'rgba(255,255,255,0.04)',borderRadius:10,padding:'12px 14px',border:'1px solid rgba(255,255,255,0.06)'}}>
                  <div style={{fontSize:11,color:C.dim,marginBottom:3}}>{k}</div>
                  <div style={{fontSize:15,fontWeight:700,color:C.white}}>{v}</div>
                </div>
              ))}
            </div>
            <div style={{display:'flex',flexDirection:'column',gap:12,minWidth:190}}>
              <a href="#" style={{background:C.emerald,color:'#fff',borderRadius:12,padding:'16px 24px',fontWeight:700,fontSize:15,textAlign:'center',textDecoration:'none',display:'block'}}
                onMouseEnter={e=>(e.currentTarget.style.opacity='0.88')} onMouseLeave={e=>(e.currentTarget.style.opacity='1')}>Sign up with Bitbuy →</a>
              <div style={{fontSize:11,color:C.dim,textAlign:'center',lineHeight:1.5}}>Affiliate link — we may earn a commission at no cost to you</div>
              <div style={{borderTop:'1px solid rgba(255,255,255,0.08)',paddingTop:12}}>
                {['Canadian-owned and operated','Free CAD deposits via Interac','Insured cold storage custody','Beginner-friendly dashboard'].map(p=>(
                  <div key={p} style={{fontSize:12,color:C.emerald,marginBottom:4}}>✓ {p}</div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:16,paddingBottom:80}}>
          {others.map(e=>(
            <div key={e.name}
              style={{background:C.surface,border:'1px solid '+C.border,borderRadius:18,padding:'28px 30px',transition:'border-color 0.2s, transform 0.15s, box-shadow 0.15s'}}
              onMouseEnter={e2=>{e2.currentTarget.style.borderColor='rgba(16,185,129,0.3)';e2.currentTarget.style.transform='translateY(-2px)';e2.currentTarget.style.boxShadow='0 12px 40px rgba(0,0,0,0.3)'}}
              onMouseLeave={e2=>{e2.currentTarget.style.borderColor=C.border;e2.currentTarget.style.transform='none';e2.currentTarget.style.boxShadow='none'}}
            >
              <div style={{display:'flex',justifyContent:'space-between',alignItems:'flex-start',marginBottom:16}}>
                <div>
                  <div style={{fontWeight:800,fontSize:19,letterSpacing:'-0.02em',marginBottom:4}}>{e.name}</div>
                  <div style={{color:'#f59e0b',fontSize:13}}>{e.stars} <span style={{color:C.dim,fontSize:12}}>{e.rating}/5</span></div>
                </div>
                <span style={{fontSize:10,fontWeight:700,padding:'3px 9px',borderRadius:5,background:C.emeraldDim,color:C.emerald,border:'1px solid '+C.emeraldBorder,whiteSpace:'nowrap'}}>FINTRAC + CSA</span>
              </div>
              <div style={{display:'grid',gridTemplateColumns:'1fr 1fr 1fr',gap:8,marginBottom:16}}>
                {[['Fee',e.fee],['Coins',e.coins],['Best for',e.bestFor]].map(([k,v])=>(
                  <div key={k} style={{background:'rgba(255,255,255,0.03)',borderRadius:8,padding:'10px 12px',border:'1px solid '+C.border}}>
                    <div style={{fontSize:10,color:C.dim,marginBottom:2,fontWeight:600,textTransform:'uppercase',letterSpacing:'0.04em'}}>{k}</div>
                    <div style={{fontSize:12,fontWeight:700,color:C.white}}>{v}</div>
                  </div>
                ))}
              </div>
              <div style={{marginBottom:16}}>
                {e.pros.map(p=><div key={p} style={{fontSize:12,color:C.emerald,marginBottom:3}}>✓ {p}</div>)}
                {e.cons.map(c=><div key={c} style={{fontSize:12,color:'#f87171',marginBottom:3}}>✗ {c}</div>)}
              </div>
              {e.province&&<div style={{fontSize:11,color:'#f59e0b',background:'rgba(245,158,11,0.08)',border:'1px solid rgba(245,158,11,0.2)',borderRadius:6,padding:'6px 10px',marginBottom:14}}>⚠️ Available in {e.province}</div>}
              <a href={e.url} target="_blank" rel="noopener noreferrer"
                style={{display:'block',background:'transparent',border:'1.5px solid rgba(16,185,129,0.4)',color:C.emerald,borderRadius:10,padding:'11px 0',fontWeight:700,fontSize:13,textAlign:'center',textDecoration:'none',transition:'background 0.15s,color 0.15s'}}
                onMouseEnter={e2=>{e2.currentTarget.style.background=C.emerald;e2.currentTarget.style.color='#fff'}}
                onMouseLeave={e2=>{e2.currentTarget.style.background='transparent';e2.currentTarget.style.color=C.emerald}}
              >Sign up with referral →</a>
            </div>
          ))}
        </div>
      </div>

      <div style={{borderTop:'1px solid '+C.border,background:'rgba(255,255,255,0.01)'}}>
        <div style={{maxWidth:1200,margin:'0 auto',padding:'72px 32px'}}>
          <h2 style={{fontSize:'1.7rem',fontWeight:800,letterSpacing:'-0.03em',marginBottom:8,textAlign:'center'}}>Why Canadians use CryptoNorth</h2>
          <p style={{fontSize:15,color:C.muted,textAlign:'center',margin:'0 0 48px'}}>We research what matters to Canadian investors — CAD fees, FINTRAC status, and CRA compliance.</p>
          <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:20}}>
            {[
              {icon:'🏛️',t:'FINTRAC and CSA Only',d:'We only list exchanges registered with FINTRAC and approved by provincial securities regulators. No offshore platforms, no unregistered operators.'},
              {icon:'📋',t:'CRA Tax Guidance Built In',d:'Plain-English guidance on the 50% capital gains inclusion rate, ACB method, T1 filing, and CARF reporting — all current as of April 2026.'},
              {icon:'🍁',t:'Canadian Through and Through',d:'CAD prices, Interac e-Transfer focus, provincial availability notes, and honest takes on which exchanges actually work well in Canada.'},
            ].map(f=>(
              <div key={f.t} style={{background:C.surface,border:'1px solid '+C.border,borderRadius:20,padding:'32px 28px',transition:'border-color 0.2s,transform 0.15s'}}
                onMouseEnter={e=>{e.currentTarget.style.borderColor='rgba(16,185,129,0.25)';e.currentTarget.style.transform='translateY(-2px)'}}
                onMouseLeave={e=>{e.currentTarget.style.borderColor=C.border;e.currentTarget.style.transform='none'}}>
                <div style={{width:52,height:52,borderRadius:14,background:C.emeraldDim,border:'1px solid '+C.emeraldBorder,display:'flex',alignItems:'center',justifyContent:'center',fontSize:24,marginBottom:20}}>{f.icon}</div>
                <div style={{fontWeight:700,fontSize:16,letterSpacing:'-0.01em',marginBottom:10}}>{f.t}</div>
                <p style={{fontSize:13,color:C.muted,lineHeight:1.75,margin:0}}>{f.d}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div style={{background:'linear-gradient(135deg,#0f2d1f 0%,#0b1220 100%)',borderTop:'1px solid rgba(16,185,129,0.2)',padding:'80px 32px',textAlign:'center'}}>
        <h2 style={{fontSize:'2rem',fontWeight:800,letterSpacing:'-0.03em',marginBottom:12}}>Ready to buy crypto in Canada?</h2>
        <p style={{color:C.muted,fontSize:16,maxWidth:440,margin:'0 auto 36px',lineHeight:1.7}}>Compare regulated Canadian exchanges side by side — honest fees, real pros and cons, no U.S. bias.</p>
        <div style={{display:'flex',gap:12,justifyContent:'center'}}>
          <a href="/exchanges" style={{background:C.emerald,color:'#fff',padding:'15px 32px',borderRadius:12,fontWeight:700,fontSize:15,display:'inline-block',textDecoration:'none'}}
            onMouseEnter={e=>(e.currentTarget.style.opacity='0.88')} onMouseLeave={e=>(e.currentTarget.style.opacity='1')}>Compare Canadian Exchanges →</a>
          <a href="/beginners-guide" style={{background:'transparent',color:C.white,padding:'15px 28px',borderRadius:12,fontWeight:600,fontSize:15,border:'1.5px solid rgba(255,255,255,0.15)',display:'inline-block',textDecoration:'none'}}>Beginner's Guide</a>
        </div>
      </div>

      <footer style={{background:'#070d1a',borderTop:'1px solid '+C.border,padding:'48px 32px 40px'}}>
        <div style={{maxWidth:1200,margin:'0 auto'}}>
          <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',flexWrap:'wrap',gap:24,marginBottom:32}}>
            <a href="/" style={{display:'flex',alignItems:'center',gap:10,fontWeight:800,fontSize:17,letterSpacing:'-0.03em',color:C.white,textDecoration:'none'}}><Logo/>Crypto<span style={{color:C.emerald}}>North</span></a>
            <div style={{display:'flex',gap:28,flexWrap:'wrap'}}>
              {[['/','Home'],['/exchanges','Exchanges'],['/tax-guide','Tax Guide'],['/wallets','Wallets'],['/beginners-guide',"Beginner's Guide"]].map(([h,l])=>(
                <a key={l} href={h} style={{fontSize:13,color:C.muted,textDecoration:'none',fontWeight:500}}
                  onMouseEnter={e=>(e.currentTarget.style.color=C.white)} onMouseLeave={e=>(e.currentTarget.style.color=C.muted)}>{l}</a>
              ))}
            </div>
          </div>
          <div style={{borderTop:'1px solid '+C.border,paddingTop:24,display:'flex',justifyContent:'space-between',alignItems:'center',flexWrap:'wrap',gap:12}}>
            <div style={{fontSize:12,color:C.dim}}>© 2026 CryptoNorth · Canada's independent crypto resource</div>
            <div style={{fontSize:12,color:C.dim,maxWidth:480,textAlign:'right',lineHeight:1.5}}>Not financial or legal advice. Some links are affiliate links. Regulatory status verified April 2026.</div>
          </div>
        </div>
      </footer>
    </div>
  )
}