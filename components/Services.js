export default function Services({ divStyle, titleStyle, pStyle }) {
  return (
    <div className={divStyle}>
      <h3 className={titleStyle}>SERVICES</h3>
      <p className={pStyle}>Website design</p>
      <p className={pStyle}>Mobile application design</p>
      <p>UX Research</p>
      <p>Branding design</p>
    </div>
  );
}
