import Image from 'next/image';

export default function ImageCard({ imgUrl, imgName }) {
    return (
        <div>
            <Image 
                src={imgUrl}
                alt={imgName}
            />
        </div>
    );
}