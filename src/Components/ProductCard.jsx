import download from '../assets/download.png';
import star from '../assets/star.png';

const ProductCard = ({ product }) => {
    const { image, title, downloads, ratingAvg } = product

    return (
        <div className="card w-86 pt-5 shadow-sm hover:scale-105 transition ease-in-out">
  <figure className='h-[316px] overflow-hidden'>
    <img className='w-[300px] object-cover rounded-[12px]'
      src={image} />
  </figure>
  <div className="card-body">
    <h2 className="card-title mb-[16px]">{title}</h2>
    <div className="card-actions justify-between">
      <div className="badge bg-[#F1F5E8] text-[#00D390] font-medium px-2 rounded"><img src={download} alt="" /> {downloads}</div>
      <div className="badge bg-[#FFF0E1] text-[#FF8811] font-medium px-2 rounded"><img src={star} alt="" /> {ratingAvg}</div>
    </div>
  </div>
</div>
    );
};

export default ProductCard;