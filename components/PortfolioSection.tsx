import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { Tab } from '@headlessui/react'

export default function PortfolioSection() {
  const [selectedTab, setSelectedTab] = useState(0)

  const categories = [
    { name: 'All', projects: [
      { title: 'Resume builder', image: '/placeholder.svg?height=300&width=400', category: 'Web' },
      { title: 'Digital healthpassport', image: '/chutch1.jpg?height=300&width=400', category: 'Mobile' },
      { title: 'Loan management system', image: '/code.png?height=300&width=400', category: 'Web' },
      { title: 'Social Media Analytics', image: '/employee.png?height=300&width=400', category: 'Desktop' },
      { title: 'PipePay', image: '/logo.png?height=300&width=400', category: 'Mobile' },
      { title: 'Educational Platform', image: '/class.png?height=300&width=400', category: 'Web' },
    ]},
    { name: 'Web', projects: [] },
    { name: 'Mobile', projects: [] },
    { name: 'Desktop', projects: [] },
  ]

  // Populate category-specific projects
  categories.forEach(category => {
    if (category.name !== 'All') {
      category.projects = categories[0].projects.filter(project => project.category === category.name)
    }
  })

  return (
    <section id="portfolio" className="min-h-screen flex items-center justify-center snap-start bg-gradient-to-br from-purple-900 via-gray-900 to-gray-800 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover bg-center opacity-20"></div>
      <div className="container mx-auto px-6 py-20 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold mb-12 text-center"
        >
          Our Portfolio
        </motion.h2>
        <Tab.Group selectedIndex={selectedTab} onChange={setSelectedTab}>
          <Tab.List className="flex space-x-2 rounded-xl bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg p-1 mb-8">
            {categories.map((category) => (
              <Tab
                key={category.name}
                className={({ selected }) =>
                  `w-full rounded-lg py-2.5 text-sm font-medium leading-5 transition-all duration-300
                  ${selected
                    ? 'bg-purple-500 text-white shadow'
                    : 'text-gray-300 hover:bg-white/[0.12] hover:text-white'
                  }`
                }
              >
                {category.name}
              </Tab>
            ))}
          </Tab.List>
          <Tab.Panels>
            <AnimatePresence mode="wait">
              {categories.map((category, idx) => (
                <Tab.Panel
                  key={idx}
                  static
                >
                  {selectedTab === idx && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.5 }}
                      className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                    >
                      {category.projects.map((project, index) => (
                        <motion.div
                          key={project.title}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                          className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-lg overflow-hidden shadow-lg border border-white border-opacity-20"
                        >
                          <Image src={project.image} alt={project.title} className="w-full h-48 object-cover" height={300} width={400} />
                          <div className="p-4">
                            <h3 className="text-lg font-semibold mb-2 text-purple-300">{project.title}</h3>
                            <a href="#" className="text-cyan-400 hover:underline">
                              View Project
                            </a>
                          </div>
                        </motion.div>
                      ))}
                    </motion.div>
                  )}
                </Tab.Panel>
              ))}
            </AnimatePresence>
          </Tab.Panels>
        </Tab.Group>
      </div>
    </section>
  )
}