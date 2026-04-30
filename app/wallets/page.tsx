'use client'

const C = {bg:'#0b1220',surface:'#172033',surface2:'#1e2a3f',border:'rgba(255,255,255,0.07)',emerald:'#10b981',emeraldDim:'rgba(16,185,129,0.12)',emeraldBorder:'rgba(16,185,129,0.28)',white:'#f0f6ff',muted:'#8899b4',dim:'#4e6280',font:"'Inter', system-ui, sans-serif"}

const hw = [
  {name:'Ledger Nano X',price:'~CAD $200',coins:'5,500+',bt:true,bestFor:'Most Canadians',pros:['5,500+ coins supported','Bluetooth mobile app (Ledger Live)','Industry-leading CC EAL5+ security chip','Widely available in Canada'],cons:['Pricier than entry-level options','2023 data breach exposed some customer emails (no funds lost)'],featured:true},
  {name:'Ledger Nano S Plus',price:'~CAD $100',coins:'5,500+',bt:false,bestFor:'Budget-conscious Canadians',pros:['Same security chip as Nano X','5,500+ coins','USB-C connection','More affordable'],cons:['No Bluetooth - USB only','Smaller screen than Nano X'],featured:false},
  {name:'Trezor Model T',price:'~CAD $280',coins:'1,800+',bt:false,bestFor:'Open-source advocates',pros:['Fully open-source firmware','Touchscreen interface','Fully auditable - no closed-source chip','Strong privacy reputation'],cons:['Fewer coins than Ledger','No Bluetooth','Higher price for fewer features'],featured:false},
  {name:'Coldcard Mk4',price:'~CAD $220',coins:'Bitcoin only',bt:false,bestFor:'Bitcoin maximalists',pros:['Bitcoin-only laser-focused security','Air-gapped signing','No USB required for signing','Beloved by Bitcoin security community'],cons:['Bitcoin only - no altcoins','Steep learning curve','No companion app for altcoins'],featured:false},
]

const sw = [
  {name:'Trust Wallet',type:'Mobile',coins:'10M+ tokens',os:true,desc:'Non-custodial mobile wallet supporting millions of tokens across hundreds of blockchains. Official Binance-acquired wallet. Free and beginner-friendly.'},
  {name:'MetaMask',type:'Browser + Mobile',coins:'EVM chains',os:true,desc:'The most widely used Ethereum wallet. Required for most DeFi protocols. Browser extension and mobile app. Not suitable for Bitcoin.'},
  {name:'Exodus',type:'Desktop + Mobile',coins:'300+',os:false,desc:'Polished multi-coin wallet with built-in exchange. Good for managing a portfolio. Not open source - some privacy-conscious users prefer alternatives.'},
  {name:'Bitcoin Core',type:'Desktop',coins:'Bitcoin only',os:true,desc:'The original Bitcoin wallet software. Running a full node validates your own transactions without trusting third parties. Advanced users only.'},
]

