'use client'
import { useState } from 'react'

const C = {bg:'#0b1220',surface:'#172033',surface2:'#1e2a3f',border:'rgba(255,255,255,0.07)',emerald:'#10b981',emeraldDim:'rgba(16,185,129,0.12)',emeraldBorder:'rgba(16,185,129,0.28)',white:'#f0f6ff',muted:'#8899b4',dim:'#4e6280',font:"'Inter', system-ui, sans-serif"}

const faqs = [
  {q:'Is crypto legal in Canada?',a:'Yes. Cryptocurrency is legal in Canada. Exchanges must register with FINTRAC. The CRA taxes crypto gains as capital gains or business income.'},
  {q:'How much money do I need to start?',a:'Most Canadian exchanges have no minimum deposit. You can start with as little as $10 CAD. Bitcoin is divisible to 8 decimal places so you do not need to buy a whole coin.'},
  {q:'Is crypto safe?',a:'Crypto on regulated Canadian exchanges has meaningful protections - but it is NOT insured by CDIC like a bank account. QuadrigaCX collapsed in 2019 and lost $169M CAD of Canadian funds. Use regulated exchanges and consider a hardware wallet for large holdings.'},
  {q:'Do I pay tax on crypto in Canada?',a:'Yes. Buying and holding is not taxable, but selling, trading, or spending crypto triggers capital gains (50% inclusion rate for casual investors). Report all disposals on your T1. See our Tax Guide for details.'},
  {q:'What is Bitcoin?',a:'Bitcoin (BTC) is the first and largest cryptocurrency. Created in 2009, it is a decentralized digital currency with a fixed supply of 21 million coins. Many Canadians hold Bitcoin as a long-term store of value similar to digital gold.'},
  {q:'What is Ethereum?',a:'Ethereum (ETH) is the second-largest cryptocurrency and a programmable blockchain. Powers DeFi, NFTs, and thousands of applications. Moved to proof-of-stake in 2022, significantly reducing energy use.'},
  {q:'What is a blockchain?',a:'A blockchain is a public ledger of transactions maintained by thousands of computers simultaneously. Every transaction is recorded permanently and cannot be altered.'},
  {q:"Should I buy Bitcoin or Ethereum first?",a:'For most Canadian beginners, Bitcoin is the most straightforward starting point. Both are available on all major Canadian exchanges. Never invest more than you can afford to lose.'},
]

