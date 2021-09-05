const FeatureCard = ({ title, description, children }) => {
    return (
        <>
        {children}

        <div className="box">
            <h5><span className="cohostin">CoHostin</span> {title}</h5>
            <p>{description}</p>
            <a className="btn btn-outline btn-sm" href="services">Learn More</a>
        </div>

        </>
    );
}

export default FeatureCard;