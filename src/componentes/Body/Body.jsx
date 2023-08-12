


const Body = () => {

    // Mostrar los productos filtrados en las cards
    return (
        <div className="container mx-auto p-4 ">
            <hr />

            <div className="flex flex-col justify-center items-center">
                <img className="w-11/12 h-64 mb-3.5" src="/public/samsung.jpg" alt="samsung" />
                <hr />
                <img className="w-11/12 h-64 mb-3.5" src="/public/iphone.jpg" alt="iphone" />
                <hr />
                <img className="w-11/12 h-64 mb-3.5" src="/public/motorola.jpg" alt="motorola" />
                <hr />
                <img className="w-11/12 h-64 mb-3.5" src="/public/huawei.png" alt="huawei" />
            </div>
        </div>
    );
};

export default Body
