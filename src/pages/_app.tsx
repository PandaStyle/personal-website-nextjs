import type { AppProps } from 'next/app'
import { AnimatePresence } from 'framer-motion'
import '@/styles/globals.css';
import '@/styles/styles.scss';
import Navbar from '@/components/Navbar';


 
// If loading a variable font, you don't need to specify the font weight


export default function App({ Component, pageProps, router }: AppProps) {
    return (
        <div className='main'>
            <Navbar />
            <AnimatePresence mode='wait'>
                <Component key={router.route} {...pageProps} />
            </AnimatePresence>
        </div>
    )
}
