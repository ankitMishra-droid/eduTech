import Image from "next/image";
import heroPara from "../../../assets/heroPara.svg"
import backWho from "../../../assets/images/Rectangle 591.png"
import frontWho from "../../../assets/images/Rectangle 592.png"
import playButton from "../../../assets/images/play (1) 1.png"
import circle from "../../../assets/images/circle.svg"
import right from "../../../assets/images/right.svg"
import halfCircle from "../../../assets/images/Ellipse 7.png"
import man from "../../../assets/images/man.png"
import women from "../../../assets/images/woman.png"
import Link from "next/link";
import { Button } from "@/components/ui/button";
import SliderComponent from "../_components/slider-component";
// import {OurTeam} from "../_components/our-team";

export default function Home() {
  return (
    <>
    {/* Hero section start */}
    <div className="md:container">
    <div className="mx-auto flex text-white flex-col md:flex-row md:items-center md:justify-center p-6">
      <div className="flex flex-col items-center lg:items-start w-full lg:w-2/4 mt-12">
          <h2 className="font text-4xl lg:text-5xl font-bold p-4 lg:p-0">Empowering Students <br /> with <span className="text-orange-500"> Their Most Vital <br /> Asset - Values </span>
          <span>
            <Image src={heroPara} alt=""/>
          </span>
        </h2>

          <p className="mt-16 text-base p-6 lg:p-0">
            At our core, we are dedicated to providing students with what they love the most: a harmonious blend of financial success and depth of their core values. We empower students to make money work for them while upholding their integrity and beliefs. Through mentorship and guidance, we foster a generation that excels financially without compromising their values
          </p>

          <Link href="/get-mentor">
            <Button size="lg" className="bg-orange-500 hover:bg-orange-500 gap-2 mt-10">
              Get Instant Mentor
            </Button>
          </Link>
      </div>
      <div className="flex flex-col justify-center align-middle items-center md:align-top md:items-start md:justify-start w-full lg:w-2/4 lg:ml-6 mt-12">
        Home
      </div>
    </div>
    </div>

    {/* Hero section end */}

    {/* Who we are section start */}
    <div className="mt-24 lg:h-[38rem] h-[55rem] w-full bg-[#000000]">
    <div className="mx-auto flex text-white flex-col md:container md:flex-row md:items-center w-full md:justify-center p-6">
      <div className="text-white flex flex-col">
        <div className="text-center m-auto">
          <h1 className="text-6xl md:mt-24 max-[290px]:mt-28">Who <span className="text-orange-500"> We are <span><Image alt="Image" src={heroPara} className="m-auto lg:ml-auto" width={200}/></span></span></h1>
        </div>
        <div className="flex flex-col lg:flex-row">
          <div className="flex flex-col justify-center items-center md:items-start align-middle w-full lg:w-2/4 lg:ml-6 mt-12">
            <div>
            <p className="text-sm font-normal lg:pr-12">
              Just like you, we have a dream too.Where we believe in the transformative power of core values. Our mission is to foster a generation of individuals who are not only skilled and knowledgeable but also grounded in strong values. We understand that success is not solely a product of knowledge and skills but also the result of positive habits, unwavering values, and the effective leveraging of your unique strengths.Through our mentorship programs, we aim to guide and empower students by helping them discover their core values and develop essential skills that will serve as a compass for both personal and career growth.Our team of dedicated mentors each with over 60 years of spiritual wisdom life experience, is here to provide you with guidance and support you need to foster a good life Together, we&apos;ll embark on a transformative journey towards a more purposeful, balanced and successful life of your extraordinary story.
            </p>
            </div>
          </div>
          <div className="flex flex-col items-center lg:items-start w-full p-2 md:p-0 lg:w-2/4 lg:ml-6 mt-12">
              <Image alt="whoweImage" src={backWho} className="absolute"/>
              <Link href="" className="lg:pt-28 lg:pl-44 pl-0 pr-16 pt-24">
                <Image alt="whoweImage" src={playButton} className="absolute z-10" width={88} height={88}/>
              </Link>
              <Image alt="whoweImage" src={frontWho} className="absolute"/>
          </div>
        </div>
      </div>
    </div>
    </div>
    {/* Who we are section end */}


    {/* what we offer section start */}

    <div className="md:container lg:mt-32 mt-32">
      <h1 className="text-white text-center max-[340px]:mt-96 text-6xl">What <span className="text-orange-500"> We Offer <span><Image alt="Image" src={heroPara} className="m-auto lg:ml-auto" width={200}/></span> </span></h1>
        <div className="relative">
          <div className="absolute -z-10 right-0 mt-16">
            <Image src={circle} alt="circle" className=""/>
          </div>
        </div>
        <div className="relative flex flex-row w-full mt-28">
          <div className="flex flex-col lg:flex-row">
          {/* card 1 */}
            <figure className="relative text-white md:flex mt-10 lg:w-2/6 h-full bg-[#18171A] rounded-xl p-8 md:p-0 mr-10 ml-10 lg:mr-0 lg:ml-0 dark:bg-slate-800 max-[360px]:ml-1 max-[360px]:mr-1">
              <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
              <h1 className="text-center text-3xl mb-10 font-bold text-orange-500">Financial Literacy</h1>
                <blockquote className="mt-20">
                <span><Image src={right} alt="right" className="absolute"/></span>
                  <p className="text-sm text-start font-medium lg:ml-6 ml-3">
                    <strong className="">Financial Education:</strong>Comprehensive learning<span>about personal finance and investment.</span>
                  </p>
                </blockquote>
                <blockquote className="mt-20">
                <span><Image src={right} alt="right" className="absolute"/></span>
                  <p className="text-sm text-start font-medium lg:ml-6 ml-3">
                    <strong className="">Budgeting and Money Management:</strong>Tools and strategies for effective financial planning.Retirement Planning: Guidance on securing your financial future.</p>
                </blockquote>
                <blockquote className="mt-20">
                <span><Image src={right} alt="right" className="absolute"/></span>
                  <p className="text-sm text-start font-medium lg:ml-6 ml-3">
                    <strong className="">Investment Strategies:</strong>Insights into various investment opportunities. Just as physical fitness leads to a healthier, more fulfilling life, financial fitness paves the way to a prosperous, worry-free future, where you&apos;re in control of your finances, and your money is your most reliable partner. From budgeting and investments to retirement planning, we empower you to make informed financial decisions.
                  </p>
                </blockquote>
                <figcaption className="font-medium">
                  <div className="text-orange-500 absolute lg:bottom-10 dark:text-orange-400">
                    <Link href='' className="border-b border-orange-600">view more</Link>
                  </div>
                </figcaption>
              </div>
            </figure>
            {/* card 1 */}

            {/* card 2 */}
            <figure className="relative text-white md:flex mt-10 lg:w-2/6 h-full bg-[#18171A] mr-10 ml-10 rounded-xl p-8 md:p-0 dark:bg-slate-800 max-[360px]:ml-1 max-[360px]:mr-1">
              <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
              <h1 className="text-center text-3xl mb-10 font-bold text-orange-500">Soul Science</h1>
                <blockquote className="mt-20">
                <span><Image src={right} alt="right" className="absolute"/></span>
                  <p className="text-sm text-start font-medium lg:ml-6 ml-3">
                    <strong className="">Values Clarification:</strong>Identifying and prioritizing core values.</p>
                </blockquote>
                <blockquote className="mt-20">
                <span><Image src={right} alt="right" className="absolute"/></span>
                  <p className="text-sm text-start font-medium lg:ml-6 ml-3">
                    <strong className="">Habit Formation:</strong>Cultivating positive habits for personal growth.</p>
                </blockquote>
                <blockquote className="mt-20">
                <span><Image src={right} alt="right" className="absolute"/></span>
                  <p className="text-sm font-medium lg:ml-6 ml-3 text-start">
                    <strong className="">Skills Enhancement:</strong> Learning and improving a wide range of competencies</p>
                </blockquote>
                <blockquote className="mt-20">
                <span><Image src={right} alt="right" className="absolute"/></span>
                  <p className="text-sm text-start font-medium lg:ml-6 ml-3">
                    <strong className="">Strengths Optimization:</strong> Leveraging personal strengths for success. <span className="text-orange-500"> &quot;Values-Driven Development:</span> Prioritize your values, cultivate positive habits, enhance skills, and leverage your strengths with our personal development services. Build a more purposeful and fulfilling life.&quot;
                  </p>
                </blockquote>
                <figcaption className="font-medium">
                  <div className="text-orange-500 absolute lg:bottom-10 dark:text-orange-400">
                    <Link href='' className="border-b border-orange-600">view more</Link>
                  </div>
                </figcaption>
              </div>
            </figure>
            {/* card 2 */}

            {/* card 3 */}
            <figure className="relative text-white md:flex mt-10 lg:w-2/6 h-full bg-[#18171A] rounded-xl p-8 md:p-0 mr-10 ml-10 lg:mr-0 lg:ml-0 dark:bg-slate-800 max-[360px]:ml-1 max-[360px]:mr-1">
              <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
              <h1 className="text-center text-3xl mb-10 font-bold text-orange-500">1:1 Mentorship</h1>
                <blockquote className="mt-20">
                <span><Image src={right} alt="right" className="absolute"/></span>
                  <p className="text-sm text-start font-medium lg:ml-6 ml-3">Know yourself through personalized test</p>
                </blockquote>
                <blockquote className="mt-20">
                <span><Image src={right} alt="right" className="absolute"/></span>
                  <p className="text-sm text-start font-medium lg:ml-6 ml-3">Get improvement plan for next 7 days</p>
                </blockquote>
                <blockquote className="mt-20">
                <span><Image src={right} alt="right" className="absolute"/></span>
                  <p className="text-sm text-start font-medium lg:ml-6 ml-3">Introduction with mentor with match making process of AI/ML</p>
                </blockquote>
                <blockquote className="mt-20">
                <span><Image src={right} alt="right" className="absolute"/></span>
                  <p className="text-sm text-start font-medium lg:ml-6 ml-3">Get Personalized development plan and the journey begins</p>
                </blockquote>
                <figcaption className="font-medium">
                  <div className="text-orange-500 absolute lg:bottom-10 dark:text-orange-400">
                    <Link href='' className="border-b border-orange-600">view more</Link>
                  </div>
                </figcaption>
              </div>
            </figure>

            {/* card-3 */}
          </div>
        </div>
        <div className="relative">
          <div className="absolute -z-10 left-0 -mt-24">
            <Image src={circle} alt="circle" className=""/>
          </div>
        </div>
    </div>
    {/* what we offer section end */}


    {/* testimonial section start */}

      <SliderComponent />

    {/* testimonial section end */}


    {/* Our Team Section start */}

    {/* <OurTeam /> */}

    {/* Our Team Section end */}
    </>
  )
}
