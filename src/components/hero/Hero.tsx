import axios from "axios";
import { FC, useEffect, useState } from "react";
import { Link } from "react-router-dom";

interface Products {
    id: number;
    title: string;
    images: string;
    price: number;
}

const API_URL: string = "https://dummyjson.com/products/";

const Hero: FC = () => {
    const [data, setData] = useState<Products[] | null>(null);

    useEffect(() => {
        axios
            .get(API_URL)
            .then((res) => setData(res.data.products))
            .catch((err) => console.log(err));
    }, []);

    const Item = data?.map((product) => (
        <li
            className="bg-[#538BBB] border-y-2 pb-5 hover:animate-pulse"
            key={product.id}>
            <div className="flex rounded-lg h-[280px] items-center justify-center">
                <Link to={`products/${product.id}`}>
                    <img
                        className="w-[240px] h-[240px] object-contain"
                        src={product.images[0]}
                        alt=""
                    />
                </Link>
            </div>
            <div className="w-full px-5">
                <h3 className="text-xl text-white font-semibold text-center mt-4">
                    {product.title}
                </h3>
                <p className="text-3xl font-bold text-blue-950 mt-3">
                    ${product.price}
                </p>
            </div>
        </li>
    ));
    return (
        <section className="pt-10 bg-[#1E73BE]">
            <div className="container mx-auto px-6 max-w-[1240px]">
                <div>
                    <ul className="grid grid-cols-4 gap-x-5 gap-y-6">{Item}</ul>
                </div>
            </div>
        </section>
    );
};

export default Hero;
