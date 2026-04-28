'use client'
import { useState, useEffect } from 'react'

const C = {
  bg: '#0b1220', surface: '#172033', surface2: '#1e2a3f',
  border: 'rgba(255,255,255,0.07)', emerald: '#10b981',
  emeraldDim: 'rgba(16,185,129,0.12)', emeraldBorder: 'rgba(16,185,129,0.28)',
  white: '#f0f6ff', muted: '#8899b4', dim: '#4e6280',
  font: "'Inter', system-ui, sans-serif",
}

const exchanges = [
  {name:'Bitbuy',featured:true,rating:'★★★★★',score:'4.8',fee:'0.20%',coins:'40+',bestFor:'Canadians',pros:['FINTRAC registered','Free CAD deposits','Beginner-friendly'],cons:['Smaller coin selection'],url:'#'},
  {name:'Newton',featured:false,rating:'★★★★☆',score:'4.4',fee:'0.25–0.6%',coins:'70+',bestFor:'Intermediate',pros:['70+ coins','Free Interac e-Transfer'],cons:['No staking rewards'],url:'#'},
  {name:'NDAX',featured:false,rating:'★★★★☆',score:'4.1',fee:'0.20% flat',coins:'50+',bestFor:'Low fees',pros:['Low flat fee','FINTRAC registered'],cons:['Less beginner-friendly'],url:'#'},
  {name:'Shakepay',featured:false,rating:'★★★★☆',score:'4.3',fee:'0% (spread)',coins:'BTC, ETH',bestFor:'Beginners',pros:['Zero fees','Shakesats rewards','Instant Interac'],cons:['BTC & ETH only'],url:'#'},
  {name:'Wealthsimple',featured:false,rating:'★★★★☆',score:'4.2',fee:'1.5–2%',coins:'50+',bestFor:'Existing WS users',pros:['Trusted brand','FINTRAC registered','Easy UI'],cons:['Higher fees'],url:'#'},
  {name:'Kraken',featured:false,rating:'★★★★★',score:'4.7',fee:'0.16–0.26%',coins:'400+',bestFor:'Advanced traders',pros:['400+ coins','Low fees','Advanced tools'],cons:['AB, BC, MB, SK only'],url:'#'},
]

function fmt(n: number) {
  return '$' + n.toLocaleString('en-CA', {minimumFractionDigits: 2, maximumFractionDigits: 2})
}

