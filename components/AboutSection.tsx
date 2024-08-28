import { Code, Cpu, Globe, Smartphone } from 'lucide-react'

export default function AboutSection() {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center snap-start bg-gray-800 text-white">
      <div className="container mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold mb-8 text-center">About CodePipe</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg mb-6">
              CodePipe is a cutting-edge software development company specializing in creating robust, scalable, and
              innovative solutions for businesses of all sizes. As per our  motto <span className='font-bold text-purple-300'>`Your dream our teamwork`</span>, Our team of expert developers, designers, and project
              managers work tirelessly to transform your ideas into reality.
            </p>
            <p className="text-lg">
              With a focus on the latest technologies and best practices, we ensure that our clients stay ahead in the
              fast-paced digital world. At CodePipe, we don`t just write code; we craft digital experiences that make
              a difference.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-6">
            {[
              { icon: Code, label: 'Clean Code' },
              { icon: Cpu, label: 'Cutting-edge Tech' },
              { icon: Globe, label: 'Global Reach' },
              { icon: Smartphone, label: 'Mobile First' },
            ].map(({ icon: Icon, label }) => (
              <div key={label} className="flex flex-col items-center text-center">
                <div className="bg-purple-400 p-4 rounded-full mb-4">
                  <Icon className="w-8 h-8 text-gray-900" />
                </div>
                <h3 className="font-semibold">{label}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}