import FSection from "@/components/section";
import Slider from "@/components/slider";
import Image from "next/image";
import Contact from "@/components/Contact";
import Link from "next/link";
import Terms from "@/components/Terms";
import SocialColumn from "@/components/SocialColumn";
import { Montserrat } from 'next/font/google';

const mont = Montserrat({subsets: ['latin']});
const images = [
  {src: '/discord.png', url: 'https://discord.gg/KjC2JUWhvc'},
  {src: '/twich.png', url: 'https://www.twitch.tv/fiberpro_pe'},
  {src: '/instagram.png', url: 'https://www.instagram.com/fiberpro_oficial/'},
  {src: '/facebook.png', url: 'https://www.facebook.com/FiberProPeru'},
  {src: '/yt.png', url: 'https://www.youtube.com/@fiberpro'},
  {src: '/tiktok.png', url: 'https://www.tiktok.com/@fiberpro_peru'} 
]

export default function Home() {
  
  return (
    <main className="h-full">
      <section className="relative h-[800px] md:h-[500px] bg-[#0012A0]">
        <Image
          alt="promocion fiber pro"
          src={"/desktop.jpg"}
          width={2000}
          height={350}
          className="hidden md:block w-full h-full object-cover"
          priority={true}
          />
        <Image
          alt="promocion fiber pro"
          src={"/mobile.jpg"}
          width={720}
          height={300}
          className="md:hidden w-full"
          priority={true}
        />
        <Contact/>
        <SocialColumn/>
      </section>
      <FSection id={'productos'}>
        <h2 className="text-center font-[800] text-primary mb-5 text-5xl animate-fade-up">PLANES HOGAR</h2>
        <p className="text-center font-medium mb-5 text-xl animate-fade-up">Duplicamos tu velocidad los <strong className="text-primary">3  primeros meses</strong></p>
        <div className="text-center mb-10">
          <p className={mont.className + " font-bold text-2xl p-2 bg-slate-200 max-w-[500px] m-auto text-primary animate-fade-up rounded-[20px]"}>¡Instalación Gratis!</p>
        </div>
        <Slider/>
      </FSection>
      <section id={'detalle'} className="relative md:mt-[70px]">
        <div
          className="bottom-0 left-[28vw] hidden md:block absolute chica"
        >
          <img
            src={'/girl.png'}
            width={300}
          />
        </div>
        <div className="flex flex-row max-w-[1100px] justify-between m-auto">
          <div className="md:block hidden w-[500px]">
          </div>
          <div className="mb-8 p-4">
            <p>Incluye router ONT y los precios incluyen IGV. La instalación del servicio tiene un costo de s/0</p>
            <p>Ver <span>Términos y condiciones</span></p>
          </div>
        </div>
        <div
          className="h-[120px] bg-primary flex py-6"
        >
          <div className="flex flex-row max-w-[1100px] justify-end w-full m-auto">
            <Link href={'tel:014187185'}>
              <img
                src={'/call.png'}
                width={190}
                height={50}
                className="cursor-pointer"
              /> 
            </Link>
            <Link href={'https://wa.me/51987182418?text= Hola quisiera información acerca de sus servicios'} target="_blank">
              <img
                src={'/whatsapp.png'}
                width={190}
                height={50}
                className="cursor-pointer"
              /> 
            </Link>
          </div>
        </div>
      </section>
      <FSection id={'beneficios'}>
        <h2 className="text-center text-primary font-bold text-3xl">Nuestros beneficios para tu hogar</h2>
        <div className="flex flex-row justify-around mt-10 flex-wrap ">
          <div className="w-[250px] h-[230px] border-primary border-4 rounded-3xl p-6 text-center mb-2">
            <img
              className={'m-auto'} 
              src={'/fibra-colored.png'}
              width={90}
              height={50}
            />
            <p className="font-bold text-primary text-xl">Internet<br/>100% fibra<br/>óptica</p>
          </div>
          <div className="w-[250px] h-[230px] border-primary border-4 rounded-3xl p-6 text-center mb-2">
            <img
              className={'m-auto'} 
              src={'/simetria-colored.png'}
              width={90}
              height={50}
            />
            <p className="font-bold text-primary text-xl">Internet<br/>ilimitado y<br/>simétrico</p>
          </div>
          <div className="w-[250px] h-[230px] border-primary border-4 rounded-3xl p-6 text-center mb-2">
            <img
              className={'m-auto mb-4'} 
              src={'/velocidad-colored.png'}
              width={90}
              height={50}
            />
            <p className="font-bold text-primary text-xl">Máxima<br/>velocidad</p>
          </div>
        </div>
      </FSection>
      <section id={'social-network'} className="max-w-[1100px] w-full m-auto pb-10 px-4">
        <h3 className={'text-center text-primary text-2xl mt-[-5px] mb-8'}>Síguenos en nuestras redes sociales</h3>
        <div className="flex flex-row flex-wrap items-center justify-center">
          { images.map((img, i) => (
            <Link 
              href={img.url} 
              className="mr-4 md:mr-6" 
              key={`social-${i}`}
					    target={img.url.includes('#') ? '_self' : '_blank'}
            
            >
              <img
                src={img.src}
                width={40}
                height={40}
              />
            </Link>
          ))}
        </div>
      </section>
      <section id={'terminos-condiciones'} className="max-w-[1100px] w-full m-auto pb-10">
        <h3 className={'text-center text-primary text-2xl mb-4'} >Términos y condiciones</h3>
        <Terms/>
      </section>
    </main>
  );
}
