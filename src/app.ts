import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'

// Import routes
import userRoutes from './routes/user.routes'
import productRoutes from './routes/product.routes'
import categoryRoutes from './routes/category.routes'
import catalogRoutes from './routes/catalog.routes'
import inquiryRoutes from './routes/inquiry.routes'

// Import middlewares
import errorMiddleware from './middlewares/error.middleware'

const app = express()

// Middleware
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// Root API route (should be first)
app.get('/api', (req, res) => {
  res.json({
    success: true,
    message: 'ZipZag Jewelry Catalog API',
    version: '1.0.0',
    endpoints: {
      health: '/api/health',
      users: '/api/users',
      products: '/api/products',
      categories: '/api/categories',
      catalogs: '/api/catalogs',
      inquiries: '/api/inquiries'
    }
  })
})

// Health check route
app.get('/api/health', (req, res) => {
  res.json({ success: true, message: 'Server is running!' })
})

// Routes
app.use('/api/users', userRoutes)
app.use('/api/products', productRoutes)
app.use('/api/categories', categoryRoutes)
app.use('/api/catalogs', catalogRoutes)
app.use('/api/inquiries', inquiryRoutes)

// Error handling middleware (should be last)
app.use(errorMiddleware)

export default app