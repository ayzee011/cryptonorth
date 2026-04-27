'use client'

const C = {bg:'#0b1220',surface:'#172033',surface2:'#1e2a3f',border:'rgba(255,255,255,0.07)',emerald:'#10b981',emeraldDim:'rgba(16,185,129,0.12)',emeraldBorder:'rgba(16,185,129,0.28)',white:'#f0f6ff',muted:'#8899b4',dim:'#4e6280',font:"'Inter', system-ui, sans-serif"}

export default function WalletsPage() {
  return <div style={{fontFamily:C.font,background:C.bg,color:C.white,minHeight:'100vh',padding:32}}>
    <h1 style={{fontSize:'clamp(2rem,4vw,3rem)',fontWeight:700,color:C.white,marginBottom:16}}>Best Crypto Wallets for Canadians 2026</h1>
    <p style={{color:C.muted,fontSize:16,lineHeight:1.7}}>Not your keys, not your coins. Full wallet guide coming — in the meantime, always buy hardware wallets directly from ledger.com or trezor.io only. Crypto is NOT covered by CDIC. QuadrigaCX lost $169M CAD of Canadian funds in 2019.</p>
    <div style={{marginTop:32,display:'grid',gridTemplateColumns:'repeat(2,1fr)',gap:16}}>
      {[{n:'Ledger Nano X',p:'~CAD $200',b:'Most Canadians',f:true},{n:'Ledger Nano S Plus',p:'~CAD $100',b:'Budget pick',f:false},{n:'Trezor Model T',p:'~CAD $280',b:'Open-source advocates',f:false},{n:'Coldcard Mk4',p:'~CAD $220',b:'Bitcoin maximalists',f:false}].map(w=>(
        <div key={w.n} style={{background:w.f?C.surface2:C.surface,border:'1px solid '+(w.f?C.emeraldBorder:C.border),borderRadius:16,padding:24}}>
          <div style={{fontWeight:700,fontSize:16,color:C.white,marginBottom:4}}>{w.n} {w.f?'(TOP PICK)':''}</div>
          <div style={{color:C.emerald,fontWeight:600,marginBottom:8}}>{w.p}</div>
          <div style={{color:C.muted,fontSize:13}}>Best for: {w.b}</div>
        </div>
      ))}
    </div>
    <div style={{marginTop:40,background:C.surface,border:'1px solid '+C.border,borderRadius:14,padding:24}}>
      <h2 style={{color:C.white,marginBottom:12}}>Canadian Tax Note</h2>
      <p style={{color:C.muted,fontSize:13,lineHeight:1.7}}>Transferring crypto between wallets you own is generally not a taxable event. Swapping tokens inside a wallet (e.g. BTC to ETH via Exodus) IS a taxable event under CRA rules. Track the CAD value of all transactions. See our <a href="/tax-guide" style={{color:C.emerald}}>Tax Guide</a> for details.</p>
    </div>
    <footer style={{background:'#070e1a',borderTop:'1px solid '+C.border,padding:'44px 32px',marginTop:64}}>
      <div style={{color:'#2a3a52',fontSize:11}}>© 2026 CryptoNorth. Not financial advice. Crypto is not CDIC insured.</div>
    </footer>
  </div>
}