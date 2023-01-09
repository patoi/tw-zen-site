import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
				<meta name="description" content="TailwindCSS Zen animation plugin" />
				<meta
					name="keywords"
					content="TailwindCSS plugin, animation, Tailwind animation, one page, one-page, Tailwind animation plugin"
				/>
				<link rel="icon" href="/favicon.ico" />
				<meta property="og:title" content="TailwindCSS Zen animation plugin" />
				<meta
					property="og:description"
					content="Beautiful, and simple animation plugin for TailwindCSS"
				/>
				<meta property="og:image" content="/tw-zen.png" />
			</Head>
      <body className="leading-normal tracking-normal text-slate-800">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
