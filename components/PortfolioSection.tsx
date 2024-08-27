import { motion } from 'framer-motion'
import Image from 'next/image'

export default function PortfolioSection() {
  return (
    <section id="portfolio" className="min-h-screen flex items-center justify-center snap-start bg-gray-800 text-white">
      <div className="container mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold mb-12 text-center">Our Portfolio</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { title: 'Resume builder', image: '/placeholder.svg?height=300&width=400' },
            { title: 'Digital healthpassport', image: '/chutch1.jpg?height=300&width=400' },
            { title: 'Loan management system', image: '/code.png?height=300&width=400' },
            { title: 'Social Media Analytics', image: '/employee.png?height=300&width=400' },
            { title: 'PipePay', image: '/logo.png?height=300&width=400' },
            { title: 'Educational Platform', image: '/class.png?height=300&width=400' },
          ].map(({ title, image }) => (
            <motion.div
              key={title}
              whileHover={{ scale: 1.05 }}
              className="bg-gray-900 rounded-lg overflow-hidden shadow-lg"
            >
              <Image src={image} alt={title} className="w-full h-48 object-cover" height={300} width={400} />
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">{title}</h3>
                <a href="#" className="text-cyan-400 hover:underline">
                  View Project
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}