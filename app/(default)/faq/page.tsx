import Hero from './hero'


export default function FAQ() {  
  return (
    <>
    <section className="relative">

      <Hero />

      <div className="max-w-full mx-auto px-4 sm:px-6 bg-slate-100 flex justify-center">
        <div className="max-w-6xl py-12 md:py-20 border-t border-gray-800 lg:border-0 lg:pt-8">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 pt-12">
            <p className="text-4xl font-bold">常见问题</p>
          </div>

          {/* Faqs */}
          <ul className="grid gap-8 md:grid-cols-2 xl:gap-x-16 lg:gap-y-12">
            <li>
              <h4 className="text-xl font-medium mb-2">Publishing industries for previewing layouts?</h4>
              <p className="text-lg text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis enim lobortis scelerisque fermentum.</p>
            </li>
            <li>
              <h4 className="text-xl font-medium mb-2">Publishing industries for previewing layouts?</h4>
              <p className="text-lg text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis enim lobortis scelerisque fermentum.</p>
            </li>
            <li>
              <h4 className="text-xl font-medium mb-2">Publishing industries for previewing layouts?</h4>
              <p className="text-lg text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis enim lobortis scelerisque fermentum.</p>
            </li>
            <li>
              <h4 className="text-xl font-medium mb-2">Publishing industries for previewing layouts?</h4>
              <p className="text-lg text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis enim lobortis scelerisque fermentum.</p>
            </li>
            <li>
              <h4 className="text-xl font-medium mb-2">Publishing industries for previewing layouts?</h4>
              <p className="text-lg text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis enim lobortis scelerisque fermentum.</p>
            </li>
            <li>
              <h4 className="text-xl font-medium mb-2">Publishing industries for previewing layouts?</h4>
              <p className="text-lg text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis enim lobortis scelerisque fermentum.</p>
            </li>
          </ul>

        </div>
      </div>
      
    </section>



    </>
  )
}