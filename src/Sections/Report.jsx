function Report() {
    return (
        <div className="bg-white mx-20 my-10 rounded-xl p-6 ml-72" style={{ height: '80vh', overflow: 'hidden' }}>
            <h1 className="text-2xl text-gray-600 font-inter font-bold mb-4">
                Monthly Report
            </h1>             <iframe
                src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQJzVzDDnl7c2LmY1wGNFWaiMiO5X5kwX1IzpddT07CIiUiIz0xmnLGEyqRE7t3IM4p6GNczmptczbD/pubhtml?gid=722246277&amp;single=true&amp;widget=true&amp;headers=false"
                width="100%"
                height="100%" // Set the height to 100%
                style={{ overflow: 'hidden' }} // This line hides the scrollbar
            ></iframe>
        </div>
    );
}

export default Report;
