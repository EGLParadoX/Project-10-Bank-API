const FeatureItemComponent = ({ icon, title, text }) => (
    <div className="feature-item">
      <img src={icon} alt={title} className="feature-icon" />
      <h3 className="feature-item-title">{title}</h3>
      <p>{text}</p>
    </div>
  );
  
  export default FeatureItemComponent;