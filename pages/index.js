import Head from 'next/head'
import GithubCorner from 'react-github-corner'
import { Inter } from '@next/font/google'
import { useEffect } from 'react'
const inter = Inter({ subsets: ['latin'] })

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
				<style jsx global>{`
					html {
						font-family: ${inter.style.fontFamily};
					}
				`}</style>
			</Head>
			<main>
				<div className="bg-gradient-to-b from-orange-400 to-orange-600 text-white">
					<svg
						className="absolute bottom-0 top-0 -m-24 z-0 opacity-10"
						xmlns="http://www.w3.org/2000/svg"
						version="1.1"
						width="108%"
						height="auto"
						preserveAspectRatio="none"
						viewBox="0 0 1920 1080"
					>
						<g fill="none">
							<path
								d="M -206.09811234899564,257 C -62.1,296.2 225.9,462.6 513.9018876510044,453 C 801.9,443.4 945.9,210.6 1233.9018876510045,209 C 1521.9,207.4 1912.68,457.4 1953.9018876510045,445 C 1995.12,432.6 1542.78,206.6 1440,147"
								stroke="rgba(255, 255, 255, 0.58)"
								stroke-width="2"
							></path>
							<path
								d="M -493.52285808431793,353 C -349.52,308.4 -61.52,128.4 226.4771419156821,130 C 514.48,131.6 658.48,368.4 946.4771419156821,361 C 1234.48,353.6 1567.77,70.2 1666.477141915682,93 C 1765.18,115.8 1485.3,398.6 1440,475"
								stroke="rgba(255, 255, 255, 0.58)"
								stroke-width="2"
							></path>
							<path
								d="M -419.3007908186045,305 C -275.3,266 12.7,86 300.6992091813955,110 C 588.7,134 732.7,430.8 1020.6992091813954,425 C 1308.7,419.2 1656.84,85.8 1740.6992091813954,81 C 1824.56,76.2 1500.14,337 1440,401"
								stroke="rgba(255, 255, 255, 0.58)"
								stroke-width="2"
							></path>
							<path
								d="M -878.1897502801864,472 C -734.19,403.4 -446.19,146.6 -158.18975028018642,129 C 129.81,111.4 273.81,361.6 561.8102497198136,384 C 849.81,406.4 1106.17,220.8 1281.8102497198136,241 C 1457.45,261.2 1408.36,436.2 1440,485"
								stroke="rgba(255, 255, 255, 0.58)"
								stroke-width="2"
							></path>
							<path
								d="M -1051.564200032299,268 C -907.56,300.8 -619.56,456.2 -331.56420003229886,432 C -43.56,407.8 100.44,150 388.43579996770114,147 C 676.44,144 898.12,408.2 1108.435799967701,417 C 1318.75,425.8 1373.69,236.2 1440,191"
								stroke="rgba(255, 255, 255, 0.58)"
								stroke-width="2"
							></path>
							<path
								d="M -931.7845923953671,300 C -787.78,265 -499.78,118.4 -211.78459239536707,125 C 76.22,131.6 220.22,305.6 508.2154076046329,333 C 796.22,360.4 1041.86,246.4 1228.215407604633,262 C 1414.57,277.6 1397.64,381.2 1440,411"
								stroke="rgba(255, 255, 255, 0.58)"
								stroke-width="2"
							></path>
							<path
								d="M -1197.0327731029518,191 C -1053.03,240.8 -765.03,459.6 -477.0327731029517,440 C -189.03,420.4 -45.03,85.8 242.9672268970483,93 C 530.97,100.2 723.56,464.6 962.9672268970482,476 C 1202.37,487.4 1344.59,215.2 1440,150"
								stroke="rgba(255, 255, 255, 0.58)"
								stroke-width="2"
							></path>
							<path
								d="M -1123.8311106835297,83 C -979.83,148.4 -691.83,395.2 -403.83111068352963,410 C -115.83,424.8 28.17,140.4 316.16888931647037,157 C 604.17,173.6 811.4,510 1036.1688893164703,493 C 1260.94,476 1359.23,156.2 1440,72"
								stroke="rgba(255, 255, 255, 0.58)"
								stroke-width="2"
							></path>
							<path
								d="M -803.476957675267,131 C -659.48,163.4 -371.48,287.6 -83.47695767526703,293 C 204.52,298.4 348.52,132.6 636.523042324733,158 C 924.52,183.4 1195.83,429.2 1356.523042324733,420 C 1517.22,410.8 1423.3,173.6 1440,112"
								stroke="rgba(255, 255, 255, 0.58)"
								stroke-width="2"
							></path>
						</g>
					</svg>
					<div className="pt-12 pb-24">
						<div className="container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center">
							<div className="px-16 flex flex-col w-full md:w-3/4 text-center md:text-left z-10">
								<p className="uppercase tracking-loose w-full">Simple Tailwind intersection</p>
								<h1 className="my-4 text-6xl font-bold leading-tight w-full">TW Zen</h1>
								<p className="leading-normal text-2xl mb-8 w-full zen-fade zen-once">
									Tailwind intersection animation plugin
								</p>
							</div>
						</div>
					</div>
					<div className="relative -mt-12 lg:-mt-24">
						<svg viewBox="0 0 1428 174" version="1.1" xmlns="http://www.w3.org/2000/svg">
							<g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
								<g transform="translate(-2.000000, 44.000000)" fill="#FFFFFF" fillRule="nonzero">
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
								<g transform="translate(-4.000000, 76.000000)" fill="#FFFFFF" fillRule="nonzero">
									<path d="M0.457,34.035 C57.086,53.198 98.208,65.809 123.822,71.865 C181.454,85.495 234.295,90.29 272.033,93.459 C311.355,96.759 396.635,95.801 461.025,91.663 C486.76,90.01 518.727,86.372 556.926,80.752 C595.747,74.596 622.372,70.008 636.799,66.991 C663.913,61.324 712.501,49.503 727.605,46.128 C780.47,34.317 818.839,22.532 856.324,15.904 C922.689,4.169 955.676,2.522 1011.185,0.432 C1060.705,1.477 1097.39,3.129 1121.236,5.387 C1161.703,9.219 1208.621,17.821 1235.4,22.304 C1285.855,30.748 1354.351,47.432 1440.886,72.354 L1441.191,104.352 L1.121,104.031 L0.457,34.035 Z"></path>
								</g>
							</g>
						</svg>
					</div>
				</div>
				<section id="features" className="text-slate-600 pt-24">
					<div id="example" className="w-full max-md:p-4 md:w-2/3 lg:w-1/2 xl:w-1/3 m-auto">
						<div className="text-center font-normal font-mono p-12 bg-[#1E293B] rounded-xl shadow-xl">
							&lt;<span className="text-blue-400">div </span>
							<span className="text-blue-400">class=</span>
							<span className="text-[#EE6718]">&quot;zen-once zen-pop-up&quot;</span>&gt;
						</div>
					</div>
					<h2 className="uppercase font-extrabold text-3xl text-center pt-24">Features</h2>
					<div className="text-left grid place-items-center md:grid-cols-2 gap-8 md:w-2/3 m-auto p-16 max-md:text-center">
						<div data-even className="mt-auto mb-auto w-full sm:zen--off zen-pop-up">
							<h3 className="text-xl font-bold">Energy saving</h3>
							<span>Automatically suspends the animation, when element is not intersected.</span>
						</div>
						<div className="w-3/4 max-md:hidden ">
							<img className="zen-once zen-from-right" src="/energy_saving.svg" alt="energy saving" />
						</div>
						<div data-odd className="md:pt-12 w-3/4 max-md:hidden">
							<img className="zen-once zen-from-left" src="/distraction_free.svg" alt="distraction free" />
						</div>
						<div className="mt-auto mb-auto w-full sm:zen--off zen-pop-up">
							<h3 className="text-xl font-bold">Distraction free</h3>
							<span>Turns off animations in reduced motion mode.</span>
						</div>
						<div data-even className="md:pt-12 mt-auto mb-auto w-full sm:zen--off zen-pop-up">
							<h3 className="text-xl font-bold">Responsive</h3>
							<span>Supports responsive design, you can use with Tailwind breakpoints.</span>
						</div>
						<div className="w-3/4 max-md:hidden">
							<img className="zen-once zen-from-right" src="/responsive.svg" alt="responsive" />
						</div>
						<div data-odd className="md:pt-12 w-3/4 max-md:hidden">
							<img className="zen-once zen-pop-up" src="/simple.svg" alt="small and efficient" />
						</div>
						<div className="mt-auto mb-auto w-full sm:zen--off zen-pop-up">
							<h3 className="text-xl font-bold">Simple and efficient</h3>
							<span>There is no third-party dependency, it`&apos;s small and efficient.</span>
						</div>
					</div>
				</section>
				<section id="foss" className="text-slate-600 p-16 flex flex-col justify-center bg-slate-100">
					<div className="w-24 m-auto">
						<img className="drop-shadow-sm zen-spin-forever zen-pause" src="/opensource-icon.svg" alt="free and open source" />
					</div>
					<div className="drop-shadow-sm pt-3 m-auto">Free and Open Source</div>
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
