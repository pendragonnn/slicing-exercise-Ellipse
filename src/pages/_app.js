import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return(
  <div className='font-poppins'>
    <Component {...pageProps} />
  </div>
  )
}
