import { FC } from 'react';

export const Footer: FC = () => {
    return (
        <div className="flex-none px-0 pt-4 w-full">
            <footer className="items-center p-4 footer bg-neutral text-neutral-content">
                <div className="items-center grid-flow-col">
                    <span className="text-lg font-bold px-4">
                     
                    </span>
                </div>
               
                <div className="grid-flow-col gap-4 md:place-self-center md:justify-self-end mr-4">
                    <div className=" justify-center items-center gap-x-1 hidden md:flex ">
                        <p className="text-white text-base font-light cursor-default ">
                            100 Turtles
                        </p>
                        <a
                            rel="noreferrer"
                            href="https://solana.com/"
                            target="_blank"
                            className="text-white text-base font-bold hover:text-primary-dark transition-all duration-200"
                        >
                            Solana
                        </a>
                    </div>
                </div>
            </footer>
        </div>
    );
};
