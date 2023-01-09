import Head from 'next/head'
import GithubCorner from 'react-github-corner'
import { useEffect } from 'react'

export default function Home() {
  useEffect(() => {
    import('@patoi/tw-zen-plugin/init').then(twZenInit => {
      twZenInit.default()
    })
  }, [])
  return (
    <>
      <Head>
        <title>TW Zen - TailwindCSS Zen intersection animation plugin</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <div className="bg-gradient-to-b from-orange-400 to-orange-600 text-white">
          <div className="pt-12 pb-24">
            <div className="container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center">
              <div className="px-16 flex flex-col w-full md:w-3/4 text-center md:text-left z-10">
                <p className="uppercase tracking-loose w-full">
                  Simple Tailwind intersection
                </p>
                <h1 className="my-4 text-6xl font-bold leading-tight w-full">
                  TW Zen
                </h1>
                <p className="leading-normal text-3xl mb-8 w-full zen-fade zen-once">
                  Tailwind intersection animation plugin
                </p>
              </div>
            </div>
          </div>
          <div className="relative -mt-12 lg:-mt-24">
            <svg
              viewBox="0 0 1428 174"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <g
                  transform="translate(-2.000000, 44.000000)"
                  fill="#FFFFFF"
                  fillRule="nonzero"
                >
                  <path
                    d="M0,0 C90.7283404,0.927527913 147.912752,27.187927 291.910178,59.9119003 C387.908462,81.7278826 543.605069,89.334785 759,82.7326078 C469.336065,156.254352 216.336065,153.6679 0,74.9732496"
                    opacity="0.100000001"
                  ></path>
                  <path
                    d="M100,104.708498 C277.413333,72.2345949 426.147877,52.5246657 546.203633,45.5787101 C666.259389,38.6327546 810.524845,41.7979068 979,55.0741668 C931.069965,56.122511 810.303266,74.8455141 616.699903,111.243176 C423.096539,147.640838 250.863238,145.462612 100,104.708498 Z"
                    opacity="0.100000001"
                  ></path>
                  <path
                    d="M1046,51.6521276 C1130.83045,29.328812 1279.08318,17.607883 1439,40.1656806 L1439,120 C1271.17211,77.9435312 1140.17211,55.1609071 1046,51.6521276 Z"
                    id="Path-4"
                    opacity="0.200000003"
                  ></path>
                </g>
                <g
                  transform="translate(-4.000000, 76.000000)"
                  fill="#FFFFFF"
                  fillRule="nonzero"
                >
                  <path d="M0.457,34.035 C57.086,53.198 98.208,65.809 123.822,71.865 C181.454,85.495 234.295,90.29 272.033,93.459 C311.355,96.759 396.635,95.801 461.025,91.663 C486.76,90.01 518.727,86.372 556.926,80.752 C595.747,74.596 622.372,70.008 636.799,66.991 C663.913,61.324 712.501,49.503 727.605,46.128 C780.47,34.317 818.839,22.532 856.324,15.904 C922.689,4.169 955.676,2.522 1011.185,0.432 C1060.705,1.477 1097.39,3.129 1121.236,5.387 C1161.703,9.219 1208.621,17.821 1235.4,22.304 C1285.855,30.748 1354.351,47.432 1440.886,72.354 L1441.191,104.352 L1.121,104.031 L0.457,34.035 Z"></path>
                </g>
              </g>
            </svg>
          </div>
        </div>
        <section id="features" className="text-slate-600 pt-24">
          <div
            id="example"
            className="w-full max-md:p-4 md:w-2/3 lg:w-1/2 xl:w-1/3 m-auto"
          >
            <div className="text-center font-semibold font-mono p-12 bg-[#dedede] rounded-xl shadow-xl text-slate-600">
              &lt;<span>div </span>
              <span>class=</span>
              <span className="text-[#DD5000]">
                &quot;zen-once zen-pop-up&quot;
              </span>
              &gt;
            </div>
          </div>
          <div
            id="example"
            className="text-center w-full pt-8 max-md:p-4 md:w-2/3 lg:w-1/2 xl:w-1/3 m-auto"
          >
            <div id="readme" className='text-slate-500 text-sm'>
              Please see the <a href="https://github.com/patoi/tw-zen-plugin/blob/main/README.md" target="_blank" rel="noreferrer" className="underline underline-offset-2 decoration-orange-500 text-orange-500">README file</a> for more details
            </div>
          </div>
          <div className="text-left grid place-items-center md:grid-cols-2 gap-8 md:w-2/3 m-auto p-16 max-md:text-center">
            <div
              data-even
              className="md:pt-12 mt-auto mb-auto w-full sm:zen--off zen-pop-up zen-once"
            >
              <h3 className="text-4xl font-bold">Energy saving</h3>
              <span className="text-xl">
                Automatically suspends the animation, when element is not
                intersected.
              </span>
            </div>
            <div className="md:pt-16 w-3/4 max-md:hidden ">
              <img
                className="zen-once zen-from-right"
                src="/energy_saving.svg"
                alt="energy saving"
              />
            </div>
            <div data-odd className="md:pt-16 w-3/4 max-md:hidden">
              <img
                className="zen-once zen-from-left"
                src="/distraction_free.svg"
                alt="distraction free"
              />
            </div>
            <div className="pt-16 mt-auto mb-auto w-full sm:zen--off zen-pop-up zen-once">
              <h3 className="text-4xl font-bold">Distraction free</h3>
              <span className="text-xl">
                Turns off animations in reduced motion mode.
              </span>
            </div>
            <div
              data-even
              className="pt-16 mt-auto mb-auto w-full sm:zen--off zen-pop-up zen-once"
            >
              <h3 className="text-4xl font-bold">Responsive</h3>
              <span className="text-xl">
                Supports responsive design, you can use with Tailwind
                breakpoints.
              </span>
            </div>
            <div className="pt-16 w-3/4 max-md:hidden">
              <img
                className="zen-once zen-from-right"
                src="/responsive.svg"
                alt="responsive"
              />
            </div>
            <div data-odd className="pt-16 w-3/4 max-md:hidden">
              <img
                className="zen-once zen-pop-up"
                src="/simple.svg"
                alt="small and efficient"
              />
            </div>
            <div className="pt-16 pb-8 mt-auto mb-auto w-full sm:zen--off zen-pop-up zen-once">
              <h3 className="text-4xl font-bold">Efficient</h3>
              <span className="text-xl">
                There is no third-party dependency, it&apos;s small and
                efficient.
              </span>
            </div>
          </div>
        </section>
        <section
          id="foss"
          className="text-slate-600 p-20 flex flex-col justify-center bg-slate-100"
        >
          <div className="w-32 m-auto">
            <img
              className="drop-shadow-sm zen-spin-forever zen-pause"
              src="/opensource-icon.svg"
              alt="free and open source"
            />
          </div>
          <div className="pt-8 text-2xl drop-shadow-sm m-auto">
            Free and Open Source
          </div>
        </section>
        <GithubCorner
          bannerColor="#fff"
          octoColor="#F98B36"
          href="https://github.com/patoi/tw-zen-plugin"
        />
      </main>
    </>
  )
}
