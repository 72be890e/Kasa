function Banner({ img, content }) {
    return (
        <div className='banner' style={{ backgroundImage: `url("${img}")` }}>
            {content && <p className='banner-text'>{content}</p>}
        </div>
    );
}

export default Banner;
