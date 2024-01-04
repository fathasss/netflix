import React, { useCallback, useEffect, useState } from 'react';
import Input from './input';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

interface SearchMenuProps {
    visible?: boolean;
    onClose: any;
}

const SearchMenu: React.FC<SearchMenuProps> = ({
    visible,
    onClose
}) => {

    const [isVisible, setIsVisible] = useState<boolean>(!!visible);
    const [word, setWord] = useState('');

    useEffect(() => {
        setIsVisible(!!visible);
    }, [visible]);

    const handleClose = useCallback(() => {
        setIsVisible(false);
        setTimeout(() => {
            onClose();
        }, 300);
    }, [onClose]);

    if (!visible) {
        return null;
    }

    return (
        <div onClick={handleClose} className="z-50 transition duration-300 bg-black bg-opacity-80 flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0">
            <div className="relative w-auto mx-auto max-w-3xl rounded-md overflow-hidden">
                <div className={`${isVisible ? 'scale-100' : 'scale-0'} transform duration-300 relative flex-auto bg-zinc-900 drop-shadow-md`}>

                    <div className="relative h-96 w-96">
                        <div className="w-10">
                            <Input
                                id="name"
                                type="text"
                                label="Search"
                                value={word}
                                onChange={(e: any) => setWord(e.target.value)}
                            />
                        </div>
                        <div className="text-gray-200 hover:text-gray-300 cursor-pointer transition">
                            <MagnifyingGlassIcon className="w-6" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SearchMenu;