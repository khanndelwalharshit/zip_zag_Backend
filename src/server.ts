import app from './app'
import prisma from './models/db'

const PORT = process.env.PORT || 5000

async function startServer() {
  try {
    // Test database connection
    await prisma.$connect()
    console.log('✅ Database connected successfully')
    
    // Test a simple query to verify database is working
    try {
      const userCount = await prisma.user.count()
      console.log(`✅ Database working - User count: ${userCount}`)
    } catch (dbError) {
      console.error('❌ Database query failed:', dbError)
      console.log('This might indicate a schema issue or missing tables')
    }

    // Start server
    app.listen(PORT, () => {
      console.log(`🚀 Server running on port ${PORT}`)
      console.log(`📊 API available at http://localhost:${PORT}/api`)
    })
  } catch (error) {
    console.error('❌ Failed to start server:', error)
    process.exit(1)
  }
}

// Graceful shutdown
process.on('SIGINT', async () => {
  console.log('🔄 Shutting down server...')
  await prisma.$disconnect()
  console.log('✅ Database disconnected')
  process.exit(0)
})

startServer()