import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
				<meta name="description" content="Tailwind Zen intersection animation plugin" />
				<meta
					name="keywords"
					content="TailwindCSS plugin, animation, Tailwind animation, one page, one-page, Tailwind animation plugin, intersection, javascript, react, svelte, next.js, svelte, sveltekit"
				/>
				<link rel="icon" href="/favicon.ico" />
				<meta property="og:title" content="Tailwind Zen intersection animation plugin" />
				<meta
					property="og:description"
					content="Beautiful, and simple intersection animation plugin for Tailwind"
				/>
				<meta property="og:image" content="https://tw-zen-site.vercel.app/tw-zen.png" />
			</Head>
      <body className="leading-normal tracking-normal text-slate-800">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
