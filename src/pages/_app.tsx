import { AnimatePresence } from 'framer-motion'
import '@/styles/globals.css';
import '@/styles/styles.scss';
import Navbar from '@/components/Navbar';


 
// If loading a variable font, you don't need to specify the font weight


export default function App({ Component, pageProps, router }: { Component: React.ComponentType<any>; pageProps: any; router: any }) {
    return (
        <div className='main'>
            <Navbar />
            <AnimatePresence mode='wait'>
                <Component key={router.route} {...pageProps} />
            </AnimatePresence>
        </div>
    )
}