export default function WalletsPage() {
  return (
    <div style={{fontFamily:C.font,background:C.bg,color:C.white,minHeight:'100vh'}}>
      <nav style={{position:'sticky',top:0,zIndex:100,background:'rgba(11,18,32,0.95)',backdropFilter:'blur(16px)',borderBottom:'1px solid '+C.border}}>
        <div style={{maxWidth:1200,margin:'0 auto',padding:'0 32px',display:'flex',alignItems:'center',justifyContent:'space-between',height:68,gap:24}}>
          <a href="/" style={{display:'flex',alignItems:'center',gap:10,fontWeight:700,fontSize:18,color:C.white,textDecoration:'none',flexShrink:0}}>
            <div style={{width:36,height:36,background:C.emerald,borderRadius:8,display:'flex',alignItems:'center',justifyContent:'center'}}><svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" style={{width:22,height:22}}><path fill="white" d="M50 5 L58 30 L85 20 L70 42 L95 45 L75 58 L80 80 L50 68 L20 80 L25 58 L5 45 L30 42 L15 20 L42 30 Z"/></svg></div>
            CryptoNorth
          </a>
          <div style={{display:'flex'}}>
            {[['/','Home'],['/exchanges','Exchanges'],['/tax-guide','Tax Guide'],['/wallets','Wallets'],['/beginners-guide',"Beginner's Guide"]].map(([h,l])=>(
              <a key={l} href={h} style={{color:h==='/wallets'?C.white:C.muted,fontSize:14,fontWeight:h==='/wallets'?600:500,padding:'0 14px',height:68,display:'flex',alignItems:'center',whiteSpace:'nowrap',textDecoration:'none'}}>{l}</a>
            ))}
          </div>
          <a href="/exchanges" style={{background:C.emerald,color:'#fff',padding:'0 22px',height:40,borderRadius:9999,fontWeight:600,fontSize:14,display:'flex',alignItems:'center',whiteSpace:'nowrap',flexShrink:0,textDecoration:'none'}}>Compare Exchanges</a>
        </div>
      </nav>
      <div style={{background:'linear-gradient(180deg,#0f1d35 0%,#0b1220 100%)',borderBottom:'1px solid '+C.border,padding:'64px 32px 56px'}}>
        <div style={{maxWidth:900,margin:'0 auto'}}>
          <div style={{display:'inline-flex',background:C.emeraldDim,border:'1px solid '+C.emeraldBorder,color:C.emerald,fontSize:12,fontWeight:600,borderRadius:9999,padding:'5px 14px',marginBottom:20,letterSpacing:'0.05em',textTransform:'uppercase'}}>Updated April 2026</div>
          <h1 style={{fontSize:'clamp(2rem,4vw,3rem)',fontWeight:700,letterSpacing:'-0.025em',margin:'0 0 16px',color:C.white}}>Best Crypto Wallets for Canadians 2026</h1>
          <p style={{fontSize:16,color:C.muted,lineHeight:1.7,margin:0}}>Not your keys, not your coins. If you hold meaningful amounts of crypto on an exchange, a hardware wallet is the single most important security upgrade you can make.</p>
        </div>
      </div>
      <div style={{maxWidth:1200,margin:'0 auto',padding:'56px 32px'}}>
        <section style={{marginBottom:56}}>
          <h2 style={{fontSize:'1.5rem',fontWeight:700,color:C.white,marginBottom:20}}>Custodial vs Non-Custodial</h2>
          <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:20,marginBottom:20}}>
            <div style={{background:C.surface,border:'1px solid '+C.border,borderRadius:16,padding:24}}>
              <div style={{fontWeight:700,fontSize:16,color:C.white,marginBottom:4}}>Custodial Wallet</div>
              <div style={{fontSize:13,color:'#ef4444',fontWeight:600,marginBottom:10}}>Someone else holds your keys</div>
              <p style={{fontSize:13,color:C.muted,lineHeight:1.7,marginBottom:10}}>When you keep crypto on an exchange, the exchange controls your private keys. If the exchange is hacked, goes bankrupt, or freezes withdrawals, your funds are at risk.</p>
              <div style={{fontSize:12,color:C.dim}}>Example: QuadrigaCX (Canada, 2019) - customers lost $169M CAD</div>
            </div>
            <div style={{background:C.surface,border:'1px solid '+C.emeraldBorder,borderRadius:16,padding:24}}>
              <div style={{fontWeight:700,fontSize:16,color:C.white,marginBottom:4}}>Non-Custodial Wallet</div>
              <div style={{fontSize:13,color:C.emerald,fontWeight:600,marginBottom:10}}>You hold your own keys</div>
              <p style={{fontSize:13,color:C.muted,lineHeight:1.7,marginBottom:10}}>You control your private keys and seed phrase. No exchange can freeze or lose your funds. If your seed phrase is lost, the crypto is gone forever.</p>
              <div style={{fontSize:12,color:C.emerald}}>True ownership - No counterparty risk - No KYC required</div>
            </div>
          </div>
          <div style={{background:'rgba(16,185,129,0.06)',border:'1px solid '+C.emeraldBorder,borderRadius:12,padding:'14px 20px'}}>
            <strong style={{color:C.emerald}}>Recommended:</strong> <span style={{fontSize:13,color:C.muted}}>Use a regulated Canadian exchange (Bitbuy, Newton, NDAX) to buy. Then transfer significant holdings to a hardware wallet for long-term storage.</span>
          </div>
        </section>
        <section style={{marginBottom:56}}>
          <h2 style={{fontSize:'1.5rem',fontWeight:700,color:C.white,marginBottom:8}}>Hardware Wallets (Cold Storage)</h2>
          <p style={{fontSize:14,color:C.muted,marginBottom:24}}><strong style={{color:C.white}}>Always buy directly from the manufacturer</strong> - never from third-party resellers on Amazon or eBay.</p>
          <div style={{display:'flex',flexDirection:'column',gap:16}}>
            {hw.map(w=>(
              <div key={w.name} style={{background:w.featured?C.surface2:C.surface,border:'1px solid '+(w.featured?C.emeraldBorder:C.border),borderRadius:16,padding:28,position:'relative'}}>
                {w.featured&&<div style={{position:'absolute',top:-1,right:24,background:C.emerald,color:'#fff',fontSize:11,fontWeight:700,padding:'4px 14px',borderRadius:'0 0 8px 8px'}}>TOP PICK</div>}
                <div style={{display:'grid',gridTemplateColumns:'200px 1fr 1fr',gap:28}}>
                  <div>
                    <div style={{fontWeight:700,fontSize:17,color:C.white,marginBottom:4}}>{w.name}</div>
                    <div style={{fontSize:13,color:C.emerald,fontWeight:600,marginBottom:8}}>{w.price}</div>
                    <div style={{fontSize:12,color:C.muted,marginBottom:3}}>Coins: <strong style={{color:C.white}}>{w.coins}</strong></div>
                    <div style={{fontSize:12,color:C.muted,marginBottom:3}}>Bluetooth: <strong style={{color:w.bt?C.emerald:C.dim}}>{w.bt?'Yes':'No'}</strong></div>
                    <div style={{fontSize:12,color:C.muted}}>Best for: <strong style={{color:C.white}}>{w.bestFor}</strong></div>
                  </div>
                  <div>
                    <div style={{fontSize:11,color:C.dim,fontWeight:600,marginBottom:8,textTransform:'uppercase',letterSpacing:'0.05em'}}>Pros</div>
                    {w.pros.map(p=><div key={p} style={{fontSize:12,color:C.emerald,marginBottom:3}}>+ {p}</div>)}
                  </div>
                  <div>
                    <div style={{fontSize:11,color:C.dim,fontWeight:600,marginBottom:8,textTransform:'uppercase',letterSpacing:'0.05em'}}>Cons</div>
                    {w.cons.map(c=><div key={c} style={{fontSize:12,color:'#ef4444',marginBottom:3}}>- {c}</div>)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
        <section style={{marginBottom:56}}>
          <h2 style={{fontSize:'1.5rem',fontWeight:700,color:C.white,marginBottom:8}}>Software Wallets (Hot Wallets)</h2>
          <p style={{fontSize:14,color:C.muted,marginBottom:24}}>Convenient for day-to-day use and DeFi but connected to the internet - less secure for significant holdings.</p>
          <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:16}}>
            {sw.map(w=>(
              <div key={w.name} style={{background:C.surface,border:'1px solid '+C.border,borderRadius:14,padding:22}}>
                <div style={{display:'flex',justifyContent:'space-between',marginBottom:8}}>
                  <div>
                    <div style={{fontWeight:700,fontSize:15,color:C.white}}>{w.name}</div>
                    <div style={{fontSize:12,color:C.dim}}>{w.type}</div>
                  </div>
                  <span style={{fontSize:11,color:C.muted,background:'rgba(255,255,255,0.05)',padding:'3px 8px',borderRadius:6,alignSelf:'flex-start'}}>{w.coins}</span>
                </div>
                <p style={{fontSize:13,color:C.muted,lineHeight:1.65,marginBottom:10}}>{w.desc}</p>
                <div style={{display:'flex',gap:8}}>
                  <span style={{fontSize:11,padding:'3px 8px',borderRadius:5,background:C.emeraldDim,color:C.emerald,border:'1px solid '+C.emeraldBorder}}>Non-custodial</span>
                  {w.os&&<span style={{fontSize:11,padding:'3px 8px',borderRadius:5,background:'rgba(255,255,255,0.05)',color:C.muted}}>Open source</span>}
                </div>
              </div>
            ))}
          </div>
        </section>
        <section style={{marginBottom:56}}>
          <h2 style={{fontSize:'1.5rem',fontWeight:700,color:C.white,marginBottom:20}}>Security Best Practices for Canadians</h2>
          <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:16}}>
            {[
              {icon:'📝',t:'Write down your seed phrase',b:'Your 12-24 word recovery phrase is the master key. Write it on paper (never digitally) and store in multiple secure physical locations. Consider a fireproof safe.'},
              {icon:'🚫',t:'Never share your seed phrase',b:'No legitimate company or support agent will ever ask for your seed phrase. If someone asks - it is a scam. This is the number one way Canadians lose crypto.'},
              {icon:'🛒',t:'Buy from manufacturers only',b:'Only purchase from ledger.com or trezor.io directly. Pre-configured or secondhand hardware wallets can have compromised firmware designed to steal funds.'},
              {icon:'✅',t:'Verify receive addresses',b:'Before sending crypto, always verify the first and last 6 characters of the receiving address. Clipboard hijacking malware can silently replace copied addresses.'},
              {icon:'🍁',t:'Crypto is not CDIC insured in Canada',b:'Unlike bank accounts, crypto assets are NOT covered by CDIC. There is no government backstop for losses from hacks or exchange failures.'},
              {icon:'📊',t:'Track your cost base from day one',b:'Every transaction may be a taxable event. Track CAD values at the time of every transaction for accurate CRA reporting. Crypto tax software helps automate this.'},
            ].map(t=>(
              <div key={t.t} style={{background:C.surface,border:'1px solid '+C.border,borderRadius:14,padding:20}}>
                <div style={{fontSize:22,marginBottom:10}}>{t.icon}</div>
                <div style={{fontWeight:600,fontSize:14,color:C.white,marginBottom:6}}>{t.t}</div>
                <p style={{fontSize:13,color:C.muted,lineHeight:1.7,margin:0}}>{t.b}</p>
              </div>
            ))}
          </div>
        </section>
        <div style={{background:C.surface,border:'1px solid '+C.border,borderRadius:14,padding:24}}>
          <div style={{fontWeight:600,fontSize:15,color:C.white,marginBottom:10}}>Canadian Tax Note on Wallets</div>
          <p style={{fontSize:13,color:C.muted,lineHeight:1.7,margin:'0 0 10px'}}>Transferring crypto between wallets <strong style={{color:C.white}}>you own</strong> is generally not taxable - keep records of wallet addresses to prove ownership. Swapping tokens within a wallet (e.g. BTC to ETH via Exodus) <strong style={{color:C.white}}>is a taxable event</strong> under CRA rules. See our <a href="/tax-guide" style={{color:C.emerald}}>Tax Guide</a> for details.</p>
        </div>
      </div>
      <footer style={{background:'#070e1a',borderTop:'1px solid '+C.border,padding:'44px 32px'}}>
        <div style={{maxWidth:1200,margin:'0 auto',display:'flex',justifyContent:'space-between',alignItems:'center',flexWrap:'wrap',gap:20}}>
          <div><div style={{fontWeight:700,fontSize:16,display:'flex',alignItems:'center',gap:8}}><div style={{width:20,height:20,background:C.emerald,borderRadius:4,display:'flex',alignItems:'center',justifyContent:'center'}}><svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" style={{width:12,height:12}}><path fill="white" d="M50 5 L58 30 L85 20 L70 42 L95 45 L75 58 L80 80 L50 68 L20 80 L25 58 L5 45 L30 42 L15 20 L42 30 Z"/></svg></div>CryptoNorth</div><div style={{fontSize:12,color:C.dim,marginTop:3}}>Canada's independent crypto resource</div></div>
          <div style={{display:'flex',gap:24,flexWrap:'wrap'}}>{[['/','Home'],['/exchanges','Exchanges'],['/tax-guide','Tax Guide'],['/wallets','Wallets'],['/beginners-guide',"Beginner's Guide"]].map(([h,l])=><a key={l} href={h} style={{fontSize:13,color:C.dim,textDecoration:'none'}}>{l}</a>)}</div>
          <div style={{fontSize:11,color:'#2a3a52',width:'100%',marginTop:8}}>© 2026 CryptoNorth. Not financial advice. Crypto is not CDIC insured.</div>
        </div>
      </footer>
    </div>
  )
}