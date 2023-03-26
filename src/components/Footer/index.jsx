import './Footer.css'
import phoneCallIcon from '../../assets/phone-call.png'
import whatsappIcon from '../../assets/whatsapp.png'
import instagramIcon from '../../assets/instagram.png'

export default function Footer() {
    const currentYear = new Date().getFullYear()

    return (
        <div className="footer--container" id="footer" data-aos="fade-up">
            <h1>Venha nos visitar</h1>
            <section className="footer--bannerMaps">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d229.96287031547433!2d-47.63213004631303!3d-22.75031218277103!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c6304247a161f9%3A0x120849e2a5bed5af!2sR.%20Jos%C3%A9%20Vicente%20Pedreira%2C%201555%20-%20Jardim%20Caxambu%2C%20Piracicaba%20-%20SP%2C%2013425-010!5e0!3m2!1spt-PT!2sbr!4v1679452868206!5m2!1spt-PT!2sbr" width="800" height="600" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </section>
            <section className="footer--socialIcons">
                <span>
                    <img src={phoneCallIcon} alt="" />
                    <p>(19) 98219-2641</p>
                </span>
                <span>
                    <a href="https://wa.me/19982192641" rel="external" target="_blank"><img src={whatsappIcon} alt="" /></a>
                    <p>
                        <a href="https://wa.me/19982192641" rel="external" target="_blank">
                            (19) 98219-2641
                        </a>
                    </p>
                </span>
                <span>
                    <a href="https://www.instagram.com/magnificos.lanchess/" rel="external" target="_blank"><img src={instagramIcon} alt="" /></a>
                    <p>
                        <a href="https://www.instagram.com/magnificos.lanchess/" rel="external" target="_blank">
                            @magnificos.lanches
                        </a>
                    </p>
                </span>

                <span>Website developed by Gabriel Andreoni. All rights reserved. &copy;{`${currentYear}`}</span>

            </section>
        </div>
    )
}