export default function Home() {
  const [prices, setPrices] = useState<any>({})

  useEffect(() => {
    function load() {
      fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum&vs_currencies=cad&include_24hr_change=true')
        .then(r => r.json()).then(setPrices).catch(() => {})
    }
    load()
    const t = setInterval(load, 30000)
    return () => clearInterval(t)
  }, [])

  const btc = prices.bitcoin
  const eth = prices.ethereum

  return (
    <div style={{fontFamily: C.font, position: 'relative', zIndex: 1}}>

      <nav style={{position:'sticky',top:0,zIndex:100,background:'rgba(11,18,32,0.95)',backdropFilter:'blur(16px)',borderBottom:'1px solid '+C.border}}>
        <div style={{maxWidth:1200,margin:'0 auto',padding:'0 32px',display:'flex',alignItems:'center',justifyContent:'space-between',height:68,gap:24}}>
          <a href="/" style={{display:'flex',alignItems:'center',gap:10,fontWeight:700,fontSize:18,letterSpacing:'-0.02em',flexShrink:0,color:C.white,textDecoration:'none'}}>
            <div style={{width:36,height:36,background:C.emerald,borderRadius:8,display:'flex',alignItems:'center',justifyContent:'center',fontSize:18,filter:'grayscale(1) brightness(10)'}}>🍁</div>
            Crypto<span style={{color:C.emerald}}>North</span>
          </a>
          <div style={{display:'flex'}}>
            {[['/','Home'],['/exchanges','Exchanges'],['/tax-guide','Tax Guide'],['/wallets','Wallets'],['/beginners-guide',"Beginner's Guide"]].map(([href,label]) => (
              <a key={label} href={href} style={{color:C.muted,fontSize:14,fontWeight:500,padding:'0 14px',height:68,display:'flex',alignItems:'center',whiteSpace:'nowrap',textDecoration:'none'}}>{label}</a>
            ))}
          </div>
          <a href="/exchanges" style={{background:C.emerald,color:'#fff',padding:'0 22px',height:40,borderRadius:9999,fontWeight:600,fontSize:14,display:'flex',alignItems:'center',whiteSpace:'nowrap',flexShrink:0,textDecoration:'none'}}>Compare Canadian Exchanges</a>
        </div>
      </nav>

      <div style={{maxWidth:1200,margin:'0 auto',padding:'96px 32px 80px',display:'grid',gridTemplateColumns:'1fr 1fr',gap:64,alignItems:'center'}}>
        <div>
          <div style={{display:'inline-flex',alignItems:'center',gap:8,background:C.emeraldDim,border:'1px solid '+C.emeraldBorder,color:C.emerald,fontSize:12,fontWeight:600,borderRadius:9999,padding:'6px 16px',marginBottom:28,letterSpacing:'0.05em',textTransform:'uppercase'}}>
            🍁 Built for Canadians · CRA & CSA Compliant
          </div>
          <h1 style={{fontSize:'clamp(2.2rem,4vw,3.4rem)',fontWeight:700,lineHeight:1.1,letterSpacing:'-0.025em',color:C.white,margin:'0 0 20px'}}>
            Crypto, simplified<br/>for Canadians.
          </h1>
          <p style={{fontSize:17,color:C.muted,lineHeight:1.75,maxWidth:430,margin:'0 0 36px'}}>
            Unbiased reviews of Canadian exchanges, up-to-date CRA tax guides, and the best local on-ramps. No U.S. bias. No fluff.
          </p>
          <div style={{display:'flex',gap:12,flexWrap:'wrap'}}>
            <a href="/exchanges" style={{background:C.white,color:'#0b1220',padding:'13px 26px',borderRadius:9999,fontWeight:700,fontSize:14,display:'inline-block',textDecoration:'none'}}>Find the Best Exchange →</a>
            <a href="/tax-guide" style={{background:'transparent',color:C.white,padding:'13px 26px',borderRadius:9999,fontWeight:600,fontSize:14,border:'1.5px solid rgba(255,255,255,0.2)',display:'inline-block',textDecoration:'none'}}>2026 Tax Guide</a>
          </div>
        </div>
        <div style={{background:C.surface,border:'1px solid '+C.border,borderRadius:20,padding:28,boxShadow:'0 32px 80px rgba(0,0,0,0.5)'}}>
          <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:20}}>
            <span style={{fontSize:11,color:C.dim,fontWeight:600,letterSpacing:'0.08em',textTransform:'uppercase'}}>Market Snapshot · CAD</span>
            <span style={{display:'flex',alignItems:'center',gap:5,fontSize:12,color:C.emerald,fontWeight:600}}>
              <span style={{width:7,height:7,background:C.emerald,borderRadius:'50%',display:'inline-block'}}/>Live
            </span>
          </div>
          {[{icon:'₿',bg:'rgba(247,147,26,0.15)',color:'#f7931a',name:'Bitcoin',sym:'BTC',data:btc},{icon:'Ξ',bg:'rgba(98,126,234,0.15)',color:'#627eea',name:'Ethereum',sym:'ETH',data:eth}].map((coin,i) => (
            <div key={coin.sym} style={{display:'flex',justifyContent:'space-between',alignItems:'center',padding:'16px 0',borderBottom:i===0?'1px solid '+C.border:'none'}}>
              <div style={{display:'flex',alignItems:'center',gap:13}}>
                <div style={{width:42,height:42,borderRadius:'50%',background:coin.bg,color:coin.color,display:'flex',alignItems:'center',justifyContent:'center',fontSize:19,fontWeight:700}}>{coin.icon}</div>
                <div><div style={{fontWeight:600,fontSize:15}}>{coin.name}</div><div style={{fontSize:12,color:C.dim}}>{coin.sym}</div></div>
              </div>
              <div style={{textAlign:'right'}}>
                <div style={{fontSize:20,fontWeight:700,fontFamily:'monospace'}}>{coin.data?.cad ? fmt(coin.data.cad) : '—'}</div>
                <div style={{fontSize:13,fontWeight:600,color:(coin.data?.cad_24h_change??0)>=0?C.emerald:'#ef4444'}}>
                  {coin.data?.cad_24h_change!=null?((coin.data.cad_24h_change>=0?'▲ +':'▼ ')+Math.abs(coin.data.cad_24h_change).toFixed(2)+'%'):'—'}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div style={{maxWidth:1200,margin:'0 auto',padding:'0 32px 80px',display:'grid',gridTemplateColumns:'repeat(4,1fr)',gap:14}}>
        {[['6+','Trusted Exchanges'],['500+','Supported Coins'],['100%','CAD On-Ramps'],['FINTRAC','& CSA Registered']].map(([n,l]) => (
          <div key={l} style={{background:C.surface,border:'1px solid '+C.border,borderRadius:16,padding:'22px 20px',textAlign:'center'}}>
            <div style={{fontSize:'2rem',fontWeight:800,color:C.emerald,letterSpacing:'-0.02em'}}>{n}</div>
            <div style={{fontSize:13,color:C.muted,marginTop:4}}>{l}</div>
          </div>
        ))}
      </div>

      <hr style={{border:'none',borderTop:'1px solid '+C.border}}/>

      <div style={{maxWidth:1200,margin:'0 auto',padding:'72px 32px'}} id="exchanges">
        <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:32}}>
          <h2 style={{fontSize:'1.6rem',fontWeight:700,letterSpacing:'-0.02em',margin:0}}>Featured Canadian Exchanges</h2>
          <a href="/exchanges" style={{color:C.emerald,fontSize:14,fontWeight:600,textDecoration:'none'}}>Full comparison →</a>
        </div>
        <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:16}}>
          {exchanges.map(e => (
            <div key={e.name} style={{background:e.featured?C.surface2:C.surface,border:'1px solid '+(e.featured?C.emeraldBorder:C.border),borderRadius:18,padding:26,display:'flex',flexDirection:'column',gap:14}}>
              <div>
                <div style={{fontWeight:700,fontSize:17}}>
                  {e.name}{e.featured&&<span style={{fontSize:10,color:C.emerald,background:C.emeraldDim,padding:'2px 8px',borderRadius:4,marginLeft:8,fontWeight:600}}>★ TOP PICK</span>}
                </div>
                <span style={{display:'inline-block',fontSize:10,fontWeight:700,padding:'2px 8px',borderRadius:4,marginTop:6,background:C.emeraldDim,color:C.emerald,border:'1px solid '+C.emeraldBorder}}>FINTRAC</span>
              </div>
              <div><span style={{color:'#f59e0b',fontSize:13}}>{e.rating}</span><span style={{color:C.dim,fontSize:12,marginLeft:6}}>{e.score} / 5</span></div>
              <div style={{display:'flex',flexDirection:'column',gap:5}}>
                {[['Fee',e.fee],['Coins',e.coins],['Best for',e.bestFor]].map(([k,v]) => (
                  <div key={k} style={{fontSize:13,color:C.muted}}>{k}: <strong style={{color:C.white,fontWeight:600}}>{v}</strong></div>
                ))}
              </div>
              <div>
                {e.pros.map(p=><div key={p} style={{fontSize:12,color:C.emerald}}>✓ {p}</div>)}
                {e.cons.map(c=><div key={c} style={{fontSize:12,color:'#ef4444'}}>✗ {c}</div>)}
              </div>
              <a href={e.url} target="_blank" rel="noopener noreferrer" style={{background:C.emerald,color:'#fff',borderRadius:10,padding:'12px 0',fontWeight:600,fontSize:13,textAlign:'center',marginTop:'auto',display:'block',textDecoration:'none'}}>Sign up with referral</a>
              <div style={{fontSize:10,color:C.dim,textAlign:'center'}}>Affiliate link — we may earn a commission</div>
            </div>
          ))}
        </div>
      </div>

      <hr style={{border:'none',borderTop:'1px solid '+C.border}}/>

      <div style={{maxWidth:1200,margin:'0 auto',padding:'72px 32px'}}>
        <h2 style={{fontSize:'1.6rem',fontWeight:700,letterSpacing:'-0.02em',marginBottom:32}}>Why choose CryptoNorth?</h2>
        <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:16}}>
          {[{icon:'📊',title:'Live CAD Prices',desc:'Real-time prices for 500+ cryptocurrencies in Canadian dollars, updated every 30 seconds.'},{icon:'📋',title:'CRA Tax Ready',desc:'Plain-English guidance on reporting crypto on your T1. Capital gains vs business income explained.'},{icon:'🔒',title:'Secure Canadian On-Ramps',desc:'Only FINTRAC-registered exchanges. Your money stays in Canada with real investor protections.'}].map(f=>(
            <div key={f.title} style={{background:C.surface,border:'1px solid '+C.border,borderRadius:18,padding:28}}>
              <div style={{width:46,height:46,borderRadius:12,background:C.emeraldDim,border:'1px solid '+C.emeraldBorder,display:'flex',alignItems:'center',justifyContent:'center',fontSize:21,marginBottom:16}}>{f.icon}</div>
              <div style={{fontWeight:700,fontSize:15.5,marginBottom:8}}>{f.title}</div>
              <p style={{fontSize:13,color:C.muted,lineHeight:1.7,margin:0}}>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div style={{background:C.surface,borderTop:'1px solid '+C.border,borderBottom:'1px solid '+C.border,padding:'80px 32px',textAlign:'center'}}>
        <h2 style={{fontSize:'1.9rem',fontWeight:700,letterSpacing:'-0.02em',marginBottom:14}}>Ready to find the right exchange?</h2>
        <p style={{color:C.muted,fontSize:16,maxWidth:440,margin:'0 auto 32px'}}>Compare Canadian crypto exchanges side by side — fees, coins, security, and FINTRAC status.</p>
        <a href="/exchanges" style={{background:C.emerald,color:'#fff',padding:'15px 36px',borderRadius:9999,fontWeight:700,fontSize:15,display:'inline-block',textDecoration:'none'}}>Compare Canadian Exchanges →</a>
      </div>

      <footer style={{background:'#070e1a',borderTop:'1px solid '+C.border,padding:'44px 32px'}}>
        <div style={{maxWidth:1200,margin:'0 auto',display:'flex',justifyContent:'space-between',alignItems:'center',flexWrap:'wrap',gap:20}}>
          <div>
            <div style={{fontWeight:700,fontSize:16}}>🍁 CryptoNorth</div>
            <div style={{fontSize:12,color:C.dim,marginTop:3}}>Canada's independent crypto resource</div>
          </div>
          <div style={{display:'flex',gap:24,flexWrap:'wrap'}}>
            {[['/','Home'],['/exchanges','Exchanges'],['/tax-guide','Tax Guide'],['/wallets','Wallets'],['/beginners-guide',"Beginner's Guide"]].map(([href,label])=>(
              <a key={label} href={href} style={{fontSize:13,color:C.dim,textDecoration:'none'}}>{label}</a>
            ))}
          </div>
          <div style={{fontSize:11,color:'#2a3a52',width:'100%',marginTop:8}}>
            © 2026 CryptoNorth. Not financial advice. Some links are affiliate links — we may earn a commission at no extra cost to you.
          </div>
        </div>
      </footer>
    </div>
  )
}