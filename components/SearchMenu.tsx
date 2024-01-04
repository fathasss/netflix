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
        <div onClick={handleClose} className="bg-black w-56 absolute top-14 right-0 py-5 flex-col border-2 border-gray-800 flex">
            <div className="flex flex-col gap-3">
                <div className="px-3 group/item flex flex-row gap-3 items-center w-full">
                    <input
                        className='bg-zinc-900 text-white'
                        type="text"
                        placeholder="Film veya dizi ara..."
                        value={word}
                        onChange={(e: any) => setWord(e.target.value)}
                    />
                </div>
            </div>
        </div>
    );
}

export default SearchMenu;