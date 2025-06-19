
const Footer = () => {
  
    return (
        <div>
            <footer className="flex w-full bg-gradient-to-t from-sky-500 to-indigo-500 shadow-2xl">
                <div className="flex justify-center w-full  max-w-screen-lg mx-auto px-4 py-2">
                    <a
                        className="flex items-center hover:underline hover:underline-offset-4 text-sm lg:text-xl font-black"
                        href="https://pspu.ru/?ysclid=m7oi0pn5dt184634939"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Перейти на сайт университета →
                    </a>
                </div>
            </footer>

           
        </div>
    );
};

export default Footer;
