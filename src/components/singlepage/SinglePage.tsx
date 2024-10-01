import axios from "axios";
import { FC, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

interface Products {
    images: string[];
    title: string;
    description: string;
    price: number;
}

const API_URL: string = "https://dummyjson.com/products/";
const SinglePage: FC = () => {
    const { proId } = useParams<{ proId: string }>();
    const [data, setData] = useState<Products | null>(null);

    const [url, setUrl] = useState<number>(0);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [proId]);

    useEffect(() => {
        axios
            .get(`${API_URL}${proId}`)
            .then((res) => setData(res.data))
            .catch((err) => console.log(err));
    }, [proId]);

    return (
        <section className="pt-12 pb-12 bg-[#1E73BE] min-h-screen">
            <div className="container mx-auto px-6 max-w-[1240px]">
                <div className="grid grid-cols-2 gap-x-4 border-x-2 items-center bg-[#538BBB]">
                    <div className="flex flex-row-reverse items-center">
                        <div>
                            <img
                                className="w-[500px] h-[500px] object-contain"
                                src={data?.images[url]}
                                alt=""
                            />
                        </div>
                        <div className="flex flex-col gap-y-3 ml-2">
                            {data.images.length > 1 &&
                                data?.images?.map((e, inx) => (
                                    <div
                                        onClick={() => setUrl(inx)}
                                        className="bg-[#1E73BE] border rounded-lg cursor-pointer">
                                        <img
                                            className="w-[120px] h-[120px] object-contain"
                                            key={inx}
                                            src={e}
                                        />
                                    </div>
                                ))}
                        </div>
                    </div>
                    <div>
                        <h3 className="text-3xl font-bold text-white mb-8">
                            {data?.title}
                        </h3>
                        <p className="text-xl text-neutral-200">
                            {data?.description}
                        </p>
                        <p className="text-5xl font-bold mt-8 text-yellow-500">
                            ${data?.price}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SinglePage;
