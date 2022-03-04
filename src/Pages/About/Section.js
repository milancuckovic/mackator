import React from 'react'

export default function Section() {
  return (
    <div className='container mt-5 mb-5 bg-white bg-opacity-75'>
      <div className='row'>
        <div className='p-4 shadow-lg  rounded-3'>
          <div>
              <h1 className='text-center mb-5'>O nama:</h1>
          </div>
          <div className='mt-5 mb-5 p-3'>
            <p>Pozdrav svima, <br/><br/>Velika je nepravda da jedne životinje kao što su mačke nemaju mnogo sajtova posvećenih isključivo njima, zašto? - pa eto zato, a ja sam tu da probam da ispravim tu nepravdu. Cilj ovog sajta je čista zabava, znači vi pokrenete Mačkator i prikaže Vam se neka slika mačke nasumice izabrana iz <a href="https://cataas.com/#/">Catass API-ija</a>. Što se tiče zanimljivosti vezanih za mačke većina je pokupljena sa interneta, pa prekucana u JSON fajl koji se nalazi na mom <a href="https://github.com/milancuckovic">GitHub profilu</a>. Ovo je još jedna React aplikacija koju hostujem uz pomoć <a href="https://github.com">GitHuba</a>, pa zbog toga imate mogućnost da je i vidite. Za kraj i da se predstavim, zovem se Milan Čučković i u potrazi sam za web dev pozicijama, konkretno za Frontend pozicije. Ukoliko imaš neku ponudu za mene možeš me kontaktirati. Naravno i da nemaš nikakvu ponudu, a gotiviš mačke dobrodošao si na ovaj sajt.<br/><br/>Sve najbolje i srdačan pozdrav!</p>
          </div>
        </div>  
      </div>
      
    </div>
  )
}
