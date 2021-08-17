export default function Biography({
  divStyle,
  titleStyle,
  firstPStyle,
  secondPStyle,
}) {
  return (
    <div className={divStyle}>
      <h3 className={titleStyle}>BIOGRAPHY</h3>
      <p className={firstPStyle}>
        Hi there! Nice to meet you. I’m Juanpi, a UX/UI & Graphic Designer based
        in Argentina.
      </p>
      <p className={secondPStyle}>
        Football lover and appasionate about user-centered design
      </p>
    </div>
  );
}
