'use client'

const C = {bg:'#0b1220',surface:'#172033',surface2:'#1e2a3f',border:'rgba(255,255,255,0.07)',emerald:'#10b981',emeraldDim:'rgba(16,185,129,0.12)',emeraldBorder:'rgba(16,185,129,0.28)',white:'#f0f6ff',muted:'#8899b4',dim:'#4e6280',font:"'Inter', system-ui, sans-serif"}

export default function TaxGuidePage() {
  return (
    <div style={{fontFamily:C.font,background:C.bg,color:C.white,minHeight:'100vh'}}>
      <nav style={{position:'sticky',top:0,zIndex:100,background:'rgba(11,18,32,0.95)',backdropFilter:'blur(16px)',borderBottom:'1px solid '+C.border}}>
        <div style={{maxWidth:1200,margin:'0 auto',padding:'0 32px',display:'flex',alignItems:'center',justifyContent:'space-between',height:68}}>
          <a href="/" style={{display:'flex',alignItems:'center',gap:10,fontWeight:700,fontSize:18,color:C.white,textDecoration:'none'}}>
            <div style={{width:36,height:36,background:C.emerald,borderRadius:8,display:'flex',alignItems:'center',justifyContent:'center'}}><svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" style={{width:22,height:22}}><path fill="white" d="M50 5 L58 30 L85 20 L70 42 L95 45 L75 58 L80 80 L50 68 L20 80 L25 58 L5 45 L30 42 L15 20 L42 30 Z"/></svg></div>
            Crypto<span style={{color:C.emerald}}>North</span>
          </a>
          <div style={{display:'flex'}}>{[['/','Home'],['/exchanges','Exchanges'],['/tax-guide','Tax Guide'],['/wallets','Wallets'],['/beginners-guide',"Beginner's Guide"]].map(([h,l])=><a key={l} href={h} style={{color:h==='/tax-guide'?C.white:C.muted,fontSize:14,fontWeight:h==='/tax-guide'?600:500,padding:'0 14px',height:68,display:'flex',alignItems:'center',textDecoration:'none'}}>{l}</a>)}</div>
        </div>
      </nav>
      <div style={{background:'linear-gradient(180deg,#0f1d35 0%,#0b1220 100%)',borderBottom:'1px solid '+C.border,padding:'64px 32px 56px'}}>
        <div style={{maxWidth:900,margin:'0 auto'}}>
          <div style={{display:'inline-flex',alignItems:'center',gap:8,background:C.emeraldDim,border:'1px solid '+C.emeraldBorder,color:C.emerald,fontSize:12,fontWeight:600,borderRadius:9999,padding:'5px 14px',marginBottom:20,letterSpacing:'0.05em',textTransform:'uppercase'}}>Updated April 2026 - 2025 Tax Year - CRA Verified</div>
          <h1 style={{fontSize:'clamp(2rem,4vw,3rem)',fontWeight:700,letterSpacing:'-0.025em',margin:'0 0 16px',color:C.white}}>Canadian Crypto Tax Guide 2026</h1>
          <p style={{fontSize:16,color:C.muted,lineHeight:1.7,margin:'0 0 8px'}}>Everything Canadians need to know about reporting cryptocurrency to the CRA for the 2025 tax year.</p>
          <p style={{fontSize:13,color:C.dim,margin:0}}>This guide is for informational purposes only. Not tax or legal advice. Consult a CPA for your specific situation.</p>
        </div>
      </div>
      <div style={{maxWidth:900,margin:'0 auto',padding:'56px 32px'}}>
        {[
          {t:'The Basics',id:'basics',body:'The CRA treats cryptocurrency as a commodity under the Income Tax Act - not legal currency. Buying and holding is NOT taxable. Tax is triggered only when you dispose of crypto by selling, trading, or spending it. The 66.67% capital gains inclusion rate proposed in 2024 was formally CANCELLED by PM Mark Carney on March 21, 2025. The rate remains 50% for the 2025 tax year.'},
          {t:'What Is Taxable',id:'taxable',body:'Taxable events: Selling crypto for CAD. Trading crypto-to-crypto (e.g. BTC to ETH). Spending crypto on goods or services. Gifting crypto (for the giver). Receiving payment in crypto. Mining rewards. Staking rewards. NOT taxable: Buying and holding. Transferring between your own wallets (with proof).'},
          {t:'Capital Gains vs Business Income',id:'capgains',body:'Capital gains (casual investors): Only 50% of your gain is added to taxable income. Report on Schedule 3 of your T1. Business income (frequent traders, commercial miners): 100% of profit is taxable. Report on Form T2125. The CRA looks at trading frequency, holding periods, specialized knowledge, and commercial intent to determine which applies.'},
          {t:'ACB Method Required',id:'acb',body:'Canada requires the Adjusted Cost Base (ACB) method - not FIFO or LIFO like the US. Your ACB is the average cost of all units of a coin you own. Example: Buy 0.1 BTC at $50k, buy 0.1 BTC at $80k. ACB = $65k per BTC. When you sell, subtract ACB from proceeds to calculate your gain. Superficial loss rule: If you sell at a loss and rebuy within 30 days, the loss is denied.'},
          {t:'2025 Tax Rates',id:'rates',body:'Basic personal amount 2025: $16,129. Federal brackets: 14.5% blended on first $57,375. 20.5% on $57,375-$114,750. 26% on $114,750-$158,519. 29% on $158,519-$220,000. 33% over $220,000. Remember: only 50% of your capital gain is added to income. T1 filing deadline: April 30, 2026 for the 2025 tax year.'},
          {t:'CARF and CRA Enforcement',id:'carf',body:'The Crypto-Asset Reporting Framework (CARF) took effect January 1, 2026. Canadian exchanges must now report user transaction data to the CRA starting in 2027. The CRA has a dedicated 35-person crypto audit team that has recovered over $100M in unpaid taxes. Keep records of every transaction - date, CAD value, amount, fees - for at least 6 years.'},
          {t:'Crypto Tax Software',id:'software',body:'CoinLedger: Popular choice for Canadians. Generates Schedule 3, T2125, and TurboTax-compatible files. Supports all major Canadian exchanges. Koinly: Supports 300+ exchanges including all Canadian platforms. ACB calculation and superficial loss rule built in. TurboTax Canada: Good for simple situations. CryptoTaxCalculator: Best for DeFi and complex transactions.'},
        ].map(s=>(
          <section key={s.id} id={s.id} style={{marginBottom:40}}>
            <h2 style={{fontSize:'1.4rem',fontWeight:700,color:C.white,marginBottom:12,paddingBottom:10,borderBottom:'1px solid '+C.border}}>{s.t}</h2>
            <p style={{fontSize:14,color:C.muted,lineHeight:1.8}}>{s.body}</p>
          </section>
        ))}
        <div style={{background:'rgba(239,68,68,0.06)',border:'1px solid rgba(239,68,68,0.2)',borderRadius:12,padding:'16px 20px'}}>
          <div style={{fontWeight:600,color:'#ef4444',marginBottom:6,fontSize:14}}>Important Disclaimer</div>
          <p style={{fontSize:13,color:C.muted,lineHeight:1.7,margin:0}}>This guide is for general informational purposes only based on CRA guidance as of April 2026. It does not constitute tax, legal, or financial advice. Always verify with the CRA and consult a qualified CPA for your specific situation.</p>
        </div>
      </div>
      <footer style={{background:'#070e1a',borderTop:'1px solid '+C.border,padding:'44px 32px'}}>
        <div style={{maxWidth:1200,margin:'0 auto'}}>
          <div style={{fontSize:11,color:'#2a3a52'}}>© 2026 CryptoNorth. Not tax or legal advice. Information current as of April 2026. Always verify with CRA and a qualified tax professional.</div>
        </div>
      </footer>
    </div>
  )
}