export default function BeginnersGuidePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const steps = [
    {n:'1',t:'Choose a Regulated Canadian Exchange',b:'Start with a FINTRAC and CSA-registered Canadian exchange. We recommend Bitbuy or Newton for beginners - both are Canadian-owned, easy to use, and support free Interac e-Transfer deposits.',link:'/exchanges',lt:'Compare Canadian Exchanges'},
    {n:'2',t:'Create and Verify Your Account',b:'Sign up with your email. All regulated Canadian exchanges require identity verification (KYC) under FINTRAC rules - you will need government-issued ID and a selfie.',link:null,lt:null},
    {n:'3',t:'Deposit Canadian Dollars',b:'Connect your Canadian bank via Interac e-Transfer (instant, free on most Canadian exchanges). Start with an amount you are comfortable potentially losing.',link:null,lt:null},
    {n:'4',t:'Buy Your First Crypto',b:'Most beginners start with Bitcoin (BTC) or Ethereum (ETH). You do not need to buy a whole coin - you can buy $50 worth and the exchange calculates your portion automatically.',link:null,lt:null},
    {n:'5',t:'Understand Your Tax Obligations',b:'Buying and holding is not taxable. When you sell, trade, or spend crypto you may owe tax to the CRA. Keep records of every transaction.',link:'/tax-guide',lt:'Read the Canada Crypto Tax Guide'},
    {n:'6',t:'Consider a Hardware Wallet',b:'Once you hold meaningful amounts, consider moving long-term holdings to a hardware wallet. A Ledger Nano X (~CAD $200) is the most popular choice for Canadians.',link:'/wallets',lt:'Learn About Crypto Wallets'},
  ]
  return (
    <div style={{fontFamily:C.font,background:C.bg,color:C.white,minHeight:'100vh'}}>
      <nav style={{position:'sticky',top:0,zIndex:100,background:'rgba(11,18,32,0.95)',backdropFilter:'blur(16px)',borderBottom:'1px solid '+C.border}}>
        <div style={{maxWidth:1200,margin:'0 auto',padding:'0 32px',display:'flex',alignItems:'center',justifyContent:'space-between',height:68,gap:24}}>
          <a href="/" style={{display:'flex',alignItems:'center',gap:10,fontWeight:700,fontSize:18,color:C.white,textDecoration:'none',flexShrink:0}}>
            <div style={{width:36,height:36,background:C.emerald,borderRadius:8,display:'flex',alignItems:'center',justifyContent:'center',fontSize:18,filter:'grayscale(1) brightness(10)'}}>🍁</div>
            Crypto<span style={{color:C.emerald}}>North</span>
          </a>
          <div style={{display:'flex'}}>{[['/','Home'],['/exchanges','Exchanges'],['/tax-guide','Tax Guide'],['/wallets','Wallets'],['/beginners-guide',"Beginner's Guide"]].map(([h,l])=><a key={l} href={h} style={{color:h==='/beginners-guide'?C.white:C.muted,fontSize:14,fontWeight:h==='/beginners-guide'?600:500,padding:'0 14px',height:68,display:'flex',alignItems:'center',whiteSpace:'nowrap',textDecoration:'none'}}>{l}</a>)}</div>
          <a href="/exchanges" style={{background:C.emerald,color:'#fff',padding:'0 22px',height:40,borderRadius:9999,fontWeight:600,fontSize:14,display:'flex',alignItems:'center',whiteSpace:'nowrap',flexShrink:0,textDecoration:'none'}}>Compare Exchanges</a>
        </div>
      </nav>
      <div style={{background:'linear-gradient(180deg,#0f1d35 0%,#0b1220 100%)',borderBottom:'1px solid '+C.border,padding:'64px 32px 56px'}}>
        <div style={{maxWidth:900,margin:'0 auto'}}>
          <div style={{display:'inline-flex',alignItems:'center',gap:8,background:C.emeraldDim,border:'1px solid '+C.emeraldBorder,color:C.emerald,fontSize:12,fontWeight:600,borderRadius:9999,padding:'5px 14px',marginBottom:20,letterSpacing:'0.05em',textTransform:'uppercase'}}>Written for Canadians - April 2026</div>
          <h1 style={{fontSize:'clamp(2rem,4vw,3rem)',fontWeight:700,letterSpacing:'-0.025em',margin:'0 0 16px',color:C.white}}>Beginner's Guide to Crypto in Canada</h1>
          <p style={{fontSize:16,color:C.muted,lineHeight:1.7,margin:0}}>Everything a Canadian needs to get started safely - from how crypto works, to choosing a regulated exchange, buying your first coin, and understanding your CRA tax obligations. No jargon. No hype.</p>
        </div>
      </div>
      <div style={{maxWidth:1200,margin:'0 auto',padding:'56px 32px'}}>
        <section style={{marginBottom:56}}>
          <h2 style={{fontSize:'1.5rem',fontWeight:700,color:C.white,marginBottom:24,paddingBottom:12,borderBottom:'1px solid '+C.border}}>How to Buy Crypto in Canada: Step by Step</h2>
          <div style={{display:'flex',flexDirection:'column',gap:16}}>
            {steps.map(s=>(
              <div key={s.n} style={{display:'flex',gap:20,alignItems:'flex-start'}}>
                <div style={{width:40,height:40,borderRadius:'50%',background:C.emerald,color:'#fff',display:'flex',alignItems:'center',justifyContent:'center',fontWeight:700,fontSize:16,flexShrink:0}}>{s.n}</div>
                <div style={{background:C.surface,border:'1px solid '+C.border,borderRadius:14,padding:'18px 22px',flex:1}}>
                  <div style={{fontWeight:600,fontSize:15,color:C.white,marginBottom:6}}>{s.t}</div>
                  <p style={{fontSize:13,color:C.muted,lineHeight:1.7,margin:'0 0 8px'}}>{s.b}</p>
                  {s.link&&<a href={s.link} style={{fontSize:13,color:C.emerald,fontWeight:600,textDecoration:'none'}}>{s.lt} →</a>}
                </div>
              </div>
            ))}
          </div>
        </section>
        <section style={{marginBottom:56}}>
          <h2 style={{fontSize:'1.5rem',fontWeight:700,color:C.white,marginBottom:20,paddingBottom:12,borderBottom:'1px solid '+C.border}}>What Makes Canada Different</h2>
          <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:16}}>
            {[
              {icon:'🏛️',t:'FINTRAC Registration Required',b:'All exchanges serving Canadians must register with FINTRAC as Money Services Businesses. Required since June 2020. Requires KYC identity verification and AML compliance.'},
              {icon:'📊',t:'CRA Tax Obligations',b:'The CRA taxes crypto. 50% capital gains inclusion rate for casual investors - the 66.67% hike was cancelled March 21 2025. Report all disposals on your T1 by April 30 2026.'},
              {icon:'🍁',t:'Interac e-Transfer Deposits',b:'Canadian exchanges accept Interac e-Transfer - the fastest and cheapest way to fund your account in CAD. Most offer free deposits. A major advantage for Canadians.'},
              {icon:'⚠️',t:'No CDIC Protection',b:'Crypto holdings on exchanges are NOT covered by CDIC. QuadrigaCX collapsed in 2019 losing $169M CAD. Only use regulated exchanges and consider a hardware wallet for large holdings.'},
              {icon:'🗺️',t:'Provincial Regulation Varies',b:'Canada has no single national crypto license. Each province independently approves exchanges. Kraken is only approved in AB, BC, MB and SK - NOT Ontario or Quebec.'},
              {icon:'📅',t:'CARF Starting 2026',b:'The Crypto-Asset Reporting Framework took effect January 1 2026. Canadian exchanges must now report user transaction data to the CRA. First filings expected in 2027.'},
            ].map(i=>(
              <div key={i.t} style={{background:C.surface,border:'1px solid '+C.border,borderRadius:14,padding:22}}>
                <div style={{fontSize:22,marginBottom:10}}>{i.icon}</div>
                <div style={{fontWeight:600,fontSize:14,color:C.white,marginBottom:6}}>{i.t}</div>
                <p style={{fontSize:13,color:C.muted,lineHeight:1.7,margin:0}}>{i.b}</p>
              </div>
            ))}
          </div>
        </section>
        <section style={{marginBottom:56}}>
          <h2 style={{fontSize:'1.5rem',fontWeight:700,color:C.white,marginBottom:20,paddingBottom:12,borderBottom:'1px solid '+C.border}}>Frequently Asked Questions</h2>
          <div style={{display:'flex',flexDirection:'column',gap:8}}>
            {faqs.map((f,i)=>(
              <div key={i} style={{background:C.surface,border:'1px solid '+(openFaq===i?C.emeraldBorder:C.border),borderRadius:12,overflow:'hidden'}}>
                <button onClick={()=>setOpenFaq(openFaq===i?null:i)} style={{width:'100%',display:'flex',justifyContent:'space-between',alignItems:'center',padding:'16px 20px',background:'transparent',border:'none',cursor:'pointer',textAlign:'left',fontFamily:C.font}}>
                  <span style={{fontSize:14,fontWeight:600,color:C.white}}>{f.q}</span>
                  <span style={{color:C.emerald,fontSize:18,fontWeight:300,flexShrink:0,marginLeft:16}}>{openFaq===i?'-':'+'}</span>
                </button>
                {openFaq===i&&<div style={{padding:'0 20px 16px'}}><p style={{fontSize:13,color:C.muted,lineHeight:1.75,margin:0}}>{f.a}</p></div>}
              </div>
            ))}
          </div>
        </section>
        <div style={{background:'rgba(239,68,68,0.06)',border:'1px solid rgba(239,68,68,0.2)',borderRadius:12,padding:'16px 20px'}}>
          <div style={{fontWeight:600,color:'#ef4444',marginBottom:6,fontSize:14}}>Important Disclaimer</div>
          <p style={{fontSize:13,color:C.muted,lineHeight:1.7,margin:0}}>This guide is for informational purposes only. Cryptocurrency is highly volatile - you can lose your entire investment. Never invest more than you can afford to lose. Regulatory information accurate as of April 2026 and may change.</p>
        </div>
      </div>
      <footer style={{background:'#070e1a',borderTop:'1px solid '+C.border,padding:'44px 32px'}}>
        <div style={{maxWidth:1200,margin:'0 auto',display:'flex',justifyContent:'space-between',alignItems:'center',flexWrap:'wrap',gap:20}}>
          <div><div style={{fontWeight:700,fontSize:16}}>🍁 CryptoNorth</div><div style={{fontSize:12,color:C.dim,marginTop:3}}>Canada's independent crypto resource</div></div>
          <div style={{display:'flex',gap:24,flexWrap:'wrap'}}>{[['/','Home'],['/exchanges','Exchanges'],['/tax-guide','Tax Guide'],['/wallets','Wallets'],['/beginners-guide',"Beginner's Guide"]].map(([h,l])=><a key={l} href={h} style={{fontSize:13,color:C.dim,textDecoration:'none'}}>{l}</a>)}</div>
          <div style={{fontSize:11,color:'#2a3a52',width:'100%',marginTop:8}}>© 2026 CryptoNorth. Not financial or legal advice. Information current as of April 2026.</div>
        </div>
      </footer>
    </div>
  )
}