import sandwiches from './../../sandwiches.json'
import { Navigation, Pagination, } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import './FoodMenu.css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'


export default function FoodMenu() {
    return (
        <div className="foodMenu--container" id="foodMenu" data-aos="fade-up">
            <h1>Nossos lanches</h1>

            <div className="foodMenu--slide">
                <Swiper
                    modules={[Navigation, Pagination,]}
                    navigation
                    pagination={{ clickable: true }}
                    scrollbar={{ draggable: true }}
                    spaceBetween={50}
                    slidesPerView={1}
                    style={{
                        "--swiper-pagination-color": "#a00606",
                        "--swiper-navigation-color": "#a00606",
                    }}
                >
                    <SwiperSlide>

                        <section className="swiper--slideContainer">
                            <ul>
                                <h2>Hamburguers</h2>
                                {sandwiches.hamburgers.map((sandwich) => {
                                    return (
                                        <li key={sandwich.id}>
                                            <section>{sandwich.id}</section>
                                            <div>
                                                <h3>{sandwich.name}</h3>
                                                <p>{sandwich.ingredients.join(", ")}</p>

                                            </div>

                                            <aside className="lanchePrice--aside">
                                                <p>{sandwich.price}</p>
                                            </aside>


                                        </li>
                                    )
                                })}
                            </ul>


                        </section>
                    </SwiperSlide>
                    <SwiperSlide>

                        <section className="swiper--slideContainer">
                            <ul>
                                <h2>Filé de Frango</h2>
                                {sandwiches.frango.map((sandwich) => {
                                    return (
                                        <li key={sandwich.id}>
                                            <section>{sandwich.id}</section>
                                            <div>
                                                <h3>{sandwich.name}</h3>
                                                <p>{sandwich.ingredients.join(", ")}</p>
                                            </div>

                                            <aside className="lanchePrice--aside">
                                                <p>{sandwich.price}</p>
                                            </aside>
                                        </li>
                                    )
                                })}
                            </ul>
                        </section>

                    </SwiperSlide>
                    <SwiperSlide>
                        <section className="swiper--slideContainer">

                            <ul>
                                <h2>Lombo</h2>
                                {sandwiches.lombo.map((sandwich) => {
                                    return (
                                        <li key={sandwich.id}>
                                            <section>{sandwich.id}</section>
                                            <div>
                                                <h3>{sandwich.name}</h3>
                                                <p>{sandwich.ingredients.join(", ")}</p>
                                            </div>

                                            <aside className="lanchePrice--aside">
                                                <p>{sandwich.price}</p>
                                            </aside>
                                        </li>
                                    )
                                })}
                            </ul>
                        </section>

                    </SwiperSlide>
                    <SwiperSlide>

                        <section className="swiper--slideContainer">
                            <ul>
                                <h2>Churrasquinho</h2>
                                {sandwiches.churrasquinho.map((sandwich) => {
                                    return (
                                        <li key={sandwich.id}>
                                            <section>{sandwich.id}</section>
                                            <div>
                                                <h3>{sandwich.name}</h3>
                                                <p>{sandwich.ingredients.join(", ")}</p>
                                            </div>

                                            <aside className="lanchePrice--aside">
                                                <p>{sandwich.price}</p>
                                            </aside>
                                        </li>
                                    )
                                })}
                            </ul>
                        </section>

                    </SwiperSlide>
                    <SwiperSlide>
                        <section className="swiper--slideContainer">

                            <ul>
                                <h2>Calabresa</h2>
                                {sandwiches.calabresa.map((sandwich) => {
                                    return (
                                        <li key={sandwich.id}>
                                            <section>{sandwich.id}</section>
                                            <div>
                                                <h3>{sandwich.name}</h3>
                                                <p>{sandwich.ingredients.join(", ")}</p>
                                            </div>

                                            <aside className="lanchePrice--aside">
                                                <p>{sandwich.price}</p>
                                            </aside>
                                        </li>
                                    )
                                })}
                            </ul>
                        </section>

                    </SwiperSlide>
                    <SwiperSlide>

                        <section className="swiper--slideContainer">
                            <ul>
                                <h2>Mignon</h2>
                                {sandwiches.mignon.map((sandwich) => {
                                    return (
                                        <li key={sandwich.id}>
                                            <section>{sandwich.id}</section>
                                            <div>
                                                <h3>{sandwich.name}</h3>
                                                <p>{sandwich.ingredients.join(", ")}</p>
                                            </div>

                                            <aside className="lanchePrice--aside">
                                                <p>{sandwich.price}</p>
                                            </aside>
                                        </li>
                                    )
                                })}
                            </ul>
                        </section>

                    </SwiperSlide>
                    <SwiperSlide>

                        <section className="swiper--slideContainer">
                            <ul>
                                {sandwiches.others.map((sandwich) => {
                                    return (
                                        <li key={sandwich.id}>
                                            <section>{sandwich.id}</section>
                                            <div>
                                                <h3>{sandwich.name}</h3>
                                                <p>{sandwich.ingredients.join(", ")}</p>
                                            </div>

                                            <aside className="lanchePrice--aside">
                                                <p>{sandwich.price}</p>
                                            </aside>
                                        </li>
                                    )
                                })}
                            </ul>
                        </section>

                    </SwiperSlide>
                    <SwiperSlide>

                        <section className="swiper--slideContainer">
                            <ul>
                                <h2>Hot Dog</h2>
                                {sandwiches.hotDogs.map((sandwich) => {
                                    return (
                                        <li key={sandwich.id}>
                                            <section>{sandwich.id}</section>
                                            <div>
                                                <h3>{sandwich.name}</h3>
                                                <p>{sandwich.ingredients.join(", ")}</p>
                                            </div>

                                            <aside className="lanchePrice--aside">
                                                <p>{sandwich.price}</p>
                                            </aside>
                                        </li>
                                    )
                                })}
                            </ul>
                        </section>

                    </SwiperSlide>
                </Swiper>
            </div>


        </div>
    )
}