export default function Body() {
    return (
        <main className="border-b-2 py-5">
            <div className="grid grid-cols-3 grid-rows-2 gap-4">
                <div className="shadow-lg p-5 items-center rounded-lg border-1 border-gray-100">
                    <h2 className="text-lg font-bold mb-3 ">
                        Total Amount Funding
                    </h2>
                    <p>
                        <strong className="font-bold text-black text-2xl">
                            100
                        </strong>{" "}
                        ETH
                    </p>
                </div>

                <div className="col-span-2 shadow-xl p-5 items-center rounded-lg border-1 border-gray-100">
                    <h2 className="text-lg font-bold mb-3">Donate your ETH</h2>
                    <input
                        type="text"
                        placeholder="Enter amount in ETH"
                        className="border-2 border-gray-500 p-2 rounded-lg mr-3"
                    />
                    <button className="bg-gray-500 hover:bg-black text-white font-bold py-2 px-4 rounded-xl transition-all">
                        Fund
                    </button>
                </div>

                <div className=" shadow-xl p-5 items-center rounded-lg border-1 border-gray-100">
                    <h2 className="text-lg font-bold mb-3">Funder</h2>
                    <p className="text-black text-2xl font-bold">15</p>
                </div>
            </div>
        </main>
    );
}
