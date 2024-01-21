export default function ΩClients1() {
    return (
      <section className="bg-slate-100">

        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          {/* <div className="py-12 md:py-20 border-t border-gray-800"> */}
          <div className="py-12 md:py-20">
  
            {/* Section header */}
            <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
              <h1 className="text-4xl font-bold font-playfair-display text-black  mb-10">他们信任我们</h1>
              <p className="text-lg text-left text-black mt-6">我们通过与客户携手合作，共同应对变化和挑战，建立牢固的信任和认可。我们凭借丰富的知识和专业技能，在航空物流领域展现卓越影响力并作出重要贡献。</p>
            </div>
  
            {/* Items */}
            <div className="grid gap-2 grid-cols-2 md:grid-cols-4" data-aos-id-clients>
  
              {/* Item */}
              <div className="flex items-center justify-center h-24 border border-4 border-gray-500 p-2" data-aos="fade-up" data-aos-anchor="[data-aos-id-clients]">
              <svg xmlns="http://www.w3.org/2000/svg" width="200" height="100" viewBox="0 0 200 100">
                    <text 
                        x="50" 
                        y="75" 
                        fontFamily="Verdana" 
                        fontSize="60" 
                        fill="#808080" 
                        fontWeight="bold" 
                        style={{ letterSpacing: '5px' }}
                    >
                        CI
                    </text>
                </svg>
              </div>
  
              {/* Item */}
              <div className="flex items-center justify-center h-24 border border-4 border-gray-500 p-2" data-aos="fade-up" data-aos-delay="100" data-aos-anchor="[data-aos-id-clients]">
                <svg xmlns="http://www.w3.org/2000/svg" width="200" height="100" viewBox="0 0 200 100">
                    <text 
                        x="50" 
                        y="75" 
                        fontFamily="Verdana" 
                        fontSize="60" 
                        fill="#808080" 
                        fontWeight="bold" 
                        style={{ letterSpacing: '5px' }}
                    >
                        BR
                    </text>
                </svg>
              </div>
  
              {/* Item */}
              <div className="flex items-center justify-center h-24 border border-4 border-gray-500 p-2" data-aos="fade-up" data-aos-delay="200" data-aos-anchor="[data-aos-id-clients]">
              <svg xmlns="http://www.w3.org/2000/svg" width="200" height="100" viewBox="0 0 200 100">
                    <text 
                        x="50" 
                        y="75" 
                        fontFamily="Verdana" 
                        fontSize="60" 
                        fill="#808080" 
                        fontWeight="bold" 
                        style={{ letterSpacing: '5px' }}
                    >
                        EK
                    </text>
                </svg>
              </div>
  
              {/* Item */}
              <div className="flex items-center justify-center h-24 border border-4 border-gray-500 p-2" data-aos="fade-up" data-aos-delay="300" data-aos-anchor="[data-aos-id-clients]">
              <svg xmlns="http://www.w3.org/2000/svg" width="200" height="100" viewBox="0 0 200 100">
                    <text 
                        x="50" 
                        y="75" 
                        fontFamily="Verdana" 
                        fontSize="60" 
                        fill="#808080" 
                        fontWeight="bold" 
                        style={{ letterSpacing: '5px' }}
                    >
                        MB
                    </text>
                </svg>
              </div>

  
            </div>
          </div>
        </div>
      </section>
    )
  }
  