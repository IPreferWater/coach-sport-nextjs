import { InstagramIcon } from '@components/icons/instagram-icon'
import { FacebookIcon } from '@components/icons/facebook-icon'
import Link from 'next/link'


function Footer() {
    return (
        <footer className="bg-tana-black text-white">


            <div className="flex justify-between p-8">

                <nav className="flex flex-col">
                    <h1 className="text-center">Suivez moi</h1>
                    <div className="m-2 flex flex-row ">
                        <Link href={"https://www.instagram.com/gorilla_development/"}>
                            <a className="px-4" target="_blank">
                                <InstagramIcon />
                            </a>
                        </Link>

                        <Link href={"https://www.facebook.com/tanalucardbjj"}>
                            <a className="px-4" target="_blank">
                                <FacebookIcon />
                            </a>
                        </Link>
                    </div>
                </nav>

                <nav className="flex flex-col">
                    <h1 className="text-center">Contact</h1>
                    <div className="m-2 flex flex-row ">
                        <Link href="mailto:ou.santana@gmail.com">
                            <a className="px-4 text-4xl" target="_blank">
                            📧
                            </a>
                        </Link>
                    </div>
                </nav>
            </div>
        </footer>
    )
}

export default Footer;