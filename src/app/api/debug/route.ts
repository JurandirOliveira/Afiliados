import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const debugData = await request.json()
    
    // Log no servidor (aparece no terminal em desenvolvimento e nos logs da Vercel)
    console.log('🌐 DARK MODE DEBUG FROM CLIENT:', {
      timestamp: new Date().toISOString(),
      ...debugData
    })
    
    // Aqui você pode adicionar outras ações:
    // - Salvar em banco de dados
    // - Enviar para um serviço de logging externo
    // - Enviar email de alerta
    // - Salvar em arquivo (apenas em desenvolvimento)
    
    return NextResponse.json({ 
      success: true,
      message: 'Debug data received successfully',
      receivedAt: new Date().toISOString()
    })
  } catch (error) {
    console.error('❌ Error processing debug data:', error)
    return NextResponse.json({ 
      error: 'Failed to process debug data',
      details: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 })
  }
}

export async function GET() {
  return NextResponse.json({ 
    message: 'Debug endpoint is working',
    timestamp: new Date().toISOString()
  })
}