import Link from 'next/link'

const C = {
  bg: '#0b1220', surface: '#111d30', border: 'rgba(255,255,255,0.07)',
  emerald: '#10b981', emeraldDim: 'rgba(16,185,129,0.1)', emeraldBorder: 'rgba(16,185,129,0.28)',
  white: '#f0f6ff', muted: '#8ca0b8', dim: '#3a506b',
  font: "'Inter', system-ui, -apple-system, sans-serif",
}

export default function NotFound() {
  return (
    <div style={{fontFamily:C.font,background:C.bg,color:C.white,minHeight:'100vh',display:'flex',alignItems:'center',justifyContent:'center',padding:'32px'}}>
      <div style={{textAlign:'center',maxWidth:480}}>
        <div style={{fontSize:'5rem',fontWeight:800,color:C.emerald,letterSpacing:'-0.04em',marginBottom:8}}>404</div>
        <h1 style={{fontSize:'1.8rem',fontWeight:800,letterSpacing:'-0.03em',marginBottom:16,color:C.white}}>Page not found</h1>
        <p style={{fontSize:16,color:C.muted,lineHeight:1.75,marginBottom:36}}>
          This page does not exist. You may have followed an old link or mistyped the URL.
        </p>
        <div style={{display:'flex',gap:12,justifyContent:'center',flexWrap:'wrap'}}>
          <Link href="/" style={{background:C.emerald,color:'#052e22',padding:'13px 28px',borderRadius:12,fontWeight:700,fontSize:15,textDecoration:'none',display:'inline-block'}}>
            Go to Homepage
          </Link>
          <Link href="/exchanges" style={{background:'transparent',color:C.white,padding:'13px 24px',borderRadius:12,fontWeight:600,fontSize:15,border:'1.5px solid rgba(255,255,255,0.2)',textDecoration:'none',display:'inline-block'}}>
            Compare Exchanges
          </Link>
        </div>
      </div>
    </div>
  )
}